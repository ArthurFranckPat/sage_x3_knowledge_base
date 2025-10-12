export interface FormattedError {
  message: string
  category: ErrorCategory
  context: string | null
  suggestions: string[]
  originalError: string
}

export type ErrorCategory = 'function' | 'syntax' | 'column' | 'table' | 'unknown'

export default class SqlErrorFormatter {
  /**
   * Formate une erreur SQL pour la rendre lisible
   */
  format(error: Error, sql: string): FormattedError {
    const originalMessage = error.message

    // Extraire le message d'erreur technique (sans la requête)
    const cleanMessage = this.extractErrorMessage(originalMessage)

    // Catégoriser l'erreur
    const category = this.categorizeError(cleanMessage)

    // Extraire le contexte (quelques lignes autour de l'erreur)
    const context = this.extractContext(sql, originalMessage)

    // Obtenir des suggestions basées sur le type d'erreur
    const suggestions = this.getSuggestions(cleanMessage, sql, category)

    return {
      message: cleanMessage,
      category,
      context,
      suggestions,
      originalError: originalMessage,
    }
  }

  /**
   * Extrait uniquement le message d'erreur (sans la requête SQL)
   */
  private extractErrorMessage(fullMessage: string): string {
    // Cas SQLite : "near X: syntax error"
    const nearMatch = fullMessage.match(/near "([^"]+)": (.+)/)
    if (nearMatch) {
      return `Erreur de syntaxe près de "${nearMatch[1]}"`
    }

    // Cas fonction : "wrong number of arguments to function X()"
    const funcMatch = fullMessage.match(/wrong number of arguments to function (\w+)/i)
    if (funcMatch) {
      return `Nombre d'arguments incorrect pour la fonction ${funcMatch[1]}()`
    }

    // Cas fonction inconnue : "no such function: X"
    const noFuncMatch = fullMessage.match(/no such function: (\w+)/i)
    if (noFuncMatch) {
      return `Fonction inconnue : ${noFuncMatch[1]}()`
    }

    // Cas colonne inconnue : "no such column: X"
    const noColMatch = fullMessage.match(/no such column: (\w+)/i)
    if (noColMatch) {
      return `Colonne inconnue : ${noColMatch[1]}`
    }

    // Cas table inconnue : "no such table: X"
    const noTableMatch = fullMessage.match(/no such table: (\w+)/i)
    if (noTableMatch) {
      return `Table inconnue : ${noTableMatch[1]}`
    }

    // Par défaut, nettoyer et retourner le message
    // Supprimer la requête SQL du message si elle y est
    let cleaned = fullMessage

    // Si le message contient "SELECT" ou "WITH", probablement la requête est incluse
    if (cleaned.includes('SELECT') || cleaned.includes('WITH')) {
      // Essayer de trouver où se termine la requête (avant " - ")
      const dashIndex = cleaned.lastIndexOf(' - ')
      if (dashIndex > -1) {
        cleaned = cleaned.substring(dashIndex + 3)
      }
    }

    return cleaned.replace(/\s+/g, ' ').trim()
  }

  /**
   * Catégorise l'erreur pour mieux cibler les suggestions
   */
  private categorizeError(message: string): ErrorCategory {
    if (/function/i.test(message)) return 'function'
    if (/syntax|near/i.test(message)) return 'syntax'
    if (/column/i.test(message)) return 'column'
    if (/table/i.test(message)) return 'table'
    return 'unknown'
  }

  /**
   * Extrait le contexte autour de l'erreur (3-5 lignes)
   */
  private extractContext(sql: string, errorMessage: string): string | null {
    // Essayer de trouver la fonction/mot problématique dans le message
    let problematicTerm: string | null = null

    // Extraire le terme de différents patterns d'erreur
    const patterns = [
      /function (\w+)/i,
      /near "([^"]+)"/i,
      /column: (\w+)/i,
      /table: (\w+)/i,
    ]

    for (const pattern of patterns) {
      const match = errorMessage.match(pattern)
      if (match) {
        problematicTerm = match[1]
        break
      }
    }

    if (!problematicTerm) {
      // Pas de terme identifié, retourner juste les premières lignes
      const lines = sql.split('\n').slice(0, 5)
      return lines.map((l, i) => `  ${i + 1}: ${l}`).join('\n')
    }

    // Trouver la ligne contenant le terme problématique
    const lines = sql.split('\n')
    let errorLineIndex = -1

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(problematicTerm.toLowerCase())) {
        errorLineIndex = i
        break
      }
    }

    if (errorLineIndex === -1) {
      // Terme non trouvé, retourner premières lignes
      return lines.slice(0, 5).map((l, i) => `  ${i + 1}: ${l}`).join('\n')
    }

    // Extraire 2 lignes avant et 2 lignes après
    const start = Math.max(0, errorLineIndex - 2)
    const end = Math.min(lines.length, errorLineIndex + 3)

    return lines
      .slice(start, end)
      .map((l, i) => {
        const lineNum = start + i + 1
        const marker = lineNum === errorLineIndex + 1 ? '→' : ' '
        return `${marker} ${lineNum}: ${l}`
      })
      .join('\n')
  }

  /**
   * Génère des suggestions basées sur le type d'erreur
   */
  private getSuggestions(message: string, sql: string, category: ErrorCategory): string[] {
    const suggestions: string[] = []

    switch (category) {
      case 'function':
        suggestions.push(...this.getFunctionSuggestions(message, sql))
        break
      case 'syntax':
        suggestions.push(...this.getSyntaxSuggestions(message, sql))
        break
      case 'column':
        suggestions.push(...this.getColumnSuggestions(message, sql))
        break
      case 'table':
        suggestions.push(...this.getTableSuggestions(message, sql))
        break
      default:
        suggestions.push('Vérifiez la syntaxe de votre requête SQL')
    }

    return suggestions
  }

  /**
   * Suggestions pour les erreurs de fonction
   */
  private getFunctionSuggestions(message: string, sql: string): string[] {
    const suggestions: string[] = []

    // Détecter TRUNC
    if (/TRUNC/i.test(message) || /TRUNC/i.test(sql)) {
      suggestions.push("TRUNC() en SQLite n'accepte qu'un seul argument (nombre)")
      suggestions.push(
        "Pour tronquer des dates : utilisez DATE() avec modificateurs (ex: DATE(col, 'start of month'))"
      )
    }

    // Détecter ADD_MONTHS
    if (/ADD_MONTHS/i.test(message) || /ADD_MONTHS/i.test(sql)) {
      suggestions.push("ADD_MONTHS() n'existe pas en SQLite")
      suggestions.push("Utilisez : DATE(colonne, '+N months') ou DATE(colonne, '-N months')")
    }

    // Détecter NVL
    if (/NVL/i.test(message) || /NVL/i.test(sql)) {
      suggestions.push("NVL() n'existe pas en SQLite")
      suggestions.push('Utilisez COALESCE() ou IFNULL() à la place')
    }

    // Suggestions générales pour fonctions
    if (suggestions.length === 0) {
      suggestions.push('Vérifiez que le nom de la fonction est correct')
      suggestions.push('Vérifiez le nombre et le type des arguments passés à la fonction')
    }

    // Ajouter suggestion de traduction Oracle
    if (
      /TRUNC|ADD_MONTHS|NVL|SYSDATE/i.test(sql) &&
      !suggestions.some((s) => s.includes('Traduction'))
    ) {
      suggestions.push(
        '💡 Syntaxe Oracle détectée - Une traduction automatique vers SQLite est disponible'
      )
    }

    return suggestions
  }

  /**
   * Suggestions pour les erreurs de syntaxe
   */
  private getSyntaxSuggestions(message: string, sql: string): string[] {
    const suggestions: string[] = []

    suggestions.push('Vérifiez les parenthèses, virgules et guillemets')
    suggestions.push('Vérifiez que toutes les clauses (FROM, WHERE, etc.) sont bien formées')

    // SYSDATE sans parenthèses
    if (/SYSDATE/i.test(sql)) {
      suggestions.push("SYSDATE n'existe pas en SQLite")
      suggestions.push("Utilisez DATE('now') pour la date actuelle")
    }

    return suggestions
  }

  /**
   * Suggestions pour les erreurs de colonne
   */
  private getColumnSuggestions(message: string, sql: string): string[] {
    const suggestions: string[] = []

    suggestions.push('Vérifiez que le nom de la colonne existe dans la table')
    suggestions.push('Vérifiez les conventions Sage X3 : les champs ont des suffixes _0, _1, _2...')
    suggestions.push("Utilisez la page 'Schéma' pour voir les colonnes disponibles")

    return suggestions
  }

  /**
   * Suggestions pour les erreurs de table
   */
  private getTableSuggestions(message: string, sql: string): string[] {
    const suggestions: string[] = []

    suggestions.push('Vérifiez que le nom de la table existe dans la base de données')
    suggestions.push('Les noms de tables Sage X3 sont généralement en MAJUSCULES')
    suggestions.push("Consultez la page 'Schéma' pour voir les tables disponibles")

    return suggestions
  }
}

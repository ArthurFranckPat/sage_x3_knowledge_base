export interface ValidationResult {
  valid: boolean
  score: number
  errors: string[]
  warnings: string[]
}

export default class SqlValidator {
  /**
   * Valide une requête SQL selon les règles Sage X3
   */
  validate(sql: string): ValidationResult {
    const result: ValidationResult = {
      valid: true,
      score: 100,
      errors: [],
      warnings: []
    }

    const trimmedSql = sql.trim()

    // 1. Vérifier que c'est un SELECT
    if (!trimmedSql.toUpperCase().startsWith('SELECT')) {
      result.errors.push('Seules les requêtes SELECT sont autorisées')
      result.valid = false
      result.score = 0
      return result
    }

    // 2. Vérifier qu'il n'y a pas de commandes dangereuses
    const dangerousKeywords = ['DROP', 'DELETE', 'UPDATE', 'INSERT', 'CREATE', 'ALTER', 'TRUNCATE', 'EXEC']
    const upperSql = trimmedSql.toUpperCase()
    
    for (const keyword of dangerousKeywords) {
      if (upperSql.includes(keyword)) {
        result.errors.push(`Commande interdite détectée : ${keyword}`)
        result.valid = false
        result.score = 0
      }
    }

    if (!result.valid) {
      return result
    }

    // 3. Vérifier les conventions Sage X3
    this.validateSageConventions(trimmedSql, result)

    // 4. Calculer le score final
    result.score = Math.max(0, 100 - (result.errors.length * 20) - (result.warnings.length * 5))

    return result
  }

  /**
   * Valide les conventions Sage X3 (suffixes _0, _1, etc.)
   */
  private validateSageConventions(sql: string, result: ValidationResult): void {
    // Mots-clés SQL à ignorer
    const keywords = [
      'SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER',
      'GROUP', 'ORDER', 'BY', 'HAVING', 'LIMIT', 'OFFSET', 'AS', 'AND', 'OR',
      'NOT', 'NULL', 'IS', 'IN', 'LIKE', 'BETWEEN', 'EXISTS', 'ALL', 'ANY',
      'DISTINCT', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'ON', 'CASE', 'WHEN',
      'THEN', 'ELSE', 'END', 'ASC', 'DESC'
    ]

    // Extraire tous les identifiants potentiels (champs et tables avec points)
    // Pattern: mots alphanum + underscore, potentiellement avec alias (table.champ)
    const identifierPattern = /\b([a-z_][a-z0-9_]*(?:\.[a-z_][a-z0-9_]*)?)\b/gi
    const matches = sql.matchAll(identifierPattern)

    const potentialFields = new Set<string>()

    for (const match of matches) {
      const identifier = match[1]
      
      // Si c'est un alias table.champ, prendre seulement le champ
      const parts = identifier.split('.')
      const field = parts.length > 1 ? parts[1] : parts[0]
      
      // Ignorer les mots-clés SQL
      if (keywords.includes(field.toUpperCase())) {
        continue
      }

      // Ignorer les alias de table courts (1-2 caractères)
      if (field.length <= 2 && parts.length > 1) {
        continue
      }

      // Ignorer les valeurs numériques
      if (/^\d+$/.test(field)) {
        continue
      }

      potentialFields.add(field)
    }

    // Vérifier les champs sans suffixe _0, _1, etc.
    let fieldsWithoutSuffix = 0
    for (const field of potentialFields) {
      // Ignorer les noms de tables Sage X3 connues (sans suffixes)
      const sageX3Tables = ['itmmaster', 'stock', 'users', 'bpartner', 'facility', 
                            'sorder', 'porder', 'sinvoice', 'pinvoice', 'bpcustomer', 
                            'bpsupplier', 'bpaddress', 'itmfacilit', 'itmbps', 'stojou', 
                            'stoloc', 'stolot', 'sorderq', 'sorderp', 'sdelivery', 
                            'sdeliveryd', 'porderq', 'porderp', 'preceipt', 'preceiptd',
                            'bom', 'bomd', 'routing', 'mfghead', 'mfgitm', 'mfgope']
      if (sageX3Tables.includes(field.toLowerCase())) {
        continue
      }

      // Vérifier si le champ a un suffixe _0, _1, _2, etc.
      if (!/\_\d+$/.test(field)) {
        fieldsWithoutSuffix++
      }
    }

    // N'avertir que s'il y a vraiment des champs sans suffixe
    if (fieldsWithoutSuffix > 0) {
      result.warnings.push(
        `${fieldsWithoutSuffix} champ(s) potentiel(s) sans suffixe Sage X3 (_0, _1, etc.)`
      )
    }

    // Vérifier la présence de LIMIT (bonne pratique)
    if (!/\bLIMIT\s+\d+/i.test(sql)) {
      result.warnings.push(
        'Aucune clause LIMIT détectée (une sera ajoutée automatiquement à 1000 lignes)'
      )
    }
  }

  /**
   * Extrait les tables utilisées dans la requête
   */
  extractTables(sql: string): string[] {
    const tables: string[] = []
    
    // Pattern simple pour FROM et JOIN
    const fromPattern = /FROM\s+(\w+)/gi
    const joinPattern = /JOIN\s+(\w+)/gi
    
    const fromMatches = sql.matchAll(fromPattern)
    const joinMatches = sql.matchAll(joinPattern)
    
    for (const match of fromMatches) {
      tables.push(match[1])
    }
    
    for (const match of joinMatches) {
      tables.push(match[1])
    }
    
    return Array.from(new Set(tables))
  }
}

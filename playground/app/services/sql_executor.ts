import Database from '@adonisjs/lucid/services/db'
import { OracleToSqliteTranslator } from './oracle_to_sqlite_translator.js'
import { OracleToPostgresTranslator } from './oracle_to_postgres_translator.js'
import SqlErrorFormatter from './sql_error_formatter.js'

export interface QueryResult {
  rows: any[]
  rowCount: number
  executionTime: number
  translationApplied?: boolean
  translationChanges?: string[]
}

export class SqlExecutionError extends Error {
  constructor(message: string, public readonly originalError?: Error) {
    super(message)
    this.name = 'SqlExecutionError'
  }
}

export default class SqlExecutor {
  /**
   * Exécute une requête SQL (SELECT uniquement) de manière sécurisée
   */
  async execute(sql: string): Promise<QueryResult> {
    // 1. Validation sécurité : SELECT et CTE (WITH) autorisés
    const trimmedSql = sql.trim()
    const upperSql = trimmedSql.toUpperCase()
    if (!upperSql.startsWith('SELECT') && !upperSql.startsWith('WITH')) {
      throw new Error('Seules les requêtes SELECT (y compris les CTE avec WITH) sont autorisées')
    }

    // 2. Vérifier qu'il n'y a pas de commandes dangereuses (en ignorant les commentaires)
    const dangerousKeywords = ['DROP', 'DELETE', 'UPDATE', 'INSERT', 'CREATE', 'ALTER', 'TRUNCATE']

    // Extraire le SQL sans commentaires pour la vérification de sécurité
    const sqlWithoutComments = this.removeComments(trimmedSql)
    const upperSqlNoComments = sqlWithoutComments.toUpperCase()

    for (const keyword of dangerousKeywords) {
      if (upperSqlNoComments.includes(keyword)) {
        throw new Error(`Commande interdite détectée : ${keyword}`)
      }
    }

    // 3. Détecter et traduire la syntaxe Oracle si nécessaire
    // Utiliser PostgreSQL translator par défaut (config actuelle = postgres)
    const translator = new OracleToPostgresTranslator()

    const oracleFeatures = translator.detectOracleSyntax(trimmedSql)

    let sqlToExecute = trimmedSql
    let translationApplied = false
    let translationChanges: string[] = []

    if (oracleFeatures.length > 0) {
      // Appliquer la traduction automatique
      const translation = translator.translate(trimmedSql)
      if (translation.changes.length > 0) {
        sqlToExecute = translation.translatedSql
        translationApplied = true
        translationChanges = translation.changes

        console.log(`🔄 Traduction Oracle → PostgreSQL appliquée:`)
        translation.changes.forEach((c) => console.log(`  ${c}`))
      }
    }

    // 4. Ajouter LIMIT si absent (max 1000 lignes)
    const sqlWithLimit = this.addLimit(sqlToExecute, 1000)

    // 5. Exécuter la requête
    const startTime = Date.now()

    try {
      const result = await Database.rawQuery(sqlWithLimit)

      const executionTime = Date.now() - startTime

      // Normaliser le résultat (better-sqlite3 retourne directement un array)
      const rows = Array.isArray(result) ? result : (result.rows || [])

      return {
        rows,
        rowCount: rows.length,
        executionTime,
        translationApplied,
        translationChanges,
      }
    } catch (error) {
      // Formater l'erreur proprement avec le formatter
      const formatter = new SqlErrorFormatter()
      const formatted = formatter.format(
        error instanceof Error ? error : new Error(String(error)),
        sqlToExecute
      )

      // Construire un message propre SANS la requête complète (sans emojis pour éviter problèmes header HTTP)
      let cleanMessage = `[ERREUR] ${formatted.message}\n\n`

      if (formatted.context) {
        cleanMessage += `[CONTEXTE]\n${formatted.context}\n\n`
      }

      if (formatted.suggestions.length > 0) {
        cleanMessage += `[SUGGESTIONS]\n`
        formatted.suggestions.forEach((s) => {
          cleanMessage += `  - ${s}\n`
        })
      }

      throw new SqlExecutionError(cleanMessage.trim(), error as Error)
    }
  }

  /**
   * Supprime les commentaires SQL d'une requête
   */
  private removeComments(sql: string): string {
    // Supprimer les commentaires multi-lignes (/* ... */)
    let cleanedSql = sql.replace(/\/\*[\s\S]*?\*\//g, '')

    // Supprimer les commentaires mono-ligne (--)
    cleanedSql = cleanedSql.replace(/--.*$/gm, '')

    // Nettoyer les lignes vides multiples
    cleanedSql = cleanedSql.replace(/\n\s*\n/g, '\n')

    return cleanedSql.trim()
  }

  /**
   * Ajoute une clause LIMIT si elle n'existe pas
   */
  private addLimit(sql: string | undefined, maxLimit: number): string {
    // Vérifier que sql est défini
    if (!sql || typeof sql !== 'string') {
      throw new Error('SQL query is undefined or invalid')
    }

    // Si LIMIT est déjà présent, ne rien faire
    if (/\bLIMIT\s+\d+/i.test(sql)) {
      return sql
    }

    // Retirer le point-virgule final s'il existe
    const cleanSql = sql.trim().replace(/;$/, '')

    // Ajouter LIMIT
    return `${cleanSql} LIMIT ${maxLimit}`
  }

  /**
   * Teste la connexion à la base de données
   */
  async testConnection(): Promise<boolean> {
    try {
      await Database.rawQuery('SELECT 1')
      return true
    } catch {
      return false
    }
  }
}

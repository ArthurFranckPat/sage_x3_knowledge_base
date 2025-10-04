import Database from '@adonisjs/lucid/services/db'

export interface QueryResult {
  rows: any[]
  rowCount: number
  executionTime: number
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
    // 1. Validation sécurité : seul SELECT autorisé
    const trimmedSql = sql.trim()
    if (!trimmedSql.toUpperCase().startsWith('SELECT')) {
      throw new Error('Seules les requêtes SELECT sont autorisées')
    }

    // 2. Vérifier qu'il n'y a pas de commandes dangereuses
    const dangerousKeywords = ['DROP', 'DELETE', 'UPDATE', 'INSERT', 'CREATE', 'ALTER', 'TRUNCATE']
    const upperSql = trimmedSql.toUpperCase()
    
    for (const keyword of dangerousKeywords) {
      if (upperSql.includes(keyword)) {
        throw new Error(`Commande interdite détectée : ${keyword}`)
      }
    }

    // 3. Ajouter LIMIT si absent (max 1000 lignes)
    const sqlWithLimit = this.addLimit(trimmedSql, 1000)

    // 4. Exécuter la requête
    const startTime = Date.now()
    
    try {
      const result = await Database.rawQuery(sqlWithLimit)
      
      const executionTime = Date.now() - startTime

      // Normaliser le résultat (better-sqlite3 retourne directement un array)
      const rows = Array.isArray(result) ? result : (result.rows || [])

      return {
        rows,
        rowCount: rows.length,
        executionTime
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erreur SQL inconnue'
      throw new SqlExecutionError(`Erreur SQL : ${message}`, error as Error)
    }
  }

  /**
   * Ajoute une clause LIMIT si elle n'existe pas
   */
  private addLimit(sql: string, maxLimit: number): string {
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

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import { createHash } from 'node:crypto'

export default class QueryHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number | null

  @column()
  declare sessionId: string | null

  @column()
  declare sql: string

  @column()
  declare queryHash: string

  @column()
  declare rowCount: number

  @column()
  declare executionTimeMs: number

  @column()
  declare validationScore: number

  @column({ columnName: 'tables_used', consume: (value) => value ? JSON.parse(value) : null, prepare: (value) => value ? JSON.stringify(value) : null })
  declare tablesUsed: string[] | null

  @column()
  declare queryType: string | null

  @column()
  declare userAgent: string | null

  @column()
  declare ipAddress: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relationships
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  /**
   * Generate SHA-256 hash for query deduplication
   */
  static generateQueryHash(sql: string, userId?: number, sessionId?: string): string {
    const data = `${sql.trim().toLowerCase()}|${userId || ''}|${sessionId || ''}`
    return createHash('sha256').update(data).digest('hex')
  }

  /**
   * Extract table names from SQL query
   */
  static extractTables(sql: string): string[] {
    const tables = new Set<string>()

    // Extract from FROM clauses
    const fromMatches = sql.matchAll(/FROM\s+(\w+)/gi)
    for (const match of fromMatches) {
      tables.add(match[1].toLowerCase())
    }

    // Extract from JOIN clauses
    const joinMatches = sql.matchAll(/(?:INNER|LEFT|RIGHT|FULL|CROSS)\s+JOIN\s+(\w+)/gi)
    for (const match of joinMatches) {
      tables.add(match[1].toLowerCase())
    }

    // Extract from WITH clauses (CTE)
    const withMatches = sql.matchAll(/WITH\s+(\w+)\s+AS\s*\(/gi)
    for (const match of withMatches) {
      tables.add(match[1].toLowerCase())
    }

    return Array.from(tables)
  }

  /**
   * Determine query type
   */
  static getQueryType(sql: string): string {
    const trimmed = sql.trim().toUpperCase()
    if (trimmed.startsWith('WITH')) return 'CTE'
    if (trimmed.startsWith('SELECT')) return 'SELECT'
    return 'OTHER'
  }

  /**
   * Format execution time for display
   */
  get formattedExecutionTime(): string {
    if (this.executionTimeMs < 1000) {
      return `${this.executionTimeMs}ms`
    }
    return `${(this.executionTimeMs / 1000).toFixed(2)}s`
  }

  /**
   * Check if query was performant
   */
  get isPerformant(): boolean {
    return this.executionTimeMs < 500 // Under 500ms is considered performant
  }

  /**
   * Check if validation passed
   */
  get isValidated(): boolean {
    return this.validationScore > 50
  }

  /**
   * Get SQL preview for display
   */
  get sqlPreview(): string {
    const preview = this.sql.substring(0, 200)
    return preview.length < this.sql.length ? `${preview}...` : preview
  }
}
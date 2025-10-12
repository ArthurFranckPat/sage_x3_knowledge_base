import type { HttpContext } from '@adonisjs/core/http'
import SqlExecutor from '#services/sql_executor'
import SqlValidator from '#services/sql_validator'
import { OracleToSqliteTranslator } from '#services/oracle_to_sqlite_translator'
import Database from '@adonisjs/lucid/services/db'
import QueryHistory from '#models/query_history'
import { randomUUID } from 'node:crypto'

export default class PlaygroundController {
  /**
   * Helper function to sanitize header values by removing invalid characters
   */
  private sanitizeHeaderValue(value: string): string {
    // Replace apostrophes with spaces and remove other invalid header characters
    return value
      .replace(/['']/g, ' ')  // Replace apostrophes with spaces
      .replace(/[\r\n\t]/g, '') // Remove newlines and tabs
      .trim()
  }
  /**
   * Affiche la page du playground
   */
  async index({ view }: HttpContext) {
    return view.render('playground/index')
  }

  /**
   * Exécute une requête SQL
   */
  async execute({ request, response, view }: HttpContext) {
    try {
      const sql = request.input('sql')
      const page = Number(request.input('page', 1))
      const pageSize = Number(request.input('pageSize', 10))
      const isUnpoly = request.header('X-Up-Target') !== undefined
      const startTime = Date.now()

      if (!sql || sql.trim() === '') {
        if (isUnpoly) {
          return view.render('playground/partials/validation', {
            validation: {
              valid: false,
              score: 0,
              errors: ['La requête SQL est vide'],
              warnings: [],
              suggestions: []
            }
          })
        }
        return response.badRequest({
          success: false,
          error: 'La requête SQL est vide'
        })
      }

      // 1. Détecter syntaxe Oracle et ajouter des warnings
      const translator = new OracleToSqliteTranslator()
      const oracleFeatures = translator.detectOracleSyntax(sql)

      // 2. Valider la requête
      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      // Ajouter des warnings si syntaxe Oracle détectée
      if (oracleFeatures.length > 0) {
        validation.warnings.push(
          `🔍 Syntaxe Oracle détectée: ${oracleFeatures.map(f => f.name).join(', ')}`
        )
        validation.warnings.push(
          `🔄 Traduction automatique Oracle → SQLite sera appliquée`
        )
      }

      if (!validation.valid) {
        if (isUnpoly) {
          response.header('X-Toast-Type', 'destructive')
          response.header('X-Toast-Message', this.sanitizeHeaderValue(validation.errors?.[0] || 'Invalid SQL Query'))
          return view.render('playground/partials/validation', { validation })
        }
        return response.badRequest({
          success: false,
          errors: validation.errors,
          validation
        })
      }

      // 3. Exécuter la requête (la traduction Oracle sera appliquée automatiquement)
      const executor = new SqlExecutor()
      const result = await executor.execute(sql)
      const executionTime = Date.now() - startTime
      
      result.executionTime = executionTime

      // Ajouter des infos sur la traduction dans la validation si appliquée
      if (result.translationApplied && result.translationChanges) {
        validation.warnings.push(
          `✅ Traduction appliquée avec succès: ${result.translationChanges.join(', ')}`
        )
      }

      // Retour Unpoly : fragments HTML multiples
      if (isUnpoly) {
        // Unpoly attend des fragments séparés avec leurs IDs (avec containers)
        const validationHtml = await view.render('playground/partials/validation', { validation })
        const resultsHtml = await view.render('playground/partials/results', { result, page, pageSize, sql })
        response.header('X-Toast-Type', 'success')
        response.header('X-Toast-Message', this.sanitizeHeaderValue(`Executed: ${result.rowCount} rows in ${executionTime}ms`))

        // Save to history asynchronously (don't wait for completion)
        this.saveToHistorySilently(sql, result, validation, executionTime, request)

        const html = `
          <div id="validation-container">
            <div id="validation" up-hungry up-keep>
              ${validationHtml}
            </div>
          </div>
          <div id="results-container">
            <div id="results" up-hungry>
              ${resultsHtml}
            </div>
          </div>
        `
        return response.header('Content-Type', 'text/html').send(html)
      }

      // Retour API : JSON
      response.header('X-Toast-Type', 'success')
      response.header('X-Toast-Message', this.sanitizeHeaderValue(`Executed: ${result.rowCount} rows in ${executionTime}ms`))

      // Save to history asynchronously (don't wait for completion)
      this.saveToHistorySilently(sql, result, validation, executionTime, request)

      return response.ok({
        success: true,
        data: result,
        validation,
        page,
        pageSize,
        executionTime
      })

    } catch (error) {
      console.error('Execute route error:', (error as any)?.stack || error)
      // Check if request is from Unpoly
      const isUnpoly = request.header('X-Up-Target') !== undefined
      
      if (isUnpoly) {
        try {
          response.header('X-Toast-Type', 'destructive')
          response.header('X-Toast-Message', this.sanitizeHeaderValue(error.message || 'Erreur lors de l exécution de la requête'))
          const validationHtml = await view.render('playground/partials/validation', {
            validation: {
              valid: false,
              score: 0,
              errors: [error.message || 'Erreur lors de l exécution de la requête'],
              warnings: [],
              suggestions: []
            }
          })
          
          const html = `
            <div id="validation-container">
              <div id="validation" up-hungry up-keep>
                ${validationHtml}
              </div>
            </div>
            <div id="results-container">
              <div id="results" up-hungry></div>
            </div>
          `
          return response.header('Content-Type', 'text/html').send(html)
        } catch (renderError) {
          // Fallback en cas d'erreur de rendu
          response.header('X-Toast-Type', 'destructive')
          response.header('X-Toast-Message', this.sanitizeHeaderValue(error.message || 'Erreur lors de l exécution de la requête'))
          const html = `
            <div id="validation-container">
              <div id="validation" up-hungry up-keep>
                <div class="alert alert-destructive">
                  <div class="alert-title">✗ Error</div>
                  <div class="alert-description">
                    ${error.message || 'Erreur lors de l exécution de la requête'}
                  </div>
                </div>
              </div>
            </div>
            <div id="results-container">
              <div id="results" up-hungry></div>
            </div>
          `
          return response.header('Content-Type', 'text/html').send(html)
        }
      }
      
      return response.badRequest({
        success: false,
        error: error.message || 'Erreur lors de l\'exécution de la requête'
      })
    }
  }

  /**
   * Valide une requête SQL sans l'exécuter
   */
  async validate({ request, response, view }: HttpContext) {
    try {
      const { sql } = request.only(['sql'])
      const isUnpoly = request.header('X-Up-Target') !== undefined

      if (!sql || sql.trim() === '') {
        const validation = {
          valid: false,
          score: 0,
          errors: ['La requête SQL est vide'],
          warnings: [],
          suggestions: []
        }
        
        if (isUnpoly) {
          response.header('X-Toast-Type', 'destructive')
          response.header('X-Toast-Message', this.sanitizeHeaderValue('La requête SQL est vide'))
          const validationHtml = await view.render('playground/partials/validation', { validation })
          const html = `
            <div id="validation-container">
              <div id="validation" up-hungry up-keep>
                ${validationHtml}
              </div>
            </div>
          `
          return response.header('Content-Type', 'text/html').send(html)
        }
        return response.badRequest(validation)
      }

      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      if (isUnpoly) {
        try {
          if (!validation.valid) {
            response.header('X-Toast-Type', 'destructive')
            response.header('X-Toast-Message', this.sanitizeHeaderValue(validation.errors?.[0] || 'Invalid SQL Query'))
          }
          const validationHtml = await view.render('playground/partials/validation', { validation })
          const html = `
            <div id="validation-container">
              <div id="validation" up-hungry up-keep>
                ${validationHtml}
              </div>
            </div>
          `
          return response.header('Content-Type', 'text/html').send(html)
        } catch (renderError) {
          response.header('X-Toast-Type', 'destructive')
          response.header('X-Toast-Message', this.sanitizeHeaderValue(validation.errors?.[0] || 'Validation failed'))
          // Fallback: return simple HTML without template rendering
          const html = `
            <div id="validation-container">
              <div id="validation" up-hungry up-keep>
                <div class="alert alert-destructive">
                  <div class="alert-title">✗ Error</div>
                  <div class="alert-description">
                    ${validation.errors[0] || 'Validation failed'}
                  </div>
                </div>
              </div>
            </div>
          `
          return response.header('Content-Type', 'text/html').send(html)
        }
      }
      return response.ok(validation)

    } catch (error) {
      const isUnpoly = request.header('X-Up-Target') !== undefined
      const validation = {
        valid: false,
        score: 0,
        errors: [error.message || 'Erreur lors de la validation'],
        warnings: [],
        suggestions: []
      }
      
      if (isUnpoly) {
        const validationHtml = await view.render('playground/partials/validation', { validation })
        const html = `
          <div id="validation-container">
            <div id="validation" up-hungry up-keep>
              ${validationHtml}
            </div>
          </div>
        `
        return response.header('Content-Type', 'text/html').send(html)
      }
      return response.badRequest(validation)
    }
  }

  /**
   * Affiche le schéma dans un drawer
   */
  async schemaView({ view, request }: HttpContext) {
    try {
      const tables = await Database.rawQuery(
        "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
      )

      const schema = []

      for (const table of tables) {
        const columns = await Database.rawQuery(
          `PRAGMA table_info(${table.name})`
        )

        schema.push({
          name: table.name,
          columns: columns.map((col: any) => ({
            name: col.name,
            type: col.type,
            nullable: col.notnull === 0,
            default: col.dflt_value
          }))
        })
      }

      // Check if this is an Unpoly request (drawer)
      const isUpRequest = request.header('X-Up-Target') || request.header('X-Up-Mode')

      if (isUpRequest) {
        return view.render('playground/schema', { tables: schema })
      }

      return view.render('playground/schema_page', { tables: schema })
    } catch (error) {
      return view.render('playground/schema', { tables: [], error: error.message })
    }
  }

  /**
   * Affiche l'historique dans un drawer
   */
  async historyView({ view, request, response }: HttpContext) {
    try {
      const sessionId = this.generateSessionId(request, response)
      const userId = this.getCurrentUserId(request)

      // Get history data
      const historyData = await QueryHistory.query()
        .where(q => {
          if (userId) {
            q.where('user_id', userId)
          } else {
            q.where('session_id', sessionId)
          }
        })
        .orderBy('created_at', 'desc')
        .limit(50)

      console.log(`📊 History loaded: ${historyData.length} entries for session ${sessionId}`)

      const viewData = {
        historyEntries: historyData,
        hasHistory: historyData.length > 0
      }

      // Check if this is an Unpoly request (drawer)
      const isUpRequest = request.header('X-Up-Target') || request.header('X-Up-Mode')

      if (isUpRequest) {
        // Render just the drawer content
        return view.render('playground/history', viewData)
      }

      // Render with full page wrapper for direct navigation
      return view.render('playground/history_page', viewData)
    } catch (error) {
      console.error('Error loading history view:', error)
      const viewData = {
        historyEntries: [],
        hasHistory: false,
        error: error.message
      }
      return view.render('playground/history', viewData)
    }
  }

  /**
   * Affiche les favoris dans un drawer
   */
  async favoritesView({ view, request }: HttpContext) {
    // Check if this is an Unpoly request (drawer)
    const isUpRequest = request.header('X-Up-Target') || request.header('X-Up-Mode')

    if (isUpRequest) {
      // Return just drawer content
      return view.render('playground/favorites', {})
    }

    // Return full page wrapper for direct navigation
    return view.render('playground/favorites_page', {})
  }

  /**
   * Affiche les exemples dans une modal
   */
  async examplesView({ view, request }: HttpContext) {
    const examples = [
      {
        title: 'Articles avec stock',
        description: 'Liste des 10 premiers articles avec leur stock',
        sql: `SELECT 
  i.itmref_0 AS code_article,
  i.itmdes1_0 AS designation,
  s.qtystu_0 AS quantite,
  s.stofcy_0 AS site
FROM itmmaster i
LEFT JOIN stock s ON i.itmref_0 = s.itmref_0
LIMIT 10`
      },
      {
        title: 'Commandes ventes récentes',
        description: 'Les commandes ventes du dernier mois',
        sql: `SELECT 
  s.sohnum_0 AS num_commande,
  s.orddat_0 AS date_commande,
  b.bpcnam_0 AS client
FROM sorder s
INNER JOIN bpartner b ON s.bpcord_0 = b.bpcnum_0
ORDER BY s.orddat_0 DESC
LIMIT 20`
      },
      {
        title: 'Sites actifs',
        description: 'Liste de tous les sites',
        sql: `SELECT 
  fcy_0 AS code_site,
  fcynam_0 AS nom_site,
  cty_0 AS ville
FROM facility
LIMIT 10`
      },
      {
        title: 'Stock total par article',
        description: 'Stock total de chaque article (tous sites confondus)',
        sql: `SELECT 
  i.itmref_0,
  i.itmdes1_0,
  SUM(s.qtystu_0) AS stock_total
FROM itmmaster i
LEFT JOIN stock s ON i.itmref_0 = s.itmref_0
GROUP BY i.itmref_0, i.itmdes1_0
HAVING stock_total > 0
ORDER BY stock_total DESC
LIMIT 20`
      }
    ]

    // Check if this is an Unpoly request (drawer/modal)
    const isUpRequest = request.header('X-Up-Mode')

    if (isUpRequest) {
      // Return partial view without layout for Unpoly requests
      return view.render('playground/examples', { examples }, { layout: false })
    }

    // Return full page with layout for direct navigation
    return view.render('playground/examples', { examples })
  }

  /**
   * Affiche les raccourcis clavier dans une modal
   */
  async shortcutsView({ view }: HttpContext) {
    return view.render('playground/shortcuts')
  }

  /**
   * Export des résultats en CSV ou JSON
   */
  async export({ request, response }: HttpContext) {
    try {
      const { format, sql } = request.qs()
      
      if (!sql) {
        return response.badRequest({ error: 'No SQL query provided' })
      }

      const executor = new SqlExecutor()
      const result = await executor.execute(sql)

      if (format === 'csv') {
        // Generate CSV
        const columns = result.columns
        const rows = result.rows
        
        let csv = columns.join(',') + '\n'
        rows.forEach((row: any) => {
          csv += columns.map(col => {
            const value = row[col]
            // Escape quotes and wrap in quotes if contains comma
            if (value === null || value === undefined) return ''
            const str = String(value)
            if (str.includes(',') || str.includes('"') || str.includes('\n')) {
              return `"${str.replace(/"/g, '""')}"`
            }
            return str
          }).join(',') + '\n'
        })

        response.header('Content-Type', 'text/csv')
        response.header('Content-Disposition', 'attachment; filename="query_results.csv"')
        return response.send(csv)
      }

      if (format === 'json') {
        response.header('Content-Type', 'application/json')
        response.header('Content-Disposition', 'attachment; filename="query_results.json"')
        return response.send(JSON.stringify(result, null, 2))
      }

      return response.badRequest({ error: 'Unsupported format. Use csv or json' })

    } catch (error) {
      return response.badRequest({
        error: error.message || 'Error exporting results'
      })
    }
  }

  /**
   * Retourne le schéma des tables disponibles (API JSON)
   */
  async schema({ response }: HttpContext) {
    try {
      // Récupérer la liste des tables depuis SQLite
      const tables = await Database.rawQuery(
        "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
      )

      const schema = []

      for (const table of tables) {
        // Récupérer les colonnes de chaque table
        const columns = await Database.rawQuery(
          `PRAGMA table_info(${table.name})`
        )

        schema.push({
          name: table.name,
          columns: columns.map((col: any) => ({
            name: col.name,
            type: col.type,
            nullable: col.notnull === 0,
            default: col.dflt_value
          }))
        })
      }

      return response.ok({
        success: true,
        tables: schema,
        count: schema.length
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Erreur lors de la récupération du schéma'
      })
    }
  }

  /**
   * Retourne des exemples de requêtes SQL
   */
  async examples({ response }: HttpContext) {
    const examples = [
      {
        title: 'Articles avec stock',
        description: 'Liste des 10 premiers articles avec leur stock',
        sql: `SELECT 
  i.itmref_0 AS code_article,
  i.itmdes1_0 AS designation,
  s.qtystu_0 AS quantite,
  s.stofcy_0 AS site
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
LIMIT 10`
      },
      {
        title: 'Commandes ventes récentes',
        description: 'Les commandes ventes du dernier mois',
        sql: `SELECT 
  s.sohnum_0 AS num_commande,
  s.orddat_0 AS date_commande,
  b.bpcnam_0 AS client
FROM sorders s
INNER JOIN bpartners b ON s.bpcord_0 = b.bpcnum_0
ORDER BY s.orddat_0 DESC
LIMIT 20`
      },
      {
        title: 'Sites actifs',
        description: 'Liste de tous les sites',
        sql: `SELECT 
  fcy_0 AS code_site,
  fcynam_0 AS nom_site,
  cty_0 AS ville
FROM facilitys
LIMIT 10`
      },
      {
        title: 'Stock total par article',
        description: 'Stock total de chaque article (tous sites confondus)',
        sql: `SELECT 
  i.itmref_0,
  i.itmdes1_0,
  SUM(s.qtystu_0) AS stock_total
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
GROUP BY i.itmref_0, i.itmdes1_0
HAVING stock_total > 0
ORDER BY stock_total DESC
LIMIT 20`
      }
    ]

    return response.ok({
      success: true,
      examples
    })
  }

  /**
   * Get query history for current user/session
   */
  async history({ request, response }: HttpContext) {
    try {
      const page = Number(request.input('page', 1))
      const limit = Number(request.input('limit', 50))
      const sessionId = this.generateSessionId(request, response)

      // Try to get current user ID (if auth system exists)
      const userId = this.getCurrentUserId(request)

      const query = QueryHistory.query()
        .where(q => {
          if (userId) {
            q.where('user_id', userId)
          } else {
            q.where('session_id', sessionId)
          }
        })
        .orderBy('created_at', 'desc')

      const history = await query.paginate(page, limit)

      return response.ok({
        success: true,
        data: history.serialize(),
        sessionId,
        userId
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Error fetching history'
      })
    }
  }

  /**
   * Save executed query to history
   */
  async saveToHistory({ request, response }: HttpContext) {
    try {
      const { sql, rowCount = 0, executionTime = 0, validationScore = 100 } = request.only([
        'sql', 'rowCount', 'executionTime', 'validationScore'
      ])

      if (!sql || sql.trim() === '') {
        return response.badRequest({
          success: false,
          error: 'SQL query is required'
        })
      }

      const sessionId = this.generateSessionId(request, response)
      const userId = this.getCurrentUserId(request)
      const queryHash = QueryHistory.generateQueryHash(sql, userId, sessionId)

      // Check for duplicates first
      const existing = await QueryHistory.query()
        .where(q => {
          if (userId) {
            q.where('user_id', userId)
          } else {
            q.where('session_id', sessionId)
          }
        })
        .andWhere('query_hash', queryHash)
        .first()

      if (existing) {
        // Update existing record with new metrics
        existing.merge({
          rowCount,
          executionTimeMs: executionTime,
          validationScore,
          userAgent: request.header('User-Agent'),
          ipAddress: request.ip()
        })
        await existing.save()

        return response.ok({
          success: true,
          action: 'updated',
          data: existing.serialize()
        })
      }

      // Create new history record
      const historyEntry = await QueryHistory.create({
        userId,
        sessionId,
        sql: sql.trim(),
        queryHash,
        rowCount,
        executionTimeMs: executionTime,
        validationScore,
        tablesUsed: QueryHistory.extractTables(sql),
        queryType: QueryHistory.getQueryType(sql),
        userAgent: request.header('User-Agent'),
        ipAddress: request.ip()
      })

      return response.created({
        success: true,
        action: 'created',
        data: historyEntry.serialize()
      })

    } catch (error) {
      console.error('Save to history error:', error)
      return response.badRequest({
        success: false,
        error: error.message || 'Error saving to history'
      })
    }
  }

  /**
   * Delete specific history entry
   */
  async deleteFromHistory({ params, request, response }: HttpContext) {
    try {
      const sessionId = this.generateSessionId(request)
      const userId = this.getCurrentUserId(request)

      const query = QueryHistory.query().where('id', params.id)

      if (userId) {
        query.andWhere('user_id', userId)
      } else {
        query.andWhere('session_id', sessionId)
      }

      const historyEntry = await query.first()

      if (!historyEntry) {
        return response.notFound({
          success: false,
          error: 'History entry not found'
        })
      }

      await historyEntry.delete()

      return response.ok({
        success: true,
        message: 'History entry deleted'
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Error deleting history entry'
      })
    }
  }

  /**
   * Clear all history for current user/session
   */
  async clearHistory({ request, response }: HttpContext) {
    try {
      const sessionId = this.generateSessionId(request)
      const userId = this.getCurrentUserId(request)

      const query = QueryHistory.query()

      if (userId) {
        query.where('user_id', userId)
      } else {
        query.where('session_id', sessionId)
      }

      const deletedCount = await query.deleteCount()

      return response.ok({
        success: true,
        message: `Cleared ${deletedCount} history entries`
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Error clearing history'
      })
    }
  }

  /**
   * Search query history
   */
  async searchHistory({ request, response }: HttpContext) {
    try {
      const { q: searchQuery, tables, queryType, page = 1, limit = 20 } = request.qs()

      if (!searchQuery && !tables && !queryType) {
        return response.badRequest({
          success: false,
          error: 'At least one search parameter is required (q, tables, or queryType)'
        })
      }

      const sessionId = this.generateSessionId(request)
      const userId = this.getCurrentUserId(request)

      let query = QueryHistory.query()
        .where(q => {
          if (userId) {
            q.where('user_id', userId)
          } else {
            q.where('session_id', sessionId)
          }
        })

      // Search by SQL content
      if (searchQuery) {
        query.andWhere('sql', 'LIKE', `%${searchQuery}%`)
      }

      // Filter by tables used
      if (tables) {
        const tableArray = Array.isArray(tables) ? tables : [tables]
        tableArray.forEach(table => {
          query.andWhere('tables_used', 'LIKE', `%"${table.toLowerCase()}"%`)
        })
      }

      // Filter by query type
      if (queryType) {
        query.andWhere('query_type', queryType.toUpperCase())
      }

      query.orderBy('created_at', 'desc')

      const results = await query.paginate(Number(page), Number(limit))

      return response.ok({
        success: true,
        data: results.serialize(),
        searchParams: { searchQuery, tables, queryType }
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Error searching history'
      })
    }
  }

  /**
   * Helper methods
   */
  private getCurrentUserId(request: HttpContext): number | null {
    // TODO: Implement proper authentication check
    // For now, return null (guest user)
    return null
  }

  private generateSessionId(request: HttpContext, response?: any): string {
    // Check if session already has an ID in cookie
    const existingSessionId = request.cookie('playground_session_id')
    if (existingSessionId) {
      return existingSessionId
    }

    // Generate new session ID using crypto
    const newSessionId = randomUUID()

    // Set the session ID in a cookie that lasts 1 year if response object is available
    if (response && response.cookie) {
      response.cookie('playground_session_id', newSessionId, {
        maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax'
      })
    }

    return newSessionId
  }

  /**
   * Silently save query to history (fire and forget)
   */
  private async saveToHistorySilently(
    sql: string,
    result: any,
    validation: any,
    executionTime: number,
    request: HttpContext
  ): Promise<void> {
    try {
      const sessionId = this.generateSessionId(request)
      const userId = this.getCurrentUserId(request)
      const queryHash = QueryHistory.generateQueryHash(sql, userId, sessionId)

      // Check for duplicates first
      const existing = await QueryHistory.query()
        .where(q => {
          if (userId) {
            q.where('user_id', userId)
          } else {
            q.where('session_id', sessionId)
          }
        })
        .andWhere('query_hash', queryHash)
        .first()

      if (existing) {
        // Update existing record with new metrics
        existing.merge({
          rowCount: result.rowCount || 0,
          executionTimeMs: executionTime,
          validationScore: validation.score || 100,
          userAgent: request.header('User-Agent'),
          ipAddress: request.ip()
        })
        await existing.save()
      } else {
        // Create new history record
        await QueryHistory.create({
          userId,
          sessionId,
          sql: sql.trim(),
          queryHash,
          rowCount,
          executionTimeMs: executionTime,
          validationScore: validation.score || 100,
          tablesUsed: QueryHistory.extractTables(sql),
          queryType: QueryHistory.getQueryType(sql),
          userAgent: request.header('User-Agent'),
          ipAddress: request.ip()
        })
      }
    } catch (error) {
      // Silent fail - don't let history errors break query execution
      console.error('Failed to save to history:', error)
    }
  }
}

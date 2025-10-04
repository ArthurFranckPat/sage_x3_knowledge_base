import type { HttpContext } from '@adonisjs/core/http'
import SqlExecutor from '#services/sql_executor'
import SqlValidator from '#services/sql_validator'
import Database from '@adonisjs/lucid/services/db'

export default class PlaygroundController {
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
      const { sql } = request.only(['sql'])
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

      // 1. Valider la requête
      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      if (!validation.valid) {
        if (isUnpoly) {
          return view.render('playground/partials/validation', { validation })
        }
        return response.badRequest({
          success: false,
          errors: validation.errors,
          validation
        })
      }

      // 2. Exécuter la requête
      const executor = new SqlExecutor()
      const result = await executor.execute(sql)
      const executionTime = Date.now() - startTime
      
      result.executionTime = executionTime

      // Retour Unpoly : fragment HTML
      if (isUnpoly) {
        return view.render('playground/partials/results', { result })
      }

      // Retour API : JSON
      return response.ok({
        success: true,
        data: result,
        validation,
        executionTime
      })

    } catch (error) {
      const isUnpoly = request.header('X-Up-Target') !== undefined
      
      if (isUnpoly) {
        return view.render('playground/partials/validation', {
          validation: {
            valid: false,
            score: 0,
            errors: [error.message || 'Erreur lors de l\'exécution de la requête'],
            warnings: [],
            suggestions: []
          }
        })
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
          return view.render('playground/partials/validation', { validation })
        }
        return response.badRequest(validation)
      }

      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      if (isUnpoly) {
        return view.render('playground/partials/validation', { validation })
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
        return view.render('playground/partials/validation', { validation })
      }
      return response.badRequest(validation)
    }
  }

  /**
   * Affiche le schéma dans un drawer
   */
  async schemaView({ view }: HttpContext) {
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

      return view.render('playground/schema', { tables: schema })
    } catch (error) {
      return view.render('playground/schema', { tables: [], error: error.message })
    }
  }

  /**
   * Affiche l'historique dans un drawer
   */
  async historyView({ view }: HttpContext) {
    return view.render('playground/history')
  }

  /**
   * Affiche les favoris dans un drawer
   */
  async favoritesView({ view }: HttpContext) {
    return view.render('playground/favorites')
  }

  /**
   * Affiche les exemples dans une modal
   */
  async examplesView({ view }: HttpContext) {
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
}

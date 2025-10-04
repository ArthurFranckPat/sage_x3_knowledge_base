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
  async execute({ request, response }: HttpContext) {
    try {
      const { sql } = request.only(['sql'])

      if (!sql || sql.trim() === '') {
        return response.badRequest({
          success: false,
          error: 'La requête SQL est vide'
        })
      }

      // 1. Valider la requête
      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      if (!validation.valid) {
        return response.badRequest({
          success: false,
          errors: validation.errors,
          validation
        })
      }

      // 2. Exécuter la requête
      const executor = new SqlExecutor()
      const result = await executor.execute(sql)

      return response.ok({
        success: true,
        data: result,
        validation
      })

    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message || 'Erreur lors de l\'exécution de la requête'
      })
    }
  }

  /**
   * Valide une requête SQL sans l'exécuter
   */
  async validate({ request, response }: HttpContext) {
    try {
      const { sql } = request.only(['sql'])

      if (!sql || sql.trim() === '') {
        return response.badRequest({
          valid: false,
          score: 0,
          errors: ['La requête SQL est vide'],
          warnings: []
        })
      }

      const validator = new SqlValidator()
      const validation = validator.validate(sql)

      return response.ok(validation)

    } catch (error) {
      return response.badRequest({
        valid: false,
        score: 0,
        errors: [error.message || 'Erreur lors de la validation'],
        warnings: []
      })
    }
  }

  /**
   * Retourne le schéma des tables disponibles
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

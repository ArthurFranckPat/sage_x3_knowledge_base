import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Database from '@adonisjs/lucid/services/db'
import fs from 'fs/promises'
import path from 'path'

export default class extends BaseSeeder {
  async run() {
    // Lire les données ErgoClick
    const dataPath = path.join(__dirname, '../../seeds/ergoclick_data.json')
    const rawData = await fs.readFile(dataPath, 'utf-8')
    const data = JSON.parse(rawData)

    const siteCode = data.company.site.code
    const allArticles = [
      ...data.articles.finished_products,
      ...data.articles.semifinished,
      ...data.articles.components,
    ]

    // Créer l'association article-site pour tous les articles
    for (const article of allArticles) {
      await Database.table('itmfacilit').insert({
        itmref_0: article.code,
        stofcy_0: siteCode,
        strqty_0: 0, // Stock de sécurité
        ordqty_0: 0, // Point de commande
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
    }

    console.log(`✓ ${allArticles.length} articles associés au site ${siteCode}`)
  }
}

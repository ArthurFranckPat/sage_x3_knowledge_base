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

    // Fonction helper pour créer un article
    const createArticle = async (article: any) => {
      await Database.table('itmmaster').insert({
        itmref_0: article.code,
        itmdes1_0: article.description,
        tclcod_0: article.category,
        itmsta_0: article.status,
        stu_0: article.unit,
        ssu_0: article.unit,
        puu_0: article.unit,
        sau_0: article.unit,
        pcu_0: article.unit,
        
        // Prix
        purbaspri_0: article.purchase_price || 0,
        
        // Flags de gestion
        mfgflg_0: article.manufactured ? 'Y' : 'N',
        purflg_0: article.purchased ? 'Y' : 'N',
        salflg_0: article.sold ? 'Y' : 'N',
        
        // Poids
        itmwei_0: article.weight || 0,
        weu_0: 'KG',
        
        // Code EAN si présent
        eancod_0: article.ean || '',
        
        // Gestion de stock
        stomgtcod_0: 'STD',
        negsto_0: 'N',
        
        // Coefficients d'unités (tous à 1 pour simplifier)
        puustucoe_0: 1,
        saustucoe_0: 1,
        ssustucoe_0: 1,
        pcustucoe_0: 1,
        
        // Dates
        lifstrdat_0: '2024-01-01',
        lifenddat_0: '2099-12-31',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      
      console.log(`  ✓ Article ${article.code} - ${article.description}`)
    }

    // Créer tous les articles
    console.log('Création des produits finis...')
    for (const article of data.articles.finished_products) {
      await createArticle(article)
    }

    console.log('Création des semi-finis...')
    for (const article of data.articles.semifinished) {
      await createArticle(article)
    }

    console.log('Création des composants...')
    for (const article of data.articles.components) {
      await createArticle(article)
    }

    console.log(`✓ Total: ${data.articles.finished_products.length + data.articles.semifinished.length + data.articles.components.length} articles créés`)
  }
}

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

    // Créer les liens article-fournisseur pour les composants achetés
    for (const component of data.articles.components) {
      if (component.supplier) {
        await Database.table('itmbps').insert({
          itmref_0: component.code,
          bpsnum_0: component.supplier,
          itmrefbps_0: component.code, // Référence chez le fournisseur
          bpsqtypcu_0: 1, // Conditionnement
          bpsqtystu_0: 1,
          bpsprimin_0: component.purchase_price,
          cur_0: 'EUR',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        
        console.log(`  ✓ ${component.code} ← ${component.supplier}`)
      }
    }

    console.log(`✓ ${data.articles.components.length} liens article-fournisseur créés`)
  }
}

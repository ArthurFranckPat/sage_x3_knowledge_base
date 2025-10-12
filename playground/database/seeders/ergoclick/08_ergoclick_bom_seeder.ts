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

    for (const bom of data.boms) {
      // 1. Créer l'entête de nomenclature (BOM)
      await Database.table('bom').insert({
        itmref_0: bom.article,
        bomalt_0: bom.alternative,
        bomdesaxx_0: bom.description,
        basqty_0: bom.base_quantity,
        usesta_0: 1, // Statut actif
        bohstrdat_0: bom.valid_from,
        bohenddat_0: bom.valid_to,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      console.log(`  ✓ BOM ${bom.article} (${bom.description})`)

      // 2. Créer les lignes de nomenclature (BOMD)
      for (const line of bom.lines) {
        await Database.table('bomd').insert({
          itmref_0: bom.article,
          bomalt_0: bom.alternative,
          bomseq_0: line.index,
          cpnitmref_0: line.component,
          usuqty_0: line.quantity,
          uom_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        
        console.log(`    • Ligne ${line.index}: ${line.component} (Qté: ${line.quantity})`)
      }
    }

    console.log(`✓ ${data.boms.length} nomenclatures créées`)
  }
}

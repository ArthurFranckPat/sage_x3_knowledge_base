import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickManufacturingOrdersSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('🏭 Création des ordres de fabrication...')

    let moCount = 0

    for (const mo of data.manufacturing_orders) {
      // Insertion de l'OF (mfghead)
      await Database.table('mfghead').insert({
        mfgnum_0: mo.number,
        mfgfcy_0: mo.site,
        plnfcy_0: mo.site,
        strdat_0: mo.start_date,
        enddat_0: mo.end_date,
        extqty_0: mo.quantity,
        mfgsta_0: mo.status,
        stu_0: 'UN',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion de l'article de l'OF (mfgitm)
      await Database.table('mfgitm').insert({
        mfgnum_0: mo.number,
        itmlin_0: 1000,
        itmref_0: mo.article,
        mfgqty_0: mo.quantity,
        mfgfcy_0: mo.site,
        plnfcy_0: mo.site,
        mfgsta_0: mo.status,
        stu_0: 'UN',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      const linkedInfo = mo.linked_order ? `(lié à ${mo.linked_order})` : '(stock)'
      console.log(`  ✓ ${mo.number} : ${mo.quantity} × ${mo.article} ${linkedInfo}`)
      moCount++
    }

    console.log(`✓ ${moCount} ordres de fabrication créés\n`)
  }
}

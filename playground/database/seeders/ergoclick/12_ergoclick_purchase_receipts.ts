import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickPurchaseReceiptsSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('📥 Création des réceptions fournisseurs...')

    let receiptCount = 0
    let lineCount = 0

    for (const receipt of data.purchase_receipts) {
      // Insertion de l'entête de réception (preceipt)
      await Database.table('preceipt').insert({
        pthnum_0: receipt.number,
        pohnum_0: receipt.order,
        bpsnum_0: receipt.supplier,
        rcpdat_0: receipt.receipt_date,
        prhfcy_0: receipt.site,
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion des lignes de réception (preceiptd)
      for (const line of receipt.lines) {
        await Database.table('preceiptd').insert({
          pthnum_0: receipt.number,
          prdlin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          pohnum_0: receipt.order,
          poplin_0: line.order_line * 1000,
          prhfcy_0: receipt.site,
          stu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        lineCount++
      }

      console.log(`  ✓ ${receipt.number} ← ${receipt.order} (${receipt.lines.length} lignes)`)
      receiptCount++
    }

    console.log(`✓ ${receiptCount} réceptions créées (${lineCount} lignes)\n`)
  }
}

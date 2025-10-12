import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickSalesOrdersSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('🛒 Création des commandes clients...')

    let orderCount = 0
    let lineCount = 0

    for (const order of data.sales_orders) {
      // Insertion de l'entête de commande (sorder)
      await Database.table('sorder').insert({
        sohnum_0: order.number,
        bpcord_0: order.customer,
        orddat_0: order.order_date,
        demdlvdat_0: order.delivery_date,
        salfcy_0: order.site,
        stofcy_0: order.site,
        ordsta_0: order.status,
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion des lignes de commande (sorderq)
      for (const line of order.lines) {
        await Database.table('sorderq').insert({
          sohnum_0: order.number,
          soplin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          netpri_0: line.unit_price,
          gropri_0: line.unit_price,
          salfcy_0: order.site,
          stofcy_0: order.site,
          stu_0: 'UN',
          demdlvdat_0: order.delivery_date,
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        lineCount++
      }

      console.log(`  ✓ ${order.number} → ${order.customer} (${order.lines.length} lignes, statut: ${order.status})`)
      orderCount++
    }

    console.log(`✓ ${orderCount} commandes clients créées (${lineCount} lignes)\n`)
  }
}

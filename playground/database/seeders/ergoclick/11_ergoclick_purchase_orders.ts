import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickPurchaseOrdersSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('📦 Création des commandes fournisseurs...')

    let orderCount = 0
    let lineCount = 0

    for (const order of data.purchase_orders) {
      // Déterminer le statut basé sur le statut textuel
      let rcpflg = 'N' // Par défaut: non reçue
      if (order.status === 'received') {
        rcpflg = 'Y'
      } else if (order.status === 'partial') {
        rcpflg = 'P'
      }

      // Insertion de l'entête de commande (porder)
      await Database.table('porder').insert({
        pohnum_0: order.number,
        bpsnum_0: order.supplier,
        orddat_0: order.order_date,
        extrcpdat1_0: order.expected_delivery,
        pohfcy_0: order.site,
        rcpfcy_0: order.site,
        stofcy_0: order.site,
        cur_0: 'EUR',
        rcpflg_0: rcpflg,
        cleflg_0: rcpflg === 'Y' ? 1 : 0,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion des lignes de commande (porderq)
      for (const line of order.lines) {
        await Database.table('porderq').insert({
          pohnum_0: order.number,
          poplin_0: line.line * 1000, // Sage utilise souvent des incréments de 1000
          itmref_0: line.article,
          qtystu_0: line.quantity,
          gropri_0: line.unit_price,
          netpri_0: line.unit_price,
          extrcpdat_0: line.delivery_date,
          pohfcy_0: order.site,
          rcpfcy_0: order.site,
          stu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        lineCount++
      }

      console.log(`  ✓ ${order.number} → ${order.supplier} (${order.lines.length} lignes)`)
      orderCount++
    }

    console.log(`✓ ${orderCount} commandes achats créées (${lineCount} lignes)\n`)
  }
}

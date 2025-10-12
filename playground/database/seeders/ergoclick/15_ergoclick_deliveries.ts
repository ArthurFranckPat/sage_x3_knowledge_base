import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickDeliveriesSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('🚚 Création des livraisons clients...')

    let deliveryCount = 0
    let lineCount = 0

    for (const delivery of data.deliveries) {
      // Insertion de l'entête de livraison (sdelivery)
      await Database.table('sdelivery').insert({
        sdhnum_0: delivery.number,
        sohnum_0: delivery.order,
        bpcord_0: delivery.customer,
        dlvdat_0: delivery.delivery_date,
        salfcy_0: delivery.site,
        stofcy_0: delivery.site,
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion des lignes de livraison (sdeliveryd)
      for (const line of delivery.lines) {
        await Database.table('sdeliveryd').insert({
          sdhnum_0: delivery.number,
          sddlin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          sohnum_0: delivery.order,
          soplin_0: line.order_line * 1000,
          salfcy_0: delivery.site,
          stofcy_0: delivery.site,
          stu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        lineCount++
      }

      console.log(`  ✓ ${delivery.number} → ${delivery.customer} (${delivery.lines.length} lignes)`)
      deliveryCount++
    }

    console.log(`✓ ${deliveryCount} livraisons créées (${lineCount} lignes)\n`)
  }
}

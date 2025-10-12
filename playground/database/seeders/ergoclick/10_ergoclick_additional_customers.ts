import Database from '@adonisjs/lucid/services/db'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default class ErgoClickAdditionalCustomersSeeder {
  async run() {
    const dataPath = join(__dirname, '../../seeds/ergoclick_data.json')
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

    console.log('👥 Ajout de 5 clients supplémentaires...')

    // Les 3 premiers clients existent déjà, on prend uniquement les 5 suivants
    const additionalCustomers = data.customers.slice(3)
    let count = 0

    for (const customer of additionalCustomers) {
      // Insertion du tiers (bpartner)
      await Database.table('bpartner').insert({
        bprnum_0: customer.code,
        bprnam_0: customer.name,
        bprsho_0: customer.short_name,
        enaflg_0: 1,
        bprtyp_0: 1, // 1 = Client
        cry_0: customer.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion de l'adresse
      await Database.table('bpaddress').insert({
        bpanum_0: customer.code,
        bpaadd_0: 'MAIN',
        bpades_0: `Adresse ${customer.short_name}`,
        bpaaddlig_0: customer.address,
        bpacty_0: customer.city,
        bpaposcod_0: customer.postal_code,
        cry_0: customer.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // Insertion de l'extension client (bpcustomer)
      await Database.table('bpcustomer').insert({
        bpcnum_0: customer.code,
        prilst_0: 'STANDARD',
        tsscod_0: 'STD',
        pte_0: '30J',
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      console.log(`  ✓ ${customer.code} - ${customer.name}`)
      count++
    }

    console.log(`✓ ${count} nouveaux clients créés\n`)
  }
}

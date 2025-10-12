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

    for (const customer of data.customers) {
      // 1. Créer le tiers (BPARTNER)
      await Database.table('bpartner').insert({
        bprnum_0: customer.code,
        bprnam_0: customer.name,
        bprsho_0: customer.short_name,
        bpsflg_0: 'N', // Pas fournisseur
        bpcflg_0: 'Y', // Client
        cry_0: customer.country,
        lan_0: customer.country === 'FR' ? 'FRA' : 'ENG',
        enaflg_0: true,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // 2. Créer l'adresse (BPADDRESS)
      await Database.table('bpaddress').insert({
        bprnum_0: customer.code,
        bpaadd_0: '001', // Adresse principale
        bpaaddlig_0: customer.address,
        bpaaddlig_1: '',
        bpaaddlig_2: '',
        bpades_0: 'Adresse principale',
        poscod_0: customer.postal_code,
        cty_0: customer.city,
        crynam_0: customer.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // 3. Créer l'extension client (BPCUSTOMER)
      await Database.table('bpcustomer').insert({
        bpcnum_0: customer.code,
        acccod_0: '411' + customer.code.substring(3, 6), // Compte client
        cur_0: customer.country === 'BE' ? 'EUR' : 'EUR',
        pte_0: '30NET', // Conditions de paiement : 30 jours net
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      console.log(`✓ Client ${customer.code} - ${customer.name} créé`)
    }
  }
}

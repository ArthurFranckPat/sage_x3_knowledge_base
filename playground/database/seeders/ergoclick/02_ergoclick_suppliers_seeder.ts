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

    for (const supplier of data.suppliers) {
      // 1. Créer le tiers (BPARTNER)
      await Database.table('bpartner').insert({
        bprnum_0: supplier.code,
        bprnam_0: supplier.name,
        bprsho_0: supplier.short_name,
        bpsflg_0: 'Y', // Fournisseur
        bpcflg_0: 'N', // Pas client
        cry_0: supplier.country,
        lan_0: supplier.country === 'FR' ? 'FRA' : 'ENG',
        enaflg_0: true,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // 2. Créer l'adresse (BPADDRESS)
      await Database.table('bpaddress').insert({
        bprnum_0: supplier.code,
        bpaadd_0: '001', // Adresse principale
        bpaaddlig_0: supplier.address,
        bpaaddlig_1: '',
        bpaaddlig_2: '',
        bpades_0: 'Adresse principale',
        poscod_0: supplier.postal_code,
        cty_0: supplier.city,
        crynam_0: supplier.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      // 3. Créer l'extension fournisseur (BPSUPPLIER)
      await Database.table('bpsupplier').insert({
        bpsnum_0: supplier.code,
        acccod_0: '401' + supplier.code.substring(0, 3), // Compte fournisseur
        cur_0: supplier.country === 'FR' ? 'EUR' : supplier.country === 'CN' ? 'CNY' : 'EUR',
        pte_0: '30NET', // Conditions de paiement : 30 jours net
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      console.log(`✓ Fournisseur ${supplier.code} - ${supplier.name} créé`)
    }
  }
}

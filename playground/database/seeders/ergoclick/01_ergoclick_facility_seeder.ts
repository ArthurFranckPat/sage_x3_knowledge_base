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

    const site = data.company.site

    // Insérer le site
    await Database.table('facility').insert({
      fcy_0: site.code,
      fcynam_0: site.name,
      fcysho_0: site.short_name,
      legcpy_0: 'ERG',
      fcyadd1_0: site.address,
      fcycty_0: site.city,
      fcyposcod_0: site.postal_code,
      crynam_0: site.country,
      fcyflg_0: 'ALL', // Tous les modules actifs
      credat_0: new Date().toISOString().split('T')[0],
      upddat_0: new Date().toISOString().split('T')[0],
      creusr_0: 'ADMIN',
      updusr_0: 'ADMIN',
    })

    console.log(`✓ Site ${site.code} - ${site.name} créé`)
  }
}

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

    for (const routing of data.routings) {
      // 1. Créer l'entête de gamme (ROUTING)
      await Database.table('routing').insert({
        itmref_0: routing.article,
        roualt_0: routing.alternative,
        roudesaxx_0: routing.description,
        usesta_0: 1, // Statut actif
        roustrdat_0: '2024-01-01',
        rouenddat_0: '2099-12-31',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      console.log(`  ✓ Gamme ${routing.article} (${routing.description})`)

      // 2. Créer les opérations (à ajouter dans un futur seeder si besoin)
      for (const operation of routing.operations) {
        console.log(`    • Op ${operation.index}: ${operation.description} (${operation.workstation})`)
        console.log(`      Prépa: ${operation.setup_time}min, Unitaire: ${operation.unit_time}min`)
      }
    }

    console.log(`✓ ${data.routings.length} gammes créées`)
  }
}

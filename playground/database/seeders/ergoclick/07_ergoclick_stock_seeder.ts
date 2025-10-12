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

    const siteCode = data.company.site.code
    const initialStock = data.initial_stock

    // Créer le stock pour les composants
    for (const [itemCode, quantity] of Object.entries(initialStock.components)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: siteCode,
        lot_0: '',
        sto_0: 'STOCK', // Emplacement par défaut
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      
      console.log(`  ✓ ${itemCode}: ${quantity} unités`)
    }

    // Créer le stock pour les semi-finis
    for (const [itemCode, quantity] of Object.entries(initialStock.semifinished)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: siteCode,
        lot_0: '',
        sto_0: 'STOCK',
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      
      console.log(`  ✓ ${itemCode}: ${quantity} unités`)
    }

    // Créer le stock pour les produits finis
    for (const [itemCode, quantity] of Object.entries(initialStock.finished)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: siteCode,
        lot_0: '',
        sto_0: 'STOCK',
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      
      console.log(`  ✓ ${itemCode}: ${quantity} unités`)
    }

    const totalItems = Object.keys(initialStock.components).length + 
                       Object.keys(initialStock.semifinished).length +
                       Object.keys(initialStock.finished).length
    
    console.log(`✓ Stock initial créé pour ${totalItems} articles`)
  }
}

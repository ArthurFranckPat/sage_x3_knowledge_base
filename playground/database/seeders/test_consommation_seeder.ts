import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Database from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    console.log('🌱 Seeding data for consommation query test...')

    // 1. Créer des articles de test
    const articles = [
      { itmref_0: 'ART001', itmdes1_0: 'Article Test 1 - Consommable Bureau' },
      { itmref_0: 'ART002', itmdes1_0: 'Article Test 2 - Fourniture Informatique' },
      { itmref_0: 'ART003', itmdes1_0: 'Article Test 3 - Matériel Entretien' },
      { itmref_0: 'ART004', itmdes1_0: 'Article Test 4 - Pièce Mécanique' },
      { itmref_0: 'ART005', itmdes1_0: 'Article Test 5 - Composant Électronique' },
      { itmref_0: 'ART006', itmdes1_0: 'Article Test 6 - Outillage' },
      { itmref_0: 'ART007', itmdes1_0: 'Article Test 7 - Matière Première A' },
      { itmref_0: 'ART008', itmdes1_0: 'Article Test 8 - Matière Première B' },
      { itmref_0: 'ART009', itmdes1_0: 'Article Test 9 - Produit Fini' },
      { itmref_0: 'ART010', itmdes1_0: 'Article Test 10 - Accessoire' },
    ]

    console.log('  📦 Inserting articles...')
    for (const article of articles) {
      // Vérifier si l'article existe déjà
      const existing = await Database.from('itmmaster')
        .where('itmref_0', article.itmref_0)
        .first()

      if (!existing) {
        await Database.table('itmmaster').insert({
          itmref_0: article.itmref_0,
          itmdes1_0: article.itmdes1_0,
          stu_0: 'UN', // Unité de stock : Unité
          purflg_0: '1', // Acheté
          salflg_0: '1', // Vendu
          itmsta_0: 1, // Statut actif
          created_at: new Date(),
          updated_at: new Date(),
        })
      }
    }
    console.log(`  ✅ ${articles.length} articles checked/created`)

    // 2. Créer des mouvements de stock sur 12 mois
    console.log('  📊 Generating stock movements (12 months)...')

    const now = new Date()
    const movements = []

    // Pour chaque article
    for (const article of articles) {
      // Générer des mouvements sur les 12 derniers mois (dans le PASSÉ)
      for (let monthOffset = 1; monthOffset <= 12; monthOffset++) {
        // Créer une date dans le passé en partant d'il y a 12 mois
        const baseDate = new Date(now)
        baseDate.setMonth(baseDate.getMonth() - 12) // Il y a 12 mois
        baseDate.setMonth(baseDate.getMonth() + monthOffset - 1) // Puis on avance de 0 à 11 mois

        // Nombre de mouvements par mois (entre 4 et 12 sorties)
        const movementsPerMonth = Math.floor(Math.random() * 9) + 4

        for (let i = 0; i < movementsPerMonth; i++) {
          // Date aléatoire dans le mois
          const dayOfMonth = Math.floor(Math.random() * 28) + 1
          const movementDate = new Date(
            baseDate.getFullYear(),
            baseDate.getMonth(),
            dayOfMonth
          )

          // Quantité sortie (négative) entre -1 et -50
          const qty = -(Math.floor(Math.random() * 50) + 1)

          movements.push({
            itmref_0: article.itmref_0,
            iptdat_0: movementDate.toISOString().split('T')[0], // Format YYYY-MM-DD
            qtystu_0: qty,
            trstyp_0: 6, // Type 6 = Sortie de stock
            stu_0: 'UN',
            stofcy_0: 'SITE01',
            wrh_0: 'DEPOT01',
            sta_0: 3, // Statut validé
            vcrnum_0: `MVT${Date.now()}-${i}`,
            vcrtyp_0: 'SOR',
            updcod_0: 'SORSTK',
            creusr_0: 'ADMIN',
            created_at: new Date(),
            updated_at: new Date(),
          })
        }
      }
    }

    // Insérer tous les mouvements
    console.log(`  💾 Inserting ${movements.length} stock movements...`)

    // Insérer par lots de 100 pour meilleures performances
    const batchSize = 100
    for (let i = 0; i < movements.length; i += batchSize) {
      const batch = movements.slice(i, i + batchSize)
      await Database.table('stojou').insert(batch)

      if ((i + batchSize) % 500 === 0) {
        console.log(`    ⏳ ${i + batchSize}/${movements.length} movements inserted...`)
      }
    }

    console.log(`  ✅ ${movements.length} stock movements created`)
    console.log('')
    console.log('📊 Summary:')
    console.log(`  • ${articles.length} articles`)
    console.log(`  • ${movements.length} movements over 12 months`)
    console.log(`  • Average ${Math.floor(movements.length / articles.length)} movements per article`)
    console.log('')
    console.log('🎯 Ready to test the query!')
  }
}

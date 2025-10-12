import Database from '@adonisjs/lucid/services/db'
import fs from 'fs'

async function testQuery() {
  console.log('🔍 Test de la requête FULL OUTER JOIN sur PostgreSQL\n')

  // Lire la requête depuis le fichier
  const query = fs.readFileSync('./test_query_postgres.sql', 'utf-8')

  console.log('📊 Exécution de la requête...\n')

  try {
    const results = await Database.rawQuery(query)
    
    console.log(`✅ Requête exécutée avec succès !`)
    console.log(`📈 ${results.rows.length} résultats\n`)

    if (results.rows.length > 0) {
      console.log('┌─────────────────────────────────────────────────────────────────────────────┐')
      console.log('│                              RÉSULTATS                                      │')
      console.log('├─────────────────────────────────────────────────────────────────────────────┤')
      
      results.rows.forEach((row: any) => {
        console.log(`│ Article: ${row.Article?.padEnd(10)} | ${row['Désignation']?.substring(0, 30).padEnd(30)}│`)
        console.log(`│   Conso mensuelle: ${String(row['Conso mensuelle moy (US/mois)']).padEnd(8)} US/mois (${row['Nb mois pris en compte']} mois)    │`)
        console.log(`│   Conso hebdo:     ${String(row['Conso hebdo moy (US/sem)']).padEnd(8)} US/sem  (${row['Nb semaines prises en compte']} semaines) │`)
        console.log('├─────────────────────────────────────────────────────────────────────────────┤')
      })
      
      console.log('└─────────────────────────────────────────────────────────────────────────────┘')
    }

    console.log('\n✅ PostgreSQL supporte FULL OUTER JOIN - Aucune modification nécessaire !')
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'exécution:', error.message)
  }

  process.exit(0)
}

testQuery()

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Database from '@adonisjs/lucid/services/db'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default class extends BaseSeeder {
  async run() {
    console.log('\n🚀 Démarrage du seeding ErgoClick Dynamics...\n')
    console.log('='.repeat(60))

    // Charger les données JSON
    const dataPath = path.join(__dirname, '../seeds/ergoclick_data.json')
    const rawData = await fs.readFile(dataPath, 'utf-8')
    const data = JSON.parse(rawData)

    // 1. Site
    console.log('\n📍 1/15 - Création du site de production (FR011)...')
    const site = data.company.site
    await Database.table('facility').insert({
      fcy_0: site.code,
      fcynam_0: site.name,
      fcysho_0: site.short_name,
      legcpy_0: 'ERG',
      cry_0: site.country,
      mfgflg_0: 'Y',
      salflg_0: 'Y',
      purflg_0: 'Y',
      wrhflg_0: 'Y',
      credat_0: new Date().toISOString().split('T')[0],
      upddat_0: new Date().toISOString().split('T')[0],
      creusr_0: 'ADMIN',
      updusr_0: 'ADMIN',
    })
    console.log(`✓ Site ${site.code} - ${site.name} créé`)

    // 2. Fournisseurs
    console.log('\n🏭 2/15 - Création des fournisseurs...')
    for (const supplier of data.suppliers) {
      await Database.table('bpartner').insert({
        bprnum_0: supplier.code,
        bprnam_0: supplier.name,
        bprsho_0: supplier.short_name,
        bpsflg_0: 'Y',
        bpcflg_0: 'N',
        cry_0: supplier.country,
        lan_0: supplier.country === 'FR' ? 'FRA' : 'ENG',
        enaflg_0: true,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      await Database.table('bpaddress').insert({
        bpanum_0: supplier.code,
        bpaadd_0: '001',
        bpaaddlig_0: supplier.address,
        bpades_0: 'Adresse principale',
        poscod_0: supplier.postal_code,
        cty_0: supplier.city,
        cry_0: supplier.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      await Database.table('bpsupplier').insert({
        bpsnum_0: supplier.code,
        acccod_0: '401' + supplier.code.substring(0, 3),
        cur_0: supplier.country === 'FR' ? 'EUR' : supplier.country === 'CN' ? 'CNY' : 'EUR',
        pte_0: '30NET',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      console.log(`  ✓ ${supplier.code} - ${supplier.name}`)
    }

    // 3. Clients
    console.log('\n👥 3/15 - Création des clients...')
    for (const customer of data.customers) {
      await Database.table('bpartner').insert({
        bprnum_0: customer.code,
        bprnam_0: customer.name,
        bprsho_0: customer.short_name,
        bpsflg_0: 'N',
        bpcflg_0: 'Y',
        cry_0: customer.country,
        lan_0: customer.country === 'FR' ? 'FRA' : 'ENG',
        enaflg_0: true,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      await Database.table('bpaddress').insert({
        bpanum_0: customer.code,
        bpaadd_0: '001',
        bpaaddlig_0: customer.address,
        bpades_0: 'Adresse principale',
        poscod_0: customer.postal_code,
        cty_0: customer.city,
        cry_0: customer.country,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      await Database.table('bpcustomer').insert({
        bpcnum_0: customer.code,
        acccod_0: '411' + customer.code.substring(3, 6),
        cur_0: 'EUR',
        pte_0: '30NET',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      console.log(`  ✓ ${customer.code} - ${customer.name}`)
    }

    // 4. Articles
    console.log('\n📦 4/15 - Création des articles...')
    const allArticles = [
      ...data.articles.finished_products,
      ...data.articles.semifinished,
      ...data.articles.components,
    ]

    for (const article of allArticles) {
      await Database.table('itmmaster').insert({
        itmref_0: article.code,
        itmdes1_0: article.description,
        tclcod_0: article.category,
        itmsta_0: article.status,
        stu_0: article.unit,
        ssu_0: article.unit,
        puu_0: article.unit,
        sau_0: article.unit,
        pcu_0: article.unit,
        purbaspri_0: article.purchase_price || 0,
        mfgflg_0: article.manufactured ? 'Y' : 'N',
        purflg_0: article.purchased ? 'Y' : 'N',
        salflg_0: article.sold ? 'Y' : 'N',
        itmwei_0: article.weight || 0,
        weu_0: 'KG',
        eancod_0: article.ean || '',
        stomgtcod_0: 'STD',
        negsto_0: 'N',
        puustucoe_0: 1,
        saustucoe_0: 1,
        ssustucoe_0: 1,
        pcustucoe_0: 1,
        lifstrdat_0: '2024-01-01',
        lifenddat_0: '2099-12-31',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      console.log(`  ✓ ${article.code} - ${article.description}`)
    }

    // 5. Articles-Site
    console.log('\n🏢 5/15 - Association articles-site...')
    for (const article of allArticles) {
      await Database.table('itmfacilit').insert({
        itmref_0: article.code,
        stofcy_0: site.code,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
    }
    console.log(`✓ ${allArticles.length} articles associés au site`)

    // 6. Articles-Fournisseurs
    console.log('\n🔗 6/15 - Association composants-fournisseurs...')
    for (const component of data.articles.components) {
      if (component.supplier) {
        await Database.table('itmbps').insert({
          itmref_0: component.code,
          bpsnum_0: component.supplier,
          itmrefbps_0: component.code,
          puu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        console.log(`  ✓ ${component.code} ← ${component.supplier}`)
      }
    }

    // 7. Stock
    console.log('\n📊 7/15 - Initialisation du stock...')
    const initialStock = data.initial_stock
    let stockCount = 0

    for (const [itemCode, quantity] of Object.entries(initialStock.components)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: site.code,
        lot_0: '',
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      stockCount++
    }

    for (const [itemCode, quantity] of Object.entries(initialStock.semifinished)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: site.code,
        lot_0: '',
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      stockCount++
    }

    for (const [itemCode, quantity] of Object.entries(initialStock.finished)) {
      await Database.table('stock').insert({
        itmref_0: itemCode,
        stofcy_0: site.code,
        lot_0: '',
        qtystu_0: quantity as number,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      stockCount++
    }
    console.log(`✓ ${stockCount} lignes de stock créées`)

    // 8. Nomenclatures
    console.log('\n🗂️  8/15 - Création des nomenclatures (BOM)...')
    for (const bom of data.boms) {
      await Database.table('bom').insert({
        itmref_0: bom.article,
        bomalt_0: bom.alternative,
        bomdesaxx_0: bom.description,
        basqty_0: bom.base_quantity,
        usesta_0: 1,
        bohstrdat_0: bom.valid_from,
        bohenddat_0: bom.valid_to,
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      for (const line of bom.lines) {
        await Database.table('bomd').insert({
          itmref_0: bom.article,
          bomalt_0: bom.alternative,
          bomseq_0: line.index,
          cpnitmref_0: line.component,
          likqty_0: line.quantity,
          bomuom_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
      }
      console.log(`  ✓ BOM ${bom.article}`)
    }

    // 9. Gammes
    console.log('\n⚙️  9/15 - Création des gammes de fabrication...')
    for (const routing of data.routings) {
      await Database.table('routing').insert({
        itmref_0: routing.article,
        roualt_0: routing.alternative,
        roudesaxx_0: routing.description,
        usesta_0: 1,
        roustrdat_0: '2024-01-01',
        rouenddat_0: '2099-12-31',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      console.log(`  ✓ Gamme ${routing.article}`)
    }

    // 10. Commandes Achats
    console.log('\n📦 10/15 - Création des commandes fournisseurs...')
    let poCount = 0
    let poLineCount = 0
    for (const order of data.purchase_orders) {
      let rcpflg = 'N'
      if (order.status === 'received') rcpflg = 'Y'
      else if (order.status === 'partial') rcpflg = 'P'

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

      for (const line of order.lines) {
        await Database.table('porderq').insert({
          pohnum_0: order.number,
          poplin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          extrcpdat_0: line.delivery_date,
          pohfcy_0: order.site,
          stu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        poLineCount++
      }
      poCount++
    }
    console.log(`✓ ${poCount} commandes achats (${poLineCount} lignes)`)

    // 11. Réceptions
    console.log('\n📥 11/15 - Création des réceptions fournisseurs...')
    let recCount = 0
    let recLineCount = 0
    for (const receipt of data.purchase_receipts) {
      await Database.table('preceipt').insert({
        pthnum_0: receipt.number,
        bpsnum_0: receipt.supplier,
        rcpdat_0: receipt.receipt_date,
        prhfcy_0: receipt.site,
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      for (const line of receipt.lines) {
        await Database.table('preceiptd').insert({
          pthnum_0: receipt.number,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          pohnum_0: receipt.order,
          poplin_0: line.order_line * 1000,
          prhfcy_0: receipt.site,
          stu_0: 'UN',
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        recLineCount++
      }
      recCount++
    }
    console.log(`✓ ${recCount} réceptions (${recLineCount} lignes)`)

    // 12. Commandes Ventes
    console.log('\n🛒 12/15 - Création des commandes clients...')
    let soCount = 0
    let soLineCount = 0
    for (const order of data.sales_orders) {
      await Database.table('sorder').insert({
        sohnum_0: order.number,
        bpcord_0: order.customer,
        orddat_0: order.order_date,
        demdlvdat_0: order.delivery_date,
        salfcy_0: order.site,
        stofcy_0: order.site,
        ordsta_0: order.status,
        cur_0: 'EUR',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      for (const line of order.lines) {
        await Database.table('sorderq').insert({
          sohnum_0: order.number,
          soplin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          salfcy_0: order.site,
          stofcy_0: order.site,
          demdlvdat_0: order.delivery_date,
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        soLineCount++
      }
      soCount++
    }
    console.log(`✓ ${soCount} commandes clients (${soLineCount} lignes)`)

    // 13. Ordres de Fabrication
    console.log('\n🏭 13/15 - Création des ordres de fabrication...')
    let moCount = 0
    for (const mo of data.manufacturing_orders) {
      await Database.table('mfghead').insert({
        mfgnum_0: mo.number,
        mfgfcy_0: mo.site,
        plnfcy_0: mo.site,
        strdat_0: mo.start_date,
        enddat_0: mo.end_date,
        extqty_0: mo.quantity,
        mfgsta_0: mo.status,
        stu_0: 'UN',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })

      await Database.table('mfgitm').insert({
        mfgnum_0: mo.number,
        itmlin_0: 1000,
        itmref_0: mo.article,
        mfgfcy_0: mo.site,
        plnfcy_0: mo.site,
        mfgsta_0: mo.status,
        stu_0: 'UN',
        credat_0: new Date().toISOString().split('T')[0],
        upddat_0: new Date().toISOString().split('T')[0],
        creusr_0: 'ADMIN',
        updusr_0: 'ADMIN',
      })
      moCount++
    }
    console.log(`✓ ${moCount} ordres de fabrication`)

    // 14. Livraisons
    console.log('\n🚚 14/15 - Création des livraisons clients...')
    let dlvCount = 0
    let dlvLineCount = 0
    for (const delivery of data.deliveries) {
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

      for (const line of delivery.lines) {
        await Database.table('sdeliveryd').insert({
          sdhnum_0: delivery.number,
          sddlin_0: line.line * 1000,
          itmref_0: line.article,
          qtystu_0: line.quantity,
          sohnum_0: delivery.order,
          soplin_0: line.order_line * 1000,
          stofcy_0: delivery.site,
          credat_0: new Date().toISOString().split('T')[0],
          upddat_0: new Date().toISOString().split('T')[0],
          creusr_0: 'ADMIN',
          updusr_0: 'ADMIN',
        })
        dlvLineCount++
      }
      dlvCount++
    }
    console.log(`✓ ${dlvCount} livraisons (${dlvLineCount} lignes)`)

    console.log('\n' + '='.repeat(60))
    console.log('\n✅ Seeding ErgoClick Dynamics COMPLET terminé avec succès !\n')

    console.log('📊 Résumé des Données Créées :')
    console.log('\n🏢 Référentiel :')
    console.log('  • 1 site de production (Lyon FR011)')
    console.log('  • 5 fournisseurs internationaux')
    console.log('  • 8 clients (France, Belgique, Suisse, Suède, Italie)')
    console.log('  • 19 articles (3 PF + 1 SF + 15 composants)')
    console.log('  • 4 nomenclatures complètes')
    console.log('  • 4 gammes de fabrication')
    console.log('  • Stock initial : ~5,100 unités')
    
    console.log('\n💼 Transactions :')
    console.log(`  • ${poCount} commandes fournisseurs (${poLineCount} lignes)`)
    console.log(`  • ${recCount} réceptions (${recLineCount} lignes)`)
    console.log(`  • ${soCount} commandes clients (${soLineCount} lignes)`)
    console.log(`  • ${moCount} ordres de fabrication`)
    console.log(`  • ${dlvCount} livraisons (${dlvLineCount} lignes)`)

    console.log('\n📈 Total Enregistrements Transactionnels : ~' + 
      (poCount + poLineCount + recCount + recLineCount + 
       soCount + soLineCount + moCount + dlvCount + dlvLineCount))

    console.log('\n🧪 Testez les requêtes SQL avancées :')
    console.log('  - Analyse des retards fournisseurs')
    console.log('  - Taux de service clients')
    console.log('  - Traçabilité Achat → Production → Vente')
    console.log('  - Performance fournisseurs\n')
  }
}

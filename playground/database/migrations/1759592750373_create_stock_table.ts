import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stock'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.integer('sta_0') // Statut
      table.string('loc_0', 30) // Emplacement
      table.date('lasrcpdat_0') // Date dernière entrée
      table.string('pcustucoe_0', 30) // Coefficient UC-US
      table.string('stofcy_0', 30) // Site stock
      table.string('qlyctldem_0', 30) // Demande analyse qualité
      table.decimal('qtystu_0', 15, 2) // Quantité US
      table.string('wrh_0', 30) // Dépôt
      table.string('bpslot_0', 30) // Lot fournisseur
      table.string('itmref_0', 20) // Article
      table.string('loccat_0', 30) // Catégorie emplacement
      table.decimal('cumwipqty_0', 15, 2) // Qté en traitement
      table.date('credat_0') // Date création
      table.decimal('qtystuori_0', 15, 2) // Quantité US origine
      table.decimal('qtypcu_0', 15, 2) // Quantité UC
      table.date('upddat_0') // Date modification
      table.string('updusr_0', 30) // Opérateur modif
      table.string('cumallqta_0', 30) // Cumul quantité active allouée US
      table.decimal('qtystuact_0', 15, 2) // Quantité active US
      table.string('stofld1_0', 30) // Champ personnalisé 1
      table.string('stofld2_0', 30) // Champ personnalisé 2
      table.string('owner_0', 30) // Propriétaire
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('cumwipqta_0', 30) // Qté active en trait
      table.string('pcuori_0', 30) // Condit. origine
      table.decimal('qtypcuori_0', 15, 2) // Quantité UC origine
      table.string('auuid_0', 30) // Identifiant unique
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('pjt_0', 30) // Affaire
      table.string('lot_0', 30) // Lot
      table.string('slo_0', 30) // S/lot
      table.string('cunlisnum_0', 20) // Liste inventaire
      table.string('cunlokflg_0', 30) // Inventaire en cours
      table.string('palnum_0', 20) // Identifiant 1
      table.date('rcpdat_0') // Date entrée série
      table.string('lpnnum_0', 20) // Numéro contenant
      table.string('pcu_0', 30) // Unité conditionnement
      table.string('creusr_0', 30) // Opérateur création
      table.string('ctrnum_0', 20) // Identifiant 2
      table.decimal('cumallqty_0', 15, 2) // Cumul quantité allouée en US
      table.string('edtflg_0', 30) // Flag édition
      table.string('expnum_0', 20) // Numéro Export
      table.string('stocou_0', 30) // Chrono stock
      table.date('lasissdat_0') // Date dernière sortie
      table.date('lascundat_0') // Date dernier inventaire
      table.string('sernum_0', 20) // Série
      table.string('loctyp_0', 30) // Type emplacement
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

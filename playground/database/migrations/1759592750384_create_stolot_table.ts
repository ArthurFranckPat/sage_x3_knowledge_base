import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stolot'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('updusr_0', 30) // Opérateur modif
      table.string('act_0', 30) // Titre en unités internationales
      table.string('vcrtyp_0', 30) // Type pièce
      table.date('shldat_0') // Date péremption
      table.date('lotcredat_0') // Date création lot
      table.string('creusr_0', 30) // Opérateur création
      table.string('expnum_0', 20) // Numéro export
      table.string('vcrnum_0', 20) // No pièce (No rec, No liv ou No OF)
      table.string('usrfld1_0', 30) // Champ personnalisé stock 1
      table.string('vcrlin_0', 30) // No ligne pièce
      table.string('usrfld4_0', 30) // Champ personnalisé stock 4
      table.string('shl_0', 30) // Délai péremption
      table.string('pot_0', 30) // Titre
      table.string('bpslot_0', 30) // Lot fournisseur
      table.string('itmref_0', 20) // Article
      table.string('shllti_0', 30) // Délai recontrôle
      table.date('x1opendat_0') // Date ouverture
      table.date('credat_0') // Date création
      table.string('usrfld2_0', 30) // Champ personnalisé stock 2
      table.string('usrfld3_0', 30) // Champ personnalisé stock 3
      table.date('upddat_0') // Date modification
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('dlu_0', 30) // Coefficient DLU
      table.string('shluom_0', 30) // Unité tps péremption
      table.string('shlltiuom_0', 30) // Unité tps recontrole
      table.date('newltidat_0') // Date recontrôle
      table.date('dludat_0') // Date limite utilisation
      table.date('ltidat_0') // Date contrôle
      table.string('auuid_0', 30) // Identifiant unique
      table.string('eccvalmin_0', 30) // Version mineure
      table.string('lot_0', 30) // Lot
      table.string('slo_0', 30) // S/lot
      table.string('refper_0', 20) // Référence péremption
      table.string('bpsnum_0', 20) // Fournisseur
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

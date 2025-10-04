import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bom'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.date('upddat_0') // Date modification
      table.string('cfgvcrnum_0', 20) // N.pièce config.
      table.string('bomalttyp_0', 30) // Type alternative nomenclature
      table.string('bomdesaxx_0', 60) // Désignation entête
      table.integer('usesta_0') // Statut utilisation
      table.string('bomrle_0', 30) // Indice révision
      table.decimal('basqty_0', 15, 2) // Quantité base
      table.decimal('qtycod_0', 15, 2) // Unité de gestion
      table.date('bohstrdat_0') // Date début validité
      table.date('bohenddat_0') // Date fin validité
      table.string('acscod_0', 20) // Code accès
      table.date('credat_0') // Date création
      table.string('heatex_0', 30) // Texte entête
      table.string('bomalt_0', 30) // Alternative nomenclature
      table.date('xexpinfdat_0') // Date export
      table.string('x1_prefix_0', 20) // Préfixe
      table.string('ident1_0', 30) // Identifiant 1
      table.string('xexpinf_0', 30) // Indicateur Export
      table.string('updusr_0', 30) // Opérateur modification
      table.string('expnum_0', 20) // Numéro Export
      table.string('itmref_0', 20) // Article parent
      table.string('creusr_0', 30) // Opérateur création
      table.string('npipro_0', 30) // Prototype
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('xcommcpvv_0', 30) // Comment cumul PVV
      table.string('xnbempr_0', 30) // Nombre d'empreintes
      table.string('auuid_0', 30) // Identifiant unique
      table.string('plmatturl_0', 30) // Documents liés
      table.string('xcfcod_0', 20) // Code variante
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

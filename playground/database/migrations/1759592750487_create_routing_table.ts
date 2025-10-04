import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'routing'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('fcy_0', 30) // Site
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('auuid_0', 30) // Identifiant unique
      table.string('creusr_0', 30) // Opérateur création
      table.string('itmref_0', 20) // Gamme
      table.string('expnum_0', 20) // Numéro export
      table.string('cfmflg_0', 30) // Validée
      table.string('ident1_0', 30) // Identifiant 1
      table.date('upddat_0') // Date modification
      table.string('updusr_0', 30) // Opérateur modif
      table.date('credat_0') // Date création
      table.string('cfgvcrnum_0', 20) // N.pièce config.
      table.string('acscod_0', 20) // Code accès
      table.string('roualt_0', 30) // Alternative gamme
      table.date('laswordat_0') // Date dernier lancement
      table.decimal('lasworqty_0', 15, 2) // Quantité dernier lancement
      table.decimal('wormaxqty_0', 15, 2) // Quantité maximum lancement
      table.decimal('worminqty_0', 15, 2) // Quantité minimum lancement
      table.string('plnnum_0', 20) // Numéro plan entête gamme
      table.string('wortyp_0', 30) // Mode gestion OF
      table.datetime('timuomcod_0') // Unité temps
      table.date('rouenddat_0') // Date fin validité
      table.date('roustrdat_0') // Date début validité
      table.integer('usesta_0') // Statut utilisation
      table.string('roudesaxx_0', 60) // Désignation entête
      table.string('roudes_0', 60) // Désignation entête
      table.string('roupct_0', 30) // Image entête gamme
      table.string('texnum_0', 20) // Texte entête gamme
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stoloc'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('updusr_0', 30) // Opérateur modif
      table.string('pcustucoe_0', 30) // Coefficient UC-US
      table.string('ocpcod_0', 20) // Occupation
      table.string('ppsseq_0', 30) // Ordre proposition
      table.date('avadat_0') // Date disponibilité
      table.string('avahou_0', 30) // Heure disponibilité
      table.decimal('maxqtypcu_0', 15, 2) // Quantité maximum UC
      table.string('allusr_0', 30) // Opérateur réservation
      table.date('alldat_0') // Date réservation
      table.string('allhou_0', 30) // Heure réservation
      table.string('creusr_0', 30) // Opérateur création
      table.string('expnum_0', 20) // Numéro export
      table.string('loc_0', 30) // Emplacement
      table.string('loctyp_0', 30) // Type emplacement
      table.string('stofcy_0', 30) // Site stock
      table.decimal('qtypcu_0', 15, 2) // Quantité UC
      table.string('wrh_0', 30) // Dépôt
      table.string('locnumfmt_0', 20) // Format emplacement
      table.string('frgmgtmod_0', 30) // Gestion libération
      table.string('temlti_0', 30) // Durée temporisation
      table.string('wid_0', 30) // Largeur
      table.string('maxauzwei_0', 30) // Poids maximum
      table.string('loccat_0', 30) // Catégorie emplacement
      table.date('credat_0') // Date création
      table.string('x1loctyp_0', 30) // Type
      table.date('upddat_0') // Date modification
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('x1nocbn_0', 30) // Exclu du CBN
      table.string('x1claffcod_0', 20) // Classe d'affectation
      table.string('x1clrotcod_0', 20) // Classe de rotation
      table.string('x1locallee_0', 30) // Allée
      table.string('x1locrangee_0', 30) // Rangée
      table.string('x1assignauto_0', 30) // Adressage automatiqu
      table.string('x1localveole_0', 30) // Alvéole
      table.string('filmgtflg_0', 30) // Gestion remplissage
      table.string('reaflg_0', 30) // Réapprovisionnable
      table.string('monitmflg_0', 30) // Mono-article
      table.string('dedflg_0', 30) // Dédié
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x1locniveau_0', 30) // Niveau
      table.integer('loksta_0') // Bloqués
      table.string('auzsst_0', 30) // S/statuts autorisés
      table.string('hei_0', 30) // Hauteur
      table.string('dth_0', 30) // Profondeur
      table.string('cunlokflg_0', 30) // Inventaire en cours
      table.string('pcu_0', 30) // Unité conditionnement
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

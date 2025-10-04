import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'porderp'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('itmdes1_0', 60) // Désignation article
      table.string('discrgval4_0', 30) // Valeur4 remise/frais
      table.string('taxiss_0', 30) // Taxe sortie
      table.string('taxoth1_0', 30) // Autre taxe 1
      table.string('taxoth2_0', 30) // Autre taxe 2
      table.string('poplin_0', 30) // Ligne commande
      table.string('tsicod_0', 20) // Famille statistique
      table.string('pohtyp_0', 30) // Type commande
      table.string('linrevnum_0', 20) // No avenant
      table.decimal('gropri_0', 15, 2) // Prix brut
      table.decimal('priren_0', 15, 2) // Motif prix
      table.string('prhfcy_0', 30) // Site réception
      table.string('vat_0', 30) // Taxe
      table.string('itmref_0', 20) // Article
      table.string('popseq_0', 30) // Séquence
      table.decimal('netpri_0', 15, 2) // Prix net
      table.string('pohnum_0', 20) // No commande
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.string('linbuy_0', 30) // Acheteur
      table.date('strdat_0') // Date début application
      table.string('popcreflg_0', 20) // Indicateur creation
      table.string('itmdes_0', 60) // Désignation article traduite
      table.string('eecincrat_0', 30) // Majoration statistique DEB
      table.date('popdat_0') // Date fin application
      table.string('updusr_0', 30) // Opérateur modification
      table.string('expnum_0', 20) // Numéro Export
      table.string('quaflg_0', 30) // Soumis à contrôle
      table.string('creusr_0', 30) // Opérateur création
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('mattol_0', 30) // Règle rapprochement
      table.string('auuid_0', 30) // Identifiant unique
      table.string('fcyadd_0', 30) // Adresse réception
      table.string('pjt_0', 30) // Affaire
      table.string('discrgren7_0', 30) // Motif7 remise/frais
      table.string('discrgren8_0', 30) // Motif8 remise/frais
      table.string('discrgren9_0', 30) // Motif9 remise/frais
      table.string('discrgval8_0', 30) // Valeur8 remise/frais
      table.string('discrgval9_0', 30) // Valeur9 remise/frais
      table.string('discrgren1_0', 30) // Motif1 remise/frais
      table.string('discrgren2_0', 30) // Motif2 remise/frais
      table.string('discrgren3_0', 30) // Motif3 remise/frais
      table.string('discrgren4_0', 30) // Motif4 remise/frais
      table.string('discrgren5_0', 30) // Motif5 remise/frais
      table.string('discrgren6_0', 30) // Motif6 Remise/frais
      table.string('oricry_0', 30) // Pays origine
      table.string('discrgval5_0', 30) // Valeur5 remise/frais
      table.string('discrgval6_0', 30) // Valeur6 remise/frais
      table.string('discrgval7_0', 30) // Valeur7 remise/frais
      table.string('discrgval1_0', 30) // Valeur1 remise/frais
      table.string('discrgval2_0', 30) // Valeur2 remise/frais
      table.string('discrgval3_0', 30) // Valeur3 remise/frais
      table.string('taxrcp_0', 30) // Taxe entrée
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

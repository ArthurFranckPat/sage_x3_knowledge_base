import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mfgitm'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('cstflg_0', 30) // Valorisation
      table.string('updusr_0', 30) // Opérateur modification
      table.string('vcrnumori_0', 20) // No pièce origine (No rec ou No OF)
      table.string('vcrtypori_0', 30) // Type pièce origine
      table.string('vcrlinori_0', 30) // No ligne pièce origine
      table.string('pjt_0', 30) // Affaire
      table.string('tclcod_0', 20) // Catégorie article
      table.decimal('rmnextqty_0', 15, 2) // Quantité restante
      table.string('lot_0', 30) // Lot
      table.string('mfgpio_0', 30) // Priorité
      table.string('bomalt_0', 30) // Alternative nomenclature
      table.string('bpctypden_0', 30) // Type destinataire(site,client)
      table.date('strdat_0') // Date début
      table.date('enddat_0') // Date fin
      table.string('fmi_0', 30) // Origine article
      table.date('x4datref_0') // Date référence péremption
      table.string('itmtyp_0', 30) // Type produit
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('eccvalmin_0', 30) // Version mineure
      table.string('xnbempr_0', 30) // Nombre d'empreintes
      table.string('auuid_0', 30) // Identifiant unique
      table.string('trkfirstc_0', 30) // Date début suivi
      table.string('trklastc_0', 30) // Date fin suivi
      table.string('itmlin_0', 30) // Ligne OF
      table.string('plnfcy_0', 30) // Site planification
      table.integer('mfgsta_0') // Statut ordre de fabrication
      table.string('mfgfcy_0', 30) // Site production
      table.date('x4datper_0') // Date péremption
      table.integer('itmsta_0') // Etat ligne
      table.string('wipnum_0', 20) // Numéro ordre encours
      table.string('mfgdes_0', 60) // Désignation OF
      table.string('uom_0', 30) // Unité lancement
      table.decimal('uomextqty_0', 15, 2) // Quantité lancement
      table.string('uomstucoe_0', 30) // Coefficient UOM/US
      table.decimal('rejcplqty_0', 15, 2) // Quantité réalisée rejetée
      table.decimal('quacplqty_0', 15, 2) // Quantité réalisée sous contrôle
      table.string('mfitrkflg_0', 30) // Flag suivi
      table.date('clodat_0') // Date clôture
      table.date('credat_0') // Date création
      table.string('trkfirst_0', 30) // Date premier suivi
      table.string('trklast_0', 30) // Date dernier suivi
      table.string('tsicod_0', 20) // Famille statistique
      table.decimal('cplqty_0', 15, 2) // Quantité réalisée totale
      table.decimal('basqty_0', 15, 2) // Quantité base
      table.string('bomofs_0', 30) // Délai opération
      table.decimal('likqtycod_0', 15, 2) // Code quantité lien
      table.decimal('qtyrnd_0', 15, 2) // Arrondi quantité
      table.decimal('likqty_0', 15, 2) // Quantité lien
      table.string('bomope_0', 30) // Numéro opération
      table.date('upddat_0') // Date modification
      table.string('mfgnum_0', 20) // Numéro ordre de fabrication
      table.string('abccls_0', 30) // Catégorie ABC
      table.string('expnum_0', 20) // Numéro export
      table.string('bpcnum_0', 20) // Destinataire
      table.string('creusr_0', 30) // Opérateur création
      table.string('mfglin_0', 30) // No ligne
      table.decimal('extqty_0', 15, 2) // Quantité prévue
      table.string('itmref_0', 20) // Article
      table.string('vcrseqori_0', 30) // No séquence pièce origine
      table.string('xversionc_0', 30) // Version composé
      table.string('planner_0', 30) // Planificateur
      table.string('stu_0', 30) // Unité stock
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

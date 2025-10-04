import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bomd'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('openumlev_0', 20) // Suffixe opération gamme (PmSim)
      table.date('upddat_0') // Date modification
      table.string('bomstucoe_0', 30) // Coefficient UOM-US
      table.decimal('bomqty_0', 15, 2) // Quantité lien UM
      table.string('pkc_0', 30) // Code à servir
      table.string('x4pkc_0', 30) // Code à servir
      table.string('bomalttyp_0', 30) // Type alternative nomenclature
      table.string('xcombomp_0', 30) // Commentaire
      table.string('cpnitmref_0', 20) // Article composant
      table.string('bomstrlot_0', 30) // Lot début validité
      table.string('bomendlot_0', 30) // Lot fin validité
      table.string('cpnope_0', 30) // Opération gamme
      table.string('bomofs_0', 30) // Délai opération
      table.string('bomseq_0', 30) // Séquence
      table.date('bomstrdat_0') // Date début validité
      table.date('bomenddat_0') // Date fin validité
      table.string('ocnprn_0', 30) // Impression accusé réception client
      table.string('invprn_0', 30) // Impression facture
      table.string('cpntyp_0', 30) // Type composant
      table.string('bomseqnum_0', 20) // Complément séquence
      table.decimal('likqtycod_0', 15, 2) // Code quantité lien
      table.decimal('qtyrnd_0', 15, 2) // Arrondi quantité
      table.string('bomsho_0', 30) // Désignation lien
      table.decimal('likqty_0', 15, 2) // Quantité lien
      table.string('picprn_0', 30) // Impression bon matières
      table.date('credat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.string('forsel_0', 30) // Formule sélection
      table.string('bomuom_0', 30) // UOM
      table.string('itmref_0', 20) // Article parent
      table.string('cstflg_0', 30) // Valorisation
      table.string('ndeprn_0', 30) // Impression bon livraison
      table.string('likrle_0', 30) // Indice révision lien
      table.string('expnum_0', 20) // Numéro Export
      table.string('creusr_0', 30) // Opérateur création
      table.string('xversion_0', 30) // Version
      table.string('bomtexnum_0', 20) // Texte lien nomenclature
      table.string('sca_0', 30) // Pourcentage de rebut
      table.string('x1cni_0', 30) // Contrainte obligatoire
      table.string('x1toprep_0', 30) // A préparer
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('eccrlegrp_0', 30) // Groupe de révision
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('eccvalmin_0', 30) // Version mineure
      table.string('levset_0', 30) // Niveau paramétrage
      table.string('xqsp_0', 30) // QSP
      table.string('xiformule_0', 30) // Indicateur formule
      table.string('itmtolpos_0', 30) // Tolérance pesée +(%)
      table.string('itmtolneg_0', 30) // Tolérance pesée -(%)
      table.string('auuid_0', 30) // Identifiant unique
      table.decimal('forqty_0', 15, 2) // Formule qté
      table.string('ctn_0', 30) // Container
      table.string('x4limend_0', 30) // Pièce réelle / Pièce de simulation
      table.string('x4limflg_0', 30) // Version active
      table.string('x4limtyp_0', 30) // Version arrêtée
      table.string('x4limstr_0', 30) // Version saisie
      table.string('scoflg_0', 30) // Type d'approvisionnement
      table.string('bomalt_0', 30) // Alternative nomenclature
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

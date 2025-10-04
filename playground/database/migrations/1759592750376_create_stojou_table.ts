import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stojou'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('owner_0', 30) // Propriétaire
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('eccvalmaj_0', 30) // Version majeure
      table.decimal('amtdev_0', 15, 2) // Ecart non absorbé
      table.decimal('amtdev2_0', 15, 2) // Ecart non absorbé
      table.string('serfin_0', 30) // Série fin
      table.date('newltidat_0') // Date recontrôle
      table.date('dludat_0') // Date limite utilisation
      table.string('betcpy_0', 30) // Inter-sociétés
      table.string('auuid_0', 30) // Identifiant unique
      table.string('die_0', 30) // Code axe
      table.string('eccvalmin_0', 30) // Version mineure
      table.string('pjt_0', 30) // Affaire
      table.string('lot_0', 30) // Lot
      table.string('slo_0', 30) // S/lot
      table.string('aggifaflg_0', 30) // Mvt agrégé interface
      table.string('pitvalflg_0', 30) // Agrégé
      table.string('pitvalflg2_0', 30) // Agrégé
      table.string('serdeb_0', 30) // Série début
      table.string('pronum_0', 20) // Numéro process
      table.string('vcrnumori_0', 20) // No pièce origine (No rec ou No OF)
      table.string('vcrtypori_0', 30) // Type pièce origine
      table.string('stu_0', 30) // Unité stock
      table.string('regflg_0', 30) // Mouvement régularisé
      table.string('palnum_0', 20) // Identifiant 1
      table.string('vcrtypreg_0', 30) // Type pièce régul
      table.string('stofcy_0', 30) // Site stockage
      table.string('cce_0', 30) // Section analytique
      table.string('lpnnum_0', 20) // Numéro contenant
      table.string('creusr_0', 30) // Opérateur création
      table.string('updcod_0', 20) // Mise à jour
      table.string('ctrnum_0', 20) // Identifiant 2
      table.date('iptdat_0') // Date imputation
      table.string('expnum_0', 20) // Numéro export
      table.string('sernum_0', 20) // Série
      table.string('trstyp_0', 30) // Type transaction
      table.string('finrspfcy_0', 30) // Site Responsable financier
      table.string('vcrnum_0', 20) // No pièce (No rec, No liv ou No OF)
      table.string('pcustuori_0', 30) // Coeff. origine
      table.string('vcrlinori_0', 30) // No ligne pièce origine
      table.string('cstcou_0', 30) // Chrono coûts FIFO
      table.string('vcrseqori_0', 30) // No séquence pièce origine
      table.string('vcrnumreg_0', 20) // No pièce régularisation
      table.string('vcrlinreg_0', 30) // No ligne pièce régul
      table.string('itmref_0', 20) // Article
      table.string('xmaccstreg_0', 30) // Coût machine
      table.string('xmaccst_0', 30) // Coût machine
      table.string('xlabcstreg_0', 30) // Coût main-d'oeuvre
      table.string('xlabcst_0', 30) // Coût main-d'oeuvre
      table.string('xscocstreg_0', 30) // Coût sous-traitance
      table.string('xscocst_0', 30) // Coût sous-traitance
      table.string('xovematreg_0', 30) // Coût frais généraux matière
      table.string('xovematcst_0', 30) // Coût frais généraux matière
      table.string('xovemacreg_0', 30) // Coût frais généraux machine
      table.string('xovemaccst_0', 30) // Coût frais généraux machine
      table.string('xovelabreg_0', 30) // Coût frais généraux main-d'oeuvre
      table.string('xovelabcst_0', 30) // Coût frais généraux main-d'oeuvre
      table.integer('sta_0') // Statut
      table.string('xmatcstreg_0', 30) // Coût matière
      table.string('xmatcst_0', 30) // Coût matière
      table.string('usrfld1_0', 30) // Champ personnalisé stock 1
      table.string('xovescocst_0', 30) // Coût frais généraux sous-traitance
      table.string('xovescoreg_0', 30) // Coût frais généraux sous-traitance
      table.string('bprnum_0', 20) // Numéro tiers
      table.string('vcrlin_0', 30) // No ligne pièce
      table.string('usrfld3_0', 30) // Champ personnalisé stock 3
      table.string('usrfld4_0', 30) // Champ personnalisé stock 4
      table.string('prnflg_0', 30) // Imprimé
      table.string('lbefmt_0', 30) // Format étiquette
      table.string('qlyctldem_0', 30) // Demande analyse qualité
      table.decimal('qtystu_0', 15, 2) // Quantité US
      table.decimal('qtypcu_0', 15, 2) // Quantité
      table.string('wrh_0', 30) // Dépôt
      table.string('loc_0', 30) // Emplacement
      table.string('gte_0', 30) // Type de pièce
      table.string('pot_0', 30) // Titre
      table.string('mvtseq_0', 30) // Séquence
      table.string('pcu_0', 30) // Unité
      table.string('bpslot_0', 30) // Lot fournisseur
      table.decimal('amtord_0', 15, 2) // Montant ordre
      table.decimal('amtval_0', 15, 2) // Montant mouvement
      table.decimal('amtval2_0', 15, 2) // Montant mouvement
      table.string('varord_0', 30) // Variation ordre
      table.string('varval_0', 30) // Variation mouvement
      table.string('varval2_0', 30) // Variation mouvement
      table.date('cstdat_0') // Date FIFO
      table.datetime('csttim_0') // Heure FIFO
      table.decimal('priord_0', 15, 2) // Prix ordre
      table.date('upddat_0') // Date modification
      table.string('usrfld2_0', 30) // Champ personnalisé stock 2
      table.date('credat_0') // Date création
      table.date('cremvtdat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.string('mvtdes_0', 60) // Désignation mouvement
      table.decimal('prinat_0', 15, 2) // Nature prix origine
      table.decimal('prinat2_0', 15, 2) // Nature prix origine
      table.string('act_0', 30) // Titre en unités internationales
      table.decimal('actqty_0', 15, 2) // Quantité active
      table.date('accdat_0') // Date comptable
      table.string('vcrtyp_0', 30) // Type pièce
      table.string('mvtind_0', 30) // Indice
      table.string('pcustucoe_0', 30) // Coefficient
      table.decimal('priregflg_0', 15, 2) // Flag régularisation
      table.string('numvcr_0', 20) // Pièce comptable
      table.date('shldat_0') // Date péremption
      table.string('cremvtseq_0', 30) // Séquence origine
      table.string('entcod_0', 20) // Code pièce automatique
      table.string('lbenbr_0', 30) // Nombre étiquettes
      table.string('trsfam_0', 30) // Famille mouvement
      table.datetime('cremvttim_0') // Heure
      table.datetime('cretim_0') // Heure
      table.string('stofld1_0', 30) // Champ personnalisé 1
      table.string('stofld2_0', 30) // Champ personnalisé 2
      table.decimal('prival_0', 15, 2) // Prix valorisé
      table.decimal('prival2_0', 15, 2) // Prix valorisé
      table.string('pcuori_0', 30) // UC origine
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sdeliveryd'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.date('credat_0') // Date création
      table.string('vacitm_0', 30) // Niveau taxe
      table.string('itmdes1_0', 60) // Désignation article
      table.decimal('rcpqtystu_0', 15, 2) // Quantité réceptionnée US
      table.string('xflaglm_0', 30) // Flag ligne masquée
      table.string('soplin_0', 30) // Ligne commande
      table.datetime('xdlvtimfin_0') // Heure fin réception
      table.string('vts_0', 30) // Ss-type trans.Vertex
      table.string('vtc_0', 30) // Code transac. Vertex
      table.string('taxgeoflg_0', 30) // Flag Geo taxed
      table.string('taxflg_0', 30) // Flag taxable
      table.string('taxregflg_0', 30) // Flag taxe enregistré
      table.string('tsicod_0', 20) // Famille statistique
      table.decimal('clcamt2_0', 15, 2) // Base2 calcul taxe
      table.string('repcoe_0', 30) // Coef pondération
      table.decimal('gropri_0', 15, 2) // Prix brut
      table.decimal('priren_0', 15, 2) // Motif prix
      table.string('vat_0', 30) // Taxe
      table.decimal('clcamt1_0', 15, 2) // Base1 calcul taxe
      table.string('prptex_0', 30) // Texte ligne préparation
      table.string('rep1_0', 30) // Représentant 1
      table.string('rep2_0', 30) // Représentant 2
      table.string('ddtanum_0', 20) // Elt fact lig répart
      table.string('ddtanot_0', 30) // Elt fact lig répart
      table.string('prhnum_0', 20) // Bon préparation
      table.decimal('netpri_0', 15, 2) // Prix net
      table.decimal('qty_0', 15, 2) // Quantité livrée
      table.string('wrh_0', 30) // Dépôt
      table.decimal('rtnqty_0', 15, 2) // Quantité retour
      table.string('sddtex_0', 30) // Texte ligne livraison
      table.string('sdhnum_0', 20) // No livraison
      table.string('sohnum_0', 20) // No commande
      table.date('shidat_0') // Date expédition
      table.string('dsplinflg_0', 30) // Répartition
      table.decimal('qtystu_0', 15, 2) // Quantité livrée US
      table.string('reprat1_0', 30) // Taux commission 1
      table.string('saustucoe_0', 30) // Coefficient UV-US
      table.string('useplc_0', 30) // Lieu consommation
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.string('updusr_0', 30) // Opérateur modif
      table.string('xovelab_0', 30) // PMP fg m-o
      table.string('xovesco_0', 30) // PMP fg s/t
      table.string('vcrlinori_0', 30) // No ligne pièce origine
      table.string('rattaxlin_0', 30) // Taux de taxe
      table.string('pckflg_0', 30) // Colisage
      table.string('vcrseqori_0', 30) // No séquence pièce origine
      table.string('vcrtypori_0', 30) // Type pièce origine
      table.string('stu_0', 30) // Unité stock
      table.string('soqseq_0', 30) // Numéro séquence
      table.decimal('rtnqtystu_0', 15, 2) // Quantité retour US
      table.string('sohcat_0', 30) // Catégorie commande
      table.string('bpcord_0', 30) // Client commande
      table.string('xcusordref_0', 20) // Référence commande client
      table.string('expnum_0', 20) // Numéro export
      table.string('orilin_0', 30) // Ligne ori gratuit
      table.string('creusr_0', 30) // Opérateur création
      table.string('xversion_0', 30) // Version
      table.string('stofcy_0', 30) // Site expédition
      table.string('itmref_0', 20) // Article
      table.string('weu_0', 30) // Unité poids
      table.string('dspweu_0', 30) // Unité poids
      table.string('stomgtcod_0', 20) // Gestion stock
      table.string('pfm_0', 30) // Marge
      table.string('dspvou_0', 30) // Unité Volume
      table.string('discrgval8_0', 30) // Valeur8 remise/frais
      table.string('discrgval9_0', 30) // Valeur9 remise/frais
      table.string('discrgren1_0', 30) // Motif1 remise/frais
      table.string('discrgren2_0', 30) // Motif2 remise/frais
      table.string('discrgren3_0', 30) // Motif3 remise/frais
      table.string('discrgren4_0', 30) // Motif4 remise/frais
      table.string('discrgren5_0', 30) // Motif5 remise/frais
      table.string('discrgren6_0', 30) // Motif6 Remise/frais
      table.string('discrgval1_0', 30) // Valeur1 remise/frais
      table.string('discrgval2_0', 30) // Valeur2 remise/frais
      table.string('discrgval3_0', 30) // Valeur3 remise/frais
      table.string('discrgval4_0', 30) // Valeur4 remise/frais
      table.string('lincfmflg_0', 30) // Ligne validée
      table.string('discrgval5_0', 30) // Valeur5 remise/frais
      table.decimal('cprpri_0', 15, 2) // Prix revient
      table.string('bpaadd_0', 30) // Adresse livraison
      table.string('ndeprnbom_0', 30) // Composant imp BL
      table.string('invprnbom_0', 30) // Composant imp Fac
      table.decimal('netprinot_0', 15, 2) // Prix net HT
      table.decimal('netpriati_0', 15, 2) // Prix net TTC
      table.decimal('x4qtyfac_0', 15, 2) // Quantité facturée
      table.string('impnumlig_0', 20) // Ligne import
      table.string('sdhcat_0', 30) // Catégorie livraison
      table.string('untwei_0', 30) // Poids unitaire
      table.string('geocod_0', 20) // Géo code
      table.string('insctyflg_0', 30) // Flag intérieur ville
      table.string('itmdes_0', 60) // Désignation article traduite
      table.integer('bastaxlin_0') // Montant taxable
      table.string('rcpflg_0', 30) // Flag de réception
      table.string('xmatcst_0', 30) // PMP matière
      table.string('xmaccst_0', 30) // PMP machine
      table.string('xlabcst_0', 30) // PMP main-d'oeuvre
      table.string('xscocst_0', 30) // PMP sous-traitance
      table.string('xovemat_0', 30) // PMP fg matière
      table.string('xovemac_0', 30) // PMP fg machine
      table.date('xshidatfin_0') // Date fin enlèvement
      table.datetime('xshitimdeb_0') // Heure début enlèv
      table.datetime('xshitimfin_0') // Heure fin enlev
      table.string('xligori_0', 30) // N° ligne d'origine
      table.string('x4desadvlog_0', 60) // DESADV tiers log
      table.string('vcrnumori_0', 20) // No pièce origine
      table.decimal('pacqtystu_0', 15, 2) // Qté colisée US
      table.string('dsplinvol_0', 30) // Volume ligne
      table.string('xtext0_0', 30) // Zone/date/heure dist
      table.string('xkanban_0', 30) // N° Etiquette KANBAN
      table.date('xdlvdatdeb_0') // Date de besoin
      table.string('dsplinwei_0', 30) // Poids ligne
      table.string('lot_0', 30) // Filtre lot (exclusif)
      table.integer('sta_0') // Filtre statuts (exclusif)
      table.string('loc_0', 30) // Filtre emplacement
      table.decimal('wrtqty_0', 15, 2) // Quantité en attente de retour
      table.decimal('wrtqtystu_0', 15, 2) // Quantité en attente de retour US
      table.decimal('oalqtystu_0', 15, 2) // Qté allouée sur la commande US
      table.string('focflg_0', 30) // Gratuit
      table.string('sddlin_0', 30) // Ligne livraison
      table.string('sau_0', 30) // Unité vente
      table.string('lintyp_0', 30) // Type ligne
      table.string('pckcap_0', 30) // Capacité emballage
      table.string('pjt_0', 30) // Affaire
      table.string('discrgren7_0', 30) // Motif7 remise/frais
      table.string('discrgren8_0', 30) // Motif8 remise/frais
      table.string('discrgren9_0', 30) // Motif9 remise/frais
      table.string('reprat2_0', 30) // Taux commission 2
      table.string('x4facok_0', 30) // Facturé
      table.string('pck_0', 30) // Emballage
      table.string('discrgval6_0', 30) // Valeur6 remise/frais
      table.string('discrgval7_0', 30) // Valeur7 remise/frais
      table.string('xligmerori_0', 30) // N° ligne mère origine
      table.string('xssligori_0', 30) // N° sous-ligne origine
      table.string('x4rgopl_0', 30) // Options de transport
      table.string('x4exclrfad_0', 30) // Exclusion RFA
      table.string('xdestfin_0', 60) // Destination Finale
      table.string('xdesint_0', 60) // Id ext. destination
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('sstcod_0', 20) // Code taxe SST
      table.string('eccvalmin_0', 30) // Version mineure
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('prelin_0', 30) // Ligne préparation
      table.string('auuid_0', 30) // Identifiant unique
      table.string('xalert_0', 30) // Flg alert variation
      table.date('xdlvdatfin_0') // Date fin réception
      table.datetime('xdlvtimdeb_0') // Heure début récepti
      table.string('xpntdecha_0', 30) // Point déchargement
      table.string('xpntmonte_0', 30) // Point de destination
      table.date('xshidatdeb_0') // Date déb enlèvement
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

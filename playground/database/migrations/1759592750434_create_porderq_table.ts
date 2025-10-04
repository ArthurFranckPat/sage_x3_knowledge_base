import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'porderq'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('x4avmotd_0', 30) // 
      table.string('zfabnum_0', 20) // Code du fabricant
      table.string('zitmreffab_0', 20) // Référence fabricant
      table.string('x4exclrfad_0', 30) // Exclusion RFA
      table.date('zdatcof_0') // Date confirmée fournisseur
      table.string('x4hwee_0', 30) // 
      table.string('x4hyea_0', 30) // 
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('cstpur_0', 30) // Coût achat unitaire
      table.string('lincstpur_0', 30) // Coût achat
      table.string('fcscstpur_0', 30) // Total charges achat
      table.string('fcscpr_0', 30) // Total charges stock
      table.string('reacstpur_0', 30) // Coût achat réalisé
      table.decimal('clcamt7_0', 15, 2) // Base de calcul numéro 7 pour taxe
      table.string('stcnum_0', 20) // Structure de coûts
      table.string('x4avmotcomd_0', 30) // Trans. entrée divers
      table.string('x4hextrcpd_0', 30) // Dépôt cible
      table.string('x4hcad_0', 30) // Stock négatif
      table.decimal('linamtcpr_0', 15, 2) // Coût stock
      table.string('x4flgblc_0', 30) // Blocage
      table.decimal('cpramt_0', 15, 2) // Coût fixe unitaire
      table.string('xalerte_0', 30) // Alerte variation
      table.string('cpr_0', 30) // Coût stock unitaire
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('eccvalmin_0', 30) // Version mineure
      table.decimal('clcamt3_0', 15, 2) // Base de calcul numéro 3 pour taxe
      table.decimal('clcamt4_0', 15, 2) // Base de calcul numéro 4 pour taxe
      table.decimal('clcamt5_0', 15, 2) // Base de calcul numéro 5 pour taxe
      table.decimal('clcamt6_0', 15, 2) // Base de calcul numéro 6 pour taxe
      table.datetime('xdlvtimdeb_0') // Heure début récepti
      table.decimal('likqtycoe_0', 15, 2) // Coefficient quantité lien
      table.string('cmmflg_0', 30) // Indicateur d'engagement
      table.string('zsigfab_0', 30) // Sigle fabricant
      table.string('x4pohfab_0', 30) // Fabricant
      table.string('auuid_0', 30) // Identifiant unique
      table.decimal('shiqtypuu_0', 15, 2) // Qté en expé UA
      table.string('x4pohagr_0', 30) // Numéro d'agrément
      table.string('x4pohbpa_0', 30) // Adresse fabricant
      table.decimal('shiqtystu_0', 15, 2) // Qté en expé US
      table.decimal('cprpri_0', 15, 2) // Prix revient sans frais d'approche
      table.string('cmmtax_0', 30) // Type d'engagement
      table.decimal('discrgamt9_0', 15, 2) // Remise/Frais9
      table.string('fcyadd_0', 30) // Adresse réception
      table.string('cprcur_0', 30) // Devise société
      table.decimal('qtyvou_0', 15, 2) // Volume
      table.string('sddlin_0', 30) // Ligne livraison
      table.string('lintyp_0', 30) // Type ligne
      table.string('puu_0', 30) // Unité achat
      table.string('yea_0', 30) // Année
      table.string('wipnum_0', 20) // Numéro ordre
      table.string('mon_0', 30) // Mois
      table.decimal('discrgamt1_0', 15, 2) // Remise/Frais1
      table.string('pck_0', 30) // Emballage
      table.string('lininvflg_0', 30) // Ligne facturée
      table.date('extrcpdat_0') // Date réception prévue
      table.string('poqlnk_0', 30) // Ligne+Séquence pour Link
      table.decimal('amttaxlin2_0', 15, 2) // Montant taxe 2
      table.decimal('discrgamt2_0', 15, 2) // Remise/Frais2
      table.decimal('discrgamt3_0', 15, 2) // Remise/Frais3
      table.string('uom_0', 30) // Unité commande
      table.string('uompuucoe_0', 30) // Coefficient UOM-UA
      table.string('uomflg_0', 30) // Commande en UC
      table.string('dedtaxrcp_0', 30) // Taxe déductible
      table.string('dedtaxiss_0', 30) // Taxe déductible
      table.string('dedtaxoth1_0', 30) // Taxe déductible
      table.string('dedtaxoth2_0', 30) // Taxe déductible
      table.decimal('amttaxlin1_0', 15, 2) // Montant taxe 1
      table.string('rcpcleflg_0', 30) // Soldée par réception
      table.string('xobj1_0', 30) // Objet partie 1
      table.string('xobj2_0', 30) // Objet partie 2
      table.string('ocnlin_0', 30) // Ligne vte inter-soc
      table.string('ocnseq_0', 30) // Séq vte inter-soc
      table.string('linocnflg_0', 30) // Indicateur ARC
      table.string('vcrtypori_0', 30) // Type pièce origine
      table.string('vcrlinori_0', 30) // No ligne pièce origine
      table.string('itmrefori_0', 20) // Article lancé
      table.string('vcrseqori_0', 30) // No séquence pièce origine
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('vcrnumori_0', 20) // No pièce origine (No rec ou No OF)
      table.string('poqseq_0', 30) // Numéro séquence
      table.string('xsoqseq_0', 30) // Numéro séquence
      table.date('lasinvdat_0') // Date dernière facture
      table.string('updusr_0', 30) // Opérateur modification
      table.string('bpainv_0', 30) // Adresse facture
      table.decimal('invqtypuu_0', 15, 2) // Quantité facturée UA
      table.decimal('invqtystu_0', 15, 2) // Quantité facturée US
      table.string('stu_0', 30) // Unité stock
      table.string('soqseq_0', 30) // Numéro séquence
      table.string('expnum_0', 20) // Numéro Export
      table.string('linati_0', 30) // Montant ligne TTC
      table.decimal('linatiamt_0', 15, 2) // Montant ligne TTC
      table.string('pqhnum_0', 20) // Numéro appel offres
      table.date('lasrcpdat_0') // Date Dernière Entrée
      table.string('creusr_0', 30) // Opérateur création
      table.string('linstofcy_0', 30) // Site expédition
      table.string('xversion_0', 30) // Version
      table.string('linweu_0', 30) // Unité poids
      table.decimal('qtyweu_0', 15, 2) // Poids
      table.string('itmref_0', 20) // Article
      table.string('netcur_0', 30) // Devise
      table.string('cprcoe_0', 30) // Coefficient frais approche
      table.string('itmrefbps_0', 20) // Article fournisseur
      table.string('ori_0', 30) // Origine demande
      table.decimal('clcamt2_0', 15, 2) // Base de calcul numéro 2 pour taxe
      table.date('demenddat_0') // Date fin demandée
      table.string('demendhou_0', 30) // Heure fin demandée
      table.date('linocndat_0') // Date ARC
      table.string('linocnnum_0', 20) // Numéro ARC
      table.decimal('qtystu_0', 15, 2) // Quantité US
      table.string('lincleflg_0', 30) // Ligne soldée
      table.string('linprnflg_0', 30) // Ligne imprimée
      table.decimal('qtyuom_0', 15, 2) // Quantité commandée
      table.string('sohnum_0', 20) // Numéro commande vente
      table.decimal('clcamt1_0', 15, 2) // Base de calcul numéro 1 pour taxe
      table.string('ofs_0', 30) // Délai réapprovisionnement
      table.string('sdhnum_0', 20) // No livraison
      table.string('pohnum_0', 20) // No commande
      table.string('xsohnum_0', 20) // No commande
      table.string('wiptyp_0', 30) // Type ordre
      table.date('retrcpdat_0') // Date besoin
      table.decimal('retqtystu_0', 15, 2) // Quantité besoins pris US
      table.decimal('retqtypuu_0', 15, 2) // Quantité besoins pris UA
      table.string('fbuflg_0', 30) // Dépassement de budget
      table.string('useplc_0', 30) // Lieu consommation
      table.decimal('xqtystu_0', 15, 2) // Qté commandée US
      table.string('ptdlin_0', 30) // Ligne
      table.string('xsoplin_0', 30) // Ligne
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.decimal('rcpqtypuu_0', 15, 2) // Quantité réceptionnée UA
      table.decimal('rcpqtystu_0', 15, 2) // Quantité réceptionnée US
      table.string('lininvnbr_0', 30) // Nombre de factures
      table.string('linrcpnbr_0', 30) // Nombre de réceptions
      table.string('invrcpnbr_0', 30) // Nombre de réception facturées
      table.string('lintex_0', 30) // Numéro texte
      table.decimal('linamt_0', 15, 2) // Montant ligne HT
      table.string('scoadd_0', 30) // Adresse sous-traitant
      table.string('itmknd_0', 30) // Type d'article
      table.string('ybprliv_0', 30) // Tiers livré
      table.string('yaddliv_0', 30) // Adr. liv.
      table.string('xexport_0', 30) // Exporté EDI
      table.decimal('xqty_0', 15, 2) // Quantité vendue UV
      table.decimal('amttaxrcp_0', 15, 2) // Montant taxe entrée
      table.decimal('amttaxiss_0', 15, 2) // Montant taxe sortie
      table.decimal('amttaxoth1_0', 15, 2) // Montant autre taxe 1
      table.decimal('amttaxoth2_0', 15, 2) // Montant autre taxe 2
      table.datetime('xdlvtimfin_0') // Heure fin réception
      table.string('disbaslin1_0', 30) // Remise base taxe 1
      table.decimal('discrgamt5_0', 15, 2) // Remise/Frais5
      table.decimal('discrgamt4_0', 15, 2) // Remise/Frais4
      table.decimal('discrgamt6_0', 15, 2) // Remise/Frais6
      table.decimal('discrgamt7_0', 15, 2) // Remise/Frais7
      table.decimal('discrgamt8_0', 15, 2) // Remise/Frais8
      table.string('soplin_0', 30) // Ligne commande
      table.string('poplin_0', 30) // Ligne commande
      table.string('pohtyp_0', 30) // Type commande
      table.string('linrevnum_0', 20) // No avenant
      table.date('orddat_0') // Date commande
      table.decimal('qtypuu_0', 15, 2) // Quantité UA
      table.string('pohfcy_0', 30) // Site commande
      table.string('prhfcy_0', 30) // Site réception
      table.string('pthnum_0', 20) // No réception
      table.integer('linsta_0') // Etat ligne
      table.date('demrcpdat_0') // Date récep demandée
      table.string('demrcphou_0', 30) // Heure récep demandée
      table.string('linvou_0', 30) // Unité de volume
      table.string('ppdlin_0', 30) // Ligne réponse
      table.string('bpsinv_0', 30) // Tiers facturant
      table.string('cad_0', 30) // Cadencement
      table.string('wee_0', 30) // No semaine
      table.string('cmmnum_0', 20) // No engagement
      table.string('linpurtyp_0', 30) // Type achat
      table.string('xtypobj_0', 30) // Type objet
      table.integer('bastaxlin1_0') // Base taxe 1
      table.integer('wipsta_0') // Statut encours
      table.decimal('amttaxlin3_0', 15, 2) // Montant taxe 3
      table.string('dedtaxlin1_0', 30) // Taxe déductible 1
      table.string('dedtaxlin2_0', 30) // Taxe déductible 2
      table.string('dedtaxlin3_0', 30) // Taxe déductible 3
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

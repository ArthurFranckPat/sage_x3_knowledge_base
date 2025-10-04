import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'preceiptd'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('xversion_0', 30) // Version
      table.string('linweu_0', 30) // Unité poids
      table.string('quartnflg_0', 30) // Retour du controle qualité
      table.decimal('amttaxlin3_0', 15, 2) // Montant taxe 3
      table.string('dedtaxlin1_0', 30) // Taxe déductible 1
      table.string('dedtaxlin2_0', 30) // Taxe déductible 2
      table.string('dedtaxlin3_0', 30) // Taxe déductible 3
      table.string('pthnum_0', 20) // No réception
      table.string('vat_0', 30) // Taxe
      table.string('uom_0', 30) // Unité réception
      table.string('linvou_0', 30) // Unité de volume
      table.date('linpstdat_0') // Date extourne
      table.string('uomstucoe_0', 30) // Coefficient UOM/US
      table.string('linpurtyp_0', 30) // Type achat
      table.string('xtypobj_0', 30) // Type objet
      table.integer('bastaxlin1_0') // Base taxe 1
      table.string('taxiss_0', 30) // Taxe sortie
      table.string('taxoth1_0', 30) // Autre taxe 1
      table.string('taxoth2_0', 30) // Autre taxe 2
      table.string('disbaslin1_0', 30) // Remise base taxe 1
      table.decimal('discrgamt5_0', 15, 2) // Remise/Frais5
      table.decimal('discrgamt4_0', 15, 2) // Remise/Frais4
      table.decimal('discrgamt6_0', 15, 2) // Remise/Frais6
      table.decimal('discrgamt7_0', 15, 2) // Remise/Frais7
      table.decimal('discrgamt8_0', 15, 2) // Remise/Frais8
      table.string('poplin_0', 30) // Ligne commande
      table.string('tsicod_0', 20) // Famille statistique
      table.string('poqseq_0', 30) // Numéro séquence commande
      table.string('pohtyp_0', 30) // Type commande
      table.decimal('qtypuu_0', 15, 2) // Quantité UA
      table.decimal('gropri_0', 15, 2) // Prix brut
      table.decimal('priren_0', 15, 2) // Motif prix
      table.string('pohfcy_0', 30) // Site commande
      table.string('prhfcy_0', 30) // Site réception
      table.string('itmdes1_0', 60) // Désignation article
      table.string('lintex_0', 30) // Numéro texte
      table.decimal('linamt_0', 15, 2) // Montant ligne HT
      table.string('itmknd_0', 30) // Type d'article
      table.string('yflagwkf_0', 30) // Flag workflow
      table.string('vcrtypori_0', 30) // Type pièce origine
      table.string('vcrlinori_0', 30) // No ligne pièce origine
      table.string('itmrefori_0', 20) // Article lancé
      table.string('lineecflg_0', 30) // Ligne DEB
      table.string('vcrseqori_0', 30) // No séquence pièce origine
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('eecincrat_0', 30) // Majoration statistique DEB
      table.string('vcrnumori_0', 20) // No pièce origine (No rec ou No OF)
      table.string('updusr_0', 30) // Opérateur modification
      table.string('bpainv_0', 30) // Adresse facture
      table.decimal('rtnqtypuu_0', 15, 2) // Quantité retour UA
      table.decimal('rtnqtystu_0', 15, 2) // Quantité retour US
      table.decimal('invqtypuu_0', 15, 2) // Quantité facturée UA
      table.decimal('invqtystu_0', 15, 2) // Quantité facturée US
      table.decimal('discrgamt2_0', 15, 2) // Remise/Frais2
      table.decimal('discrgamt3_0', 15, 2) // Remise/Frais3
      table.string('uompuucoe_0', 30) // Coefficient UOM-UA
      table.decimal('qtyuom_0', 15, 2) // Quantité réceptionnée
      table.string('linpstflg_0', 30) // Ligne comptabilisée
      table.string('dedtaxrcp_0', 30) // Taxe déductible
      table.string('dedtaxiss_0', 30) // Taxe déductible
      table.string('dedtaxoth1_0', 30) // Taxe déductible
      table.string('dedtaxoth2_0', 30) // Taxe déductible
      table.string('bpsinv_0', 30) // Fournisseur facture
      table.decimal('amttaxlin1_0', 15, 2) // Montant taxe 1
      table.decimal('amttaxlin2_0', 15, 2) // Montant taxe 2
      table.string('itmdes_0', 60) // Désignation article traduite
      table.decimal('netpripuu_0', 15, 2) // Prix net UA
      table.string('discrgren1_0', 30) // Motif1 remise/frais
      table.string('discrgren2_0', 30) // Motif2 remise/frais
      table.string('discrgren3_0', 30) // Motif3 remise/frais
      table.string('discrgren4_0', 30) // Motif4 remise/frais
      table.string('discrgren5_0', 30) // Motif5 remise/frais
      table.string('trsfam_0', 30) // Famille mouvement
      table.decimal('amttaxrcp_0', 15, 2) // Montant taxe entrée
      table.decimal('amttaxiss_0', 15, 2) // Montant taxe sortie
      table.decimal('amttaxoth1_0', 15, 2) // Montant autre taxe 1
      table.decimal('amttaxoth2_0', 15, 2) // Montant autre taxe 2
      table.string('taxrcp_0', 30) // Taxe entrée
      table.string('pohnum_0', 20) // No commande
      table.string('ptdlin_0', 30) // Ligne
      table.string('shiplin_0', 30) // Ligne
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.date('rcpdat_0') // Date réception
      table.string('linprnflg_0', 30) // Ligne imprimée
      table.string('wrh_0', 30) // Dépôt
      table.decimal('clcamt1_0', 15, 2) // Base de calcul numéro 1 pour taxe
      table.string('sdhnum_0', 20) // No livraison
      table.decimal('qtyweu_0', 15, 2) // Poids
      table.string('itmref_0', 20) // Article
      table.string('netcur_0', 30) // Devise
      table.string('x4flgblc_0', 30) // Blocage
      table.string('cprcoe_0', 30) // Coefficient frais approche
      table.decimal('clcamt2_0', 15, 2) // Base de calcul numéro 2 pour taxe
      table.decimal('qtystu_0', 15, 2) // Quantité US
      table.decimal('netpri_0', 15, 2) // Prix net
      table.string('stu_0', 30) // Unité stock
      table.string('expnum_0', 20) // Numéro Export
      table.decimal('linatiamt_0', 15, 2) // Montant ligne TTC
      table.string('quaflg_0', 30) // Soumis à contrôle
      table.string('creusr_0', 30) // Opérateur création
      table.string('linstofcy_0', 30) // Site expédition
      table.string('zfabnum_0', 20) // Code du fabricant
      table.string('zitmreffab_0', 20) // Référence fabricant
      table.string('x1saslin_0', 30) // N° Ligne SAS
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('cstpur_0', 30) // Coût achat unitaire
      table.string('lincstpur_0', 30) // Coût achat
      table.string('cprclc_0', 30) // Coût stock unitaire calculé
      table.string('fcscstpur_0', 30) // Total charges achat
      table.string('fcscpr_0', 30) // Total charges stock
      table.string('fcscprcpt_0', 30) // Total charges stock comptabilisées
      table.string('discrgval4_0', 30) // Valeur4 remise/frais
      table.string('lininvflg_0', 30) // Ligne facturée
      table.string('oricry_0', 30) // Pays origine
      table.string('discrgval5_0', 30) // Valeur5 remise/frais
      table.string('discrgval6_0', 30) // Valeur6 remise/frais
      table.string('cpr_0', 30) // Prix revient
      table.string('discrgval1_0', 30) // Valeur1 remise/frais
      table.string('discrgval2_0', 30) // Valeur2 remise/frais
      table.string('discrgval3_0', 30) // Valeur3 remise/frais
      table.string('cprcur_0', 30) // Devise société
      table.decimal('qtyvou_0', 15, 2) // Volume
      table.string('sddlin_0', 30) // Ligne livraison
      table.string('lintyp_0', 30) // Type ligne
      table.string('puu_0', 30) // Unité achat
      table.string('pjt_0', 30) // Affaire
      table.string('discrgren6_0', 30) // Motif6 Remise/frais
      table.string('discrgren7_0', 30) // Motif7 remise/frais
      table.string('discrgren8_0', 30) // Motif8 remise/frais
      table.string('discrgren9_0', 30) // Motif9 remise/frais
      table.decimal('discrgamt1_0', 15, 2) // Remise/Frais1
      table.string('discrgval7_0', 30) // Valeur7 remise/frais
      table.string('discrgval8_0', 30) // Valeur8 remise/frais
      table.string('discrgval9_0', 30) // Valeur9 remise/frais
      table.string('shipnum_0', 20) // Numéro expédition
      table.decimal('cprpri_0', 15, 2) // Prix revient sans frais d'approche
      table.string('satiss_0', 30) // Province sortie
      table.string('bpocry_0', 30) // Pays expédition
      table.string('scocstcpt_0', 30) // Coût sous-traitance comptabilisé
      table.string('lincat_0', 30) // Catégorie mouvement
      table.decimal('discrgamt9_0', 15, 2) // Remise/Frais9
      table.decimal('clcamt7_0', 15, 2) // Base de calcul numéro 7 pour taxe
      table.string('stcnum_0', 20) // Structure de coûts
      table.decimal('linamtcpr_0', 15, 2) // Coût stock
      table.decimal('cpramt_0', 15, 2) // Coût fixe unitaire
      table.decimal('clcamt3_0', 15, 2) // Base de calcul numéro 3 pour taxe
      table.decimal('clcamt4_0', 15, 2) // Base de calcul numéro 4 pour taxe
      table.decimal('clcamt5_0', 15, 2) // Base de calcul numéro 5 pour taxe
      table.decimal('clcamt6_0', 15, 2) // Base de calcul numéro 6 pour taxe
      table.decimal('likqtycoe_0', 15, 2) // Coefficient quantité lien
      table.string('mattol_0', 30) // Règle rapprochement
      table.string('zsigfab_0', 30) // Sigle fabricant
      table.string('x4pohfab_0', 30) // Fabricant
      table.string('xcqf_0', 30) // Contrôle qual fréq
      table.string('xqtepal_0', 30) // Qté palette
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4pohagr_0', 30) // Numéro d'agrément
      table.string('x4pohbpa_0', 30) // Adresse fabricant
      table.string('stomgtcod_0', 20) // Gestion stock
      table.decimal('rrrqtypuu_0', 15, 2) // Quantité restante en R UA
      table.decimal('rrrqtystu_0', 15, 2) // Quantité restante en R US
      table.string('xobj1_0', 30) // Objet partie 1
      table.string('xobj2_0', 30) // Objet partie 2
      table.string('verflg_0', 30) // Indicateur version
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

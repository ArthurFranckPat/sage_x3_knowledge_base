import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bpsupplier'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('x4eltpoiapp_0', 30) // Elt poids appliqué
      table.string('xrskmrktgt_0', 30) // Objectif note libre
      table.boolean('flg281_0').defaultTo(false) // 281.5
      table.string('die_0', 30) // Code axe
      table.date('cshdat_0') // Date limite (TVA/encaiss.)
      table.string('cshvat_0', 30) // Régime TVA sur encaissements
      table.string('iptexs_0', 30) // Imputation des frais
      table.string('bpcnum_0', 20) // Code client chez le fournisseur
      table.string('rexnum_0', 20) // Numéro REX
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('autinvcod_0', 20) // Code facture auto
      table.string('wlflg_0', 30) // Sans vérification LB
      table.string('ordfrefrt_0', 20) // Seuil gratuité port
      table.string('bprdsp_0', 30) // Répartition interface paie
      table.string('ynbdoc_0', 30) // Nb exempl. CDE
      table.string('xseuilrad_0', 30) // Seuil radiation
      table.string('bpsrsk_0', 30) // Tiers risque
      table.string('loc_0', 30) // Emplacement
      table.string('pte_0', 30) // Condition paiement
      table.string('invdta_0', 30) // Elément de facturation
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('cai_0', 30) // Numéro CAI
      table.date('datvlycai_0') // Date validité CAI
      table.string('bpsinv_0', 30) // Fournisseur facture
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('bpstyp_0', 30) // Type fournisseur
      table.string('qlymrkcoe_0', 30) // Coefficient qualité
      table.decimal('qtymrkcoe_0', 15, 2) // Coefficient quantité
      table.string('rskmrkcoe_0', 30) // Coefficient libre
      table.string('rskmrk_0', 30) // Note libre
      table.decimal('ostauzamt_0', 15, 2) // Encours autorisé
      table.string('eecincrat_0', 30) // Majoration statistique DEB
      table.string('bpaadd_0', 30) // Adresse par défaut
      table.string('prvnum_0', 20) // Code prestataire
      table.string('cntnam_0', 60) // Nom contact par defaut
      table.decimal('purprityp_0', 15, 2) // Type montant
      table.string('nreprnflg_0', 30) // Edition du bon réception
      table.string('nrtprnflg_0', 30) // Edition du bon retour
      table.string('ritnbr_0', 30) // Nombre de codes
      table.string('ritrat_0', 30) // Tx abattement retenue source
      table.string('ritparnbr_0', 30) // Nb de partenaires
      table.string('ritparnam_0', 60) // Nom partenaire
      table.string('ritparcoe_0', 30) // Part détenue
      table.string('bpsgru_0', 30) // Fournisseur groupe
      table.string('douflg_0', 30) // Litige
      table.string('mdl_0', 30) // Mode livraison
      table.string('uvycod_0', 20) // Code Indisponibilité
      table.datetime('ltimrk_0') // Note délai
      table.decimal('primrk_0', 15, 2) // Note prix
      table.string('qlymrk_0', 30) // Note qualité
      table.decimal('qtymrk_0', 15, 2) // Note quantité
      table.string('genmrk_0', 30) // Note générale
      table.string('bpsrem_0', 30) // Observations
      table.boolean('enaflg_0').defaultTo(false) // Actif en sélection
      table.string('agtpcp_0', 30) // Agent perception IVA
      table.string('acccod_0', 20) // Code comptable
      table.string('mattol_0', 30) // Règle rapprochement
      table.string('frm1099_0', 30) // Formulaire 1099
      table.string('box1099_0', 30) // Case 1099
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4aexpdlach_0', 30) // Export DL achat
      table.string('xdmrpar_0', 30) // Paramétrage démérites
      table.datetime('xltimrktgt_0') // Objectif note délai
      table.decimal('xprimrktgt_0', 15, 2) // Objectif note prix
      table.string('xqlymrktgt_0', 30) // Objecif note qualité
      table.decimal('xqtymrktgt_0', 15, 2) // Objectif note qté
      table.string('x4eltnbrcol_0', 30) // Elt nbre de colis
      table.string('x4eltpoi_0', 30) // Elément poids
      table.string('tsscod_0', 20) // Famille statistique
      table.string('tpmcod_0', 20) // Code modèle
      table.string('bpsnam_0', 60) // Raison sociale
      table.string('bptnum_0', 20) // No transporteur
      table.string('plistc_0', 30) // Code structure du tarif
      table.string('eecict_0', 30) // Incoterm
      table.date('credat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.string('xpohtypbps_0', 30) // Type de commande
      table.string('curclc_0', 30) // Fixation du taux de devise
      table.decimal('amtcod_0', 15, 2) // Code montant
      table.string('agtsattax_0', 30) // Agent perception taxes provinciales
      table.boolean('flgsattax_0').defaultTo(false) // Agent perception taxes provinciales
      table.string('sattax_0', 30) // Code province
      table.string('ritcod_0', 20) // Code retenue
      table.string('xaudit_0', 30) // Date audit
      table.string('bpapay_0', 30) // Adresse tiers payé
      table.string('zsigfab_0', 30) // Sigle Fabricant
      table.string('dep_0', 30) // Code escompte
      table.string('dadflg_0', 30) // DAS2
      table.string('payban_0', 30) // Banque règlement
      table.string('fupflg_0', 30) // Relance des livraisons en retard
      table.string('ocnflg_0', 30) // Relance ARC
      table.string('ordtex_0', 30) // Texte bon de commande
      table.string('rtntex_0', 30) // Texte bon de retour
      table.string('cce_0', 30) // Section
      table.string('bsgcod_0', 20) // Catégorie
      table.date('upddat_0') // Date modification
      table.string('bprpay_0', 30) // Numéro tiers payé
      table.string('cur_0', 30) // Devise
      table.string('ostctl_0', 30) // Contrôle encours
      table.string('chgtyp_0', 30) // Type cours
      table.string('dia_0', 30) // Schéma de comptes
      table.string('sevlin_0', 30) // Gestion de plusieurs lignes sur cde
      table.string('bpcnumbps_0', 20) // Numéro client chez le fournisseur
      table.decimal('invdtaamt_0', 15, 2) // % ou Montant Element de facturation
      table.datetime('ltimrkcoe_0') // Coefficient délai
      table.decimal('ordminamt_0', 15, 2) // Montant minimum de commande
      table.string('dudclc_0', 30) // Date origine pour calcul échéance
      table.string('paylokflg_0', 30) // Blocage des paiements
      table.string('norprnflg_0', 30) // Edition du bon commande
      table.string('bpssho_0', 30) // Intitulé court
      table.decimal('primrkcoe_0', 15, 2) // Coefficient prix
      table.string('bpainv_0', 30) // Adresse facture
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('abccls_0', 30) // Catégorie ABC
      table.string('expnum_0', 20) // Numéro Export
      table.string('creusr_0', 30) // Opérateur création
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bpcustomer'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('ime_0', 30) // Mode facturation
      table.date('cntlasdat_0') // Date dernier contact
      table.string('cntlastyp_0', 30) // Type dernier contact
      table.string('pitcdt_0', 30) // Crédit de jetons
      table.string('cotpitrqd_0', 30) // Jetons nécessaires
      table.date('cntfirdat_0') // Date premier contact
      table.date('ordfirdat_0') // Date 1ère commande
      table.string('x_blcnbr_0', 30) // Nb exempl BL
      table.string('x_blvalo_0', 30) // BL valorisé
      table.date('cdtisrdat_0') // Date assurance crédit
      table.string('soiper_0', 30) // Type de relevé
      table.string('vatexn_0', 30) // no agrément pour suspension taxe
      table.string('bpaadd_0', 30) // Adresse par défaut
      table.string('cntnam_0', 60) // Nom contact par defaut
      table.date('cntnexdat_0') // Date prochain contact
      table.string('daymon_0', 30) // Quantième
      table.string('ostctl_0', 30) // Contrôle en-cours
      table.string('bpcrem_0', 30) // Observations
      table.date('strdatefat_0') // Date début
      table.string('cntefat_0', 30) // Contact
      table.string('agtpcp_0', 30) // Agent perception IVA
      table.integer('ostauz_0') // En-cours autorisé
      table.string('cdtisr_0', 30) // Assurance crédit
      table.string('fuptyp_0', 30) // Type de relance
      table.string('acccod_0', 20) // Code comptable
      table.string('xsitemad_0', 30) // Site MAD
      table.date('bpcsncdat_0') // Client depuis
      table.string('auuid_0', 30) // Identifiant unique
      table.string('uvycod2_0', 20) // Période indisponibilité
      table.string('x4demchor_0', 30) // Affichage entête
      table.string('x4service_0', 30) // Type devis client
      table.string('x4engagement_0', 30) // Demandes changement par gravité
      table.string('electinv_0', 30) // Facture électronique
      table.string('aeiflg_0', 30) // Facture électronique
      table.string('die_0', 30) // Code axe
      table.string('bpcrsk_0', 30) // Client risque
      table.string('belvatsub_0', 30) // Assujetti TVA
      table.string('xicmajbl_0', 30) // Ind C MAJ matière BL
      table.string('xyeaexo_0', 30) // Année autor.
      table.string('xautofact_0', 30) // Auto facturation vte
      table.string('x4fctcli_0', 30) // Fonction client GMS
      table.string('x4filflg_0', 30) // Tête de filière
      table.string('x4regrel_0', 30) // Règle reliquats
      table.string('x4tolgen_0', 30) // Tolérance générale
      table.string('x4mrgtrsapp_0', 30) // Marges transport applicables
      table.string('x1cdprsp_0', 30) // Code compte
      table.string('x1site_0', 30) // Code Site/Appli
      table.string('x1tolflg_0', 30) // Tolérance prépa
      table.string('x1tolmax_0', 30) // % tolérance maxi
      table.string('x1tolmin_0', 30) // % tolérance mini
      table.string('bpccdtisr_0', 30) // Compagnie assur.
      table.date('vatstrdat_0') // Date TVA début
      table.date('vatenddat_0') // Date TVA fin
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('invcnd_0', 30) // Condition de facturation
      table.string('bpdadd_0', 30) // Adresse client livré par défaut
      table.decimal('prityp_0', 15, 2) // Prix HT/TTC
      table.string('tpmcod_0', 20) // Code modèle
      table.string('bpcnam_0', 60) // Raison sociale
      table.string('bpcinv_0', 30) // Client facture
      table.string('bpcpyr_0', 30) // Client payeur
      table.string('bpcgru_0', 30) // Client groupe
      table.integer('bpcsta_0') // Client actif
      table.string('pptflg_0', 30) // Prospect
      table.string('bpcbpsnum_0', 20) // Notre no fournisseur chez le client
      table.string('freinv_0', 30) // Facturation du port
      table.decimal('fupminamt_0', 15, 2) // Montant minimum relance
      table.decimal('invdtaamt_0', 15, 2) // % ou montant facturation
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.string('agtsattax_0', 30) // Agent perception taxes provinciales
      table.boolean('flgsattax_0').defaultTo(false) // Agent perception taxes provinciales
      table.string('sattax_0', 30) // Code province
      table.string('cotchx_0', 30) // Contrat de service
      table.string('totpit_0', 30) // Crédit total de jetons
      table.string('bus_0', 30) // Activité
      table.decimal('xamtexo_0', 15, 2) // Cumul exo TVA
      table.string('dep_0', 30) // Escompte
      table.string('tsccod_0', 20) // Famille statistique
      table.string('orippt_0', 30) // Origine
      table.string('pitcpt_0', 30) // Complément
      table.string('payban_0', 30) // Banque règlement
      table.string('cce_0', 30) // Section
      table.string('bpcsho_0', 30) // Intitulé court
      table.string('bcgcod_0', 20) // Catégorie
      table.string('grp_0', 30) // Groupe
      table.string('bpctyp_0', 30) // Type
      table.string('lndauz_0', 30) // Autorisation prêt
      table.string('xcur_0', 30) // Devise
      table.string('dia_0', 30) // Schéma de comptes
      table.string('copnbr_0', 30) // Nombre exemplaires facture
      table.string('invper_0', 30) // Périodicité facturation
      table.string('ordcle_0', 30) // Autorisation solde commande
      table.string('odl_0', 30) // 1 commande par livraison
      table.date('quolasdat_0') // Date dernier devis
      table.string('rep_0', 30) // Représentant
      table.string('chgtyp_0', 30) // Type cours devise
      table.decimal('ordminamt_0', 15, 2) // Montant mini commande
      table.string('cntnextyp_0', 30) // Type prochain contact
      table.string('updusr_0', 30) // Opérateur modification
      table.string('abccls_0', 30) // Catégorie ABC
      table.string('expnum_0', 20) // Numéro export
      table.string('bpainv_0', 30) // Adresse
      table.string('bpapyr_0', 30) // Adresse
      table.string('creusr_0', 30) // Opérateur création
      table.string('cshvatrgm_0', 30) // Règle taxe
      table.string('pte_0', 30) // Condition paiement
      table.string('invdta_0', 30) // Elément de facturation
      table.string('bpcnum_0', 20) // Client
      table.string('fctnum_0', 20) // Factor
      table.string('comcat_0', 30) // Catégorie commission
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('xvacbpr_0', 30) // Régime taxe
      table.string('cur_0', 30) // Devise
      table.string('mtcflg_0', 30) // Lettrable
      table.string('ordtex_0', 30) // Texte entête cde
      table.string('invtex_0', 30) // Texte entête facture
      table.string('ocnflg_0', 30) // Impression ARC
      table.string('dudclc_0', 30) // Origine échéance
      table.string('dme_0', 30) // Livraison partielle
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

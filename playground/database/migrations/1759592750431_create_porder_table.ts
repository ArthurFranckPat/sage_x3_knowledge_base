import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'porder'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('volcap_0', 30) // Volume
      table.string('tex1_0', 30) // No texte
      table.date('ocndat_0') // Date accusé réception
      table.string('bpocty_0', 30) // Ville
      table.string('cry_0', 30) // Pays
      table.string('bpocry_0', 30) // Pays
      table.string('poscod_0', 20) // Code postal
      table.string('bpoposcod_0', 20) // Code postal
      table.string('tex2_0', 30) // Texte
      table.string('pohnum_0', 20) // No commande
      table.string('cce_0', 30) // Section
      table.string('fupflg_0', 30) // Relance des livraisons en retard
      table.string('ocnflg_0', 30) // Relance ARC
      table.string('cpy_0', 30) // Société
      table.string('bprpay_0', 30) // Tiers payé
      table.date('upddat_0') // Date modification
      table.string('mdl_0', 30) // Mode livraison
      table.string('buy_0', 30) // Acheteur
      table.string('vactyp_0', 30) // Type de régime taxe
      table.string('dme_0', 30) // Livraison partielle
      table.string('orifcy_0', 30) // Site origine/émetteur
      table.decimal('totlinamt_0', 15, 2) // Total HT lignes
      table.decimal('tottaxamt_0', 15, 2) // Total taxes
      table.string('ictcty_0', 30) // Ville Incoterm
      table.string('ffwadd_0', 30) // Adresse transitaire
      table.string('copnbr_0', 30) // Nombre exemplaires bon commande
      table.string('totvlt_0', 30) // Total HT prévu
      table.string('xnbedt_0', 30) // Nombre d'impressions
      table.string('xtypcde_0', 30) // Commande urgente
      table.string('totordl_0', 30) // Total HT commande devise société
      table.string('totlinweu_0', 30) // Total poids lignes
      table.string('totlinvou_0', 30) // Total volumes lignes
      table.string('ttvordl_0', 30) // Total TTC commande devise société
      table.string('updusr_0', 30) // Opérateur modification
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('bpcord_0', 30) // Client commande
      table.string('ffwnum_0', 20) // Numéro transitaire
      table.string('bpainv_0', 30) // Adresse facture
      table.string('invfcy_0', 30) // Site facturation
      table.string('lan_0', 30) // Langue
      table.string('expnum_0', 20) // Numéro Export
      table.string('sohcat_0', 30) // Catégorie commande
      table.string('bptnum_0', 20) // Transporteur
      table.string('fbulinnbr_0', 30) // Nombre de lignes hors budget
      table.string('bpaadd_0', 30) // Adresse
      table.string('discrgtyp_0', 30) // Type de valeur remise/frais
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('stofcy_0', 30) // Site expédition
      table.string('x4pohdest_0', 60) // Destinataire
      table.decimal('tctrqty_0', 15, 2) // Nb contenants
      table.string('x4exclrfa_0', 30) // Exclusion RFA
      table.string('x4pohenvaut_0', 30) // 
      table.string('x4avmot_0', 30) // 
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.decimal('ordmaxamt_0', 15, 2) // Mt maxi commande
      table.string('x4avmotcom_0', 30) // Trans. entrée divers
      table.string('x4cmdblc_0', 30) // Commande bloquée
      table.string('auuid_0', 30) // Identifiant unique
      table.string('sinum_0', 20) // No pièce Intégrale
      table.string('die_0', 30) // Code axe
      table.string('xpohtyp_0', 30) // Type commande achat
      table.string('betcpy_0', 30) // Inter-sociétés
      table.string('betfcy_0', 30) // Inter-site
      table.string('pjth_0', 30) // Affaire
      table.string('chgcoe_0', 30) // Cours
      table.string('invdtalin2_0', 30) // Elt fact lig répart
      table.string('sat_0', 30) // Etat
      table.string('bposat_0', 30) // Etat
      table.string('bpsinv_0', 30) // Tiers facturant
      table.string('eecict_0', 30) // Incoterm
      table.string('purtyp_0', 30) // Type achat
      table.string('invdtavat2_0', 30) // Taxe lig répart
      table.string('invdtavat1_0', 30) // Taxe lig tarif
      table.string('tctrnum_0', 20) // Contenant
      table.string('x4pohexp_0', 30) // Expéditeur
      table.string('bpoadd_0', 30) // Adresse expéditeur
      table.date('credat_0') // Date création
      table.string('invnbr_0', 30) // Nombre de factures
      table.string('rcpnbr_0', 30) // Nombre de réceptions
      table.string('invflg_0', 30) // Facturée
      table.string('prnflg_0', 30) // Imprimée
      table.string('ocnrem_0', 30) // Observations ARC
      table.string('invlinnbr_0', 30) // Nombre de lignes facturées
      table.string('clelinnbr_0', 30) // Nombre de lignes soldées
      table.string('rcplinnbr_0', 30) // Nombre de lignes réceptionnées
      table.string('x4numint_0', 20) // Intervention
      table.string('x4numdemand_0', 20) // Demande de service
      table.string('yaddliv_0', 30) // Adr. liv.
      table.string('xcmqint_0', 30) // Contremarque interne
      table.string('totlinati_0', 30) // Total TTC lignes
      table.string('bpapay_0', 30) // Adresse tiers payé
      table.string('ybprliv_0', 30) // Tiers livré
      table.string('bprnam_0', 60) // Raison sociale
      table.string('bponam_0', 60) // Raison sociale
      table.string('dep_0', 30) // Code escompte
      table.string('tsscod_0', 20) // Famille statistique
      table.string('ordref_0', 20) // Référence interne ou commande
      table.string('pohtyp_0', 30) // Type commande
      table.string('revnum_0', 20) // No avenant
      table.date('orddat_0') // Date commande
      table.string('appflg_0', 30) // Signée
      table.string('cleflg_0', 30) // Soldée
      table.decimal('totlinqty_0', 15, 2) // Total qtés lignes
      table.string('invdtalin1_0', 30) // Elt fact lig tarif
      table.string('pohfcy_0', 30) // Site commande
      table.string('rcpfcy_0', 30) // Site réception
      table.string('bpaaddlig_0', 30) // Ligne adresse
      table.string('bpoaddlig_0', 30) // Ligne adresse
      table.string('crynam_0', 60) // Nom pays
      table.string('bpocrynam_0', 60) // Nom pays
      table.string('eecnum_0', 20) // Identification UE
      table.string('creusr_0', 30) // Opérateur création
      table.string('dspvou_0', 30) // Unité Volume
      table.string('dspweu_0', 30) // Unité poids
      table.string('pte_0', 30) // Condition paiement
      table.string('weicap_0', 30) // Poids
      table.string('cur_0', 30) // Devise
      table.string('chgtyp_0', 30) // Type cours
      table.string('linnbr_0', 30) // Nombre de lignes
      table.string('gpgcod_0', 20) // Code regroupement
      table.date('strdat_0') // Date début validité
      table.date('enddat_0') // Date fin validité
      table.date('extrcpdat1_0') // Date récept prévue
      table.string('rcpflg_0', 30) // Reçue
      table.string('ocnnum_0', 20) // Numéro ARC
      table.string('totord_0', 30) // Total HT commande
      table.string('ttvord_0', 30) // Total TTC commande
      table.string('salfcy_0', 30) // Site vente
      table.string('cty_0', 30) // Ville
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'preceipt'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('trllicplate_0', 30) // Immat remorque
      table.string('x1wmssas_0', 30) // Pré-réception (SAS)
      table.date('arvdat_0') // Date arrivée
      table.date('dpedat_0') // Date départ
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('pstflg_0', 30) // Comptabilisée
      table.decimal('totamtati_0', 15, 2) // Total TTC
      table.string('mdl_0', 30) // Mode livraison
      table.string('pjth_0', 30) // Affaire
      table.string('invlinnbr_0', 30) // Nombre lignes totalement facturées
      table.string('betcpy_0', 30) // Inter-sociétés
      table.string('trscod_0', 20) // Code mouvement
      table.string('eecsch_0', 30) // Régime DEB
      table.string('chgcoe_0', 30) // Cours
      table.string('totvol_0', 30) // Volume
      table.string('clsvcr_0', 30) // Classe
      table.string('tex1_0', 30) // No texte
      table.string('x4sdhnum_0', 20) // N° BL client
      table.string('die_0', 30) // Code axe
      table.decimal('totamtatil_0', 15, 2) // Total TTC devise société
      table.decimal('totamtnotl_0', 15, 2) // Total HT devise société
      table.string('auuid_0', 30) // Identifiant unique
      table.string('xblocage_0', 30) // flag blocage
      table.string('ffwadd_0', 30) // Adresse transitaire
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('totlinweu_0', 30) // Total poids lignes
      table.string('totlinvou_0', 30) // Total volumes lignes
      table.string('updusr_0', 30) // Opérateur modification
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('ffwnum_0', 20) // Numéro transitaire
      table.string('bpainv_0', 30) // Adresse facture
      table.decimal('totamtnot_0', 15, 2) // Total HT
      table.date('ndedat_0') // Date Bon livraison
      table.string('totgrowei_0', 30) // Poids brut
      table.string('vactyp_0', 30) // Type de régime taxe
      table.string('xncflg_0', 30) // flag non conformité
      table.string('cce_0', 30) // Section analytique
      table.string('etd_0', 30) // Heure départ
      table.string('eta_0', 30) // Heure arrivée
      table.string('pstlinnbr_0', 30) // Nombre de lignes comptabilisées
      table.string('bpsinv_0', 30) // Fournisseur facture
      table.decimal('totlinamt_0', 15, 2) // Total HT lignes
      table.decimal('tottaxamt_0', 15, 2) // Total taxes
      table.string('cai_0', 30) // Numéro CAI
      table.date('datvlycai_0') // Date validité CAI
      table.string('ictcty_0', 30) // Ville Incoterm
      table.string('scuvcr_0', 30) // Succursale
      table.string('invlinctr_0', 30) // Nombre de lignes facturées
      table.string('x4numint_0', 20) // Intervention
      table.string('x4numdemand_0', 20) // Demande de service
      table.string('totnetwei_0', 30) // Poids net
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.string('bprpay_0', 30) // Tiers payé
      table.date('credat_0') // Date création
      table.string('wrhe_0', 30) // Dépôt
      table.string('betfcy_0', 30) // Inter-sites
      table.string('bpocty_0', 30) // Ville
      table.string('bpocry_0', 30) // Pays
      table.string('bpoposcod_0', 20) // Code postal
      table.string('tex2_0', 30) // Texte
      table.string('cur_0', 30) // Devise
      table.string('chgtyp_0', 30) // Type cours
      table.string('bptnum_0', 20) // Numéro transporteur
      table.string('linnbr_0', 30) // Nombre de lignes
      table.string('seqvcr_0', 30) // Séquence
      table.string('ycausrdes_0', 60) // Opérateur
      table.string('gpgcod_0', 20) // Code regroupement
      table.date('rcpdat_0') // Date réception
      table.string('bpaadd_0', 30) // Adresse
      table.string('expnum_0', 20) // Numéro Export
      table.string('bpsnde_0', 30) // Numéro bon livraison fournisseur
      table.string('creusr_0', 30) // Opérateur création
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('vou_0', 30) // Unité Volume
      table.string('dspvou_0', 30) // Unité Volume
      table.string('weu_0', 30) // Unité poids
      table.string('dspweu_0', 30) // Unité poids
      table.string('invdtavat1_0', 30) // Taxe lig tarif
      table.string('bpoadd_0', 30) // Adresse expéditeur
      table.string('bpoaddlig_0', 30) // Ligne adresse
      table.string('bpocrynam_0', 60) // Nom pays
      table.string('eecnum_0', 20) // Identification UE
      table.string('eecnumdeb_0', 20) // DEB
      table.string('invdtalin2_0', 30) // Elt fact lig répart
      table.string('eectrn_0', 30) // Mode transp. DEB
      table.string('bposat_0', 30) // Etat
      table.string('eecnat_0', 30) // Nature transaction
      table.string('eecict_0', 30) // Incoterm
      table.date('pstdat_0') // Date extourne
      table.string('entcod_0', 20) // Code pièce automatique
      table.string('purtyp_0', 30) // Type achat
      table.string('invdtavat2_0', 30) // Taxe lig répart
      table.string('bpapay_0', 30) // Adresse tiers payé
      table.string('typvcr_0', 30) // Type document
      table.string('licplate_0', 30) // Immatriculation
      table.string('bponam_0', 60) // Raison sociale
      table.string('dep_0', 30) // Code escompte
      table.string('tsscod_0', 20) // Famille statistique
      table.decimal('totlinqty_0', 15, 2) // Total qtés lignes
      table.string('invdtalin1_0', 30) // Elt fact lig tarif
      table.string('prhfcy_0', 30) // Site réception
      table.string('pthnum_0', 20) // No réception
      table.string('invflg_0', 30) // Facturée
      table.string('prnflg_0', 30) // Imprimée
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

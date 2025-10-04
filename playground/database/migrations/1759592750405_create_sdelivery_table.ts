import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sdelivery'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.date('credat_0') // Date création
      table.string('tmpsdhnum_0', 20) // Livraison n°
      table.string('x4numdemand_0', 20) // Demande de service
      table.date('sisdat_0') // Date pièce d'extourne
      table.string('xsphtex1_0', 30) // Texte entete colisag
      table.string('x4intident_0', 30) // Interface
      table.string('xgenfactis_0', 30) // Ind fact inter soc
      table.string('xmodgfi_0', 30) // Mode gen fact interc
      table.string('x4numint_0', 20) // Intervention
      table.string('trsfam_0', 30) // Famille mouvement
      table.string('cninam_0', 60) // Contact facture
      table.datetime('cretim_0') // Heure
      table.string('vtt_0', 30) // Type transact.Vertex
      table.string('prptex2_0', 30) // Texte pied préparation
      table.string('sdhtex1_0', 30) // Texte entête livraison
      table.string('sdhtex2_0', 30) // Texte pied livraison
      table.string('tsccod_0', 20) // Famille statistique
      table.decimal('prityp_0', 15, 2) // Prix HT/TTC
      table.string('invdtalin_0', 30) // Elt fact lig tarif
      table.string('licplate_0', 30) // Immatriculation
      table.string('bpcinv_0', 30) // Client facture
      table.string('bpcgru_0', 30) // Client groupe
      table.string('dep_0', 30) // Code escompte
      table.string('linnbr_0', 30) // Nombre lignes
      table.decimal('dsptotqty_0', 15, 2) // Cumul quantité
      table.string('bpieecnum_0', 20) // Identification UE
      table.string('eecnumdeb_0', 20) // DEB
      table.string('prhfcy_0', 30) // Site réception
      table.string('invdtadsp_0', 30) // Clé Répart
      table.decimal('invdtaamt_0', 15, 2) // % ou mt facturation
      table.string('eectrn_0', 30) // Mode transp. DEB
      table.string('sihnum_0', 20) // No facture
      table.string('eecnat_0', 30) // Nature transaction
      table.string('eecict_0', 30) // Incoterm
      table.string('bpcloc_0', 30) // Emplacement client
      table.string('prnnpr_0', 30) // Bon préparation imprimé
      table.string('x4sdhexp_0', 30) // Expéditeur
      table.string('salfcy_0', 30) // Site vente
      table.string('prfnum_0', 20) // No facture proforma
      table.date('dlvdat_0') // Date livraison
      table.string('wrhe_0', 30) // Dépôt
      table.decimal('amttax_0', 15, 2) // Montant taxe
      table.integer('bastax_0') // Base taxe
      table.string('invper_0', 30) // Périodicité facturation
      table.string('x4cscode_0', 20) // Consultation
      table.string('bpcpyr_0', 30) // Tiers Payeur
      table.string('lbenum_0', 20) // No étiquette
      table.string('sdhnum_0', 20) // No livraison
      table.string('sohnum_0', 20) // No commande
      table.string('netwei_0', 30) // Poids net
      table.string('sdhtyp_0', 30) // Type livraison
      table.date('shidat_0') // Date expédition
      table.string('dlvhou_0', 30) // Heure livraison
      table.date('lndrtndat_0') // Date retour prêt
      table.string('bpdnam_0', 60) // Nom client livré
      table.string('bpdcrynam_0', 60) // Nom pays livraison
      table.string('chgtyp_0', 30) // Type cours devise
      table.string('invdtatyp_0', 30) // Type de valeur
      table.string('rep_0', 30) // Représentant
      table.string('chgrat_0', 30) // Cours devise
      table.string('plistc_0', 30) // Code structure
      table.string('cce_0', 30) // Section
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.string('shihou_0', 30) // Heure expédition
      table.string('dlvnot_0', 30) // Montant livré HT
      table.string('dlvati_0', 30) // Montant livré TTC
      table.string('pacflg_0', 30) // Colisage réalisé
      table.string('updusr_0', 30) // Opérateur modif
      table.string('sisnum_0', 20) // No facture à émettre
      table.string('xblocage_0', 30) // flag blocage
      table.string('copnbr_0', 30) // Nombre exemplaires bon livraison
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('daylti_0', 30) // Délai livraison en jours
      table.string('houlti_0', 30) // Délai livraison en heures
      table.string('nprflg_0', 30) // Impression bon préparation
      table.string('ndeflg_0', 30) // Impression bon livraison
      table.string('bpdsat_0', 30) // Etat livraison
      table.string('invorn_0', 30) // No ordre facture
      table.string('adrval_0', 30) // Validée
      table.string('bpinam_0', 60) // Nom client facture
      table.string('bpiaddlig_0', 30) // Adresse facture
      table.string('bpicty_0', 30) // Ville facture
      table.string('bpdposcod_0', 20) // Code postal livraison
      table.string('bpdcty_0', 30) // Ville livraison
      table.string('bpdcry_0', 30) // Pays livraison
      table.string('bpcord_0', 30) // Client commande
      table.string('ffwnum_0', 20) // Numéro transitaire
      table.string('expnum_0', 20) // Numéro export
      table.string('lan_0', 30) // Langue
      table.string('bpisat_0', 30) // Etat facture
      table.string('bptnum_0', 20) // Transporteur
      table.string('creusr_0', 30) // Opérateur création
      table.string('discrgtyp_0', 30) // Type de valeur remise/frais
      table.string('x4sdhdest_0', 60) // Destinataire
      table.string('invdta_0', 30) // Elément de facturation
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('stofcy_0', 30) // Site expédition
      table.string('x4achtrart_0', 30) // Article
      table.string('weu_0', 30) // Unité poids
      table.string('dspweu_0', 30) // Unité poids
      table.string('pte_0', 30) // Condition paiement
      table.string('cur_0', 30) // Devise
      table.string('vou_0', 30) // Unité Volume
      table.string('dspvou_0', 30) // Unité Volume
      table.string('ntrflg_0', 30) // Impression bon transport
      table.string('prnnde_0', 30) // Bon livraison imprimé
      table.string('growei_0', 30) // Poids brut
      table.string('cfmflg_0', 30) // Validé
      table.string('prptex1_0', 30) // Texte entête préparation
      table.string('mdl_0', 30) // Mode livraison
      table.string('drn_0', 30) // No tournée
      table.string('dudclc_0', 30) // Origine calcul échéance
      table.string('ime_0', 30) // Mode facturation
      table.string('bpaadd_0', 30) // Adresse livraison
      table.string('bpdaddlig_0', 30) // Adresse livraison
      table.string('dlvinvnot_0', 30) // Valorisation HT
      table.string('lnd_0', 30) // Prêt
      table.string('zlivpart_0', 30) // Livraison partielle
      table.string('rtnlinnbr_0', 30) // Nombre lignes retournées
      table.integer('rtnsta_0') // Etat retour
      table.string('xncflg_0', 30) // flag non conformité
      table.string('etd_0', 30) // Heure départ
      table.string('eta_0', 30) // Heure arrivée
      table.string('sdhcat_0', 30) // Catégorie livraison
      table.string('orifcy_0', 30) // Site origine/émetteur
      table.string('geocod_0', 20) // Géo code
      table.string('insctyflg_0', 30) // Flag intérieur ville
      table.string('ffwadd_0', 30) // Adresse transitaire
      table.string('dlvinvati_0', 30) // Valorisation TTC
      table.date('xvaldat_0') // Date validation
      table.string('cai_0', 30) // Numéro CAI
      table.date('datvlycai_0') // Date validité CAI
      table.string('ictcty_0', 30) // Ville Incoterm
      table.string('sco_0', 30) // Pour sous-traitance
      table.string('glbdoctyp_0', 30) // Type document global
      table.string('bolnum_0', 20) // Numéro BT
      table.string('x4sbi_0', 30) // Self Billing
      table.string('x4tierslog_0', 30) // DESADV Tiers gest.
      table.string('x4sdhnum_0', 20) // N° BL client
      table.string('die_0', 30) // Code axe
      table.string('dlvinvnotl_0', 30) // Valorisation HT soc
      table.string('dlvinvatil_0', 30) // Valorisation TTC soc
      table.string('x_nbedit_0', 30) // Nombre de réédition
      table.string('dsptotwei_0', 30) // Cumul poids
      table.string('dsptotvol_0', 30) // Cumul volume
      table.string('entcod_0', 20) // Pièce auto stock
      table.string('betcpy_0', 30) // Inter-sociétés
      table.string('cndnam_0', 60) // Contact livraison
      table.string('x1colman_0', 30) // Colisage manuel
      table.string('trscod_0', 20) // Code mouvement
      table.string('bpiposcod_0', 20) // Code postal facture
      table.string('bpicry_0', 30) // Pays facture
      table.string('bpicrynam_0', 60) // Nom pays facture
      table.string('betfcy_0', 30) // Inter-site
      table.string('vol_0', 30) // Volume
      table.string('pacnbr_0', 30) // Nombre colis
      table.string('eecsch_0', 30) // Régime DEB
      table.string('pjt_0', 30) // Affaire
      table.string('invflg_0', 30) // Facturé
      table.string('zflgedisdh_0', 30) // Flag DESADV
      table.string('ynavette_0', 30) // Navette
      table.string('x4sdhenvaut_0', 30) // 
      table.string('x4flgdup_0', 30) // Option transport Dup
      table.string('x4rgop_0', 30) // Options transport
      table.string('xexptransb_0', 30) // Date export DMDLOG
      table.string('x4contratmaf_0', 30) // Contrat MAF
      table.string('x4nbrml_0', 30) // Mètres linéaires
      table.string('x4tarachlck_0', 30) // Verrou tarif achat
      table.string('x4tarvenlck_0', 30) // Verrou tarif vente
      table.date('dpedat_0') // Date départ
      table.string('trllicplate_0', 30) // Immat remorque
      table.string('x1nbum_0', 30) // Nombre Palette
      table.string('glbdoc_0', 30) // Document global
      table.string('glbdocnum_0', 20) // N° document global
      table.date('glbdocdat_0') // Date document global
      table.string('atdtcod_0', 20) // Code AT
      table.string('mandoc_0', 30) // Document manuel
      table.date('arvdat_0') // Date arrivée
      table.date('xdlvdat_0') // Date arrivée
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('sfisstcod_0', 20) // Code taxe SST
      table.string('sstentcod_0', 20) // Code exonération NA
      table.string('bpainv_0', 30) // Code adresse facture
      table.string('dlvnotl_0', 30) // Montant liv HT soc
      table.string('dlvatil_0', 30) // Montant liv TTC soc
      table.string('xsitemad_0', 30) // Site MAD
      table.string('xdemdlvref_0', 20) // Identifiant transp.
      table.string('xsphtex2_0', 30) // Texte pied colisage
      table.date('xdatmes_0') // Date message EDI
      table.string('xnummes_0', 20) // Numéro message EDI
      table.datetime('xtimmes_0') // Heure mess EDI
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4achtrtar_0', 30) // Tarif ach transport
      table.string('x4cmr_0', 30) // CMR
      table.string('x4poiapp_0', 30) // Poids appliqué
      table.string('x4poiappuom_0', 30) // Unité poids appliqué
      table.string('x4tartrs_0', 30) // Tarif transporteur
      table.string('xblexterne_0', 30) // N° BL Externe
      table.string('xexpedi_0', 30) // DESADV émis
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

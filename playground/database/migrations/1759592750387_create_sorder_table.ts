import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sorder'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.integer('hldsta_0') // Statut verrouillage
      table.string('hldcod_0', 20) // Code verrouillage
      table.string('hldcodp_0', 20) // Code verrouillage précédent
      table.date('hlddat_0') // Date (dé)verrouillage
      table.date('hlddatp_0') // Date verrouillage précédente
      table.datetime('hldtim_0') // Heure (dé)verrouillage
      table.datetime('hldtimp_0') // Heure verrouillage précédente
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('bpapyr_0', 30) // Adresse payeur
      table.string('ordnotl_0', 30) // Mt lignes HT (soc)
      table.date('ordatil_0') // Mt lignes TTC (soc)
      table.string('ordinvnotl_0', 30) // Valorisation HT (soc)
      table.string('ordinvatil_0', 30) // Valorisation TTC (soc)
      table.string('sinum_0', 20) // No pièce Intégrale
      table.string('dsptotwei_0', 30) // Cumul poids
      table.string('dsptotvol_0', 30) // Cumul volume
      table.integer('invsta_0') // Etat facture
      table.integer('dlvsta_0') // Etat liv
      table.string('betcpy_0', 30) // Inter-sociétés
      table.string('cndnam_0', 60) // Contact livraison
      table.string('bpiposcod_0', 20) // Code postal facture
      table.string('bpicry_0', 30) // Pays facture
      table.string('bpicrynam_0', 60) // Nom pays facture
      table.string('ocnprn_0', 30) // ARC imprimé
      table.string('sqhnum_0', 20) // No devis
      table.string('pfmtot_0', 30) // Marge totale
      table.string('unl_0', 30) // Déverrouillage
      table.string('betfcy_0', 30) // Inter-site
      table.string('pjt_0', 30) // Affaire
      table.string('sfisstcod_0', 20) // Code taxe SST
      table.integer('cdtstap_0') // Etat en-cours précédent
      table.string('x4avmotcom_0', 30) // Trans. entrée divers
      table.string('invcnd_0', 30) // Condition de facturation
      table.string('sstentcod_0', 20) // Code exonération NA
      table.string('bpaord_0', 30) // Code adresse commande
      table.string('bpainv_0', 30) // Code adresse facture
      table.integer('draftstatus_0') // Brouillon
      table.string('demdlvhou_0', 30) // Heure livraison prévue
      table.date('sohvaldat_0') // Date de validation
      table.date('zdatok_0') // Date liv acceptée
      table.string('auuid_0', 30) // Identifiant unique
      table.string('sohcfmflg_0', 30) // Signature électronique
      table.string('inrati_0', 30) // A facturer TTC
      table.string('inrnot_0', 30) // A facturer HT
      table.string('inrschati_0', 30) // Echéance facturation TTC
      table.string('inrschnot_0', 30) // Echéance facturation HT
      table.string('sohnumend_0', 20) // Numéro définitif
      table.string('die_0', 30) // Code axe
      table.string('zbyedi_0', 30) // Acheteur EDI
      table.string('zflgedi_0', 30) // ARC EDI envoyé
      table.string('zsuedi_0', 30) // Fournisseur EDI
      table.string('zctaedi_0', 30) // Contact EDI
      table.string('zcodlivedi_0', 20) // code livraison EDI
      table.string('zcdeclifin_0', 30) // CDE client fin ALDES
      table.string('zn1clifin_0', 30) // Nom1 cli fin ALDES
      table.string('zn2clifin_0', 30) // Nom2 cli fin ALDES
      table.string('zlieuexp_0', 30) // Lieu d'expédition
      table.string('x4sohenvaut_0', 30) // 
      table.string('x4avmot_0', 30) // 
      table.string('x4debctlcon_0', 30) // Débl. ctrl art-cond
      table.string('x4forrel_0', 30) // Forcer reliquats
      table.string('x4trtrel_0', 30) // Traitement reliquats
      table.string('xcolsouple_0', 30) // Colisage souple
      table.string('x4exclrfa_0', 30) // Exclusion RFA
      table.string('x1typprepa_0', 30) // Type Prépa
      table.string('x4rgop_0', 30) // Options transport
      table.string('x1precodman_0', 20) // Code prépa forcé
      table.string('draftrej_0', 30) // Rejet brouillon
      table.string('draftrejren_0', 30) // Motif rejet brouillon
      table.string('x1typprepman_0', 30) // Type Prépa forcé
      table.string('x4regrel_0', 30) // Règle reliquats
      table.string('hldusr_0', 30) // Utilisateur (dé)verrouillage
      table.string('hldusrp_0', 30) // Utilisateur verrou précédent
      table.string('cur_0', 30) // Devise
      table.string('lasdlvnum_0', 20) // No dernière livraison
      table.date('lasdlvdat_0') // Date dernière livraison
      table.string('lasinvnum_0', 20) // No dernière facture
      table.string('dlrnot_0', 30) // Montant restant à livrer HT
      table.string('dspvou_0', 30) // Unité Volume
      table.string('prfnum_0', 20) // No facture proforma
      table.string('shiadecod_0', 20) // Code expédit/destin
      table.string('salfcy_0', 30) // Site vente
      table.string('bpcpyr_0', 30) // Tiers Payeur
      table.string('xnbedt_0', 30) // Nombre d'impressions
      table.string('opgnum_0', 20) // Opération marketing
      table.string('opgtyp_0', 30) // Type opération
      table.string('bpcnam_0', 60) // Nom client commande
      table.string('bpcaddlig_0', 30) // Adresse commande
      table.string('bpcposcod_0', 20) // Code postal commande
      table.string('bpccty_0', 30) // Ville commande
      table.string('bpccry_0', 30) // Pays commande
      table.string('bpccrynam_0', 60) // Nom pays commande
      table.string('copnbr_0', 30) // Nombre exemplaires ARC
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('clelinnbr_0', 30) // Nombre lignes soldées
      table.string('bpcsat_0', 30) // Etat commande
      table.integer('ordsta_0') // Etat commande
      table.string('bpdsat_0', 30) // Etat livraison
      table.date('lasinvdat_0') // Date dernière facture
      table.string('daylti_0', 30) // Délai livraison
      table.string('bpinam_0', 60) // Nom client facture
      table.string('bpiaddlig_0', 30) // Adresse facture
      table.string('bpicty_0', 30) // Ville facture
      table.string('bpdposcod_0', 20) // Code postal livraison
      table.string('bpdcty_0', 30) // Ville livraison
      table.string('bpdcry_0', 30) // Pays livraison
      table.string('sohcat_0', 30) // Catégorie commande
      table.string('bpcord_0', 30) // Client commande
      table.string('ffwnum_0', 20) // Numéro transitaire
      table.string('cusordref_0', 20) // Référence commande client
      table.date('demdlvdat_0') // Date livraison acceptée
      table.date('vlydatcon_0') // Date validité
      table.string('alltyp_0', 30) // Type allocation
      table.string('expnum_0', 20) // Numéro export
      table.string('lan_0', 30) // Langue
      table.integer('allsta_0') // Statut allocation
      table.string('adrval_0', 30) // Validé
      table.string('mdl_0', 30) // Mode livraison
      table.string('drn_0', 30) // No tournée
      table.string('dlvpio_0', 30) // Priorité livraison
      table.string('ime_0', 30) // Mode facturation
      table.string('bpaadd_0', 30) // Adresse livraison
      table.string('bpdaddlig_0', 30) // Adresse livraison
      table.string('ordinvnot_0', 30) // Valorisation HT
      table.string('ordnot_0', 30) // Mt lignes HT
      table.date('ordati_0') // Mt lignes TTC
      table.string('sohtex1_0', 30) // Texte entête cde
      table.string('ocnflg_0', 30) // Impression ARC
      table.string('dme_0', 30) // Livraison partielle
      table.string('alllinnbr_0', 30) // Nombre lignes à allouer
      table.string('dlvlinnbr_0', 30) // Nombre lignes livrées
      table.string('orifcy_0', 30) // Site origine/émetteur
      table.string('geocod_0', 20) // Géo code
      table.string('insctyflg_0', 30) // Flag intérieur ville
      table.string('ffwadd_0', 30) // Adresse transitaire
      table.string('ordinvati_0', 30) // Valorisation TTC
      table.string('ictcty_0', 30) // Ville Incoterm
      table.string('x4sohexp_0', 30) // Expéditeur
      table.string('bpcinv_0', 30) // Client facture
      table.string('bpcgru_0', 30) // Client groupe
      table.string('dep_0', 30) // Escompte
      table.string('sohtyp_0', 30) // Type commande
      table.string('revnum_0', 20) // No avenant
      table.date('orddat_0') // Date commande
      table.string('appflg_0', 30) // Signée
      table.string('linnbr_0', 30) // Nombre lignes
      table.decimal('dsptotqty_0', 15, 2) // Cumul quantité
      table.string('bpieecnum_0', 20) // Identification UE
      table.string('invdtadsp_0', 30) // Clé Répart
      table.string('eecict_0', 30) // Incoterm
      table.string('cntnam_0', 60) // Personne à contacter
      table.string('invlinnbr_0', 30) // Nombre lignes facturées
      table.date('credat_0') // Date création
      table.string('cclren_0', 30) // Motif solde
      table.date('ccldat_0') // Date solde
      table.string('x4numdemand_0', 20) // Demande de service
      table.string('srenum_0', 20) // Demande de service
      table.date('vcrinvcnddat_0') // Date départ échéance
      table.string('xcmqint_0', 30) // Contremarque interne
      table.string('xmodgfi_0', 30) // Mode gen fact interc
      table.string('x4numint_0', 20) // Intervention
      table.string('cninam_0', 60) // Contact facture
      table.string('cmgnum_0', 20) // Campagne marketing
      table.string('vtt_0', 30) // Type transact.Vertex
      table.string('sohtex2_0', 30) // Texte pied cde
      table.string('tsccod_0', 20) // Famille statistique
      table.decimal('prityp_0', 15, 2) // Prix HT/TTC
      table.string('invdtalin_0', 30) // Elt fact lig tarif
      table.decimal('amttax_0', 15, 2) // Montant taxe
      table.integer('bastax_0') // Base taxe
      table.decimal('invdtaamt_0', 15, 2) // % ou Montant Element de facturation
      table.string('ordcle_0', 30) // Autorisation solde commande
      table.string('odl_0', 30) // 1 commande par livraison
      table.string('sohnum_0', 20) // No commande
      table.string('sdhtyp_0', 30) // Type livraison
      table.date('shidat_0') // Date expédition
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
      table.string('dlrati_0', 30) // Montant restant à livrer TTC
      table.string('updusr_0', 30) // Opérateur modif
      table.string('bpisat_0', 30) // Etat facture
      table.integer('cdtsta_0') // Etat crédit
      table.string('bptnum_0', 20) // Transporteur
      table.string('creusr_0', 30) // Opérateur création
      table.string('discrgtyp_0', 30) // Type de valeur remise/frais
      table.integer('z01statut_0') // Statut
      table.string('x4sohdest_0', 60) // Destinataire
      table.string('invdta_0', 30) // Elément de facturation
      table.string('vacbpr_0', 30) // Régime taxe
      table.string('stofcy_0', 30) // Site expédition
      table.string('dspweu_0', 30) // Unité poids
      table.string('pte_0', 30) // Condition paiement
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

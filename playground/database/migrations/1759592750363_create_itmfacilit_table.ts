import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'itmfacilit'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('budcstupd_0', 30) // Mise à jour coût std budget
      table.string('qualti_0', 30) // Contrôle qualité
      table.string('pckstkflg_0', 30) // Détail stock
      table.string('shr_0', 30) // Pourcentage de perte
      table.string('reotsd_0', 30) // Seuil de réapprovisionnement
      table.string('tctrnum_0', 20) // Contenant
      table.string('mic_0', 30) // Coeff réduct
      table.string('simcstupd_0', 30) // Màj coût simulation
      table.string('safstoclc_0', 30) // Stock sécurité calculé
      table.string('reotsdclc_0', 30) // Seuil réapprovisionnement calculé
      table.string('reominclc_0', 30) // Lot économique calculé
      table.string('maxstoclc_0', 30) // Stock maximum calculé
      table.string('locnum_0', 20) // N° emplacement
      table.string('defloc_0', 30) // Emplac. par défaut
      table.string('shllti_0', 30) // Délai recontrôle
      table.string('cfgvcrnum_0', 20) // N.pièce config.
      table.string('xaqp_0', 30) // AQP/AQF
      table.string('proper_0', 30) // Prorata qté régularisation
      table.string('mfglti_0', 30) // Délai de fabrication
      table.string('wippro_0', 30) // Protection WIP
      table.string('totlti_0', 30) // Multi niveaux
      table.string('vltcodhis_0', 20) // Méthode valorisation
      table.string('vltcod_0', 20) // Méthode de valorisation
      table.string('defloctyp_0', 30) // Type emplacement par défaut
      table.date('vltcoddat_0') // Date expertise
      table.string('quaadxuid_0', 30) // Process fréquence
      table.string('quanum_0', 20) // Nombre entrées
      table.string('quanumuid_0', 20) // Entrées process
      table.string('xgestpal_0', 30) // Palette stockée
      table.string('itmtolneg_0', 30) // Tolérance article - (%)
      table.string('cunflg_0', 30) // Bloqué inventaire
      table.string('mfgroualt_0', 30) // Alternative gamme  fabrication
      table.string('cstroualt_0', 30) // Alternative gamme coût
      table.string('rccroualt_0', 30) // Alternative gamme PGC
      table.date('upddat_0') // Date modification
      table.string('stofcy_0', 30) // Site stock
      table.string('reopol_0', 30) // Politique réapprovisionnement
      table.string('safsto_0', 30) // Stock sécurité
      table.string('maxsto_0', 30) // Stock maximum
      table.decimal('reominqty_0', 15, 2) // Lot économique
      table.string('foh_0', 30) // Horizon demande
      table.date('credat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.string('ovecpnflg_0', 30) // FG cpn calcul FG niv
      table.string('daycov_0', 30) // Couverture
      table.string('itmref_0', 20) // Article
      table.string('wgracs_0', 30) // Code accès
      table.string('quaacs_0', 30) // Code accès
      table.string('qlycrd_0', 30) // Fiche technique
      table.string('cstrou_0', 30) // Coût
      table.string('sescod_0', 20) // Saisonnalité
      table.string('plh_0', 30) // Horizon ferme
      table.string('plhuot_0', 30) // Unité temps horizon planification
      table.string('ofs_0', 30) // Délai réapprovisionnement
      table.string('reofcy_0', 30) // Site réapprovisionnement
      table.string('x1invflg_0', 30) // Inventaire
      table.string('stdcstupd_0', 30) // Mise à jour coût standard
      table.string('cutcstupd_0', 30) // Mise à jour coût std actualisé
      table.string('abccls_0', 30) // Catégorie ABC
      table.string('stocod_0', 20) // Mode retrait stock
      table.string('cuncod_0', 20) // Mode inventaire
      table.string('stomgtcod_0', 20) // Gestion stock
      table.string('pckflg_0', 30) // Colisage
      table.string('reocod_0', 20) // Type sugges
      table.string('quaflg_0', 30) // Soumis à contrôle
      table.string('mfgrou_0', 30) // Gamme fabrication
      table.string('expnum_0', 20) // Numéro export
      table.string('creusr_0', 30) // Opérateur création
      table.string('xtypof_0', 30) // Type OF
      table.string('xstolocdef_0', 30) // Emplacement de stockage par défaut
      table.string('xartsec_0', 30) // Article sécurité
      table.string('relscatia_0', 30) // Perte au lancement
      table.string('prplti_0', 30) // Picking
      table.string('x1invsssnum_0', 20) // Session  inventaire
      table.string('cunlisnum_0', 20) // Inventaire en cours
      table.string('clepctaut_0', 30) // % pour solde automatique
      table.string('planner_0', 30) // Planificateur
      table.string('pck_0', 30) // Emballage
      table.string('pckcap_0', 30) // Capacité emballage
      table.string('ovecod_0', 20) // Frais généraux
      table.string('buy_0', 30) // Acheteur
      table.string('pcu_0', 30) // Unité conditionnement
      table.string('locmgtcod_0', 20) // Gestion emplacement
      table.string('rccrou_0', 30) // PGC
      table.string('reomgtcod_0', 20) // Mode réapprovisionnement
      table.string('reoper_0', 30) // Périodicité réaprovisionnement
      table.string('monproyea_0', 30) // Année dernier traitement mensuel
      table.string('monpromon_0', 30) // Mois dernier traitement mensuel
      table.string('yeaproyea_0', 30) // Dernier traitement annuel
      table.string('mfgshtcod_0', 20) // Lancement si en rupture
      table.string('fohuot_0', 30) // Unité temps horizon demande
      table.decimal('mfglotqty_0', 15, 2) // Lot technique
      table.string('pjmstrstk_0', 30) // Stock pour affaire
      table.string('excfdma_0', 30) // Date disponibilité non applicable
      table.string('x4totsugper_0', 30) // Tol. Sug. %  perte
      table.string('x4gesfab_0', 30) // Gestion fabricant
      table.string('xmaidur_0', 30) // Préparation cde France
      table.string('auuid_0', 30) // Identifiant unique
      table.string('otrstyp_0', 30) // Type mouvement
      table.string('shlltiuom_0', 30) // Unité tps recontrole
      table.string('quafry_0', 30) // Fréquence  contrôle qualité
      table.string('smptyp_0', 30) // Echantillonnage
      table.string('genlevins_0', 30) // Niveau général inspection
      table.string('nqa_0', 30) // Niveau qualité acceptable
      table.string('smpmod_0', 30) // Mode échantillonnage
      table.string('redmodflg_0', 30) // Mode de redressement
      table.string('ltiqlycrd_0', 30) // Fiche qualité recontrôle
      table.string('xgranule_0', 30) // Granule
      table.integer('newltista_0') // Statut  recontrôle
      table.string('dlu_0', 30) // Coefficient DLU
      table.string('nmfc_0', 30) // NMFC
      table.string('ordwrh_0', 30) // Dépôt commande
      table.string('matwrh_0', 30) // Dépôt OF
      table.string('shiwrh_0', 30) // Dépôt expédition
      table.string('itmtolpos_0', 30) // Tolérance pesée +(%)
      table.string('xincomplet_0', 30) // Incomplet
      table.string('x4extdoslot_0', 30) // Format de fichier
      table.string('x4splitprh_0', 30) // Split ligne prépa
      table.string('x4cmjclc_0', 30) // Calcul CMJ
      table.string('xpereco_0', 30) // Période économique
      table.string('xmoddoslot_0', 30) // Modèle dossier lot
      table.string('xnivstock_0', 30) // Niv libération stock
      table.string('ptocod_0', 20) // Règle d'affectation
      table.string('frtcls_0', 30) // Classe de fret
      table.decimal('xmaiqty_0', 15, 2) // Liste des devis /cli/rep/etat
      table.string('xproctn_0', 30) // Production continue
      table.integer('stafed_0') // Région/Etat
      table.string('comseqcon_0', 30) // Ctrl séq. composant
      table.string('x4ftscodlti_0', 20) // FT recontrôle
      table.string('lpnmgtcod_0', 20) // Gestion contenant
      table.string('tctrpcucoe_0', 30) // Nb unités/contenant
      table.string('tctrdef_0', 30) // Contenant par défaut
      table.string('mfgwrh_0', 30) // Dépôt conso
      table.string('trfwrh_0', 30) // Dépôt mvt interne
      table.string('scowrh_0', 30) // Dépôt expé sous-trt
      table.string('sccwrh_0', 30) // Dépôt conso sous-trt
      table.string('ism_0', 30) // Stockage/Manipulation
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('xuccompl_0', 30) // %UC Complémentaire
      table.string('xftscod_0', 20) // Code fiche technique spéciale
      table.string('pckserflg_0', 30) // Détail série
      table.string('x1plncode_0', 20) // Plan de stabilité
      table.string('x1rulqcode_0', 20) // Code Règle
      table.string('x1tolfefifo_0', 30) // Tolérence FIFO/FEFO en J
      table.string('x1cni_0', 30) // Contrainte obligatoire
      table.string('x4rfastucoe_0', 30) // Coefficient RFA/US
      table.string('x4uomrfa_0', 30) // Unité RFA
      table.string('x4exclrfa_0', 30) // Exclusion RFA
      table.string('x1claaff_0', 30) // Classe d'affectation
      table.string('x1clarot_0', 30) // Classe de rotation
      table.string('x1zprep_0', 30) // Zone de préparation
      table.string('zbsm_0', 30) // Pas d'impression BSM
      table.string('x4typofaut_0', 30) // Type OF auto
      table.string('x4typofitm_0', 30) // Avec article
      table.string('x4typofusr_0', 30) // Avec utilisateur
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

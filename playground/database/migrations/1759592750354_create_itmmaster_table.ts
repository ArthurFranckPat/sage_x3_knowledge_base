import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'itmmaster'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.integer('yfamstat7_0') // Famille stat 7
      table.integer('yfamstat6_0') // Famille stat 6
      table.string('unnbr_0', 30) // Numéro ONU
      table.string('x4autoalim_0', 30) // GMAO - Auto-alimentation
      table.string('x4logauto_0', 30) // Logistique Automotive
      table.string('x4altbomsav_0', 30) // Alternative nomenclature  SAV
      table.string('x1uldef_0', 30) // UL / Défaut
      table.string('x4dmdlog_0', 30) // Code DMDLOG
      table.string('xexptransa_0', 30) // Date export DMDLOG
      table.string('x1opndly_0', 30) // Conserv. ap. ouv. (j)
      table.integer('newltista_0') // Statut  recontrôle
      table.string('dlu_0', 30) // Coefficient DLU
      table.string('pcccod_0', 20) // Nature de dépense
      table.string('xflgver_0', 30) // Gestion version
      table.string('eccflg_0', 30) // Gestion version
      table.string('eccsto_0', 30) // Version stock
      table.string('xcetiat_0', 30) // Soumis à CETIAT
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x19adrcdt_0', 30) // Adresse tiers de conditionnement
      table.string('x19adrfab_0', 30) // Adresse tiers de fabrication
      table.string('x19bprcdt_0', 30) // Tiers de conditionnement
      table.string('xtgapsub_0', 30) // TGAP sur substance
      table.string('xtgapsubta_0', 30) // Taux TGAP substance
      table.string('x19bprlib_0', 30) // Tiers de libération
      table.string('x19adrlib_0', 30) // Adresse tiers de libération
      table.string('x19bprctl_0', 30) // Tiers de contrôle
      table.string('x19adrctl_0', 30) // Adresse tiers de contrôle
      table.string('xnivstock_0', 30) // Niv libération stock
      table.string('eecges_0', 30) // Soumis à la DEB
      table.string('eccbomalt2_0', 30) // Alternative de nomenclature
      table.string('eccbomalt3_0', 30) // Alternative de nomenclature
      table.string('die_0', 30) // Code axe
      table.string('eccroualt_0', 30) // Alternative de gamme
      table.string('intflg_0', 30) // Intermédiaire
      table.string('plmatturl_0', 30) // Documents liés
      table.string('plmitmref_0', 20) // Article PLM
      table.string('plmhisurl_0', 30) // Historique PLM
      table.string('itmvou_0', 30) // Volume de l'US
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('npipro_0', 30) // Prototype
      table.string('xechifcpnitm_0', 30) // Composant chiffrage
      table.integer('stafed_0') // Région/Etat
      table.string('x4inclusfco_0', 30) // Inclus fiche compo.
      table.string('x4suivfco_0', 30) // Suivi fiche compo.
      table.string('stcnum_0', 20) // Structure de coûts
      table.string('sstcod_0', 20) // Code taxe SST
      table.string('eccmin_0', 30) // Compteur mineur
      table.string('eccmaj_0', 30) // Compteur majeur
      table.string('loaeccflg_0', 30) // Préchargement version(s)
      table.decimal('cpramt_0', 15, 2) // Coût achat forfaitaire
      table.string('mattol_0', 30) // Règle rapprochement
      table.string('trklev_0', 30) // Niveau traçabilité
      table.string('xfecod_0', 20) // Code famille technique
      table.string('znbfab_0', 30) // NB fabricant
      table.string('xcouplv_0', 30) // Couplage L/V
      table.string('xcodlig_0', 20) // Code sous-statut
      table.string('xtgapcat_0', 30) // Catégorie TGAP
      table.string('xftcod_0', 20) // Code fiche technique
      table.integer('yfamstat8_0') // Famille stat 8
      table.string('ycodauto_0', 20) // Code automate
      table.date('zdate_0') // Date de mise en élab
      table.string('puu_0', 30) // Unité achat
      table.string('tclcod_0', 20) // Catégorie article
      table.string('sau_0', 30) // Unité vente
      table.string('buy_0', 30) // Acheteur
      table.integer('itmsta_0') // Statut article
      table.string('salflg_0', 30) // Vendu
      table.string('xcdt_0', 30) // Conditionnement
      table.string('pcu_0', 30) // Unité conditionnement
      table.string('minrmnprc_0', 30) // Tolérance reliquat %
      table.string('itmexnflg_0', 30) // Flag d'exemption
      table.integer('stataxflg_0') // Flag taxabilité état/local
      table.string('rcpflg_0', 30) // Code réception
      table.string('stdflg_0', 30) // Mode gestion
      table.string('zdem_0', 30) // Demandeur chgt sta
      table.string('alg_0', 30) // Allergènes
      table.date('algdat_0') // Date chg allergène
      table.string('algbom_0', 30) // Code nomen allergène
      table.string('xnbeticomp_0', 30) // Nombre étiquette complémentaire
      table.string('eccrouflg_0', 30) // Version gamme
      table.string('x19bprfab_0', 30) // Tiers de fabrication
      table.string('x4confper_0', 30) // Conf péremption
      table.string('x4inirefper_0', 20) // Init ref. péremption
      table.string('x4refnnsig_0', 20) // Date ref per non significative
      table.string('itmsfttyp_0', 30) // Type article SAF-T
      table.string('ycastu_0', 30) // Unité par défaut
      table.string('x4studef_0', 30) // Unité par défaut
      table.string('dacpuucoe_0', 30) // Saisie coeff achat autorisée
      table.string('dacsaucoe_0', 30) // Saisie coeff vente autorisée
      table.string('dacpcucoe_0', 30) // Saisie coeff UC autorisée
      table.string('flycat_0', 30) // Catégorie de coupon
      table.string('stoissdef_0', 30) // Sortie de stock
      table.string('shluom_0', 30) // Unité tps péremption
      table.string('shlltiuom_0', 30) // Unité tps recontrole
      table.string('expnum_0', 20) // Numéro export
      table.string('cstgrp_0', 30) // Famille coûts
      table.string('brdcod_0', 20) // Famille coûts
      table.string('plaacs_0', 30) // Accès gestionnaire
      table.string('rplitm_0', 30) // Article remplacement
      table.string('creusr_0', 30) // Opérateur création
      table.string('xconpo_0', 30) // Poids Brut (Kg)
      table.string('xconvol_0', 30) // Code Volume
      table.string('acccod_0', 20) // Code comptable
      table.string('cce_0', 30) // Section analytique
      table.string('xcontyp_0', 30) // Type conditionnement
      table.string('stulbefmt_0', 30) // Format étiquette pour unité stock
      table.string('cfgbprref_0', 20) // Référence tiers
      table.string('tplcongua_0', 30) // Contrat de garantie
      table.date('cfgdeldat_0') // Date purge config.
      table.string('pitcdt_0', 30) // Jetons à créditer
      table.string('cfgitmref_0', 20) // Article de référence
      table.string('dty_0', 30) // Densité
      table.string('xdensite_0', 30) // Densité
      table.string('xstuucdtco_0', 30) // Coef UCDT/US
      table.string('xcoeftgap_0', 30) // Coefficient TGAP
      table.string('trkcod_0', 20) // Traçabilité
      table.string('planner_0', 30) // Planificateur
      table.string('x4bcaltgam_0', 30) // Alternative gamme
      table.string('x4ctrlflg_0', 30) // Contrôle
      table.string('fimhor_0', 30) // Horizon ferme
      table.string('frthoruom_0', 30) // Unité temps horizon planification
      table.string('ofs_0', 30) // Délai réapprovisionnement
      table.string('itmdes3_0', 60) // Désignation 3
      table.string('scsflg_0', 30) // Sous-traitance
      table.string('stocrd_0', 30) // Fiche stockage
      table.date('lifstrdat_0') // Début vie
      table.date('lifenddat_0') // Fin vie
      table.string('itmref_0', 20) // Article
      table.string('purflg_0', 30) // Acheté
      table.string('mfgflg_0', 30) // Fabriqué
      table.string('scpflg_0', 30) // Sous-traité
      table.string('phaflg_0', 30) // Fantôme
      table.string('genflg_0', 30) // Générique
      table.string('cprcoe_0', 30) // Coefficient frais approche
      table.integer('exysta_0') // Statut péremption
      table.string('vou_0', 30) // Unité Volume
      table.string('weu_0', 30) // Unité poids
      table.string('stomgtcod_0', 20) // Gestion stock
      table.string('itmdes1_0', 60) // Désignation 1
      table.string('des1axx_0', 60) // Désignation 1
      table.string('itmdes2_0', 60) // Désignation 2
      table.string('des2axx_0', 60) // Désignation 2
      table.string('itmstd_0', 30) // Norme
      table.string('eancod_0', 20) // Code EAN
      table.string('defpot_0', 30) // Titre par défaut
      table.string('stu_0', 30) // Unité stock
      table.string('ssu_0', 30) // Unité statistique
      table.string('puustucoe_0', 30) // Coefficient UA-US
      table.string('prqflg_0', 30) // DA obligatoire
      table.string('mfgtex_0', 30) // Texte production
      table.string('invprodtyp_0', 30) // Type article
      table.string('x4bcgam_0', 30) // Gamme
      table.boolean('flgfas_0').defaultTo(false) // Immobilisable
      table.string('cfgbprnum_0', 20) // Tiers
      table.string('cpy_0', 30) // Société
      table.string('altbomhdk_0', 30) // Alternative
      table.string('x4bcnom_0', 30) // Nomenclature
      table.string('saustucoe_0', 30) // Coefficient UV-US
      table.string('ssustucoe_0', 30) // Coefficient Ustat-US
      table.string('pcustucoe_0', 30) // Coefficient UC-US
      table.string('exymgtcod_0', 20) // Gestion péremption
      table.string('houuom_0', 30) // Unité pour l'heure
      table.string('mntuom_0', 30) // Unité pour minutes
      table.string('xpohtypitm_0', 30) // Type de commande
      table.string('vacitm_0', 30) // Niveau taxe
      table.string('frthor_0', 30) // Horizon planification
      table.date('credat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.date('upddat_0') // Date modification
      table.string('dlvflg_0', 30) // Livrable
      table.string('lotmgtcod_0', 20) // Gestion lot
      table.string('lotcou_0', 30) // Compteur lot
      table.string('sermgtcod_0', 20) // Gestion série
      table.string('des3axx_0', 60) // Désignation 3
      table.string('negsto_0', 30) // Stock négatif autorisé
      table.string('xcry_0', 30) // Code pays
      table.string('xqcdt_0', 30) // Quantité
      table.string('shl_0', 30) // Délai péremption
      table.string('itmwei_0', 30) // Poids de l'unité de stock
      table.string('defact_0', 30) // Titre UI par défaut
      table.string('cusref_0', 20) // Référence douanière
      table.string('purtex_0', 30) // Texte achat
      table.decimal('purbaspri_0', 15, 2) // Prix de base
      table.string('lbefmt_0', 30) // Format étiquette
      table.string('cfgfldalp1_0', 30) // Champ alp.1
      table.string('cfgfldalp2_0', 30) // Champ alp.2
      table.string('cfgfldalp3_0', 30) // Champ alp.3
      table.string('cfgfldalp4_0', 30) // Champ alp.4
      table.string('cfgfldalp5_0', 30) // Champ alp.5
      table.string('cfgfldalp6_0', 30) // Champ alp.6
      table.string('seakey_0', 30) // Clé recherche
      table.string('pitcdtuom_0', 30) // Unité de crédit
      table.string('tplconlnd_0', 30) // Contrat de prêt
      table.string('cremac_0', 30) // Création de parc
      table.string('x4codprd_0', 20) // Code produit
      table.string('yquick_0', 30) // Ctr qualité
      table.string('eeu_0', 30) // Unité supplémentaire DEB
      table.string('eeustucoe_0', 30) // Coef UE-US
      table.string('cfglin_0', 30) // Ligne de produit
      table.string('cfgfldnum1_0', 20) // Champ num.1
      table.string('cfgfldnum2_0', 20) // Champ num.2
      table.string('cfgfldnum3_0', 20) // Champ num.3
      table.string('cfgfldnum4_0', 20) // Champ num.4
      table.string('cfgfldnum5_0', 20) // Champ num.5
      table.string('cfgfldnum6_0', 20) // Champ num.6
      table.string('sercou_0', 30) // Compteur série
      table.string('pcurul_0', 30) // Déstockage UC
      table.string('shllti_0', 30) // Délai recontrôle
      table.string('tplconsrv_0', 30) // Contrat de service
      table.string('cfgvcrnum_0', 20) // N.pièce config.
      table.string('xitmitm_0', 30) // Article maître
      table.string('xucdt_0', 30) // Unité de condit.
      table.string('xucdtcoe_0', 30) // Coef UCDT/STU maitre
      table.string('hdkitmtyp_0', 30) // Type d'article
      table.string('dayuom_0', 30) // Unité pour les jours
      table.string('tsicod_0', 20) // Famille statistique
      table.string('tooflg_0', 30) // Outillage
      table.string('fimhoruom_0', 30) // Unité temps horizon ferme
      table.string('x4bomalttyp_0', 30) // Type alternative nomenclature
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

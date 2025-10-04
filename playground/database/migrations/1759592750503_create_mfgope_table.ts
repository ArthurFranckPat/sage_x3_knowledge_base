import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mfgope'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('cplwst_0', 30) // Poste réalisé
      table.string('plnfcy_0', 30) // Site planification
      table.string('stdlab_0', 30) // Poste M-O standard
      table.string('extlab_0', 30) // Poste M-O prévu
      table.string('cpllab_0', 30) // Poste M-O réalisé
      table.date('frcstrdat_0') // Début forcé ordonnancement
      table.string('opestrcoe_0', 30) // Coefficient US (STR)/UO
      table.decimal('extstrqty_0', 15, 2) // Quantité en US ss-traitance
      table.integer('mfgsta_0') // Statut ordre de fabrication
      table.string('mfgfcy_0', 30) // Site production
      table.string('stdwstnbr_0', 30) // Nb postes standard
      table.datetime('extsettim_0') // Temps réglage prévu
      table.datetime('cplsettim_0') // Temps réglage réalisé
      table.string('bprnum_0', 20) // Tiers
      table.datetime('stdopetim_0') // Temps opératoire standard
      table.datetime('psptim_0') // Temps post opératoire
      table.decimal('rejcplqty_0', 15, 2) // Quantité réalisée rejetée
      table.decimal('quacplqty_0', 15, 2) // Quantité réalisée sous contrôle
      table.string('mfotrkflg_0', 30) // Flag suivi
      table.string('trkfirst_0', 30) // Date début suivi
      table.string('trkfirstc_0', 30) // Date début suivi
      table.string('trklast_0', 30) // Date fin suivi
      table.string('trklastc_0', 30) // Date fin suivi
      table.string('stdwst_0', 30) // Poste standard
      table.string('extwst_0', 30) // Poste prévu
      table.decimal('cplqty_0', 15, 2) // Quantité réalisée totale
      table.decimal('extpri_0', 15, 2) // Prix prévu
      table.decimal('cplpri_0', 15, 2) // Prix réel
      table.decimal('basqty_0', 15, 2) // Quantité base
      table.datetime('timcod_0') // Unité de gestion
      table.string('shr_0', 30) // Pourcentage de perte
      table.string('frcstrhou_0', 30) // Heure forcée ordonnancement
      table.string('extwstnbr_0', 30) // Nombre postes prévus
      table.string('cplwstnbr_0', 30) // Nombre postes réalisé
      table.decimal('extstuqty_0', 15, 2) // Quantité prévue US
      table.datetime('stdsettim_0') // Temps réglage standard
      table.decimal('stdqty_0', 15, 2) // Quantité standard
      table.string('opesplnum_0', 20) // Fraction début opération
      table.decimal('refpri_0', 15, 2) // Prix référence
      table.string('xmachine_0', 30) // Code machine
      table.date('credat_0') // Date création
      table.string('wsteff_0', 30) // Efficience poste en %
      table.string('wipnum_0', 20) // Numéro encours (SC)
      table.string('poplin_0', 30) // Ligne commande
      table.string('scocod_0', 20) // Code sous-traitance
      table.string('scoitmref_0', 20) // Article de sous-traitance
      table.string('splcod_0', 20) // Fractionnement (capa finie)
      table.string('splmaxnbr_0', 30) // Nb maxi fractionnement (capa finie)
      table.string('altopecod_0', 20) // Opération alternative (PmSim)
      table.string('rstmac_0', 30) // Restriction machine (PmSim)
      table.datetime('grpsettim_0') // Temps réglage groupe (PmSim)
      table.string('opeplnnum_0', 20) // Plan opération
      table.string('operoupct_0', 30) // Image opération
      table.string('equnum_0', 20) // Outillage
      table.string('fxgnum_0', 20) // Type contenant
      table.string('eff_0', 30) // Efficience en %
      table.datetime('prptim_0') // Tps préparation
      table.datetime('timuomcod_0') // Unité temps
      table.string('pohnum_0', 20) // No commande
      table.string('fitcapstr_0', 30) // Date début capacité finie
      table.string('fitcapend_0', 30) // Date fin capacité finie
      table.string('infcapstr_0', 30) // Date début (capacité infinie)
      table.string('infcapend_0', 30) // Date fin (capacité infinie)
      table.string('mfotex_0', 30) // Texte
      table.string('openum_0', 20) // Numéro opération
      table.string('openumlev_0', 20) // Suffixe opération (PmSim)
      table.string('rplind_0', 30) // Indice remplacement
      table.string('updusr_0', 30) // Opérateur modif
      table.date('upddat_0') // Date modification
      table.string('expnum_0', 20) // Numéro Export
      table.string('cad_0', 30) // Cadence
      table.string('prgnum_0', 20) // Programme
      table.string('creusr_0', 30) // Opérateur création
      table.datetime('waitim_0') // Temps attente
      table.decimal('extqty_0', 15, 2) // Quantité prévue
      table.string('opelabcoe_0', 30) // Coef temps main-d'oeuvre opératoire
      table.string('teccrd_0', 30) // Fiche technique
      table.string('schgrp_0', 30) // Critère regroupement (PmSim)
      table.string('popseq_0', 30) // Séquence
      table.integer('opesta_0') // Statut opération
      table.string('setlabcoe_0', 30) // Coef temps main-d'oeuvre réglage
      table.string('roodes_0', 60) // Désignation opération
      table.string('opeuom_0', 30) // Unité opération
      table.decimal('invqty_0', 15, 2) // Quantité facturée
      table.datetime('extunttim_0') // Temps unitaire prévu
      table.datetime('extopetim_0') // Temps opération prévu
      table.datetime('cplopetim_0') // Temps opération réalisé
      table.string('opsnum_0', 20) // Numéro charge
      table.datetime('cplunttim_0') // Temps unitaire réalisé
      table.datetime('stdunttim_0') // Temps unitaire standard
      table.string('rouopenum_0', 20) // Numéro opération de gamme
      table.string('opestucoe_0', 30) // Coef conversion US-UO
      table.string('cplcrg_0', 30) // Frais réel
      table.string('scowst_0', 30) // Poste sous-traitance
      table.string('mfgnum_0', 20) // Numéro ordre de fabrication
      table.string('bpaadd_0', 30) // Adresse
      table.string('mfgpio_0', 30) // Priorité
      table.string('scolti_0', 30) // Délai sous-traitance
      table.string('xcadtheo_0', 30) // Cadence théo
      table.string('opestr_0', 30) // Date début
      table.string('opeend_0', 30) // Date fin
      table.string('x4limend_0', 30) // Pièce réelle / Pièce de simulation
      table.string('x4limflg_0', 30) // Version active
      table.string('x4limtyp_0', 30) // Version arrêtée
      table.string('x4limstr_0', 30) // Version saisie
      table.date('xdatrefend_0') // Date fin référence
      table.string('xsernum_0', 20) // Numéro série
      table.date('xdatrefstr_0') // Date début référence
      table.string('stdlabnbr_0', 30) // Nombre postes mo standard
      table.string('extlabnbr_0', 30) // Nombre postes mo prévus
      table.string('cpllabnbr_0', 30) // Nombre postes mo réalisé
      table.string('x4collab_0', 30) // Collaborateur
      table.datetime('rootimcod_0') // Type temps opératoire
      table.string('scopuu_0', 30) // Unité achat
      table.string('x4plngmao_0', 30) // Planning GMAO
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('x1ftcod_0', 20) // Code Gamme d'analyses
      table.string('x1teccrd_0', 30) // Fiche technique Comp
      table.string('xempreinte_0', 30) // Nb d'empreintes
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4pfinflg_0', 30) // Flag fin ope
      table.string('schsbb_0', 30) // Critère de distinction
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

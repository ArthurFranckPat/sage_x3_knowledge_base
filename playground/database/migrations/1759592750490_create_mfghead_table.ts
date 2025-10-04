import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mfghead'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.date('clodat_0') // Date clôture
      table.string('trkfirst_0', 30) // Date début suivi
      table.string('trkfirstc_0', 30) // Date début suivi
      table.string('trklast_0', 30) // Date fin suivi
      table.string('trklastc_0', 30) // Date fin suivi
      table.string('xtypobj_0', 30) // Type objet
      table.string('plnfcy_0', 30) // Site planification
      table.integer('mfgsta_0') // Statut ordre de fabrication
      table.string('mfgfcy_0', 30) // Site production
      table.string('mfgmod_0', 30) // Mode lancement
      table.decimal('rejcplqty_0', 15, 2) // Quantité réalisée rejetée
      table.string('opeclenbr_0', 30) // Nombre opérations sold.
      table.string('scdmod_0', 30) // Mode jalonnement
      table.string('ltiredcoe_0', 30) // Coefficient de réduction du délai
      table.decimal('quacplqty_0', 15, 2) // Quantité réalisée sous contrôle
      table.decimal('avamfgqty_0', 15, 2) // Quantité productible
      table.string('clcscdlti_0', 30) // Cycle jalonnement calculé
      table.string('typmod_0', 30) // Type mode
      table.string('scdflg_0', 30) // Etat jalonnement
      table.string('matlinnbr_0', 30) // Nombre matières
      table.string('detallnbr_0', 30) // Nombre allocations détail
      table.string('ovrallnbr_0', 30) // Nombre allocations globales
      table.string('shtmatnbr_0', 30) // Nombre de ruptures
      table.string('prpmatnbr_0', 30) // Nombre de matières préparées
      table.integer('prpsta_0') // Statut préparation OF
      table.string('mfgtrkflg_0', 30) // Flag suivi
      table.date('credat_0') // Date création
      table.string('x4numint_0', 20) // Intervention
      table.string('wggflg_0', 30) // Flag plan de pesée
      table.integer('wggsta_0') // Situation de pesée
      table.decimal('cplqty_0', 15, 2) // Quantité réalisée totale
      table.string('itmlinnbr_0', 30) // Nombre articles lancés
      table.string('opelinnbr_0', 30) // Nombre opérations
      table.string('itmclenbr_0', 30) // Nombre articles soldés
      table.string('matclenbr_0', 30) // Nombre matières soldées
      table.string('infcapstr_0', 30) // Date début (capacité infinie)
      table.string('infcapend_0', 30) // Date fin (capacité infinie)
      table.string('roualt_0', 30) // Alternative gamme
      table.date('upddat_0') // Date modification
      table.string('x4numdemand_0', 20) // Demande de service
      table.date('objdat_0') // Objectif initial
      table.string('fitcapstr_0', 30) // Date début capacité finie
      table.string('fitcapend_0', 30) // Date fin capacité finie
      table.string('mfgnum_0', 20) // Numéro ordre de fabrication
      table.integer('allsta_0') // Statut allocation
      table.string('mfgtex_0', 30) // Texte production
      table.string('expnum_0', 20) // Numéro Export
      table.string('creusr_0', 30) // Opérateur création
      table.decimal('extqty_0', 15, 2) // Quantité prévue
      table.date('enddat_0') // Date fin
      table.string('optusr_0', 30) // Opé optimisation
      table.string('optflg_0', 30) // Flag optimisation
      table.string('xobj1_0', 30) // Objet partie 1
      table.string('xobj2_0', 30) // Objet partie 2
      table.string('xblocage_0', 30) // flag blocage
      table.string('cfmflg_0', 30) // Validée
      table.string('stu_0', 30) // Unité stock
      table.string('updusr_0', 30) // Opérateur modification
      table.string('rounum_0', 20) // Gamme lancée
      table.decimal('rmnextqty_0', 15, 2) // Quantité restante
      table.string('mfgpio_0', 30) // Priorité
      table.string('xncflg_0', 30) // flag non conformité
      table.string('xacflg_0', 30) // flag action
      table.string('xtypof_0', 30) // Type OF
      table.date('strdat_0') // Date début
      table.integer('xstaoutc_0') // Statut outillage en création OT
      table.integer('xstaclo_0') // Statut outillage en cloture
      table.date('xdescdat_0') // Date descente
      table.datetime('xdesctim_0') // Heure descente
      table.string('x4panne_0', 30) // Code panne
      table.string('xsstypot_0', 30) // Sous-type OT
      table.string('xnivmntc_0', 30) // Niveaux de maintenance concernés
      table.date('x4interdat_0') // Date intervention
      table.string('susflg_0', 30) // Flag OF suspendu
      table.string('mtoref_0', 20) // Réseau MTO
      table.date('xdatrefend_0') // Date fin référence
      table.date('xdatrefstr_0') // Date début référence
      table.string('sinum_0', 20) // No pièce Intégrale
      table.datetime('gfspubtim_0') // Date/heure optimisé
      table.date('credattim_0') // Date heure
      table.string('npipro_0', 30) // Prototype
      table.string('x4savori_0', 30) // Origine SAV
      table.integer('x1prpsta_0') // Statut Préparation
      table.string('x1wavprep_0', 30) // Vague de préparation
      table.string('x1pdpgen_0', 30) // Généré depuis le PDP
      table.date('upddattim_0') // Date heure
      table.string('roueccmaj_0', 30) // Version majeure
      table.string('roueccmin_0', 30) // Version mineure
      table.date('latenddat_0') // Dernière date fin
      table.string('xobj3_0', 30) // Objet partie 3
      table.date('earstrdat_0') // Première date début
      table.string('auuid_0', 30) // Identifiant unique
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

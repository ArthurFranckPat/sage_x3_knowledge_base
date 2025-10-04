import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bpartner'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('bidcry_0', 30) // Pays cpte bancaire
      table.string('cntnam_0', 60) // Nom contact par defaut
      table.string('cslbpr_0', 30) // Partenaire
      table.string('bpsflg_0', 30) // Fournisseur
      table.string('crn_0', 30) // Numéro SIRET
      table.string('bptflg_0', 30) // Transporteur
      table.string('naf_0', 30) // Code NAF
      table.string('eorinum_0', 20) // Numéro EORI
      table.string('regnum_0', 20) // Numéro immatriculation
      table.string('vatno_0', 30) // Numéro TVA
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('cpyrel_0', 30) // Société associée
      table.string('xfabflg_0', 30) // Fabricant
      table.string('bppflg_0', 30) // Secteur public
      table.string('auuid_0', 30) // Identifiant unique
      table.string('brgobj_0', 30) // Catég client/fourn
      table.string('acs_0', 30) // Code d'accès états
      table.string('eecnum_0', 20) // N° TVA intracommunautaire
      table.string('cfoexd_0', 30) // Hors prévisions trésorerie
      table.string('doctyp_0', 30) // Type document
      table.string('bprnam_0', 60) // Raison sociale
      table.string('pptflg_0', 30) // Prospect
      table.string('prvflg_0', 30) // Prestataire
      table.string('bprlog_0', 30) // Sigle
      table.string('vatnum_0', 20) // Partita IVA
      table.string('fiscod_0', 20) // Code fiscal
      table.string('bprnum_0', 20) // Tiers
      table.string('grugpy_0', 30) // Périmètre de conso
      table.string('pthflg_0', 30) // Récepteur
      table.string('bidnum_0', 20) // Données bancaires par défaut
      table.string('bprsho_0', 30) // Intitulé court
      table.string('repflg_0', 30) // Représentant
      table.string('brgcod_0', 20) // Catégorie
      table.string('fcy_0', 30) // Site
      table.date('credat_0') // Date création
      table.string('updusr_0', 30) // Opérateur modif
      table.date('upddat_0') // Date modification
      table.string('bprgtetyp_0', 30) // Type de pièce pour frais
      table.string('dooflg_0', 30) // Donneur d'ordre
      table.string('ccnflg_0', 30) // Concédant
      table.string('expnum_0', 20) // Numéro export
      table.string('lan_0', 30) // Langue
      table.string('creusr_0', 30) // Opérateur création
      table.string('bpcflg_0', 30) // Client
      table.string('fctflg_0', 30) // Factor
      table.string('cur_0', 30) // Devise
      table.string('cry_0', 30) // Pays
      table.string('grucod_0', 20) // Code consolidation
      table.string('legett_0', 30) // Personne physique
      table.string('bprfbdmag_0', 30) // Interdit mailing
      table.string('accnonrei_0', 30) // Compte non résident
      table.string('modpam_0', 30) // Règlement CFONB
      table.string('betfcy_0', 30) // Inter-site
      table.boolean('enaflg_0').defaultTo(false) // Actif en sélection
      table.string('bpracc_0', 30) // Tiers divers
      table.string('acccod_0', 20) // Code comptable
      table.string('bprflg_0', 30) // divers (utilisation futur)
      table.string('bpaadd_0', 30) // Adresse par défaut
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

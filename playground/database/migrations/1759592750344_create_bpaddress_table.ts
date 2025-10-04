import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bpaddress'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('crn_0', 30) // Numéro SIRET
      table.string('adrval_0', 30) // Validé
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('glncod_0', 20) // GLN
      table.string('fcyweb_0', 30) // Site Web
      table.string('xedicod_0', 20) // Gestion EDI
      table.string('xext2num_0', 20) // Boîte à lettre EDI
      table.string('x4valid_0', 30) // Adresse validée
      table.string('x4adrfab_0', 30) // Adresse fabricant
      table.string('x4adrexp_0', 30) // Adresse d'expédition fournisseur
      table.string('x4eecnum_0', 20) // Identification CEE expé fournisseur
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4ediqual_0', 30) // Qualifiant EDI
      table.string('fax_0', 30) // Fax
      table.string('bpaaddlig_0', 30) // Ligne adresse
      table.string('crynam_0', 60) // Nom pays
      table.string('web_0', 30) // Adresse internet
      table.string('mob_0', 30) // Portable
      table.string('sat_0', 30) // Etat
      table.string('poscod_0', 20) // Code postal
      table.string('codsee_0', 20) // Code INSEE
      table.string('updusr_0', 30) // Opérateur modif
      table.date('upddat_0') // Date modification
      table.string('bpades_0', 60) // Intitulé
      table.date('credat_0') // Date création
      table.string('extnum_0', 20) // Identifiant externe
      table.string('bpatyp_0', 30) // Type entité
      table.string('expnum_0', 20) // Numéro export
      table.string('bpaadd_0', 30) // Adresse
      table.string('creusr_0', 30) // Opérateur création
      table.string('bpanum_0', 20) // Entité
      table.string('bpaaddflg_0', 30) // Par défaut
      table.string('tel_0', 30) // Téléphone
      table.string('bpabid_0', 30) // Par défaut
      table.string('cty_0', 30) // Ville
      table.string('cry_0', 30) // Pays
      table.string('xsrvfac_0', 30) // Service à facturer
      table.string('ypohmel_0', 30) // Envoi Cdes par mail
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

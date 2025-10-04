import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'itmbps'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('zfabnum_0', 20) // Code du fabricant
      table.string('zitmreffab_0', 20) // Référence fabricant
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('xcryorig_0', 30) // Pays origine produit
      table.string('defbpsflg_0', 30) // Fournisseur réappro défaut
      table.string('stcnum_0', 20) // Structure de coûts
      table.string('loaeccflg_0', 30) // Préchargement version(s)
      table.decimal('cpramt_0', 15, 2) // Coût fixe unitaire
      table.string('mattol_0', 30) // Règle rapprochement
      table.string('creusr_0', 30) // Opérateur création
      table.string('qlymrk_0', 30) // Note qualité
      table.string('pcu_0', 30) // Unité conditionnement
      table.string('pio_0', 30) // Priorité
      table.string('bomalt_0', 30) // Alternative nomenclature
      table.string('scolti_0', 30) // Délai sous-traitance
      table.string('xftscod_0', 20) // Code fiche technique spéciale
      table.string('auuid_0', 30) // Identifiant unique
      table.string('xdmrpar_0', 30) // Paramétrage démérites
      table.string('xpntmonte_0', 30) // Point de destination
      table.string('x4multisou_0', 30) // Multi-sourcing
      table.string('quafry_0', 30) // Fréquence  contrôle qualité
      table.string('quanum_0', 20) // Numéro contrôle
      table.string('itmdesbps_0', 60) // Désignation article chez fourn
      table.string('eancodbps_0', 20) // Code EAN fournisseur
      table.string('puu_0', 30) // Unité achat
      table.string('defctmbpsflg_0', 30) // Fournisseur contremarque défaut
      table.string('qlycrd_0', 30) // Fiche qualité
      table.string('quaadxuid_0', 30) // Process fréquence
      table.string('quanumuid_0', 20) // Entrées process
      table.string('ctmbpsflg_0', 30) // Contremarque
      table.string('tex_0', 30) // Texte
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.string('zsigfab_0', 30) // Sigle Fabricant
      table.string('cfgvcrnum_0', 20) // N.pièce config.
      table.string('itmref_0', 20) // Article
      table.string('douflg_0', 30) // Blocage
      table.string('cprcoe_0', 30) // Coefficient frais approche
      table.string('itmrefbps_0', 20) // Article fournisseur
      table.string('updusr_0', 30) // Opérateur modification
      table.string('puustucoe_0', 30) // Coefficient UA-US
      table.string('pcupuucoe_0', 30) // Coefficient UC-UA
      table.decimal('purminqty_0', 15, 2) // Quantité minimum achat
      table.string('zbpsnum_0', 20) // Fournisseur
      table.string('bpsnum_0', 20) // Fournisseur
      table.string('eecincrat_0', 30) // Majoration statistique DEB
      table.string('quaflg_0', 30) // Soumis à contrôle
      table.string('expnum_0', 20) // Numéro export
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

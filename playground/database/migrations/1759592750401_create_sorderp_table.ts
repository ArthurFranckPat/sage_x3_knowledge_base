import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sorderp'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('discrgren7_0', 30) // Motif7 remise/frais
      table.string('discrgren8_0', 30) // Motif8 remise/frais
      table.string('discrgren9_0', 30) // Motif9 remise/frais
      table.string('reprat2_0', 30) // Taux commission 2
      table.string('discrgval6_0', 30) // Valeur6 remise/frais
      table.string('discrgval7_0', 30) // Valeur7 remise/frais
      table.string('discrgval8_0', 30) // Valeur8 remise/frais
      table.string('discrgval9_0', 30) // Valeur9 remise/frais
      table.string('discrgren1_0', 30) // Motif1 remise/frais
      table.string('sstcod_0', 20) // Code taxe SST
      table.string('invcnd_0', 30) // Condition de facturation
      table.string('auuid_0', 30) // Identifiant unique
      table.string('zcdeclifin_0', 30) // CDE client fin ALDES
      table.string('zn1clifin_0', 30) // Nom1 cli fin ALDES
      table.string('zn2clifin_0', 30) // Nom2 cli fin ALDES
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.decimal('bpcsalpri_0', 15, 2) // Prix consommateur
      table.string('bpcinv_0', 30) // Client facture
      table.decimal('clcamt1_0', 15, 2) // Base1 calcul taxe
      table.decimal('clcamt2_0', 15, 2) // Base2 calcul taxe
      table.string('linrevnum_0', 20) // No avenant
      table.string('repcoe_0', 30) // Coef pondération
      table.decimal('gropri_0', 15, 2) // Prix brut
      table.decimal('priren_0', 15, 2) // Motif prix
      table.string('vat_0', 30) // Taxe
      table.string('rep1_0', 30) // Représentant 1
      table.string('rep2_0', 30) // Représentant 2
      table.integer('soqsta_0') // Etat ligne
      table.date('credat_0') // Date création
      table.string('vacitm_0', 30) // Niveau taxe
      table.string('itmdes1_0', 60) // Désignation article
      table.string('xflaglm_0', 30) // Flag ligne masquée
      table.string('pcntnum_0', 20) // Numéro de contrat
      table.string('tsicod_0', 20) // Famille statistique
      table.string('sohnum_0', 20) // No commande
      table.string('reprat1_0', 30) // Taux commission 1
      table.string('saustucoe_0', 30) // Coefficient UV-US
      table.string('cpy_0', 30) // Société
      table.string('soplin_0', 30) // Ligne
      table.date('upddat_0') // Date modification
      table.string('updusr_0', 30) // Opérateur modif
      table.string('orilin_0', 30) // Ligne ori gratuit
      table.string('itmrefbpc_0', 20) // Article-Client
      table.string('creusr_0', 30) // Opérateur création
      table.string('stofcy_0', 30) // Site expédition
      table.string('itmref_0', 20) // Article
      table.string('pfm_0', 30) // Marge
      table.string('sopseq_0', 30) // Séquence
      table.date('strdat_0') // Date début validité
      table.date('enddat_0') // Date fin validité
      table.decimal('netpri_0', 15, 2) // Prix net
      table.string('salfcy_0', 30) // Site vente
      table.string('stu_0', 30) // Unité stock
      table.string('sohcat_0', 30) // Catégorie commande
      table.string('bpcord_0', 30) // Client commande
      table.string('sqdlin_0', 30) // Ligne devis
      table.string('expnum_0', 20) // Numéro export
      table.string('discrgren2_0', 30) // Motif2 remise/frais
      table.string('discrgren3_0', 30) // Motif3 remise/frais
      table.string('discrgren4_0', 30) // Motif4 remise/frais
      table.string('discrgren5_0', 30) // Motif5 remise/frais
      table.string('discrgren6_0', 30) // Motif6 Remise/frais
      table.string('discrgval1_0', 30) // Valeur1 remise/frais
      table.string('discrgval2_0', 30) // Valeur2 remise/frais
      table.string('discrgval3_0', 30) // Valeur3 remise/frais
      table.string('discrgval4_0', 30) // Valeur4 remise/frais
      table.string('discrgval5_0', 30) // Valeur5 remise/frais
      table.decimal('cprpri_0', 15, 2) // Prix revient
      table.string('bpaadd_0', 30) // Adresse livraison
      table.string('connum_0', 20) // N° contrat service
      table.string('xtypof_0', 30) // Type OF
      table.decimal('netprinot_0', 15, 2) // Prix net HT
      table.decimal('netpriati_0', 15, 2) // Prix net TTC
      table.string('zligoriedi_0', 30) // Ligne d'origine
      table.string('itmdes_0', 60) // Désignation article traduite
      table.string('x4savliv_0', 30) // Livré
      table.string('cndnam_0', 60) // Contact livraison
      table.string('lintyp_0', 30) // Type ligne
      table.string('focflg_0', 30) // Gratuit
      table.string('sqhnum_0', 20) // No devis
      table.string('sau_0', 30) // Unité vente
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

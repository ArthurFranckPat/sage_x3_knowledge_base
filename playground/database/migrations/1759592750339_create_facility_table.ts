import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'facility'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('fcy_0', 30) // Site
      table.string('payban_0', 30) // Banque règlement
      table.string('dadflg_0', 30) // DAS2
      table.string('ivyflg_0', 30) // Inventaire
      table.string('hrmpayban_0', 30) // Banque
      table.string('prf_0', 30) // Profil
      table.string('cntnam_0', 60) // Nom contact
      table.string('dadfcy_0', 30) // Site DAS2
      table.string('hrmdadfcy_0', 30) // Site DADS
      table.string('strhou_0', 30) // Début
      table.string('endhou_0', 30) // Fin
      table.string('srv_0', 30) // Service
      table.string('xtypsit_0', 30) // Type site
      table.string('rskwrk_0', 30) // Risque
      table.string('fcysho_0', 30) // Libellé abrégé
      table.string('insctyflg_0', 30) // Flag intérieur ville
      table.string('ivyfcy_0', 30) // Site d'inventaire
      table.string('acccod_0', 20) // Code comptable
      table.string('cce_0', 30) // Section analytique
      table.string('uvyday_0', 30) // Indis (LMMJVSD)
      table.string('uvycod_0', 20) // Code Indisponibilité
      table.string('fcynam_0', 60) // Nom
      table.string('bpadcl_0', 30) // Adresse déclarant
      table.string('die_0', 30) // Code axe
      table.string('cry_0', 30) // Pays
      table.string('wrhflg_0', 30) // Dépôt
      table.string('bptnum_0', 20) // Numéro transporteur
      table.string('creusr_0', 30) // Opérateur création
      table.string('legcpy_0', 30) // Société juridique
      table.string('mfgflg_0', 30) // Production
      table.string('salflg_0', 30) // Vente
      table.string('purflg_0', 30) // Achat
      table.string('finflg_0', 30) // Finance
      table.string('chef_0', 30) // Responsables
      table.string('naf_0', 30) // Code NAF
      table.string('bidnum_0', 20) // N° compte bancaire
      table.string('finrspfcy_0', 30) // Site Responsable financier
      table.string('updusr_0', 30) // Opérateur modification
      table.string('bpaadd_0', 30) // Adresse par défaut
      table.date('credat_0') // Date création
      table.date('upddat_0') // Date modification
      table.string('secprh_0', 30) // Section dérogatoire
      table.string('hrmtaxwag_0', 30) // Taxe/salaires
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('oricerflg_0', 30) // Auto certification d'origine
      table.string('x1wmsflg_0', 30) // WMS
      table.string('eorinum_0', 20) // Numéro EORI
      table.string('x4envaut_0', 30) // 
      table.string('crn_0', 30) // Numéro de SIRET
      table.string('rexnum_0', 20) // Numéro REX
      table.string('trawrh_0', 30) // Dépôt entrée interne
      table.string('rtnwrh_0', 30) // Dépôt retour liv
      table.string('mfrwrh_0', 30) // Dépôt réintégration
      table.string('trfwrh_0', 30) // Dépôt sortie interne
      table.string('cllcvt_0', 30) // Convention Collective
      table.string('auuid_0', 30) // Identifiant unique
      table.string('hrmdadflg_0', 30) // DADS
      table.string('bpasge_0', 30) // Adresse siège
      table.string('cntdds_0', 30) // Contact TDS
      table.string('codcra_0', 20) // Code CRAM
      table.string('payflg_0', 30) // Paye
      table.string('wrhges_0', 30) // Gestion dépôt
      table.string('rcpwrh_0', 30) // Dépôt réception
      table.string('mfpwrh_0', 30) // Dépôt entrée OF
      table.string('shiwrh_0', 30) // Dépôt expédition
      table.string('mfgwrh_0', 30) // Dépôt conso
      table.string('scowrh_0', 30) // Dépôt expé sous-trt
      table.string('sccwrh_0', 30) // Dépôt conso sous-trt
      table.string('spaopeigic_0', 30) // Opérations IGIC
      table.boolean('flgpec_0').defaultTo(false) // Effort construction
      table.boolean('flgapp_0').defaultTo(false) // Taxe apprentissage
      table.boolean('flgfor_0').defaultTo(false) // Formation prof. continue
      table.string('regprh_0', 30) // Régime prud'homal
      table.string('leg_0', 30) // Législation
      table.string('geocod_0', 20) // Géo code
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sorderq'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.date('xdlvdatfin_0') // Date fin réception
      table.datetime('xdlvtimdeb_0') // Heure début récepti
      table.string('xpntdecha_0', 30) // Point déchargement
      table.string('xpntmonte_0', 30) // Point de destination
      table.date('xshidatdeb_0') // Date déb enlèvement
      table.date('xshidatfin_0') // Date fin enlèvement
      table.datetime('xshitimdeb_0') // Heure début enlèv
      table.datetime('xshitimfin_0') // Heure fin enlev
      table.string('xsvcemet_0', 30) // Service émetteur
      table.string('auuid_0', 30) // Identifiant unique
      table.string('x4hdemdlvd_0', 30) // Arrêt temps hors production
      table.decimal('odlqty_0', 15, 2) // Quantité en traitement
      table.decimal('odlqtystu_0', 15, 2) // Quantité en traitement US
      table.string('xniveng_0', 30) // Niveau d'engagement
      table.string('xnbetiimpp_0', 30) // Nb étiq. imp. Prod
      table.string('soqpsonum_0', 20) // Numéro doc affaire
      table.decimal('lprqtystu_0', 15, 2) // Quantité sur liste préparation US
      table.string('xligori_0', 30) // N° ligne d'origine
      table.string('fmi_0', 30) // Origine article
      table.decimal('lprqty_0', 15, 2) // Quantité sur liste de préparation
      table.string('prgbilnum_0', 20) // Numéro plan facturation
      table.string('x4avmotd_0', 30) // 
      table.string('xssligori_0', 30) // N° sous-ligne origine
      table.string('x4rgopl_0', 30) // Options de transport
      table.string('x4exclrfad_0', 30) // Exclusion RFA
      table.string('xdestfin_0', 60) // Destination Finale
      table.string('xdesint_0', 60) // Id ext. destination
      table.string('xligmerori_0', 30) // N° ligne mère origine
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.date('maxdlvdat_0') // Date max livraison
      table.date('uselimdat_0') // Date limite consom.
      table.date('x4hshidat_0') // Pointage départ
      table.string('demdlvref_0', 20) // Réf dem livraison
      table.string('rattaxlin_0', 30) // Taux de taxe
      table.decimal('oriqty_0', 15, 2) // Qté cde initiale
      table.string('precod_0', 20) // Code préparation
      table.string('soqseq_0', 30) // Numéro séquence
      table.string('poqseq_0', 30) // Numéro séquence
      table.string('updusr_0', 30) // Opérateur modification
      table.decimal('invqtystu_0', 15, 2) // Quantité facturée US
      table.decimal('qtystu_0', 15, 2) // Quantité commandée US
      table.string('sohcat_0', 30) // Catégorie commande
      table.string('bpcord_0', 30) // Client commande
      table.date('demdlvdat_0') // Date livraison acceptée
      table.string('expnum_0', 20) // Numéro Export
      table.string('alltyp_0', 30) // Type allocation
      table.string('mdl_0', 30) // Mode livraison
      table.string('drn_0', 30) // No tournée
      table.string('dlvpio_0', 30) // Priorité livraison
      table.string('daylti_0', 30) // Délai liv en jours
      table.string('bpaadd_0', 30) // Adresse livraison
      table.string('ndeprnbom_0', 30) // Composant imp BL
      table.string('invprnbom_0', 30) // Composant imp Fac
      table.decimal('invqty_0', 15, 2) // Quantité facturée
      table.string('impnumlig_0', 20) // Ligne import
      table.string('geocod_0', 20) // Géo code
      table.string('insctyflg_0', 30) // Flag intérieur ville
      table.decimal('x4qtyini_0', 15, 2) // Quantité initiale
      table.decimal('tdlqtystu_0', 15, 2) // Quantité à livrer US
      table.integer('bastaxlin_0') // Montant taxable
      table.string('ocnprnbom_0', 30) // Composant imp ARC
      table.string('xtext0_0', 30) // Zone/date/heure dist
      table.string('xkanban_0', 30) // N° Etiquette KANBAN
      table.string('xqteret_0', 30) // Qté retard
      table.decimal('oprqty_0', 15, 2) // Quantité en préparation
      table.decimal('preqty_0', 15, 2) // Quantité préparée
      table.decimal('oprqtystu_0', 15, 2) // Quantité en préparation US
      table.decimal('preqtystu_0', 15, 2) // Quantité préparée US
      table.date('xdlvdatdeb_0') // Date de besoin
      table.string('xnbetiimp_0', 30) // Nb étiq. imp. Bouc
      table.string('xpcusauc01_0', 30) // Capacité UC
      table.string('xpldeliv_0', 30) // Bâtiment
      table.string('dsplinwei_0', 30) // Poids ligne
      table.string('dsplinvol_0', 30) // Volume ligne
      table.decimal('invamt_0', 15, 2) // Montant facturé
      table.string('dlvpiocmp_0', 30) // Complément priorité livraison
      table.string('lot_0', 30) // Filtre lot (exclusif)
      table.integer('sta_0') // Filtre statuts (exclusif)
      table.string('xregroup_0', 30) // Critère regroupement
      table.string('loc_0', 30) // Filtre emplacement
      table.string('mon_0', 30) // Mois
      table.string('sddlin_0', 30) // Ligne livraison
      table.string('pckcap_0', 30) // Capacité emballage
      table.string('yea_0', 30) // Année
      table.string('pjt_0', 30) // Affaire
      table.string('x4facture_0', 30) // Facturé
      table.string('pck_0', 30) // Emballage
      table.string('x4avmotcomd_0', 30) // Trans. entrée divers
      table.string('maxdlvhou_0', 30) // Heure max livraison
      table.string('eccvalmaj_0', 30) // Version majeure
      table.string('eccvalmin_0', 30) // Version mineure
      table.date('xdatmes_0') // Date message EDI
      table.string('xnummes_0', 20) // Numéro message EDI
      table.string('xpcu1itm_0', 30) // Code UC
      table.datetime('xtimmes_0') // Heure mess EDI
      table.string('xalert_0', 30) // Flg alert variation
      table.string('fminum_0', 20) // No contremarque
      table.string('fmilin_0', 30) // Ligne contremarque
      table.string('fmiseq_0', 30) // No seq contremarque
      table.date('orddat_0') // Date commande
      table.string('linordnum_0', 20) // Ligne origine
      table.string('demdlvhou_0', 30) // Heure liv demandée
      table.integer('soqsta_0') // Etat ligne
      table.string('ddtanum_0', 20) // Elt fact lig répart
      table.string('ddtanot_0', 30) // Elt fact lig répart
      table.string('dlvday_0', 30) // Jour
      table.string('cad_0', 30) // Cadencement
      table.string('wee_0', 30) // No semaine
      table.string('ynbcolis_0', 30) // Nombre de colis
      table.integer('demsta_0') // Statut ordre
      table.decimal('shtqty_0', 15, 2) // Quantité en rupture
      table.decimal('shtqtystu_0', 15, 2) // Quantité en rupture US
      table.string('invflg_0', 30) // Facturée
      table.date('credat_0') // Date création
      table.string('pitflg_0', 30) // Gestion des points
      table.string('cclren_0', 30) // Motif solde
      table.date('ccldat_0') // Date solde
      table.string('xflgret_0', 30) // Delai
      table.string('dlvflg_0', 30) // Livrable
      table.string('xcmqint_0', 30) // Contremarque interne
      table.string('poplin_0', 30) // Ligne commande
      table.datetime('xdlvtimfin_0') // Heure fin réception
      table.string('vts_0', 30) // Ss-type trans.Vertex
      table.string('vtc_0', 30) // Code transac. Vertex
      table.string('taxgeoflg_0', 30) // Flag Geo taxed
      table.string('taxflg_0', 30) // Flag taxable
      table.string('taxregflg_0', 30) // Flag taxe enregistré
      table.string('soqtex_0', 30) // Texte ligne commande
      table.string('sdhnum_0', 20) // No livraison
      table.string('sohnum_0', 20) // No commande
      table.string('pohnum_0', 20) // No commande
      table.date('shidat_0') // Date expédition
      table.string('dsplinflg_0', 30) // Répartition
      table.decimal('dlvqtystu_0', 15, 2) // Quantité livrée US
      table.date('perstrdat_0') // Date début période
      table.date('perenddat_0') // Date fin période
      table.string('pernbrday_0', 30) // Nombre jours période
      table.string('useplc_0', 30) // Lieu consommation
      table.decimal('qty_0', 15, 2) // Quantité comandée
      table.decimal('allqty_0', 15, 2) // Quantité allouée
      table.string('cpy_0', 30) // Société
      table.string('soplin_0', 30) // Ligne
      table.string('soqseqnum_0', 20) // Ligne
      table.string('shihou_0', 30) // Heure expédition
      table.date('extdlvdat_0') // Date livraison prévue
      table.date('upddat_0') // Date modification
      table.string('bptnum_0', 20) // Transporteur
      table.string('demnum_0', 20) // No ordre
      table.decimal('allqtystu_0', 15, 2) // Quantité allouée US
      table.string('creusr_0', 30) // Opérateur création
      table.string('xversion_0', 30) // Version
      table.integer('z01statut_0') // Statut
      table.string('stofcy_0', 30) // Site expédition
      table.string('stomgtcod_0', 20) // Gestion stock
      table.string('itmref_0', 20) // Article
      table.string('dspvou_0', 30) // Unité Volume
      table.string('dspweu_0', 30) // Unité poids
      table.string('salfcy_0', 30) // Site vente
      table.decimal('tdlqty_0', 15, 2) // Quantité à livrer
      table.decimal('dlvqty_0', 15, 2) // Quantité livrée
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

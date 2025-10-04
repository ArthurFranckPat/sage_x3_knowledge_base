import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pinvoice'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('bpr_0', 30) // Tiers
      table.string('oridocnum_0', 20) // No document origine
      table.string('eectrn_0', 30) // Mode transp. DEB
      table.string('sat_0', 30) // Etat
      table.string('ritinv_0', 30) // Proforma
      table.date('accdat_0') // Date comptable
      table.string('eecnat_0', 30) // Nature transaction
      table.string('eecict_0', 30) // Incoterm
      table.string('orimod_0', 30) // Module origine
      table.date('bprdat_0') // Date origine
      table.string('accnum_0', 20) // Numéro interne
      table.string('pivtyp_0', 30) // Type facture
      table.string('purtyp_0', 30) // Type achat
      table.string('invtyp_0', 30) // Catégorie facture
      table.string('ritnbr_0', 30) // Nb de retenues
      table.string('ritcod_0', 20) // Code retenue
      table.string('ritbas_0', 30) // Bases
      table.decimal('ritamtded_0', 15, 2) // Montant déduit
      table.date('strdatsvc_0') // Date début prestation
      table.date('enddatsvc_0') // Date fin prestation
      table.date('lasdatsvc_0') // Date dernière compta prestation
      table.string('bpapay_0', 30) // Adresse tiers payé
      table.string('bprnam_0', 60) // Raison sociale
      table.string('deptyp_0', 30) // Prix HT/TTC
      table.string('des_0', 60) // Commentaires
      table.string('ritpay_0', 30) // Règlement
      table.string('invref_0', 20) // Référence interne
      table.string('bpaaddlig_0', 30) // Ligne adresse
      table.string('crynam_0', 60) // Nom pays
      table.string('eecnum_0', 20) // Identification UE
      table.string('eecnumdeb_0', 20) // DEB
      table.string('paz_0', 30) // Bon à payer
      table.decimal('amtnot_0', 15, 2) // Montant HT
      table.decimal('amtati_0', 15, 2) // Montant TTC
      table.string('cce_0', 30) // Section
      table.string('creusr_0', 30) // Auteur création
      table.string('fcy_0', 30) // Site
      table.string('per_0', 30) // Période
      table.string('cpy_0', 30) // Société
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.string('tax_0', 30) // Taxes
      table.string('sns_0', 30) // Sens
      table.string('pte_0', 30) // Condition paiement
      table.string('cur_0', 30) // Devise
      table.string('bvrbid_0', 30) // Numéro compte bancaire
      table.string('num_0', 20) // Numéro de pièce
      table.string('gte_0', 30) // Type de pièce
      table.string('bprsac_0', 30) // Collectif
      table.decimal('ritamt_0', 15, 2) // Montant
      table.string('jou_0', 30) // Journal
      table.string('cty_0', 30) // Ville
      table.string('cry_0', 30) // Pays
      table.string('vac_0', 30) // Régime TVA
      table.string('bprpay_0', 30) // Tiers Payeur
      table.string('invnum_0', 20) // Numéro facture
      table.string('nbrtax_0', 30) // Nombre taxes
      table.decimal('amttax_0', 15, 2) // Montant taxe
      table.integer('bastax_0') // Base taxe
      table.string('poscod_0', 20) // Code postal
      table.string('updusr_0', 30) // Auteur modification
      table.string('dedtax_0', 30) // Taxe déductible
      table.string('ceeflg_0', 30) // Facture UE
      table.string('cai_0', 30) // Numéro CAI
      table.date('datvlycai_0') // Date validité CAI
      table.string('typvcr_0', 30) // Type document facture origine
      table.string('clsvcr_0', 30) // Classe facture origine
      table.string('scuvcr_0', 30) // Succursale facture origine
      table.string('seqvcr_0', 30) // N° Séquence facture origine
      table.string('ictcty_0', 30) // Ville Incoterm
      table.string('ffwadd_0', 30) // Adresse transitaire
      table.string('dep_0', 30) // Code escompte agios
      table.string('eecloc_0', 30) // Lieu transport DEB
      table.string('ffwnum_0', 20) // Numéro transitaire
      table.string('expnum_0', 20) // Numéro Export
      table.string('bpainv_0', 30) // Adresse
      table.string('pihtyp_0', 30) // Catégorie facture achat
      table.string('eecsch_0', 30) // Régime DEB
      table.date('ratdat_0') // Date cours
      table.string('fiy_0', 30) // Exercice
      table.string('bprvcr_0', 30) // Document origine
      table.date('strduddat_0') // Date échéance
      table.integer('sta_0') // Etat
      table.string('curtyp_0', 30) // Type de cours
      table.string('xncflg_0', 30) // flag non conformité
      table.string('bpycry_0', 30) // Pays tiers payé
      table.string('bpycrynam_0', 60) // Nom pays tiers payé
      table.string('nbrcpy_0', 30) // Nombre de sociétés
      table.string('led_0', 30) // Référentiel
      table.string('ublusr_0', 30) // Déblocage utilisateur
      table.date('ubldat_0') // Déblocage date
      table.decimal('ublamt_0', 15, 2) // Déblocage montant
      table.integer('twmsta_0') // Statut rappro.
      table.string('xmotlit_0', 30) // Motif litige
      table.string('frm1099_0', 30) // Formulaire 1099
      table.string('auuid_0', 30) // Identifiant unique
      table.string('deprat_0', 30) // Taux escompte
      table.string('xrespli_0', 30) // Resp litige
      table.string('belvcs_0', 30) // Numéro VCS
      table.date('rcrdat_0') // Date abonnement
      table.string('rcrnum_0', 20) // Numéro abonnement
      table.decimal('purprityp_0', 15, 2) // Type de montant fournisseur
      table.string('spadernum_0', 20) // Code DER
      table.string('fld40ren_0', 30) // Champ 40 - motif
      table.string('fld41ren_0', 30) // Champ 41 - motif
      table.string('cshvat_0', 30) // Régime TVA sur encaissements
      table.string('ratdiv_0', 30) // Cours diviseur
      table.string('ratmlt_0', 30) // Cours multiplicateur
      table.string('sinum_0', 20) // No pièce Intégrale
      table.string('die_0', 30) // Code axe
      table.string('curled_0', 30) // Devise référentiel
      table.string('pjth_0', 30) // Affaire
      table.date('vatdat_0') // Date taxe sur avoir
      table.decimal('amtnotl_0', 15, 2) // Montant HT (société)
      table.decimal('amtatil_0', 15, 2) // Montant TTC (société)
      table.string('ritbasded_0', 30) // Base déduite
      table.string('x4payyooz_0', 30) // Statut feedback pay
      table.integer('x4stayooz_0') // Statut feedback
      table.string('x4debpaz_0', 30) // Débloquer BAP
      table.string('x4lnkyooz_0', 30) // Lien URL
      table.integer('x4paysta_0') // Statut paiement
      table.date('credattim_0') // Date heure
      table.date('upddattim_0') // Date heure
      table.string('basdep_0', 30) // Base calcul Esc/Agios
      table.string('porimpliqnum_0', 20) // N° rgmnt taxe import
      table.date('spacusdat_0') // Date douane
      table.string('spacus_0', 30) // Douane
      table.string('spacusbpr_0', 30) // Tiers douane
      table.string('box1099_0', 30) // Case 1099
      table.string('das2_0', 30) // Déclaration honoraires
      table.decimal('amtsubj1099_0', 15, 2) // Mt soumis à 1099
      table.string('bvrrefline_0', 20) // Ligne référence BVR
      table.string('bpynam_0', 60) // Raison sociale tiers payé
      table.string('bpyaddlig_0', 30) // Ligne adresse tiers payé
      table.string('bpyposcod_0', 20) // Code postal tiers payé
      table.string('bpycty_0', 30) // Ville tiers payé
      table.string('bpysat_0', 30) // Etat tiers payé
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

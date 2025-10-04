import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sinvoice'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      // Champs Sage X3
      table.string('bpapay_0', 30) // Adresse tiers
      table.string('dep_0', 30) // Code escompte agios
      table.string('expnum_0', 20) // Numéro Export
      table.string('bpainv_0', 30) // Adresse
      table.string('adrval_0', 30) // Adresse
      table.string('perfin_0', 30) // à
      table.string('fiy_0', 30) // Exercice
      table.string('bprvcr_0', 30) // Document origine
      table.date('strduddat_0') // Date échéance
      table.date('xduddat_0') // Date échéance
      table.integer('sta_0') // Etat
      table.string('curtyp_0', 30) // Type de cours
      table.string('xncflg_0', 30) // flag non conformité
      table.string('qtcaccnum_0', 20) // No ecr cpt quittance
      table.string('auuid_0', 30) // Identifiant unique
      table.string('deprat_0', 30) // Taux escompte
      table.string('belvcs_0', 30) // Numéro VCS
      table.date('rcrdat_0') // Date abonnement
      table.string('rcrnum_0', 20) // Numéro abonnement
      table.string('umrnum_0', 20) // Référence mandat
      table.string('spadernum_0', 20) // Code DER
      table.string('bvrrefnum_0', 20) // Numéro référence BVR/QR
      table.string('fld40ren_0', 30) // Champ 40 - motif
      table.string('fld41ren_0', 30) // Champ 41 - motif
      table.string('cshvat_0', 30) // Régime TVA sur encaissements
      table.string('x4sbi_0', 30) // Self Billing
      table.string('curled_0', 30) // Devise référentiel
      table.string('ratdiv_0', 30) // Cours diviseur
      table.string('ratmlt_0', 30) // Cours multiplicateur
      table.string('sinum_0', 20) // No pièce Intégrale
      table.string('die_0', 30) // Code axe
      table.decimal('exeamttax_0', 15, 2) // Montant exonération
      table.string('metcor_0', 30) // Mode de redressement
      table.string('pjth_0', 30) // Affaire
      table.date('vatdat_0') // Date taxe sur avoir
      table.decimal('amtnotl_0', 15, 2) // Montant HT (société)
      table.decimal('amtatil_0', 15, 2) // Montant TTC (société)
      table.string('xpam_0', 30) // Mode règlement
      table.date('ratdat_0') // Date cours
      table.string('x4sihenvaut_0', 30) // 
      table.string('invtypspa_0', 30) // Type facture espagnole
      table.date('upddattim_0') // Date heure
      table.date('credattim_0') // Date heure
      table.string('dcleecnum_0', 20) // N° déclaration TVA
      table.string('sstentcod_0', 20) // Code exonération NA
      table.integer('revcansta_0') // Statut d'annulation
      table.string('basdep_0', 30) // Base calcul Esc/Agios
      table.string('porexpdcl_0', 30) // Déclaration export
      table.string('bpynam_0', 60) // Raison sociale tiers payé
      table.string('bpyaddlig_0', 30) // Ligne adresse tiers payé
      table.string('bpyposcod_0', 20) // Code postal tiers payé
      table.string('bpycty_0', 30) // Ville tiers payé
      table.string('bpysat_0', 30) // Etat tiers payé
      table.string('bpycry_0', 30) // Pays tiers payé
      table.string('bpycrynam_0', 60) // Nom pays tiers payé
      table.string('nbrcpy_0', 30) // Nombre de sociétés
      table.string('led_0', 30) // Référentiel
      table.date('xdatmes_0') // Date message EDI
      table.string('xnummes_0', 20) // Numéro message EDI
      table.datetime('xtimmes_0') // Heure mess EDI
      table.string('isextdoc_0', 30) // Document externe
      table.decimal('amtati_0', 15, 2) // Montant TTC
      table.decimal('xamtati_0', 15, 2) // Montant TTC
      table.string('bpr_0', 30) // Tiers
      table.string('sat_0', 30) // Etat
      table.string('orimod_0', 30) // Module origine
      table.date('bprdat_0') // Date origine
      table.string('accnum_0', 20) // Numéro interne
      table.string('oridocnum_0', 20) // No document origine
      table.string('sivtyp_0', 30) // Type facture
      table.date('accdat_0') // Date comptable
      table.string('fctvcr_0', 30) // Quittance
      table.string('dirinvflg_0', 30) // Facture directe
      table.string('invtyp_0', 30) // Catégorie facture
      table.string('x4sihexp_0', 30) // Expéditeur
      table.decimal('theamttax_0', 15, 2) // Montant taxe théorique
      table.string('trsfam_0', 30) // Famille mouvement
      table.date('strdatsvc_0') // Date début prestation
      table.date('enddatsvc_0') // Date fin prestation
      table.date('lasdatsvc_0') // Date dernière compta prestation
      table.string('des_0', 60) // Commentaires
      table.string('perdeb_0', 30) // Période du
      table.integer('starpt_0') // Impression
      table.string('bilvcr_0', 30) // No de traite
      table.string('bprnam_0', 60) // Raison sociale
      table.string('bpaaddlig_0', 30) // Ligne adresse
      table.string('crynam_0', 60) // Nom pays
      table.string('eecnumdeb_0', 20) // DEB
      table.decimal('amtnot_0', 15, 2) // Montant HT
      table.decimal('xamtnot_0', 15, 2) // Montant HT
      table.integer('bastax_0') // Base taxe
      table.string('poscod_0', 20) // Code postal
      table.string('vac_0', 30) // Régime TVA
      table.string('bprpay_0', 30) // Tiers Payeur
      table.string('creusr_0', 30) // Auteur création
      table.string('updusr_0', 30) // Auteur modification
      table.string('cce_0', 30) // Section
      table.string('payban_0', 30) // Banque règlement
      table.string('cpy_0', 30) // Société
      table.string('fcy_0', 30) // Site
      table.string('per_0', 30) // Période
      table.date('upddat_0') // Date modification
      table.date('credat_0') // Date création
      table.string('crn_0', 30) // Numéro SIRET
      table.string('tax_0', 30) // Taxes
      table.string('sns_0', 30) // Sens
      table.string('x4sihdest_0', 60) // Destinataire
      table.string('bprfct_0', 30) // Factor
      table.string('pte_0', 30) // Condition paiement
      table.string('cur_0', 30) // Devise
      table.string('num_0', 20) // Numéro de pièce
      table.string('gte_0', 30) // Type de pièce
      table.string('bprsac_0', 30) // Collectif
      table.string('jou_0', 30) // Journal
      table.string('wrhe_0', 30) // Dépôt
      table.string('cty_0', 30) // Ville
      table.string('cry_0', 30) // Pays
      table.string('invnum_0', 20) // Numéro facture
      table.string('nbrtax_0', 30) // Nombre taxes
      table.decimal('amttax_0', 15, 2) // Montant taxe
      table.decimal('amttaxusa_0', 15, 2) // Montant taxe
      table.string('fctvcrflg_0', 30) // Quittance validée
      table.string('cai_0', 30) // Numéro CAI
      table.date('datvlycai_0') // Date validité CAI
      table.decimal('salprityp_0', 15, 2) // Type montant
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

# 📦 Module ACHATS - Documentation Complète

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📊 Statistiques

- **Tables documentées** : 15
- **Champs totaux** : 1,422
- **Source** : Données réelles de votre ERP Sage X3

---

## 📑 Tables du module

- [PINVOICE](#pinvoice) - Factures d'achat (137 champs)
- [PINVOICED](#pinvoiced) - Factures d'achat détail (170 champs)
- [PINVOICEV](#pinvoicev) - Factures d'achat valorisation (39 champs)
- [PORDER](#porder) - Commandes d'achat (131 champs)
- [PORDERC](#porderc) - Commandes d'achat cumul av-ret (69 champs)
- [PORDERP](#porderp) - Commandes d'achat Prix (55 champs)
- [PORDERQ](#porderq) - Commandes d'achat quantités (181 champs)
- [PRECEIPT](#preceipt) - Réception (106 champs)
- [PRECEIPTD](#preceiptd) - Réceptions Détail (167 champs)
- [PREQUIS](#prequis) - Demandes d'achat (31 champs)
- [PREQUISA](#prequisa) - Demandes d'achat Lien (13 champs)
- [PREQUISD](#prequisd) - Demandes d'achat Détail (104 champs)
- [PREQUISO](#prequiso) - Demandes d'achat Lien (14 champs)
- [PRETURN](#preturn) - Retours (82 champs)
- [PRETURND](#preturnd) - Retours Détail (123 champs)

---

## PINVOICE

**Factures d'achat**

**Nombre de champs** : 137

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BPR_0` | Tiers |  |  |  |  |
| `ORIDOCNUM_0` | No document origine |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `SAT_0` | Etat |  |  |  |  |
| `RITINV_0` | Proforma |  |  |  |  |
| `ACCDAT_0` | Date comptable |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `ORIMOD_0` | Module origine |  |  |  |  |
| `BPRDAT_0` | Date origine |  |  |  |  |
| `ACCNUM_0` | Numéro interne |  |  |  |  |
| `PIVTYP_0` | Type facture |  |  |  |  |
| `PURTYP_0` | Type achat |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `RITNBR_0` | Nb de retenues |  |  |  |  |
| `RITCOD_0` | Code retenue |  |  |  |  |
| `RITBAS_0` | Bases |  |  |  |  |
| `RITAMTDED_0` | Montant déduit |  |  |  |  |
| `STRDATSVC_0` | Date début prestation |  |  |  |  |
| `ENDDATSVC_0` | Date fin prestation |  |  |  |  |
| `LASDATSVC_0` | Date dernière compta prestation |  |  |  |  |
| `BPAPAY_0` | Adresse tiers payé |  |  |  |  |
| `BPRNAM_0` | Raison sociale |  |  |  |  |
| `DEPTYP_0` | Prix HT/TTC |  |  |  |  |
| `DES_0` | Commentaires |  |  |  |  |
| `RITPAY_0` | Règlement |  |  |  |  |
| `INVREF_0` | Référence interne |  |  |  |  |
| `BPAADDLIG_0` | Ligne adresse |  |  |  |  |
| `CRYNAM_0` | Nom pays |  |  |  |  |
| `EECNUM_0` | Identification UE |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `PAZ_0` | Bon à payer |  |  |  |  |
| `AMTNOT_0` | Montant HT |  |  |  |  |
| `AMTATI_0` | Montant TTC |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `CREUSR_0` | Auteur création |  |  |  |  |
| `FCY_0` | Site |  |  |  |  |
| `PER_0` | Période |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `TAX_0` | Taxes |  |  |  |  |
| `SNS_0` | Sens |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `BVRBID_0` | Numéro compte bancaire |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `GTE_0` | Type de pièce |  |  |  |  |
| `BPRSAC_0` | Collectif |  |  |  |  |
| `RITAMT_0` | Montant |  |  |  |  |
| `JOU_0` | Journal |  |  |  |  |
| `CTY_0` | Ville |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `VAC_0` | Régime TVA |  |  |  |  |
| `BPRPAY_0` | Tiers Payeur |  |  |  |  |
| `INVNUM_0` | Numéro facture |  |  |  |  |
| `NBRTAX_0` | Nombre taxes |  |  |  |  |
| `AMTTAX_0` | Montant taxe |  |  |  |  |
| `BASTAX_0` | Base taxe |  |  |  |  |
| `POSCOD_0` | Code postal |  |  |  |  |
| `UPDUSR_0` | Auteur modification |  |  |  |  |
| `DEDTAX_0` | Taxe déductible |  |  |  |  |
| `CEEFLG_0` | Facture UE |  |  |  |  |
| `CAI_0` | Numéro CAI |  |  |  |  |
| `DATVLYCAI_0` | Date validité CAI |  |  |  |  |
| `TYPVCR_0` | Type document facture origine |  |  |  |  |
| `CLSVCR_0` | Classe facture origine |  |  |  |  |
| `SCUVCR_0` | Succursale facture origine |  |  |  |  |
| `SEQVCR_0` | N° Séquence facture origine |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `DEP_0` | Code escompte agios |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `BPAINV_0` | Adresse |  |  |  |  |
| `PIHTYP_0` | Catégorie facture achat |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `RATDAT_0` | Date cours |  |  |  |  |
| `FIY_0` | Exercice |  |  |  |  |
| `BPRVCR_0` | Document origine |  |  |  |  |
| `STRDUDDAT_0` | Date échéance |  |  |  |  |
| `STA_0` | Etat |  |  |  |  |
| `CURTYP_0` | Type de cours |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `BPYCRY_0` | Pays tiers payé |  |  |  |  |
| `BPYCRYNAM_0` | Nom pays tiers payé |  |  |  |  |
| `NBRCPY_0` | Nombre de sociétés |  |  |  |  |
| `LED_0` | Référentiel |  |  |  |  |
| `UBLUSR_0` | Déblocage utilisateur |  |  |  |  |
| `UBLDAT_0` | Déblocage date |  |  |  |  |
| `UBLAMT_0` | Déblocage montant |  |  |  |  |
| `TWMSTA_0` | Statut rappro. |  |  |  |  |
| `XMOTLIT_0` | Motif litige |  |  |  |  |
| `FRM1099_0` | Formulaire 1099 |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DEPRAT_0` | Taux escompte |  |  |  |  |
| `XRESPLI_0` | Resp litige |  |  |  |  |
| `BELVCS_0` | Numéro VCS |  |  |  |  |
| `RCRDAT_0` | Date abonnement |  |  |  |  |
| `RCRNUM_0` | Numéro abonnement |  |  |  |  |
| `PURPRITYP_0` | Type de montant fournisseur |  |  |  |  |
| `SPADERNUM_0` | Code DER |  |  |  |  |
| `FLD40REN_0` | Champ 40 - motif |  |  |  |  |
| `FLD41REN_0` | Champ 41 - motif |  |  |  |  |
| `CSHVAT_0` | Régime TVA sur encaissements |  |  |  |  |
| `RATDIV_0` | Cours diviseur |  |  |  |  |
| `RATMLT_0` | Cours multiplicateur |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `CURLED_0` | Devise référentiel |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `VATDAT_0` | Date taxe sur avoir |  |  |  |  |
| `AMTNOTL_0` | Montant HT (société) |  |  |  |  |
| `AMTATIL_0` | Montant TTC (société) |  |  |  |  |
| `RITBASDED_0` | Base déduite |  |  |  |  |
| `X4PAYYOOZ_0` | Statut feedback pay |  |  |  |  |
| `X4STAYOOZ_0` | Statut feedback |  |  |  |  |
| `X4DEBPAZ_0` | Débloquer BAP |  |  |  |  |
| `X4LNKYOOZ_0` | Lien URL |  |  |  |  |
| `X4PAYSTA_0` | Statut paiement |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BASDEP_0` | Base calcul Esc/Agios |  |  |  |  |
| `PORIMPLIQNUM_0` | N° rgmnt taxe import |  |  |  |  |
| `SPACUSDAT_0` | Date douane |  |  |  |  |
| `SPACUS_0` | Douane |  |  |  |  |
| `SPACUSBPR_0` | Tiers douane |  |  |  |  |
| `BOX1099_0` | Case 1099 |  |  |  |  |
| `DAS2_0` | Déclaration honoraires |  |  |  |  |
| `AMTSUBJ1099_0` | Mt soumis à 1099 |  |  |  |  |
| `BVRREFLINE_0` | Ligne référence BVR |  |  |  |  |
| `BPYNAM_0` | Raison sociale tiers payé |  |  |  |  |
| `BPYADDLIG_0` | Ligne adresse tiers payé |  |  |  |  |
| `BPYPOSCOD_0` | Code postal tiers payé |  |  |  |  |
| `BPYCTY_0` | Ville tiers payé |  |  |  |  |
| `BPYSAT_0` | Etat tiers payé |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BPR_0,
    ORIDOCNUM_0,
    EECTRN_0,
    SAT_0,
    RITINV_0
FROM PINVOICE
WHERE -- vos conditions
```

---

## PINVOICED

**Factures d'achat détail**

**Nombre de champs** : 170

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `FCSCSTPUR_0` | Total charges achat |  |  |  |  |
| `FCSCPR_0` | Total charges stock |  |  |  |  |
| `CSTMAJLIN_0` | Maj coût si facture complémentaire |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `FCSCOD_0` | Charge |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `DCLEECNUM_0` | N° déclaration TVA |  |  |  |  |
| `LINAMTCPR_0` | Coût stock |  |  |  |  |
| `CPRAMT_0` | Coût fixe unitaire |  |  |  |  |
| `CLCAMT3_0` | Base de calcul numéro 3 pour taxe |  |  |  |  |
| `CLCAMT4_0` | Base de calcul numéro 4 pour taxe |  |  |  |  |
| `CLCAMT5_0` | Base de calcul numéro 5 pour taxe |  |  |  |  |
| `CLCAMT6_0` | Base de calcul numéro 6 pour taxe |  |  |  |  |
| `CLCAMT7_0` | Base de calcul numéro 7 pour taxe |  |  |  |  |
| `SIDLIN_0` | Ligne facture vente |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `QTYVOU_0` | Volume |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `DISCRGAMT1_0` | Remise/Frais1 |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `CPR_0` | Prix revient |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `TYPORI_0` | Origine ligne |  |  |  |  |
| `NUMORI_0` | Numéro d'origine |  |  |  |  |
| `DISCRGAMT2_0` | Remise/Frais2 |  |  |  |  |
| `DISCRGAMT3_0` | Remise/Frais3 |  |  |  |  |
| `LINORI_0` | Ligne d'origine |  |  |  |  |
| `ORINETPRI_0` | Prix net d'origine |  |  |  |  |
| `LIKQTYCOE_0` | Coefficient quantité lien |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `TWMSTA_0` | Statut rappro. |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `STCRFLG_0` | Rapproché |  |  |  |  |
| `SHIPNUM_0` | Numéro expédition |  |  |  |  |
| `DDTADEP1_0` | Elt fact lig répart1 |  |  |  |  |
| `DDTADEP2_0` | Elt fact lig répart2 |  |  |  |  |
| `DDTADEP3_0` | Elt fact lig répart3 |  |  |  |  |
| `DDTADEP4_0` | Elt fact lig répart4 |  |  |  |  |
| `DDTADEP5_0` | Elt fact lig répart5 |  |  |  |  |
| `DDTADEP6_0` | Elt fact lig répart6 |  |  |  |  |
| `DDTADEP7_0` | Elt fact lig répart7 |  |  |  |  |
| `DDTADEP8_0` | Elt fact lig répart8 |  |  |  |  |
| `DDTADEP9_0` | Elt fact lig répart9 |  |  |  |  |
| `SATISS_0` | Province sortie |  |  |  |  |
| `SATRCP_0` | Province entrée |  |  |  |  |
| `ORIQTYWEU_0` | Poids d'origine |  |  |  |  |
| `ORIQTYVOU_0` | Volume d'origine |  |  |  |  |
| `DISCRGAMT9_0` | Remise/Frais9 |  |  |  |  |
| `FLG1099_0` | 1099 (USA) |  |  |  |  |
| `X4CODFICRFA_0` | Code fiche RFA |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `CSTPUR_0` | Coût achat unitaire |  |  |  |  |
| `LINCSTPUR_0` | Coût achat |  |  |  |  |
| `INVLIN_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `LINTEX_0` | Numéro texte |  |  |  |  |
| `AMTNOTLIN_0` | Montant ligne HT |  |  |  |  |
| `AMTNOTLINCAL_0` | Montant ligne HT |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LINWEU_0` | Unité poids |  |  |  |  |
| `QTYWEU_0` | Poids |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `NETCUR_0` | Devise |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `CPRCUR_0` | Devise |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `RCPDAT_0` | Date réception |  |  |  |  |
| `CLCAMT1_0` | Base de calcul numéro 1 pour taxe |  |  |  |  |
| `CLCAMT2_0` | Base de calcul numéro 2 pour taxe |  |  |  |  |
| `INVNUM_0` | Numéro facture |  |  |  |  |
| `QTYGLU_0` | Qté realisée |  |  |  |  |
| `GLU_0` | Unité oeuvre |  |  |  |  |
| `UOMPUUCOE_0` | Coefficient UOM-UA |  |  |  |  |
| `QTYUOM_0` | Qté facturée |  |  |  |  |
| `UOM_0` | Unité facturation |  |  |  |  |
| `QTYBUDLIN_0` | Qté à désengager |  |  |  |  |
| `DEDTAXRCP_0` | Taxe déductible |  |  |  |  |
| `DEDTAXISS_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH1_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH2_0` | Taxe déductible |  |  |  |  |
| `AMTTAXLIN1_0` | Montant taxe 1 |  |  |  |  |
| `AMTTAXLIN2_0` | Montant taxe 2 |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `XNUMACT_0` | Numéro action |  |  |  |  |
| `XOBJ1_0` | Objet partie 1 |  |  |  |  |
| `XOBJ2_0` | Objet partie 2 |  |  |  |  |
| `FASREF_0` | Référence immobilisation |  |  |  |  |
| `XBLOCAGE_0` | flag blocage |  |  |  |  |
| `LINEECFLG_0` | Ligne DEB |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `POQSEQ_0` | Numéro séquence |  |  |  |  |
| `AMTATILIN_0` | Montant ligne TTC |  |  |  |  |
| `PIHTYP_0` | Catégorie facture achat |  |  |  |  |
| `LINVOU_0` | Unité de volume |  |  |  |  |
| `SEQORI_0` | Séquence d'origine |  |  |  |  |
| `PIVTYP_0` | Type facture utilisateur |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `ACCDAT_0` | Date comptable |  |  |  |  |
| `XTYPOBJ_0` | Type objet |  |  |  |  |
| `BASTAXLIN1_0` | Base taxe 1 |  |  |  |  |
| `ORIQTYPUU_0` | Quantité d'origine |  |  |  |  |
| `CMMNUM_0` | No engagement |  |  |  |  |
| `AMTTAXLIN3_0` | Montant taxe 3 |  |  |  |  |
| `DEDTAXLIN1_0` | Taxe déductible 1 |  |  |  |  |
| `DEDTAXLIN2_0` | Taxe déductible 2 |  |  |  |  |
| `DEDTAXLIN3_0` | Taxe déductible 3 |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `AMTDEPLIN_0` | Montant escompte |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe 1 |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe 2 |  |  |  |  |
| `TAXRCP_0` | Taxe entrée |  |  |  |  |
| `TAXISS_0` | Taxe sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe 1 |  |  |  |  |
| `TAXOTH2_0` | Autre taxe 2 |  |  |  |  |
| `DISBASLIN1_0` | Remise base taxe 1 |  |  |  |  |
| `EECFLOPHY_0` | Flux physique |  |  |  |  |
| `DISCRGAMT5_0` | Remise/Frais5 |  |  |  |  |
| `DISCRGAMT4_0` | Remise/Frais4 |  |  |  |  |
| `DISCRGAMT6_0` | Remise/Frais6 |  |  |  |  |
| `DISCRGAMT7_0` | Remise/Frais7 |  |  |  |  |
| `DISCRGAMT8_0` | Remise/Frais8 |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `PRTFLG_0` | Facturation partielle |  |  |  |  |
| `FCYLIN_0` | Site ligne |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `BPR_0` | Tiers |  |  |  |  |
| `POPLIN_0` | Ligne commande achat |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `PNHNUM_0` | No retour |  |  |  |  |
| `SHIPLIN_0` | Ligne |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `FCY_0` | Site |  |  |  |  |
| `PERNBR_0` | Périodicité |  |  |  |  |
| `PERTYP_0` | Périodicité |  |  |  |  |
| `PIDLIN_0` | Ligne |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `PNDLIN_0` | Ligne |  |  |  |  |

### Exemple SQL

```sql
SELECT
    FCSCSTPUR_0,
    FCSCPR_0,
    CSTMAJLIN_0,
    CREDATTIM_0,
    UPDDATTIM_0
FROM PINVOICED
WHERE -- vos conditions
```

---

## PINVOICEV

**Factures d'achat valorisation**

**Nombre de champs** : 39

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `TEX1_0` | No texte |  |  |  |  |
| `TEX2_0` | No texte |  |  |  |  |
| `QTYLINNBR_0` | Nb lig dif qté |  |  |  |  |
| `PRILINNBR_0` | Nb lig dif prix |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `SIHNUM_0` | No facture vente |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `LINNBR_0` | Nombre de lignes |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `UPDUSR_0` | Auteur modification |  |  |  |  |
| `TOTLINAMT_0` | Total HT lignes |  |  |  |  |
| `CLCLINAMT_0` | HT lignes calculé |  |  |  |  |
| `TOTTAXAMT_0` | Total des taxes |  |  |  |  |
| `TOTLINWEU_0` | Total poids lignes |  |  |  |  |
| `TOTLINVOU_0` | Total volumes lignes |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `PIHTYP_0` | Catégorie facture achat |  |  |  |  |
| `CPYLAN_0` | Langue société |  |  |  |  |
| `PIVTYP_0` | Type facture utilisateur |  |  |  |  |
| `INVDTAVAT2_0` | Taxe lig répart |  |  |  |  |
| `INVDTAVAT1_0` | Taxe lig tarif |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `TOTLINQTY_0` | Total qtés lignes |  |  |  |  |
| `INVDTALIN1_0` | Elt fact lig tarif |  |  |  |  |
| `INVDTALIN2_0` | Elt fact lig répart |  |  |  |  |
| `BPR_0` | Tiers |  |  |  |  |
| `CREUSR_0` | Auteur création |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    CPY_0,
    BETCPY_0,
    TEX1_0,
    TEX2_0
FROM PINVOICEV
WHERE -- vos conditions
```

---

## PORDER

**Commandes d'achat**

**Nombre de champs** : 131

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `VOLCAP_0` | Volume |  |  |  |  |
| `TEX1_0` | No texte |  |  |  |  |
| `OCNDAT_0` | Date accusé réception |  |  |  |  |
| `BPOCTY_0` | Ville |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `BPOCRY_0` | Pays |  |  |  |  |
| `POSCOD_0` | Code postal |  |  |  |  |
| `BPOPOSCOD_0` | Code postal |  |  |  |  |
| `TEX2_0` | Texte |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `FUPFLG_0` | Relance des livraisons en retard |  |  |  |  |
| `OCNFLG_0` | Relance ARC |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `BPRPAY_0` | Tiers payé |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `VACTYP_0` | Type de régime taxe |  |  |  |  |
| `DME_0` | Livraison partielle |  |  |  |  |
| `ORIFCY_0` | Site origine/émetteur |  |  |  |  |
| `TOTLINAMT_0` | Total HT lignes |  |  |  |  |
| `TOTTAXAMT_0` | Total taxes |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires bon commande |  |  |  |  |
| `TOTVLT_0` | Total HT prévu |  |  |  |  |
| `XNBEDT_0` | Nombre d'impressions |  |  |  |  |
| `XTYPCDE_0` | Commande urgente |  |  |  |  |
| `TOTORDL_0` | Total HT commande devise société |  |  |  |  |
| `TOTLINWEU_0` | Total poids lignes |  |  |  |  |
| `TOTLINVOU_0` | Total volumes lignes |  |  |  |  |
| `TTVORDL_0` | Total TTC commande devise société |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `INVFCY_0` | Site facturation |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `SOHCAT_0` | Catégorie commande |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `FBULINNBR_0` | Nombre de lignes hors budget |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `DISCRGTYP_0` | Type de valeur remise/frais |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `X4POHDEST_0` | Destinataire |  |  |  |  |
| `TCTRQTY_0` | Nb contenants |  |  |  |  |
| `X4EXCLRFA_0` | Exclusion RFA |  |  |  |  |
| `X4POHENVAUT_0` |  |  |  |  |  |
| `X4AVMOT_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ORDMAXAMT_0` | Mt maxi commande |  |  |  |  |
| `X4AVMOTCOM_0` | Trans. entrée divers |  |  |  |  |
| `X4CMDBLC_0` | Commande bloquée |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `XPOHTYP_0` | Type commande achat |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `BETFCY_0` | Inter-site |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `CHGCOE_0` | Cours |  |  |  |  |
| `INVDTALIN2_0` | Elt fact lig répart |  |  |  |  |
| `SAT_0` | Etat |  |  |  |  |
| `BPOSAT_0` | Etat |  |  |  |  |
| `BPSINV_0` | Tiers facturant |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `PURTYP_0` | Type achat |  |  |  |  |
| `INVDTAVAT2_0` | Taxe lig répart |  |  |  |  |
| `INVDTAVAT1_0` | Taxe lig tarif |  |  |  |  |
| `TCTRNUM_0` | Contenant |  |  |  |  |
| `X4POHEXP_0` | Expéditeur |  |  |  |  |
| `BPOADD_0` | Adresse expéditeur |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `INVNBR_0` | Nombre de factures |  |  |  |  |
| `RCPNBR_0` | Nombre de réceptions |  |  |  |  |
| `INVFLG_0` | Facturée |  |  |  |  |
| `PRNFLG_0` | Imprimée |  |  |  |  |
| `OCNREM_0` | Observations ARC |  |  |  |  |
| `INVLINNBR_0` | Nombre de lignes facturées |  |  |  |  |
| `CLELINNBR_0` | Nombre de lignes soldées |  |  |  |  |
| `RCPLINNBR_0` | Nombre de lignes réceptionnées |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `YADDLIV_0` | Adr. liv. |  |  |  |  |
| `XCMQINT_0` | Contremarque interne |  |  |  |  |
| `TOTLINATI_0` | Total TTC lignes |  |  |  |  |
| `BPAPAY_0` | Adresse tiers payé |  |  |  |  |
| `YBPRLIV_0` | Tiers livré |  |  |  |  |
| `BPRNAM_0` | Raison sociale |  |  |  |  |
| `BPONAM_0` | Raison sociale |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `ORDREF_0` | Référence interne ou commande |  |  |  |  |
| `POHTYP_0` | Type commande |  |  |  |  |
| `REVNUM_0` | No avenant |  |  |  |  |
| `ORDDAT_0` | Date commande |  |  |  |  |
| `APPFLG_0` | Signée |  |  |  |  |
| `CLEFLG_0` | Soldée |  |  |  |  |
| `TOTLINQTY_0` | Total qtés lignes |  |  |  |  |
| `INVDTALIN1_0` | Elt fact lig tarif |  |  |  |  |
| `POHFCY_0` | Site commande |  |  |  |  |
| `RCPFCY_0` | Site réception |  |  |  |  |
| `BPAADDLIG_0` | Ligne adresse |  |  |  |  |
| `BPOADDLIG_0` | Ligne adresse |  |  |  |  |
| `CRYNAM_0` | Nom pays |  |  |  |  |
| `BPOCRYNAM_0` | Nom pays |  |  |  |  |
| `EECNUM_0` | Identification UE |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `WEICAP_0` | Poids |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CHGTYP_0` | Type cours |  |  |  |  |
| `LINNBR_0` | Nombre de lignes |  |  |  |  |
| `GPGCOD_0` | Code regroupement |  |  |  |  |
| `STRDAT_0` | Date début validité |  |  |  |  |
| `ENDDAT_0` | Date fin validité |  |  |  |  |
| `EXTRCPDAT1_0` | Date récept prévue |  |  |  |  |
| `RCPFLG_0` | Reçue |  |  |  |  |
| `OCNNUM_0` | Numéro ARC |  |  |  |  |
| `TOTORD_0` | Total HT commande |  |  |  |  |
| `TTVORD_0` | Total TTC commande |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `CTY_0` | Ville |  |  |  |  |

### Exemple SQL

```sql
SELECT
    VOLCAP_0,
    TEX1_0,
    OCNDAT_0,
    BPOCTY_0,
    CRY_0
FROM PORDER
WHERE -- vos conditions
```

---

## PORDERC

**Commandes d'achat cumul av-ret**

**Nombre de champs** : 69

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `EXTQTYSTU_0` | Quantité prévue US |  |  |  |  |
| `EECICT2_0` | Incoterm |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `RCPQTYPUU_0` | Quantité réceptionnée UA |  |  |  |  |
| `RCPQTYSTU_0` | Quantité réceptionnée US |  |  |  |  |
| `FRTHOR_0` | Horizon planification |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `POHFCY_0` | Site commande |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `EECNUM2_0` | Identification UE |  |  |  |  |
| `EARQTY_0` | Quantité Avance/Retard |  |  |  |  |
| `EARDAT_0` | Date Avance retard |  |  |  |  |
| `EARHOU_0` | Heure Avance retard |  |  |  |  |
| `EXTQTYPUU_0` | Quantité prévue UA |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `ITMREFBPS_0` | Article fournisseur |  |  |  |  |
| `PLI_0` | Code tarif |  |  |  |  |
| `STRDAT_0` | Date début validité |  |  |  |  |
| `ENDDAT_0` | Date fin validité |  |  |  |  |
| `BETFCY_0` | Inter-sites |  |  |  |  |
| `LINREVNUM_0` | Numéro avenant |  |  |  |  |
| `LINACC_0` | Comptes |  |  |  |  |
| `DAYDSP_0` | Répartition jour |  |  |  |  |
| `WEEDSP_0` | Répartition semaine |  |  |  |  |
| `FIMHOR_0` | Horizon ferme |  |  |  |  |
| `FRTHORUOM_0` | Unité temps horizon planification |  |  |  |  |
| `TEX_0` | Texte |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `USEPLC_0` | Lieu consommation |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `DLVREQNUM_0` | Numéro programme Demande livraison |  |  |  |  |
| `ICTCTY2_0` | Ville Incoterm |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `FFWADD2_0` | Adresse transitaire |  |  |  |  |
| `PRIVLT_0` | Prix valorisation |  |  |  |  |
| `AMTVLT_0` | Montant valorisation |  |  |  |  |
| `EECLOC2_0` | Lieu transport DEB |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `FFWNUM2_0` | Numéro transitaire |  |  |  |  |
| `RTNQTYPUU_0` | Quantité retour UA |  |  |  |  |
| `RTNQTYSTU_0` | Quantité retour US |  |  |  |  |
| `INVQTYPUU_0` | Quantité facturée UA |  |  |  |  |
| `INVQTYSTU_0` | Quantité facturée US |  |  |  |  |
| `ORDQTYPUU_0` | Quantité commandée UA |  |  |  |  |
| `ORDQTYSTU_0` | Quantité commandée US |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `X4AVMOT_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `X4AVMOTCOM_0` | Trans. entrée divers |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `X4POHFAB_0` | Fabricant |  |  |  |  |
| `X4POHAGR_0` | Numéro d'agrément |  |  |  |  |
| `X4POHBPA_0` | Adresse fabricant |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |
| `FCYADD_0` | Adresse réception |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |

### Exemple SQL

```sql
SELECT
    EXTQTYSTU_0,
    EECICT2_0,
    LINPURTYP_0,
    ITMDES1_0,
    RCPQTYPUU_0
FROM PORDERC
WHERE -- vos conditions
```

---

## PORDERP

**Commandes d'achat Prix**

**Nombre de champs** : 55

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `TAXISS_0` | Taxe sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe 1 |  |  |  |  |
| `TAXOTH2_0` | Autre taxe 2 |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `POHTYP_0` | Type commande |  |  |  |  |
| `LINREVNUM_0` | No avenant |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `POPSEQ_0` | Séquence |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `LINBUY_0` | Acheteur |  |  |  |  |
| `STRDAT_0` | Date début application |  |  |  |  |
| `POPCREFLG_0` | Indicateur creation |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `POPDAT_0` | Date fin application |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FCYADD_0` | Adresse réception |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `ORICRY_0` | Pays origine |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `TAXRCP_0` | Taxe entrée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ITMDES1_0,
    DISCRGVAL4_0,
    TAXISS_0,
    TAXOTH1_0,
    TAXOTH2_0
FROM PORDERP
WHERE -- vos conditions
```

---

## PORDERQ

**Commandes d'achat quantités**

**Nombre de champs** : 181

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4AVMOTD_0` |  |  |  |  |  |
| `ZFABNUM_0` | Code du fabricant |  |  |  |  |
| `ZITMREFFAB_0` | Référence fabricant |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `ZDATCOF_0` | Date confirmée fournisseur |  |  |  |  |
| `X4HWEE_0` |  |  |  |  |  |
| `X4HYEA_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CSTPUR_0` | Coût achat unitaire |  |  |  |  |
| `LINCSTPUR_0` | Coût achat |  |  |  |  |
| `FCSCSTPUR_0` | Total charges achat |  |  |  |  |
| `FCSCPR_0` | Total charges stock |  |  |  |  |
| `REACSTPUR_0` | Coût achat réalisé |  |  |  |  |
| `CLCAMT7_0` | Base de calcul numéro 7 pour taxe |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `X4AVMOTCOMD_0` | Trans. entrée divers |  |  |  |  |
| `X4HEXTRCPD_0` | Dépôt cible |  |  |  |  |
| `X4HCAD_0` | Stock négatif |  |  |  |  |
| `LINAMTCPR_0` | Coût stock |  |  |  |  |
| `X4FLGBLC_0` | Blocage |  |  |  |  |
| `CPRAMT_0` | Coût fixe unitaire |  |  |  |  |
| `XALERTE_0` | Alerte variation |  |  |  |  |
| `CPR_0` | Coût stock unitaire |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `CLCAMT3_0` | Base de calcul numéro 3 pour taxe |  |  |  |  |
| `CLCAMT4_0` | Base de calcul numéro 4 pour taxe |  |  |  |  |
| `CLCAMT5_0` | Base de calcul numéro 5 pour taxe |  |  |  |  |
| `CLCAMT6_0` | Base de calcul numéro 6 pour taxe |  |  |  |  |
| `XDLVTIMDEB_0` | Heure début récepti |  |  |  |  |
| `LIKQTYCOE_0` | Coefficient quantité lien |  |  |  |  |
| `CMMFLG_0` | Indicateur d'engagement |  |  |  |  |
| `ZSIGFAB_0` | Sigle fabricant |  |  |  |  |
| `X4POHFAB_0` | Fabricant |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SHIQTYPUU_0` | Qté en expé UA |  |  |  |  |
| `X4POHAGR_0` | Numéro d'agrément |  |  |  |  |
| `X4POHBPA_0` | Adresse fabricant |  |  |  |  |
| `SHIQTYSTU_0` | Qté en expé US |  |  |  |  |
| `CPRPRI_0` | Prix revient sans frais d'approche |  |  |  |  |
| `CMMTAX_0` | Type d'engagement |  |  |  |  |
| `DISCRGAMT9_0` | Remise/Frais9 |  |  |  |  |
| `FCYADD_0` | Adresse réception |  |  |  |  |
| `CPRCUR_0` | Devise société |  |  |  |  |
| `QTYVOU_0` | Volume |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `YEA_0` | Année |  |  |  |  |
| `WIPNUM_0` | Numéro ordre |  |  |  |  |
| `MON_0` | Mois |  |  |  |  |
| `DISCRGAMT1_0` | Remise/Frais1 |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `LININVFLG_0` | Ligne facturée |  |  |  |  |
| `EXTRCPDAT_0` | Date réception prévue |  |  |  |  |
| `POQLNK_0` | Ligne+Séquence pour Link |  |  |  |  |
| `AMTTAXLIN2_0` | Montant taxe 2 |  |  |  |  |
| `DISCRGAMT2_0` | Remise/Frais2 |  |  |  |  |
| `DISCRGAMT3_0` | Remise/Frais3 |  |  |  |  |
| `UOM_0` | Unité commande |  |  |  |  |
| `UOMPUUCOE_0` | Coefficient UOM-UA |  |  |  |  |
| `UOMFLG_0` | Commande en UC |  |  |  |  |
| `DEDTAXRCP_0` | Taxe déductible |  |  |  |  |
| `DEDTAXISS_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH1_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH2_0` | Taxe déductible |  |  |  |  |
| `AMTTAXLIN1_0` | Montant taxe 1 |  |  |  |  |
| `RCPCLEFLG_0` | Soldée par réception |  |  |  |  |
| `XOBJ1_0` | Objet partie 1 |  |  |  |  |
| `XOBJ2_0` | Objet partie 2 |  |  |  |  |
| `OCNLIN_0` | Ligne vte inter-soc |  |  |  |  |
| `OCNSEQ_0` | Séq vte inter-soc |  |  |  |  |
| `LINOCNFLG_0` | Indicateur ARC |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `ITMREFORI_0` | Article lancé |  |  |  |  |
| `VCRSEQORI_0` | No séquence pièce origine |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `POQSEQ_0` | Numéro séquence |  |  |  |  |
| `XSOQSEQ_0` | Numéro séquence |  |  |  |  |
| `LASINVDAT_0` | Date dernière facture |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `INVQTYPUU_0` | Quantité facturée UA |  |  |  |  |
| `INVQTYSTU_0` | Quantité facturée US |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SOQSEQ_0` | Numéro séquence |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `LINATI_0` | Montant ligne TTC |  |  |  |  |
| `LINATIAMT_0` | Montant ligne TTC |  |  |  |  |
| `PQHNUM_0` | Numéro appel offres |  |  |  |  |
| `LASRCPDAT_0` | Date Dernière Entrée |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LINSTOFCY_0` | Site expédition |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `LINWEU_0` | Unité poids |  |  |  |  |
| `QTYWEU_0` | Poids |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `NETCUR_0` | Devise |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `ITMREFBPS_0` | Article fournisseur |  |  |  |  |
| `ORI_0` | Origine demande |  |  |  |  |
| `CLCAMT2_0` | Base de calcul numéro 2 pour taxe |  |  |  |  |
| `DEMENDDAT_0` | Date fin demandée |  |  |  |  |
| `DEMENDHOU_0` | Heure fin demandée |  |  |  |  |
| `LINOCNDAT_0` | Date ARC |  |  |  |  |
| `LINOCNNUM_0` | Numéro ARC |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `LINCLEFLG_0` | Ligne soldée |  |  |  |  |
| `LINPRNFLG_0` | Ligne imprimée |  |  |  |  |
| `QTYUOM_0` | Quantité commandée |  |  |  |  |
| `SOHNUM_0` | Numéro commande vente |  |  |  |  |
| `CLCAMT1_0` | Base de calcul numéro 1 pour taxe |  |  |  |  |
| `OFS_0` | Délai réapprovisionnement |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `XSOHNUM_0` | No commande |  |  |  |  |
| `WIPTYP_0` | Type ordre |  |  |  |  |
| `RETRCPDAT_0` | Date besoin |  |  |  |  |
| `RETQTYSTU_0` | Quantité besoins pris US |  |  |  |  |
| `RETQTYPUU_0` | Quantité besoins pris UA |  |  |  |  |
| `FBUFLG_0` | Dépassement de budget |  |  |  |  |
| `USEPLC_0` | Lieu consommation |  |  |  |  |
| `XQTYSTU_0` | Qté commandée US |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `XSOPLIN_0` | Ligne |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `RCPQTYPUU_0` | Quantité réceptionnée UA |  |  |  |  |
| `RCPQTYSTU_0` | Quantité réceptionnée US |  |  |  |  |
| `LININVNBR_0` | Nombre de factures |  |  |  |  |
| `LINRCPNBR_0` | Nombre de réceptions |  |  |  |  |
| `INVRCPNBR_0` | Nombre de réception facturées |  |  |  |  |
| `LINTEX_0` | Numéro texte |  |  |  |  |
| `LINAMT_0` | Montant ligne HT |  |  |  |  |
| `SCOADD_0` | Adresse sous-traitant |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `YBPRLIV_0` | Tiers livré |  |  |  |  |
| `YADDLIV_0` | Adr. liv. |  |  |  |  |
| `XEXPORT_0` | Exporté EDI |  |  |  |  |
| `XQTY_0` | Quantité vendue UV |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe 1 |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe 2 |  |  |  |  |
| `XDLVTIMFIN_0` | Heure fin réception |  |  |  |  |
| `DISBASLIN1_0` | Remise base taxe 1 |  |  |  |  |
| `DISCRGAMT5_0` | Remise/Frais5 |  |  |  |  |
| `DISCRGAMT4_0` | Remise/Frais4 |  |  |  |  |
| `DISCRGAMT6_0` | Remise/Frais6 |  |  |  |  |
| `DISCRGAMT7_0` | Remise/Frais7 |  |  |  |  |
| `DISCRGAMT8_0` | Remise/Frais8 |  |  |  |  |
| `SOPLIN_0` | Ligne commande |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `POHTYP_0` | Type commande |  |  |  |  |
| `LINREVNUM_0` | No avenant |  |  |  |  |
| `ORDDAT_0` | Date commande |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `POHFCY_0` | Site commande |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `LINSTA_0` | Etat ligne |  |  |  |  |
| `DEMRCPDAT_0` | Date récep demandée |  |  |  |  |
| `DEMRCPHOU_0` | Heure récep demandée |  |  |  |  |
| `LINVOU_0` | Unité de volume |  |  |  |  |
| `PPDLIN_0` | Ligne réponse |  |  |  |  |
| `BPSINV_0` | Tiers facturant |  |  |  |  |
| `CAD_0` | Cadencement |  |  |  |  |
| `WEE_0` | No semaine |  |  |  |  |
| `CMMNUM_0` | No engagement |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `XTYPOBJ_0` | Type objet |  |  |  |  |
| `BASTAXLIN1_0` | Base taxe 1 |  |  |  |  |
| `WIPSTA_0` | Statut encours |  |  |  |  |
| `AMTTAXLIN3_0` | Montant taxe 3 |  |  |  |  |
| `DEDTAXLIN1_0` | Taxe déductible 1 |  |  |  |  |
| `DEDTAXLIN2_0` | Taxe déductible 2 |  |  |  |  |
| `DEDTAXLIN3_0` | Taxe déductible 3 |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4AVMOTD_0,
    ZFABNUM_0,
    ZITMREFFAB_0,
    X4EXCLRFAD_0,
    ZDATCOF_0
FROM PORDERQ
WHERE -- vos conditions
```

---

## PRECEIPT

**Réception**

**Nombre de champs** : 106

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TRLLICPLATE_0` | Immat remorque |  |  |  |  |
| `X1WMSSAS_0` | Pré-réception (SAS) |  |  |  |  |
| `ARVDAT_0` | Date arrivée |  |  |  |  |
| `DPEDAT_0` | Date départ |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `PSTFLG_0` | Comptabilisée |  |  |  |  |
| `TOTAMTATI_0` | Total TTC |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `INVLINNBR_0` | Nombre lignes totalement facturées |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `CHGCOE_0` | Cours |  |  |  |  |
| `TOTVOL_0` | Volume |  |  |  |  |
| `CLSVCR_0` | Classe |  |  |  |  |
| `TEX1_0` | No texte |  |  |  |  |
| `X4SDHNUM_0` | N° BL client |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `TOTAMTATIL_0` | Total TTC devise société |  |  |  |  |
| `TOTAMTNOTL_0` | Total HT devise société |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `XBLOCAGE_0` | flag blocage |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `TOTLINWEU_0` | Total poids lignes |  |  |  |  |
| `TOTLINVOU_0` | Total volumes lignes |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `TOTAMTNOT_0` | Total HT |  |  |  |  |
| `NDEDAT_0` | Date Bon livraison |  |  |  |  |
| `TOTGROWEI_0` | Poids brut |  |  |  |  |
| `VACTYP_0` | Type de régime taxe |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `ETD_0` | Heure départ |  |  |  |  |
| `ETA_0` | Heure arrivée |  |  |  |  |
| `PSTLINNBR_0` | Nombre de lignes comptabilisées |  |  |  |  |
| `BPSINV_0` | Fournisseur facture |  |  |  |  |
| `TOTLINAMT_0` | Total HT lignes |  |  |  |  |
| `TOTTAXAMT_0` | Total taxes |  |  |  |  |
| `CAI_0` | Numéro CAI |  |  |  |  |
| `DATVLYCAI_0` | Date validité CAI |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `SCUVCR_0` | Succursale |  |  |  |  |
| `INVLINCTR_0` | Nombre de lignes facturées |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `TOTNETWEI_0` | Poids net |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPRPAY_0` | Tiers payé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `BETFCY_0` | Inter-sites |  |  |  |  |
| `BPOCTY_0` | Ville |  |  |  |  |
| `BPOCRY_0` | Pays |  |  |  |  |
| `BPOPOSCOD_0` | Code postal |  |  |  |  |
| `TEX2_0` | Texte |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CHGTYP_0` | Type cours |  |  |  |  |
| `BPTNUM_0` | Numéro transporteur |  |  |  |  |
| `LINNBR_0` | Nombre de lignes |  |  |  |  |
| `SEQVCR_0` | Séquence |  |  |  |  |
| `YCAUSRDES_0` | Opérateur |  |  |  |  |
| `GPGCOD_0` | Code regroupement |  |  |  |  |
| `RCPDAT_0` | Date réception |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `BPSNDE_0` | Numéro bon livraison fournisseur |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `INVDTAVAT1_0` | Taxe lig tarif |  |  |  |  |
| `BPOADD_0` | Adresse expéditeur |  |  |  |  |
| `BPOADDLIG_0` | Ligne adresse |  |  |  |  |
| `BPOCRYNAM_0` | Nom pays |  |  |  |  |
| `EECNUM_0` | Identification UE |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `INVDTALIN2_0` | Elt fact lig répart |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `BPOSAT_0` | Etat |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `PSTDAT_0` | Date extourne |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `PURTYP_0` | Type achat |  |  |  |  |
| `INVDTAVAT2_0` | Taxe lig répart |  |  |  |  |
| `BPAPAY_0` | Adresse tiers payé |  |  |  |  |
| `TYPVCR_0` | Type document |  |  |  |  |
| `LICPLATE_0` | Immatriculation |  |  |  |  |
| `BPONAM_0` | Raison sociale |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `TOTLINQTY_0` | Total qtés lignes |  |  |  |  |
| `INVDTALIN1_0` | Elt fact lig tarif |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `INVFLG_0` | Facturée |  |  |  |  |
| `PRNFLG_0` | Imprimée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TRLLICPLATE_0,
    X1WMSSAS_0,
    ARVDAT_0,
    DPEDAT_0,
    CREDATTIM_0
FROM PRECEIPT
WHERE -- vos conditions
```

---

## PRECEIPTD

**Réceptions Détail**

**Nombre de champs** : 167

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XVERSION_0` | Version |  |  |  |  |
| `LINWEU_0` | Unité poids |  |  |  |  |
| `QUARTNFLG_0` | Retour du controle qualité |  |  |  |  |
| `AMTTAXLIN3_0` | Montant taxe 3 |  |  |  |  |
| `DEDTAXLIN1_0` | Taxe déductible 1 |  |  |  |  |
| `DEDTAXLIN2_0` | Taxe déductible 2 |  |  |  |  |
| `DEDTAXLIN3_0` | Taxe déductible 3 |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `UOM_0` | Unité réception |  |  |  |  |
| `LINVOU_0` | Unité de volume |  |  |  |  |
| `LINPSTDAT_0` | Date extourne |  |  |  |  |
| `UOMSTUCOE_0` | Coefficient UOM/US |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `XTYPOBJ_0` | Type objet |  |  |  |  |
| `BASTAXLIN1_0` | Base taxe 1 |  |  |  |  |
| `TAXISS_0` | Taxe sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe 1 |  |  |  |  |
| `TAXOTH2_0` | Autre taxe 2 |  |  |  |  |
| `DISBASLIN1_0` | Remise base taxe 1 |  |  |  |  |
| `DISCRGAMT5_0` | Remise/Frais5 |  |  |  |  |
| `DISCRGAMT4_0` | Remise/Frais4 |  |  |  |  |
| `DISCRGAMT6_0` | Remise/Frais6 |  |  |  |  |
| `DISCRGAMT7_0` | Remise/Frais7 |  |  |  |  |
| `DISCRGAMT8_0` | Remise/Frais8 |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `POQSEQ_0` | Numéro séquence commande |  |  |  |  |
| `POHTYP_0` | Type commande |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `POHFCY_0` | Site commande |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `LINTEX_0` | Numéro texte |  |  |  |  |
| `LINAMT_0` | Montant ligne HT |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `YFLAGWKF_0` | Flag workflow |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `ITMREFORI_0` | Article lancé |  |  |  |  |
| `LINEECFLG_0` | Ligne DEB |  |  |  |  |
| `VCRSEQORI_0` | No séquence pièce origine |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `RTNQTYPUU_0` | Quantité retour UA |  |  |  |  |
| `RTNQTYSTU_0` | Quantité retour US |  |  |  |  |
| `INVQTYPUU_0` | Quantité facturée UA |  |  |  |  |
| `INVQTYSTU_0` | Quantité facturée US |  |  |  |  |
| `DISCRGAMT2_0` | Remise/Frais2 |  |  |  |  |
| `DISCRGAMT3_0` | Remise/Frais3 |  |  |  |  |
| `UOMPUUCOE_0` | Coefficient UOM-UA |  |  |  |  |
| `QTYUOM_0` | Quantité réceptionnée |  |  |  |  |
| `LINPSTFLG_0` | Ligne comptabilisée |  |  |  |  |
| `DEDTAXRCP_0` | Taxe déductible |  |  |  |  |
| `DEDTAXISS_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH1_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH2_0` | Taxe déductible |  |  |  |  |
| `BPSINV_0` | Fournisseur facture |  |  |  |  |
| `AMTTAXLIN1_0` | Montant taxe 1 |  |  |  |  |
| `AMTTAXLIN2_0` | Montant taxe 2 |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `NETPRIPUU_0` | Prix net UA |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe 1 |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe 2 |  |  |  |  |
| `TAXRCP_0` | Taxe entrée |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `SHIPLIN_0` | Ligne |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `RCPDAT_0` | Date réception |  |  |  |  |
| `LINPRNFLG_0` | Ligne imprimée |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `CLCAMT1_0` | Base de calcul numéro 1 pour taxe |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `QTYWEU_0` | Poids |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `NETCUR_0` | Devise |  |  |  |  |
| `X4FLGBLC_0` | Blocage |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `CLCAMT2_0` | Base de calcul numéro 2 pour taxe |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `LINATIAMT_0` | Montant ligne TTC |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LINSTOFCY_0` | Site expédition |  |  |  |  |
| `ZFABNUM_0` | Code du fabricant |  |  |  |  |
| `ZITMREFFAB_0` | Référence fabricant |  |  |  |  |
| `X1SASLIN_0` | N° Ligne SAS |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CSTPUR_0` | Coût achat unitaire |  |  |  |  |
| `LINCSTPUR_0` | Coût achat |  |  |  |  |
| `CPRCLC_0` | Coût stock unitaire calculé |  |  |  |  |
| `FCSCSTPUR_0` | Total charges achat |  |  |  |  |
| `FCSCPR_0` | Total charges stock |  |  |  |  |
| `FCSCPRCPT_0` | Total charges stock comptabilisées |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `LININVFLG_0` | Ligne facturée |  |  |  |  |
| `ORICRY_0` | Pays origine |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `CPR_0` | Prix revient |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `CPRCUR_0` | Devise société |  |  |  |  |
| `QTYVOU_0` | Volume |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `DISCRGAMT1_0` | Remise/Frais1 |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `SHIPNUM_0` | Numéro expédition |  |  |  |  |
| `CPRPRI_0` | Prix revient sans frais d'approche |  |  |  |  |
| `SATISS_0` | Province sortie |  |  |  |  |
| `BPOCRY_0` | Pays expédition |  |  |  |  |
| `SCOCSTCPT_0` | Coût sous-traitance comptabilisé |  |  |  |  |
| `LINCAT_0` | Catégorie mouvement |  |  |  |  |
| `DISCRGAMT9_0` | Remise/Frais9 |  |  |  |  |
| `CLCAMT7_0` | Base de calcul numéro 7 pour taxe |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `LINAMTCPR_0` | Coût stock |  |  |  |  |
| `CPRAMT_0` | Coût fixe unitaire |  |  |  |  |
| `CLCAMT3_0` | Base de calcul numéro 3 pour taxe |  |  |  |  |
| `CLCAMT4_0` | Base de calcul numéro 4 pour taxe |  |  |  |  |
| `CLCAMT5_0` | Base de calcul numéro 5 pour taxe |  |  |  |  |
| `CLCAMT6_0` | Base de calcul numéro 6 pour taxe |  |  |  |  |
| `LIKQTYCOE_0` | Coefficient quantité lien |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `ZSIGFAB_0` | Sigle fabricant |  |  |  |  |
| `X4POHFAB_0` | Fabricant |  |  |  |  |
| `XCQF_0` | Contrôle qual fréq |  |  |  |  |
| `XQTEPAL_0` | Qté palette |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4POHAGR_0` | Numéro d'agrément |  |  |  |  |
| `X4POHBPA_0` | Adresse fabricant |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `RRRQTYPUU_0` | Quantité restante en R UA |  |  |  |  |
| `RRRQTYSTU_0` | Quantité restante en R US |  |  |  |  |
| `XOBJ1_0` | Objet partie 1 |  |  |  |  |
| `XOBJ2_0` | Objet partie 2 |  |  |  |  |
| `VERFLG_0` | Indicateur version |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XVERSION_0,
    LINWEU_0,
    QUARTNFLG_0,
    AMTTAXLIN3_0,
    DEDTAXLIN1_0
FROM PRECEIPTD
WHERE -- vos conditions
```

---

## PREQUIS

**Demandes d'achat**

**Nombre de champs** : 31

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TEX1_0` | No texte |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `PSHNUMMMS_0` | No maintenance |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MMSURL_0` | URL maintenance |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `FBULINNBR_0` | Nombre de lignes hors budget |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ORDLINNBR_0` | Nombre de lignes commandées |  |  |  |  |
| `ORDFLG_0` | Commandée |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `PSHFCY_0` | Site demande |  |  |  |  |
| `PSHNUM_0` | No demande |  |  |  |  |
| `PRQDAT_0` | Date demande |  |  |  |  |
| `TOTPRQ_0` | Total demande HT |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `APPFLG_0` | Signée |  |  |  |  |
| `CLEFLG_0` | Soldée |  |  |  |  |
| `PRNFLG_0` | Imprimée |  |  |  |  |
| `CLELINNBR_0` | Nombre de lignes soldées |  |  |  |  |
| `APPLINNBR_0` | Nombre de lignes signées |  |  |  |  |
| `ATECORI_0` | Origine |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `TEX2_0` | Texte |  |  |  |  |
| `LINNBR_0` | Nombre de lignes |  |  |  |  |
| `REQUSR_0` | Demandeur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TEX1_0,
    AUUID_0,
    DIE_0,
    PSHNUMMMS_0,
    CREDATTIM_0
FROM PREQUIS
WHERE -- vos conditions
```

---

## PREQUISA

**Demandes d'achat Lien**

**Nombre de champs** : 13

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `PQHNUM_0` | Numéro appel offres |  |  |  |  |
| `PQDLIN_0` | Ligne appel offre |  |  |  |  |
| `PUU_0` | Unité achat commande |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `PSHNUM_0` | No demande |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `PSDLIN_0` | No ligne DA |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `STU_0` | Unité stock commande |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    PQHNUM_0,
    PQDLIN_0
FROM PREQUISA
WHERE -- vos conditions
```

---

## PREQUISD

**Demandes d'achat Détail**

**Nombre de champs** : 104

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CMMPRPTAX_0` | Type d'engagement |  |  |  |  |
| `XPOHTYP_0` | Type commande achat |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `CLCAMT3_0` | Base de calcul numéro 3 pour taxe |  |  |  |  |
| `CLCAMT4_0` | Base de calcul numéro 4 pour taxe |  |  |  |  |
| `CLCAMT5_0` | Base de calcul numéro 5 pour taxe |  |  |  |  |
| `CLCAMT6_0` | Base de calcul numéro 6 pour taxe |  |  |  |  |
| `CLCAMT7_0` | Base de calcul numéro 7 pour taxe |  |  |  |  |
| `PSDNUMMMS_0` | Id ligne maintenance |  |  |  |  |
| `ZFABNUM_0` | Code du fabricant |  |  |  |  |
| `ZITMREFFAB_0` | Référence fabricant |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `LINATIAMT_0` | Montant ligne TTC |  |  |  |  |
| `PQHNUM_0` | Numéro appel offres |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `EXTRCPDAT_0` | Date souhaitée |  |  |  |  |
| `EXTORDDAT_0` | Date théorique de commande |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `ORDQTYPUU_0` | Quantité commandée UA |  |  |  |  |
| `ORDQTYSTU_0` | Quantité commandée US |  |  |  |  |
| `LINBUY_0` | Acheteur |  |  |  |  |
| `VACTYP_0` | Type de régime taxe |  |  |  |  |
| `DEDTAXRCP_0` | Taxe déductible |  |  |  |  |
| `DEDTAXISS_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH1_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH2_0` | Taxe déductible |  |  |  |  |
| `AMTTAXLIN1_0` | Montant taxe 1 |  |  |  |  |
| `AMTTAXLIN2_0` | Montant taxe 2 |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `PSHFCY_0` | Site demande |  |  |  |  |
| `PSHNUM_0` | No demande |  |  |  |  |
| `PSDLIN_0` | ligne |  |  |  |  |
| `LINORDFLG_0` | Ligne commandée |  |  |  |  |
| `LINAPPFLG_0` | Ligne signée |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `CMMPRPFLG_0` | Indicateur pré-engagement |  |  |  |  |
| `NBAOF_0` | Nbre appels d'offre |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `CHGCOE_0` | Cours |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `CMMPRPNUM_0` | No pré-engagement |  |  |  |  |
| `WIPNUM_0` | Numéro ordre (planifié) |  |  |  |  |
| `AMTTAXLIN3_0` | Montant taxe 3 |  |  |  |  |
| `DEDTAXLIN1_0` | Taxe déductible 1 |  |  |  |  |
| `DEDTAXLIN2_0` | Taxe déductible 2 |  |  |  |  |
| `DEDTAXLIN3_0` | Taxe déductible 3 |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `PPDLIN_0` | Ligne réponse |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `BASTAXLIN1_0` | Base taxe 1 |  |  |  |  |
| `TAXISS_0` | Taxe sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe 1 |  |  |  |  |
| `TAXOTH2_0` | Autre taxe 2 |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `LINTEX_0` | Numéro texte |  |  |  |  |
| `LINAMT_0` | Montant ligne HT |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `ZSIGFAB_0` | Sigle Fabricant |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe 1 |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe 2 |  |  |  |  |
| `TAXRCP_0` | Taxe entrée |  |  |  |  |
| `ATECORI_0` | Origine |  |  |  |  |
| `FBUFLG_0` | Dépassement de budget |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `LINCLEFLG_0` | Ligne soldée |  |  |  |  |
| `ORI_0` | Origine demande |  |  |  |  |
| `CLCAMT1_0` | Base de calcul numéro 1 pour taxe |  |  |  |  |
| `CLCAMT2_0` | Base de calcul numéro 2 pour taxe |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CHGTYP_0` | Type cours |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |

### Exemple SQL

```sql
SELECT
    DISCRGREN7_0,
    DISCRGREN8_0,
    DISCRGREN9_0,
    DISCRGVAL8_0,
    DISCRGVAL9_0
FROM PREQUISD
WHERE -- vos conditions
```

---

## PREQUISO

**Demandes d'achat Lien**

**Nombre de champs** : 14

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `POQSEQ_0` | Numéro séquence |  |  |  |  |
| `PUU_0` | Unité achat commande |  |  |  |  |
| `STU_0` | Unité stock commande |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `PSDLIN_0` | Ligne |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `PSHNUM_0` | No demande |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    POQSEQ_0,
    PUU_0
FROM PREQUISO
WHERE -- vos conditions
```

---

## PRETURN

**Retours**

**Nombre de champs** : 82

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `PNHTYP_0` | Type retour |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DPEDATR_0` | Date départ |  |  |  |  |
| `TRLLICPLATER_0` | Immat remorque |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ATDTCODR_0` | Code AT |  |  |  |  |
| `MANDOCR_0` | Document manuel |  |  |  |  |
| `ARVDATR_0` | Date arrivée |  |  |  |  |
| `TOTGROWEI_0` | Poids brut |  |  |  |  |
| `VACTYP_0` | Type de régime taxe |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `CFMFLG_0` | Retour validé |  |  |  |  |
| `ETDR_0` | Heure départ |  |  |  |  |
| `ETAR_0` | Heure arrivée |  |  |  |  |
| `PSTLINNBR_0` | Nombre de lignes comptabilisées |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `PSTFLG_0` | Comptabilisée |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `ENTCOD_0` | Pièce auto stock |  |  |  |  |
| `TOTVOL_0` | Volume |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `TEX1_0` | No texte |  |  |  |  |
| `BOLNUM_0` | Numéro BT |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `RTNDAT_0` | Date retour |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPRPAY_0` | Tiers payé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `BETFCY_0` | Inter-sites |  |  |  |  |
| `CTY_0` | Ville |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `POSCOD_0` | Code postal |  |  |  |  |
| `TEX2_0` | Texte |  |  |  |  |
| `PRNFLG_0` | Imprimé |  |  |  |  |
| `BPTNUM_0` | Numéro transporteur |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires bon retour |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `REM_0` | Observations |  |  |  |  |
| `BPAADDLIG_0` | Ligne adresse |  |  |  |  |
| `CRYNAM_0` | Nom pays |  |  |  |  |
| `EECNUM_0` | Identification UE |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `SAT_0` | Etat |  |  |  |  |
| `BPSINV_0` | Tiers facturant |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `PSTDAT_0` | Date extourne |  |  |  |  |
| `PURTYP_0` | Type achat |  |  |  |  |
| `BPAPAY_0` | Adresse tiers payé |  |  |  |  |
| `LICPLATER_0` | Immatriculation |  |  |  |  |
| `BPRNAM_0` | Raison sociale |  |  |  |  |
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `AUZNUM_0` | Numéro autorisation |  |  |  |  |
| `LINNBR_0` | Nombre lignes |  |  |  |  |
| `INVFLG_0` | Facturée |  |  |  |  |
| `TMPPNHNUM_0` | N° de retour |  |  |  |  |
| `VACBPR_0` | Régime taxe tiers |  |  |  |  |
| `INVLINNBR_0` | Nombre de lignes facturées |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `TOTNETWEI_0` | Poids net |  |  |  |  |
| `PNHFCY_0` | Site retour |  |  |  |  |
| `PNHNUM_0` | No retour |  |  |  |  |

### Exemple SQL

```sql
SELECT
    PNHTYP_0,
    AUUID_0,
    DPEDATR_0,
    TRLLICPLATER_0,
    CREDATTIM_0
FROM PRETURN
WHERE -- vos conditions
```

---

## PRETURND

**Retours Détail**

**Nombre de champs** : 123

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CLCAMT4_0` | Base de calcul numéro 4 pour taxe |  |  |  |  |
| `CLCAMT5_0` | Base de calcul numéro 5 pour taxe |  |  |  |  |
| `CLCAMT6_0` | Base de calcul numéro 6 pour taxe |  |  |  |  |
| `LIKQTYCOE_0` | Coefficient quantité lien |  |  |  |  |
| `UOMPUUCOE_0` | Coefficient UOM-UA |  |  |  |  |
| `LINPSTFLG_0` | Ligne comptabilisée |  |  |  |  |
| `DEDTAXRCP_0` | Taxe déductible |  |  |  |  |
| `DEDTAXISS_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH1_0` | Taxe déductible |  |  |  |  |
| `DEDTAXOTH2_0` | Taxe déductible |  |  |  |  |
| `AMTTAXLIN1_0` | Montant taxe 1 |  |  |  |  |
| `AMTTAXLIN2_0` | Montant taxe 2 |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `NETPRIPUU_0` | Prix net UA |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `LININVFLG_0` | Ligne facturée |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `CPR_0` | Prix revient |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `RTNDES_0` | Libellé motif |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SATISS_0` | Province sortie |  |  |  |  |
| `BPOCRY_0` | Pays expédition |  |  |  |  |
| `LINCAT_0` | Catégorie mouvement |  |  |  |  |
| `SRHNUM_0` | Numéro retour vente |  |  |  |  |
| `SRDLIN_0` | Ligne retour vente |  |  |  |  |
| `SRDQTYSTU_0` | Quantité retour ventes US |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CLCAMT7_0` | Base de calcul numéro 7 pour taxe |  |  |  |  |
| `CLCAMT3_0` | Base de calcul numéro 3 pour taxe |  |  |  |  |
| `RTNDAT_0` | Date retour |  |  |  |  |
| `RTNREN_0` | Motif retour |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `PNDLIN_0` | Ligne |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `LINPRNFLG_0` | Ligne imprimée |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `CLCAMT1_0` | Base de calcul numéro 1 pour taxe |  |  |  |  |
| `CLCAMT2_0` | Base de calcul numéro 2 pour taxe |  |  |  |  |
| `POQSEQ_0` | Numéro séquence cde achat |  |  |  |  |
| `QTYUOM_0` | Quantité retour |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `CPRCUR_0` | Devise |  |  |  |  |
| `NETCUR_0` | Devise |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `BPSNDE_0` | Numéro bon livraison fournisseur |  |  |  |  |
| `LINATIAMT_0` | Montant ligne TTC |  |  |  |  |
| `LINSTOFCY_0` | Site expédition |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `UNTWEI_0` | Poids unitaire |  |  |  |  |
| `LINAUTFLG_0` | Flux automatique |  |  |  |  |
| `LINEECFLG_0` | Ligne DEB |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `INVQTYPUU_0` | Quantité facturée UA |  |  |  |  |
| `INVQTYSTU_0` | Quantité facturée US |  |  |  |  |
| `ORDFLG_0` | Réintégration |  |  |  |  |
| `AMTTAXLIN3_0` | Montant taxe 3 |  |  |  |  |
| `DEDTAXLIN1_0` | Taxe déductible 1 |  |  |  |  |
| `DEDTAXLIN2_0` | Taxe déductible 2 |  |  |  |  |
| `DEDTAXLIN3_0` | Taxe déductible 3 |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `BPSINV_0` | Tiers facturant |  |  |  |  |
| `LINPSTDAT_0` | Date extourne |  |  |  |  |
| `ORICRY_0` | Pays destinataire |  |  |  |  |
| `UOMSTUCOE_0` | Coefficient UOM/US |  |  |  |  |
| `LINPURTYP_0` | Type achat |  |  |  |  |
| `BASTAXLIN1_0` | Base taxe 1 |  |  |  |  |
| `TAXISS_0` | Taxe sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe 1 |  |  |  |  |
| `TAXOTH2_0` | Autre taxe 2 |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `POHTYP_0` | Type commande |  |  |  |  |
| `UOM_0` | Unité retour |  |  |  |  |
| `UOMFLG_0` | Retour en UC |  |  |  |  |
| `QTYPUU_0` | Quantité UA |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `POHFCY_0` | Site commande |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `LINTEX_0` | Numéro texte |  |  |  |  |
| `LINAMT_0` | Montant ligne HT |  |  |  |  |
| `ITMKND_0` | Type d'article |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe 1 |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe 2 |  |  |  |  |
| `TAXRCP_0` | Taxe entrée |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `PNHFCY_0` | Site retour |  |  |  |  |
| `PNHNUM_0` | No retour |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CLCAMT4_0,
    CLCAMT5_0,
    CLCAMT6_0,
    LIKQTYCOE_0,
    UOMPUUCOE_0
FROM PRETURND
WHERE -- vos conditions
```

---

## 📚 Ressources

- **[00_GUIDE_LLM.md](./00_GUIDE_LLM.md)** : Guide génération SQL
- **[01_GLOSSAIRE.md](./01_GLOSSAIRE.md)** : Conventions Sage X3
- **[03_RELATIONS.md](./03_RELATIONS.md)** : Relations entre tables
- **[00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md)** : Valeurs d'enums
- **[INDEX.md](./INDEX.md)** : Navigation complète

---

*Documentation générée automatiquement depuis les données réelles de votre ERP*

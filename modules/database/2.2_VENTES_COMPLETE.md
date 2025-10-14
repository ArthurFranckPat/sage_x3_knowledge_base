# 📦 Module VENTES - Documentation Complète

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📊 Statistiques

- **Tables documentées** : 17
- **Champs totaux** : 1,653
- **Source** : Données réelles de votre ERP Sage X3

---

## 📑 Tables du module

- [SDELIVERY](#sdelivery) - Entête de livraison (201 champs)
- [SDELIVERYD](#sdeliveryd) - Détail livraison (151 champs)
- [SDELIVERYNO](#sdeliveryno) - Notification livraison vente (16 champs)
- [SDELIVERYNOD](#sdeliverynod) - Notification livraison vente (16 champs)
- [SINVOICE](#sinvoice) - Factures vente (125 champs)
- [SINVOICED](#sinvoiced) - Détail facture de vente (153 champs)
- [SINVOICEDLOC](#sinvoicedloc) - Détail facture de vente (11 champs)
- [SINVOICELOC](#sinvoiceloc) - Factures vente (14 champs)
- [SINVOICEV](#sinvoicev) - Facture vente valorisation (113 champs)
- [SORDER](#sorder) - Commandes de vente - Entête (202 champs)
- [SORDERC](#sorderc) - Commandes de vente - Cumul A/R (66 champs)
- [SORDERP](#sorderp) - Commandes de vente - Prix (82 champs)
- [SORDERQ](#sorderq) - Commandes de vente - Quantités (161 champs)
- [SQUOTE](#squote) - Entête devis (110 champs)
- [SQUOTED](#squoted) - Détail devis (102 champs)
- [SRETURN](#sreturn) - Entête retour vente (78 champs)
- [SRETURND](#sreturnd) - Détail retour vente (52 champs)

---

## SDELIVERY

**Entête de livraison**

**Nombre de champs** : 201

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDAT_0` | Date création |  |  |  |  |
| `TMPSDHNUM_0` | Livraison n° |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `SISDAT_0` | Date pièce d'extourne |  |  |  |  |
| `XSPHTEX1_0` | Texte entete colisag |  |  |  |  |
| `X4INTIDENT_0` | Interface |  |  |  |  |
| `XGENFACTIS_0` | Ind fact inter soc |  |  |  |  |
| `XMODGFI_0` | Mode gen fact interc |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `CNINAM_0` | Contact facture |  |  |  |  |
| `CRETIM_0` | Heure |  |  |  |  |
| `VTT_0` | Type transact.Vertex |  |  |  |  |
| `PRPTEX2_0` | Texte pied préparation |  |  |  |  |
| `SDHTEX1_0` | Texte entête livraison |  |  |  |  |
| `SDHTEX2_0` | Texte pied livraison |  |  |  |  |
| `TSCCOD_0` | Famille statistique |  |  |  |  |
| `PRITYP_0` | Prix HT/TTC |  |  |  |  |
| `INVDTALIN_0` | Elt fact lig tarif |  |  |  |  |
| `LICPLATE_0` | Immatriculation |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `BPCGRU_0` | Client groupe |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `LINNBR_0` | Nombre lignes |  |  |  |  |
| `DSPTOTQTY_0` | Cumul quantité |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `PRHFCY_0` | Site réception |  |  |  |  |
| `INVDTADSP_0` | Clé Répart |  |  |  |  |
| `INVDTAAMT_0` | % ou mt facturation |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `SIHNUM_0` | No facture |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `BPCLOC_0` | Emplacement client |  |  |  |  |
| `PRNNPR_0` | Bon préparation imprimé |  |  |  |  |
| `X4SDHEXP_0` | Expéditeur |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `PRFNUM_0` | No facture proforma |  |  |  |  |
| `DLVDAT_0` | Date livraison |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `AMTTAX_0` | Montant taxe |  |  |  |  |
| `BASTAX_0` | Base taxe |  |  |  |  |
| `INVPER_0` | Périodicité facturation |  |  |  |  |
| `X4CSCODE_0` | Consultation |  |  |  |  |
| `BPCPYR_0` | Tiers Payeur |  |  |  |  |
| `LBENUM_0` | No étiquette |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `NETWEI_0` | Poids net |  |  |  |  |
| `SDHTYP_0` | Type livraison |  |  |  |  |
| `SHIDAT_0` | Date expédition |  |  |  |  |
| `DLVHOU_0` | Heure livraison |  |  |  |  |
| `LNDRTNDAT_0` | Date retour prêt |  |  |  |  |
| `BPDNAM_0` | Nom client livré |  |  |  |  |
| `BPDCRYNAM_0` | Nom pays livraison |  |  |  |  |
| `CHGTYP_0` | Type cours devise |  |  |  |  |
| `INVDTATYP_0` | Type de valeur |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `CHGRAT_0` | Cours devise |  |  |  |  |
| `PLISTC_0` | Code structure |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SHIHOU_0` | Heure expédition |  |  |  |  |
| `DLVNOT_0` | Montant livré HT |  |  |  |  |
| `DLVATI_0` | Montant livré TTC |  |  |  |  |
| `PACFLG_0` | Colisage réalisé |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `SISNUM_0` | No facture à émettre |  |  |  |  |
| `XBLOCAGE_0` | flag blocage |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires bon livraison |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `DAYLTI_0` | Délai livraison en jours |  |  |  |  |
| `HOULTI_0` | Délai livraison en heures |  |  |  |  |
| `NPRFLG_0` | Impression bon préparation |  |  |  |  |
| `NDEFLG_0` | Impression bon livraison |  |  |  |  |
| `BPDSAT_0` | Etat livraison |  |  |  |  |
| `INVORN_0` | No ordre facture |  |  |  |  |
| `ADRVAL_0` | Validée |  |  |  |  |
| `BPINAM_0` | Nom client facture |  |  |  |  |
| `BPIADDLIG_0` | Adresse facture |  |  |  |  |
| `BPICTY_0` | Ville facture |  |  |  |  |
| `BPDPOSCOD_0` | Code postal livraison |  |  |  |  |
| `BPDCTY_0` | Ville livraison |  |  |  |  |
| `BPDCRY_0` | Pays livraison |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `BPISAT_0` | Etat facture |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `DISCRGTYP_0` | Type de valeur remise/frais |  |  |  |  |
| `X4SDHDEST_0` | Destinataire |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `X4ACHTRART_0` | Article |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `NTRFLG_0` | Impression bon transport |  |  |  |  |
| `PRNNDE_0` | Bon livraison imprimé |  |  |  |  |
| `GROWEI_0` | Poids brut |  |  |  |  |
| `CFMFLG_0` | Validé |  |  |  |  |
| `PRPTEX1_0` | Texte entête préparation |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `DRN_0` | No tournée |  |  |  |  |
| `DUDCLC_0` | Origine calcul échéance |  |  |  |  |
| `IME_0` | Mode facturation |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `BPDADDLIG_0` | Adresse livraison |  |  |  |  |
| `DLVINVNOT_0` | Valorisation HT |  |  |  |  |
| `LND_0` | Prêt |  |  |  |  |
| `ZLIVPART_0` | Livraison partielle |  |  |  |  |
| `RTNLINNBR_0` | Nombre lignes retournées |  |  |  |  |
| `RTNSTA_0` | Etat retour |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `ETD_0` | Heure départ |  |  |  |  |
| `ETA_0` | Heure arrivée |  |  |  |  |
| `SDHCAT_0` | Catégorie livraison |  |  |  |  |
| `ORIFCY_0` | Site origine/émetteur |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `DLVINVATI_0` | Valorisation TTC |  |  |  |  |
| `XVALDAT_0` | Date validation |  |  |  |  |
| `CAI_0` | Numéro CAI |  |  |  |  |
| `DATVLYCAI_0` | Date validité CAI |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `SCO_0` | Pour sous-traitance |  |  |  |  |
| `GLBDOCTYP_0` | Type document global |  |  |  |  |
| `BOLNUM_0` | Numéro BT |  |  |  |  |
| `X4SBI_0` | Self Billing |  |  |  |  |
| `X4TIERSLOG_0` | DESADV Tiers gest. |  |  |  |  |
| `X4SDHNUM_0` | N° BL client |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `DLVINVNOTL_0` | Valorisation HT soc |  |  |  |  |
| `DLVINVATIL_0` | Valorisation TTC soc |  |  |  |  |
| `X_NBEDIT_0` | Nombre de réédition |  |  |  |  |
| `DSPTOTWEI_0` | Cumul poids |  |  |  |  |
| `DSPTOTVOL_0` | Cumul volume |  |  |  |  |
| `ENTCOD_0` | Pièce auto stock |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `X1COLMAN_0` | Colisage manuel |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `BPIPOSCOD_0` | Code postal facture |  |  |  |  |
| `BPICRY_0` | Pays facture |  |  |  |  |
| `BPICRYNAM_0` | Nom pays facture |  |  |  |  |
| `BETFCY_0` | Inter-site |  |  |  |  |
| `VOL_0` | Volume |  |  |  |  |
| `PACNBR_0` | Nombre colis |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `INVFLG_0` | Facturé |  |  |  |  |
| `ZFLGEDISDH_0` | Flag DESADV |  |  |  |  |
| `YNAVETTE_0` | Navette |  |  |  |  |
| `X4SDHENVAUT_0` |  |  |  |  |  |
| `X4FLGDUP_0` | Option transport Dup |  |  |  |  |
| `X4RGOP_0` | Options transport |  |  |  |  |
| `XEXPTRANSB_0` | Date export DMDLOG |  |  |  |  |
| `X4CONTRATMAF_0` | Contrat MAF |  |  |  |  |
| `X4NBRML_0` | Mètres linéaires |  |  |  |  |
| `X4TARACHLCK_0` | Verrou tarif achat |  |  |  |  |
| `X4TARVENLCK_0` | Verrou tarif vente |  |  |  |  |
| `DPEDAT_0` | Date départ |  |  |  |  |
| `TRLLICPLATE_0` | Immat remorque |  |  |  |  |
| `X1NBUM_0` | Nombre Palette |  |  |  |  |
| `GLBDOC_0` | Document global |  |  |  |  |
| `GLBDOCNUM_0` | N° document global |  |  |  |  |
| `GLBDOCDAT_0` | Date document global |  |  |  |  |
| `ATDTCOD_0` | Code AT |  |  |  |  |
| `MANDOC_0` | Document manuel |  |  |  |  |
| `ARVDAT_0` | Date arrivée |  |  |  |  |
| `XDLVDAT_0` | Date arrivée |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SFISSTCOD_0` | Code taxe SST |  |  |  |  |
| `SSTENTCOD_0` | Code exonération NA |  |  |  |  |
| `BPAINV_0` | Code adresse facture |  |  |  |  |
| `DLVNOTL_0` | Montant liv HT soc |  |  |  |  |
| `DLVATIL_0` | Montant liv TTC soc |  |  |  |  |
| `XSITEMAD_0` | Site MAD |  |  |  |  |
| `XDEMDLVREF_0` | Identifiant transp. |  |  |  |  |
| `XSPHTEX2_0` | Texte pied colisage |  |  |  |  |
| `XDATMES_0` | Date message EDI |  |  |  |  |
| `XNUMMES_0` | Numéro message EDI |  |  |  |  |
| `XTIMMES_0` | Heure mess EDI |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4ACHTRTAR_0` | Tarif ach transport |  |  |  |  |
| `X4CMR_0` | CMR |  |  |  |  |
| `X4POIAPP_0` | Poids appliqué |  |  |  |  |
| `X4POIAPPUOM_0` | Unité poids appliqué |  |  |  |  |
| `X4TARTRS_0` | Tarif transporteur |  |  |  |  |
| `XBLEXTERNE_0` | N° BL Externe |  |  |  |  |
| `XEXPEDI_0` | DESADV émis |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDAT_0,
    TMPSDHNUM_0,
    X4NUMDEMAND_0,
    SISDAT_0,
    XSPHTEX1_0
FROM SDELIVERY
WHERE -- vos conditions
```

---

## SDELIVERYD

**Détail livraison**

**Nombre de champs** : 151

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDAT_0` | Date création |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `RCPQTYSTU_0` | Quantité réceptionnée US |  |  |  |  |
| `XFLAGLM_0` | Flag ligne masquée |  |  |  |  |
| `SOPLIN_0` | Ligne commande |  |  |  |  |
| `XDLVTIMFIN_0` | Heure fin réception |  |  |  |  |
| `VTS_0` | Ss-type trans.Vertex |  |  |  |  |
| `VTC_0` | Code transac. Vertex |  |  |  |  |
| `TAXGEOFLG_0` | Flag Geo taxed |  |  |  |  |
| `TAXFLG_0` | Flag taxable |  |  |  |  |
| `TAXREGFLG_0` | Flag taxe enregistré |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `CLCAMT2_0` | Base2 calcul taxe |  |  |  |  |
| `REPCOE_0` | Coef pondération |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `CLCAMT1_0` | Base1 calcul taxe |  |  |  |  |
| `PRPTEX_0` | Texte ligne préparation |  |  |  |  |
| `REP1_0` | Représentant 1 |  |  |  |  |
| `REP2_0` | Représentant 2 |  |  |  |  |
| `DDTANUM_0` | Elt fact lig répart |  |  |  |  |
| `DDTANOT_0` | Elt fact lig répart |  |  |  |  |
| `PRHNUM_0` | Bon préparation |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `QTY_0` | Quantité livrée |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `RTNQTY_0` | Quantité retour |  |  |  |  |
| `SDDTEX_0` | Texte ligne livraison |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `SHIDAT_0` | Date expédition |  |  |  |  |
| `DSPLINFLG_0` | Répartition |  |  |  |  |
| `QTYSTU_0` | Quantité livrée US |  |  |  |  |
| `REPRAT1_0` | Taux commission 1 |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `USEPLC_0` | Lieu consommation |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `XOVELAB_0` | PMP fg m-o |  |  |  |  |
| `XOVESCO_0` | PMP fg s/t |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `RATTAXLIN_0` | Taux de taxe |  |  |  |  |
| `PCKFLG_0` | Colisage |  |  |  |  |
| `VCRSEQORI_0` | No séquence pièce origine |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SOQSEQ_0` | Numéro séquence |  |  |  |  |
| `RTNQTYSTU_0` | Quantité retour US |  |  |  |  |
| `SOHCAT_0` | Catégorie commande |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `XCUSORDREF_0` | Référence commande client |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `ORILIN_0` | Ligne ori gratuit |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `PFM_0` | Marge |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `LINCFMFLG_0` | Ligne validée |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `CPRPRI_0` | Prix revient |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `NDEPRNBOM_0` | Composant imp BL |  |  |  |  |
| `INVPRNBOM_0` | Composant imp Fac |  |  |  |  |
| `NETPRINOT_0` | Prix net HT |  |  |  |  |
| `NETPRIATI_0` | Prix net TTC |  |  |  |  |
| `X4QTYFAC_0` | Quantité facturée |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `SDHCAT_0` | Catégorie livraison |  |  |  |  |
| `UNTWEI_0` | Poids unitaire |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `BASTAXLIN_0` | Montant taxable |  |  |  |  |
| `RCPFLG_0` | Flag de réception |  |  |  |  |
| `XMATCST_0` | PMP matière |  |  |  |  |
| `XMACCST_0` | PMP machine |  |  |  |  |
| `XLABCST_0` | PMP main-d'oeuvre |  |  |  |  |
| `XSCOCST_0` | PMP sous-traitance |  |  |  |  |
| `XOVEMAT_0` | PMP fg matière |  |  |  |  |
| `XOVEMAC_0` | PMP fg machine |  |  |  |  |
| `XSHIDATFIN_0` | Date fin enlèvement |  |  |  |  |
| `XSHITIMDEB_0` | Heure début enlèv |  |  |  |  |
| `XSHITIMFIN_0` | Heure fin enlev |  |  |  |  |
| `XLIGORI_0` | N° ligne d'origine |  |  |  |  |
| `X4DESADVLOG_0` | DESADV tiers log |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine |  |  |  |  |
| `PACQTYSTU_0` | Qté colisée US |  |  |  |  |
| `DSPLINVOL_0` | Volume ligne |  |  |  |  |
| `XTEXT0_0` | Zone/date/heure dist |  |  |  |  |
| `XKANBAN_0` | N° Etiquette KANBAN |  |  |  |  |
| `XDLVDATDEB_0` | Date de besoin |  |  |  |  |
| `DSPLINWEI_0` | Poids ligne |  |  |  |  |
| `LOT_0` | Filtre lot (exclusif) |  |  |  |  |
| `STA_0` | Filtre statuts (exclusif) |  |  |  |  |
| `LOC_0` | Filtre emplacement |  |  |  |  |
| `WRTQTY_0` | Quantité en attente de retour |  |  |  |  |
| `WRTQTYSTU_0` | Quantité en attente de retour US |  |  |  |  |
| `OALQTYSTU_0` | Qté allouée sur la commande US |  |  |  |  |
| `FOCFLG_0` | Gratuit |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `REPRAT2_0` | Taux commission 2 |  |  |  |  |
| `X4FACOK_0` | Facturé |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `XLIGMERORI_0` | N° ligne mère origine |  |  |  |  |
| `XSSLIGORI_0` | N° sous-ligne origine |  |  |  |  |
| `X4RGOPL_0` | Options de transport |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `XDESTFIN_0` | Destination Finale |  |  |  |  |
| `XDESINT_0` | Id ext. destination |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `PRELIN_0` | Ligne préparation |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `XALERT_0` | Flg alert variation |  |  |  |  |
| `XDLVDATFIN_0` | Date fin réception |  |  |  |  |
| `XDLVTIMDEB_0` | Heure début récepti |  |  |  |  |
| `XPNTDECHA_0` | Point déchargement |  |  |  |  |
| `XPNTMONTE_0` | Point de destination |  |  |  |  |
| `XSHIDATDEB_0` | Date déb enlèvement |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDAT_0,
    VACITM_0,
    ITMDES1_0,
    RCPQTYSTU_0,
    XFLAGLM_0
FROM SDELIVERYD
WHERE -- vos conditions
```

---

## SDELIVERYNO

**Notification livraison vente**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `SDNKEY_0` | Clé |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `SDNNUM_0` | Notification |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `SDNNUMREF_0` | Réference |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `NOTDAT_0` | Date notification |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `RCPDAT_0` | Date réception |  |  |  |  |
| `FCY_0` | Site |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    SDNKEY_0,
    CPY_0,
    CREDATTIM_0,
    SDNNUM_0,
    UPDUSR_0
FROM SDELIVERYNO
WHERE -- vos conditions
```

---

## SDELIVERYNOD

**Notification livraison vente**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `RCPSAU_0` | Unité vente |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `SDNNUMREF_0` | Réference |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `SDNLIN_0` | Ligne |  |  |  |  |
| `SDNKEY_0` | Clé |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `RCPQTY_0` | Quantité |  |  |  |  |
| `RCPDAT_0` | Date réception |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SDNNUM_0` | Notification |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    RCPSAU_0,
    SDDLIN_0,
    SDNNUMREF_0,
    AUUID_0
FROM SDELIVERYNOD
WHERE -- vos conditions
```

---

## SINVOICE

**Factures vente**

**Nombre de champs** : 125

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BPAPAY_0` | Adresse tiers |  |  |  |  |
| `DEP_0` | Code escompte agios |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `BPAINV_0` | Adresse |  |  |  |  |
| `ADRVAL_0` | Adresse |  |  |  |  |
| `PERFIN_0` | à |  |  |  |  |
| `FIY_0` | Exercice |  |  |  |  |
| `BPRVCR_0` | Document origine |  |  |  |  |
| `STRDUDDAT_0` | Date échéance |  |  |  |  |
| `XDUDDAT_0` | Date échéance |  |  |  |  |
| `STA_0` | Etat |  |  |  |  |
| `CURTYP_0` | Type de cours |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `QTCACCNUM_0` | No ecr cpt quittance |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DEPRAT_0` | Taux escompte |  |  |  |  |
| `BELVCS_0` | Numéro VCS |  |  |  |  |
| `RCRDAT_0` | Date abonnement |  |  |  |  |
| `RCRNUM_0` | Numéro abonnement |  |  |  |  |
| `UMRNUM_0` | Référence mandat |  |  |  |  |
| `SPADERNUM_0` | Code DER |  |  |  |  |
| `BVRREFNUM_0` | Numéro référence BVR/QR |  |  |  |  |
| `FLD40REN_0` | Champ 40 - motif |  |  |  |  |
| `FLD41REN_0` | Champ 41 - motif |  |  |  |  |
| `CSHVAT_0` | Régime TVA sur encaissements |  |  |  |  |
| `X4SBI_0` | Self Billing |  |  |  |  |
| `CURLED_0` | Devise référentiel |  |  |  |  |
| `RATDIV_0` | Cours diviseur |  |  |  |  |
| `RATMLT_0` | Cours multiplicateur |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `EXEAMTTAX_0` | Montant exonération |  |  |  |  |
| `METCOR_0` | Mode de redressement |  |  |  |  |
| `PJTH_0` | Affaire |  |  |  |  |
| `VATDAT_0` | Date taxe sur avoir |  |  |  |  |
| `AMTNOTL_0` | Montant HT (société) |  |  |  |  |
| `AMTATIL_0` | Montant TTC (société) |  |  |  |  |
| `XPAM_0` | Mode règlement |  |  |  |  |
| `RATDAT_0` | Date cours |  |  |  |  |
| `X4SIHENVAUT_0` |  |  |  |  |  |
| `INVTYPSPA_0` | Type facture espagnole |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `DCLEECNUM_0` | N° déclaration TVA |  |  |  |  |
| `SSTENTCOD_0` | Code exonération NA |  |  |  |  |
| `REVCANSTA_0` | Statut d'annulation |  |  |  |  |
| `BASDEP_0` | Base calcul Esc/Agios |  |  |  |  |
| `POREXPDCL_0` | Déclaration export |  |  |  |  |
| `BPYNAM_0` | Raison sociale tiers payé |  |  |  |  |
| `BPYADDLIG_0` | Ligne adresse tiers payé |  |  |  |  |
| `BPYPOSCOD_0` | Code postal tiers payé |  |  |  |  |
| `BPYCTY_0` | Ville tiers payé |  |  |  |  |
| `BPYSAT_0` | Etat tiers payé |  |  |  |  |
| `BPYCRY_0` | Pays tiers payé |  |  |  |  |
| `BPYCRYNAM_0` | Nom pays tiers payé |  |  |  |  |
| `NBRCPY_0` | Nombre de sociétés |  |  |  |  |
| `LED_0` | Référentiel |  |  |  |  |
| `XDATMES_0` | Date message EDI |  |  |  |  |
| `XNUMMES_0` | Numéro message EDI |  |  |  |  |
| `XTIMMES_0` | Heure mess EDI |  |  |  |  |
| `ISEXTDOC_0` | Document externe |  |  |  |  |
| `AMTATI_0` | Montant TTC |  |  |  |  |
| `XAMTATI_0` | Montant TTC |  |  |  |  |
| `BPR_0` | Tiers |  |  |  |  |
| `SAT_0` | Etat |  |  |  |  |
| `ORIMOD_0` | Module origine |  |  |  |  |
| `BPRDAT_0` | Date origine |  |  |  |  |
| `ACCNUM_0` | Numéro interne |  |  |  |  |
| `ORIDOCNUM_0` | No document origine |  |  |  |  |
| `SIVTYP_0` | Type facture |  |  |  |  |
| `ACCDAT_0` | Date comptable |  |  |  |  |
| `FCTVCR_0` | Quittance |  |  |  |  |
| `DIRINVFLG_0` | Facture directe |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `X4SIHEXP_0` | Expéditeur |  |  |  |  |
| `THEAMTTAX_0` | Montant taxe théorique |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `STRDATSVC_0` | Date début prestation |  |  |  |  |
| `ENDDATSVC_0` | Date fin prestation |  |  |  |  |
| `LASDATSVC_0` | Date dernière compta prestation |  |  |  |  |
| `DES_0` | Commentaires |  |  |  |  |
| `PERDEB_0` | Période du |  |  |  |  |
| `STARPT_0` | Impression |  |  |  |  |
| `BILVCR_0` | No de traite |  |  |  |  |
| `BPRNAM_0` | Raison sociale |  |  |  |  |
| `BPAADDLIG_0` | Ligne adresse |  |  |  |  |
| `CRYNAM_0` | Nom pays |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `AMTNOT_0` | Montant HT |  |  |  |  |
| `XAMTNOT_0` | Montant HT |  |  |  |  |
| `BASTAX_0` | Base taxe |  |  |  |  |
| `POSCOD_0` | Code postal |  |  |  |  |
| `VAC_0` | Régime TVA |  |  |  |  |
| `BPRPAY_0` | Tiers Payeur |  |  |  |  |
| `CREUSR_0` | Auteur création |  |  |  |  |
| `UPDUSR_0` | Auteur modification |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `FCY_0` | Site |  |  |  |  |
| `PER_0` | Période |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CRN_0` | Numéro SIRET |  |  |  |  |
| `TAX_0` | Taxes |  |  |  |  |
| `SNS_0` | Sens |  |  |  |  |
| `X4SIHDEST_0` | Destinataire |  |  |  |  |
| `BPRFCT_0` | Factor |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `GTE_0` | Type de pièce |  |  |  |  |
| `BPRSAC_0` | Collectif |  |  |  |  |
| `JOU_0` | Journal |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `CTY_0` | Ville |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `INVNUM_0` | Numéro facture |  |  |  |  |
| `NBRTAX_0` | Nombre taxes |  |  |  |  |
| `AMTTAX_0` | Montant taxe |  |  |  |  |
| `AMTTAXUSA_0` | Montant taxe |  |  |  |  |
| `FCTVCRFLG_0` | Quittance validée |  |  |  |  |
| `CAI_0` | Numéro CAI |  |  |  |  |
| `DATVLYCAI_0` | Date validité CAI |  |  |  |  |
| `SALPRITYP_0` | Type montant |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BPAPAY_0,
    DEP_0,
    EXPNUM_0,
    BPAINV_0,
    ADRVAL_0
FROM SINVOICE
WHERE -- vos conditions
```

---

## SINVOICED

**Détail facture de vente**

**Nombre de champs** : 153

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XAMTATILIN_0` | Montant TTC |  |  |  |  |
| `DDTANUM_0` | Elt fact lig répart |  |  |  |  |
| `DDTANOT_0` | Elt fact lig répart |  |  |  |  |
| `DDTADEP_0` | Elt fact lig répart |  |  |  |  |
| `NUM_0` | No facture |  |  |  |  |
| `INVDAT_0` | Date facture |  |  |  |  |
| `PITFLG_0` | Gestion des points |  |  |  |  |
| `AMTDEPLIN_0` | Montant escompte |  |  |  |  |
| `SRENUM_0` | Demande de service |  |  |  |  |
| `EECFLOPHY_0` | Flux physique |  |  |  |  |
| `XFLAGLM_0` | Flag ligne masquée |  |  |  |  |
| `VTS_0` | Ss-type trans.Vertex |  |  |  |  |
| `VTC_0` | Code transac. Vertex |  |  |  |  |
| `TAXGEOFLG_0` | Flag Geo taxed |  |  |  |  |
| `TAXFLG_0` | Flag taxable |  |  |  |  |
| `TAXREGFLG_0` | Flag taxe enregistré |  |  |  |  |
| `REPBAS1_0` | Base commission 1 |  |  |  |  |
| `REPBAS2_0` | Base commission 2 |  |  |  |  |
| `REPAMT1_0` | Montant commission 1 |  |  |  |  |
| `REPAMT2_0` | Montant commission 2 |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `CLCAMT2_0` | Base2 calcul taxe |  |  |  |  |
| `REPCOE_0` | Coef pondération |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `CLCAMT1_0` | Base1 calcul taxe |  |  |  |  |
| `INVCNDUPD_0` | Refacturation |  |  |  |  |
| `REP1_0` | Représentant 1 |  |  |  |  |
| `REP2_0` | Représentant 2 |  |  |  |  |
| `AMTNOTLIN_0` | Montant HT |  |  |  |  |
| `XAMTNOTLIN_0` | Montant HT |  |  |  |  |
| `AMTATILIN_0` | Montant TTC |  |  |  |  |
| `XAMTTAXLIN_0` | Montant taxe |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `XSDHNUM_0` | No livraison |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `DSPLINFLG_0` | Répartition |  |  |  |  |
| `REPRAT1_0` | Taux commission 1 |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `SOPLIN_0` | Ligne |  |  |  |  |
| `SIDSEQNUM_0` | Ligne |  |  |  |  |
| `PERNBR_0` | Périodicité |  |  |  |  |
| `PERTYP_0` | Périodicité |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `PRIORD_0` | Prix ordre |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ORILIN_0` | Ligne ori gratuit |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PFM_0` | Marge |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `AMTTAXLIN_0` | Montant taxe |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `SRDLIN_0` | Ligne retour |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `BASTAXLIN_0` | Montant taxable |  |  |  |  |
| `XMATCST_0` | PMP matière |  |  |  |  |
| `XMACCST_0` | PMP machine |  |  |  |  |
| `XLABCST_0` | PMP main-d'oeuvre |  |  |  |  |
| `XSCOCST_0` | PMP sous-traitance |  |  |  |  |
| `XOVEMAT_0` | PMP fg matière |  |  |  |  |
| `XOVEMAC_0` | PMP fg machine |  |  |  |  |
| `XOVELAB_0` | PMP fg m-o |  |  |  |  |
| `XOVESCO_0` | PMP fg s/t |  |  |  |  |
| `SGHNUM_0` | Pièce de transfert |  |  |  |  |
| `RATTAXLIN_0` | Taux de taxe |  |  |  |  |
| `XVATRAT_0` | Taux de taxe |  |  |  |  |
| `LINEECFLG_0` | Ligne DEB |  |  |  |  |
| `SOQSEQ_0` | Numéro séquence |  |  |  |  |
| `QTYSTU_0` | Quantité facturée US |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SIDTEX_0` | Texte ligne |  |  |  |  |
| `ALLTYP_0` | Type allocation |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `INVPRC_0` | Pourcentage |  |  |  |  |
| `REPRAT2_0` | Taux commission 2 |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `CPRPRI_0` | Prix revient |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `VCRINVCNDTYP_0` | Origine échéance |  |  |  |  |
| `CONNUM_0` | N° contrat service |  |  |  |  |
| `INVPRNBOM_0` | Composant imp Fac |  |  |  |  |
| `NETPRINOT_0` | Prix net HT |  |  |  |  |
| `NETPRIATI_0` | Prix net TTC |  |  |  |  |
| `QTY_0` | Quantité facturée |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `SRHNUM_0` | Numéro retour |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SIDPSONUM_0` | Numéro doc affaire |  |  |  |  |
| `XLIGORI_0` | N° ligne d'origine |  |  |  |  |
| `DSPLINWEI_0` | Poids ligne |  |  |  |  |
| `DSPLINVOL_0` | Volume ligne |  |  |  |  |
| `PIDLIN_0` | Ligne facture achat |  |  |  |  |
| `LOT_0` | Filtre lot (exclusif) |  |  |  |  |
| `STA_0` | Filtre statuts (exclusif) |  |  |  |  |
| `SIHORINUM_0` | N° facture |  |  |  |  |
| `AMTLIN_0` | Montant ligne |  |  |  |  |
| `LOC_0` | Filtre emplacement |  |  |  |  |
| `FOCFLG_0` | Gratuit |  |  |  |  |
| `SIDLIN_0` | Ligne facture |  |  |  |  |
| `SIDORILIN_0` | Ligne facture |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `XSSLIGORI_0` | N° sous-ligne origine |  |  |  |  |
| `X4AMTRFA_0` | Montant de la RFA |  |  |  |  |
| `X4CODFICRFA_0` | Code fiche RFA |  |  |  |  |
| `X4PCTRFA_0` | Pourcentage de RFA |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `NEXINVDAT_0` | Date refacturation |  |  |  |  |
| `SVICNUM_0` | Echéances facturation |  |  |  |  |
| `XDESTFIN_0` | Destination Finale |  |  |  |  |
| `XDESINT_0` | Id ext. destination |  |  |  |  |
| `XLIGMERORI_0` | N° ligne mère origine |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SIDORI_0` | Type document origine |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `VCRINVCNDLIN_0` | Ligne échéance |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XAMTATILIN_0,
    DDTANUM_0,
    DDTANOT_0,
    DDTADEP_0,
    NUM_0
FROM SINVOICED
WHERE -- vos conditions
```

---

## SINVOICEDLOC

**Détail facture de vente**

**Nombre de champs** : 11

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AMTATILOCLIN_0` | Montant TTC |  |  |  |  |
| `AMTNOTLOCLIN_0` | Montant HT |  |  |  |  |
| `AMTTAXLOCLIN_0` | Montant taxe |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `BASTAXLOCLIN_0` | Base imposable |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SIDLIN_0` | Ligne facture |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `NUM_0` | Numéro facture |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AMTATILOCLIN_0,
    AMTNOTLOCLIN_0,
    AMTTAXLOCLIN_0,
    CREUSR_0,
    UPDUSR_0
FROM SINVOICEDLOC
WHERE -- vos conditions
```

---

## SINVOICELOC

**Factures vente**

**Nombre de champs** : 14

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AMTATILOC_0` | Montant TTC |  |  |  |  |
| `VATRAT_0` | Taux |  |  |  |  |
| `AMTNOTLOC_0` | Montant HT |  |  |  |  |
| `AMTTAXLOC_0` | Montant taxe |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `BASTAXLOC_0` | Base imposable |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `RATDIV_0` | Cours diviseur |  |  |  |  |
| `RATMLT_0` | Cours multiplicateur |  |  |  |  |
| `TOTAMTTAXLOC_0` | Total taxe |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AMTATILOC_0,
    VATRAT_0,
    AMTNOTLOC_0,
    AMTTAXLOC_0,
    NUM_0
FROM SINVOICELOC
WHERE -- vos conditions
```

---

## SINVOICEV

**Facture vente valorisation**

**Nombre de champs** : 113

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BPINAM_0` | Nom client facture |  |  |  |  |
| `BPDPOSCOD_0` | Code postal livraison |  |  |  |  |
| `BPDCTY_0` | Ville livraison |  |  |  |  |
| `BPDCRY_0` | Pays livraison |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `INSLIN_0` | ligne |  |  |  |  |
| `INVSTA_0` | Etat |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `BPDADDLIG_0` | Adresse livraison |  |  |  |  |
| `SIHTEX1_0` | Texte entête facture |  |  |  |  |
| `SIVTYP_0` | Type facture vente utilisateur |  |  |  |  |
| `ETD_0` | Heure départ |  |  |  |  |
| `ETA_0` | Heure arrivée |  |  |  |  |
| `ORIFCY_0` | Site origine/émetteur |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `XEXPEDI_0` | INVOICE émis |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4DEMTCHOR_0` | Affichage entête |  |  |  |  |
| `SIHNUMEND_0` | Numéro définitif |  |  |  |  |
| `EECNATR_0` | Nature transaction régularisation |  |  |  |  |
| `EECSCHR_0` | Régime DEB régularisation |  |  |  |  |
| `DSPTOTWEI_0` | Cumul poids |  |  |  |  |
| `DSPTOTVOL_0` | Cumul volume |  |  |  |  |
| `PIHNUM_0` | No facture achat |  |  |  |  |
| `SRGLOCDEF_0` | Emplacement Quai |  |  |  |  |
| `ENTCOD_0` | Pièce auto stock |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `CNOREN_0` | Motif avoir |  |  |  |  |
| `PAM_0` | Mode règlement |  |  |  |  |
| `TRLLICPLATE_0` | Immat remorque |  |  |  |  |
| `X_NBEDIT_0` | Nombre d'éditions |  |  |  |  |
| `XTIMEXPINV_0` | Heure export |  |  |  |  |
| `XUSREXPINV_0` | Utilisateur export |  |  |  |  |
| `ARVDAT_0` | Date arrivée |  |  |  |  |
| `DPEDAT_0` | Date départ |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `X4NUMSERV_0` | Suspension du budget |  |  |  |  |
| `X4NUMENG_0` | Réactivation du budget |  |  |  |  |
| `SIHORITYP_0` | Type document origine |  |  |  |  |
| `SFISSTCOD_0` | Code taxe SST |  |  |  |  |
| `SIHCFMFLG_0` | Signature électronique |  |  |  |  |
| `SIHORIDAT_0` | Date origine |  |  |  |  |
| `SIHORINUM_0` | No document origine |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `NUM_0` | No facture |  |  |  |  |
| `INVDAT_0` | Date facture |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `INSATI_0` | Montant TTc acompte |  |  |  |  |
| `SIHORI_0` | Origine document |  |  |  |  |
| `STOMVTFLG_0` | Mvt stock |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `CNINAM_0` | Contact facture |  |  |  |  |
| `CMGNUM_0` | Campagne marketing |  |  |  |  |
| `VTT_0` | Type transact.Vertex |  |  |  |  |
| `SIHTEX2_0` | Texte pied facture |  |  |  |  |
| `PRITYP_0` | Prix HT/TTC |  |  |  |  |
| `STARPT_0` | Impression |  |  |  |  |
| `INVDTALIN_0` | Elt fact lig tarif |  |  |  |  |
| `LICPLATE_0` | Immatriculation |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `BPCGRU_0` | Client groupe |  |  |  |  |
| `DEP_0` | Escompte |  |  |  |  |
| `TSCCOD_0` | Famille statistique |  |  |  |  |
| `LINNBR_0` | Nombre lignes |  |  |  |  |
| `DSPTOTQTY_0` | Cumul quantité |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `INVDTADSP_0` | Clé Répart |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires facture |  |  |  |  |
| `INVDTAAMT_0` | % ou Montant Element de facturation |  |  |  |  |
| `BPRPAY_0` | Tiers Payeur |  |  |  |  |
| `INSORDNUM_0` | No commande |  |  |  |  |
| `BPDNAM_0` | Nom client livré |  |  |  |  |
| `BPDCRYNAM_0` | Nom pays livraison |  |  |  |  |
| `INVDTATYP_0` | Type de valeur |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `PLISTC_0` | Code structure |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `DISCRGTYP_0` | Type de valeur remise/frais |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `BPRFCT_0` | Factor |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `INVREF_0` | Référence |  |  |  |  |
| `BETFCY_0` | Inter-sites |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `INVCNOSTA_0` | Statut avoir sur fac |  |  |  |  |
| `XDATEXPINV_0` | Date export |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `OPGNUM_0` | Opération marketing |  |  |  |  |
| `OPGTYP_0` | Type opération |  |  |  |  |
| `COPNBE_0` | Nombre exemplaires avoir |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `BPDSAT_0` | Etat livraison |  |  |  |  |
| `ADRVAL_0` | Validée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BPINAM_0,
    BPDPOSCOD_0,
    BPDCTY_0,
    BPDCRY_0,
    BPCORD_0
FROM SINVOICEV
WHERE -- vos conditions
```

---

## SORDER

**Commandes de vente - Entête**

**Nombre de champs** : 202

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `HLDSTA_0` | Statut verrouillage |  |  |  |  |
| `HLDCOD_0` | Code verrouillage |  |  |  |  |
| `HLDCODP_0` | Code verrouillage précédent |  |  |  |  |
| `HLDDAT_0` | Date (dé)verrouillage |  |  |  |  |
| `HLDDATP_0` | Date verrouillage précédente |  |  |  |  |
| `HLDTIM_0` | Heure (dé)verrouillage |  |  |  |  |
| `HLDTIMP_0` | Heure verrouillage précédente |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BPAPYR_0` | Adresse payeur |  |  |  |  |
| `ORDNOTL_0` | Mt lignes HT (soc) |  |  |  |  |
| `ORDATIL_0` | Mt lignes TTC (soc) |  |  |  |  |
| `ORDINVNOTL_0` | Valorisation HT (soc) |  |  |  |  |
| `ORDINVATIL_0` | Valorisation TTC (soc) |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `DSPTOTWEI_0` | Cumul poids |  |  |  |  |
| `DSPTOTVOL_0` | Cumul volume |  |  |  |  |
| `INVSTA_0` | Etat facture |  |  |  |  |
| `DLVSTA_0` | Etat liv |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `BPIPOSCOD_0` | Code postal facture |  |  |  |  |
| `BPICRY_0` | Pays facture |  |  |  |  |
| `BPICRYNAM_0` | Nom pays facture |  |  |  |  |
| `OCNPRN_0` | ARC imprimé |  |  |  |  |
| `SQHNUM_0` | No devis |  |  |  |  |
| `PFMTOT_0` | Marge totale |  |  |  |  |
| `UNL_0` | Déverrouillage |  |  |  |  |
| `BETFCY_0` | Inter-site |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `SFISSTCOD_0` | Code taxe SST |  |  |  |  |
| `CDTSTAP_0` | Etat en-cours précédent |  |  |  |  |
| `X4AVMOTCOM_0` | Trans. entrée divers |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `SSTENTCOD_0` | Code exonération NA |  |  |  |  |
| `BPAORD_0` | Code adresse commande |  |  |  |  |
| `BPAINV_0` | Code adresse facture |  |  |  |  |
| `DRAFTSTATUS_0` | Brouillon |  |  |  |  |
| `DEMDLVHOU_0` | Heure livraison prévue |  |  |  |  |
| `SOHVALDAT_0` | Date de validation |  |  |  |  |
| `ZDATOK_0` | Date liv acceptée |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SOHCFMFLG_0` | Signature électronique |  |  |  |  |
| `INRATI_0` | A facturer TTC |  |  |  |  |
| `INRNOT_0` | A facturer HT |  |  |  |  |
| `INRSCHATI_0` | Echéance facturation TTC |  |  |  |  |
| `INRSCHNOT_0` | Echéance facturation HT |  |  |  |  |
| `SOHNUMEND_0` | Numéro définitif |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `ZBYEDI_0` | Acheteur EDI |  |  |  |  |
| `ZFLGEDI_0` | ARC EDI envoyé |  |  |  |  |
| `ZSUEDI_0` | Fournisseur EDI |  |  |  |  |
| `ZCTAEDI_0` | Contact EDI |  |  |  |  |
| `ZCODLIVEDI_0` | code livraison EDI |  |  |  |  |
| `ZCDECLIFIN_0` | CDE client fin ALDES |  |  |  |  |
| `ZN1CLIFIN_0` | Nom1 cli fin ALDES |  |  |  |  |
| `ZN2CLIFIN_0` | Nom2 cli fin ALDES |  |  |  |  |
| `ZLIEUEXP_0` | Lieu d'expédition |  |  |  |  |
| `X4SOHENVAUT_0` |  |  |  |  |  |
| `X4AVMOT_0` |  |  |  |  |  |
| `X4DEBCTLCON_0` | Débl. ctrl art-cond |  |  |  |  |
| `X4FORREL_0` | Forcer reliquats |  |  |  |  |
| `X4TRTREL_0` | Traitement reliquats |  |  |  |  |
| `XCOLSOUPLE_0` | Colisage souple |  |  |  |  |
| `X4EXCLRFA_0` | Exclusion RFA |  |  |  |  |
| `X1TYPPREPA_0` | Type Prépa |  |  |  |  |
| `X4RGOP_0` | Options transport |  |  |  |  |
| `X1PRECODMAN_0` | Code prépa forcé |  |  |  |  |
| `DRAFTREJ_0` | Rejet brouillon |  |  |  |  |
| `DRAFTREJREN_0` | Motif rejet brouillon |  |  |  |  |
| `X1TYPPREPMAN_0` | Type Prépa forcé |  |  |  |  |
| `X4REGREL_0` | Règle reliquats |  |  |  |  |
| `HLDUSR_0` | Utilisateur (dé)verrouillage |  |  |  |  |
| `HLDUSRP_0` | Utilisateur verrou précédent |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `LASDLVNUM_0` | No dernière livraison |  |  |  |  |
| `LASDLVDAT_0` | Date dernière livraison |  |  |  |  |
| `LASINVNUM_0` | No dernière facture |  |  |  |  |
| `DLRNOT_0` | Montant restant à livrer HT |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `PRFNUM_0` | No facture proforma |  |  |  |  |
| `SHIADECOD_0` | Code expédit/destin |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `BPCPYR_0` | Tiers Payeur |  |  |  |  |
| `XNBEDT_0` | Nombre d'impressions |  |  |  |  |
| `OPGNUM_0` | Opération marketing |  |  |  |  |
| `OPGTYP_0` | Type opération |  |  |  |  |
| `BPCNAM_0` | Nom client commande |  |  |  |  |
| `BPCADDLIG_0` | Adresse commande |  |  |  |  |
| `BPCPOSCOD_0` | Code postal commande |  |  |  |  |
| `BPCCTY_0` | Ville commande |  |  |  |  |
| `BPCCRY_0` | Pays commande |  |  |  |  |
| `BPCCRYNAM_0` | Nom pays commande |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires ARC |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `CLELINNBR_0` | Nombre lignes soldées |  |  |  |  |
| `BPCSAT_0` | Etat commande |  |  |  |  |
| `ORDSTA_0` | Etat commande |  |  |  |  |
| `BPDSAT_0` | Etat livraison |  |  |  |  |
| `LASINVDAT_0` | Date dernière facture |  |  |  |  |
| `DAYLTI_0` | Délai livraison |  |  |  |  |
| `BPINAM_0` | Nom client facture |  |  |  |  |
| `BPIADDLIG_0` | Adresse facture |  |  |  |  |
| `BPICTY_0` | Ville facture |  |  |  |  |
| `BPDPOSCOD_0` | Code postal livraison |  |  |  |  |
| `BPDCTY_0` | Ville livraison |  |  |  |  |
| `BPDCRY_0` | Pays livraison |  |  |  |  |
| `SOHCAT_0` | Catégorie commande |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `CUSORDREF_0` | Référence commande client |  |  |  |  |
| `DEMDLVDAT_0` | Date livraison acceptée |  |  |  |  |
| `VLYDATCON_0` | Date validité |  |  |  |  |
| `ALLTYP_0` | Type allocation |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `ALLSTA_0` | Statut allocation |  |  |  |  |
| `ADRVAL_0` | Validé |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `DRN_0` | No tournée |  |  |  |  |
| `DLVPIO_0` | Priorité livraison |  |  |  |  |
| `IME_0` | Mode facturation |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `BPDADDLIG_0` | Adresse livraison |  |  |  |  |
| `ORDINVNOT_0` | Valorisation HT |  |  |  |  |
| `ORDNOT_0` | Mt lignes HT |  |  |  |  |
| `ORDATI_0` | Mt lignes TTC |  |  |  |  |
| `SOHTEX1_0` | Texte entête cde |  |  |  |  |
| `OCNFLG_0` | Impression ARC |  |  |  |  |
| `DME_0` | Livraison partielle |  |  |  |  |
| `ALLLINNBR_0` | Nombre lignes à allouer |  |  |  |  |
| `DLVLINNBR_0` | Nombre lignes livrées |  |  |  |  |
| `ORIFCY_0` | Site origine/émetteur |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `ORDINVATI_0` | Valorisation TTC |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `X4SOHEXP_0` | Expéditeur |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `BPCGRU_0` | Client groupe |  |  |  |  |
| `DEP_0` | Escompte |  |  |  |  |
| `SOHTYP_0` | Type commande |  |  |  |  |
| `REVNUM_0` | No avenant |  |  |  |  |
| `ORDDAT_0` | Date commande |  |  |  |  |
| `APPFLG_0` | Signée |  |  |  |  |
| `LINNBR_0` | Nombre lignes |  |  |  |  |
| `DSPTOTQTY_0` | Cumul quantité |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `INVDTADSP_0` | Clé Répart |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `CNTNAM_0` | Personne à contacter |  |  |  |  |
| `INVLINNBR_0` | Nombre lignes facturées |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CCLREN_0` | Motif solde |  |  |  |  |
| `CCLDAT_0` | Date solde |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `SRENUM_0` | Demande de service |  |  |  |  |
| `VCRINVCNDDAT_0` | Date départ échéance |  |  |  |  |
| `XCMQINT_0` | Contremarque interne |  |  |  |  |
| `XMODGFI_0` | Mode gen fact interc |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `CNINAM_0` | Contact facture |  |  |  |  |
| `CMGNUM_0` | Campagne marketing |  |  |  |  |
| `VTT_0` | Type transact.Vertex |  |  |  |  |
| `SOHTEX2_0` | Texte pied cde |  |  |  |  |
| `TSCCOD_0` | Famille statistique |  |  |  |  |
| `PRITYP_0` | Prix HT/TTC |  |  |  |  |
| `INVDTALIN_0` | Elt fact lig tarif |  |  |  |  |
| `AMTTAX_0` | Montant taxe |  |  |  |  |
| `BASTAX_0` | Base taxe |  |  |  |  |
| `INVDTAAMT_0` | % ou Montant Element de facturation |  |  |  |  |
| `ORDCLE_0` | Autorisation solde commande |  |  |  |  |
| `ODL_0` | 1 commande par livraison |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `SDHTYP_0` | Type livraison |  |  |  |  |
| `SHIDAT_0` | Date expédition |  |  |  |  |
| `LNDRTNDAT_0` | Date retour prêt |  |  |  |  |
| `BPDNAM_0` | Nom client livré |  |  |  |  |
| `BPDCRYNAM_0` | Nom pays livraison |  |  |  |  |
| `CHGTYP_0` | Type cours devise |  |  |  |  |
| `INVDTATYP_0` | Type de valeur |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `CHGRAT_0` | Cours devise |  |  |  |  |
| `PLISTC_0` | Code structure |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `DLRATI_0` | Montant restant à livrer TTC |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `BPISAT_0` | Etat facture |  |  |  |  |
| `CDTSTA_0` | Etat crédit |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `DISCRGTYP_0` | Type de valeur remise/frais |  |  |  |  |
| `Z01STATUT_0` | Statut |  |  |  |  |
| `X4SOHDEST_0` | Destinataire |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |

### Exemple SQL

```sql
SELECT
    HLDSTA_0,
    HLDCOD_0,
    HLDCODP_0,
    HLDDAT_0,
    HLDDATP_0
FROM SORDER
WHERE -- vos conditions
```

---

## SORDERC

**Commandes de vente - Cumul A/R**

**Nombre de champs** : 66

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ORDQTYCUM_0` | Cumul qté commandée |  |  |  |  |
| `EARQTY_0` | Qté A/R calculée |  |  |  |  |
| `EARDAT_0` | Date A/R calculée |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `ITMREVNUM_0` | No avenant |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `EXTAMT_0` | Montant prévu |  |  |  |  |
| `CPLAMT_0` | Montant réalisé |  |  |  |  |
| `EARHOU_0` | Heure A/R calculée |  |  |  |  |
| `EARQTYCUS_0` | Qté A/R client |  |  |  |  |
| `EARDATCUS_0` | Date A/R client |  |  |  |  |
| `EARHOUCUS_0` | Heure A/R client |  |  |  |  |
| `CUMDATEAR_0` | Date départ cumuls client |  |  |  |  |
| `DSPPRC_0` | Eclatement qté hebdo en qtés jours |  |  |  |  |
| `SOCTEX_0` | Texte article |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `DLVQTYCUM_0` | Cumul qté livrée |  |  |  |  |
| `FIMHOR_0` | Horizon ferme |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `USEPLC_0` | Lieu consommation |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `SOPLIN_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `ITMREFBPC_0` | Article-Client |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PLI_0` | Code tarif |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `ITMDESBPC_0` | Désignation article client |  |  |  |  |
| `X4DEVCUM_0` | Ecart |  |  |  |  |
| `X1PRECOD_0` | Code préparation |  |  |  |  |
| `X4STRCUM_0` | Départ |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `CUSORDREF_0` | Référence commande client |  |  |  |  |
| `VLYDATITM_0` | Date validité |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `X4AVMOTCOMD_0` | Trans. entrée divers |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `XFCYMAF_0` | Site MAF |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4CUSCUM_0` | Cumul client |  |  |  |  |
| `X4INTCUM_0` | Cumul interne |  |  |  |  |
| `X4PRCVAR_0` | % variation qté |  |  |  |  |
| `X4PRCVARFLG_0` | Suivi % var. qté |  |  |  |  |
| `X4AVMOTD_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ORDQTYCUM_0,
    EARQTY_0,
    EARDAT_0,
    TSICOD_0,
    ITMREVNUM_0
FROM SORDERC
WHERE -- vos conditions
```

---

## SORDERP

**Commandes de vente - Prix**

**Nombre de champs** : 82

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `REPRAT2_0` | Taux commission 2 |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ZCDECLIFIN_0` | CDE client fin ALDES |  |  |  |  |
| `ZN1CLIFIN_0` | Nom1 cli fin ALDES |  |  |  |  |
| `ZN2CLIFIN_0` | Nom2 cli fin ALDES |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BPCSALPRI_0` | Prix consommateur |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `CLCAMT1_0` | Base1 calcul taxe |  |  |  |  |
| `CLCAMT2_0` | Base2 calcul taxe |  |  |  |  |
| `LINREVNUM_0` | No avenant |  |  |  |  |
| `REPCOE_0` | Coef pondération |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `REP1_0` | Représentant 1 |  |  |  |  |
| `REP2_0` | Représentant 2 |  |  |  |  |
| `SOQSTA_0` | Etat ligne |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `XFLAGLM_0` | Flag ligne masquée |  |  |  |  |
| `PCNTNUM_0` | Numéro de contrat |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `REPRAT1_0` | Taux commission 1 |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `SOPLIN_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `ORILIN_0` | Ligne ori gratuit |  |  |  |  |
| `ITMREFBPC_0` | Article-Client |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PFM_0` | Marge |  |  |  |  |
| `SOPSEQ_0` | Séquence |  |  |  |  |
| `STRDAT_0` | Date début validité |  |  |  |  |
| `ENDDAT_0` | Date fin validité |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SOHCAT_0` | Catégorie commande |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `SQDLIN_0` | Ligne devis |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `CPRPRI_0` | Prix revient |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `CONNUM_0` | N° contrat service |  |  |  |  |
| `XTYPOF_0` | Type OF |  |  |  |  |
| `NETPRINOT_0` | Prix net HT |  |  |  |  |
| `NETPRIATI_0` | Prix net TTC |  |  |  |  |
| `ZLIGORIEDI_0` | Ligne d'origine |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `X4SAVLIV_0` | Livré |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `FOCFLG_0` | Gratuit |  |  |  |  |
| `SQHNUM_0` | No devis |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |

### Exemple SQL

```sql
SELECT
    DISCRGREN7_0,
    DISCRGREN8_0,
    DISCRGREN9_0,
    REPRAT2_0,
    DISCRGVAL6_0
FROM SORDERP
WHERE -- vos conditions
```

---

## SORDERQ

**Commandes de vente - Quantités**

**Nombre de champs** : 161

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XDLVDATFIN_0` | Date fin réception |  |  |  |  |
| `XDLVTIMDEB_0` | Heure début récepti |  |  |  |  |
| `XPNTDECHA_0` | Point déchargement |  |  |  |  |
| `XPNTMONTE_0` | Point de destination |  |  |  |  |
| `XSHIDATDEB_0` | Date déb enlèvement |  |  |  |  |
| `XSHIDATFIN_0` | Date fin enlèvement |  |  |  |  |
| `XSHITIMDEB_0` | Heure début enlèv |  |  |  |  |
| `XSHITIMFIN_0` | Heure fin enlev |  |  |  |  |
| `XSVCEMET_0` | Service émetteur |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4HDEMDLVD_0` | Arrêt temps hors production |  |  |  |  |
| `ODLQTY_0` | Quantité en traitement |  |  |  |  |
| `ODLQTYSTU_0` | Quantité en traitement US |  |  |  |  |
| `XNIVENG_0` | Niveau d'engagement |  |  |  |  |
| `XNBETIIMPP_0` | Nb étiq. imp. Prod |  |  |  |  |
| `SOQPSONUM_0` | Numéro doc affaire |  |  |  |  |
| `LPRQTYSTU_0` | Quantité sur liste préparation US |  |  |  |  |
| `XLIGORI_0` | N° ligne d'origine |  |  |  |  |
| `FMI_0` | Origine article |  |  |  |  |
| `LPRQTY_0` | Quantité sur liste de préparation |  |  |  |  |
| `PRGBILNUM_0` | Numéro plan facturation |  |  |  |  |
| `X4AVMOTD_0` |  |  |  |  |  |
| `XSSLIGORI_0` | N° sous-ligne origine |  |  |  |  |
| `X4RGOPL_0` | Options de transport |  |  |  |  |
| `X4EXCLRFAD_0` | Exclusion RFA |  |  |  |  |
| `XDESTFIN_0` | Destination Finale |  |  |  |  |
| `XDESINT_0` | Id ext. destination |  |  |  |  |
| `XLIGMERORI_0` | N° ligne mère origine |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MAXDLVDAT_0` | Date max livraison |  |  |  |  |
| `USELIMDAT_0` | Date limite consom. |  |  |  |  |
| `X4HSHIDAT_0` | Pointage départ |  |  |  |  |
| `DEMDLVREF_0` | Réf dem livraison |  |  |  |  |
| `RATTAXLIN_0` | Taux de taxe |  |  |  |  |
| `ORIQTY_0` | Qté cde initiale |  |  |  |  |
| `PRECOD_0` | Code préparation |  |  |  |  |
| `SOQSEQ_0` | Numéro séquence |  |  |  |  |
| `POQSEQ_0` | Numéro séquence |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `INVQTYSTU_0` | Quantité facturée US |  |  |  |  |
| `QTYSTU_0` | Quantité commandée US |  |  |  |  |
| `SOHCAT_0` | Catégorie commande |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `DEMDLVDAT_0` | Date livraison acceptée |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ALLTYP_0` | Type allocation |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `DRN_0` | No tournée |  |  |  |  |
| `DLVPIO_0` | Priorité livraison |  |  |  |  |
| `DAYLTI_0` | Délai liv en jours |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `NDEPRNBOM_0` | Composant imp BL |  |  |  |  |
| `INVPRNBOM_0` | Composant imp Fac |  |  |  |  |
| `INVQTY_0` | Quantité facturée |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `X4QTYINI_0` | Quantité initiale |  |  |  |  |
| `TDLQTYSTU_0` | Quantité à livrer US |  |  |  |  |
| `BASTAXLIN_0` | Montant taxable |  |  |  |  |
| `OCNPRNBOM_0` | Composant imp ARC |  |  |  |  |
| `XTEXT0_0` | Zone/date/heure dist |  |  |  |  |
| `XKANBAN_0` | N° Etiquette KANBAN |  |  |  |  |
| `XQTERET_0` | Qté retard |  |  |  |  |
| `OPRQTY_0` | Quantité en préparation |  |  |  |  |
| `PREQTY_0` | Quantité préparée |  |  |  |  |
| `OPRQTYSTU_0` | Quantité en préparation US |  |  |  |  |
| `PREQTYSTU_0` | Quantité préparée US |  |  |  |  |
| `XDLVDATDEB_0` | Date de besoin |  |  |  |  |
| `XNBETIIMP_0` | Nb étiq. imp. Bouc |  |  |  |  |
| `XPCUSAUC01_0` | Capacité UC |  |  |  |  |
| `XPLDELIV_0` | Bâtiment |  |  |  |  |
| `DSPLINWEI_0` | Poids ligne |  |  |  |  |
| `DSPLINVOL_0` | Volume ligne |  |  |  |  |
| `INVAMT_0` | Montant facturé |  |  |  |  |
| `DLVPIOCMP_0` | Complément priorité livraison |  |  |  |  |
| `LOT_0` | Filtre lot (exclusif) |  |  |  |  |
| `STA_0` | Filtre statuts (exclusif) |  |  |  |  |
| `XREGROUP_0` | Critère regroupement |  |  |  |  |
| `LOC_0` | Filtre emplacement |  |  |  |  |
| `MON_0` | Mois |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `YEA_0` | Année |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `X4FACTURE_0` | Facturé |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `X4AVMOTCOMD_0` | Trans. entrée divers |  |  |  |  |
| `MAXDLVHOU_0` | Heure max livraison |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `XDATMES_0` | Date message EDI |  |  |  |  |
| `XNUMMES_0` | Numéro message EDI |  |  |  |  |
| `XPCU1ITM_0` | Code UC |  |  |  |  |
| `XTIMMES_0` | Heure mess EDI |  |  |  |  |
| `XALERT_0` | Flg alert variation |  |  |  |  |
| `FMINUM_0` | No contremarque |  |  |  |  |
| `FMILIN_0` | Ligne contremarque |  |  |  |  |
| `FMISEQ_0` | No seq contremarque |  |  |  |  |
| `ORDDAT_0` | Date commande |  |  |  |  |
| `LINORDNUM_0` | Ligne origine |  |  |  |  |
| `DEMDLVHOU_0` | Heure liv demandée |  |  |  |  |
| `SOQSTA_0` | Etat ligne |  |  |  |  |
| `DDTANUM_0` | Elt fact lig répart |  |  |  |  |
| `DDTANOT_0` | Elt fact lig répart |  |  |  |  |
| `DLVDAY_0` | Jour |  |  |  |  |
| `CAD_0` | Cadencement |  |  |  |  |
| `WEE_0` | No semaine |  |  |  |  |
| `YNBCOLIS_0` | Nombre de colis |  |  |  |  |
| `DEMSTA_0` | Statut ordre |  |  |  |  |
| `SHTQTY_0` | Quantité en rupture |  |  |  |  |
| `SHTQTYSTU_0` | Quantité en rupture US |  |  |  |  |
| `INVFLG_0` | Facturée |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `PITFLG_0` | Gestion des points |  |  |  |  |
| `CCLREN_0` | Motif solde |  |  |  |  |
| `CCLDAT_0` | Date solde |  |  |  |  |
| `XFLGRET_0` | Delai |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `XCMQINT_0` | Contremarque interne |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `XDLVTIMFIN_0` | Heure fin réception |  |  |  |  |
| `VTS_0` | Ss-type trans.Vertex |  |  |  |  |
| `VTC_0` | Code transac. Vertex |  |  |  |  |
| `TAXGEOFLG_0` | Flag Geo taxed |  |  |  |  |
| `TAXFLG_0` | Flag taxable |  |  |  |  |
| `TAXREGFLG_0` | Flag taxe enregistré |  |  |  |  |
| `SOQTEX_0` | Texte ligne commande |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `SHIDAT_0` | Date expédition |  |  |  |  |
| `DSPLINFLG_0` | Répartition |  |  |  |  |
| `DLVQTYSTU_0` | Quantité livrée US |  |  |  |  |
| `PERSTRDAT_0` | Date début période |  |  |  |  |
| `PERENDDAT_0` | Date fin période |  |  |  |  |
| `PERNBRDAY_0` | Nombre jours période |  |  |  |  |
| `USEPLC_0` | Lieu consommation |  |  |  |  |
| `QTY_0` | Quantité comandée |  |  |  |  |
| `ALLQTY_0` | Quantité allouée |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `SOPLIN_0` | Ligne |  |  |  |  |
| `SOQSEQNUM_0` | Ligne |  |  |  |  |
| `SHIHOU_0` | Heure expédition |  |  |  |  |
| `EXTDLVDAT_0` | Date livraison prévue |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `DEMNUM_0` | No ordre |  |  |  |  |
| `ALLQTYSTU_0` | Quantité allouée US |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `Z01STATUT_0` | Statut |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `TDLQTY_0` | Quantité à livrer |  |  |  |  |
| `DLVQTY_0` | Quantité livrée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XDLVDATFIN_0,
    XDLVTIMDEB_0,
    XPNTDECHA_0,
    XPNTMONTE_0,
    XSHIDATDEB_0
FROM SORDERQ
WHERE -- vos conditions
```

---

## SQUOTE

**Entête devis**

**Nombre de champs** : 110

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `SOHTYP_0` | Type commande |  |  |  |  |
| `REVNUM_0` | No avenant |  |  |  |  |
| `ORDDAT_0` | Date commande |  |  |  |  |
| `LINNBR_0` | Nombre lignes |  |  |  |  |
| `DSPTOTQTY_0` | Cumul quantité |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `INVDTADSP_0` | Clé Répart |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `X4SQHEXP_0` | Expéditeur |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `PRFNUM_0` | No facture proforma |  |  |  |  |
| `AMTTAX_0` | Montant taxe |  |  |  |  |
| `BASTAX_0` | Base taxe |  |  |  |  |
| `INVDTAAMT_0` | % ou Montant Element de facturation |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `BPDNAM_0` | Nom client livré |  |  |  |  |
| `BPDCRYNAM_0` | Nom pays livraison |  |  |  |  |
| `CHGTYP_0` | Type cours devise |  |  |  |  |
| `INVDTATYP_0` | Type de valeur |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `CHGRAT_0` | Cours devise |  |  |  |  |
| `PLISTC_0` | Code structure |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `XSQHTYP_0` | Type |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `BPCNAM_0` | Nom client devis |  |  |  |  |
| `BPCPOSCOD_0` | Code postal devis |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `VTT_0` | Type transact.Vertex |  |  |  |  |
| `SQHTEX2_0` | Texte pied devis |  |  |  |  |
| `PRITYP_0` | Prix HT/TTC |  |  |  |  |
| `INVDTALIN_0` | Elt fact lig tarif |  |  |  |  |
| `DEP_0` | Escompte |  |  |  |  |
| `ORDNBR_0` | Nombre commandes |  |  |  |  |
| `CUSQUOREF_0` | Référence devis client |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `BPDADDLIG_0` | Adresse livraison |  |  |  |  |
| `QUOINVNOT_0` | Valorisation HT |  |  |  |  |
| `QUONOT_0` | Mt lignes HT |  |  |  |  |
| `QUOATI_0` | Mt lignes TTC |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `QUOINVATI_0` | Valorisation TTC |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires devis |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `DAYLTI_0` | Délai livraison en jours |  |  |  |  |
| `BPCSAT_0` | Etat commande |  |  |  |  |
| `BPDSAT_0` | Etat livraison |  |  |  |  |
| `BPDPOSCOD_0` | Code postal livraison |  |  |  |  |
| `BPDCTY_0` | Ville livraison |  |  |  |  |
| `BPDCRY_0` | Pays livraison |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `ADRVAL_0` | Validée |  |  |  |  |
| `SQHTYP_0` | Type devis |  |  |  |  |
| `QUODAT_0` | Date devis |  |  |  |  |
| `VLYDAT_0` | Date validité |  |  |  |  |
| `BPCADDLIG_0` | Adresse devis |  |  |  |  |
| `BPCCTY_0` | Ville devis |  |  |  |  |
| `BPCCRY_0` | Pays devis |  |  |  |  |
| `BPCCRYNAM_0` | Nom pays devis |  |  |  |  |
| `PBYPRC_0` | % probabilité |  |  |  |  |
| `QUOPRN_0` | Devis imprimé |  |  |  |  |
| `CFMLINNBR_0` | Nb lignes validées |  |  |  |  |
| `QUOSTA_0` | Etat devis |  |  |  |  |
| `SQHTEX1_0` | Texte entête devis |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `DISCRGTYP_0` | Type de valeur remise/frais |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `X4SQHDEST_0` | Destinataire |  |  |  |  |
| `BPCORD_0` | Client |  |  |  |  |
| `X4SQHENVAUT_0` |  |  |  |  |  |
| `X4DEBCTLCON_0` | Débl. ctrl art-cond |  |  |  |  |
| `X4RGOP_0` | Options transport |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SFISSTCOD_0` | Code taxe SST |  |  |  |  |
| `SSTENTCOD_0` | Code exonération NA |  |  |  |  |
| `BPAORD_0` | Code adresse commande |  |  |  |  |
| `APPFLG_0` | Signé |  |  |  |  |
| `SQHVALDAT_0` | Date de validation |  |  |  |  |
| `SQHCFMFLG_0` | Signature électronique |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SQHNUMEND_0` | Numéro définitif |  |  |  |  |
| `QUONOTL_0` | Mt lignes HT (soc) |  |  |  |  |
| `QUOATIL_0` | Mt lignes TTC (soc) |  |  |  |  |
| `QUOINVNOTL_0` | Valorisation HT soc |  |  |  |  |
| `QUOINVATIL_0` | Valorisation TTC soc |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `DSPTOTWEI_0` | Cumul poids |  |  |  |  |
| `DSPTOTVOL_0` | Cumul volume |  |  |  |  |
| `CNCNAM_0` | Contact commande |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `SQHNUM_0` | No devis |  |  |  |  |
| `PFMTOT_0` | Marge totale |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |

### Exemple SQL

```sql
SELECT
    SOHTYP_0,
    REVNUM_0,
    ORDDAT_0,
    LINNBR_0,
    DSPTOTQTY_0
FROM SQUOTE
WHERE -- vos conditions
```

---

## SQUOTED

**Détail devis**

**Nombre de champs** : 102

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CLCAMT2_0` | Base2 calcul taxe |  |  |  |  |
| `LINREVNUM_0` | No avenant |  |  |  |  |
| `REPCOE_0` | Coef pondération |  |  |  |  |
| `GROPRI_0` | Prix brut |  |  |  |  |
| `PRIREN_0` | Motif prix |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `CLCAMT1_0` | Base1 calcul taxe |  |  |  |  |
| `REP1_0` | Représentant 1 |  |  |  |  |
| `REP2_0` | Représentant 2 |  |  |  |  |
| `DDTANUM_0` | Elt fact lig répart |  |  |  |  |
| `DDTANOT_0` | Elt fact lig répart |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DSPWEU_0` | Unité poids |  |  |  |  |
| `PFM_0` | Marge |  |  |  |  |
| `DSPVOU_0` | Unité Volume |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `SOHNUM_0` | No commande |  |  |  |  |
| `DSPLINFLG_0` | Répartition |  |  |  |  |
| `REPRAT1_0` | Taux commission 1 |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `ORDQTY_0` | Qté commandée |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `SOPLIN_0` | Ligne |  |  |  |  |
| `SQDSEQNUM_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `ORILIN_0` | Ligne origine gratuit |  |  |  |  |
| `SQDTEX_0` | Texte ligne devis |  |  |  |  |
| `XQUONUM_0` | N° devis |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `XFLAGLM_0` | Flag ligne masquée |  |  |  |  |
| `VTS_0` | Ss-type trans.Vertex |  |  |  |  |
| `VTC_0` | Code transac. Vertex |  |  |  |  |
| `TAXGEOFLG_0` | Flag Geo taxed |  |  |  |  |
| `TAXFLG_0` | Flag taxable |  |  |  |  |
| `TAXREGFLG_0` | Flag taxe enregistré |  |  |  |  |
| `CPRPRI_0` | Prix revient |  |  |  |  |
| `DAYLTI_0` | Délai liv en jours |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `NDEPRNBOM_0` | Composant imp BL |  |  |  |  |
| `INVPRNBOM_0` | Composant imp Fac |  |  |  |  |
| `NETPRINOT_0` | Prix net HT |  |  |  |  |
| `NETPRIATI_0` | Prix net TTC |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `X4SAVLIV_0` | Livré |  |  |  |  |
| `BASTAXLIN_0` | Montant taxable |  |  |  |  |
| `OCNPRNBOM_0` | Composant imp ARC |  |  |  |  |
| `RATTAXLIN_0` | Taux de taxe |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ORDFLG_0` | Commandée |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `QUODAT_0` | Date devis |  |  |  |  |
| `SQDLIN_0` | Ligne devis |  |  |  |  |
| `QTY_0` | Quantité devis |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `X4RGOPL_0` | Options de transport |  |  |  |  |
| `XDESTFIN_0` | Destination Finale |  |  |  |  |
| `XDESINT_0` | Id ext. destination |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SQDPSONUM_0` | Numéro doc affaire |  |  |  |  |
| `DSPLINWEI_0` | Poids ligne |  |  |  |  |
| `DSPLINVOL_0` | Volume ligne |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `FOCFLG_0` | Gratuit |  |  |  |  |
| `SQHNUM_0` | No devis |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `DISCRGREN8_0` | Motif8 remise/frais |  |  |  |  |
| `DISCRGREN9_0` | Motif9 remise/frais |  |  |  |  |
| `REPRAT2_0` | Taux commission 2 |  |  |  |  |
| `X4FACTURE_0` | Facturé |  |  |  |  |
| `DISCRGVAL7_0` | Valeur7 remise/frais |  |  |  |  |
| `DISCRGVAL8_0` | Valeur8 remise/frais |  |  |  |  |
| `DISCRGVAL9_0` | Valeur9 remise/frais |  |  |  |  |
| `DISCRGREN1_0` | Motif1 remise/frais |  |  |  |  |
| `DISCRGREN2_0` | Motif2 remise/frais |  |  |  |  |
| `DISCRGREN3_0` | Motif3 remise/frais |  |  |  |  |
| `DISCRGREN4_0` | Motif4 remise/frais |  |  |  |  |
| `DISCRGREN5_0` | Motif5 remise/frais |  |  |  |  |
| `DISCRGREN6_0` | Motif6 Remise/frais |  |  |  |  |
| `DISCRGREN7_0` | Motif7 remise/frais |  |  |  |  |
| `DISCRGVAL1_0` | Valeur1 remise/frais |  |  |  |  |
| `DISCRGVAL2_0` | Valeur2 remise/frais |  |  |  |  |
| `DISCRGVAL3_0` | Valeur3 remise/frais |  |  |  |  |
| `DISCRGVAL4_0` | Valeur4 remise/frais |  |  |  |  |
| `DISCRGVAL5_0` | Valeur5 remise/frais |  |  |  |  |
| `DISCRGVAL6_0` | Valeur6 remise/frais |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CLCAMT2_0,
    LINREVNUM_0,
    REPCOE_0,
    GROPRI_0,
    PRIREN_0
FROM SQUOTED
WHERE -- vos conditions
```

---

## SRETURN

**Entête retour vente**

**Nombre de champs** : 78

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XGENAVOIS_0` | Ind fact inter soc |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `LICPLATER_0` | Immatriculation |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `BPIEECNUM_0` | Identification UE |  |  |  |  |
| `EECNUMDEB_0` | DEB |  |  |  |  |
| `STOFCY_0` | Site réception |  |  |  |  |
| `EECTRN_0` | Mode transp. DEB |  |  |  |  |
| `EECNAT_0` | Nature transaction |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `DLVDAT_0` | Date livraison |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `BPDNAM_0` | Nom client livré |  |  |  |  |
| `BPDCRYNAM_0` | Nom pays livraison |  |  |  |  |
| `RTNDAT_0` | Date retour |  |  |  |  |
| `PLISTC_0` | Code structure |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `TMPSRHNUM_0` | No retour |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `SRHTEX1_0` | Texte entête retour |  |  |  |  |
| `SRHTEX2_0` | Texte pied retour |  |  |  |  |
| `ETDR_0` | Heure départ |  |  |  |  |
| `ETAR_0` | Heure arrivée |  |  |  |  |
| `SRHNUM_0` | Numéro retour |  |  |  |  |
| `EXYDAT_0` | Date expiration |  |  |  |  |
| `ORIFCY_0` | Site origine/émetteur |  |  |  |  |
| `AUZUSR_0` | Opérateur autorisé |  |  |  |  |
| `EXTRTNDAT_0` | Date retour prévue |  |  |  |  |
| `LNDRTN_0` | Retour de prêt |  |  |  |  |
| `SDHNUM_0` | No livraison prêt |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `BPDSAT_0` | Etat livraison |  |  |  |  |
| `BPDPOSCOD_0` | Code postal livraison |  |  |  |  |
| `BPDCTY_0` | Ville livraison |  |  |  |  |
| `BPDCRY_0` | Pays livraison |  |  |  |  |
| `BPCORD_0` | Client commande |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCYDLV_0` | Site expédition |  |  |  |  |
| `SALFCY_0` | Site vente |  |  |  |  |
| `X4RGOP_0` | Options transport |  |  |  |  |
| `XEXPTRANSR_0` | Date exp DMDLOG |  |  |  |  |
| `TRLLICPLATER_0` | Immat remorque |  |  |  |  |
| `GLBDOCR_0` | Document global |  |  |  |  |
| `GLBDOCNUMR_0` | N° document global |  |  |  |  |
| `GLBDOCDATR_0` | Date document global |  |  |  |  |
| `ATDTCODR_0` | Code AT |  |  |  |  |
| `MANDOCR_0` | Document manuel |  |  |  |  |
| `ARVDATR_0` | Date arrivée |  |  |  |  |
| `DPEDATR_0` | Date départ |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `SRHCAT_0` | Catégorie retour |  |  |  |  |
| `SRHCFMFLG_0` | Signé |  |  |  |  |
| `SRHTYP_0` | Type retour |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `GLBDOCTYPR_0` | Type document global |  |  |  |  |
| `SCORTN_0` | Retours matière sous traitance |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `SRGLOCDEF_0` | Emplacement Quai |  |  |  |  |
| `ENTCOD_0` | Pièce auto stock |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `CNDNAM_0` | Contact livraison |  |  |  |  |
| `BETFCY_0` | Inter-site |  |  |  |  |
| `EECSCH_0` | Régime DEB |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `BPAADD_0` | Adresse livraison |  |  |  |  |
| `BPDADDLIG_0` | Adresse livraison |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XGENAVOIS_0,
    TRSFAM_0,
    LICPLATER_0,
    BPCINV_0,
    BPIEECNUM_0
FROM SRETURN
WHERE -- vos conditions
```

---

## SRETURND

**Détail retour vente**

**Nombre de champs** : 52

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `X4SREMAC_0` | Parc |  |  |  |  |
| `STOFCY_0` | Site réception |  |  |  |  |
| `RTNCNOFLG_0` | Retour faisant objet d'un avoir |  |  |  |  |
| `DLVQTY_0` | Quantité livrée |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `QTY_0` | Quantité retour |  |  |  |  |
| `SDHNUM_0` | No livraison |  |  |  |  |
| `RTNDAT_0` | Date retour |  |  |  |  |
| `RTNREN_0` | Motif retour |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `PRIORD_0` | Prix ordre |  |  |  |  |
| `ITMDES1_0` | Désignation article |  |  |  |  |
| `PNHNUM_0` | No retour fournisseur |  |  |  |  |
| `PNDLIN_0` | Ligne retour fournisseur |  |  |  |  |
| `EXTQTYSTU_0` | Quantité retour prévue US |  |  |  |  |
| `SRDTEX_0` | Texte ligne retour |  |  |  |  |
| `NETPRINOT_0` | Prix net HT |  |  |  |  |
| `NETPRIATI_0` | Prix net TTC |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `SRHNUM_0` | Numéro retour |  |  |  |  |
| `SRDLIN_0` | Ligne retour |  |  |  |  |
| `RTNSTOUPD_0` | Retour stock réalisé |  |  |  |  |
| `RTNINVUPD_0` | Retour déduit de la facture |  |  |  |  |
| `ORDUPD_0` | Commande réactivée |  |  |  |  |
| `ITMDES_0` | Désignation article traduite |  |  |  |  |
| `SCSNUM_0` | No avoir à émettre |  |  |  |  |
| `SCSLIN_0` | ligne AVE |  |  |  |  |
| `EXTQTY_0` | Quantité retour prévue |  |  |  |  |
| `SIHNUM_0` | No avoir |  |  |  |  |
| `SIDLIN_0` | Ligne avoir |  |  |  |  |
| `QTYSTU_0` | Quantité retour US |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `NETPRI_0` | Prix net |  |  |  |  |
| `X4RGOPL_0` | Options de transport |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SRHCAT_0` | Catégorie retour |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SDDLIN_0` | Ligne livraison |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `SCSDAT_0` | Date pièce d'extourne |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4NUMDEMAND_0,
    X4SREMAC_0,
    STOFCY_0,
    RTNCNOFLG_0,
    DLVQTY_0
FROM SRETURND
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

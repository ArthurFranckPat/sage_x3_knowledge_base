# 📦 Module DONNEES_BASE - Documentation Complète

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📊 Statistiques

- **Tables documentées** : 38
- **Champs totaux** : 2,162
- **Source** : Données réelles de votre ERP Sage X3

---

## 📑 Tables du module

- [BPADDRESS](#bpaddress) - Adresses (39 champs)
- [BPARTNER](#bpartner) - Business Partner (59 champs)
- [BPCARRIER](#bpcarrier) - Transporteurs (41 champs)
- [BPCCATEG](#bpccateg) - Catégorie client (71 champs)
- [BPCINVLIG](#bpcinvlig) - Lignes factures tiers client (63 champs)
- [BPCINVLIGA](#bpcinvliga) - Ligne analytique tiers client (16 champs)
- [BPCINVLIGLOC](#bpcinvligloc) - Lignes factures tiers client (10 champs)
- [BPCINVVAT](#bpcinvvat) - Taux de taxes (10 champs)
- [BPCUSTMVT](#bpcustmvt) - Mouvements clients (67 champs)
- [BPCUSTOMER](#bpcustomer) - Clients (121 champs)
- [BPSCATEG](#bpscateg) - Catégorie fournisseur (78 champs)
- [BPSHISUPLN](#bpshisupln) - Adresses d'expéditions (11 champs)
- [BPSHISUPP](#bpshisupp) - Fournisseurs expéditeurs (28 champs)
- [BPSINVLIG](#bpsinvlig) - Lignes factures tiers fourn (56 champs)
- [BPSINVLIGA](#bpsinvliga) - Ligne analytique tiers fourn (16 champs)
- [BPSUPPLIER](#bpsupplier) - Fournisseurs (117 champs)
- [BPSUPPMVT](#bpsuppmvt) - Mouvements fournisseurs (33 champs)
- [FACILITY](#facility) - Sites (76 champs)
- [GACCOUNT](#gaccount) - Comptes (93 champs)
- [GACCOUNTA](#gaccounta) - Comptes (table additionnelle) (8 champs)
- [ITMABCWRK](#itmabcwrk) - Calcul classe ABC (15 champs)
- [ITMBOM](#itmbom) - Articles - Nomenclatures (17 champs)
- [ITMBPC](#itmbpc) - Articles - Clients (50 champs)
- [ITMBPS](#itmbps) - Articles-Fournisseurs (49 champs)
- [ITMBPSFCY](#itmbpsfcy) - Site article fournisseur (38 champs)
- [ITMCATEG](#itmcateg) - Catégorie article (202 champs)
- [ITMCOMP](#itmcomp) - Articles concurrents (24 champs)
- [ITMCOST](#itmcost) - Articles - Coûts (81 champs)
- [ITMCOSTPIT](#itmcostpit) - Articles-coûts instant T (32 champs)
- [ITMCPPLNK](#itmcpplnk) - Lien Article/Concurrents (7 champs)
- [ITMCPTVER](#itmcptver) - Paramétrage compteurs versions (16 champs)
- [ITMCUSNOM](#itmcusnom) - Nomenclature NC8 articles (13 champs)
- [ITMFACILIT](#itmfacilit) - Articles - Sites (156 champs)
- [ITMMASTER](#itmmaster) - Articles (220 champs)
- [ITMMVT](#itmmvt) - Cumuls Article-Site (116 champs)
- [ITMMVTHIS](#itmmvthis) - Historique cumuls Article-Site (48 champs)
- [ITMMVTPIT](#itmmvtpit) - Cumuls article-site instant T (29 champs)
- [ITMSALES](#itmsales) - Articles - ventes (36 champs)

---

## BPADDRESS

**Adresses**

**Nombre de champs** : 39

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CRN_0` | Numéro SIRET |  |  |  |  |
| `ADRVAL_0` | Validé |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `GLNCOD_0` | GLN |  |  |  |  |
| `FCYWEB_0` | Site Web |  |  |  |  |
| `XEDICOD_0` | Gestion EDI |  |  |  |  |
| `XEXT2NUM_0` | Boîte à lettre EDI |  |  |  |  |
| `X4VALID_0` | Adresse validée |  |  |  |  |
| `X4ADRFAB_0` | Adresse fabricant |  |  |  |  |
| `X4ADREXP_0` | Adresse d'expédition fournisseur |  |  |  |  |
| `X4EECNUM_0` | Identification CEE expé fournisseur |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4EDIQUAL_0` | Qualifiant EDI |  |  |  |  |
| `FAX_0` | Fax |  |  |  |  |
| `BPAADDLIG_0` | Ligne adresse |  |  |  |  |
| `CRYNAM_0` | Nom pays |  |  |  |  |
| `WEB_0` | Adresse internet |  |  |  |  |
| `MOB_0` | Portable |  |  |  |  |
| `SAT_0` | Etat |  |  |  |  |
| `POSCOD_0` | Code postal |  |  |  |  |
| `CODSEE_0` | Code INSEE |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPADES_0` | Intitulé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `EXTNUM_0` | Identifiant externe |  |  |  |  |
| `BPATYP_0` | Type entité |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `BPANUM_0` | Entité |  |  |  |  |
| `BPAADDFLG_0` | Par défaut |  |  |  |  |
| `TEL_0` | Téléphone |  |  |  |  |
| `BPABID_0` | Par défaut |  |  |  |  |
| `CTY_0` | Ville |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `XSRVFAC_0` | Service à facturer |  |  |  |  |
| `YPOHMEL_0` | Envoi Cdes par mail |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CRN_0,
    ADRVAL_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    GLNCOD_0
FROM BPADDRESS
WHERE -- vos conditions
```

---

## BPARTNER

**Business Partner**

**Nombre de champs** : 59

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BIDCRY_0` | Pays cpte bancaire |  |  |  |  |
| `CNTNAM_0` | Nom contact par defaut |  |  |  |  |
| `CSLBPR_0` | Partenaire |  |  |  |  |
| `BPSFLG_0` | Fournisseur |  |  |  |  |
| `CRN_0` | Numéro SIRET |  |  |  |  |
| `BPTFLG_0` | Transporteur |  |  |  |  |
| `NAF_0` | Code NAF |  |  |  |  |
| `EORINUM_0` | Numéro EORI |  |  |  |  |
| `REGNUM_0` | Numéro immatriculation |  |  |  |  |
| `VATNO_0` | Numéro TVA |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CPYREL_0` | Société associée |  |  |  |  |
| `XFABFLG_0` | Fabricant |  |  |  |  |
| `BPPFLG_0` | Secteur public |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BRGOBJ_0` | Catég client/fourn |  |  |  |  |
| `ACS_0` | Code d'accès états |  |  |  |  |
| `EECNUM_0` | N° TVA intracommunautaire |  |  |  |  |
| `CFOEXD_0` | Hors prévisions trésorerie |  |  |  |  |
| `DOCTYP_0` | Type document |  |  |  |  |
| `BPRNAM_0` | Raison sociale |  |  |  |  |
| `PPTFLG_0` | Prospect |  |  |  |  |
| `PRVFLG_0` | Prestataire |  |  |  |  |
| `BPRLOG_0` | Sigle |  |  |  |  |
| `VATNUM_0` | Partita IVA |  |  |  |  |
| `FISCOD_0` | Code fiscal |  |  |  |  |
| `BPRNUM_0` | Tiers |  |  |  |  |
| `GRUGPY_0` | Périmètre de conso |  |  |  |  |
| `PTHFLG_0` | Récepteur |  |  |  |  |
| `BIDNUM_0` | Données bancaires par défaut |  |  |  |  |
| `BPRSHO_0` | Intitulé court |  |  |  |  |
| `REPFLG_0` | Représentant |  |  |  |  |
| `BRGCOD_0` | Catégorie |  |  |  |  |
| `FCY_0` | Site |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPRGTETYP_0` | Type de pièce pour frais |  |  |  |  |
| `DOOFLG_0` | Donneur d'ordre |  |  |  |  |
| `CCNFLG_0` | Concédant |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `BPCFLG_0` | Client |  |  |  |  |
| `FCTFLG_0` | Factor |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `GRUCOD_0` | Code consolidation |  |  |  |  |
| `LEGETT_0` | Personne physique |  |  |  |  |
| `BPRFBDMAG_0` | Interdit mailing |  |  |  |  |
| `ACCNONREI_0` | Compte non résident |  |  |  |  |
| `MODPAM_0` | Règlement CFONB |  |  |  |  |
| `BETFCY_0` | Inter-site |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `BPRACC_0` | Tiers divers |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `BPRFLG_0` | divers (utilisation futur) |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BIDCRY_0,
    CNTNAM_0,
    CSLBPR_0,
    BPSFLG_0,
    CRN_0
FROM BPARTNER
WHERE -- vos conditions
```

---

## BPCARRIER

**Transporteurs**

**Nombre de champs** : 41

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4RECEPTION_0` | Réception |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CNTNAM_0` | Nom contact par defaut |  |  |  |  |
| `PLIMAX_0` | Borne fin |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `X4MODACHTRS_0` | Mode de calcul transport |  |  |  |  |
| `X4TARTYP_0` | Type de tarif |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `X4TSPIDENT_0` | Code interface |  |  |  |  |
| `XUVYDAY_0` | Jours disponibilité |  |  |  |  |
| `X4ACHTRTAR_0` | Tarif ach transport |  |  |  |  |
| `X4RULPAY4FLG_0` | Règle du payant pour |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SCAC_0` | Code SCAC |  |  |  |  |
| `BPTNAM_0` | Raison sociale |  |  |  |  |
| `PLIFLG_0` | Gestion tarif |  |  |  |  |
| `TSDFRE_0` | Seuils port |  |  |  |  |
| `COEWEIVOL_0` | Coefficient |  |  |  |  |
| `BKT_0` | Valeur tranche |  |  |  |  |
| `PLIBKT_0` | Valeur tranche |  |  |  |  |
| `WEIRND_0` | Arrondi poids |  |  |  |  |
| `NBPLI_0` | Nb colonnes prix |  |  |  |  |
| `NTRFLG_0` | Impression bon de transport |  |  |  |  |
| `BPTPLITYP_0` | Montants HT/TTC |  |  |  |  |
| `BPTSHO_0` | Intitulé court |  |  |  |  |
| `PLIUOMRND_0` | Arrondi |  |  |  |  |
| `CFY_0` | Société |  |  |  |  |
| `BPTFOR_0` | Formule |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `FXDAMT_0` | Montant fixe |  |  |  |  |
| `ADL_0` | Montant proportionnel |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `XUVYCOD_0` | Périodes indisponibilité |  |  |  |  |
| `X4ACHTRART_0` | Article |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4RECEPTION_0,
    CUR_0,
    CNTNAM_0,
    PLIMAX_0,
    BPTNUM_0
FROM BPCARRIER
WHERE -- vos conditions
```

---

## BPCCATEG

**Catégorie client**

**Nombre de champs** : 71

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `LNDAUZ_0` | Autorisation prêt |  |  |  |  |
| `DIA_0` | Schéma de comptes |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `BPCTYP_0` | Type de client |  |  |  |  |
| `CREMOD_0` | Mode création |  |  |  |  |
| `ORDMINAMT_0` | Montant mini cde |  |  |  |  |
| `OSTCTL_0` | Contrôle en-cours |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `CHGTYP_0` | Type de cours |  |  |  |  |
| `OSTAUZ_0` | En-cours autorisé |  |  |  |  |
| `FUPTYP_0` | Type de relance |  |  |  |  |
| `FUPMINAMT_0` | Mt mini relance |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `OCNFLG_0` | Impression ARC |  |  |  |  |
| `INVPER_0` | Périodicité facture |  |  |  |  |
| `DUDCLC_0` | Origine échéance |  |  |  |  |
| `DME_0` | Livraison partielle |  |  |  |  |
| `IME_0` | Mode facturation |  |  |  |  |
| `SOIPER_0` | Type relevé |  |  |  |  |
| `PRITYP_0` | Type prix |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `EECINCRAT_0` | Majo DEB |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `BPTNUM_0` | Transporteur |  |  |  |  |
| `X4GESFIL_0` | Gestion filière |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UVYCOD_0` | Période indisponibilité |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `DEP_0` | Escompte |  |  |  |  |
| `TSCCOD_0` | Famille statistique |  |  |  |  |
| `TPMCOD_0` | Code modèle |  |  |  |  |
| `ORDCLE_0` | Autorisation solde |  |  |  |  |
| `FREINV_0` | Facturation du port |  |  |  |  |
| `REFCOU_0` | Compteur |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `BCGSHO_0` | Intitulé court |  |  |  |  |
| `SHOAXX_0` | Intitulé court |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `REPDLV_0` | Représentant |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `BCGCOD_0` | Catégorie |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UVYDAY1_0` | Lundi |  |  |  |  |
| `UVYDAY2_0` | Mardi |  |  |  |  |
| `UVYDAY3_0` | Mercredi |  |  |  |  |
| `UVYDAY4_0` | Jeudi |  |  |  |  |
| `UVYDAY5_0` | Vendredi |  |  |  |  |
| `UVYDAY6_0` | Samedi |  |  |  |  |
| `UVYDAY7_0` | Dimanche |  |  |  |  |
| `GRP_0` | Groupe |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `BCGDES_0` | Intitulé |  |  |  |  |
| `DESAXX_0` | Intitulé |  |  |  |  |
| `NPRFLG_0` | Imp bon prépa |  |  |  |  |
| `NDEFLG_0` | Imp bon liv |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `INVDTAAMT_0` | Elément facturation |  |  |  |  |
| `FCTNUM_0` | Factor |  |  |  |  |
| `COMCAT_0` | Catégorie commission |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `ODL_0` | 1 cde par livraison |  |  |  |  |

### Exemple SQL

```sql
SELECT
    LNDAUZ_0,
    DIA_0,
    CRY_0,
    BPCTYP_0,
    CREMOD_0
FROM BPCCATEG
WHERE -- vos conditions
```

---

## BPCINVLIG

**Lignes factures tiers client**

**Nombre de champs** : 63

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `THEAMTOTH2_0` | Montant théorique autre taxe 2 |  |  |  |  |
| `THEAMTTAX1_0` | Montant taxe théorique |  |  |  |  |
| `THEAMTTAX2_0` | Montant taxe théorique |  |  |  |  |
| `THEAMTVAT_0` | Montant taxe théorique |  |  |  |  |
| `THEAMTTAXR_0` | Montant taxe théorique entrée |  |  |  |  |
| `DES_0` | Commentaire |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `AMTNOTLIN_0` | Montant HT |  |  |  |  |
| `AMTATILIN_0` | Montant TTC |  |  |  |  |
| `BPRLIN_0` | Tiers |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `DSP_0` | Répartition a priori |  |  |  |  |
| `STT1_0` | Statistiques |  |  |  |  |
| `STT2_0` | Statistiques |  |  |  |  |
| `STT3_0` | Statistiques |  |  |  |  |
| `UOM_0` | Unité d'oeuvre |  |  |  |  |
| `CPYLIN_0` | Société |  |  |  |  |
| `FCYLIN_0` | Site |  |  |  |  |
| `PERNBR_0` | Périodicité |  |  |  |  |
| `PERTYP_0` | Périodicité |  |  |  |  |
| `PCCCOD_0` | Type coût |  |  |  |  |
| `TAXRCP_0` | Taxe provinciale en entrée |  |  |  |  |
| `TAXISS_0` | Taxe provinciale en sortie |  |  |  |  |
| `TAXOTH1_0` | Autre taxe provinciale 1 |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe provinciale |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe provinciale |  |  |  |  |
| `TAXOTH2_0` | Autre taxe provinciale 2 |  |  |  |  |
| `THEAMTTAXI_0` | Montant taxe sortie théorique |  |  |  |  |
| `THEAMTOTH1_0` | Montant théorique autres taxes |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `ACC_0` | Comptes généraux |  |  |  |  |
| `SAC_0` | Collectif |  |  |  |  |
| `QTY_0` | Quantité |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `AMTTAX1_0` | Montant taxe |  |  |  |  |
| `AMTTAX2_0` | Montant taxe |  |  |  |  |
| `AMTVAT_0` | Montant taxe |  |  |  |  |
| `FLGGEN_0` | Génération auto |  |  |  |  |
| `EXEAMTTAX2_0` | Exonération taxe 2 |  |  |  |  |
| `EXEAMTVAT_0` | Exonération TVA |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |
| `PJTLIN_0` | Affaire |  |  |  |  |
| `TAX1_0` | Taxe 1 |  |  |  |  |
| `TAX2_0` | Taxe 2 |  |  |  |  |
| `VAT_0` | Taxe 3 |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `FAS_0` | Immobilisation |  |  |  |  |
| `SALTYP_0` | Type vente |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `FLGDEP_0` | Soumis à escompte |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `LED_0` | Référentiel |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `EXEAMTISS_0` | Exonération taxe sortie |  |  |  |  |
| `EXEAMTOTH1_0` | Exonération autre taxe 1 |  |  |  |  |
| `EXEAMTOTH2_0` | Exonération autre taxe 2 |  |  |  |  |
| `EXEAMTRCP_0` | Exonération taxe entrée |  |  |  |  |
| `EXEAMTTAX1_0` | Exonération taxe 1 |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AMTTAXISS_0,
    THEAMTOTH2_0,
    THEAMTTAX1_0,
    THEAMTTAX2_0,
    THEAMTVAT_0
FROM BPCINVLIG
WHERE -- vos conditions
```

---

## BPCINVLIGA

**Ligne analytique tiers client**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ANALIG_0` | Numéro d'ordre |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `UOM_0` | Unité d'oeuvre |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ACC_0` | Comptes généraux |  |  |  |  |
| `AMT_0` | Montant |  |  |  |  |
| `QTY_0` | Quantité |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ANALIG_0,
    UPDUSR_0,
    COA_0,
    CCE_0,
    AUUID_0
FROM BPCINVLIGA
WHERE -- vos conditions
```

---

## BPCINVLIGLOC

**Lignes factures tiers client**

**Nombre de champs** : 10

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AMTVATLOC_0` | Montant taxe |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `AMTATILOCLIN_0` | Montant TTC |  |  |  |  |
| `AMTNOTLOCLIN_0` | Montant HT |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AMTVATLOC_0,
    UPDUSR_0,
    CREUSR_0,
    NUM_0,
    AMTATILOCLIN_0
FROM BPCINVLIGLOC
WHERE -- vos conditions
```

---

## BPCINVVAT

**Taux de taxes**

**Nombre de champs** : 10

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CODE_0` | Code |  |  |  |  |
| `DOC_0` | Type de document |  |  |  |  |
| `TEX_0` | Mention sur facture |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `NUM_0` | Numéro facture |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `TAUX_0` | Taux de taxe |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CODE_0,
    DOC_0,
    TEX_0,
    AUUID_0,
    NUM_0
FROM BPCINVVAT
WHERE -- vos conditions
```

---

## BPCUSTMVT

**Mouvements clients**

**Nombre de champs** : 67

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `QUONOTL_0` | En devis HT |  |  |  |  |
| `QUOATIC_0` | En devis TTC |  |  |  |  |
| `QUOATIL_0` | En devis TTC |  |  |  |  |
| `BPCRSK_0` | Tiers risque |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FCTOST_0` | En-cours factor |  |  |  |  |
| `DLVOSTC_0` | En-cours livraison |  |  |  |  |
| `DLVOSTL_0` | En-cours livraison |  |  |  |  |
| `DLVOSTR_0` | En-cours livraison |  |  |  |  |
| `NIVDLVC_0` | Livré non facturé |  |  |  |  |
| `NIVDLVL_0` | Livré non facturé |  |  |  |  |
| `NIVDLVR_0` | Livré non facturé |  |  |  |  |
| `QUONOTC_0` | Mt lignes HT |  |  |  |  |
| `QUONOTR_0` | Mt lignes HT |  |  |  |  |
| `QUOATIR_0` | Mt lignes TTC |  |  |  |  |
| `MAXFUPLEV_0` | Niveau relance max |  |  |  |  |
| `LNDDLVC_0` | Livré en prêt |  |  |  |  |
| `LNDDLVL_0` | Livré en prêt |  |  |  |  |
| `LNDDLVR_0` | Livré en prêt |  |  |  |  |
| `ACCCUR_0` | Devise comptable |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `BPCNUM_0` | Client |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `UNPDAT_0` | Date dernier impayé |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `NPTINVC_0` | Facturé non comptabilisé |  |  |  |  |
| `NPTINVL_0` | Facturé non comptabilisé |  |  |  |  |
| `NPTINVR_0` | Facturé non comptabilisé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ORDBPINOTC_0` | Carnet commande HT client fac |  |  |  |  |
| `ORDBPINOTL_0` | Carnet commande HT client fac |  |  |  |  |
| `ORDBPINOTR_0` | Carnet commande HT client fac |  |  |  |  |
| `ORDBPIATIC_0` | Carnet commande TTC client fac |  |  |  |  |
| `ORDBPIATIL_0` | Carnet commande TTC client fac |  |  |  |  |
| `ORDBPIATIR_0` | Carnet commande TTC client fac |  |  |  |  |
| `NYTBILC_0` | Portefeuille |  |  |  |  |
| `NYTBILL_0` | Portefeuille |  |  |  |  |
| `NYTBILR_0` | Portefeuille |  |  |  |  |
| `BLCC_0` | Solde comptable |  |  |  |  |
| `BLCL_0` | Solde comptable |  |  |  |  |
| `BLCR_0` | Solde comptable |  |  |  |  |
| `LNDBPCNOTC_0` | Carnet cde prêt HT client cde |  |  |  |  |
| `LNDBPCNOTL_0` | Carnet cde prêt HT client cde |  |  |  |  |
| `LNDBPCNOTR_0` | Carnet cde prêt HT client cde |  |  |  |  |
| `LNDBPCATIC_0` | Carnet cde prêt TTC client cde |  |  |  |  |
| `LNDBPCATIL_0` | Carnet cde prêt TTC client cde |  |  |  |  |
| `LNDBPCATIR_0` | Carnet cde prêt TTC client cde |  |  |  |  |
| `LNDBPINOTC_0` | Carnet cde prêt HT client fac |  |  |  |  |
| `LNDBPINOTL_0` | Carnet cde prêt HT client fac |  |  |  |  |
| `LNDBPINOTR_0` | Carnet cde prêt HT client fac |  |  |  |  |
| `LNDBPIATIC_0` | Carnet cde prêt TTC client fac |  |  |  |  |
| `LNDBPIATIL_0` | Carnet cde prêt TTC client fac |  |  |  |  |
| `LNDBPIATIR_0` | Carnet cde prêt TTC client fac |  |  |  |  |
| `UNPNBR_0` | Nombre d'impayés |  |  |  |  |
| `FUPDAT_0` | Date dernière relance |  |  |  |  |
| `FUPLEV_0` | Niveau relance |  |  |  |  |
| `ORDBPCNOTC_0` | Carnet commande HT client cde |  |  |  |  |
| `ORDBPCNOTL_0` | Carnet commande HT client cde |  |  |  |  |
| `ORDBPCNOTR_0` | Carnet commande HT client cde |  |  |  |  |
| `ORDBPCATIC_0` | Carnet commande TTC client cde |  |  |  |  |
| `ORDBPCATIL_0` | Carnet commande TTC client cde |  |  |  |  |
| `ORDBPCATIR_0` | Carnet commande TTC client cde |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    UPDDATTIM_0,
    QUONOTL_0,
    QUOATIC_0,
    QUOATIL_0
FROM BPCUSTMVT
WHERE -- vos conditions
```

---

## BPCUSTOMER

**Clients**

**Nombre de champs** : 121

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `IME_0` | Mode facturation |  |  |  |  |
| `CNTLASDAT_0` | Date dernier contact |  |  |  |  |
| `CNTLASTYP_0` | Type dernier contact |  |  |  |  |
| `PITCDT_0` | Crédit de jetons |  |  |  |  |
| `COTPITRQD_0` | Jetons nécessaires |  |  |  |  |
| `CNTFIRDAT_0` | Date premier contact |  |  |  |  |
| `ORDFIRDAT_0` | Date 1ère commande |  |  |  |  |
| `X_BLCNBR_0` | Nb exempl BL |  |  |  |  |
| `X_BLVALO_0` | BL valorisé |  |  |  |  |
| `CDTISRDAT_0` | Date assurance crédit |  |  |  |  |
| `SOIPER_0` | Type de relevé |  |  |  |  |
| `VATEXN_0` | no agrément pour suspension taxe |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |
| `CNTNAM_0` | Nom contact par defaut |  |  |  |  |
| `CNTNEXDAT_0` | Date prochain contact |  |  |  |  |
| `DAYMON_0` | Quantième |  |  |  |  |
| `OSTCTL_0` | Contrôle en-cours |  |  |  |  |
| `BPCREM_0` | Observations |  |  |  |  |
| `STRDATEFAT_0` | Date début |  |  |  |  |
| `CNTEFAT_0` | Contact |  |  |  |  |
| `AGTPCP_0` | Agent perception IVA |  |  |  |  |
| `OSTAUZ_0` | En-cours autorisé |  |  |  |  |
| `CDTISR_0` | Assurance crédit |  |  |  |  |
| `FUPTYP_0` | Type de relance |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `XSITEMAD_0` | Site MAD |  |  |  |  |
| `BPCSNCDAT_0` | Client depuis |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UVYCOD2_0` | Période indisponibilité |  |  |  |  |
| `X4DEMCHOR_0` | Affichage entête |  |  |  |  |
| `X4SERVICE_0` | Type devis client |  |  |  |  |
| `X4ENGAGEMENT_0` | Demandes changement par gravité |  |  |  |  |
| `ELECTINV_0` | Facture électronique |  |  |  |  |
| `AEIFLG_0` | Facture électronique |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `BPCRSK_0` | Client risque |  |  |  |  |
| `BELVATSUB_0` | Assujetti TVA |  |  |  |  |
| `XICMAJBL_0` | Ind C MAJ matière BL |  |  |  |  |
| `XYEAEXO_0` | Année autor. |  |  |  |  |
| `XAUTOFACT_0` | Auto facturation vte |  |  |  |  |
| `X4FCTCLI_0` | Fonction client GMS |  |  |  |  |
| `X4FILFLG_0` | Tête de filière |  |  |  |  |
| `X4REGREL_0` | Règle reliquats |  |  |  |  |
| `X4TOLGEN_0` | Tolérance générale |  |  |  |  |
| `X4MRGTRSAPP_0` | Marges transport applicables |  |  |  |  |
| `X1CDPRSP_0` | Code compte |  |  |  |  |
| `X1SITE_0` | Code Site/Appli |  |  |  |  |
| `X1TOLFLG_0` | Tolérance prépa |  |  |  |  |
| `X1TOLMAX_0` | % tolérance maxi |  |  |  |  |
| `X1TOLMIN_0` | % tolérance mini |  |  |  |  |
| `BPCCDTISR_0` | Compagnie assur. |  |  |  |  |
| `VATSTRDAT_0` | Date TVA début |  |  |  |  |
| `VATENDDAT_0` | Date TVA fin |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `BPDADD_0` | Adresse client livré par défaut |  |  |  |  |
| `PRITYP_0` | Prix HT/TTC |  |  |  |  |
| `TPMCOD_0` | Code modèle |  |  |  |  |
| `BPCNAM_0` | Raison sociale |  |  |  |  |
| `BPCINV_0` | Client facture |  |  |  |  |
| `BPCPYR_0` | Client payeur |  |  |  |  |
| `BPCGRU_0` | Client groupe |  |  |  |  |
| `BPCSTA_0` | Client actif |  |  |  |  |
| `PPTFLG_0` | Prospect |  |  |  |  |
| `BPCBPSNUM_0` | Notre no fournisseur chez le client |  |  |  |  |
| `FREINV_0` | Facturation du port |  |  |  |  |
| `FUPMINAMT_0` | Montant minimum relance |  |  |  |  |
| `INVDTAAMT_0` | % ou montant facturation |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `AGTSATTAX_0` | Agent perception taxes provinciales |  |  |  |  |
| `FLGSATTAX_0` | Agent perception taxes provinciales |  |  |  |  |
| `SATTAX_0` | Code province |  |  |  |  |
| `COTCHX_0` | Contrat de service |  |  |  |  |
| `TOTPIT_0` | Crédit total de jetons |  |  |  |  |
| `BUS_0` | Activité |  |  |  |  |
| `XAMTEXO_0` | Cumul exo TVA |  |  |  |  |
| `DEP_0` | Escompte |  |  |  |  |
| `TSCCOD_0` | Famille statistique |  |  |  |  |
| `ORIPPT_0` | Origine |  |  |  |  |
| `PITCPT_0` | Complément |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `BPCSHO_0` | Intitulé court |  |  |  |  |
| `BCGCOD_0` | Catégorie |  |  |  |  |
| `GRP_0` | Groupe |  |  |  |  |
| `BPCTYP_0` | Type |  |  |  |  |
| `LNDAUZ_0` | Autorisation prêt |  |  |  |  |
| `XCUR_0` | Devise |  |  |  |  |
| `DIA_0` | Schéma de comptes |  |  |  |  |
| `COPNBR_0` | Nombre exemplaires facture |  |  |  |  |
| `INVPER_0` | Périodicité facturation |  |  |  |  |
| `ORDCLE_0` | Autorisation solde commande |  |  |  |  |
| `ODL_0` | 1 commande par livraison |  |  |  |  |
| `QUOLASDAT_0` | Date dernier devis |  |  |  |  |
| `REP_0` | Représentant |  |  |  |  |
| `CHGTYP_0` | Type cours devise |  |  |  |  |
| `ORDMINAMT_0` | Montant mini commande |  |  |  |  |
| `CNTNEXTYP_0` | Type prochain contact |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `BPAINV_0` | Adresse |  |  |  |  |
| `BPAPYR_0` | Adresse |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CSHVATRGM_0` | Règle taxe |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `BPCNUM_0` | Client |  |  |  |  |
| `FCTNUM_0` | Factor |  |  |  |  |
| `COMCAT_0` | Catégorie commission |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `XVACBPR_0` | Régime taxe |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `MTCFLG_0` | Lettrable |  |  |  |  |
| `ORDTEX_0` | Texte entête cde |  |  |  |  |
| `INVTEX_0` | Texte entête facture |  |  |  |  |
| `OCNFLG_0` | Impression ARC |  |  |  |  |
| `DUDCLC_0` | Origine échéance |  |  |  |  |
| `DME_0` | Livraison partielle |  |  |  |  |

### Exemple SQL

```sql
SELECT
    IME_0,
    CNTLASDAT_0,
    CNTLASTYP_0,
    PITCDT_0,
    COTPITRQD_0
FROM BPCUSTOMER
WHERE -- vos conditions
```

---

## BPSCATEG

**Catégorie fournisseur**

**Nombre de champs** : 78

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `TPMCOD_0` | Code modèle |  |  |  |  |
| `BPTNUM_0` | No transporteur |  |  |  |  |
| `REFCOU_0` | Compteur |  |  |  |  |
| `PLISTC_0` | Code structure du tarif |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `EECICT2_0` | Incoterm |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BSGDES_0` | Intitulé |  |  |  |  |
| `DESAXX_0` | Intitulé |  |  |  |  |
| `AMTCOD_0` | Code montant |  |  |  |  |
| `RITCOD_0` | Code retenue |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `DADFLG_0` | DAS2 |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `FUPFLG_0` | Relance des livraisons en retard |  |  |  |  |
| `OCNFLG_0` | Relance ARC |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `BSGCOD_0` | Catégorie |  |  |  |  |
| `UVYDAY1_0` | Lundi |  |  |  |  |
| `UVYDAY2_0` | Mardi |  |  |  |  |
| `UVYDAY3_0` | Mercredi |  |  |  |  |
| `UVYDAY4_0` | Jeudi |  |  |  |  |
| `UVYDAY5_0` | Vendredi |  |  |  |  |
| `UVYDAY6_0` | Samedi |  |  |  |  |
| `UVYDAY7_0` | Dimanche |  |  |  |  |
| `OSTCTL_0` | Contrôle encours |  |  |  |  |
| `CHGTYP_0` | Type cours |  |  |  |  |
| `DIA_0` | Schéma de comptes |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `SEVLIN_0` | Gestion de plusieurs lignes sur cde |  |  |  |  |
| `INVDTAAMT_0` | % ou Montant Element de facturation |  |  |  |  |
| `LTIMRKCOE_0` | Coefficient délai |  |  |  |  |
| `ORDMINAMT_0` | Montant minimum de commande |  |  |  |  |
| `DUDCLC_0` | Date origine pour calcul échéance |  |  |  |  |
| `NORPRNFLG_0` | Edition du bon commande |  |  |  |  |
| `BSGSHO_0` | Intitulé court |  |  |  |  |
| `SHOAXX_0` | Intitulé court |  |  |  |  |
| `PRIMRKCOE_0` | Coefficient prix |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `EECLOC2_0` | Lieu transport DEB |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `LAN_0` | Langue |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `BPSTYP_0` | Type fournisseur |  |  |  |  |
| `QLYMRKCOE_0` | Coefficient qualité |  |  |  |  |
| `QTYMRKCOE_0` | Coefficient quantité |  |  |  |  |
| `RSKMRKCOE_0` | Coefficient libre |  |  |  |  |
| `OSTAUZAMT_0` | Encours autorisé |  |  |  |  |
| `EECINCRAT2_0` | Majoration DEB |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `PURPRITYP_0` | Type montant |  |  |  |  |
| `NREPRNFLG_0` | Edition du bon réception |  |  |  |  |
| `NRTPRNFLG_0` | Edition du bon retour |  |  |  |  |
| `RITRAT_0` | Tx abattement retenue source |  |  |  |  |
| `CREMOD_0` | Mode création |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `UVYCOD_0` | Code Indisponibilité |  |  |  |  |
| `UVYCOD2_0` | Code Indisponibilité |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `FRM1099_0` | Formulaire 1099 |  |  |  |  |
| `BOX1099_0` | Case 1099 |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FLG281_0` | 281.5 |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `RITNBR_0` | Nombre de codes |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ORDFREFRT_0` | Seuil gratuité port |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TSSCOD_0,
    TPMCOD_0,
    BPTNUM_0,
    REFCOU_0,
    PLISTC_0
FROM BPSCATEG
WHERE -- vos conditions
```

---

## BPSHISUPLN

**Adresses d'expéditions**

**Nombre de champs** : 11

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BPSADD_0` | Adresse expéditeur |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `BPSSHI_0` | Fournisseur expéditeur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BPSADD_0,
    UPDDATTIM_0,
    CREDATTIM_0,
    CREUSR_0,
    AUUID_0
FROM BPSHISUPLN
WHERE -- vos conditions
```

---

## BPSHISUPP

**Fournisseurs expéditeurs**

**Nombre de champs** : 28

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `UVYDAY3_0` | Mercredi |  |  |  |  |
| `UVYDAY4_0` | Jeudi |  |  |  |  |
| `UVYDAY5_0` | Vendredi |  |  |  |  |
| `UVYDAY6_0` | Samedi |  |  |  |  |
| `UVYDAY7_0` | Dimanche |  |  |  |  |
| `FFWNUM_0` | Numéro transitaire |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `UVYCOD_0` | Indisponibilité |  |  |  |  |
| `FFWADD_0` | Adresse transitaire |  |  |  |  |
| `ICTCTY_0` | Ville Incoterm |  |  |  |  |
| `EECINCRAT_0` | Majoration DEB |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UVYDAY2_0` | Mardi |  |  |  |  |
| `UVYDAY1_0` | Lundi |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `DAYLTI_0` | Délai expédition en jours |  |  |  |  |
| `BPSSHI_0` | Fournisseur expéditeur |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `BPSADD_0` | Adresse expéditeur |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BPSNAM_0` | Raison sociale |  |  |  |  |
| `EECNUM_0` | Identification UE |  |  |  |  |

### Exemple SQL

```sql
SELECT
    UVYDAY3_0,
    UVYDAY4_0,
    UVYDAY5_0,
    UVYDAY6_0,
    UVYDAY7_0
FROM BPSHISUPP
WHERE -- vos conditions
```

---

## BPSINVLIG

**Lignes factures tiers fourn**

**Nombre de champs** : 56

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `FLGDEP_0` | Soumis à escompte |  |  |  |  |
| `DCLEECNUM_0` | N° déclaration TVA |  |  |  |  |
| `PCCCOD_0` | Nature de dépense |  |  |  |  |
| `DES_0` | Commentaire |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `AMTNOTLIN_0` | Montant HT |  |  |  |  |
| `AMTATILIN_0` | Montant TTC |  |  |  |  |
| `BPRLIN_0` | Tiers |  |  |  |  |
| `PURTYP_0` | Type achat |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `DEDVAT_0` | TVA déductible |  |  |  |  |
| `TAXRCP_0` | Taxe provinciale en entrée |  |  |  |  |
| `DEDTAXRCP_0` | Taxe entrée déductible |  |  |  |  |
| `TAXISS_0` | Taxe provinciale en sortie |  |  |  |  |
| `DEDTAXISS_0` | Taxe sortie déductible |  |  |  |  |
| `TAXOTH1_0` | Autre taxe provinciale 1 |  |  |  |  |
| `AMTTAXOTH1_0` | Montant autre taxe provinciale |  |  |  |  |
| `AMTTAXOTH2_0` | Montant autre taxe provinciale |  |  |  |  |
| `TAXOTH2_0` | Autre taxe provinciale 2 |  |  |  |  |
| `AMTTAXRCP_0` | Montant taxe entrée |  |  |  |  |
| `AMTTAXISS_0` | Montant taxe sortie |  |  |  |  |
| `STT1_0` | Statistiques |  |  |  |  |
| `STT2_0` | Statistiques |  |  |  |  |
| `STT3_0` | Statistiques |  |  |  |  |
| `UOM_0` | Unité d'oeuvre |  |  |  |  |
| `CPYLIN_0` | Société |  |  |  |  |
| `FCYLIN_0` | Site |  |  |  |  |
| `PERNBR_0` | Périodicité |  |  |  |  |
| `PERTYP_0` | Périodicité |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `ACC_0` | Comptes généraux |  |  |  |  |
| `SAC_0` | Collectif |  |  |  |  |
| `QTY_0` | Quantité |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `AMTTAX1_0` | Montant taxe |  |  |  |  |
| `AMTTAX2_0` | Montant taxe |  |  |  |  |
| `AMTVAT_0` | Montant taxe |  |  |  |  |
| `DSP_0` | Répartition a priori |  |  |  |  |
| `DEDTAXOTH1_0` | Succursale |  |  |  |  |
| `DEDTAXOTH2_0` | Succursale |  |  |  |  |
| `DEDTAX1_0` | Taxe déductible |  |  |  |  |
| `DEDTAX2_0` | Taxe déductible |  |  |  |  |
| `RITCODSRC_0` | Code retenue source |  |  |  |  |
| `PJTLIN_0` | Affaire |  |  |  |  |
| `TAX1_0` | Taxe 1 |  |  |  |  |
| `TAX2_0` | Taxe 2 |  |  |  |  |
| `VAT_0` | Taxe 3 |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `LED_0` | Référentiel |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FLG1099_0` | 1099 (USA) |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    UPDDATTIM_0,
    FLGDEP_0,
    DCLEECNUM_0,
    PCCCOD_0
FROM BPSINVLIG
WHERE -- vos conditions
```

---

## BPSINVLIGA

**Ligne analytique tiers fourn**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `COA_0` | Code plan |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `ANALIG_0` | Numéro d'ordre |  |  |  |  |
| `INVTYP_0` | Catégorie facture |  |  |  |  |
| `UOM_0` | Unité d'oeuvre |  |  |  |  |
| `NUM_0` | Numéro de pièce |  |  |  |  |
| `ACC_0` | Comptes généraux |  |  |  |  |
| `AMT_0` | Montant |  |  |  |  |
| `QTY_0` | Quantité |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    COA_0,
    DIE_0,
    UPDDATTIM_0,
    LIG_0,
    ANALIG_0
FROM BPSINVLIGA
WHERE -- vos conditions
```

---

## BPSUPPLIER

**Fournisseurs**

**Nombre de champs** : 117

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4ELTPOIAPP_0` | Elt poids appliqué |  |  |  |  |
| `XRSKMRKTGT_0` | Objectif note libre |  |  |  |  |
| `FLG281_0` | 281.5 |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `CSHDAT_0` | Date limite (TVA/encaiss.) |  |  |  |  |
| `CSHVAT_0` | Régime TVA sur encaissements |  |  |  |  |
| `IPTEXS_0` | Imputation des frais |  |  |  |  |
| `BPCNUM_0` | Code client chez le fournisseur |  |  |  |  |
| `REXNUM_0` | Numéro REX |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUTINVCOD_0` | Code facture auto |  |  |  |  |
| `WLFLG_0` | Sans vérification LB |  |  |  |  |
| `ORDFREFRT_0` | Seuil gratuité port |  |  |  |  |
| `BPRDSP_0` | Répartition interface paie |  |  |  |  |
| `YNBDOC_0` | Nb exempl. CDE |  |  |  |  |
| `XSEUILRAD_0` | Seuil radiation |  |  |  |  |
| `BPSRSK_0` | Tiers risque |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `PTE_0` | Condition paiement |  |  |  |  |
| `INVDTA_0` | Elément de facturation |  |  |  |  |
| `VACBPR_0` | Régime taxe |  |  |  |  |
| `CAI_0` | Numéro CAI |  |  |  |  |
| `DATVLYCAI_0` | Date validité CAI |  |  |  |  |
| `BPSINV_0` | Fournisseur facture |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `BPSTYP_0` | Type fournisseur |  |  |  |  |
| `QLYMRKCOE_0` | Coefficient qualité |  |  |  |  |
| `QTYMRKCOE_0` | Coefficient quantité |  |  |  |  |
| `RSKMRKCOE_0` | Coefficient libre |  |  |  |  |
| `RSKMRK_0` | Note libre |  |  |  |  |
| `OSTAUZAMT_0` | Encours autorisé |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |
| `PRVNUM_0` | Code prestataire |  |  |  |  |
| `CNTNAM_0` | Nom contact par defaut |  |  |  |  |
| `PURPRITYP_0` | Type montant |  |  |  |  |
| `NREPRNFLG_0` | Edition du bon réception |  |  |  |  |
| `NRTPRNFLG_0` | Edition du bon retour |  |  |  |  |
| `RITNBR_0` | Nombre de codes |  |  |  |  |
| `RITRAT_0` | Tx abattement retenue source |  |  |  |  |
| `RITPARNBR_0` | Nb de partenaires |  |  |  |  |
| `RITPARNAM_0` | Nom partenaire |  |  |  |  |
| `RITPARCOE_0` | Part détenue |  |  |  |  |
| `BPSGRU_0` | Fournisseur groupe |  |  |  |  |
| `DOUFLG_0` | Litige |  |  |  |  |
| `MDL_0` | Mode livraison |  |  |  |  |
| `UVYCOD_0` | Code Indisponibilité |  |  |  |  |
| `LTIMRK_0` | Note délai |  |  |  |  |
| `PRIMRK_0` | Note prix |  |  |  |  |
| `QLYMRK_0` | Note qualité |  |  |  |  |
| `QTYMRK_0` | Note quantité |  |  |  |  |
| `GENMRK_0` | Note générale |  |  |  |  |
| `BPSREM_0` | Observations |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `AGTPCP_0` | Agent perception IVA |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `FRM1099_0` | Formulaire 1099 |  |  |  |  |
| `BOX1099_0` | Case 1099 |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4AEXPDLACH_0` | Export DL achat |  |  |  |  |
| `XDMRPAR_0` | Paramétrage démérites |  |  |  |  |
| `XLTIMRKTGT_0` | Objectif note délai |  |  |  |  |
| `XPRIMRKTGT_0` | Objectif note prix |  |  |  |  |
| `XQLYMRKTGT_0` | Objecif note qualité |  |  |  |  |
| `XQTYMRKTGT_0` | Objectif note qté |  |  |  |  |
| `X4ELTNBRCOL_0` | Elt nbre de colis |  |  |  |  |
| `X4ELTPOI_0` | Elément poids |  |  |  |  |
| `TSSCOD_0` | Famille statistique |  |  |  |  |
| `TPMCOD_0` | Code modèle |  |  |  |  |
| `BPSNAM_0` | Raison sociale |  |  |  |  |
| `BPTNUM_0` | No transporteur |  |  |  |  |
| `PLISTC_0` | Code structure du tarif |  |  |  |  |
| `EECICT_0` | Incoterm |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `XPOHTYPBPS_0` | Type de commande |  |  |  |  |
| `CURCLC_0` | Fixation du taux de devise |  |  |  |  |
| `AMTCOD_0` | Code montant |  |  |  |  |
| `AGTSATTAX_0` | Agent perception taxes provinciales |  |  |  |  |
| `FLGSATTAX_0` | Agent perception taxes provinciales |  |  |  |  |
| `SATTAX_0` | Code province |  |  |  |  |
| `RITCOD_0` | Code retenue |  |  |  |  |
| `XAUDIT_0` | Date audit |  |  |  |  |
| `BPAPAY_0` | Adresse tiers payé |  |  |  |  |
| `ZSIGFAB_0` | Sigle Fabricant |  |  |  |  |
| `DEP_0` | Code escompte |  |  |  |  |
| `DADFLG_0` | DAS2 |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `FUPFLG_0` | Relance des livraisons en retard |  |  |  |  |
| `OCNFLG_0` | Relance ARC |  |  |  |  |
| `ORDTEX_0` | Texte bon de commande |  |  |  |  |
| `RTNTEX_0` | Texte bon de retour |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `BSGCOD_0` | Catégorie |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BPRPAY_0` | Numéro tiers payé |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `OSTCTL_0` | Contrôle encours |  |  |  |  |
| `CHGTYP_0` | Type cours |  |  |  |  |
| `DIA_0` | Schéma de comptes |  |  |  |  |
| `SEVLIN_0` | Gestion de plusieurs lignes sur cde |  |  |  |  |
| `BPCNUMBPS_0` | Numéro client chez le fournisseur |  |  |  |  |
| `INVDTAAMT_0` | % ou Montant Element de facturation |  |  |  |  |
| `LTIMRKCOE_0` | Coefficient délai |  |  |  |  |
| `ORDMINAMT_0` | Montant minimum de commande |  |  |  |  |
| `DUDCLC_0` | Date origine pour calcul échéance |  |  |  |  |
| `PAYLOKFLG_0` | Blocage des paiements |  |  |  |  |
| `NORPRNFLG_0` | Edition du bon commande |  |  |  |  |
| `BPSSHO_0` | Intitulé court |  |  |  |  |
| `PRIMRKCOE_0` | Coefficient prix |  |  |  |  |
| `BPAINV_0` | Adresse facture |  |  |  |  |
| `EECLOC_0` | Lieu transport DEB |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4ELTPOIAPP_0,
    XRSKMRKTGT_0,
    FLG281_0,
    DIE_0,
    CSHDAT_0
FROM BPSUPPLIER
WHERE -- vos conditions
```

---

## BPSUPPMVT

**Mouvements fournisseurs**

**Nombre de champs** : 33

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CUR_0` | Devise transaction |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BPSRSK_0` | Tiers risque |  |  |  |  |
| `ORDNOTR_0` | En commande |  |  |  |  |
| `ORDATIR_0` | En commande |  |  |  |  |
| `ORDNOTC_0` | En commande |  |  |  |  |
| `ORDATIC_0` | En commande |  |  |  |  |
| `ORDNOTL_0` | En commande |  |  |  |  |
| `ORDATIL_0` | En commande |  |  |  |  |
| `RCPNOTR_0` | Livré non facturé |  |  |  |  |
| `RCPATIR_0` | Livré non facturé |  |  |  |  |
| `RCPNOTC_0` | Livré non facturé |  |  |  |  |
| `RCPATIC_0` | Livré non facturé |  |  |  |  |
| `RCPNOTL_0` | Livré non facturé |  |  |  |  |
| `RCPATIL_0` | Livré non facturé |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BILAMTR_0` | Portefeuille |  |  |  |  |
| `BILAMTC_0` | Portefeuille |  |  |  |  |
| `BILAMTL_0` | Portefeuille |  |  |  |  |
| `BLCAMTR_0` | Solde comptable |  |  |  |  |
| `BLCAMTC_0` | Solde comptable |  |  |  |  |
| `BLCAMTL_0` | Solde comptable |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `INVAMTL_0` | Facturé non comptabilisé |  |  |  |  |
| `INVAMTR_0` | Facturé non comptabilisé |  |  |  |  |
| `INVAMTC_0` | Facturé non comptabilisé |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `ACCCUR_0` | Devise comptable |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CUR_0,
    CREUSR_0,
    UPDDATTIM_0,
    BPSRSK_0,
    ORDNOTR_0
FROM BPSUPPMVT
WHERE -- vos conditions
```

---

## FACILITY

**Sites**

**Nombre de champs** : 76

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `FCY_0` | Site |  |  |  |  |
| `PAYBAN_0` | Banque règlement |  |  |  |  |
| `DADFLG_0` | DAS2 |  |  |  |  |
| `IVYFLG_0` | Inventaire |  |  |  |  |
| `HRMPAYBAN_0` | Banque |  |  |  |  |
| `PRF_0` | Profil |  |  |  |  |
| `CNTNAM_0` | Nom contact |  |  |  |  |
| `DADFCY_0` | Site DAS2 |  |  |  |  |
| `HRMDADFCY_0` | Site DADS |  |  |  |  |
| `STRHOU_0` | Début |  |  |  |  |
| `ENDHOU_0` | Fin |  |  |  |  |
| `SRV_0` | Service |  |  |  |  |
| `XTYPSIT_0` | Type site |  |  |  |  |
| `RSKWRK_0` | Risque |  |  |  |  |
| `FCYSHO_0` | Libellé abrégé |  |  |  |  |
| `INSCTYFLG_0` | Flag intérieur ville |  |  |  |  |
| `IVYFCY_0` | Site d'inventaire |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `UVYDAY_0` | Indis (LMMJVSD) |  |  |  |  |
| `UVYCOD_0` | Code Indisponibilité |  |  |  |  |
| `FCYNAM_0` | Nom |  |  |  |  |
| `BPADCL_0` | Adresse déclarant |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `CRY_0` | Pays |  |  |  |  |
| `WRHFLG_0` | Dépôt |  |  |  |  |
| `BPTNUM_0` | Numéro transporteur |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LEGCPY_0` | Société juridique |  |  |  |  |
| `MFGFLG_0` | Production |  |  |  |  |
| `SALFLG_0` | Vente |  |  |  |  |
| `PURFLG_0` | Achat |  |  |  |  |
| `FINFLG_0` | Finance |  |  |  |  |
| `CHEF_0` | Responsables |  |  |  |  |
| `NAF_0` | Code NAF |  |  |  |  |
| `BIDNUM_0` | N° compte bancaire |  |  |  |  |
| `FINRSPFCY_0` | Site Responsable financier |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SECPRH_0` | Section dérogatoire |  |  |  |  |
| `HRMTAXWAG_0` | Taxe/salaires |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ORICERFLG_0` | Auto certification d'origine |  |  |  |  |
| `X1WMSFLG_0` | WMS |  |  |  |  |
| `EORINUM_0` | Numéro EORI |  |  |  |  |
| `X4ENVAUT_0` |  |  |  |  |  |
| `CRN_0` | Numéro de SIRET |  |  |  |  |
| `REXNUM_0` | Numéro REX |  |  |  |  |
| `TRAWRH_0` | Dépôt entrée interne |  |  |  |  |
| `RTNWRH_0` | Dépôt retour liv |  |  |  |  |
| `MFRWRH_0` | Dépôt réintégration |  |  |  |  |
| `TRFWRH_0` | Dépôt sortie interne |  |  |  |  |
| `CLLCVT_0` | Convention Collective |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `HRMDADFLG_0` | DADS |  |  |  |  |
| `BPASGE_0` | Adresse siège |  |  |  |  |
| `CNTDDS_0` | Contact TDS |  |  |  |  |
| `CODCRA_0` | Code CRAM |  |  |  |  |
| `PAYFLG_0` | Paye |  |  |  |  |
| `WRHGES_0` | Gestion dépôt |  |  |  |  |
| `RCPWRH_0` | Dépôt réception |  |  |  |  |
| `MFPWRH_0` | Dépôt entrée OF |  |  |  |  |
| `SHIWRH_0` | Dépôt expédition |  |  |  |  |
| `MFGWRH_0` | Dépôt conso |  |  |  |  |
| `SCOWRH_0` | Dépôt expé sous-trt |  |  |  |  |
| `SCCWRH_0` | Dépôt conso sous-trt |  |  |  |  |
| `SPAOPEIGIC_0` | Opérations IGIC |  |  |  |  |
| `FLGPEC_0` | Effort construction |  |  |  |  |
| `FLGAPP_0` | Taxe apprentissage |  |  |  |  |
| `FLGFOR_0` | Formation prof. continue |  |  |  |  |
| `REGPRH_0` | Régime prud'homal |  |  |  |  |
| `LEG_0` | Législation |  |  |  |  |
| `GEOCOD_0` | Géo code |  |  |  |  |

### Exemple SQL

```sql
SELECT
    FCY_0,
    PAYBAN_0,
    DADFLG_0,
    IVYFLG_0,
    HRMPAYBAN_0
FROM FACILITY
WHERE -- vos conditions
```

---

## GACCOUNT

**Comptes**

**Nombre de champs** : 93

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `UPDTIM_0` | Heure |  |  |  |  |
| `CRETIM_0` | Heure |  |  |  |  |
| `FCY_0` | Société/site |  |  |  |  |
| `RITTYP_0` | Type de charge |  |  |  |  |
| `BIDNUM_0` | Données bancaires par défaut |  |  |  |  |
| `DES_0` | Intitulé |  |  |  |  |
| `VALUOM_0` | Valeur par défaut |  |  |  |  |
| `DESTRA_0` | Intitulé traduisible |  |  |  |  |
| `VAT_0` | Taxe |  |  |  |  |
| `AUZ_0` | Code interdiction |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CCEDEF_0` | Section par défaut |  |  |  |  |
| `DEFACC_0` | Compte par défaut |  |  |  |  |
| `AUZBPR_0` | Autorisation/tiers |  |  |  |  |
| `DAS_0` | DAS2 |  |  |  |  |
| `DASTYP_0` | Nature DAS2 |  |  |  |  |
| `UOM_0` | Unité d'oeuvre |  |  |  |  |
| `DESSHO_0` | Intitulé court |  |  |  |  |
| `SHOTRA_0` | Intitulé court |  |  |  |  |
| `ACCSHO_0` | Code d'appel |  |  |  |  |
| `CEN_0` | Centralisable |  |  |  |  |
| `CSLDEB_0` | Consolidation |  |  |  |  |
| `CSLCDT_0` | Consolidation |  |  |  |  |
| `SAC_0` | Collectif |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `FLGVAT_0` | Gestion TVA |  |  |  |  |
| `VATIPT_0` | Imputation taxe |  |  |  |  |
| `SNSDEF_0` | Sens par défaut |  |  |  |  |
| `SNSBLC_0` | Sens du Solde |  |  |  |  |
| `SUBACC_0` | Compte abonné |  |  |  |  |
| `SUBBPR_0` | Tiers abonné |  |  |  |  |
| `UPDBLC_0` | Mise à jour solde |  |  |  |  |
| `CLSCOD_0` | Classification |  |  |  |  |
| `DSP_0` | Répartition a priori |  |  |  |  |
| `ACC_0` | Compte |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VLYSTR_0` | Date début validité |  |  |  |  |
| `VLYEND_0` | Date fin validité |  |  |  |  |
| `GACPVS_0` | Nature de provision |  |  |  |  |
| `DIFFLG_0` | Ecarts automatiques |  |  |  |  |
| `GACACN_0` | Nature comptable |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ACS_0` | Code d'accès |  |  |  |  |
| `FRWCUR_0` | Reports à nouveau |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `BPAADD_0` | Adresse par défaut |  |  |  |  |
| `CSLFLG_0` | Analyse conso |  |  |  |  |
| `ESDTRK_0` | Prestations services |  |  |  |  |
| `FLGDEP_0` | Escompte/agio |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |
| `MTC_0` | Lettrable |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `TYPRAT_0` | Type de cours |  |  |  |  |
| `FLOCDT_0` | Flux si crédit |  |  |  |  |
| `CSLFLGFLW_0` | Gestion du flux |  |  |  |  |
| `COANBR_0` | Nb de Plan |  |  |  |  |
| `OBYIPT_0` | Imputation obligatoire |  |  |  |  |
| `OTHCOA_0` | Autre - Plan comptable |  |  |  |  |
| `SCRACC_0` | Crible du compte |  |  |  |  |
| `TIMDSP_0` | Répartit° temporelle |  |  |  |  |
| `FLG281_0` | Compte 281.5 |  |  |  |  |
| `TYP281_0` | Catégorie 281.5 |  |  |  |  |
| `CNVACC9_0` | Ecart arrondi déb. |  |  |  |  |
| `CNVACC10_0` | Ecart arrondi créd. |  |  |  |  |
| `LVATYP_0` | Gestion LVA |  |  |  |  |
| `CNVACC7_0` | Gain arrondi lettr. |  |  |  |  |
| `CNVACC8_0` | Perte arrondi lettr. |  |  |  |  |
| `CSLFLGBPR_0` | Gestion du partenaire |  |  |  |  |
| `RPTCODDEB_0` | Codes report. débit |  |  |  |  |
| `RPTCODCDT_0` | Codes report. crédit |  |  |  |  |
| `FLGUOM_0` | Flag unité d'oeuvre |  |  |  |  |
| `DACDIENBR_0` | Nb d'axes saisis |  |  |  |  |
| `BUDTRK_0` | Suivi budgétaire |  |  |  |  |
| `CNVACC5_0` | Gain de change |  |  |  |  |
| `CNVACC6_0` | Perte de change |  |  |  |  |
| `DIF_0` | Méthode d'évaluation |  |  |  |  |
| `TYPRATFLG_0` | Gestion type cours |  |  |  |  |
| `CNVACC1_0` | Dimin. solde débit. |  |  |  |  |
| `CNVACC2_0` | Augm. solde débit. |  |  |  |  |
| `CNVACC3_0` | Dimin. solde crédit. |  |  |  |  |
| `CNVACC4_0` | Augm. solde crédit. |  |  |  |  |
| `TYPVATCTL_0` | Contrôle codes taxes |  |  |  |  |
| `CSLBPRACE_0` | Partenaire écriture |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FLODEB_0` | Flux si débit |  |  |  |  |
| `FIFOVARPRO_0` | Ecarts FIFO exclus |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `FLGEXPCRE_0` | Création dépense |  |  |  |  |
| `DIE_0` | Code axe ana |  |  |  |  |
| `FLGABL_0` | Suivi immobilisation |  |  |  |  |
| `LOSGAIGNR_0` | Génération écart perte et profit |  |  |  |  |

### Exemple SQL

```sql
SELECT
    UPDTIM_0,
    CRETIM_0,
    FCY_0,
    RITTYP_0,
    BIDNUM_0
FROM GACCOUNT
WHERE -- vos conditions
```

---

## GACCOUNTA

**Comptes (table additionnelle)**

**Nombre de champs** : 8

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ACC_0` | Compte |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `COA_0` | Code plan |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VATCTL_0` | Codes taxe |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    UPDDATTIM_0,
    ACC_0,
    AUUID_0,
    COA_0
FROM GACCOUNTA
WHERE -- vos conditions
```

---

## ITMABCWRK

**Calcul classe ABC**

**Nombre de champs** : 15

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `FORERR_0` | Erreur |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `ABCBAS_0` | Base calcul |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `ABCBASPRC_0` | Pourcentage |  |  |  |  |
| `ABCCLSNEW_0` | Catégorie ABC simul |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    FORERR_0,
    UPDDAT_0,
    CREDAT_0,
    ABCCLS_0,
    ITMREF_0
FROM ITMABCWRK
WHERE -- vos conditions
```

---

## ITMBOM

**Articles - Nomenclatures**

**Nombre de champs** : 17

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `X1_TSI_0` | Niveau fam stat art |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `LLC_0` | Code de plus bas niveau |  |  |  |  |
| `BOMEXIFLG_0` | Existence nomenclature |  |  |  |  |
| `XTMP_0` | Tmp pour calcul cout |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `LLCTYP_0` | Type code de plus bas niveau |  |  |  |  |
| `WUSEXIFLG_0` | Existence cas d'emploi |  |  |  |  |
| `BOHITM_0` | Entête le plus bas |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    EXPNUM_0,
    X1_TSI_0,
    CREUSR_0,
    BOMALT_0
FROM ITMBOM
WHERE -- vos conditions
```

---

## ITMBPC

**Articles - Clients**

**Nombre de champs** : 50

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4EMBSUBST_0` | Emballage subst. |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `X1TOLMIN_0` | % tolérance mini |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XTYPEMB_0` | Type emballage |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `XBPCDEF_0` | Client principal |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `ITSTEX_0` | Texte article vente |  |  |  |  |
| `PCUSAUCOE1_0` | Coefficient UC1-UV |  |  |  |  |
| `PCU1_0` | Unité conditionnement 1 |  |  |  |  |
| `PCU2_0` | Unité conditionnement 2 |  |  |  |  |
| `PCUSAUCOE2_0` | Coefficient UC2-UV |  |  |  |  |
| `X4TOLREL_0` | Tolérance reliquat % |  |  |  |  |
| `XPCU1PDS_0` | Poids Brut (Kg) |  |  |  |  |
| `XPCU2PDS_0` | Poids Brut (Kg) |  |  |  |  |
| `XPCU1VOL_0` | Code Volume |  |  |  |  |
| `XPCU2VOL_0` | Code Volume |  |  |  |  |
| `XGREFCLI_0` | Suite code client |  |  |  |  |
| `XGFORETI2_0` | Format étiqutte UC2 |  |  |  |  |
| `XNBAMORT_0` | Nbr pces pour amorti |  |  |  |  |
| `ZSBA_0` | SBA |  |  |  |  |
| `ZELEC_0` | Artcile ELEC |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `XNBPFACT_0` | Nbr pièces facturées |  |  |  |  |
| `DLUBPC_0` | Coef DLU |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `X1CNI_0` | Contrainte obligatoire |  |  |  |  |
| `X4EMBSCAPA_0` | Capacité Emb. subst |  |  |  |  |
| `XNBMOI_0` | Nb mois ss utilis. |  |  |  |  |
| `ZCP_0` | CP |  |  |  |  |
| `ITPTEX_0` | Texte préparation |  |  |  |  |
| `ITMDESBPC_0` | Désignation article client |  |  |  |  |
| `XGFORETI_0` | Format étiquette |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `ITMREFBPC_0` | Article-Client |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `BPCNUM_0` | Client |  |  |  |  |
| `ENAFLG_0` | Actif |  |  |  |  |
| `XGMODTEC_0` | Indice modif. tech. |  |  |  |  |
| `XGSTOCLI_0` | Lieu stockage client |  |  |  |  |
| `XGSTO_0` | Lieu stockage 2(2L) |  |  |  |  |
| `X1TOLMAX_0` | % tolérance maxi |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4EMBSUBST_0,
    UPDUSR_0,
    X1TOLMIN_0,
    CREDATTIM_0,
    UPDDATTIM_0
FROM ITMBPC
WHERE -- vos conditions
```

---

## ITMBPS

**Articles-Fournisseurs**

**Nombre de champs** : 49

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ZFABNUM_0` | Code du fabricant |  |  |  |  |
| `ZITMREFFAB_0` | Référence fabricant |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XCRYORIG_0` | Pays origine produit |  |  |  |  |
| `DEFBPSFLG_0` | Fournisseur réappro défaut |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `CPRAMT_0` | Coût fixe unitaire |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `QLYMRK_0` | Note qualité |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `PIO_0` | Priorité |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `SCOLTI_0` | Délai sous-traitance |  |  |  |  |
| `XFTSCOD_0` | Code fiche technique spéciale |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `XDMRPAR_0` | Paramétrage démérites |  |  |  |  |
| `XPNTMONTE_0` | Point de destination |  |  |  |  |
| `X4MULTISOU_0` | Multi-sourcing |  |  |  |  |
| `QUAFRY_0` | Fréquence  contrôle qualité |  |  |  |  |
| `QUANUM_0` | Numéro contrôle |  |  |  |  |
| `ITMDESBPS_0` | Désignation article chez fourn |  |  |  |  |
| `EANCODBPS_0` | Code EAN fournisseur |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `DEFCTMBPSFLG_0` | Fournisseur contremarque défaut |  |  |  |  |
| `QLYCRD_0` | Fiche qualité |  |  |  |  |
| `QUAADXUID_0` | Process fréquence |  |  |  |  |
| `QUANUMUID_0` | Entrées process |  |  |  |  |
| `CTMBPSFLG_0` | Contremarque |  |  |  |  |
| `TEX_0` | Texte |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ZSIGFAB_0` | Sigle Fabricant |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DOUFLG_0` | Blocage |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `ITMREFBPS_0` | Article fournisseur |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `PUUSTUCOE_0` | Coefficient UA-US |  |  |  |  |
| `PCUPUUCOE_0` | Coefficient UC-UA |  |  |  |  |
| `PURMINQTY_0` | Quantité minimum achat |  |  |  |  |
| `ZBPSNUM_0` | Fournisseur |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ZFABNUM_0,
    ZITMREFFAB_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    XCRYORIG_0
FROM ITMBPS
WHERE -- vos conditions
```

---

## ITMBPSFCY

**Site article fournisseur**

**Nombre de champs** : 38

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `DEFBPSFLG_0` | Fournisseur par défaut |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `QLYMRK_0` | Note qualité |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `PIO_0` | Priorité |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `SCOLTI_0` | Délai sous-traitance |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `QUAFRY_0` | Fréquence  contrôle qualité |  |  |  |  |
| `QUANUM_0` | Numéro contrôle |  |  |  |  |
| `ITMDESBPS_0` | Désignation article chez fourn |  |  |  |  |
| `EANCODBPS_0` | Code EAN fournisseur |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `DEFCTMBPSFLG_0` | Fournisseur contremarque défaut |  |  |  |  |
| `QLYCRD_0` | Fiche qualité |  |  |  |  |
| `QUAADXUID_0` | Process fréquence |  |  |  |  |
| `QUANUMUID_0` | Entrées process |  |  |  |  |
| `CTMBPSFLG_0` | Contremarque |  |  |  |  |
| `TEX_0` | Texte |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DOUFLG_0` | Blocage |  |  |  |  |
| `ITMREFBPS_0` | Article fournisseur |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `PUUSTUCOE_0` | Coefficient UA-US |  |  |  |  |
| `PCUPUUCOE_0` | Coefficient UC-UA |  |  |  |  |
| `PURMINQTY_0` | Quantité minimum achat |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `EECINCRAT_0` | Majoration statistique DEB |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    QUAFLG_0,
    DEFBPSFLG_0,
    LOAECCFLG_0,
    MATTOL_0
FROM ITMBPSFCY
WHERE -- vos conditions
```

---

## ITMCATEG

**Catégorie article**

**Nombre de champs** : 202

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `X4AUTOALIM_0` | GMAO - Auto-alimentation |  |  |  |  |
| `X1WMSRULES_0` | Prépa avec règles WMS |  |  |  |  |
| `X1PLNCODE_0` | Plan de stabilité |  |  |  |  |
| `X1RULQCODE_0` | Code Règle |  |  |  |  |
| `X4CPLEMB_0` | Couplage |  |  |  |  |
| `X4LOGAUTO_0` | Logistique Automotive |  |  |  |  |
| `X1PIC_0` | PIC |  |  |  |  |
| `X1PICFILTER_0` | Filtre article PIC |  |  |  |  |
| `X4LOGDIS_0` | Logistique Distrib. |  |  |  |  |
| `XPROCTN_0` | Spé : Production continue |  |  |  |  |
| `X4CTRLAUT_0` | Chaînage auto. contrôle |  |  |  |  |
| `LPNMGTCOD_0` | Gestion contenant |  |  |  |  |
| `YCLOAUTO_0` | Clôture OF auto |  |  |  |  |
| `TRFWRH_0` | Dépôt mvt interne |  |  |  |  |
| `SCOWRH_0` | Dépôt expé sous-trt |  |  |  |  |
| `SCCWRH_0` | Dépôt conso sous-trt |  |  |  |  |
| `ALLRULSRE_0` | Règle allocation SAV |  |  |  |  |
| `SREWRH_0` | Dépôt SAV |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `ECCMIN_0` | Compteur mineur |  |  |  |  |
| `ECCMAJ_0` | Compteur majeur |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `CPRAMT_0` | Coût fixe unitaire |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `TRKLEV_0` | Niveau traçabilité |  |  |  |  |
| `XCOUPLV_0` | Couplage L/V |  |  |  |  |
| `XEMBDUR_0` | Emballage durable |  |  |  |  |
| `X4LOCPREP_0` | Emplacement prepa |  |  |  |  |
| `NMFC_0` | NMFC |  |  |  |  |
| `PCCCOD_0` | Nature de dépense |  |  |  |  |
| `XFLGVER_0` | Gestion version |  |  |  |  |
| `ECCFLG_0` | Gestion version |  |  |  |  |
| `ECCSTO_0` | Version stock |  |  |  |  |
| `X4ENRSTQMDP_0` | Enr qualité et mdp |  |  |  |  |
| `X4CHGSTAMDP_0` | Chgt statut et mdp |  |  |  |  |
| `ORDWRH_0` | Dépôt commande |  |  |  |  |
| `MATWRH_0` | Dépôt OF |  |  |  |  |
| `SHIWRH_0` | Dépôt expédition |  |  |  |  |
| `MFGWRH_0` | Dépôt conso |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BASPRIORI_0` | Origine prix |  |  |  |  |
| `PURPRIPRC_0` | % appliqué |  |  |  |  |
| `XINCOMPLET_0` | Incomplet |  |  |  |  |
| `X4SPLITPRH_0` | Split ligne prépa |  |  |  |  |
| `X4VALMOD_0` | Validation modif |  |  |  |  |
| `ALLRULSCO_0` | Règle alloc réappro sous-traitance |  |  |  |  |
| `XNIVSTOCK_0` | Niv libération stock |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `ALLRULORD_0` | Règle allocation commande |  |  |  |  |
| `PTOCOD_0` | Règle d'affectation |  |  |  |  |
| `ALLRULMAT_0` | Règle allocation OF |  |  |  |  |
| `ITMVOU_0` | Volume de l'US |  |  |  |  |
| `FRTCLS_0` | Classe de fret |  |  |  |  |
| `X4MKMMOD_0` | Renvoi paye |  |  |  |  |
| `X4CONFPER_0` | Conf péremption |  |  |  |  |
| `X4INIREFPER_0` | Init ref. péremption |  |  |  |  |
| `X4REFNNSIG_0` | Date ref per non significative |  |  |  |  |
| `X4AUTVER_0` | Maj masse composé |  |  |  |  |
| `ITMSFTTYP_0` | Type article SAF-T |  |  |  |  |
| `X4GESFAB_0` | Gestion fabricant |  |  |  |  |
| `X4NIVBLOC_0` | Niveau de blocage |  |  |  |  |
| `X4STUDEF_0` | Unité par défaut |  |  |  |  |
| `YCASTU_0` | Unité par défaut |  |  |  |  |
| `OTRSTYP_0` | Type mouvement |  |  |  |  |
| `DACPUUCOE_0` | Saisie coeff achat autorisée |  |  |  |  |
| `DACSAUCOE_0` | Saisie coeff vente autorisée |  |  |  |  |
| `DACPCUCOE_0` | Saisie coeff UC autorisée |  |  |  |  |
| `XGRANULE_0` | Granule |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `OVECOD_0` | Frais généraux |  |  |  |  |
| `INTFLG_0` | Maintenance |  |  |  |  |
| `MCEFLG_0` | Maintenance |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `SALFLG_0` | Vendu |  |  |  |  |
| `XCDTFLG_0` | Conditionnement |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `LOCMGTCOD_0` | Gestion emplacement |  |  |  |  |
| `ITMCREMOD_0` | Mode création |  |  |  |  |
| `SALRMNPRC_0` | Tolérance reliquat % |  |  |  |  |
| `MINRMNPRC_0` | Tolérance reliquat % |  |  |  |  |
| `CTMQTY_0` | Quantité contremarque directe |  |  |  |  |
| `RCPFLG_0` | Code réception |  |  |  |  |
| `REOMGTCOD_0` | Mode réapprovisionnement |  |  |  |  |
| `REOPER_0` | Périodicité réaprovisionnement |  |  |  |  |
| `STDFLG_0` | Mode gestion |  |  |  |  |
| `MFGSHTCOD_0` | Lancement si en rupture |  |  |  |  |
| `FOHUOT_0` | Unité temps horizon demande |  |  |  |  |
| `MFGLOTQTY_0` | Lot technique |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `ALLRULSCC_0` | Règle alloc conso sous-traitance |  |  |  |  |
| `XCONTYP_0` | Type conditionnement |  |  |  |  |
| `XARTSEC_0` | Article sécurité |  |  |  |  |
| `STULBEFMT_0` | Format étiquette pour unité stock |  |  |  |  |
| `TRKCOD_0` | Traçabilité |  |  |  |  |
| `CLEPCTAUT_0` | % pour solde automatique |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SSU_0` | Unité statistique |  |  |  |  |
| `PUUSTUCOE_0` | Coefficient UA-US |  |  |  |  |
| `PCKFLG_0` | Colisage |  |  |  |  |
| `PRQFLG_0` | DA obligatoire |  |  |  |  |
| `ITMTYP_0` | Type article |  |  |  |  |
| `INVPRODTYP_0` | Type article |  |  |  |  |
| `REOCOD_0` | Type sugges |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `TCLCOD_0` | Catégorie Article |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `BRDCOD_0` | Famille coûts |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `SCSFLG_0` | Sous-traitance |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `STOCOD_0` | Mode retrait stock |  |  |  |  |
| `CUNCOD_0` | Mode inventaire |  |  |  |  |
| `ITMREFCOU_0` | Compteur Référence Article |  |  |  |  |
| `PURFLG_0` | Acheté |  |  |  |  |
| `MFGFLG_0` | Fabriqué |  |  |  |  |
| `SCPFLG_0` | Sous-traité |  |  |  |  |
| `PHAFLG_0` | Fantôme |  |  |  |  |
| `GENFLG_0` | Générique |  |  |  |  |
| `LNDFLG_0` | Autorisation de prêt |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `EXYSTA_0` | Statut péremption |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `LOTMGTCOD_0` | Gestion lot |  |  |  |  |
| `LOTCOU_0` | Compteur lot |  |  |  |  |
| `SERMGTCOD_0` | Gestion série |  |  |  |  |
| `NEGSTO_0` | Stock négatif autorisé |  |  |  |  |
| `QUAACS_0` | Code accès |  |  |  |  |
| `PLAACS_0` | Code accès |  |  |  |  |
| `QLYCRD_0` | Fiche technique |  |  |  |  |
| `ITMWEI_0` | Poids de l'unité de stock |  |  |  |  |
| `SESCOD_0` | Saisonnalité |  |  |  |  |
| `CTMFLG_0` | Contremarque |  |  |  |  |
| `MINQTY_0` | Quantité minimale |  |  |  |  |
| `MAXQTY_0` | Quantité maximale |  |  |  |  |
| `LBEFMT_0` | Format étiquette |  |  |  |  |
| `PLH_0` | Horizon ferme |  |  |  |  |
| `FIMHOR_0` | Horizon ferme |  |  |  |  |
| `PLHUOT_0` | Unité temps horizon planification |  |  |  |  |
| `FRTHORUOM_0` | Unité temps horizon planification |  |  |  |  |
| `OFS_0` | Délai réapprovisionnement |  |  |  |  |
| `REOFCY_0` | Site réapprovisionnement |  |  |  |  |
| `STDCSTUPD_0` | Mise à jour coût standard |  |  |  |  |
| `CUTCSTUPD_0` | Mise à jour coût std actualisé |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `STOFCY_0` | Site stock |  |  |  |  |
| `REOPOL_0` | Politique réapprovisionnement |  |  |  |  |
| `SAFSTO_0` | Stock sécurité |  |  |  |  |
| `MAXSTO_0` | Stock maximum |  |  |  |  |
| `REOMINQTY_0` | Lot économique |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `SSUSTUCOE_0` | Coefficient Ustat-US |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `EXYMGTCOD_0` | Gestion péremption |  |  |  |  |
| `CCE_0` | Section |  |  |  |  |
| `TCLSHO_0` | Intitulé court |  |  |  |  |
| `TCLSHOAXX_0` | Intitulé court |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `FRTHOR_0` | Horizon planification |  |  |  |  |
| `FOH_0` | Horizon demande |  |  |  |  |
| `TCLDES_0` | Intitulé |  |  |  |  |
| `TCLAXX_0` | Intitulé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `OVECPNFLG_0` | FG cpn calcul FG niv |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `DAYCOV_0` | Couverture |  |  |  |  |
| `SERCOU_0` | Compteur série |  |  |  |  |
| `LOCDES_0` | Catégorie emplacemt |  |  |  |  |
| `ALLRULMFG_0` | Règle allocation production |  |  |  |  |
| `ALLRULTRF_0` | Règle allocation mouvement interne |  |  |  |  |
| `PCURUL_0` | Déstockage UC |  |  |  |  |
| `DEFLOC_0` | Emplac. par défaut |  |  |  |  |
| `XAQP_0` | AQP/AQF |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `TOOFLG_0` | Outillage |  |  |  |  |
| `FIMHORUOM_0` | Unité temps horizon ferme |  |  |  |  |
| `GLOAAAFLG_0` | Statut A |  |  |  |  |
| `GLOQQQFLG_0` | Statut Q |  |  |  |  |
| `GLORRRFLG_0` | Statut R |  |  |  |  |
| `VLTCOD_0` | Méthode de valorisation |  |  |  |  |
| `DEFLOCTYP_0` | Type emplacement par défaut |  |  |  |  |
| `FLGFAS_0` | Immobilisable |  |  |  |  |
| `XGESTPAL_0` | Palette stockée |  |  |  |  |
| `ALLRULSHI_0` | Régle allocation expédition |  |  |  |  |
| `PCKSTKFLG_0` | Détail stock |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `REOTSD_0` | Seuil de réapprovisionnement |  |  |  |  |
| `SIMCSTUPD_0` | Màj coût simulation |  |  |  |  |
| `EEU_0` | Unité supplémentaire DEB |  |  |  |  |
| `EEUSTUCOE_0` | Coef UE-US |  |  |  |  |
| `CFGLIN_0` | Ligne de produit |  |  |  |  |
| `BUDCSTUPD_0` | Mise à jour coût std budget |  |  |  |  |

### Exemple SQL

```sql
SELECT
    X4AUTOALIM_0,
    X1WMSRULES_0,
    X1PLNCODE_0,
    X1RULQCODE_0,
    X4CPLEMB_0
FROM ITMCATEG
WHERE -- vos conditions
```

---

## ITMCOMP

**Articles concurrents**

**Nombre de champs** : 24

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `NUM_0` | Code |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `REF_0` | Référence |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `DES_0` | Description |  |  |  |  |
| `TYPFULSHC_0` | Type Clob |  |  |  |  |
| `TYPFULDES_0` | Type Clob |  |  |  |  |
| `TYPFULASE_0` | Type Clob |  |  |  |  |
| `NUMFULSHC_0` | Chrono Clob |  |  |  |  |
| `NUMFULDES_0` | Chrono Clob |  |  |  |  |
| `NUMFULASE_0` | Chrono Clob |  |  |  |  |
| `SHC_0` | Faiblesses |  |  |  |  |
| `BRA_0` | Marque |  |  |  |  |
| `SALFCY_0` | Site |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `SALPRI_0` | Prix moyen constaté |  |  |  |  |
| `ASE_0` | Avantages |  |  |  |  |
| `TTR_0` | Désignation |  |  |  |  |
| `CPPITMDESAXX_0` | Désignation |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    NUM_0,
    UPDDATTIM_0,
    REF_0,
    CUR_0
FROM ITMCOMP
WHERE -- vos conditions
```

---

## ITMCOST

**Articles - Coûts**

**Nombre de champs** : 81

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ITCSEQ_0` | N° de séquence |  |  |  |  |
| `SLTOVECOL_0` | Colonne frais généraux |  |  |  |  |
| `XQUONUM_0` | N° devis technique |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `OVESCOCST_0` | Coût frais généraux sous-traitance |  |  |  |  |
| `MATLEVCST_0` | Coût niveau matière |  |  |  |  |
| `MATLEV0_0` | Coût niveau matière |  |  |  |  |
| `MACLEVCST_0` | Coût niveau machine |  |  |  |  |
| `LABLEVCST_0` | Coût niveau main-d'oeuvre |  |  |  |  |
| `OVELEVCST_0` | Coût niveau frais généraux |  |  |  |  |
| `SCOLEVCST_0` | Coût niveau sous-traitance |  |  |  |  |
| `PHYSTO_0` | Stock physique |  |  |  |  |
| `MATCST_0` | Coût matière |  |  |  |  |
| `SLTMATCST_0` | Coût matière |  |  |  |  |
| `MACCST_0` | Coût machine |  |  |  |  |
| `LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `SCOCST_0` | Coût sous-traitance |  |  |  |  |
| `OVEMATCST_0` | Coût frais généraux matière |  |  |  |  |
| `CSTSEQ_0` | Séquence |  |  |  |  |
| `VLTCCERAT_0` | Choix taux section |  |  |  |  |
| `FXDMATCST_0` | Coût matière fixe |  |  |  |  |
| `FXDMACCST_0` | Coût machine fixe |  |  |  |  |
| `FXDLABCST_0` | Coût main-d'oeuvre fixe |  |  |  |  |
| `FXDOVEMAT_0` | Coût frais généraux matière fixe |  |  |  |  |
| `FXDOVEMAC_0` | Coût frais généraux machine fixe |  |  |  |  |
| `FXDOVELAB_0` | Coût frais généraux m-o fixe |  |  |  |  |
| `FXDSCOCST_0` | Coût sous-traitance fixe |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `OVEMACCST_0` | Coût frais généraux machine |  |  |  |  |
| `OVELABCST_0` | Coût frais généraux main-d'oeuvre |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `OLDCST_0` | Ancien actualisé |  |  |  |  |
| `CSTTYP_0` | Type de coût |  |  |  |  |
| `YEA_0` | Année |  |  |  |  |
| `ITCDAT_0` | Date calcul |  |  |  |  |
| `UID_0` | Process |  |  |  |  |
| `SCOTOT_0` | Total sous-traitance |  |  |  |  |
| `MATTOT_0` | Total coût matière |  |  |  |  |
| `MACTOT_0` | Total coût machine |  |  |  |  |
| `LABTOT_0` | Total main-d'oeuvre |  |  |  |  |
| `OVETOT_0` | Total frais généraux |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `FXDOVESCO_0` | Coût frais généraux s/t fixe |  |  |  |  |
| `FXDMATLEV_0` | Coût niveau matière fixe |  |  |  |  |
| `FXDMATLEV0_0` | Coût niveau matière fixe |  |  |  |  |
| `FXDMACLEV_0` | Coût niveau machine fixe |  |  |  |  |
| `FXDLABLEV_0` | Coût niveau main-d'oeuvre fixe |  |  |  |  |
| `FXDOVELEV_0` | Coût niveau frais généraux fixe |  |  |  |  |
| `FXDSCOLEV_0` | Coût niveau sous-traitance fixe |  |  |  |  |
| `CSTTOT_0` | Coût total |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `CLCQTY_0` | Quantité de calcul |  |  |  |  |
| `VLTTOT_0` | Coût de valorisation |  |  |  |  |
| `FXDCSTDSP_0` | Répartition des coûts fixes |  |  |  |  |
| `FIYNUM_0` | Numéro exercice |  |  |  |  |
| `OLDDAT_0` | Ancienne date |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `OVEMATLEV_0` | Frais généraux matière niveau |  |  |  |  |
| `FXDOVEMATL_0` | Frais généraux fixe matière niveau |  |  |  |  |
| `OVELABLEV_0` | Frais généraux main d'oeuvre niveau |  |  |  |  |
| `FXDOVELABL_0` | Frais généraux fixe m-oeuvre niveau |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `DESCEND_0` | Multi niveaux |  |  |  |  |
| `OVEPRD_0` | FG entrée niv |  |  |  |  |
| `OVEMACLEV_0` | Frais généraux machine niveau |  |  |  |  |
| `FXDOVEMACL_0` | Frais généraux fixe machine niveau |  |  |  |  |
| `OVESCOLEV_0` | Frais généraux sous-traitance niv |  |  |  |  |
| `FXDOVESCOL_0` | Frais généraux fixe s/traitance niv |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `ITCSTRDAT_0` | Validité |  |  |  |  |
| `ITCENDDAT_0` | Validité |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `PRNUID_0` | Identifiant |  |  |  |  |
| `UPDFLG_0` | Mise à jour |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    ITCSEQ_0,
    SLTOVECOL_0,
    XQUONUM_0,
    ECCVALMAJ_0
FROM ITMCOST
WHERE -- vos conditions
```

---

## ITMCOSTPIT

**Articles-coûts instant T**

**Nombre de champs** : 32

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `PERNUM_0` | Numéro période |  |  |  |  |
| `VLTNUM_0` | No méthode |  |  |  |  |
| `ITCSEQ_0` | N° de séquence |  |  |  |  |
| `PERVALCHG_0` | Modification valeur période |  |  |  |  |
| `PERAMTDEV_0` | Total non absorbé |  |  |  |  |
| `PERRCPQTY_0` | Qté. entrée période |  |  |  |  |
| `PERISSQTY_0` | Qté. sortie période |  |  |  |  |
| `PERCUMQTY_0` | Qté. totale période |  |  |  |  |
| `RECALCDT_0` | Date resynchro. |  |  |  |  |
| `RECALCUSR_0` | Utilisateur resynchro. |  |  |  |  |
| `PERBEGQTY_0` | Quantité début |  |  |  |  |
| `PERBEGCST_0` | Valeur début |  |  |  |  |
| `PERRCPCST_0` | Valeur entrée période |  |  |  |  |
| `PERISSCST_0` | Valeur sortie période |  |  |  |  |
| `PERCUMCST_0` | Valeur totale période |  |  |  |  |
| `PERENDQTY_0` | Quantité fin |  |  |  |  |
| `PERENDCST_0` | Valeur fin |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CSTTYP_0` | Type de coût |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `STDCST_0` | Coût standard |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `FIYNUM_0` | Numéro exercice |  |  |  |  |
| `PERSTR_0` | Début période |  |  |  |  |
| `PEREND_0` | Fin période |  |  |  |  |
| `CSTCHGDAT_0` | Date modification |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ECCVALMIN_0,
    PERNUM_0,
    VLTNUM_0,
    ITCSEQ_0,
    PERVALCHG_0
FROM ITMCOSTPIT
WHERE -- vos conditions
```

---

## ITMCPPLNK

**Lien Article/Concurrents**

**Nombre de champs** : 7

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `ITMCPPNUM_0` | Article concurrent |  |  |  |  |
| `ITMNUM_0` | Code article |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |

### Exemple SQL

```sql
SELECT
    UPDDATTIM_0,
    UPDUSR_0,
    CREUSR_0,
    ITMCPPNUM_0,
    ITMNUM_0
FROM ITMCPPLNK
WHERE -- vos conditions
```

---

## ITMCPTVER

**Paramétrage compteurs versions**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `SEQLNG_0` | Longueur séquence |  |  |  |  |
| `CNS_0` | Gestion d'une constante |  |  |  |  |
| `SEQBEG_0` | Début séquence |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `SEQ_0` | Numéro de séquence |  |  |  |  |
| `ICVCOD_0` | Compteur |  |  |  |  |
| `DESAXX_0` | Intitulé |  |  |  |  |
| `SEQTYP_0` | Type numéro de séquence |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CNSVAL_0` | Valeur constante |  |  |  |  |
| `SEQEND_0` | Fin séquence |  |  |  |  |

### Exemple SQL

```sql
SELECT
    SEQLNG_0,
    CNS_0,
    SEQBEG_0,
    UPDDAT_0,
    CREUSR_0
FROM ITMCPTVER
WHERE -- vos conditions
```

---

## ITMCUSNOM

**Nomenclature NC8 articles**

**Nombre de champs** : 13

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ITMCUSDES_0` | Libellé |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMNOM_0` | Code |  |  |  |  |
| `ITMCUSSHO_0` | Tri alpha |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `DESAXX_0` | Intitulé |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `ITMCUSUOM_0` | Unité supplémentaire |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    ITMCUSDES_0,
    EXPNUM_0
FROM ITMCUSNOM
WHERE -- vos conditions
```

---

## ITMFACILIT

**Articles - Sites**

**Nombre de champs** : 156

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BUDCSTUPD_0` | Mise à jour coût std budget |  |  |  |  |
| `QUALTI_0` | Contrôle qualité |  |  |  |  |
| `PCKSTKFLG_0` | Détail stock |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `REOTSD_0` | Seuil de réapprovisionnement |  |  |  |  |
| `TCTRNUM_0` | Contenant |  |  |  |  |
| `MIC_0` | Coeff réduct |  |  |  |  |
| `SIMCSTUPD_0` | Màj coût simulation |  |  |  |  |
| `SAFSTOCLC_0` | Stock sécurité calculé |  |  |  |  |
| `REOTSDCLC_0` | Seuil réapprovisionnement calculé |  |  |  |  |
| `REOMINCLC_0` | Lot économique calculé |  |  |  |  |
| `MAXSTOCLC_0` | Stock maximum calculé |  |  |  |  |
| `LOCNUM_0` | N° emplacement |  |  |  |  |
| `DEFLOC_0` | Emplac. par défaut |  |  |  |  |
| `SHLLTI_0` | Délai recontrôle |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `XAQP_0` | AQP/AQF |  |  |  |  |
| `PROPER_0` | Prorata qté régularisation |  |  |  |  |
| `MFGLTI_0` | Délai de fabrication |  |  |  |  |
| `WIPPRO_0` | Protection WIP |  |  |  |  |
| `TOTLTI_0` | Multi niveaux |  |  |  |  |
| `VLTCODHIS_0` | Méthode valorisation |  |  |  |  |
| `VLTCOD_0` | Méthode de valorisation |  |  |  |  |
| `DEFLOCTYP_0` | Type emplacement par défaut |  |  |  |  |
| `VLTCODDAT_0` | Date expertise |  |  |  |  |
| `QUAADXUID_0` | Process fréquence |  |  |  |  |
| `QUANUM_0` | Nombre entrées |  |  |  |  |
| `QUANUMUID_0` | Entrées process |  |  |  |  |
| `XGESTPAL_0` | Palette stockée |  |  |  |  |
| `ITMTOLNEG_0` | Tolérance article - (%) |  |  |  |  |
| `CUNFLG_0` | Bloqué inventaire |  |  |  |  |
| `MFGROUALT_0` | Alternative gamme  fabrication |  |  |  |  |
| `CSTROUALT_0` | Alternative gamme coût |  |  |  |  |
| `RCCROUALT_0` | Alternative gamme PGC |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `STOFCY_0` | Site stock |  |  |  |  |
| `REOPOL_0` | Politique réapprovisionnement |  |  |  |  |
| `SAFSTO_0` | Stock sécurité |  |  |  |  |
| `MAXSTO_0` | Stock maximum |  |  |  |  |
| `REOMINQTY_0` | Lot économique |  |  |  |  |
| `FOH_0` | Horizon demande |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `OVECPNFLG_0` | FG cpn calcul FG niv |  |  |  |  |
| `DAYCOV_0` | Couverture |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `WGRACS_0` | Code accès |  |  |  |  |
| `QUAACS_0` | Code accès |  |  |  |  |
| `QLYCRD_0` | Fiche technique |  |  |  |  |
| `CSTROU_0` | Coût |  |  |  |  |
| `SESCOD_0` | Saisonnalité |  |  |  |  |
| `PLH_0` | Horizon ferme |  |  |  |  |
| `PLHUOT_0` | Unité temps horizon planification |  |  |  |  |
| `OFS_0` | Délai réapprovisionnement |  |  |  |  |
| `REOFCY_0` | Site réapprovisionnement |  |  |  |  |
| `X1INVFLG_0` | Inventaire |  |  |  |  |
| `STDCSTUPD_0` | Mise à jour coût standard |  |  |  |  |
| `CUTCSTUPD_0` | Mise à jour coût std actualisé |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `STOCOD_0` | Mode retrait stock |  |  |  |  |
| `CUNCOD_0` | Mode inventaire |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `PCKFLG_0` | Colisage |  |  |  |  |
| `REOCOD_0` | Type sugges |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `MFGROU_0` | Gamme fabrication |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XTYPOF_0` | Type OF |  |  |  |  |
| `XSTOLOCDEF_0` | Emplacement de stockage par défaut |  |  |  |  |
| `XARTSEC_0` | Article sécurité |  |  |  |  |
| `RELSCATIA_0` | Perte au lancement |  |  |  |  |
| `PRPLTI_0` | Picking |  |  |  |  |
| `X1INVSSSNUM_0` | Session  inventaire |  |  |  |  |
| `CUNLISNUM_0` | Inventaire en cours |  |  |  |  |
| `CLEPCTAUT_0` | % pour solde automatique |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `OVECOD_0` | Frais généraux |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `LOCMGTCOD_0` | Gestion emplacement |  |  |  |  |
| `RCCROU_0` | PGC |  |  |  |  |
| `REOMGTCOD_0` | Mode réapprovisionnement |  |  |  |  |
| `REOPER_0` | Périodicité réaprovisionnement |  |  |  |  |
| `MONPROYEA_0` | Année dernier traitement mensuel |  |  |  |  |
| `MONPROMON_0` | Mois dernier traitement mensuel |  |  |  |  |
| `YEAPROYEA_0` | Dernier traitement annuel |  |  |  |  |
| `MFGSHTCOD_0` | Lancement si en rupture |  |  |  |  |
| `FOHUOT_0` | Unité temps horizon demande |  |  |  |  |
| `MFGLOTQTY_0` | Lot technique |  |  |  |  |
| `PJMSTRSTK_0` | Stock pour affaire |  |  |  |  |
| `EXCFDMA_0` | Date disponibilité non applicable |  |  |  |  |
| `X4TOTSUGPER_0` | Tol. Sug. %  perte |  |  |  |  |
| `X4GESFAB_0` | Gestion fabricant |  |  |  |  |
| `XMAIDUR_0` | Préparation cde France |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `OTRSTYP_0` | Type mouvement |  |  |  |  |
| `SHLLTIUOM_0` | Unité tps recontrole |  |  |  |  |
| `QUAFRY_0` | Fréquence  contrôle qualité |  |  |  |  |
| `SMPTYP_0` | Echantillonnage |  |  |  |  |
| `GENLEVINS_0` | Niveau général inspection |  |  |  |  |
| `NQA_0` | Niveau qualité acceptable |  |  |  |  |
| `SMPMOD_0` | Mode échantillonnage |  |  |  |  |
| `REDMODFLG_0` | Mode de redressement |  |  |  |  |
| `LTIQLYCRD_0` | Fiche qualité recontrôle |  |  |  |  |
| `XGRANULE_0` | Granule |  |  |  |  |
| `NEWLTISTA_0` | Statut  recontrôle |  |  |  |  |
| `DLU_0` | Coefficient DLU |  |  |  |  |
| `NMFC_0` | NMFC |  |  |  |  |
| `ORDWRH_0` | Dépôt commande |  |  |  |  |
| `MATWRH_0` | Dépôt OF |  |  |  |  |
| `SHIWRH_0` | Dépôt expédition |  |  |  |  |
| `ITMTOLPOS_0` | Tolérance pesée +(%) |  |  |  |  |
| `XINCOMPLET_0` | Incomplet |  |  |  |  |
| `X4EXTDOSLOT_0` | Format de fichier |  |  |  |  |
| `X4SPLITPRH_0` | Split ligne prépa |  |  |  |  |
| `X4CMJCLC_0` | Calcul CMJ |  |  |  |  |
| `XPERECO_0` | Période économique |  |  |  |  |
| `XMODDOSLOT_0` | Modèle dossier lot |  |  |  |  |
| `XNIVSTOCK_0` | Niv libération stock |  |  |  |  |
| `PTOCOD_0` | Règle d'affectation |  |  |  |  |
| `FRTCLS_0` | Classe de fret |  |  |  |  |
| `XMAIQTY_0` | Liste des devis /cli/rep/etat |  |  |  |  |
| `XPROCTN_0` | Production continue |  |  |  |  |
| `STAFED_0` | Région/Etat |  |  |  |  |
| `COMSEQCON_0` | Ctrl séq. composant |  |  |  |  |
| `X4FTSCODLTI_0` | FT recontrôle |  |  |  |  |
| `LPNMGTCOD_0` | Gestion contenant |  |  |  |  |
| `TCTRPCUCOE_0` | Nb unités/contenant |  |  |  |  |
| `TCTRDEF_0` | Contenant par défaut |  |  |  |  |
| `MFGWRH_0` | Dépôt conso |  |  |  |  |
| `TRFWRH_0` | Dépôt mvt interne |  |  |  |  |
| `SCOWRH_0` | Dépôt expé sous-trt |  |  |  |  |
| `SCCWRH_0` | Dépôt conso sous-trt |  |  |  |  |
| `ISM_0` | Stockage/Manipulation |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XUCCOMPL_0` | %UC Complémentaire |  |  |  |  |
| `XFTSCOD_0` | Code fiche technique spéciale |  |  |  |  |
| `PCKSERFLG_0` | Détail série |  |  |  |  |
| `X1PLNCODE_0` | Plan de stabilité |  |  |  |  |
| `X1RULQCODE_0` | Code Règle |  |  |  |  |
| `X1TOLFEFIFO_0` | Tolérence FIFO/FEFO en J |  |  |  |  |
| `X1CNI_0` | Contrainte obligatoire |  |  |  |  |
| `X4RFASTUCOE_0` | Coefficient RFA/US |  |  |  |  |
| `X4UOMRFA_0` | Unité RFA |  |  |  |  |
| `X4EXCLRFA_0` | Exclusion RFA |  |  |  |  |
| `X1CLAAFF_0` | Classe d'affectation |  |  |  |  |
| `X1CLAROT_0` | Classe de rotation |  |  |  |  |
| `X1ZPREP_0` | Zone de préparation |  |  |  |  |
| `ZBSM_0` | Pas d'impression BSM |  |  |  |  |
| `X4TYPOFAUT_0` | Type OF auto |  |  |  |  |
| `X4TYPOFITM_0` | Avec article |  |  |  |  |
| `X4TYPOFUSR_0` | Avec utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BUDCSTUPD_0,
    QUALTI_0,
    PCKSTKFLG_0,
    SHR_0,
    REOTSD_0
FROM ITMFACILIT
WHERE -- vos conditions
```

---

## ITMMASTER

**Articles**

**Nombre de champs** : 220

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `YFAMSTAT7_0` | Famille stat 7 |  |  |  |  |
| `YFAMSTAT6_0` | Famille stat 6 |  |  |  |  |
| `UNNBR_0` | Numéro ONU |  |  |  |  |
| `X4AUTOALIM_0` | GMAO - Auto-alimentation |  |  |  |  |
| `X4LOGAUTO_0` | Logistique Automotive |  |  |  |  |
| `X4ALTBOMSAV_0` | Alternative nomenclature  SAV |  |  |  |  |
| `X1ULDEF_0` | UL / Défaut |  |  |  |  |
| `X4DMDLOG_0` | Code DMDLOG |  |  |  |  |
| `XEXPTRANSA_0` | Date export DMDLOG |  |  |  |  |
| `X1OPNDLY_0` | Conserv. ap. ouv. (j) |  |  |  |  |
| `NEWLTISTA_0` | Statut  recontrôle |  |  |  |  |
| `DLU_0` | Coefficient DLU |  |  |  |  |
| `PCCCOD_0` | Nature de dépense |  |  |  |  |
| `XFLGVER_0` | Gestion version |  |  |  |  |
| `ECCFLG_0` | Gestion version |  |  |  |  |
| `ECCSTO_0` | Version stock |  |  |  |  |
| `XCETIAT_0` | Soumis à CETIAT |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X19ADRCDT_0` | Adresse tiers de conditionnement |  |  |  |  |
| `X19ADRFAB_0` | Adresse tiers de fabrication |  |  |  |  |
| `X19BPRCDT_0` | Tiers de conditionnement |  |  |  |  |
| `XTGAPSUB_0` | TGAP sur substance |  |  |  |  |
| `XTGAPSUBTA_0` | Taux TGAP substance |  |  |  |  |
| `X19BPRLIB_0` | Tiers de libération |  |  |  |  |
| `X19ADRLIB_0` | Adresse tiers de libération |  |  |  |  |
| `X19BPRCTL_0` | Tiers de contrôle |  |  |  |  |
| `X19ADRCTL_0` | Adresse tiers de contrôle |  |  |  |  |
| `XNIVSTOCK_0` | Niv libération stock |  |  |  |  |
| `EECGES_0` | Soumis à la DEB |  |  |  |  |
| `ECCBOMALT2_0` | Alternative de nomenclature |  |  |  |  |
| `ECCBOMALT3_0` | Alternative de nomenclature |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `ECCROUALT_0` | Alternative de gamme |  |  |  |  |
| `INTFLG_0` | Intermédiaire |  |  |  |  |
| `PLMATTURL_0` | Documents liés |  |  |  |  |
| `PLMITMREF_0` | Article PLM |  |  |  |  |
| `PLMHISURL_0` | Historique PLM |  |  |  |  |
| `ITMVOU_0` | Volume de l'US |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `NPIPRO_0` | Prototype |  |  |  |  |
| `XECHIFCPNITM_0` | Composant chiffrage |  |  |  |  |
| `STAFED_0` | Région/Etat |  |  |  |  |
| `X4INCLUSFCO_0` | Inclus fiche compo. |  |  |  |  |
| `X4SUIVFCO_0` | Suivi fiche compo. |  |  |  |  |
| `STCNUM_0` | Structure de coûts |  |  |  |  |
| `SSTCOD_0` | Code taxe SST |  |  |  |  |
| `ECCMIN_0` | Compteur mineur |  |  |  |  |
| `ECCMAJ_0` | Compteur majeur |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `CPRAMT_0` | Coût achat forfaitaire |  |  |  |  |
| `MATTOL_0` | Règle rapprochement |  |  |  |  |
| `TRKLEV_0` | Niveau traçabilité |  |  |  |  |
| `XFECOD_0` | Code famille technique |  |  |  |  |
| `ZNBFAB_0` | NB fabricant |  |  |  |  |
| `XCOUPLV_0` | Couplage L/V |  |  |  |  |
| `XCODLIG_0` | Code sous-statut |  |  |  |  |
| `XTGAPCAT_0` | Catégorie TGAP |  |  |  |  |
| `XFTCOD_0` | Code fiche technique |  |  |  |  |
| `YFAMSTAT8_0` | Famille stat 8 |  |  |  |  |
| `YCODAUTO_0` | Code automate |  |  |  |  |
| `ZDATE_0` | Date de mise en élab |  |  |  |  |
| `PUU_0` | Unité achat |  |  |  |  |
| `TCLCOD_0` | Catégorie article |  |  |  |  |
| `SAU_0` | Unité vente |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `ITMSTA_0` | Statut article |  |  |  |  |
| `SALFLG_0` | Vendu |  |  |  |  |
| `XCDT_0` | Conditionnement |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `MINRMNPRC_0` | Tolérance reliquat % |  |  |  |  |
| `ITMEXNFLG_0` | Flag d'exemption |  |  |  |  |
| `STATAXFLG_0` | Flag taxabilité état/local |  |  |  |  |
| `RCPFLG_0` | Code réception |  |  |  |  |
| `STDFLG_0` | Mode gestion |  |  |  |  |
| `ZDEM_0` | Demandeur chgt sta |  |  |  |  |
| `ALG_0` | Allergènes |  |  |  |  |
| `ALGDAT_0` | Date chg allergène |  |  |  |  |
| `ALGBOM_0` | Code nomen allergène |  |  |  |  |
| `XNBETICOMP_0` | Nombre étiquette complémentaire |  |  |  |  |
| `ECCROUFLG_0` | Version gamme |  |  |  |  |
| `X19BPRFAB_0` | Tiers de fabrication |  |  |  |  |
| `X4CONFPER_0` | Conf péremption |  |  |  |  |
| `X4INIREFPER_0` | Init ref. péremption |  |  |  |  |
| `X4REFNNSIG_0` | Date ref per non significative |  |  |  |  |
| `ITMSFTTYP_0` | Type article SAF-T |  |  |  |  |
| `YCASTU_0` | Unité par défaut |  |  |  |  |
| `X4STUDEF_0` | Unité par défaut |  |  |  |  |
| `DACPUUCOE_0` | Saisie coeff achat autorisée |  |  |  |  |
| `DACSAUCOE_0` | Saisie coeff vente autorisée |  |  |  |  |
| `DACPCUCOE_0` | Saisie coeff UC autorisée |  |  |  |  |
| `FLYCAT_0` | Catégorie de coupon |  |  |  |  |
| `STOISSDEF_0` | Sortie de stock |  |  |  |  |
| `SHLUOM_0` | Unité tps péremption |  |  |  |  |
| `SHLLTIUOM_0` | Unité tps recontrole |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CSTGRP_0` | Famille coûts |  |  |  |  |
| `BRDCOD_0` | Famille coûts |  |  |  |  |
| `PLAACS_0` | Accès gestionnaire |  |  |  |  |
| `RPLITM_0` | Article remplacement |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XCONPO_0` | Poids Brut (Kg) |  |  |  |  |
| `XCONVOL_0` | Code Volume |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `XCONTYP_0` | Type conditionnement |  |  |  |  |
| `STULBEFMT_0` | Format étiquette pour unité stock |  |  |  |  |
| `CFGBPRREF_0` | Référence tiers |  |  |  |  |
| `TPLCONGUA_0` | Contrat de garantie |  |  |  |  |
| `CFGDELDAT_0` | Date purge config. |  |  |  |  |
| `PITCDT_0` | Jetons à créditer |  |  |  |  |
| `CFGITMREF_0` | Article de référence |  |  |  |  |
| `DTY_0` | Densité |  |  |  |  |
| `XDENSITE_0` | Densité |  |  |  |  |
| `XSTUUCDTCO_0` | Coef UCDT/US |  |  |  |  |
| `XCOEFTGAP_0` | Coefficient TGAP |  |  |  |  |
| `TRKCOD_0` | Traçabilité |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `X4BCALTGAM_0` | Alternative gamme |  |  |  |  |
| `X4CTRLFLG_0` | Contrôle |  |  |  |  |
| `FIMHOR_0` | Horizon ferme |  |  |  |  |
| `FRTHORUOM_0` | Unité temps horizon planification |  |  |  |  |
| `OFS_0` | Délai réapprovisionnement |  |  |  |  |
| `ITMDES3_0` | Désignation 3 |  |  |  |  |
| `SCSFLG_0` | Sous-traitance |  |  |  |  |
| `STOCRD_0` | Fiche stockage |  |  |  |  |
| `LIFSTRDAT_0` | Début vie |  |  |  |  |
| `LIFENDDAT_0` | Fin vie |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PURFLG_0` | Acheté |  |  |  |  |
| `MFGFLG_0` | Fabriqué |  |  |  |  |
| `SCPFLG_0` | Sous-traité |  |  |  |  |
| `PHAFLG_0` | Fantôme |  |  |  |  |
| `GENFLG_0` | Générique |  |  |  |  |
| `CPRCOE_0` | Coefficient frais approche |  |  |  |  |
| `EXYSTA_0` | Statut péremption |  |  |  |  |
| `VOU_0` | Unité Volume |  |  |  |  |
| `WEU_0` | Unité poids |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `ITMDES1_0` | Désignation 1 |  |  |  |  |
| `DES1AXX_0` | Désignation 1 |  |  |  |  |
| `ITMDES2_0` | Désignation 2 |  |  |  |  |
| `DES2AXX_0` | Désignation 2 |  |  |  |  |
| `ITMSTD_0` | Norme |  |  |  |  |
| `EANCOD_0` | Code EAN |  |  |  |  |
| `DEFPOT_0` | Titre par défaut |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `SSU_0` | Unité statistique |  |  |  |  |
| `PUUSTUCOE_0` | Coefficient UA-US |  |  |  |  |
| `PRQFLG_0` | DA obligatoire |  |  |  |  |
| `MFGTEX_0` | Texte production |  |  |  |  |
| `INVPRODTYP_0` | Type article |  |  |  |  |
| `X4BCGAM_0` | Gamme |  |  |  |  |
| `FLGFAS_0` | Immobilisable |  |  |  |  |
| `CFGBPRNUM_0` | Tiers |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `ALTBOMHDK_0` | Alternative |  |  |  |  |
| `X4BCNOM_0` | Nomenclature |  |  |  |  |
| `SAUSTUCOE_0` | Coefficient UV-US |  |  |  |  |
| `SSUSTUCOE_0` | Coefficient Ustat-US |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `EXYMGTCOD_0` | Gestion péremption |  |  |  |  |
| `HOUUOM_0` | Unité pour l'heure |  |  |  |  |
| `MNTUOM_0` | Unité pour minutes |  |  |  |  |
| `XPOHTYPITM_0` | Type de commande |  |  |  |  |
| `VACITM_0` | Niveau taxe |  |  |  |  |
| `FRTHOR_0` | Horizon planification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `LOTMGTCOD_0` | Gestion lot |  |  |  |  |
| `LOTCOU_0` | Compteur lot |  |  |  |  |
| `SERMGTCOD_0` | Gestion série |  |  |  |  |
| `DES3AXX_0` | Désignation 3 |  |  |  |  |
| `NEGSTO_0` | Stock négatif autorisé |  |  |  |  |
| `XCRY_0` | Code pays |  |  |  |  |
| `XQCDT_0` | Quantité |  |  |  |  |
| `SHL_0` | Délai péremption |  |  |  |  |
| `ITMWEI_0` | Poids de l'unité de stock |  |  |  |  |
| `DEFACT_0` | Titre UI par défaut |  |  |  |  |
| `CUSREF_0` | Référence douanière |  |  |  |  |
| `PURTEX_0` | Texte achat |  |  |  |  |
| `PURBASPRI_0` | Prix de base |  |  |  |  |
| `LBEFMT_0` | Format étiquette |  |  |  |  |
| `CFGFLDALP1_0` | Champ alp.1 |  |  |  |  |
| `CFGFLDALP2_0` | Champ alp.2 |  |  |  |  |
| `CFGFLDALP3_0` | Champ alp.3 |  |  |  |  |
| `CFGFLDALP4_0` | Champ alp.4 |  |  |  |  |
| `CFGFLDALP5_0` | Champ alp.5 |  |  |  |  |
| `CFGFLDALP6_0` | Champ alp.6 |  |  |  |  |
| `SEAKEY_0` | Clé recherche |  |  |  |  |
| `PITCDTUOM_0` | Unité de crédit |  |  |  |  |
| `TPLCONLND_0` | Contrat de prêt |  |  |  |  |
| `CREMAC_0` | Création de parc |  |  |  |  |
| `X4CODPRD_0` | Code produit |  |  |  |  |
| `YQUICK_0` | Ctr qualité |  |  |  |  |
| `EEU_0` | Unité supplémentaire DEB |  |  |  |  |
| `EEUSTUCOE_0` | Coef UE-US |  |  |  |  |
| `CFGLIN_0` | Ligne de produit |  |  |  |  |
| `CFGFLDNUM1_0` | Champ num.1 |  |  |  |  |
| `CFGFLDNUM2_0` | Champ num.2 |  |  |  |  |
| `CFGFLDNUM3_0` | Champ num.3 |  |  |  |  |
| `CFGFLDNUM4_0` | Champ num.4 |  |  |  |  |
| `CFGFLDNUM5_0` | Champ num.5 |  |  |  |  |
| `CFGFLDNUM6_0` | Champ num.6 |  |  |  |  |
| `SERCOU_0` | Compteur série |  |  |  |  |
| `PCURUL_0` | Déstockage UC |  |  |  |  |
| `SHLLTI_0` | Délai recontrôle |  |  |  |  |
| `TPLCONSRV_0` | Contrat de service |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `XITMITM_0` | Article maître |  |  |  |  |
| `XUCDT_0` | Unité de condit. |  |  |  |  |
| `XUCDTCOE_0` | Coef UCDT/STU maitre |  |  |  |  |
| `HDKITMTYP_0` | Type d'article |  |  |  |  |
| `DAYUOM_0` | Unité pour les jours |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `TOOFLG_0` | Outillage |  |  |  |  |
| `FIMHORUOM_0` | Unité temps horizon ferme |  |  |  |  |
| `X4BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |

### Exemple SQL

```sql
SELECT
    YFAMSTAT7_0,
    YFAMSTAT6_0,
    UNNBR_0,
    X4AUTOALIM_0,
    X4LOGAUTO_0
FROM ITMMASTER
WHERE -- vos conditions
```

---

## ITMMVT

**Cumuls Article-Site**

**Nombre de champs** : 116

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TRFSTO_0` | Stock transit |  |  |  |  |
| `LASCUNDAT_0` | Date dernier inventaire |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CTLALL_0` | Alloué interne 'Q' |  |  |  |  |
| `REJALL_0` | Alloué interne 'R' |  |  |  |  |
| `SCOPHYALL_0` | Alloué ss-trait 'A' |  |  |  |  |
| `SCOCTLALL_0` | Alloué ss-trait 'Q' |  |  |  |  |
| `SCOREJALL_0` | Alloué ss-trait 'R' |  |  |  |  |
| `ORDSTO_0` | En réappro |  |  |  |  |
| `PLFPHYSTO_0` | Quai 'A' |  |  |  |  |
| `PLFCTLSTO_0` | Quai 'Q' |  |  |  |  |
| `PLFREJSTO_0` | Quai 'R' |  |  |  |  |
| `X4SAFSTOCMJ_0` | Stock sécurité |  |  |  |  |
| `X4REOTSDCMJ_0` | Seuil réappro |  |  |  |  |
| `X4MAXSTOCMJ_0` | Stock maximum |  |  |  |  |
| `AVC_0` | Prix moyen pondéré |  |  |  |  |
| `CUNSTO_0` | Stock dernier inventaire |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SALSTO_0` | En cde client |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `AVCBASQTY_0` | Base quantité pour calcul PMP |  |  |  |  |
| `AVCBASAMT_0` | Base montant pour calcul PMP |  |  |  |  |
| `NEXCUNDAT_0` | Prochain inventaire |  |  |  |  |
| `PHYSTO_0` | Stock interne 'A' |  |  |  |  |
| `CTLSTO_0` | Stock interne 'Q' |  |  |  |  |
| `REJSTO_0` | Stock interne 'R' |  |  |  |  |
| `BPRPHYSTO_0` | Stock prêté 'A' |  |  |  |  |
| `BPRCTLSTO_0` | Stock prêté 'Q' |  |  |  |  |
| `BPRREJSTO_0` | Stock prêté 'R' |  |  |  |  |
| `SCOPHYSTO_0` | Stock sous-trait 'A' |  |  |  |  |
| `SCOCTLSTO_0` | Stock sous-trait 'Q' |  |  |  |  |
| `SCOREJSTO_0` | Stock sous-trait 'R' |  |  |  |  |
| `PHYALL_0` | Alloué interne 'A' |  |  |  |  |
| `CUNDIM_0` | Nombre lignes |  |  |  |  |
| `TRASTO_0` | Stock transféré |  |  |  |  |
| `X4CUM_0` | Quantité consommée |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `WAISTO_0` | Sorties en attente |  |  |  |  |
| `LASCUNLIS_0` | Dernière liste globale |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `XAVCOVEMAC_0` | Coût frais généraux machine |  |  |  |  |
| `XAVCOVELAB_0` | Coût frais généraux main-d'oeuvre |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `LASPURPRI_0` | Dernier prix d'achat |  |  |  |  |
| `LASPURDAT_0` | Date dernier achat |  |  |  |  |
| `BESSTO_0` | Cumul besoin |  |  |  |  |
| `AMATAVC_0` | Coût matière PMP |  |  |  |  |
| `AMATCST_0` | Coût matière PMP |  |  |  |  |
| `ALABAVC_0` | Coût m-o PMP |  |  |  |  |
| `ALABCST_0` | Coût m-o PMP |  |  |  |  |
| `ASCOAVC_0` | Coût s/t PMP |  |  |  |  |
| `ASCOCST_0` | Coût s/t PMP |  |  |  |  |
| `AOVEMACAVC_0` | FG machine PMP |  |  |  |  |
| `AOVEMACCST_0` | FG machine PMP |  |  |  |  |
| `AOVESCOAVC_0` | FG s/t PMP |  |  |  |  |
| `AOVESCOCST_0` | FG s/t PMP |  |  |  |  |
| `LMATCST_0` | Coût mat dern prix |  |  |  |  |
| `LMACCST_0` | Coût mac dern prix |  |  |  |  |
| `LLABCST_0` | Coût m-o dern prix |  |  |  |  |
| `LSCOCST_0` | Coût s/t dern prix |  |  |  |  |
| `LOVEMATCST_0` | FG mat dern prix |  |  |  |  |
| `LOVELABCST_0` | FG m-o dern prix |  |  |  |  |
| `SCCALL_0` | Alloué |  |  |  |  |
| `CUNRCPMVT_0` | Nb entrées depuis inventaire |  |  |  |  |
| `XAVCOVESCO_0` | Coût frais généraux sous-traitance |  |  |  |  |
| `AINVDTAAVC_0` | Elément facturation |  |  |  |  |
| `AINVDTACST_0` | Elément facturation |  |  |  |  |
| `LINVDTACST_0` | Elément facturation |  |  |  |  |
| `XAVCMATCST_0` | Coût matière |  |  |  |  |
| `XBAMMATCST_0` | Coût matière |  |  |  |  |
| `XBAMOVEMAT_0` | Coût matière |  |  |  |  |
| `XAVCMACCST_0` | Coût machine |  |  |  |  |
| `XBAMMACCST_0` | Coût machine |  |  |  |  |
| `XBAMOVEMAC_0` | Coût machine |  |  |  |  |
| `XAVCLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `XBAMLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `XBAMOVELAB_0` | Coût main-d'oeuvre |  |  |  |  |
| `XAVCSCOCST_0` | Coût sous-traitance |  |  |  |  |
| `XBAMSCOCST_0` | Coût sous-traitance |  |  |  |  |
| `XBAMOVESCO_0` | Coût sous-traitance |  |  |  |  |
| `XAVCOVEMAT_0` | Coût frais généraux matière |  |  |  |  |
| `SCCLNDSTO_0` | Stock |  |  |  |  |
| `LASRCPPRI_0` | Prix dernière entrée |  |  |  |  |
| `LASRCPDAT_0` | Date dernière entrée |  |  |  |  |
| `LASISSDAT_0` | Date dernière sortie |  |  |  |  |
| `X4STODISCMJS_0` |  |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4ENDCMJ_0` | Fin de période CMJ |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CUNISSMVT_0` | Nb sorties depuis inventaire |  |  |  |  |
| `CUNDAT_0` | Date inventaire |  |  |  |  |
| `LASREODAT_0` | Date dernier réaprovisionnement |  |  |  |  |
| `GLOALL_0` | Alloué global |  |  |  |  |
| `CUNNBR_0` | Nbre inventaires |  |  |  |  |
| `CUNNBREQU_0` | Nbre invent justes |  |  |  |  |
| `CUNQTYCLC_0` | Qtés inv calculées |  |  |  |  |
| `CUNQTYNEW_0` | Qtés inv comptées |  |  |  |  |
| `X4STODISCMJ_0` | Stock disponible |  |  |  |  |
| `X4CMJ_0` | Consommation moyenne journalière |  |  |  |  |
| `DETSHT_0` | Manquant détail |  |  |  |  |
| `GLOSHT_0` | Manquant global |  |  |  |  |
| `AMACAVC_0` | Coût machine PMP |  |  |  |  |
| `AMACCST_0` | Coût machine PMP |  |  |  |  |
| `AOVEMATAVC_0` | FG matière PMP |  |  |  |  |
| `AOVEMATCST_0` | FG matière PMP |  |  |  |  |
| `AOVELABAVC_0` | FG m-o PMP |  |  |  |  |
| `AOVELABCST_0` | FG m-o PMP |  |  |  |  |
| `LOVEMACCST_0` | FG mac dern prix |  |  |  |  |
| `LOVESCOCST_0` | FG s/t dern prix |  |  |  |  |
| `TRAAMT_0` | Montant transféré |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TRFSTO_0,
    LASCUNDAT_0,
    EXPNUM_0,
    CTLALL_0,
    REJALL_0
FROM ITMMVT
WHERE -- vos conditions
```

---

## ITMMVTHIS

**Historique cumuls Article-Site**

**Nombre de champs** : 48

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `LASISSDAT_0` | Date dernière sortie |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `X4AVC_0` | Prix moyen pondéré |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PERNUM_0` | Numéro période |  |  |  |  |
| `X4PHYSTO_0` | Stock interne 'A' |  |  |  |  |
| `X4CTLSTO_0` | Stock interne 'Q' |  |  |  |  |
| `X4REJSTO_0` | Stock interne 'R' |  |  |  |  |
| `FIYNUM_0` | Numéro exercice |  |  |  |  |
| `PERSTR_0` | Début période |  |  |  |  |
| `PEREND_0` | Fin période |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `MONRCPQTY_0` | Cumul quantité entrée mois en cours |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `LASPURPRI_0` | Dernier prix d'achat |  |  |  |  |
| `LASPURDAT_0` | Date dernier achat |  |  |  |  |
| `YEARCPQTY_0` | Cumul quantité entrée année en cour |  |  |  |  |
| `MONISSQTY_0` | Cumul quantité sortie mois en cours |  |  |  |  |
| `YEAISSQTY_0` | Cumul quantité sortie année en cour |  |  |  |  |
| `MONRCPAMT_0` | Cumul montant entrée mois en cours |  |  |  |  |
| `YEARCPAMT_0` | Cumul montant entrée année en cours |  |  |  |  |
| `MONISSAMT_0` | Cumul montant sortie mois en cours |  |  |  |  |
| `YEAISSAMT_0` | Cumul montant sortie année en cours |  |  |  |  |
| `YEARCPMVT_0` | Nb entrées année |  |  |  |  |
| `YEAISSMVT_0` | Nb sorties année |  |  |  |  |
| `X4NBPER_0` | Période d'analyse |  |  |  |  |
| `LASRCPPRI_0` | Prix dernière entrée |  |  |  |  |
| `LASRCPDAT_0` | Date dernière entrée |  |  |  |  |
| `X4STOAVGAMT_0` |  |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `X4CALDAT_0` | Date de calcul |  |  |  |  |
| `LASREODAT_0` | Date dernier réaprovisionnement |  |  |  |  |
| `MONISSMVT_0` | Nb sorties mois |  |  |  |  |
| `X4STOAVGQTY_0` | ID client BVR |  |  |  |  |
| `X4STOAVGDUR_0` | Référence sortie |  |  |  |  |
| `X4STOCOV_0` | Réf. sortie |  |  |  |  |
| `AMTDEV_0` | Ecart non absorbé |  |  |  |  |
| `AMTDEV2_0` | Ecart non absorbé |  |  |  |  |
| `MONRCPMVT_0` | Nb entrées périodes |  |  |  |  |
| `X4TOV_0` | Taux de rotation |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |

### Exemple SQL

```sql
SELECT
    LASISSDAT_0,
    EXPNUM_0,
    X4AVC_0,
    VCRLIN_0,
    CREDAT_0
FROM ITMMVTHIS
WHERE -- vos conditions
```

---

## ITMMVTPIT

**Cumuls article-site instant T**

**Nombre de champs** : 29

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `PERNUM_0` | Numéro période |  |  |  |  |
| `FIYNUM_0` | Numéro exercice |  |  |  |  |
| `PERSTR_0` | Début période |  |  |  |  |
| `PEREND_0` | Fin période |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PERVALCHG_0` | Modification valeur période |  |  |  |  |
| `PERAMTDEV_0` | Total non absorbé |  |  |  |  |
| `ENDBASAMT_0` | Base montant fin |  |  |  |  |
| `ENDBASQTY_0` | Base quantité fin |  |  |  |  |
| `ENDAVC_0` | Prix moyen fin |  |  |  |  |
| `BEGBASQTY_0` | Base qté. début |  |  |  |  |
| `BEGBASAMT_0` | Base mnt. début |  |  |  |  |
| `BEGAVC_0` | Prix moy. début |  |  |  |  |
| `PERRCPQTY_0` | Qté. entrée période |  |  |  |  |
| `PERRCPAMT_0` | Mnt. entrée période |  |  |  |  |
| `PERISSQTY_0` | Qté. sortie période |  |  |  |  |
| `PERISSAMT_0` | Mnt. sortie période |  |  |  |  |
| `PERCUMQTY_0` | Qté. totale période |  |  |  |  |
| `PERCUMAMT_0` | Mnt. total période |  |  |  |  |
| `PERCUMAVC_0` | Prix moyen total |  |  |  |  |
| `RECALCDT_0` | Date resynchro. |  |  |  |  |
| `RECALCUSR_0` | Utilisateur resynchro. |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `VLTNUM_0` | No méthode |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    STOFCY_0,
    PERNUM_0,
    FIYNUM_0,
    PERSTR_0
FROM ITMMVTPIT
WHERE -- vos conditions
```

---

## ITMSALES

**Articles - ventes**

**Nombre de champs** : 36

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `ITPTEX_0` | Texte préparation |  |  |  |  |
| `INVCND_0` | Condition de facturation |  |  |  |  |
| `SBSITM_0` | Article substitution |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `QTYFOR_0` | Formule pour quantité |  |  |  |  |
| `GUAMON_0` | Garantie en mois |  |  |  |  |
| `CTMFLG_0` | Contremarque |  |  |  |  |
| `MINQTY_0` | Quantité minimale |  |  |  |  |
| `MAXQTY_0` | Quantité maximale |  |  |  |  |
| `MINPFM_0` | Marge minimale |  |  |  |  |
| `THEPRI_0` | Prix théorique |  |  |  |  |
| `BASPRI_0` | Prix de base |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SBSDAT_0` | Date substitution |  |  |  |  |
| `LNDFLG_0` | Autorisation de prêt |  |  |  |  |
| `MINPRI_0` | Prix plancher |  |  |  |  |
| `DES1AXX_0` | Désignation 1 |  |  |  |  |
| `ITMTYP_0` | Type article |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMDES1_0` | Désignation 1 |  |  |  |  |
| `PCKCAP_0` | Capacité emballage |  |  |  |  |
| `ITSTEX_0` | Texte article vente |  |  |  |  |
| `MINRMNPRC_0` | Tolérance reliquat % |  |  |  |  |
| `CTMQTY_0` | Quantité contremarque directe |  |  |  |  |
| `PCK_0` | Emballage |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BASPRIORI_0` | Origine prix |  |  |  |  |
| `PURPRIPRC_0` | % appliqué |  |  |  |  |
| `XIMAJBL_0` | Ind MAJ matière BL |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `LOAECCFLG_0` | Préchargement version(s) |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |

### Exemple SQL

```sql
SELECT
    ITPTEX_0,
    INVCND_0,
    SBSITM_0,
    CREDAT_0,
    UPDUSR_0
FROM ITMSALES
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

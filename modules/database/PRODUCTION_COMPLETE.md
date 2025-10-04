# 📦 Module PRODUCTION - Documentation Complète

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📊 Statistiques

- **Tables documentées** : 26
- **Champs totaux** : 1,406
- **Source** : Données réelles de votre ERP Sage X3

---

## 📑 Tables du module

- [BOM](#bom) - Nomenclatures Entête (30 champs)
- [BOMCREF](#bomcref) - Composant référence (13 champs)
- [BOMD](#bomd) - Nomenclatures Détail (59 champs)
- [BOMPRN](#bomprn) - Impression Nomenclatures (44 champs)
- [BOMRET](#bomret) - Analyse de faisabilité (48 champs)
- [BOMWUS](#bomwus) - Nomenclatures cas d'emploi (44 champs)
- [MFGANL](#mfganl) - Analyse OF (29 champs)
- [MFGCOST](#mfgcost) - Prix de revient (59 champs)
- [MFGHEAD](#mfghead) - Ordres fabrication - entête (92 champs)
- [MFGHEADTRK](#mfgheadtrk) - Suivi  fabrication - entête (29 champs)
- [MFGITM](#mfgitm) - Ordres fabrication - articles (64 champs)
- [MFGITMTRK](#mfgitmtrk) - suivi fabrication - articles (35 champs)
- [MFGMAT](#mfgmat) - Ordres fabrication - matières (79 champs)
- [MFGMATREV](#mfgmatrev) - OF - audit matières (69 champs)
- [MFGMATTRK](#mfgmattrk) - Suivi fabrication - matières (35 champs)
- [MFGOPE](#mfgope) - Ordres fabrication - opérat. (123 champs)
- [MFGOPEREV](#mfgoperev) - OF - audit opérations (111 champs)
- [MFGOPETRK](#mfgopetrk) - Suivi fabrication - opérat. (98 champs)
- [MFGPRN](#mfgprn) - Ordres fabrication - documents (27 champs)
- [MFGSERDET](#mfgserdet) - OF - détail lien No série (13 champs)
- [MFGSERHDR](#mfgserhdr) - OF - en-tête lien No série (12 champs)
- [MFGTRS](#mfgtrs) - Transaction  saisie production (183 champs)
- [MFGVERSION](#mfgversion) - Changement version GPAO (9 champs)
- [MFGWIP](#mfgwip) - Valorisation encours - entête (28 champs)
- [ROUTING](#routing) - Gammes - Entête (29 champs)
- [WORKSTATIO](#workstatio) - Postes de charge (44 champs)

---

## BOM

**Nomenclatures Entête**

**Nombre de champs** : 30

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `BOMDESAXX_0` | Désignation entête |  |  |  |  |
| `USESTA_0` | Statut utilisation |  |  |  |  |
| `BOMRLE_0` | Indice révision |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `QTYCOD_0` | Unité de gestion |  |  |  |  |
| `BOHSTRDAT_0` | Date début validité |  |  |  |  |
| `BOHENDDAT_0` | Date fin validité |  |  |  |  |
| `ACSCOD_0` | Code accès |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `HEATEX_0` | Texte entête |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `XEXPINFDAT_0` | Date export |  |  |  |  |
| `X1_PREFIX_0` | Préfixe |  |  |  |  |
| `IDENT1_0` | Identifiant 1 |  |  |  |  |
| `XEXPINF_0` | Indicateur Export |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ITMREF_0` | Article parent |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `NPIPRO_0` | Prototype |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XCOMMCPVV_0` | Comment cumul PVV |  |  |  |  |
| `XNBEMPR_0` | Nombre d'empreintes |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `PLMATTURL_0` | Documents liés |  |  |  |  |
| `XCFCOD_0` | Code variante |  |  |  |  |

### Exemple SQL

```sql
SELECT
    UPDDAT_0,
    CFGVCRNUM_0,
    BOMALTTYP_0,
    BOMDESAXX_0,
    USESTA_0
FROM BOM
WHERE -- vos conditions
```

---

## BOMCREF

**Composant référence**

**Nombre de champs** : 13

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `CPNITMREF_0` | Article composant |  |  |  |  |
| `CPNREFSEQ_0` | Rang |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `BOMSEQ_0` | Séquence nomenclature |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `CPNDRWREF_0` | Référence |  |  |  |  |
| `CPNCRTREF_0` | Référence |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BOMALTTYP_0,
    CPNITMREF_0,
    CPNREFSEQ_0,
    CREUSR_0,
    UPDUSR_0
FROM BOMCREF
WHERE -- vos conditions
```

---

## BOMD

**Nomenclatures Détail**

**Nombre de champs** : 59

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `OPENUMLEV_0` | Suffixe opération gamme (PmSim) |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BOMSTUCOE_0` | Coefficient UOM-US |  |  |  |  |
| `BOMQTY_0` | Quantité lien UM |  |  |  |  |
| `PKC_0` | Code à servir |  |  |  |  |
| `X4PKC_0` | Code à servir |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `XCOMBOMP_0` | Commentaire |  |  |  |  |
| `CPNITMREF_0` | Article composant |  |  |  |  |
| `BOMSTRLOT_0` | Lot début validité |  |  |  |  |
| `BOMENDLOT_0` | Lot fin validité |  |  |  |  |
| `CPNOPE_0` | Opération gamme |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `BOMSEQ_0` | Séquence |  |  |  |  |
| `BOMSTRDAT_0` | Date début validité |  |  |  |  |
| `BOMENDDAT_0` | Date fin validité |  |  |  |  |
| `OCNPRN_0` | Impression accusé réception client |  |  |  |  |
| `INVPRN_0` | Impression facture |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `BOMSEQNUM_0` | Complément séquence |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `BOMSHO_0` | Désignation lien |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `PICPRN_0` | Impression bon matières |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `FORSEL_0` | Formule sélection |  |  |  |  |
| `BOMUOM_0` | UOM |  |  |  |  |
| `ITMREF_0` | Article parent |  |  |  |  |
| `CSTFLG_0` | Valorisation |  |  |  |  |
| `NDEPRN_0` | Impression bon livraison |  |  |  |  |
| `LIKRLE_0` | Indice révision lien |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `BOMTEXNUM_0` | Texte lien nomenclature |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |
| `X1CNI_0` | Contrainte obligatoire |  |  |  |  |
| `X1TOPREP_0` | A préparer |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCRLEGRP_0` | Groupe de révision |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `LEVSET_0` | Niveau paramétrage |  |  |  |  |
| `XQSP_0` | QSP |  |  |  |  |
| `XIFORMULE_0` | Indicateur formule |  |  |  |  |
| `ITMTOLPOS_0` | Tolérance pesée +(%) |  |  |  |  |
| `ITMTOLNEG_0` | Tolérance pesée -(%) |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `FORQTY_0` | Formule qté |  |  |  |  |
| `CTN_0` | Container |  |  |  |  |
| `X4LIMEND_0` | Pièce réelle / Pièce de simulation |  |  |  |  |
| `X4LIMFLG_0` | Version active |  |  |  |  |
| `X4LIMTYP_0` | Version arrêtée |  |  |  |  |
| `X4LIMSTR_0` | Version saisie |  |  |  |  |
| `SCOFLG_0` | Type d'approvisionnement |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |

### Exemple SQL

```sql
SELECT
    OPENUMLEV_0,
    UPDDAT_0,
    BOMSTUCOE_0,
    BOMQTY_0,
    PKC_0
FROM BOMD
WHERE -- vos conditions
```

---

## BOMPRN

**Impression Nomenclatures**

**Nombre de champs** : 44

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `PKC_0` | Code à servir |  |  |  |  |
| `X4PKC_0` | Code à servir |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `XCOMBOMP_0` | Commentaire |  |  |  |  |
| `LIG_0` | Numéro de ligne |  |  |  |  |
| `GROQTY_0` | Quantité brute |  |  |  |  |
| `NETQTY_0` | Quantité nette |  |  |  |  |
| `CPNITMREF_0` | Article composant |  |  |  |  |
| `BOMSTRLOT_0` | Lot début validité |  |  |  |  |
| `BOMENDLOT_0` | Lot fin validité |  |  |  |  |
| `CPNOPE_0` | Opération gamme |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `OPENUMLEV_0` | Suffixe opération gamme (PmSim) |  |  |  |  |
| `BOMSEQ_0` | Séquence |  |  |  |  |
| `BOMSTRDAT_0` | Date début validité |  |  |  |  |
| `BOMENDDAT_0` | Date fin validité |  |  |  |  |
| `OCNPRN_0` | Impression accusé réception client |  |  |  |  |
| `INVPRN_0` | Impression facture |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `BOMSEQNUM_0` | Complément séquence |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `BOMSHO_0` | Désignation lien |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `PICPRN_0` | Impression bon matières |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `NIV_0` | Niveau |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `ITMREF_0` | Article parent |  |  |  |  |
| `NDEPRN_0` | Impression bon livraison |  |  |  |  |
| `LIKRLE_0` | Indice révision lien |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `BOMTEXNUM_0` | Texte lien nomenclature |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XITMINT_0` | Composé intermédiair |  |  |  |  |
| `XPDSKGM_0` | Poids composant en kilogramme |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BOPUID_0` | No processus |  |  |  |  |

### Exemple SQL

```sql
SELECT
    PKC_0,
    X4PKC_0,
    BOMALTTYP_0,
    XCOMBOMP_0,
    LIG_0
FROM BOMPRN
WHERE -- vos conditions
```

---

## BOMRET

**Analyse de faisabilité**

**Nombre de champs** : 48

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `PURFLG_0` | Acheté |  |  |  |  |
| `MFGFLG_0` | Fabriqué |  |  |  |  |
| `SCPFLG_0` | Sous-traité |  |  |  |  |
| `PHAFLG_0` | Fantôme |  |  |  |  |
| `GENFLG_0` | Générique |  |  |  |  |
| `X4ECCVALMAJ_0` | Version Majeure |  |  |  |  |
| `MAXBUILDQTY_0` | Quantité fabriquée max |  |  |  |  |
| `IMULT_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `BOHECCMAJ_0` | Version majeure |  |  |  |  |
| `BOHECCMAJCMP_0` | Version majeure |  |  |  |  |
| `BOHECCMIN_0` | Version mineure |  |  |  |  |
| `BOHECCMINCMP_0` | Version min |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4ECCVALMIN_0` | Version Mineure |  |  |  |  |
| `INTFLG_0` | Intermédiaire |  |  |  |  |
| `STKQTY_0` | Quantité stock |  |  |  |  |
| `TCLCOD_0` | Catégorie article |  |  |  |  |
| `BMRUID_0` | No processus |  |  |  |  |
| `SHTQTY_0` | Quantité manquante |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `TOOFLG_0` | Outillage |  |  |  |  |
| `ITMCMP_0` | Composé |  |  |  |  |
| `USESTA_0` | Statut utilisation |  |  |  |  |
| `FDMA_0` | 1ère disponibilité |  |  |  |  |
| `RETQTY_0` | Quantité besoin |  |  |  |  |
| `AVAQTY_0` | Quantité disponible |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |
| `LTI_0` | Délai |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `LTIUOM_0` | Unité temps |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `NIV_0` | Niveau |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `ITMSTA_0` | Statut article |  |  |  |  |
| `SALFLG_0` | Vendu |  |  |  |  |
| `DATREF_0` | Date de référence |  |  |  |  |
| `FLG_0` | Agrégation |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `TRTCOD_0` | Traitement |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `SCSFLG_0` | Sous-traitance |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |

### Exemple SQL

```sql
SELECT
    PURFLG_0,
    MFGFLG_0,
    SCPFLG_0,
    PHAFLG_0,
    GENFLG_0
FROM BOMRET
WHERE -- vos conditions
```

---

## BOMWUS

**Nomenclatures cas d'emploi**

**Nombre de champs** : 44

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BOMTEXNUM_0` | Texte lien nomenclature |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `IMULT_0` |  |  |  |  |  |
| `JMULT_0` |  |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `BOMSTUCOE_0` | Coefficient UOM-US |  |  |  |  |
| `BOMQTY_0` | Quantité lien UM |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `PKC_0` | Code à servir |  |  |  |  |
| `X4PKC_0` | Code à servir |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `GROQTY_0` | Quantité brute |  |  |  |  |
| `NETQTY_0` | Quantité nette |  |  |  |  |
| `CPNITMREF_0` | Article composant |  |  |  |  |
| `BOMSTRLOT_0` | Lot début validité |  |  |  |  |
| `BOMENDLOT_0` | Lot fin validité |  |  |  |  |
| `CPNOPE_0` | Opération gamme |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `OPENUMLEV_0` | Suffixe opération gamme (PmSim) |  |  |  |  |
| `BOMSEQ_0` | Séquence |  |  |  |  |
| `BOMSTRDAT_0` | Date début validité |  |  |  |  |
| `BOMENDDAT_0` | Date fin validité |  |  |  |  |
| `CPNDES_0` | Désignation |  |  |  |  |
| `OCNPRN_0` | Impression accusé réception client |  |  |  |  |
| `INVPRN_0` | Impression facture |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `BOMSEQNUM_0` | Complément séquence |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `BOMSHO_0` | Désignation lien |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `PICPRN_0` | Impression bon matières |  |  |  |  |
| `BOWUID_0` | No processus |  |  |  |  |
| `NIV_0` | Niveau |  |  |  |  |
| `BOMUOM_0` | UOM |  |  |  |  |
| `ITMREF_0` | Article parent |  |  |  |  |
| `TRTCOD_0` | Traitement |  |  |  |  |
| `NDEPRN_0` | Impression bon livraison |  |  |  |  |
| `LIKRLE_0` | Indice révision lien |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BOMTEXNUM_0,
    CREUSR_0,
    IMULT_0,
    JMULT_0,
    CREDATTIM_0
FROM BOMWUS
WHERE -- vos conditions
```

---

## MFGANL

**Analyse OF**

**Nombre de champs** : 29

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `MATNBR_0` | Nb sorties matière |  |  |  |  |
| `DELDAYNBR_0` | Avance-retard |  |  |  |  |
| `MFGCPLLTI_0` | Cycle réalisé |  |  |  |  |
| `PERSTR_0` | Début période |  |  |  |  |
| `PEREND_0` | Fin période |  |  |  |  |
| `OPENBR_0` | Nb op réalisées |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `MFGLTI_0` | Délai de fabrication |  |  |  |  |
| `MFGSCDLTI_0` | Cycle jalonnement |  |  |  |  |
| `STDTIMSUM_0` | Somme temps standard |  |  |  |  |
| `EXTTIMSUM_0` | Somme temps prévus |  |  |  |  |
| `CPLTIMSUM_0` | Somme temps réalisés |  |  |  |  |
| `CPLSHR_0` | Pourcentage de perte réel |  |  |  |  |
| `OPEQTYEFF_0` | Rendement moyen opération en qté |  |  |  |  |
| `OPETIMEFF_0` | Rendement moyen opération en tps |  |  |  |  |
| `MATQTYEFF_0` | Rendement moyen matières consommées |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ITMREF_0` | Article parent |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `PERDAYNBR_0` | Nombre de jours période |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    MFGNUM_0,
    UPDDATTIM_0,
    MFGFCY_0,
    MATNBR_0
FROM MFGANL
WHERE -- vos conditions
```

---

## MFGCOST

**Prix de revient**

**Nombre de champs** : 59

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `SCOTOT_0` | Total sous-traitance |  |  |  |  |
| `CSTTOT_0` | Coût total |  |  |  |  |
| `MATTOT_0` | Total coût matière |  |  |  |  |
| `MACTOT_0` | Total coût machine |  |  |  |  |
| `LABTOT_0` | Total main-d'oeuvre |  |  |  |  |
| `OVETOT_0` | Total frais généraux |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `ANAFLG_0` | Mise à jour Compta analytique indus |  |  |  |  |
| `OVEMATCPN_0` | Coût niveau fg mat |  |  |  |  |
| `OVEMACCPN_0` | Coût niveau fg mac |  |  |  |  |
| `OVESCOCPN_0` | Coût niveau fg s/t |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BPSMATCST_0` | Coût matière fournisseur |  |  |  |  |
| `WIPCLE_0` | Solde de l'encours |  |  |  |  |
| `YEA_0` | Année |  |  |  |  |
| `MFCDAT_0` | Date calcul |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SLTOVECOL_0` | Colonne frais généraux |  |  |  |  |
| `MFCTYP_0` | Coût prévu |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `OVELABCPN_0` | Coût niveau fg m-o |  |  |  |  |
| `VCRNUM_0` | No pièce |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `INVDTACPN_0` | Elément facturation |  |  |  |  |
| `INVDTACST_0` | Elément facturation |  |  |  |  |
| `INVDTATOT_0` | Elément facturation |  |  |  |  |
| `MATCST_0` | Coût matière |  |  |  |  |
| `MACCST_0` | Coût machine |  |  |  |  |
| `LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `SCOCST_0` | Coût sous-traitance |  |  |  |  |
| `OVEMATCST_0` | Coût frais généraux matière |  |  |  |  |
| `OVEMACCST_0` | Coût frais généraux machine |  |  |  |  |
| `OVELABCST_0` | Coût frais généraux main-d'oeuvre |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `MATLEV0_0` | Coût niveau matière |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `PRNUID_0` | Identifiant |  |  |  |  |
| `OVESCOCST_0` | Coût frais généraux sous-traitance |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `MFCSEMBRD_0` | Décomposer coût SF/PRF |  |  |  |  |
| `LABCPNCST_0` | Coût main-d'oeuvre composants |  |  |  |  |
| `OVECPNCST_0` | Coût frais généraux composants |  |  |  |  |
| `SCOCPNCST_0` | Coût sous-traitance composants |  |  |  |  |
| `MACCPNCST_0` | Coût machine composants |  |  |  |  |
| `CPLRIO_0` | Ratio |  |  |  |  |
| `SLTSEMCST_0` | Choix coût semi-fini |  |  |  |  |
| `MATCPNCST_0` | Coût matière composants |  |  |  |  |
| `SLTMATCST_0` | Choix coût matière |  |  |  |  |
| `VLTCCERAT_0` | Choix taux section |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `UID_0` | Process |  |  |  |  |

### Exemple SQL

```sql
SELECT
    SCOTOT_0,
    CSTTOT_0,
    MATTOT_0,
    MACTOT_0,
    LABTOT_0
FROM MFGCOST
WHERE -- vos conditions
```

---

## MFGHEAD

**Ordres fabrication - entête**

**Nombre de champs** : 92

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CLODAT_0` | Date clôture |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `XTYPOBJ_0` | Type objet |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `MFGMOD_0` | Mode lancement |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |
| `OPECLENBR_0` | Nombre opérations sold. |  |  |  |  |
| `SCDMOD_0` | Mode jalonnement |  |  |  |  |
| `LTIREDCOE_0` | Coefficient de réduction du délai |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `AVAMFGQTY_0` | Quantité productible |  |  |  |  |
| `CLCSCDLTI_0` | Cycle jalonnement calculé |  |  |  |  |
| `TYPMOD_0` | Type mode |  |  |  |  |
| `SCDFLG_0` | Etat jalonnement |  |  |  |  |
| `MATLINNBR_0` | Nombre matières |  |  |  |  |
| `DETALLNBR_0` | Nombre allocations détail |  |  |  |  |
| `OVRALLNBR_0` | Nombre allocations globales |  |  |  |  |
| `SHTMATNBR_0` | Nombre de ruptures |  |  |  |  |
| `PRPMATNBR_0` | Nombre de matières préparées |  |  |  |  |
| `PRPSTA_0` | Statut préparation OF |  |  |  |  |
| `MFGTRKFLG_0` | Flag suivi |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `WGGFLG_0` | Flag plan de pesée |  |  |  |  |
| `WGGSTA_0` | Situation de pesée |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `ITMLINNBR_0` | Nombre articles lancés |  |  |  |  |
| `OPELINNBR_0` | Nombre opérations |  |  |  |  |
| `ITMCLENBR_0` | Nombre articles soldés |  |  |  |  |
| `MATCLENBR_0` | Nombre matières soldées |  |  |  |  |
| `INFCAPSTR_0` | Date début (capacité infinie) |  |  |  |  |
| `INFCAPEND_0` | Date fin (capacité infinie) |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `OBJDAT_0` | Objectif initial |  |  |  |  |
| `FITCAPSTR_0` | Date début capacité finie |  |  |  |  |
| `FITCAPEND_0` | Date fin capacité finie |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ALLSTA_0` | Statut allocation |  |  |  |  |
| `MFGTEX_0` | Texte production |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `OPTUSR_0` | Opé optimisation |  |  |  |  |
| `OPTFLG_0` | Flag optimisation |  |  |  |  |
| `XOBJ1_0` | Objet partie 1 |  |  |  |  |
| `XOBJ2_0` | Objet partie 2 |  |  |  |  |
| `XBLOCAGE_0` | flag blocage |  |  |  |  |
| `CFMFLG_0` | Validée |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ROUNUM_0` | Gamme lancée |  |  |  |  |
| `RMNEXTQTY_0` | Quantité restante |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `XACFLG_0` | flag action |  |  |  |  |
| `XTYPOF_0` | Type OF |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `XSTAOUTC_0` | Statut outillage en création OT |  |  |  |  |
| `XSTACLO_0` | Statut outillage en cloture |  |  |  |  |
| `XDESCDAT_0` | Date descente |  |  |  |  |
| `XDESCTIM_0` | Heure descente |  |  |  |  |
| `X4PANNE_0` | Code panne |  |  |  |  |
| `XSSTYPOT_0` | Sous-type OT |  |  |  |  |
| `XNIVMNTC_0` | Niveaux de maintenance concernés |  |  |  |  |
| `X4INTERDAT_0` | Date intervention |  |  |  |  |
| `SUSFLG_0` | Flag OF suspendu |  |  |  |  |
| `MTOREF_0` | Réseau MTO |  |  |  |  |
| `XDATREFEND_0` | Date fin référence |  |  |  |  |
| `XDATREFSTR_0` | Date début référence |  |  |  |  |
| `SINUM_0` | No pièce Intégrale |  |  |  |  |
| `GFSPUBTIM_0` | Date/heure optimisé |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `NPIPRO_0` | Prototype |  |  |  |  |
| `X4SAVORI_0` | Origine SAV |  |  |  |  |
| `X1PRPSTA_0` | Statut Préparation |  |  |  |  |
| `X1WAVPREP_0` | Vague de préparation |  |  |  |  |
| `X1PDPGEN_0` | Généré depuis le PDP |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ROUECCMAJ_0` | Version majeure |  |  |  |  |
| `ROUECCMIN_0` | Version mineure |  |  |  |  |
| `LATENDDAT_0` | Dernière date fin |  |  |  |  |
| `XOBJ3_0` | Objet partie 3 |  |  |  |  |
| `EARSTRDAT_0` | Première date début |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CLODAT_0,
    TRKFIRST_0,
    TRKFIRSTC_0,
    TRKLAST_0,
    TRKLASTC_0
FROM MFGHEAD
WHERE -- vos conditions
```

---

## MFGHEADTRK

**Suivi  fabrication - entête**

**Nombre de champs** : 29

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `MFGFCY_0` | Site production |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `NBRITM_0` | Nombre d'articles lancés |  |  |  |  |
| `NBROPE_0` | Nombre d'opérations |  |  |  |  |
| `NBRMAT_0` | Nombre de matières |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ITMTRKFLG_0` | Déclaration production |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `MTKTEX_0` | Texte |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MATTRKFLG_0` | Suivi matière |  |  |  |  |
| `MFGTRKNUM_0` | Numéro suivi |  |  |  |  |
| `MFGTRKDAT_0` | Date suivi |  |  |  |  |
| `OPETRKFLG_0` | Suivi opérations |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ENTCOD_0` | Pièce auto stock |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `TRSCODS_0` | Code mouvement |  |  |  |  |
| `XPJT_0` |  |  |  |  |  |
| `NPIPRO_0` | Prototype |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MFGMOD_0` | Mode lancement |  |  |  |  |

### Exemple SQL

```sql
SELECT
    MFGFCY_0,
    AUUID_0,
    PTHNUM_0,
    NBRITM_0,
    NBROPE_0
FROM MFGHEADTRK
WHERE -- vos conditions
```

---

## MFGITM

**Ordres fabrication - articles**

**Nombre de champs** : 64

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CSTFLG_0` | Valorisation |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `TCLCOD_0` | Catégorie article |  |  |  |  |
| `RMNEXTQTY_0` | Quantité restante |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `BPCTYPDEN_0` | Type destinataire(site,client) |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `FMI_0` | Origine article |  |  |  |  |
| `X4DATREF_0` | Date référence péremption |  |  |  |  |
| `ITMTYP_0` | Type produit |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `XNBEMPR_0` | Nombre d'empreintes |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `ITMLIN_0` | Ligne OF |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `X4DATPER_0` | Date péremption |  |  |  |  |
| `ITMSTA_0` | Etat ligne |  |  |  |  |
| `WIPNUM_0` | Numéro ordre encours |  |  |  |  |
| `MFGDES_0` | Désignation OF |  |  |  |  |
| `UOM_0` | Unité lancement |  |  |  |  |
| `UOMEXTQTY_0` | Quantité lancement |  |  |  |  |
| `UOMSTUCOE_0` | Coefficient UOM/US |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `MFITRKFLG_0` | Flag suivi |  |  |  |  |
| `CLODAT_0` | Date clôture |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `TRKFIRST_0` | Date premier suivi |  |  |  |  |
| `TRKLAST_0` | Date dernier suivi |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `BOMOPE_0` | Numéro opération |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ABCCLS_0` | Catégorie ABC |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `BPCNUM_0` | Destinataire |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `VCRSEQORI_0` | No séquence pièce origine |  |  |  |  |
| `XVERSIONC_0` | Version composé |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CSTFLG_0,
    UPDUSR_0,
    VCRNUMORI_0,
    VCRTYPORI_0,
    VCRLINORI_0
FROM MFGITM
WHERE -- vos conditions
```

---

## MFGITMTRK

**suivi fabrication - articles**

**Nombre de champs** : 35

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CSTFLG_0` | Valorisation |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `LPNNUM_0` | Numéro contenant |  |  |  |  |
| `FMI_0` | Origine article |  |  |  |  |
| `ITMTYP_0` | Type produit |  |  |  |  |
| `XCLEMKIMKO_0` | Clé MKI MKO |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XCQF_0` | Contrôle qual fréq |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `MFGLIN_0` | Ligne OF |  |  |  |  |
| `QUARTNFLG_0` | Retour du controle qualité |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `UOM_0` | Unité lancement |  |  |  |  |
| `UOMSTUCOE_0` | Coefficient UOM/US |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée bonne |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UOMCPLQTY_0` | Qté réalisée  OK |  |  |  |  |
| `PRODTYP_0` | Type de suivi |  |  |  |  |
| `ITMTRKLIN_0` | Ligne |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `STA_0` | Statut |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGTRKNUM_0` | Numéro suivi |  |  |  |  |
| `SERNUM_0` | Série |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CSTFLG_0,
    STU_0,
    LOT_0,
    BOMALT_0,
    LPNNUM_0
FROM MFGITMTRK
WHERE -- vos conditions
```

---

## MFGMAT

**Ordres fabrication - matières**

**Nombre de champs** : 79

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XRETQTYTOT_0` | Besoin total |  |  |  |  |
| `XCOMBOMP_0` | Commentaire nomenclature |  |  |  |  |
| `XSERNUM_0` | Numéro série |  |  |  |  |
| `CTN_0` | Récipient |  |  |  |  |
| `WIPNUM_0` | Numéro ordre |  |  |  |  |
| `X1CNI_0` | Contrainte obligatoire |  |  |  |  |
| `X1TOPREP_0` | A préparer |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `WGGSTAAVS_0` | Situation pesée avant soldée |  |  |  |  |
| `XQSP_0` | QSP |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BOMSTUCOE_0` | Coefficient UOM-US |  |  |  |  |
| `BOMQTY_0` | Quantité lien UM |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `MFMTEX_0` | Texte lien nomenclature |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |
| `BOMSHO_0` | Désignation lien |  |  |  |  |
| `RETDAT_0` | Date besoin |  |  |  |  |
| `ALLSTA_0` | Statut allocation |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `MATSTA_0` | Statut matière |  |  |  |  |
| `BOMUOM_0` | UOM |  |  |  |  |
| `RELSCATIA_0` | Perte au lancement |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `DEFPOT_0` | Titre par défaut |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `RETQTYORI_0` | Quantité origine |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `STA_0` | Statut préférentiel |  |  |  |  |
| `WGGBOX_0` | En cours de pesée |  |  |  |  |
| `SCOFLG_0` | Type d'approvisionnement |  |  |  |  |
| `X4LIMEND_0` | Pièce réelle / Pièce de simulation |  |  |  |  |
| `X4LIMFLG_0` | Version active |  |  |  |  |
| `X4LIMTYP_0` | Version arrêtée |  |  |  |  |
| `X4LIMSTR_0` | Version saisie |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `USEQTY_0` | Quantité consommée |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `SHTQTY_0` | Quantité en rupture |  |  |  |  |
| `ISSMGTCOD_0` | Mode destockage |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `BOMSEQORI_0` | Séquence origine |  |  |  |  |
| `RETQTY_0` | Quantité besoin |  |  |  |  |
| `STDQTY_0` | Quantité standard |  |  |  |  |
| `CUMFLG_0` | Besoin cumulé |  |  |  |  |
| `CUMFXDQTY_0` | Quantité forfaitaire cumulée |  |  |  |  |
| `PRPSTA_0` | Statut préparation |  |  |  |  |
| `MFMTRKFLG_0` | Flag suivi |  |  |  |  |
| `PKC_0` | Code à servir |  |  |  |  |
| `X4PKC_0` | Code à servir |  |  |  |  |
| `WGGSTA_0` | Situation de pesée |  |  |  |  |
| `LOT_0` | Lot préférentiel |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `QTYCOD_0` | Unité de gestion |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `BOMSEQ_0` | Séquence nomenclature |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `BOMOPE_0` | Numéro opération |  |  |  |  |
| `PICPRN_0` | Impression bon matières |  |  |  |  |
| `ALLQTY_0` | Quantité allouée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XRETQTYTOT_0,
    XCOMBOMP_0,
    XSERNUM_0,
    CTN_0,
    WIPNUM_0
FROM MFGMAT
WHERE -- vos conditions
```

---

## MFGMATREV

**OF - audit matières**

**Nombre de champs** : 69

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `WGGSTAAVS_0` | Situation pesée avant soldée |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `BOMSTUCOE_0` | Coefficient UOM-US |  |  |  |  |
| `BOMQTY_0` | Quantité lien UM |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `REVREASON_0` | Motif |  |  |  |  |
| `MFMTEX_0` | Texte lien nomenclature |  |  |  |  |
| `SCA_0` | Pourcentage de rebut |  |  |  |  |
| `BOMSHO_0` | Désignation lien |  |  |  |  |
| `RETDAT_0` | Date besoin |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ALLSTA_0` | Statut allocation |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `STOMGTCOD_0` | Gestion stock |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `MATSTA_0` | Statut matière |  |  |  |  |
| `BOMUOM_0` | UOM |  |  |  |  |
| `RELSCATIA_0` | Perte au lancement |  |  |  |  |
| `PLANNER_0` | Planificateur |  |  |  |  |
| `DEFPOT_0` | Titre par défaut |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `WIPNUM_0` | Numéro ordre |  |  |  |  |
| `RETQTYORI_0` | Quantité origine |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `STA_0` | Statut préférentiel |  |  |  |  |
| `WGGBOX_0` | En cours de pesée |  |  |  |  |
| `SCOFLG_0` | Type d'approvisionnement |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `USEQTY_0` | Quantité consommée |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `SHTQTY_0` | Quantité en rupture |  |  |  |  |
| `ISSMGTCOD_0` | Mode destockage |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `REVNUM_0` | No avenant |  |  |  |  |
| `BOMSEQORI_0` | Séquence origine |  |  |  |  |
| `RETQTY_0` | Quantité besoin |  |  |  |  |
| `REVCOD_0` | Code avenant |  |  |  |  |
| `STDQTY_0` | Quantité standard |  |  |  |  |
| `CUMFLG_0` | Besoin cumulé |  |  |  |  |
| `CUMFXDQTY_0` | Quantité forfaitaire cumulée |  |  |  |  |
| `PRPSTA_0` | Statut préparation |  |  |  |  |
| `MFMTRKFLG_0` | Flag suivi |  |  |  |  |
| `PKC_0` | Code à servir |  |  |  |  |
| `WGGSTA_0` | Situation de pesée |  |  |  |  |
| `LOT_0` | Lot préférentiel |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `QTYCOD_0` | Unité de gestion |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `LIKQTYCOD_0` | Code quantité lien |  |  |  |  |
| `QTYRND_0` | Arrondi quantité |  |  |  |  |
| `BOMSEQ_0` | Séquence nomenclature |  |  |  |  |
| `LIKQTY_0` | Quantité lien |  |  |  |  |
| `BOMOPE_0` | Numéro opération |  |  |  |  |
| `PICPRN_0` | Impression bon matières |  |  |  |  |
| `ALLQTY_0` | Quantité allouée |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    ECCVALMIN_0,
    WGGSTAAVS_0,
    CREDATTIM_0,
    UPDDATTIM_0
FROM MFGMATREV
WHERE -- vos conditions
```

---

## MFGMATTRK

**Suivi fabrication - matières**

**Nombre de champs** : 35

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `TYPQTY_0` | Type de quantité |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `LOCPREF_0` | Emplacement de stockage |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STAPREF_0` | Statut préférentiel |  |  |  |  |
| `MFGTRKNUM_0` | Numéro suivi |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `XVERSION_0` | Version |  |  |  |  |
| `CPNTYP_0` | Type composant |  |  |  |  |
| `MFMEXTQTY_0` | Quantité |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `MKMTEX_0` | Texte |  |  |  |  |
| `MATTRKLIN_0` | Ligne |  |  |  |  |
| `BOMSEQ_0` | Séquence nomenclature |  |  |  |  |
| `OPENUM_0` | Numéro opération |  |  |  |  |
| `BOMNUM_0` | Nomenclature |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `MFMITMREF_0` | Composant |  |  |  |  |
| `MATTYP_0` | Type matière |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `LOTPREF_0` | Lot préférentiel |  |  |  |  |
| `CUMMATSUI_0` | Cumul |  |  |  |  |
| `USEQTY_0` | Quantité consommée |  |  |  |  |
| `CPLWST_0` | Poste réalisé |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    UPDDATTIM_0,
    AUUID_0,
    TYPQTY_0,
    PJT_0
FROM MFGMATTRK
WHERE -- vos conditions
```

---

## MFGOPE

**Ordres fabrication - opérat.**

**Nombre de champs** : 123

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CPLWST_0` | Poste réalisé |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `STDLAB_0` | Poste M-O standard |  |  |  |  |
| `EXTLAB_0` | Poste M-O prévu |  |  |  |  |
| `CPLLAB_0` | Poste M-O réalisé |  |  |  |  |
| `FRCSTRDAT_0` | Début forcé ordonnancement |  |  |  |  |
| `OPESTRCOE_0` | Coefficient US (STR)/UO |  |  |  |  |
| `EXTSTRQTY_0` | Quantité en US ss-traitance |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `STDWSTNBR_0` | Nb postes standard |  |  |  |  |
| `EXTSETTIM_0` | Temps réglage prévu |  |  |  |  |
| `CPLSETTIM_0` | Temps réglage réalisé |  |  |  |  |
| `BPRNUM_0` | Tiers |  |  |  |  |
| `STDOPETIM_0` | Temps opératoire standard |  |  |  |  |
| `PSPTIM_0` | Temps post opératoire |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `MFOTRKFLG_0` | Flag suivi |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `STDWST_0` | Poste standard |  |  |  |  |
| `EXTWST_0` | Poste prévu |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `EXTPRI_0` | Prix prévu |  |  |  |  |
| `CPLPRI_0` | Prix réel |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `TIMCOD_0` | Unité de gestion |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `FRCSTRHOU_0` | Heure forcée ordonnancement |  |  |  |  |
| `EXTWSTNBR_0` | Nombre postes prévus |  |  |  |  |
| `CPLWSTNBR_0` | Nombre postes réalisé |  |  |  |  |
| `EXTSTUQTY_0` | Quantité prévue US |  |  |  |  |
| `STDSETTIM_0` | Temps réglage standard |  |  |  |  |
| `STDQTY_0` | Quantité standard |  |  |  |  |
| `OPESPLNUM_0` | Fraction début opération |  |  |  |  |
| `REFPRI_0` | Prix référence |  |  |  |  |
| `XMACHINE_0` | Code machine |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `WSTEFF_0` | Efficience poste en % |  |  |  |  |
| `WIPNUM_0` | Numéro encours (SC) |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `SCOCOD_0` | Code sous-traitance |  |  |  |  |
| `SCOITMREF_0` | Article de sous-traitance |  |  |  |  |
| `SPLCOD_0` | Fractionnement (capa finie) |  |  |  |  |
| `SPLMAXNBR_0` | Nb maxi fractionnement (capa finie) |  |  |  |  |
| `ALTOPECOD_0` | Opération alternative (PmSim) |  |  |  |  |
| `RSTMAC_0` | Restriction machine (PmSim) |  |  |  |  |
| `GRPSETTIM_0` | Temps réglage groupe (PmSim) |  |  |  |  |
| `OPEPLNNUM_0` | Plan opération |  |  |  |  |
| `OPEROUPCT_0` | Image opération |  |  |  |  |
| `EQUNUM_0` | Outillage |  |  |  |  |
| `FXGNUM_0` | Type contenant |  |  |  |  |
| `EFF_0` | Efficience en % |  |  |  |  |
| `PRPTIM_0` | Tps préparation |  |  |  |  |
| `TIMUOMCOD_0` | Unité temps |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `FITCAPSTR_0` | Date début capacité finie |  |  |  |  |
| `FITCAPEND_0` | Date fin capacité finie |  |  |  |  |
| `INFCAPSTR_0` | Date début (capacité infinie) |  |  |  |  |
| `INFCAPEND_0` | Date fin (capacité infinie) |  |  |  |  |
| `MFOTEX_0` | Texte |  |  |  |  |
| `OPENUM_0` | Numéro opération |  |  |  |  |
| `OPENUMLEV_0` | Suffixe opération (PmSim) |  |  |  |  |
| `RPLIND_0` | Indice remplacement |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CAD_0` | Cadence |  |  |  |  |
| `PRGNUM_0` | Programme |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `WAITIM_0` | Temps attente |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `OPELABCOE_0` | Coef temps main-d'oeuvre opératoire |  |  |  |  |
| `TECCRD_0` | Fiche technique |  |  |  |  |
| `SCHGRP_0` | Critère regroupement (PmSim) |  |  |  |  |
| `POPSEQ_0` | Séquence |  |  |  |  |
| `OPESTA_0` | Statut opération |  |  |  |  |
| `SETLABCOE_0` | Coef temps main-d'oeuvre réglage |  |  |  |  |
| `ROODES_0` | Désignation opération |  |  |  |  |
| `OPEUOM_0` | Unité opération |  |  |  |  |
| `INVQTY_0` | Quantité facturée |  |  |  |  |
| `EXTUNTTIM_0` | Temps unitaire prévu |  |  |  |  |
| `EXTOPETIM_0` | Temps opération prévu |  |  |  |  |
| `CPLOPETIM_0` | Temps opération réalisé |  |  |  |  |
| `OPSNUM_0` | Numéro charge |  |  |  |  |
| `CPLUNTTIM_0` | Temps unitaire réalisé |  |  |  |  |
| `STDUNTTIM_0` | Temps unitaire standard |  |  |  |  |
| `ROUOPENUM_0` | Numéro opération de gamme |  |  |  |  |
| `OPESTUCOE_0` | Coef conversion US-UO |  |  |  |  |
| `CPLCRG_0` | Frais réel |  |  |  |  |
| `SCOWST_0` | Poste sous-traitance |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `SCOLTI_0` | Délai sous-traitance |  |  |  |  |
| `XCADTHEO_0` | Cadence théo |  |  |  |  |
| `OPESTR_0` | Date début |  |  |  |  |
| `OPEEND_0` | Date fin |  |  |  |  |
| `X4LIMEND_0` | Pièce réelle / Pièce de simulation |  |  |  |  |
| `X4LIMFLG_0` | Version active |  |  |  |  |
| `X4LIMTYP_0` | Version arrêtée |  |  |  |  |
| `X4LIMSTR_0` | Version saisie |  |  |  |  |
| `XDATREFEND_0` | Date fin référence |  |  |  |  |
| `XSERNUM_0` | Numéro série |  |  |  |  |
| `XDATREFSTR_0` | Date début référence |  |  |  |  |
| `STDLABNBR_0` | Nombre postes mo standard |  |  |  |  |
| `EXTLABNBR_0` | Nombre postes mo prévus |  |  |  |  |
| `CPLLABNBR_0` | Nombre postes mo réalisé |  |  |  |  |
| `X4COLLAB_0` | Collaborateur |  |  |  |  |
| `ROOTIMCOD_0` | Type temps opératoire |  |  |  |  |
| `SCOPUU_0` | Unité achat |  |  |  |  |
| `X4PLNGMAO_0` | Planning GMAO |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `X1FTCOD_0` | Code Gamme d'analyses |  |  |  |  |
| `X1TECCRD_0` | Fiche technique Comp |  |  |  |  |
| `XEMPREINTE_0` | Nb d'empreintes |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4PFINFLG_0` | Flag fin ope |  |  |  |  |
| `SCHSBB_0` | Critère de distinction |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CPLWST_0,
    PLNFCY_0,
    STDLAB_0,
    EXTLAB_0,
    CPLLAB_0
FROM MFGOPE
WHERE -- vos conditions
```

---

## MFGOPEREV

**OF - audit opérations**

**Nombre de champs** : 111

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CPLWST_0` | Poste réalisé |  |  |  |  |
| `PLNFCY_0` | Site planification |  |  |  |  |
| `STDLAB_0` | Poste M-O standard |  |  |  |  |
| `EXTLAB_0` | Poste M-O prévu |  |  |  |  |
| `CPLLAB_0` | Poste M-O réalisé |  |  |  |  |
| `FRCSTRDAT_0` | Début forcé ordonnancement |  |  |  |  |
| `OPESTRCOE_0` | Coefficient US (STR)/UO |  |  |  |  |
| `EXTSTRQTY_0` | Quantité en US ss-traitance |  |  |  |  |
| `MFGSTA_0` | Statut ordre de fabrication |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `STDWSTNBR_0` | Nb postes standard |  |  |  |  |
| `EXTSETTIM_0` | Temps réglage prévu |  |  |  |  |
| `CPLSETTIM_0` | Temps réglage réalisé |  |  |  |  |
| `BPRNUM_0` | Tiers |  |  |  |  |
| `STDOPETIM_0` | Temps opératoire standard |  |  |  |  |
| `PSPTIM_0` | Temps post opératoire |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `MFOTRKFLG_0` | Flag suivi |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKFIRSTC_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `TRKLASTC_0` | Date fin suivi |  |  |  |  |
| `STDWST_0` | Poste standard |  |  |  |  |
| `EXTWST_0` | Poste prévu |  |  |  |  |
| `FXGNUM_0` | Type contenant |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `EXTPRI_0` | Prix prévu |  |  |  |  |
| `CPLPRI_0` | Prix réel |  |  |  |  |
| `BASQTY_0` | Quantité base |  |  |  |  |
| `TIMCOD_0` | Unité de gestion |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `REVNUM_0` | No avenant |  |  |  |  |
| `FRCSTRHOU_0` | Heure forcée ordonnancement |  |  |  |  |
| `EXTWSTNBR_0` | Nombre postes prévus |  |  |  |  |
| `CPLWSTNBR_0` | Nombre postes réalisé |  |  |  |  |
| `REVCOD_0` | Code avenant |  |  |  |  |
| `EXTSTUQTY_0` | Quantité prévue US |  |  |  |  |
| `STDSETTIM_0` | Temps réglage standard |  |  |  |  |
| `STDQTY_0` | Quantité standard |  |  |  |  |
| `OPESPLNUM_0` | Fraction début opération |  |  |  |  |
| `REFPRI_0` | Prix référence |  |  |  |  |
| `WSTEFF_0` | Efficience poste en % |  |  |  |  |
| `WIPNUM_0` | Numéro encours (SC) |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `SCOCOD_0` | Code sous-traitance |  |  |  |  |
| `SCOITMREF_0` | Article de sous-traitance |  |  |  |  |
| `SPLCOD_0` | Fractionnement (capa finie) |  |  |  |  |
| `SPLMAXNBR_0` | Nb maxi fractionnement (capa finie) |  |  |  |  |
| `ALTOPECOD_0` | Opération alternative (PmSim) |  |  |  |  |
| `RSTMAC_0` | Restriction machine (PmSim) |  |  |  |  |
| `GRPSETTIM_0` | Temps réglage groupe (PmSim) |  |  |  |  |
| `OPEPLNNUM_0` | Plan opération |  |  |  |  |
| `OPEROUPCT_0` | Image opération |  |  |  |  |
| `EQUNUM_0` | Outillage |  |  |  |  |
| `OPEUOM_0` | Unité opération |  |  |  |  |
| `EFF_0` | Efficience en % |  |  |  |  |
| `PRPTIM_0` | Tps préparation |  |  |  |  |
| `TIMUOMCOD_0` | Unité temps |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `FITCAPSTR_0` | Date début capacité finie |  |  |  |  |
| `FITCAPEND_0` | Date fin capacité finie |  |  |  |  |
| `INFCAPSTR_0` | Date début (capacité infinie) |  |  |  |  |
| `INFCAPEND_0` | Date fin (capacité infinie) |  |  |  |  |
| `MFOTEX_0` | Texte |  |  |  |  |
| `OPENUM_0` | Numéro opération |  |  |  |  |
| `OPENUMLEV_0` | Suffixe opération (PmSim) |  |  |  |  |
| `RPLIND_0` | Indice remplacement |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CAD_0` | Cadence |  |  |  |  |
| `PRGNUM_0` | Programme |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `WAITIM_0` | Temps attente |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `OPELABCOE_0` | Coef temps main-d'oeuvre opératoire |  |  |  |  |
| `TECCRD_0` | Fiche technique |  |  |  |  |
| `SCHGRP_0` | Critère regroupement (PmSim) |  |  |  |  |
| `REVREASON_0` | Motif |  |  |  |  |
| `POPSEQ_0` | Séquence |  |  |  |  |
| `OPESTA_0` | Statut opération |  |  |  |  |
| `SETLABCOE_0` | Coef temps main-d'oeuvre réglage |  |  |  |  |
| `ROODES_0` | Désignation opération |  |  |  |  |
| `INVQTY_0` | Quantité facturée |  |  |  |  |
| `EXTUNTTIM_0` | Temps unitaire prévu |  |  |  |  |
| `EXTOPETIM_0` | Temps opération prévu |  |  |  |  |
| `CPLOPETIM_0` | Temps opération réalisé |  |  |  |  |
| `OPSNUM_0` | Numéro charge |  |  |  |  |
| `CPLUNTTIM_0` | Temps unitaire réalisé |  |  |  |  |
| `STDUNTTIM_0` | Temps unitaire standard |  |  |  |  |
| `ROUOPENUM_0` | Numéro opération de gamme |  |  |  |  |
| `CPLCRG_0` | Frais réel |  |  |  |  |
| `SCOWST_0` | Poste sous-traitance |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `BPAADD_0` | Adresse |  |  |  |  |
| `MFGPIO_0` | Priorité |  |  |  |  |
| `OPESTUCOE_0` | Coef conversion US-UO |  |  |  |  |
| `SCOLTI_0` | Délai sous-traitance |  |  |  |  |
| `OPESTR_0` | Date début |  |  |  |  |
| `OPEEND_0` | Date fin |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `STDLABNBR_0` | Nombre postes mo standard |  |  |  |  |
| `EXTLABNBR_0` | Nombre postes mo prévus |  |  |  |  |
| `CPLLABNBR_0` | Nombre postes mo réalisé |  |  |  |  |
| `ROOTIMCOD_0` | Type temps opératoire |  |  |  |  |
| `SCOPUU_0` | Unité achat |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `SCHSBB_0` | Critère de distinction |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CPLWST_0,
    PLNFCY_0,
    STDLAB_0,
    EXTLAB_0,
    CPLLAB_0
FROM MFGOPEREV
WHERE -- vos conditions
```

---

## MFGOPETRK

**Suivi fabrication - opérat.**

**Nombre de champs** : 98

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ITMREF_0` | Gamme |  |  |  |  |
| `CPLSTRDAT_0` | Date de début |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `CPLENDDAT_0` | Date de fin |  |  |  |  |
| `CPLENDHOU_0` | Heure de fin |  |  |  |  |
| `OPEWORCOE_0` | Coef conversion US-UO |  |  |  |  |
| `XNCFLG_0` | flag non conformité |  |  |  |  |
| `SCANUM_0` | code rebut |  |  |  |  |
| `DACHOU_0` | Heure saisie |  |  |  |  |
| `XEQUIPE_0` | Equipe |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `XEQUDAT_0` | Date de début 1er segment équipe |  |  |  |  |
| `XEQUTIM_0` | Heure de début 1er segment équipe |  |  |  |  |
| `XECH_0` | Taille échantillon |  |  |  |  |
| `MSGNUM_0` | Message |  |  |  |  |
| `OPEUOM_0` | Unité de saisie |  |  |  |  |
| `TABREJQTY_0` | Quantité rebut par message |  |  |  |  |
| `XPJT_0` | Affaire |  |  |  |  |
| `X4SYMPTOME_0` | Symptome |  |  |  |  |
| `XCLEMKIMKO_0` | Clé MKI MKO |  |  |  |  |
| `X4ARRETPROD_0` | Arrêt de production |  |  |  |  |
| `X4LIBRE7_0` | Libre 7 |  |  |  |  |
| `X4LIBRE8_0` | Libre 8 |  |  |  |  |
| `X4PANFLG_0` | Panne |  |  |  |  |
| `X4REMEDE_0` | Remède |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CPLUTITIM_0` | Temps utile |  |  |  |  |
| `CPLALOPTIM_0` | Tps opé alloué réalisé |  |  |  |  |
| `CPLALSETIM_0` | Tps régl alloué réalisé |  |  |  |  |
| `XCODECH_0` | Code échantillon |  |  |  |  |
| `X4CAUSE_0` | Cause |  |  |  |  |
| `CPLWST_0` | Poste réalisé |  |  |  |  |
| `CPLLAB_0` | Poste M-O réalisé |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `DACMST_0` | Etape suivi (Jalon) |  |  |  |  |
| `CPLSETTIM_0` | Temps réglage réalisé |  |  |  |  |
| `CPLSTRHOU_0` | Heure de début |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |
| `XCLEMD1_0` | Décimal |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `TIMTYP_0` | Type temps |  |  |  |  |
| `X4CR_0` | Compte-rendu |  |  |  |  |
| `EXTPRI_0` | Prix prévu |  |  |  |  |
| `CPLPRI_0` | Prix réel |  |  |  |  |
| `PTHNUM_0` | No réception |  |  |  |  |
| `XCLEMD2_0` | Décimal |  |  |  |  |
| `XCLEMD3_0` | Décimal |  |  |  |  |
| `XCLEMD4_0` | Décimal |  |  |  |  |
| `XCLEMD5_0` | Décimal |  |  |  |  |
| `DACDAT_0` | Date saisie |  |  |  |  |
| `OPESPLNUM_0` | Fraction début opération |  |  |  |  |
| `XCLEA3_0` | Alpha 3 |  |  |  |  |
| `XCLEA4_0` | Alpha 4 |  |  |  |  |
| `XCLEA5_0` | Alpha 5 |  |  |  |  |
| `XMACHINE_0` | Code machine |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `POPLIN_0` | Ligne commande |  |  |  |  |
| `X4LIBRE1_0` | Libre 1 |  |  |  |  |
| `X4LIBRE2_0` | Libre 2 |  |  |  |  |
| `X4LIBRE3_0` | Libre 3 |  |  |  |  |
| `X4LIBRE4_0` | Libre 4 |  |  |  |  |
| `X4LIBRE5_0` | Libre 5 |  |  |  |  |
| `X4LIBRE6_0` | Libre 6 |  |  |  |  |
| `CPLTIMTYN_0` | Numéro du Type de Temps |  |  |  |  |
| `CPLTIMTYP_0` | Code du Type  deTemps |  |  |  |  |
| `TIMUOMCOD_0` | Unité temps |  |  |  |  |
| `POHNUM_0` | No commande |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `MKOTEX_0` | Texte |  |  |  |  |
| `XCLEA1_0` | Alpha 1 |  |  |  |  |
| `PTDLIN_0` | Ligne |  |  |  |  |
| `OPETRKLIN_0` | Ligne |  |  |  |  |
| `OPENUM_0` | Numéro opération |  |  |  |  |
| `RPLIND_0` | Indice remplacement |  |  |  |  |
| `STDOPENUM_0` | Opération standard |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `OPELABCOE_0` | Coef temps main-d'oeuvre opératoire |  |  |  |  |
| `TECCRD_0` | Fiche technique |  |  |  |  |
| `X4DEFAUT_0` | Défaut |  |  |  |  |
| `POPSEQ_0` | Séquence |  |  |  |  |
| `SETLABCOE_0` | Coef temps main-d'oeuvre réglage |  |  |  |  |
| `INVQTY_0` | Quantité facturée |  |  |  |  |
| `CPLOPETIM_0` | Temps opération réalisé |  |  |  |  |
| `ROUOPENUM_0` | Numéro opération de gamme |  |  |  |  |
| `XNUMACT_0` | Numéro action |  |  |  |  |
| `CPLCRG_0` | Frais réel |  |  |  |  |
| `MFGTRKNUM_0` | Numéro suivi |  |  |  |  |
| `EMPNUM_0` | Matricule |  |  |  |  |
| `XCLEA2_0` | Alpha 2 |  |  |  |  |
| `BPSNUM_0` | Fournisseur |  |  |  |  |
| `OPEBORNE_0` | Opération borne |  |  |  |  |

### Exemple SQL

```sql
SELECT
    MFGNUM_0,
    ITMREF_0,
    CPLSTRDAT_0,
    EXPNUM_0,
    PJT_0
FROM MFGOPETRK
WHERE -- vos conditions
```

---

## MFGPRN

**Ordres fabrication - documents**

**Nombre de champs** : 27

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `PLNFCY_0` | Site planification |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `PCUNBR_0` | Nombre d'unités de conditionnement |  |  |  |  |
| `PICLISFLG_0` | Flag B.S.M |  |  |  |  |
| `ROUSHEFLG_0` | Flag fiche suiveuse |  |  |  |  |
| `LABTIKFLG_0` | Flag bon de travail |  |  |  |  |
| `MFGTIKFLG_0` | Flag recette |  |  |  |  |
| `TECCRDFLG_0` | Flag fiche technique |  |  |  |  |
| `EXTMFGFDR_0` | Dossier attendu |  |  |  |  |
| `LBEMOD_0` | Mode étiquetage |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `LBEFMT_0` | Format étiquette |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MFGFDRFLG_0` | Flag dossier |  |  |  |  |
| `XNBEDIT_0` | Nombre d'impressions |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ROUNUM_0` | Gamme lancée |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |

### Exemple SQL

```sql
SELECT
    PLNFCY_0,
    UPDDATTIM_0,
    PCUNBR_0,
    PICLISFLG_0,
    ROUSHEFLG_0
FROM MFGPRN
WHERE -- vos conditions
```

---

## MFGSERDET

**OF - détail lien No série**

**Nombre de champs** : 13

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `DETITMREF_0` | Composant |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `DETSERNUM_0` | Numéro de série enfant |  |  |  |  |
| `MFGSER_0` | Numéro de série parent |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DETMFGFCY_0` | Site |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `DETMFGNUM_0` | Ordre fabrication |  |  |  |  |

### Exemple SQL

```sql
SELECT
    DETITMREF_0,
    ECCVALMAJ_0,
    UPDDATTIM_0,
    CREDATTIM_0,
    ECCVALMIN_0
FROM MFGSERDET
WHERE -- vos conditions
```

---

## MFGSERHDR

**OF - en-tête lien No série**

**Nombre de champs** : 12

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `MFGNUM_0` | Numéro ordre de fabrication |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `MFGLIN_0` | No ligne |  |  |  |  |
| `MFGSER_0` | Série |  |  |  |  |
| `MFGFCY_0` | Site production |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    MFGNUM_0,
    ITMREF_0,
    ECCVALMAJ_0,
    MFGLIN_0,
    MFGSER_0
FROM MFGSERHDR
WHERE -- vos conditions
```

---

## MFGTRS

**Transaction  saisie production**

**Nombre de champs** : 183

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `OPECCESCR_0` | Section analytique |  |  |  |  |
| `CCECODS_0` | Section analytique |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `WRHSCR1_0` | Dépôt entrée |  |  |  |  |
| `XSSTYPOT_0` | Sous-type OT |  |  |  |  |
| `X4DATREF_0` | Date référence péremption |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `SRGWAIFLG_0` | Réception à  quai |  |  |  |  |
| `LOTCODS_0` | Lot sortie |  |  |  |  |
| `SLOCODS_0` | Sous-Lot sortie |  |  |  |  |
| `AQRCODS_0` | Statut sortie |  |  |  |  |
| `LOCCODS_0` | Emplacement sortie |  |  |  |  |
| `LPNISSCOD_0` | Conteneur |  |  |  |  |
| `LPNISSSCR_0` | Conteneur |  |  |  |  |
| `LPNCOD_0` | Conteneur |  |  |  |  |
| `LPNSCR_0` | Conteneur |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `TRSCODS_0` | Code mouvement |  |  |  |  |
| `SRUB1FLG_0` | Rubrique 1 |  |  |  |  |
| `SLOSCRS_0` | Sous-Lot |  |  |  |  |
| `SLOCOD_0` | Sous-Lot |  |  |  |  |
| `SLOSCR_0` | Sous-Lot |  |  |  |  |
| `SERECODS_0` | Série fin |  |  |  |  |
| `SERESCRS_0` | Série fin |  |  |  |  |
| `SERECOD_0` | Série fin |  |  |  |  |
| `SERESCR_0` | Série fin |  |  |  |  |
| `SERECOD1_0` | Série fin |  |  |  |  |
| `SERESCR1_0` | Série fin |  |  |  |  |
| `UOMSAIFLG1_0` | Saisie UC |  |  |  |  |
| `SRUB2FLG_0` | Rubrique 2 |  |  |  |  |
| `SRUB3FLG_0` | Rubrique 3 |  |  |  |  |
| `SRUB4FLG_0` | Rubrique 4 |  |  |  |  |
| `TYPQTY_0` | Type de quantité |  |  |  |  |
| `PJTAFF_0` | Affaire |  |  |  |  |
| `NCSPRO_0` | Non-conformité - Process |  |  |  |  |
| `NCSRES_0` | Non-conformité - Ressource |  |  |  |  |
| `CRAFF_0` | Demande de changement |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCCOD_0` | Version majeure |  |  |  |  |
| `ECCSCR_0` | Version majeure |  |  |  |  |
| `MATECCSCR_0` | Version majeure |  |  |  |  |
| `ECCCODMIN_0` | Version mineure |  |  |  |  |
| `ECCSCRMIN_0` | Version mineure |  |  |  |  |
| `ITMECCMIN_0` | Version mineure |  |  |  |  |
| `MATECCCODMIN_0` | Version mineure |  |  |  |  |
| `MATECCSCRMIN_0` | Version mineure |  |  |  |  |
| `MODOPT_0` | Mode Production Scheduler |  |  |  |  |
| `XTRSOT_0` | Transaction OT |  |  |  |  |
| `ITMECCMAJ_0` | Version majeure |  |  |  |  |
| `MATECCCOD_0` | Version majeure |  |  |  |  |
| `WRHOBY_0` | Mono-dépôt |  |  |  |  |
| `WRHCOD2_0` | Dépôt sortie |  |  |  |  |
| `WRHSCR2_0` | Dépôt sortie |  |  |  |  |
| `WRHCOD1_0` | Dépôt entrée |  |  |  |  |
| `IDECOD02_0` | Identifiant 2 |  |  |  |  |
| `IDESCR02_0` | Identifiant 2 |  |  |  |  |
| `STASCR_0` | Statut |  |  |  |  |
| `DENAFF_0` | Destinataire |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LOCSCRS_0` | Emplacement |  |  |  |  |
| `LOCCOD_0` | Emplacement |  |  |  |  |
| `LOCSCR_0` | Emplacement |  |  |  |  |
| `ECCFLG_0` | Version |  |  |  |  |
| `AQRSCRS_0` | Statut |  |  |  |  |
| `STACOD_0` | Statut |  |  |  |  |
| `MTSDES_0` | Désignation |  |  |  |  |
| `DESAXX_0` | Désignation |  |  |  |  |
| `TECCRD_0` | Fiche technique |  |  |  |  |
| `SPOTFLG_0` | Titre |  |  |  |  |
| `IDECOD1_0` | Identifiant 1 |  |  |  |  |
| `IDESCR1_0` | Identifiant 1 |  |  |  |  |
| `IDESCRS1_0` | Identifiant 1 |  |  |  |  |
| `IDECOD01_0` | Identifiant 1 |  |  |  |  |
| `IDESCR01_0` | Identifiant 1 |  |  |  |  |
| `ADJPRIFLG_0` | Mouvement régularisé |  |  |  |  |
| `MATTRKFLG_0` | Suivi matière |  |  |  |  |
| `LOCFOU_0` | Empl fournisseur |  |  |  |  |
| `MCCIMPMOD_0` | Coût prévisionnel |  |  |  |  |
| `OPETRKFLG_0` | Suivi opérations |  |  |  |  |
| `ITMTRKFLG_0` | Déclaration prod |  |  |  |  |
| `MTSTYP_0` | Type transaction |  |  |  |  |
| `EMPFLG_0` | Modif emplacement |  |  |  |  |
| `TYPART_0` | Type article |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `SERCODS_0` | Série début |  |  |  |  |
| `SERSCRS_0` | Série début |  |  |  |  |
| `SERCOD_0` | Série début |  |  |  |  |
| `SERSCR_0` | Série début |  |  |  |  |
| `OPEUOMMOD_0` | Unité modifiable |  |  |  |  |
| `OPEUOMTYP_0` | Unité par défaut |  |  |  |  |
| `NBSLOFLG_0` | Nb sous-lot |  |  |  |  |
| `PRNNBFLG1_0` | Nbr impression |  |  |  |  |
| `PRNNBSCR1_0` | Nbr impression |  |  |  |  |
| `TECCRDNAM_0` | Document |  |  |  |  |
| `DOCNAM_0` | Document |  |  |  |  |
| `PICLISNAM_0` | Document |  |  |  |  |
| `ROUSHENAM_0` | Document |  |  |  |  |
| `LABTIKNAM_0` | Document |  |  |  |  |
| `MFGTIKNAM_0` | Document |  |  |  |  |
| `TECCRDNBR_0` | Nombre |  |  |  |  |
| `PICLISNBR_0` | Nombre |  |  |  |  |
| `ROUSHENBR_0` | Nombre |  |  |  |  |
| `LABTIKNBR_0` | Nombre |  |  |  |  |
| `MFGTIKNBR_0` | Nombre |  |  |  |  |
| `LOTAFF_0` | Lot |  |  |  |  |
| `LOTSCRS_0` | Lot |  |  |  |  |
| `LOTCOD_0` | Lot |  |  |  |  |
| `LOTSCR_0` | Lot |  |  |  |  |
| `UOMSAIFLG_0` | Saisie unité mesure |  |  |  |  |
| `AVSTOCOD1_0` | Stock disponible |  |  |  |  |
| `AVSTOSCR1_0` | Stock disponible |  |  |  |  |
| `MODALL_0` | Mode allocation |  |  |  |  |
| `TRSAUTO_0` | Transaction automatique |  |  |  |  |
| `CCECOD_0` | Section analytique |  |  |  |  |
| `CCESCR_0` | Section analytique |  |  |  |  |
| `MATCCECOD_0` | Section analytique |  |  |  |  |
| `MATCCESCR_0` | Section analytique |  |  |  |  |
| `OPECCECOD_0` | Section analytique |  |  |  |  |
| `SCDMODSAI_0` | Mode jalonnement |  |  |  |  |
| `FILTFLG_0` | Filtre |  |  |  |  |
| `STOCODMAN_0` | Manuel strict |  |  |  |  |
| `QTYSAI_0` | Quantité lancement par défaut |  |  |  |  |
| `ENTCODS_0` | Code pièce auto |  |  |  |  |
| `TYPMODO_0` | Type mode pour opérations |  |  |  |  |
| `ITMMULT_0` | Multi-articles |  |  |  |  |
| `PICLIS_0` | Bon de sortie matière |  |  |  |  |
| `UOMSAI_0` | Saisie en UC |  |  |  |  |
| `ROUSAI_0` | Saisie gamme |  |  |  |  |
| `PIOAFF_0` | Code priorité |  |  |  |  |
| `CONFFLG_0` | Confirmations |  |  |  |  |
| `MODJAL_0` | Mode jalonnement |  |  |  |  |
| `MODDOS_0` | Mode édition dossier de fabrication |  |  |  |  |
| `MFGMODC_0` | Complet |  |  |  |  |
| `MFGMODM_0` | Matières seules |  |  |  |  |
| `TYPMODM_0` | Type mode pour matières |  |  |  |  |
| `MFGMODO_0` | Opérations seules |  |  |  |  |
| `PRNCOD1_0` | Impression |  |  |  |  |
| `PRNSCR1_0` | Impression |  |  |  |  |
| `REDAFF_0` | % compression |  |  |  |  |
| `TYPTPS_0` | Type temps |  |  |  |  |
| `FILTDEF_0` | Valeur défaut filtre |  |  |  |  |
| `FDMA_0` | 1ère disponibilité |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `MTSNUM_0` | Transaction |  |  |  |  |
| `MVTDESCODS_0` | Désignation mouvement |  |  |  |  |
| `MVTDESSCRS_0` | Désignation mouvement |  |  |  |  |
| `MVTDESCOD_0` | Désignation mouvement |  |  |  |  |
| `MVTDESSCR_0` | Désignation mouvement |  |  |  |  |
| `MVTDESCOD1_0` | Désignation mouvement |  |  |  |  |
| `X4DATPER_0` | Date péremption |  |  |  |  |
| `ROUSHE_0` | Fiche suiveuse |  |  |  |  |
| `LABTIK_0` | Bon de travail |  |  |  |  |
| `MFGTIK_0` | Recette |  |  |  |  |
| `LBEMOD_0` | Mode étiquetage |  |  |  |  |
| `MFGSTA_0` | Statuts autorisés |  |  |  |  |
| `MWLFLG_0` | Plan de pesée |  |  |  |  |
| `TYPMAT_0` | Type matière |  |  |  |  |
| `STKFLG_0` | Sortie automatique |  |  |  |  |
| `MTSTYPCAR_0` | Num alpha |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CONSMAT_0` | Mode consommation matière |  |  |  |  |
| `MATRICULE_0` | Saisie matricule |  |  |  |  |
| `REBUT_0` | Saisie d'un code rebut |  |  |  |  |
| `REM_0` | Saisie messages |  |  |  |  |
| `STOCODDEF_0` | Retrait stock |  |  |  |  |
| `SPERFLG_0` | Péremption |  |  |  |  |
| `IDECODS1_0` | Identifiant  1 |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `TRSFAMS_0` | Famille mouvement |  |  |  |  |
| `WRHCOD_0` | Dépôt |  |  |  |  |
| `WRHSCR_0` | Dépôt |  |  |  |  |
| `DESAFF_0` | Désignation |  |  |  |  |
| `SORTITM_0` | Tri |  |  |  |  |
| `ACSCOD_0` | Code accès |  |  |  |  |
| `GFY_0` | Groupe |  |  |  |  |
| `DOCFLG_0` | Impression auto |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `IDECOD2_0` | Identifiant 2 |  |  |  |  |
| `IDESCR2_0` | Identifiant 2 |  |  |  |  |
| `IDECODS2_0` | Identifiant 2 |  |  |  |  |
| `IDESCRS2_0` | Identifiant 2 |  |  |  |  |

### Exemple SQL

```sql
SELECT
    OPECCESCR_0,
    CCECODS_0,
    ENAFLG_0,
    WRHSCR1_0,
    XSSTYPOT_0
FROM MFGTRS
WHERE -- vos conditions
```

---

## MFGVERSION

**Changement version GPAO**

**Nombre de champs** : 9

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `CLE_0` | Clé |  |  |  |  |
| `VERSION_0` | Version |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `TABLE_0` | Table |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `DATA_0` | Données |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    UPDUSR_0,
    CLE_0,
    VERSION_0,
    UPDDATTIM_0
FROM MFGVERSION
WHERE -- vos conditions
```

---

## MFGWIP

**Valorisation encours - entête**

**Nombre de champs** : 28

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `MFGFCY_0` | Site production |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `QUACPLQTY_0` | Quantité réalisée sous contrôle |  |  |  |  |
| `MFGTRKFLG_0` | Flag suivi |  |  |  |  |
| `TRKFIRST_0` | Date début suivi |  |  |  |  |
| `TRKLAST_0` | Date fin suivi |  |  |  |  |
| `CPLQTY_0` | Quantité réalisée totale |  |  |  |  |
| `VCRNUM_0` | No pièce |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `WST_0` | Poste charge |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `TRKTYP_0` | Type suivi |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `MATLEVFLG_0` | Coût niveau matière |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `ROUNUM_0` | Gamme lancée |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `REJCPLQTY_0` | Quantité réalisée rejetée |  |  |  |  |

### Exemple SQL

```sql
SELECT
    MFGFCY_0,
    UPDDATTIM_0,
    VCRTYP_0,
    QUACPLQTY_0,
    MFGTRKFLG_0
FROM MFGWIP
WHERE -- vos conditions
```

---

## ROUTING

**Gammes - Entête**

**Nombre de champs** : 29

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `FCY_0` | Site |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Gamme |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CFMFLG_0` | Validée |  |  |  |  |
| `IDENT1_0` | Identifiant 1 |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CFGVCRNUM_0` | N.pièce config. |  |  |  |  |
| `ACSCOD_0` | Code accès |  |  |  |  |
| `ROUALT_0` | Alternative gamme |  |  |  |  |
| `LASWORDAT_0` | Date dernier lancement |  |  |  |  |
| `LASWORQTY_0` | Quantité dernier lancement |  |  |  |  |
| `WORMAXQTY_0` | Quantité maximum lancement |  |  |  |  |
| `WORMINQTY_0` | Quantité minimum lancement |  |  |  |  |
| `PLNNUM_0` | Numéro plan entête gamme |  |  |  |  |
| `WORTYP_0` | Mode gestion OF |  |  |  |  |
| `TIMUOMCOD_0` | Unité temps |  |  |  |  |
| `ROUENDDAT_0` | Date fin validité |  |  |  |  |
| `ROUSTRDAT_0` | Date début validité |  |  |  |  |
| `USESTA_0` | Statut utilisation |  |  |  |  |
| `ROUDESAXX_0` | Désignation entête |  |  |  |  |
| `ROUDES_0` | Désignation entête |  |  |  |  |
| `ROUPCT_0` | Image entête gamme |  |  |  |  |
| `TEXNUM_0` | Texte entête gamme |  |  |  |  |

### Exemple SQL

```sql
SELECT
    FCY_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    AUUID_0,
    CREUSR_0
FROM ROUTING
WHERE -- vos conditions
```

---

## WORKSTATIO

**Postes de charge**

**Nombre de champs** : 44

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `WSTSHO_0` | Intitulé court |  |  |  |  |
| `WCR_0` | Centre de charge |  |  |  |  |
| `WSTNBR_0` | Nombre de postes |  |  |  |  |
| `RPLAUTO_0` | Remplacement automatique |  |  |  |  |
| `CONSTRAINT_0` | Contraint |  |  |  |  |
| `GRPHOR_0` | Horizon regroupement |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `XPOURCH0_0` | Charge max 1 (%) |  |  |  |  |
| `X4CADTH_0` | Cadence théorique moyenne |  |  |  |  |
| `X4ITMSAV_0` | Article SAV |  |  |  |  |
| `OPTCOD_0` | Code optimisation |  |  |  |  |
| `ZFLGIND_0` | Exclure des indicateurs |  |  |  |  |
| `SBBFLG_0` | Distinction des exemplaires |  |  |  |  |
| `X4POPESIM_0` | Plusieurs opé. simul |  |  |  |  |
| `X4PSUIPOI_0` | Suivi pointage |  |  |  |  |
| `XPOURCH_0` | Charge max 2 (%) |  |  |  |  |
| `RUNBRKFLG_0` | Exécuter pendant pause |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `PCCCOD_0` | Nature de dépense |  |  |  |  |
| `TWD_0` | Schéma hebdomadaire |  |  |  |  |
| `STOLOC_0` | Emplacement de stockage |  |  |  |  |
| `QLFLEV_0` | Niveau de qualification |  |  |  |  |
| `EXTHOUTIM_0` | Cumul des temps prévus en heures |  |  |  |  |
| `CPLHOUTIM_0` | Cumul des temps réalisés en heures |  |  |  |  |
| `WSTDES_0` | Intitulé poste de charge |  |  |  |  |
| `WSTDESAXX_0` | Intitulé poste de charge |  |  |  |  |
| `RCCP_0` | PGC |  |  |  |  |
| `USE_0` | Utilisation en pourcentage |  |  |  |  |
| `EFF_0` | Efficience en pourcentage |  |  |  |  |
| `CLEPCTAUT_0` | % pour solde automatique |  |  |  |  |
| `DSPLEV_0` | Niveau affichage |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `VLTCCE_0` | Section valorisation |  |  |  |  |
| `GRPFLG_0` | Regroupement |  |  |  |  |
| `WST_0` | Poste de charge |  |  |  |  |
| `WSTTYP_0` | Type du poste de charge |  |  |  |  |
| `WCRFCY_0` | Site rattachement |  |  |  |  |
| `WSTSHOAXX_0` | Intitulé court |  |  |  |  |

### Exemple SQL

```sql
SELECT
    WSTSHO_0,
    WCR_0,
    WSTNBR_0,
    RPLAUTO_0,
    CONSTRAINT_0
FROM WORKSTATIO
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

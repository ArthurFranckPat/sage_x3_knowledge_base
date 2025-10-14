# 📦 Module STOCKS - Documentation Complète

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📊 Statistiques

- **Tables documentées** : 21
- **Champs totaux** : 1,171
- **Source** : Données réelles de votre ERP Sage X3

---

## 📑 Tables du module

- [CBNDET](#cbndet) - Calcul besoins nets détail (54 champs)
- [CBNHEA](#cbnhea) - Calcul besoins nets (68 champs)
- [CBNWRK](#cbnwrk) - Temporaire calcul besoins (12 champs)
- [PARMRP](#parmrp) - Paramètres calculs besoins (138 champs)
- [SMVTD](#smvtd) - Détail mouvement stock (41 champs)
- [SMVTDVAL](#smvtdval) - Prix du mouvement (17 champs)
- [SMVTH](#smvth) - En-tête mouvements (32 champs)
- [STJTMP](#stjtmp) - Journal des Stocks-Interface (21 champs)
- [STKTRS](#stktrs) - Transactions stock (244 champs)
- [STOADCSEARCH](#stoadcsearch) - Paramétrage recherche stock (18 champs)
- [STOCK](#stock) - Stocks (48 champs)
- [STOCOST](#stocost) - Couts stocks FIFO (27 champs)
- [STOCOSTPIT](#stocostpit) - Coût FIFO stock instant T (30 champs)
- [STOJOU](#stojou) - Journal des Stocks (117 champs)
- [STOJOUOVE](#stojouove) - FG mouvements de stock (16 champs)
- [STOJOUVAL](#stojouval) - Valeurs mouvements de stock (103 champs)
- [STOPAR](#stopar) - Paramètres stocks (67 champs)
- [STOSYNW](#stosynw) - Travail resynchro stocks (37 champs)
- [STOVALCUM](#stovalcum) - Cumuls état valorisé stocks (16 champs)
- [STOVALWRK](#stovalwrk) - Etat valorisé des stocks (50 champs)
- [X4PARMRP](#x4parmrp) - Paramétrage CBN / Jour (15 champs)

---

## CBNDET

**Calcul besoins nets détail**

**Nombre de champs** : 54

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `WIP_0` | En cours |  |  |  |  |
| `PJT_0` | Affaire origine |  |  |  |  |
| `WIPSTAORI_0` | Statut encours orig. |  |  |  |  |
| `WIPNUMORI_0` | No ordre origine |  |  |  |  |
| `BOMOFS_0` | Délai opération |  |  |  |  |
| `WIPSEQORI_0` | Séquence origine |  |  |  |  |
| `COVQTY_0` | Quantité couverte |  |  |  |  |
| `WIPSTA_0` | Statut encours |  |  |  |  |
| `SUGSTA_0` | Statut encours |  |  |  |  |
| `MRPMES_0` | Message mrp |  |  |  |  |
| `MRPDAT_0` | Date mrp |  |  |  |  |
| `MRPQTY_0` | Quantité mrp |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `EXTQTY_0` | Quantité prévue |  |  |  |  |
| `SUGNUM_0` | No ordre |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `WIPTYP_0` | Type ordre |  |  |  |  |
| `SUGTYP_0` | Type ordre |  |  |  |  |
| `REQDAT_0` | Date besoin |  |  |  |  |
| `BOMOPE_0` | Numéro opération |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `ALLQTY_0` | Quantité allouée |  |  |  |  |
| `BUC_0` | Période |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ITMREFORI_0` | Article origine |  |  |  |  |
| `TRCFLG_0` | Trace |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MTOQTY_0` | Quantité affectée |  |  |  |  |
| `XWBUC_0` | Variable W période |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `MTOREF_0` | Réseau MTO |  |  |  |  |
| `XQTEMANQ_0` | Qté manquante |  |  |  |  |
| `RPLFLG_0` | Flag replanification |  |  |  |  |
| `WIPNUM_0` | Numéro ordre |  |  |  |  |
| `VCRNUM_0` | Numéro pièce |  |  |  |  |
| `RMNEXTQTY_0` | Quantité restante |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `ENDDAT_0` | Date fin |  |  |  |  |
| `REQQTY_0` | Besoin/Ressource |  |  |  |  |
| `STOQTY_0` | Stock disponible |  |  |  |  |
| `STOFCY_0` | Site stockage/récepteur |  |  |  |  |
| `DEMBUC_0` | Période demande |  |  |  |  |
| `VCRSEQ_0` | No séquence pièce |  |  |  |  |
| `WIPLINORI_0` | Ligne ori. |  |  |  |  |
| `BPRNUM_0` | Numéro tiers origine |  |  |  |  |
| `WIPTYPORI_0` | Type ordre origine |  |  |  |  |

### Exemple SQL

```sql
SELECT
    WIP_0,
    PJT_0,
    WIPSTAORI_0,
    WIPNUMORI_0,
    BOMOFS_0
FROM CBNDET
WHERE -- vos conditions
```

---

## CBNHEA

**Calcul besoins nets**

**Nombre de champs** : 68

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TOOFLG_0` | Outillage |  |  |  |  |
| `SHR_0` | Pourcentage de perte |  |  |  |  |
| `PHYSTO_0` | Stock interne 'A' |  |  |  |  |
| `CTLSTO_0` | Stock interne 'Q' |  |  |  |  |
| `REJSTO_0` | Stock interne 'R' |  |  |  |  |
| `EXYSTOFLG_0` | Stock périmé |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `ORDSTO_0` | Stock en commande |  |  |  |  |
| `LIFSTRDAT_0` | Début vie |  |  |  |  |
| `LIFENDDAT_0` | Fin vie |  |  |  |  |
| `REOCOD_0` | Type sugges |  |  |  |  |
| `QUAFLG_0` | Soumis à contrôle |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `SCSFLG_0` | Sous-traitance |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PURFLG_0` | Acheté |  |  |  |  |
| `MFGFLG_0` | Fabriqué |  |  |  |  |
| `SCPFLG_0` | Sous-traité |  |  |  |  |
| `PHAFLG_0` | Fantôme |  |  |  |  |
| `GENFLG_0` | Générique |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `PLHENDDAT_0` | Horizon ferme |  |  |  |  |
| `REOFCY_0` | Site réapprovisionnement |  |  |  |  |
| `REOPOL_0` | Politique réapprovisionnement |  |  |  |  |
| `SAFSTOCOD_0` | Stock sécurité |  |  |  |  |
| `STOTIAFLG_0` | Prise en compte stock |  |  |  |  |
| `REOQTYCOD_0` | Quantité réapprovisionnement |  |  |  |  |
| `SPLCOD_0` | Fractionnement |  |  |  |  |
| `QUALTI_0` | Délai contrôle qualité |  |  |  |  |
| `FOHENDDAT_0` | Horizon demande |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `DAYCOV_0` | Couverture |  |  |  |  |
| `SALSTO_0` | En cde client |  |  |  |  |
| `WAISTO_0` | Sorties en attente |  |  |  |  |
| `TRFSTO_0` | Stock transit |  |  |  |  |
| `STRSTO_0` | Stock de départ |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `WIPPRO_0` | Protection WIP |  |  |  |  |
| `DLVFLG_0` | Livrable |  |  |  |  |
| `TRASTO_0` | Stock transféré |  |  |  |  |
| `X1EXCSTO_0` | Quantité exclue |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCSTO_0` | Version stock |  |  |  |  |
| `ORDVER_0` | Version saisie exclusive |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `INTFLG_0` | Intermédiaire |  |  |  |  |
| `INTSTO_0` | Stock interne total |  |  |  |  |
| `PLFSTO_0` | Stock quai total |  |  |  |  |
| `ALLSTO_0` | Alloué total |  |  |  |  |
| `SCOSTO_0` | Stock s-trait total |  |  |  |  |
| `DETSHT_0` | Manquant détail |  |  |  |  |
| `GLOSHT_0` | Manquant global |  |  |  |  |
| `LLC_0` | Code de plus bas niveau |  |  |  |  |
| `STUDEC_0` | Décimales |  |  |  |  |
| `SALFLG_0` | Vendu |  |  |  |  |
| `SUGTYP_0` | Type suggestion |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `REOMGTCOD_0` | Mode réapprovisionnement |  |  |  |  |
| `STDFLG_0` | Mode gestion |  |  |  |  |
| `BPRSTO_0` | Stock prêté |  |  |  |  |
| `GLOALL_0` | Alloué global |  |  |  |  |
| `PLNANYCOD_0` | Analyse replanification |  |  |  |  |
| `FOHUOT_0` | Unité temps horizon demande |  |  |  |  |
| `ORDFLG_0` | Flag optimisation |  |  |  |  |
| `ITMDES1_0` | Désignation 1 |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TOOFLG_0,
    SHR_0,
    PHYSTO_0,
    CTLSTO_0,
    REJSTO_0
FROM CBNHEA
WHERE -- vos conditions
```

---

## CBNWRK

**Temporaire calcul besoins**

**Nombre de champs** : 12

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `RECCOD_0` | Code |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DAT_0` | Date |  |  |  |  |

### Exemple SQL

```sql
SELECT
    RECCOD_0,
    ITMREF_0,
    QTYSTU_0,
    CREUSR_0,
    UPDUSR_0
FROM CBNWRK
WHERE -- vos conditions
```

---

## PARMRP

**Paramètres calculs besoins**

**Nombre de champs** : 138

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `XHISLASTIM_0` | Heure dernière syntèse |  |  |  |  |
| `MPSPLHDAT_0` | Sug. horiz. ferme |  |  |  |  |
| `MRPPLHDAT_0` | Sug. horiz. ferme |  |  |  |  |
| `MPSTPSFLG_0` | Dem. transfert sug. |  |  |  |  |
| `MRPTPSFLG_0` | Dem. transfert sug. |  |  |  |  |
| `MPSTPPFLG_0` | Dem. transfert plan. |  |  |  |  |
| `MRPTPPFLG_0` | Dem. transfert plan. |  |  |  |  |
| `MRPTRPFLG_0` | Dem. transfert plan. |  |  |  |  |
| `MPSTRPFLG_0` | Dem. transfert plan. |  |  |  |  |
| `MPSTPFFLG_0` | Dem. transfert ferme |  |  |  |  |
| `MRPTPFFLG_0` | Dem. transfert ferme |  |  |  |  |
| `MRPTRFFLG_0` | Dem. transfert ferme |  |  |  |  |
| `MPSTRFFLG_0` | Dem. transfert ferme |  |  |  |  |
| `XHISLASDAT_0` | Date dernière synthèse |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `MPSMTPFLG_0` | Tâche affaire plan. |  |  |  |  |
| `MRPMTPFLG_0` | Tâche affaire plan. |  |  |  |  |
| `MPSMTFFLG_0` | Tâche affaire ferme |  |  |  |  |
| `MRPMTFFLG_0` | Tâche affaire ferme |  |  |  |  |
| `MPSEOPFLG_0` | EO planifiés |  |  |  |  |
| `MRPMWRPLN_0` | Replanifier besoins matière |  |  |  |  |
| `MPSMWRPLN_0` | Replanifier besoins matière |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MRPHORDEM_0` | Solde horiz. demande |  |  |  |  |
| `MPSHORDEM_0` | Solde horiz. demande |  |  |  |  |
| `MPSMFGLTI_0` | Délai de fabrication |  |  |  |  |
| `MRPMFGLTI_0` | Délai de fabrication |  |  |  |  |
| `RPLUPDQTY_0` | Replan. qté |  |  |  |  |
| `RPLUPDQTYS_0` | Replan. qté |  |  |  |  |
| `MPSPRNFLG_0` | Impression journal |  |  |  |  |
| `MRPPRNFLG_0` | Impression journal |  |  |  |  |
| `MRPTRDFLG_0` | Demandes transferts |  |  |  |  |
| `MPSTRDFLG_0` | Demandes transferts |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `MPSCOVRES_0` | Ressources  en couv. |  |  |  |  |
| `MRPCOVRES_0` | Ressources  en couv. |  |  |  |  |
| `MPSWAISTO_0` | Sorties en attente |  |  |  |  |
| `MRPWAISTO_0` | Sorties en attente |  |  |  |  |
| `REOPOLDIS_0` | Ignorer politique réappro |  |  |  |  |
| `REOPOLDISS_0` | Ignorer politique réappro |  |  |  |  |
| `RPLTYP_0` | Type ordre |  |  |  |  |
| `RPLTYPS_0` | Type ordre |  |  |  |  |
| `MPSALTTYP_0` | Type alternative |  |  |  |  |
| `MRPALTTYP_0` | Type alternative |  |  |  |  |
| `MPSCAPFCT_0` | Facteur capacité |  |  |  |  |
| `MRPCAPFCT_0` | Facteur capacité |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `MRPPHYSTO_0` | Stock physique |  |  |  |  |
| `MPSPHYSTO_0` | Stock physique |  |  |  |  |
| `MRPREJSTO_0` | Stock rejeté |  |  |  |  |
| `MPSREJSTO_0` | Stock rejeté |  |  |  |  |
| `MRPCTLSTO_0` | Stock sous contrôle |  |  |  |  |
| `MPSCTLSTO_0` | Stock sous contrôle |  |  |  |  |
| `MPSITM_0` | Articles PDP+CBN |  |  |  |  |
| `MRPITM_0` | Articles PDP+CBN |  |  |  |  |
| `MPSMAXANY_0` | Analyse stock maxi |  |  |  |  |
| `MRPMAXANY_0` | Analyse stock maxi |  |  |  |  |
| `MPSITMCOD_0` | Sélection exclusive |  |  |  |  |
| `MRPITMCOD_0` | Sélection exclusive |  |  |  |  |
| `MRPSAFCOV_0` | Reconstitution stock sécurité |  |  |  |  |
| `MPSSAFCOV_0` | Reconstitution stock sécurité |  |  |  |  |
| `MPSBUCCOR_0` | Ajustement automatique |  |  |  |  |
| `MRPBUCCOR_0` | Ajustement automatique |  |  |  |  |
| `MPSBOMALT_0` | Alternative nomenclature |  |  |  |  |
| `MRPBOMALT_0` | Alternative nomenclature |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `MPSTWD_0` | Schéma hebdomadaire |  |  |  |  |
| `MRPTWD_0` | Schéma hebdomadaire |  |  |  |  |
| `MRPEOPFLG_0` | EO planifiés |  |  |  |  |
| `MPSEOFFLG_0` | EO fermes |  |  |  |  |
| `MRPEOFFLG_0` | EO fermes |  |  |  |  |
| `MPSEOSFCY_0` | Gén.sug. sous-trait. |  |  |  |  |
| `MRPEOSFCY_0` | Gén.sug. sous-trait. |  |  |  |  |
| `MRPMONNBR_0` | Nbre groupages mois |  |  |  |  |
| `MPSWOSFCY_0` | Gén. sug. fab. |  |  |  |  |
| `MRPWOSFCY_0` | Gén. sug. fab. |  |  |  |  |
| `MPSWOSFCYI_0` | Gén. sug. inter-site |  |  |  |  |
| `MRPWOSFCYI_0` | Gén. sug. inter-site |  |  |  |  |
| `MPSPOSFCY_0` | Commandes dachat |  |  |  |  |
| `MRPPOSFCY_0` | Commandes dachat |  |  |  |  |
| `MPSPOSFCYI_0` | Gén. sug. achats inter |  |  |  |  |
| `MRPPOSFCYI_0` | Gén. sug. achats inter |  |  |  |  |
| `MPSSOSFLG_0` | Cdes clients  sug. |  |  |  |  |
| `MRPSOSFLG_0` | Cdes clients  sug. |  |  |  |  |
| `MRPLASLTI_0` | Durée en minutes |  |  |  |  |
| `MPSLASLTI_0` | Durée en minutes |  |  |  |  |
| `MPSCAPLTI_0` | Calcul charge |  |  |  |  |
| `MRPCAPLTI_0` | Calcul charge |  |  |  |  |
| `MRPTRFSTO_0` | Transferts |  |  |  |  |
| `MPSTRFSTO_0` | Transferts |  |  |  |  |
| `RPLBWDLTI_0` | Délai amont |  |  |  |  |
| `RPLBWDLTIS_0` | Délai amont |  |  |  |  |
| `RPLFRWLTI_0` | Délai aval |  |  |  |  |
| `RPLFRWLTIS_0` | Délai aval |  |  |  |  |
| `MRPSOFFLG_0` | Cdes clients fermes |  |  |  |  |
| `MRPWOSFLG_0` | O.F. suggérés |  |  |  |  |
| `MRPWOPFLG_0` | OF planifiés |  |  |  |  |
| `MPSWOPFLG_0` | OF planifiés |  |  |  |  |
| `MRPWOFFLG_0` | OF lancés |  |  |  |  |
| `MPSWOFFLG_0` | OF lancés |  |  |  |  |
| `MRPPOSFLG_0` | Cdes four. sug. |  |  |  |  |
| `MRPPOPFLG_0` | Cdes. achat planifiées |  |  |  |  |
| `MPSPOPFLG_0` | Cdes. achat planifiées |  |  |  |  |
| `MRPPOFFLG_0` | Cdes. achat fermes |  |  |  |  |
| `MPSPOFFLG_0` | Cdes. achat fermes |  |  |  |  |
| `MRPLASDAT_0` | Date dernier calcul |  |  |  |  |
| `MPSLASDAT_0` | Date dernier calcul |  |  |  |  |
| `MPSANYLTI_0` | Analyse replanifification |  |  |  |  |
| `MRPANYLTI_0` | Analyse replanifification |  |  |  |  |
| `MPSSOPFLG_0` | Cdes clients plan. |  |  |  |  |
| `MRPSOPFLG_0` | Cdes clients plan. |  |  |  |  |
| `MPSSOFFLG_0` | Cdes clients fermes |  |  |  |  |
| `MPSDAYNBR_0` | Nbre groupages jours |  |  |  |  |
| `MRPDAYNBR_0` | Nbre groupages jours |  |  |  |  |
| `MPSWEENBR_0` | Nbre groupages semaines |  |  |  |  |
| `MRPWEENBR_0` | Nbre groupages semaines |  |  |  |  |
| `MPSMONNBR_0` | Nbre groupages mois |  |  |  |  |
| `MPSSAFSTO_0` | Ignorer stock sécurité |  |  |  |  |
| `MRPSAFSTO_0` | Ignorer stock sécurité |  |  |  |  |
| `MPSCOV_0` | Ignorer couverture |  |  |  |  |
| `MRPCOV_0` | Ignorer couverture |  |  |  |  |
| `MPSSPEPAR_0` | Param. spécifique |  |  |  |  |
| `MRPSPEPAR_0` | Param. spécifique |  |  |  |  |
| `MPSGHOSTO_0` | Stock art. fantômes |  |  |  |  |
| `MRPGHOSTO_0` | Stock art. fantômes |  |  |  |  |
| `RPLUPDDAT_0` | Replan. date |  |  |  |  |
| `RPLUPDDATS_0` | Replan. date |  |  |  |  |
| `WIPPRO_0` | Protection WIP |  |  |  |  |
| `WIPPROS_0` | Protection WIP |  |  |  |  |
| `RESBLWLOT_0` | Ressource\lot |  |  |  |  |
| `RESBLWLOTS_0` | Ressource\lot |  |  |  |  |
| `RPLMOD_0` | Mode replanification |  |  |  |  |
| `RPLMODS_0` | Mode replanification |  |  |  |  |
| `MPSSHRPRC_0` | Ignorer % perte lien |  |  |  |  |
| `MRPSHRPRC_0` | Ignorer % perte lien |  |  |  |  |

### Exemple SQL

```sql
SELECT
    XHISLASTIM_0,
    MPSPLHDAT_0,
    MRPPLHDAT_0,
    MPSTPSFLG_0,
    MRPTPSFLG_0
FROM PARMRP
WHERE -- vos conditions
```

---

## SMVTD

**Détail mouvement stock**

**Nombre de champs** : 41

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `WRH_0` | Dépôt |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `QTYSTUORI_0` | Quantité US origine |  |  |  |  |
| `PRIORD_0` | Prix ordre |  |  |  |  |
| `VCRLINPNT_0` | Ligne composé |  |  |  |  |
| `BOMALTTYP_0` | Type alternative nomenclature |  |  |  |  |
| `UPDCOD_0` | Mise à jour stock |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `XTYPOBJ_0` | Type objet |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `XOBJ3_0` | Objet partie 3 |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `PNTMVTCOD_0` | Entrée / Sortie composé |  |  |  |  |
| `QTYPCUORI_0` | Quantité UC origine |  |  |  |  |
| `LINTYP_0` | Type ligne |  |  |  |  |
| `PRI_0` | Prix |  |  |  |  |
| `BOMALT_0` | Alternative nomenclature |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `XNUMACT_0` | Numéro action |  |  |  |  |
| `XOBJ1_0` | Objet partie 1 |  |  |  |  |
| `XOBJ2_0` | Objet partie 2 |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ITMDES1_0` | Désignation 1 |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `UPDPRI_0` | Type de prix |  |  |  |  |
| `PCU_0` | Unité |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `QTYPCU_0` | Quantité |  |  |  |  |

### Exemple SQL

```sql
SELECT
    WRH_0,
    PCUSTUCOE_0,
    VCRLIN_0,
    UPDDAT_0,
    CREDAT_0
FROM SMVTD
WHERE -- vos conditions
```

---

## SMVTDVAL

**Prix du mouvement**

**Nombre de champs** : 17

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `INVDTACST_0` | Elément facturation |  |  |  |  |
| `MACCST_0` | Coût machine |  |  |  |  |
| `MATCST_0` | Coût matière |  |  |  |  |
| `LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `OVEMATCST_0` | FG matière |  |  |  |  |
| `OVESCOCST_0` | FG s/t |  |  |  |  |
| `OVELABCST_0` | FG m-o |  |  |  |  |
| `OVEMACCST_0` | FG machine |  |  |  |  |
| `SCOTOT_0` | Total sous-traitance |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    INVDTACST_0,
    MACCST_0,
    MATCST_0,
    LABCST_0
FROM SMVTDVAL
WHERE -- vos conditions
```

---

## SMVTH

**En-tête mouvements**

**Nombre de champs** : 32

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `WRHE_0` | Dépôt |  |  |  |  |
| `DBYDEV_0` | Solde désassemblage |  |  |  |  |
| `XCONDIT_0` | Déconditionnement |  |  |  |  |
| `XMVTASSOC_0` | Mouvement associé |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `DBYFLG_0` | Désassemblage |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `CFMFLG_0` | Validé |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `IMPNUMLIG_0` | Ligne import |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `X4SAVORI_0` | Origine SAV |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `X4NUMINT_0` | Intervention |  |  |  |  |
| `X4NUMDEMAND_0` | Demande de service |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `CFMCOD_0` | Validation saisie |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `VCRDES_0` | Désignation |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREDATTIM_0,
    WRHE_0,
    DBYDEV_0,
    XCONDIT_0,
    XMVTASSOC_0
FROM SMVTH
WHERE -- vos conditions
```

---

## STJTMP

**Journal des Stocks-Interface**

**Nombre de champs** : 21

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `STOFCY_0` |  |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `KEY1_0` | Clé |  |  |  |  |
| `KEY2_0` | Clé |  |  |  |  |
| `KEY3_0` | Clé |  |  |  |  |
| `KEY4_0` | Clé |  |  |  |  |
| `KEY5_0` | Clé |  |  |  |  |
| `CPY_0` | Société |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `MVTSEQ_0` | Séquence |  |  |  |  |
| `PSTOJOU_0` | Chrono |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `UPDCOD_0` | Mise à jour |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `TRSTYP_0` | Type transaction |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `MVTIND_0` | Indice |  |  |  |  |

### Exemple SQL

```sql
SELECT
    VCRTYP_0,
    STOFCY_0,
    ENTCOD_0,
    KEY1_0,
    KEY2_0
FROM STJTMP
WHERE -- vos conditions
```

---

## STKTRS

**Transactions stock**

**Nombre de champs** : 244

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `QTYQTUSCR1_0` | Stock US |  |  |  |  |
| `INVSGHCOD_0` | A facturer |  |  |  |  |
| `QTYSTUOCOD_0` | Qté US des. |  |  |  |  |
| `CUNDEVDSY_0` | Affichage écart |  |  |  |  |
| `CUNDEVDSY1_0` | Affichage écart |  |  |  |  |
| `CUNDEVSCR_0` | Affichage écart |  |  |  |  |
| `CUNDEVSCR1_0` | Affichage écart |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `TRSFAMCOD_0` | Famille mouvement stock |  |  |  |  |
| `CTGUSRFLG_0` | Saisie inventoriste |  |  |  |  |
| `DOCFLG_0` | Impression automatique |  |  |  |  |
| `PCKFLT_0` | Filtre emballage |  |  |  |  |
| `WRHCOD1_0` | Dépôt ligne |  |  |  |  |
| `WRHSCR1_0` | Dépôt ligne |  |  |  |  |
| `SCCCODCOD_0` | Code SSCC |  |  |  |  |
| `SCCCODSCR_0` | Code SSCC |  |  |  |  |
| `WRHOBY_0` | Mono-dépôt |  |  |  |  |
| `CHGWRHCOD_0` | Dépôt destination |  |  |  |  |
| `DEFLOCCOD_0` | Emp conso |  |  |  |  |
| `DEFLOCSCR_0` | Emp conso |  |  |  |  |
| `DEFTYPCOD_0` | Type conso |  |  |  |  |
| `DEFTYPSCR_0` | Type conso |  |  |  |  |
| `ECCCOD_0` | Version majeure |  |  |  |  |
| `ECCSCR_0` | Version majeure |  |  |  |  |
| `ECCCODMIN_0` | Version mineure |  |  |  |  |
| `ECCSCRMIN_0` | Version mineure |  |  |  |  |
| `OWNERCOD_0` | Propriétaire |  |  |  |  |
| `OWNERSCR_0` | Propriétaire |  |  |  |  |
| `PKTNUM_0` | Transaction colisage |  |  |  |  |
| `PKGTYP_0` | Type colisage |  |  |  |  |
| `PACNUMCOD_0` | Numéro colis |  |  |  |  |
| `GROWEICOD_0` | Poids des colis |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `REOLOCCOD_0` | Emplacement sous-traitant |  |  |  |  |
| `WRHORICOD_0` | Dépôt origine |  |  |  |  |
| `WRHORISCR_0` | Dépôt origine |  |  |  |  |
| `DEPRATCOD1_0` | Taux revalorisation |  |  |  |  |
| `DEPRATSCR1_0` | Taux revalorisation |  |  |  |  |
| `DEPAMTCOD1_0` | Mt revalorisation |  |  |  |  |
| `DEPAMTSCR1_0` | Mt revalorisation |  |  |  |  |
| `CHGACC_0` | Accès changement stock |  |  |  |  |
| `ABCSCR_0` |  |  |  |  |  |
| `DOCNAM_0` | Document |  |  |  |  |
| `ENAFLG_0` | Actif en sélection |  |  |  |  |
| `UOMSAIFLG_0` | Saisie unité mesure |  |  |  |  |
| `BETFCYCOD_0` | Destination |  |  |  |  |
| `LOTCOD_0` | Lot |  |  |  |  |
| `LOTSCR_0` | Lot |  |  |  |  |
| `LOTCOD1_0` | Lot |  |  |  |  |
| `AUZSST_0` | S/statuts autorisés |  |  |  |  |
| `SERCOD_0` | Série début |  |  |  |  |
| `SERSCR_0` | Série début |  |  |  |  |
| `ZERSTOFLG_0` | Afficher lignes stocks = 0 |  |  |  |  |
| `SHIDATCOD_0` | Date d'expédition |  |  |  |  |
| `VOLCOD_0` | Volume |  |  |  |  |
| `VOLSCR_0` | Volume |  |  |  |  |
| `LINTYPCOD_0` | Type ligne |  |  |  |  |
| `LINTYPSCR_0` | Type ligne |  |  |  |  |
| `PJTCOD_0` | Affaire |  |  |  |  |
| `PJTSCR_0` | Affaire |  |  |  |  |
| `CLEFLGCOD_0` | Solde |  |  |  |  |
| `CLEFLGSCR_0` | Solde |  |  |  |  |
| `SRUB2FLG_0` | Rubrique 2 |  |  |  |  |
| `SRUB3FLG_0` | Rubrique 3 |  |  |  |  |
| `SRUB4FLG_0` | Rubrique 4 |  |  |  |  |
| `VCRFLTCOD_0` | Désactiver filtre pièce |  |  |  |  |
| `SIHNUMCOD_0` | N° facture |  |  |  |  |
| `SRUB1FLG_0` | Rubrique 1 |  |  |  |  |
| `SLOCOD_0` | Sous-Lot |  |  |  |  |
| `SLOSCR_0` | Sous-Lot |  |  |  |  |
| `SERECOD_0` | Série fin |  |  |  |  |
| `SERESCR_0` | Série fin |  |  |  |  |
| `SERECOD1_0` | Série fin |  |  |  |  |
| `SERESCR1_0` | Série fin |  |  |  |  |
| `SHIDATSCR_0` | Date d'expédition |  |  |  |  |
| `NBSLOFLG_0` | Nb sous-lot |  |  |  |  |
| `MVTPRICOD_0` | Prix mvt |  |  |  |  |
| `MVTPRISCR_0` | Prix mvt |  |  |  |  |
| `MVTPRICOD1_0` | Prix mvt |  |  |  |  |
| `TRSCOD_0` | Code mouvement |  |  |  |  |
| `LOCREO_0` | Emplacements réapprovisionnables |  |  |  |  |
| `UOMSAIFLG1_0` | Saisie unité conditionnement |  |  |  |  |
| `PNTMVTCOD_0` | Entrée / Sortie composé |  |  |  |  |
| `CSMREO_0` | Zones de consommation |  |  |  |  |
| `SHTREO_0` | Ruptures sur  emplacement |  |  |  |  |
| `PRNNBFLG1_0` | Nombre de copies |  |  |  |  |
| `QTYALLCOD1_0` | Affichage allouée |  |  |  |  |
| `QTYALLSCR1_0` | Affichage allouée |  |  |  |  |
| `FLGLOCDES_0` | Saisie emp dest |  |  |  |  |
| `SRGWAIFLG_0` | Réception à  quai |  |  |  |  |
| `QTYPCUCOD1_0` | Stock UC |  |  |  |  |
| `QTYPCUSCR1_0` | Stock UC |  |  |  |  |
| `QTYSTUCOD1_0` | Stock US |  |  |  |  |
| `PCUSCR_0` | Unité |  |  |  |  |
| `BPSLOTCOD_0` | Lot fournisseur |  |  |  |  |
| `BPSLOTSCR_0` | Lot fournisseur |  |  |  |  |
| `BPSLOTCOD1_0` | Lot fournisseur |  |  |  |  |
| `BPSLOTSCR1_0` | Lot fournisseur |  |  |  |  |
| `LOCCOD_0` | Emplacement |  |  |  |  |
| `LOCSCR_0` | Emplacement |  |  |  |  |
| `CREUSRCOD_0` | Opérateur création |  |  |  |  |
| `CREUSRSCR_0` | Opérateur création |  |  |  |  |
| `ECCFLG_0` | Version |  |  |  |  |
| `STACOD_0` | Statut |  |  |  |  |
| `STASCR_0` | Statut |  |  |  |  |
| `BPTCOD_0` | Transporteur |  |  |  |  |
| `BPTNUMCOD_0` | Transporteur |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `IPTDATCOD_0` | Date imputation |  |  |  |  |
| `IPTDATSCR_0` | Date imputation |  |  |  |  |
| `IPTDATCOD1_0` | Date imputation |  |  |  |  |
| `IPTDATSCR1_0` | Date imputation |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `VCRNUMCOD_0` | Pièce |  |  |  |  |
| `STUCOD_0` | Unité stock |  |  |  |  |
| `SERCOD1_0` | Série |  |  |  |  |
| `SERSCR1_0` | Série |  |  |  |  |
| `SRTTYP_0` | Type transaction |  |  |  |  |
| `VCRNUMSCR_0` | Pièce |  |  |  |  |
| `IDECOD02_0` | Identifiant 2 |  |  |  |  |
| `IDESCR02_0` | Identifiant 2 |  |  |  |  |
| `IDECOD2_0` | Identifiant 2 |  |  |  |  |
| `IDESCR2_0` | Identifiant 2 |  |  |  |  |
| `PCUSTUOCOD_0` | Coeff. ori. |  |  |  |  |
| `PCUSTUOSCR_0` | Coeff. ori. |  |  |  |  |
| `PIOQTY_0` | Qté préchargée chgt emp interne |  |  |  |  |
| `BPCORDCOD_0` | Client livré |  |  |  |  |
| `HEACCECOD_0` | Section analytique entête |  |  |  |  |
| `CHGPCUCOD_0` | Changement unités |  |  |  |  |
| `IDECOD01_0` | Identifiant 1 |  |  |  |  |
| `IDESCR01_0` | Identifiant 1 |  |  |  |  |
| `IDECOD1_0` | Identifiant 1 |  |  |  |  |
| `IDESCR1_0` | Identifiant 1 |  |  |  |  |
| `CHGEMPTOT_0` | Chgt emp en masse |  |  |  |  |
| `CCESCR_0` | Section analytique |  |  |  |  |
| `CCECODS_0` | Section analytique |  |  |  |  |
| `ABCCOD_0` | ABC |  |  |  |  |
| `AVSTOCOD1_0` | Stock disponible |  |  |  |  |
| `AVSTOSCR1_0` | Stock disponible |  |  |  |  |
| `CREDATSCR_0` | Date création |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `REOLOCSCR_0` | Emp sous-traitant |  |  |  |  |
| `CCECOD_0` | Section analytique ligne |  |  |  |  |
| `SLOORICOD_0` | S/lot origine |  |  |  |  |
| `SLOORISCR_0` | S/lot origine |  |  |  |  |
| `SERORICOD_0` | Série origine |  |  |  |  |
| `SERORISCR_0` | Série origine |  |  |  |  |
| `STAORICOD_0` | Statut origine |  |  |  |  |
| `STAORISCR_0` | Statut origine |  |  |  |  |
| `LOCORICOD_0` | Emplacement origine |  |  |  |  |
| `LOCORISCR_0` | Emplacement origine |  |  |  |  |
| `ABYTYP_0` | Type assemblage |  |  |  |  |
| `CRIT2_0` | Critère 2 |  |  |  |  |
| `GFY_0` | Groupe |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `AUZSTA_0` | Statuts autorisés |  |  |  |  |
| `CFMCOD_0` | Validation saisie |  |  |  |  |
| `FORSTA_0` | Formule |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CRIT1_0` | Critère1 |  |  |  |  |
| `ORIFLG_0` | Origine |  |  |  |  |
| `ACSCOD_0` | Code accès |  |  |  |  |
| `ORINUMCOD_0` | No commande |  |  |  |  |
| `ORINUMSCR_0` | No commande |  |  |  |  |
| `SDHTYPCOD_0` | Type livraison |  |  |  |  |
| `SDHTYPSCR_0` | Type livraison |  |  |  |  |
| `QTYSTUCOD_0` | Quantité US |  |  |  |  |
| `QTYSTUSCR_0` | Quantité US |  |  |  |  |
| `ITMDES1COD_0` | Désignation |  |  |  |  |
| `ITMDES1SCR_0` | Désignation |  |  |  |  |
| `DESAXX_0` | Désignation |  |  |  |  |
| `QLYCRDSCR_0` | Fiche technique |  |  |  |  |
| `QLYCRDCOD_0` | Fiche technique |  |  |  |  |
| `QTYPCUCOD_0` | Quantité |  |  |  |  |
| `QTYPCUSCR_0` | Quantité |  |  |  |  |
| `WRHCOD_0` | Dépôt |  |  |  |  |
| `WRHSCR_0` | Dépôt |  |  |  |  |
| `WEICOD1_0` | Poids |  |  |  |  |
| `WEISCR1_0` | Poids |  |  |  |  |
| `WEICOD_0` | Poids |  |  |  |  |
| `WEISCR_0` | Poids |  |  |  |  |
| `DIUCOD_0` | Dimension |  |  |  |  |
| `DIUSCR_0` | Dimension |  |  |  |  |
| `POTCOD_0` | Titre |  |  |  |  |
| `SPOTFLG_0` | Titre |  |  |  |  |
| `PCUCOD_0` | Unité |  |  |  |  |
| `LPNCOD_0` | Contenant |  |  |  |  |
| `LPNSCR_0` | Contenant |  |  |  |  |
| `SRTNUM_0` | Transaction |  |  |  |  |
| `MVTDESSCR_0` | Désignation mouvement |  |  |  |  |
| `MVTDESCOD1_0` | Désignation mouvement |  |  |  |  |
| `MVTDESTXT_0` | Texte désignation mouvement stock |  |  |  |  |
| `VCRTYPCOD_0` | Type pièce |  |  |  |  |
| `VCRTYPSCR_0` | Type pièce |  |  |  |  |
| `STQDATCOD_0` | Date fin contrôle |  |  |  |  |
| `PCUSTUCOD_0` | Coefficient |  |  |  |  |
| `PCUSTUSCR_0` | Coefficient |  |  |  |  |
| `PCKCOD_0` | Emballage/capacité |  |  |  |  |
| `PCKSCR_0` | Emballage/capacité |  |  |  |  |
| `VCRLINCOD_0` | Ligne pièce |  |  |  |  |
| `VCRLINSCR_0` | Ligne pièce |  |  |  |  |
| `BPRNUMCOD_0` | Tiers |  |  |  |  |
| `BPRNUMSRC_0` | Tiers |  |  |  |  |
| `CHGEMPCOD_0` | Changement emplacement |  |  |  |  |
| `CHGSTACOD_0` | Changement statut |  |  |  |  |
| `DRNCOD_0` | Code tournée |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `IDEDSTCOD2_0` | Identifiant 2 dest. |  |  |  |  |
| `IDEDSTSCR2_0` | Identifiant 2 dest. |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `TRSFAMDEF_0` | Famille mouvement |  |  |  |  |
| `TRSFAMSCR_0` | Famille mvt |  |  |  |  |
| `CUNAMTDSY_0` | Affichage valeur |  |  |  |  |
| `CUNAMTDSY1_0` | Affichage valeur |  |  |  |  |
| `CUNAMTSCR_0` | Affichage valeur |  |  |  |  |
| `LOTORICOD_0` | Lot origine |  |  |  |  |
| `LOTORISCR_0` | Lot origine |  |  |  |  |
| `SRTDES_0` | Désignation transaction |  |  |  |  |
| `PERCOD_0` | Péremption |  |  |  |  |
| `SPERFLG_0` | Péremption |  |  |  |  |
| `TRAFLG_0` | Trace |  |  |  |  |
| `PRNNBSCR1_0` | Saisie nombre étiquettes |  |  |  |  |
| `COBMVTCOD_0` | Quantité composants |  |  |  |  |
| `RENUMCOD_0` | Renumérotation |  |  |  |  |
| `CHANGECOD_0` | Type modification lot |  |  |  |  |
| `PRNCOD1_0` | Impression |  |  |  |  |
| `PRNSCR1_0` | Impression |  |  |  |  |
| `SRGPPSCOD_0` | Liste à ranger |  |  |  |  |
| `SRGPPSSCR_0` | Liste à ranger |  |  |  |  |
| `CREPPSCOD_0` | Date liste à ranger |  |  |  |  |
| `CREPPSSCR_0` | Date liste à ranger |  |  |  |  |
| `MIXCOD_0` | Mélange complet de lots |  |  |  |  |
| `STKFLG_0` | Sortie automatique |  |  |  |  |
| `CTRALLRGP_0` | Contrôle alloué rgp |  |  |  |  |
| `SRTTYPCAR_0` | Num alpha |  |  |  |  |
| `MVTDESCOD_0` | Désignation du mouvement |  |  |  |  |
| `ALLSTKFLG_0` | Inclure stock alloué |  |  |  |  |
| `CUNAMTSCR1_0` | Affichage valeur |  |  |  |  |
| `LODCOD1_0` | Préchargement |  |  |  |  |
| `AGRCOD_0` | Regroupement ligne |  |  |  |  |
| `IDEDSTCOD1_0` | Identifiant  1 |  |  |  |  |
| `IDEDSTSCR1_0` | Identifiant  1 |  |  |  |  |
| `CREDATCOD_0` | Date création |  |  |  |  |

### Exemple SQL

```sql
SELECT
    QTYQTUSCR1_0,
    INVSGHCOD_0,
    QTYSTUOCOD_0,
    CUNDEVDSY_0,
    CUNDEVDSY1_0
FROM STKTRS
WHERE -- vos conditions
```

---

## STOADCSEARCH

**Paramétrage recherche stock**

**Nombre de champs** : 18

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `FILSTO7_0` | Filtre stock |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `FILSTO6_0` | Filtre stock |  |  |  |  |
| `FILSTO5_0` | Filtre stock |  |  |  |  |
| `FILSTO4_0` | Filtre stock |  |  |  |  |
| `FILSTO3_0` | Filtre stock |  |  |  |  |
| `FILSTO2_0` | Filtre stock |  |  |  |  |
| `FILSTO1_0` | Filtre stock |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `FLWTYP_0` | Type de Flux |  |  |  |  |
| `FILSTO8_0` | Filtre stock |  |  |  |  |

### Exemple SQL

```sql
SELECT
    FILSTO7_0,
    CREDAT_0,
    UPDDAT_0,
    AUUID_0,
    EXPNUM_0
FROM STOADCSEARCH
WHERE -- vos conditions
```

---

## STOCK

**Stocks**

**Nombre de champs** : 48

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `STA_0` | Statut |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `LASRCPDAT_0` | Date dernière entrée |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `STOFCY_0` | Site stock |  |  |  |  |
| `QLYCTLDEM_0` | Demande analyse qualité |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `BPSLOT_0` | Lot fournisseur |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `LOCCAT_0` | Catégorie emplacement |  |  |  |  |
| `CUMWIPQTY_0` | Qté en traitement |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `QTYSTUORI_0` | Quantité US origine |  |  |  |  |
| `QTYPCU_0` | Quantité UC |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `CUMALLQTA_0` | Cumul quantité active allouée US |  |  |  |  |
| `QTYSTUACT_0` | Quantité active US |  |  |  |  |
| `STOFLD1_0` | Champ personnalisé 1 |  |  |  |  |
| `STOFLD2_0` | Champ personnalisé 2 |  |  |  |  |
| `OWNER_0` | Propriétaire |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CUMWIPQTA_0` | Qté active en trait |  |  |  |  |
| `PCUORI_0` | Condit. origine |  |  |  |  |
| `QTYPCUORI_0` | Quantité UC origine |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `SLO_0` | S/lot |  |  |  |  |
| `CUNLISNUM_0` | Liste inventaire |  |  |  |  |
| `CUNLOKFLG_0` | Inventaire en cours |  |  |  |  |
| `PALNUM_0` | Identifiant 1 |  |  |  |  |
| `RCPDAT_0` | Date entrée série |  |  |  |  |
| `LPNNUM_0` | Numéro contenant |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CTRNUM_0` | Identifiant 2 |  |  |  |  |
| `CUMALLQTY_0` | Cumul quantité allouée en US |  |  |  |  |
| `EDTFLG_0` | Flag édition |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `STOCOU_0` | Chrono stock |  |  |  |  |
| `LASISSDAT_0` | Date dernière sortie |  |  |  |  |
| `LASCUNDAT_0` | Date dernier inventaire |  |  |  |  |
| `SERNUM_0` | Série |  |  |  |  |
| `LOCTYP_0` | Type emplacement |  |  |  |  |

### Exemple SQL

```sql
SELECT
    STA_0,
    LOC_0,
    LASRCPDAT_0,
    PCUSTUCOE_0,
    STOFCY_0
FROM STOCK
WHERE -- vos conditions
```

---

## STOCOST

**Couts stocks FIFO**

**Nombre de champs** : 27

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `MATCST_0` | Coût matière |  |  |  |  |
| `MACCST_0` | Coût machine |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CST_0` | Valeur |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `QTYSTUACT_0` | Quantité active US |  |  |  |  |
| `CSTTIM_0` | Heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `SCOCST_0` | Total sous-traitance |  |  |  |  |
| `OVEMACCST_0` | FG machine |  |  |  |  |
| `OVELABCST_0` | FG m-o |  |  |  |  |
| `OVESCOCST_0` | FG s/t |  |  |  |  |
| `OVEMATCST_0` | FG matière |  |  |  |  |
| `CSTDAT_0` | Date imputation |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `CSTCOU_0` | Chrono coûts FIFO |  |  |  |  |
| `INVDTACST_0` | Elément facturation |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    LABCST_0,
    MATCST_0,
    MACCST_0,
    VCRLIN_0
FROM STOCOST
WHERE -- vos conditions
```

---

## STOCOSTPIT

**Coût FIFO stock instant T**

**Nombre de champs** : 30

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `PERNUM_0` | Numéro période |  |  |  |  |
| `PEREND_0` | Fin période |  |  |  |  |
| `FIYNUM_0` | Numéro exercice |  |  |  |  |
| `PERSTR_0` | Début période |  |  |  |  |
| `CSTTIM_0` | Heure |  |  |  |  |
| `VLTNUM_0` | No méthode |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
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
| `PERVALCHG_0` | Modification valeur période |  |  |  |  |
| `PERVALCHGQTY_0` | Modification valeur période |  |  |  |  |
| `PERAMTDEV_0` | Total non absorbé |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `CSTDAT_0` | Date imputation |  |  |  |  |
| `CSTCOU_0` | Chrono coûts FIFO |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    ITMREF_0,
    PERNUM_0,
    PEREND_0,
    FIYNUM_0
FROM STOCOSTPIT
WHERE -- vos conditions
```

---

## STOJOU

**Journal des Stocks**

**Nombre de champs** : 117

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `OWNER_0` | Propriétaire |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `AMTDEV_0` | Ecart non absorbé |  |  |  |  |
| `AMTDEV2_0` | Ecart non absorbé |  |  |  |  |
| `SERFIN_0` | Série fin |  |  |  |  |
| `NEWLTIDAT_0` | Date recontrôle |  |  |  |  |
| `DLUDAT_0` | Date limite utilisation |  |  |  |  |
| `BETCPY_0` | Inter-sociétés |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `DIE_0` | Code axe |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `PJT_0` | Affaire |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `SLO_0` | S/lot |  |  |  |  |
| `AGGIFAFLG_0` | Mvt agrégé interface |  |  |  |  |
| `PITVALFLG_0` | Agrégé |  |  |  |  |
| `PITVALFLG2_0` | Agrégé |  |  |  |  |
| `SERDEB_0` | Série début |  |  |  |  |
| `PRONUM_0` | Numéro process |  |  |  |  |
| `VCRNUMORI_0` | No pièce origine (No rec ou No OF) |  |  |  |  |
| `VCRTYPORI_0` | Type pièce origine |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `REGFLG_0` | Mouvement régularisé |  |  |  |  |
| `PALNUM_0` | Identifiant 1 |  |  |  |  |
| `VCRTYPREG_0` | Type pièce régul |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `CCE_0` | Section analytique |  |  |  |  |
| `LPNNUM_0` | Numéro contenant |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `UPDCOD_0` | Mise à jour |  |  |  |  |
| `CTRNUM_0` | Identifiant 2 |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `SERNUM_0` | Série |  |  |  |  |
| `TRSTYP_0` | Type transaction |  |  |  |  |
| `FINRSPFCY_0` | Site Responsable financier |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `PCUSTUORI_0` | Coeff. origine |  |  |  |  |
| `VCRLINORI_0` | No ligne pièce origine |  |  |  |  |
| `CSTCOU_0` | Chrono coûts FIFO |  |  |  |  |
| `VCRSEQORI_0` | No séquence pièce origine |  |  |  |  |
| `VCRNUMREG_0` | No pièce régularisation |  |  |  |  |
| `VCRLINREG_0` | No ligne pièce régul |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `XMACCSTREG_0` | Coût machine |  |  |  |  |
| `XMACCST_0` | Coût machine |  |  |  |  |
| `XLABCSTREG_0` | Coût main-d'oeuvre |  |  |  |  |
| `XLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `XSCOCSTREG_0` | Coût sous-traitance |  |  |  |  |
| `XSCOCST_0` | Coût sous-traitance |  |  |  |  |
| `XOVEMATREG_0` | Coût frais généraux matière |  |  |  |  |
| `XOVEMATCST_0` | Coût frais généraux matière |  |  |  |  |
| `XOVEMACREG_0` | Coût frais généraux machine |  |  |  |  |
| `XOVEMACCST_0` | Coût frais généraux machine |  |  |  |  |
| `XOVELABREG_0` | Coût frais généraux main-d'oeuvre |  |  |  |  |
| `XOVELABCST_0` | Coût frais généraux main-d'oeuvre |  |  |  |  |
| `STA_0` | Statut |  |  |  |  |
| `XMATCSTREG_0` | Coût matière |  |  |  |  |
| `XMATCST_0` | Coût matière |  |  |  |  |
| `USRFLD1_0` | Champ personnalisé stock 1 |  |  |  |  |
| `XOVESCOCST_0` | Coût frais généraux sous-traitance |  |  |  |  |
| `XOVESCOREG_0` | Coût frais généraux sous-traitance |  |  |  |  |
| `BPRNUM_0` | Numéro tiers |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `USRFLD3_0` | Champ personnalisé stock 3 |  |  |  |  |
| `USRFLD4_0` | Champ personnalisé stock 4 |  |  |  |  |
| `PRNFLG_0` | Imprimé |  |  |  |  |
| `LBEFMT_0` | Format étiquette |  |  |  |  |
| `QLYCTLDEM_0` | Demande analyse qualité |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `QTYPCU_0` | Quantité |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `GTE_0` | Type de pièce |  |  |  |  |
| `POT_0` | Titre |  |  |  |  |
| `MVTSEQ_0` | Séquence |  |  |  |  |
| `PCU_0` | Unité |  |  |  |  |
| `BPSLOT_0` | Lot fournisseur |  |  |  |  |
| `AMTORD_0` | Montant ordre |  |  |  |  |
| `AMTVAL_0` | Montant mouvement |  |  |  |  |
| `AMTVAL2_0` | Montant mouvement |  |  |  |  |
| `VARORD_0` | Variation ordre |  |  |  |  |
| `VARVAL_0` | Variation mouvement |  |  |  |  |
| `VARVAL2_0` | Variation mouvement |  |  |  |  |
| `CSTDAT_0` | Date FIFO |  |  |  |  |
| `CSTTIM_0` | Heure FIFO |  |  |  |  |
| `PRIORD_0` | Prix ordre |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `USRFLD2_0` | Champ personnalisé stock 2 |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CREMVTDAT_0` | Date création |  |  |  |  |
| `UPDUSR_0` | Opérateur modif |  |  |  |  |
| `MVTDES_0` | Désignation mouvement |  |  |  |  |
| `PRINAT_0` | Nature prix origine |  |  |  |  |
| `PRINAT2_0` | Nature prix origine |  |  |  |  |
| `ACT_0` | Titre en unités internationales |  |  |  |  |
| `ACTQTY_0` | Quantité active |  |  |  |  |
| `ACCDAT_0` | Date comptable |  |  |  |  |
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `MVTIND_0` | Indice |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient |  |  |  |  |
| `PRIREGFLG_0` | Flag régularisation |  |  |  |  |
| `NUMVCR_0` | Pièce comptable |  |  |  |  |
| `SHLDAT_0` | Date péremption |  |  |  |  |
| `CREMVTSEQ_0` | Séquence origine |  |  |  |  |
| `ENTCOD_0` | Code pièce automatique |  |  |  |  |
| `LBENBR_0` | Nombre étiquettes |  |  |  |  |
| `TRSFAM_0` | Famille mouvement |  |  |  |  |
| `CREMVTTIM_0` | Heure |  |  |  |  |
| `CRETIM_0` | Heure |  |  |  |  |
| `STOFLD1_0` | Champ personnalisé 1 |  |  |  |  |
| `STOFLD2_0` | Champ personnalisé 2 |  |  |  |  |
| `PRIVAL_0` | Prix valorisé |  |  |  |  |
| `PRIVAL2_0` | Prix valorisé |  |  |  |  |
| `PCUORI_0` | UC origine |  |  |  |  |

### Exemple SQL

```sql
SELECT
    OWNER_0,
    CREDATTIM_0,
    UPDDATTIM_0,
    ECCVALMAJ_0,
    AMTDEV_0
FROM STOJOU
WHERE -- vos conditions
```

---

## STOJOUOVE

**FG mouvements de stock**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ONAAMT_0` | Montant nature |  |  |  |  |
| `OVENAT_0` | Nature |  |  |  |  |
| `MVTSEQ_0` | Séquence |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `MVTIND_0` | Indice |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `TYPCST_0` | Type de coût |  |  |  |  |
| `UPDCOD_0` | Mise à jour |  |  |  |  |

### Exemple SQL

```sql
SELECT
    CREUSR_0,
    STOFCY_0,
    IPTDAT_0,
    UPDUSR_0,
    ONAAMT_0
FROM STOJOUOVE
WHERE -- vos conditions
```

---

## STOJOUVAL

**Valeurs mouvements de stock**

**Nombre de champs** : 103

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `VOVESCOTOT_0` | FG s/t |  |  |  |  |
| `DOOVESCO_0` | FG s/t |  |  |  |  |
| `DVOVESCO_0` | FG s/t |  |  |  |  |
| `V2OVESCO_0` | FG s/t |  |  |  |  |
| `DV2OVEMAT_0` | FG matière |  |  |  |  |
| `UPDCOD_0` | Mise à jour |  |  |  |  |
| `IPTDAT_0` | Date imputation |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `DV2INVDTA_0` | Elément facturation |  |  |  |  |
| `OINVDTATOT_0` | Elément facturation |  |  |  |  |
| `VINVDTATOT_0` | Elément facturation |  |  |  |  |
| `DOINVDTA_0` | Elément facturation |  |  |  |  |
| `DVINVDTA_0` | Elément facturation |  |  |  |  |
| `V2INVDTA_0` | Elément facturation |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `V2MACCST_0` | Coût machine |  |  |  |  |
| `DV2LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `OLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `VLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `DOLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `DVLABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `V2LABCST_0` | Coût main-d'oeuvre |  |  |  |  |
| `DV2MATCST_0` | Coût matière |  |  |  |  |
| `OMATCST_0` | Coût matière |  |  |  |  |
| `VMATCST_0` | Coût matière |  |  |  |  |
| `DOMATCST_0` | Coût matière |  |  |  |  |
| `DVMATCST_0` | Coût matière |  |  |  |  |
| `V2MATCST_0` | Coût matière |  |  |  |  |
| `DV2MACCST_0` | Coût machine |  |  |  |  |
| `MVTSEQ_0` | Séquence |  |  |  |  |
| `OMACCST_0` | Coût machine |  |  |  |  |
| `VMACCST_0` | Coût machine |  |  |  |  |
| `DOMACCST_0` | Coût machine |  |  |  |  |
| `DVMACCST_0` | Coût machine |  |  |  |  |
| `DV2LABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `OLABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `VLABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `DOLABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `DVLABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `V2LABTOT_0` | Total main d'oeuvre |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `MVTIND_0` | Indice |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `OMACTOT_0` | Total machine |  |  |  |  |
| `VMACTOT_0` | Total machine |  |  |  |  |
| `DOMACTOT_0` | Total machine |  |  |  |  |
| `DVMACTOT_0` | Total machine |  |  |  |  |
| `V2MACTOT_0` | Total machine |  |  |  |  |
| `DV2MACTOT_0` | Total machine |  |  |  |  |
| `OMATTOT_0` | Total matière |  |  |  |  |
| `VMATTOT_0` | Total matière |  |  |  |  |
| `DOMATTOT_0` | Total matière |  |  |  |  |
| `DVMATTOT_0` | Total matière |  |  |  |  |
| `V2MATTOT_0` | Total matière |  |  |  |  |
| `DV2MATTOT_0` | Total matière |  |  |  |  |
| `DV2SCOTOT_0` | Total sous-traitance |  |  |  |  |
| `OSCOTOT_0` | Total sous-traitance |  |  |  |  |
| `VSCOTOT_0` | Total sous-traitance |  |  |  |  |
| `DOSCOTOT_0` | Total sous-traitance |  |  |  |  |
| `DVSCOTOT_0` | Total sous-traitance |  |  |  |  |
| `V2SCOTOT_0` | Total sous-traitance |  |  |  |  |
| `DEVMATCST_0` | Ecart non absorbé |  |  |  |  |
| `DEVMACCST_0` | Ecart non absorbé |  |  |  |  |
| `DEVLABCST_0` | Ecart non absorbé |  |  |  |  |
| `DEVSCOCST_0` | Ecart non absorbé |  |  |  |  |
| `DEVINVDTA_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVEMAT_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVEMAC_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVELAB_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVESCO_0` | Ecart non absorbé |  |  |  |  |
| `DEVMATCST2_0` | Ecart non absorbé |  |  |  |  |
| `DEVMACCST2_0` | Ecart non absorbé |  |  |  |  |
| `DEVLABCST2_0` | Ecart non absorbé |  |  |  |  |
| `DEVSCOCST2_0` | Ecart non absorbé |  |  |  |  |
| `DEVINVDTA2_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVEMAT2_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVEMAC2_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVELAB2_0` | Ecart non absorbé |  |  |  |  |
| `DEVOVESCO2_0` | Ecart non absorbé |  |  |  |  |
| `OOVEMATTOT_0` | FG matière |  |  |  |  |
| `VOVEMATTOT_0` | FG matière |  |  |  |  |
| `DOOVEMAT_0` | FG matière |  |  |  |  |
| `DVOVEMAT_0` | FG matière |  |  |  |  |
| `V2OVEMAT_0` | FG matière |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `DV2OVEMAC_0` | FG machine |  |  |  |  |
| `OOVEMACTOT_0` | FG machine |  |  |  |  |
| `VOVEMACTOT_0` | FG machine |  |  |  |  |
| `DOOVEMAC_0` | FG machine |  |  |  |  |
| `DVOVEMAC_0` | FG machine |  |  |  |  |
| `V2OVEMAC_0` | FG machine |  |  |  |  |
| `DV2OVELAB_0` | FG m-o |  |  |  |  |
| `OOVELABTOT_0` | FG m-o |  |  |  |  |
| `VOVELABTOT_0` | FG m-o |  |  |  |  |
| `DOOVELAB_0` | FG m-o |  |  |  |  |
| `DVOVELAB_0` | FG m-o |  |  |  |  |
| `V2OVELAB_0` | FG m-o |  |  |  |  |
| `DV2OVESCO_0` | FG s/t |  |  |  |  |
| `OOVESCOTOT_0` | FG s/t |  |  |  |  |

### Exemple SQL

```sql
SELECT
    VOVESCOTOT_0,
    DOOVESCO_0,
    DVOVESCO_0,
    V2OVESCO_0,
    DV2OVEMAT_0
FROM STOJOUVAL
WHERE -- vos conditions
```

---

## STOPAR

**Paramètres stocks**

**Nombre de champs** : 67

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `SHTCAT1_0` | Catégorie document |  |  |  |  |
| `SHTCAT2_0` | Catégorie document |  |  |  |  |
| `SHTCAT3_0` | Catégorie document |  |  |  |  |
| `TYPFIL_0` | Type de fichier |  |  |  |  |
| `SEPFLD_0` | Séparateur de champ |  |  |  |  |
| `FLDLIM_0` | Délimiteur de champ |  |  |  |  |
| `SEPDEC_0` | Séparateur décimal |  |  |  |  |
| `YEACUNNBRD_0` | Comptages an cls D |  |  |  |  |
| `DAYGAPCLSD_0` | Intervalle classe D |  |  |  |  |
| `SPEPAR_0` | Param. spécifique |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `SAFMINHIS_0` | Historique mini calcul stock sécu |  |  |  |  |
| `SAFMAXHIS_0` | Historique mini calcul stock sécu |  |  |  |  |
| `SRVRATA_0` | Taux service articles classe 'A' |  |  |  |  |
| `SRVRATB_0` | Taux service articles classe 'B' |  |  |  |  |
| `SRVRATC_0` | Taux service articles classe 'C' |  |  |  |  |
| `EOQMINHIS_0` | Historique mini calcul lot éco |  |  |  |  |
| `EOQMAXHIS_0` | Historique maxi calcul lot éco |  |  |  |  |
| `DAYGAPCLSA_0` | Intervalle classe A |  |  |  |  |
| `DAYGAPCLSB_0` | Intervalle classe B |  |  |  |  |
| `DAYGAPCLSC_0` | Intervalle classe C |  |  |  |  |
| `SEPREC_0` | Séparateur enregistrement |  |  |  |  |
| `STOCSTRAT_0` | Taux possession stock |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CUNCSTCOD_0` | Mode valorisation |  |  |  |  |
| `OPTDAT_0` | Format des dates |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `SHTPAR3_0` | Trait. manquants |  |  |  |  |
| `CUNNBRD_0` | Comptages réa cls D |  |  |  |  |
| `LASCUNDATD_0` | Dernier invent cls D |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `CUNNBRC_0` | Comptages réalisés classe C |  |  |  |  |
| `ORDCST_0` | Coût passation commande |  |  |  |  |
| `CUNACCB_0` | Précision classe B |  |  |  |  |
| `CUNACCC_0` | Précision classe C |  |  |  |  |
| `LASCUNDATA_0` | Dernier inventaire tournant cl A |  |  |  |  |
| `LASCUNDATB_0` | Dernier inventaire tournant cls B |  |  |  |  |
| `LASCUNDATC_0` | Dernier inventaire tournant cls C |  |  |  |  |
| `YEACUNNBRA_0` | Comptages annuels classe A |  |  |  |  |
| `CUNNBRA_0` | Comptages réalisés classe A |  |  |  |  |
| `YEACUNNBRB_0` | Comptages annuels classe B |  |  |  |  |
| `CUNNBRB_0` | Comptages réalisés classe B |  |  |  |  |
| `YEACUNNBRC_0` | Comptages annuels classe C |  |  |  |  |
| `CUNACCA_0` | Précision classe A |  |  |  |  |
| `TSDMINHIS_0` | Historique mini calcul seuil réapp |  |  |  |  |
| `TSDMAXHIS_0` | Historique maxi calcul seuil réapp |  |  |  |  |
| `SAFSTOFLG_0` | Stock sécurité inclus |  |  |  |  |
| `MAXMINHIS_0` | Historique mini calcul stock maxi |  |  |  |  |
| `MAXMAXHIS_0` | Historique maxi calcul stock maxi |  |  |  |  |
| `CUNACCD_0` | Précision classe D |  |  |  |  |
| `EXPNUM_0` | Numéro export |  |  |  |  |
| `SHTAUTFLG_0` | Traitement auto |  |  |  |  |
| `STACARFLG_0` | Régul auto si statut non renseigné |  |  |  |  |
| `LOCCARFLG_0` | Régul auto si empl. non renseigné |  |  |  |  |
| `SHTPAR1_0` | Trait. manquants |  |  |  |  |
| `SHTPAR2_0` | Trait. manquants |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CUNCSTFLG_0` | Modifiable |  |  |  |  |
| `FILNAM_0` | Nom du fichier |  |  |  |  |
| `TCLCOD_0` | Catégorie article |  |  |  |  |
| `FLG130_0` | Flag |  |  |  |  |
| `ITMIMP_0` | Import stocks |  |  |  |  |
| `SERIMP_0` | Import séries |  |  |  |  |
| `CYCCUNDAT_0` | Date de départ inventaire tournant |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    SHTCAT1_0,
    SHTCAT2_0,
    SHTCAT3_0,
    TYPFIL_0,
    SEPFLD_0
FROM STOPAR
WHERE -- vos conditions
```

---

## STOSYNW

**Travail resynchro stocks**

**Nombre de champs** : 37

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `BPRNUM_0` | Tiers |  |  |  |  |
| `USRFLD1_0` | Champ personnalisé stock 1 |  |  |  |  |
| `EXPNUM_0` | Numéro Export |  |  |  |  |
| `POT_0` | Titre |  |  |  |  |
| `SEQ_0` | Séquence |  |  |  |  |
| `BPSLOT_0` | Lot fournisseur |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `QLYCTLDEM_0` | Demande analyse qualité |  |  |  |  |
| `USRFLD2_0` | Champ personnalisé stock 2 |  |  |  |  |
| `UPDDAT_0` | Date modification |  |  |  |  |
| `PCUSTUCOE_0` | Coefficient UC-US |  |  |  |  |
| `USRFLD3_0` | Champ personnalisé stock 3 |  |  |  |  |
| `USRFLD4_0` | Champ personnalisé stock 4 |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `ACT_0` | Titre en unités internationales |  |  |  |  |
| `STA_0` | Statut stock |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `QTYPCUSTO_0` | Stock UC |  |  |  |  |
| `QTYSTUSTO_0` | Stock US |  |  |  |  |
| `OWNER_0` | Propriétaire |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `SLO_0` | S/lot |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `QTYPCUNEW_0` | Stock UC compté |  |  |  |  |
| `UPDUSR_0` | Opérateur modification |  |  |  |  |
| `CUNLISNUM_0` | Liste inventaire |  |  |  |  |
| `QTYSTUNEW_0` | Stock US compté |  |  |  |  |
| `PALNUM_0` | Identifiant 1 |  |  |  |  |
| `STOCOU_0` | Chrono stock |  |  |  |  |
| `SERNUM_0` | Série |  |  |  |  |
| `CTRNUM_0` | Identifiant 2 |  |  |  |  |
| `SHLDAT_0` | Date péremption |  |  |  |  |

### Exemple SQL

```sql
SELECT
    BPRNUM_0,
    USRFLD1_0,
    EXPNUM_0,
    POT_0,
    SEQ_0
FROM STOSYNW
WHERE -- vos conditions
```

---

## STOVALCUM

**Cumuls état valorisé stocks**

**Nombre de champs** : 16

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `TSINUM_0` |  |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `AMTDEV_0` | Ecart non absorbé |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `BUY_0` | Acheteur |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `PRONUM_0` | Numéro process |  |  |  |  |
| `TCLCOD_0` | Catégorie Article |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `AMT_0` | Montant |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `TSICOD_0` | Famille statistique |  |  |  |  |
| `AMTDEVDAT_0` | Date début calculs |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |

### Exemple SQL

```sql
SELECT
    TSINUM_0,
    CREDAT_0,
    UPDDATTIM_0,
    AMTDEV_0,
    AUUID_0
FROM STOVALCUM
WHERE -- vos conditions
```

---

## STOVALWRK

**Etat valorisé des stocks**

**Nombre de champs** : 50

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `VCRTYP_0` | Type pièce |  |  |  |  |
| `REFDAT_0` | Date référence |  |  |  |  |
| `VALMTHDCHG_0` | Chgmt méthode valo. |  |  |  |  |
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `ECCVALMAJ_0` | Version majeure |  |  |  |  |
| `ECCVALMIN_0` | Version mineure |  |  |  |  |
| `LOT_0` | Lot |  |  |  |  |
| `SLO_0` | S/lot |  |  |  |  |
| `AMTDEV_0` | Ecart non absorbé |  |  |  |  |
| `AMTRCP_0` | Valeur entrées |  |  |  |  |
| `AMTISS_0` | Valeur sorties |  |  |  |  |
| `ACCCOD_0` | Code comptable |  |  |  |  |
| `PCU_0` | Unité conditionnement |  |  |  |  |
| `STRDAT_0` | Date début |  |  |  |  |
| `PCUDEC_0` | Décimales |  |  |  |  |
| `STUDEC_0` | Décimales |  |  |  |  |
| `STOFCY_0` | Site stockage |  |  |  |  |
| `PRONUM_0` | Numéro process |  |  |  |  |
| `QTYSTURCP_0` | Entrées |  |  |  |  |
| `QTYSTUISS_0` | Sorties |  |  |  |  |
| `CSTCOU_0` | Chrono coûts FIFO |  |  |  |  |
| `STOCOU_0` | Chrono stock |  |  |  |  |
| `ITMDES1_0` | Désignation 1 |  |  |  |  |
| `STU_0` | Unité stock |  |  |  |  |
| `VCRNUM_0` | No pièce (No rec, No liv ou No OF) |  |  |  |  |
| `STA_0` | Statut |  |  |  |  |
| `CREUSR_0` | Opérateur création |  |  |  |  |
| `CSTDAT_0` | Date imputation |  |  |  |  |
| `CSTCOD_0` | Mode valorisation |  |  |  |  |
| `CUR_0` | Devise |  |  |  |  |
| `AMT_0` | Montant |  |  |  |  |
| `ENDAMT_0` | Montant |  |  |  |  |
| `POT_0` | Titre |  |  |  |  |
| `QTYSTU_0` | Quantité US |  |  |  |  |
| `ITMREF_0` | Article |  |  |  |  |
| `LOC_0` | Emplacement |  |  |  |  |
| `ENDQTYSTU_0` | Quantité US |  |  |  |  |
| `WRH_0` | Dépôt |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |
| `VCRLIN_0` | No ligne pièce |  |  |  |  |
| `QTYPCU_0` | Quantité UC |  |  |  |  |
| `VLTCOD_0` | Méthode de valorisation |  |  |  |  |
| `CSTTIM_0` | Heure |  |  |  |  |
| `AMTDEVDAT_0` | Date début calculs |  |  |  |  |
| `CREDAT_0` | Date création |  |  |  |  |
| `CST_0` | Valeur |  |  |  |  |
| `ENDCST_0` | Valeur |  |  |  |  |
| `ACT_0` | Titre en unités internationales |  |  |  |  |

### Exemple SQL

```sql
SELECT
    VCRTYP_0,
    REFDAT_0,
    VALMTHDCHG_0,
    AUUID_0,
    CREDATTIM_0
FROM STOVALWRK
WHERE -- vos conditions
```

---

## X4PARMRP

**Paramétrage CBN / Jour**

**Nombre de champs** : 15

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `AUUID_0` | Identifiant unique |  |  |  |  |
| `X4UVYCOD_0` | Période d'indisponibilité |  |  |  |  |
| `UPDDATTIM_0` | Date heure |  |  |  |  |
| `CREDATTIM_0` | Date heure |  |  |  |  |
| `CREUSR_0` | Utilisateur |  |  |  |  |
| `X4JOUR_0` | Jour de la semaine |  |  |  |  |
| `MRPMFGLTI_0` | Délai de fabrication |  |  |  |  |
| `MRPANYLTI_0` | Analyse replanifification |  |  |  |  |
| `MRPMONNBR_0` | Nbre groupages mois |  |  |  |  |
| `MRPWEENBR_0` | Nbre groupages semaines |  |  |  |  |
| `MRPDAYNBR_0` | Nbre groupages jours |  |  |  |  |
| `MRPCAPLTI_0` | Calcul charge |  |  |  |  |
| `MRPBUCCOR_0` | Ajustement automatique |  |  |  |  |
| `STOFCY_0` | Site expédition |  |  |  |  |
| `UPDUSR_0` | Utilisateur |  |  |  |  |

### Exemple SQL

```sql
SELECT
    AUUID_0,
    X4UVYCOD_0,
    UPDDATTIM_0,
    CREDATTIM_0,
    CREUSR_0
FROM X4PARMRP
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

# Module Stocks - Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📋 Vue d'ensemble

Le **Module Stocks** est au cœur de la gestion logistique de Sage X3. Il gère l'ensemble des mouvements de stocks, la traçabilité des lots et numéros de série, les inventaires, les emplacements et la valorisation. Il comprend **103 tables** couvrant tous les aspects de la gestion des stocks physiques et comptables.

### Processus couverts

1. **Gestion des stocks** : Suivi des quantités par article, emplacement, lot, série
2. **Mouvements de stock** : Journal de tous les mouvements (entrées, sorties, transferts)
3. **Emplacements** : Gestion des emplacements de stockage et rangements
4. **Lots et séries** : Traçabilité complète des numéros de lot et de série
5. **Inventaires** : Comptages physiques et régularisations
6. **Préparations** : Bons de préparation et picking
7. **Valorisation** : Coûts FIFO, CMP, Standard, changements de valeur
8. **Calcul des besoins (CBN/MRP)** : Planification des réapprovisionnements
9. **Contrôle qualité** : Demandes d'analyse et contrôles
10. **Configuration** : Configurateur d'articles à la commande

---

## 📊 Statistiques

- **Nombre total de tables** : 103
- **Codes d'activité** : CFG, KPO, ADC, WRH, ANA, ECC, LPN, SFD, VLT
- **Tables principales** : STOCK, STOJOU, STOLOT, STOSER, STOLOC
- **Tables transactionnelles** : 65% des tables

---

## 🔑 Table STOCK - Stocks

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | STOCK |
| **Abréviation** | STO |
| **Intitulé** | Stocks |
| **Module** | Stocks |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| STO0 | STOFCY+STOCOU | Non |
| STO1 | STOFCY+PALNUM+ITMREF | Oui |
| STO3 | ITMREF+STOFCY+LOT+SLO+LOC | Oui |
| STO4 | STOFCY+LOC | Oui |
| STO5 | ITMREF+SERNUM | Oui |
| STO6 | LPNNUM+ITMREF+STOCOU | Oui |

### Colonnes détaillées

#### Identification et chrono
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STOCOU | Chrono stock | DCB | 10 | | |
| ITMREF | Article | ITF | | →ITMFACILIT | |
| STOFCY | Site stock | FCY | | →FACILITY | |

#### Localisation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LOC | Emplacement | LOC | | →STOLOC | |
| LOCCAT | Catég emplacement | M | 15 | | |
| LOCTYP | Type emplacement | TLO | | →TABLOCTYP | |
| WRH | Dépôt | WRH | | →WAREHOUSE | WRH |

#### Identification complémentaire
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PALNUM | Identifiant 1 | PAL | | | |
| CTRNUM | Identifiant 2 | CTR | | | |
| LPNNUM | Numéro contenant | LPN | | →LPN | |

#### Traçabilité lots/séries
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LOT | Lot | LOT | | | |
| SLO | S/lot | SLO | | | |
| BPSLOT | Lot fournisseur | LOT | | | |
| SERNUM | Série | SER | | | |

#### Quantités
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| QTYSTU | Quantité US | QTY | | | |
| QTYSTUORI | Quantité US origine | QTY | | | |
| QTYSTUACT | Quantité active US | QTY | | | |
| QTYPCU | Quantité UC | QTY | | | |
| QTYPCUORI | Quantité UC origine | QTY | | | |

#### Quantités allouées et en traitement
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CUMALLQTY | Qté allouée | QTY | | | |
| CUMALLQTA | Qté active allouée | QTY | | | |
| CUMWIPQTY | Qté en traitement | QTY | | | |
| CUMWIPQTA | Qté active en trait | QTY | | | |

#### Unités et conditionnements
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PCU | Conditionnement | UOM | | →TABUNIT | |
| PCUORI | Condit. origine | UOM | | →TABUNIT | |
| PCUSTUCOE | Coef UC-US | COE | | | |

#### Statut et propriétaire
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STA | Statut | A | 3 | | |
| OWNER | Propriétaire | BPF | | | |

#### Dates
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LASCUNDAT | Dernier inventaire | D | | | |
| LASRCPDAT | Date dernière entrée | D | | | |
| LASISSDAT | Date dernière sortie | D | | | |
| RCPDAT | Date entrée série | D | | | |

#### Inventaire
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CUNLISNUM | Liste inventaire | VCR | | | |
| CUNLOKFLG | Inventaire en cours | M | 4 | | |

#### Contrôle qualité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| QLYCTLDEM | Demande analyse | VCR | | | |

#### Affaire
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PJT | Affaire | PJT | | →PIMPL | |

#### Version ECC
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ECCVALMAJ | Version majeure | ECS | | | ECC |

#### Champs personnalisés
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STOFLD1 | Champ personnalisé 1 | SF1 | | | SFD |
| STOFLD2 | Champ personnalisé 2 | SF2 | | | SFD |

#### Flags
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| EDTFLG | Flag édition | C | 1 | | |

#### Audit et traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| EXPNUM | Numéro Export | L | 8 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 🔑 Table STOJOU - Journal des mouvements

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | STOJOU |
| **Abréviation** | STJ |
| **Intitulé** | Journal des Stocks |
| **Module** | Stocks |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| STJ0 | STOFCY+UPDCOD+ITMREF-IPTDAT+MVTSEQ+MVTIND | Non |
| STJ1 | STOFCY+VCRTYP+VCRNUM+VCRLIN | Oui |
| STJ2 | UPDCOD+ITMREF-IPTDAT+MVTSEQ+MVTIND | Oui |
| STJ3 | UPDCOD-CREDAT-CRETIM+ITMREF | Oui |
| STJ4 | ITMREF+IPTDAT+CREMVTDAT+CREMVTTIM+CREMVTSEQ | Oui |

### Colonnes principales

#### Identification du mouvement
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MVTSEQ | Séquence | L | 8 | | |
| MVTIND | Indice | L | 8 | | |
| MVTDES | Désignation mvt | DES | | | |
| ITMREF | Article | ITM | | →ITMMASTER | |
| STOFCY | Site stockage | FCY | | →FACILITY | |
| FINRSPFCY | Site financier | FCY | | →FACILITY | |

#### Pièce d'origine
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VCRTYP | Type pièce | M | 15 | | |
| VCRNUM | Pièce | VCR | | | |
| VCRLIN | No ligne pièce | L | 8 | | |
| VCRTYPORI | Type pièce origine | M | 15 | | |
| VCRNUMORI | Pièce origine | VCR | | | |
| VCRLINORI | No ligne pièce orig | L | 8 | | |
| VCRSEQORI | No séq pièce orig | L | 8 | | |

#### Pièce de régularisation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VCRTYPREG | Type pièce régul | M | 15 | | |
| VCRNUMREG | Pièce régul | VCR | | | |
| VCRLINREG | No ligne pièce régul | L | 8 | | |
| REGFLG | Mouvement régularisé | M | 4 | | |
| PRIREGFLG | Flag régularisation | M | 4 | | |

#### Type de transaction
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TRSTYP | Type transaction | M | 15 | | |
| TRSFAM | Famille mouvement | ADI | | →ATABDIV | |
| UPDCOD | Mise à jour | M | 4 | | |
| GTE | Type de pièce | GTE | | →GTYPACCENT | |
| ENTCOD | Code pièce auto | GAU | | →GAUTACE | |

#### Localisation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LOC | Emplacement | LOC | | →STOLOC | |
| PALNUM | Identifiant 1 | PAL | | | |
| CTRNUM | Identifiant 2 | CTR | | | |
| LPNNUM | Numéro contenant | LPN | | →LPN | LPN |

#### Traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LOT | Lot | LOT | | | |
| SLO | S/lot | SLO | | | |
| BPSLOT | Lot fournisseur | LOT | | | |
| SERNUM | Série | SER | | | |
| SERDEB | Série début | SER | | | |
| SERFIN | Série fin | SER | | | |

#### Quantités
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| QTYSTU | Quantité US | QTY | | | |
| QTYPCU | Quantité | QTY | | | |
| ACTQTY | Quantité active | QTY | | | |

#### Unités
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STU | Unité stock | UOM | | →TABUNIT | |
| PCU | Unité | UOM | | →TABUNIT | |
| PCUORI | UC origine | UOM | | →TABUNIT | |
| PCUSTUCOE | Coefficient | COE | | | |
| PCUSTUORI | Coeff. origine | COE | | | |

#### Valorisation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PRIVAL | Prix valorisé | MD5 | | | |
| PRIORD | Prix ordre | MD5 | | | |
| AMTVAL | Montant mouvement | MD5 | | | |
| AMTORD | Montant ordre | MD5 | | | |
| AMTDEV | Ecart non absorbé | MD1 | | | |
| VARVAL | Variation mouvement | MD5 | | | |
| VARORD | Variation ordre | MD5 | | | |
| PRINAT | Nature prix origine | M | 15 | | |
| PITVALFLG | Agrégé | M | 4 | | |

#### Valorisation VLT (double valorisation)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PRIVAL2 | Prix valorisé | MD5 | | | VLT |
| AMTVAL2 | Montant mouvement | MD5 | | | VLT |
| AMTDEV2 | Ecart non absorbé | MD1 | | | VLT |
| VARVAL2 | Variation mouvement | MD5 | | | VLT |
| PRINAT2 | Nature prix origine | M | 15 | | VLT |
| PITVALFLG2 | Agrégé | M | 4 | | VLT |

#### FIFO
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CSTCOU | Chrono coûts FIFO | DCB | 10 | | |
| CSTDAT | Date FIFO | D | | | |
| CSTTIM | Heure FIFO | HS | | | |

#### Dates
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| IPTDAT | Date imputation | D | | | |
| ACCDAT | Date comptable | D | | | |
| SHLDAT | Date péremption | D | | | |
| DLUDAT | DLU | D | | | |
| NEWLTIDAT | Date recontrôle | D | | | |
| CREMVTDAT | Date création | D | | | |
| CREMVTTIM | Heure | HS | | | |
| CREMVTSEQ | Séquence origine | L | 8 | | |

#### Tiers
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPRNUM | Tiers | BPR | | →BPARTNER | |
| OWNER | Propriétaire | BPF | | | |

#### Affaire et analytique
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PJT | Affaire | PJT | | →PIMPL | |
| DIE | Code axe | DIE | | →GDIE | ANA |
| CCE | Section analytique | CCE | | →CACCE | ANA |

#### Statut et contrôle
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STA | Statut | A | 3 | | |
| QLYCTLDEM | Demande analyse | VCR | | | |

#### Impression et process
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PRNFLG | Imprimé | M | 4 | | |
| LBEFMT | Format étiquette | ARP | | →AREPORT | |
| LBENBR | Nombre étiquettes | C | 4 | | |
| PRONUM | Numéro process | L | 8 | | |

#### Version ECC
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ECCVALMAJ | Version majeure | ECS | | | ECC |
| ECCVALMIN | Version mineure | EVL | | | ECC |

#### Inter-sociétés
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BETCPY | Inter-sociétés | M | 4 | | |

#### Agrégation interface
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| AGGIFAFLG | Mvt agrégé interface | M | 4 | | |

#### Comptabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| NUMVCR | Pièce comptable | VCR | | | |

#### Champs personnalisés
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STOFLD1 | Champ personnalisé 1 | SF1 | | | SFD |
| STOFLD2 | Champ personnalisé 2 | SF2 | | | SFD |
| USRFLD1 | Champ personnalisé stock 1 | A | 20 | | |
| USRFLD2 | Champ personnalisé stock 2 | A | 10 | | |
| USRFLD3 | Champ personnalisé stock 3 | DCB | 10 | | |
| USRFLD4 | Champ personnalisé stock 4 | D | | | |

#### Titres (pour affichage)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ACT | Titre UI | DCB | 5.4 | | |
| POT | Titre | DCB | 5.4 | | |

#### Audit et traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| CRETIM | Heure | HM | | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| EXPNUM | Numéro export | L | 8 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 🔑 Table STOLOT - Numéros de lot

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | STOLOT |
| **Abréviation** | STL |
| **Intitulé** | Numéros de lot |
| **Module** | Stocks |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| STL0 | ITMREF+LOT+SLO | Non |
| STL1 | ITMREF+LOTCREDAT+LOT+SLO | Non |
| STL2 | ITMREF+SHLDAT+LOTCREDAT+LOT+SLO | Non |
| STL3 | SHLDAT+ITMREF+LOT+SLO | Non |

### Colonnes détaillées

#### Identification
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ITMREF | Article | ITM | | →ITMMASTER | |
| LOT | Lot | LOT | | | |
| SLO | S/lot | SLO | | | |

#### Fournisseur
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPSNUM | Fournisseur | BPS | | →BPSUPPLIER | |
| BPSLOT | Lot fournisseur | LOT | | | |

#### Dates de création
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LOTCREDAT | Date création lot | D | | | |

#### Péremption
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| SHLDAT | Date péremption | D | | | |
| SHL | Délai péremption | C | 4 | | |
| SHLUOM | Unité tps péremp | M | 15 | | |
| REFPER | Référence péremption | D | | | |

#### DLU (Date Limite d'Utilisation)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DLUDAT | Date utilisation | D | | | |
| DLU | Coefficient DLU | COE | | | |

#### Contrôle qualité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LTIDAT | Date contrôle | D | | | |
| NEWLTIDAT | Date recontrôle | D | | | |
| SHLLTI | Délai recontrôle | C | 4 | | |
| SHLLTIUOM | Unité tps rectr | M | 15 | | |

#### Version ECC
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ECCVALMAJ | Version majeure | ECS | | | ECC |
| ECCVALMIN | Version mineure | EVL | | | ECC |

#### Pièce d'origine
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VCRTYP | Type pièce | M | 15 | | |
| VCRNUM | Pièce | VCR | | | |
| VCRLIN | No ligne pièce | L | 8 | | |

#### Champs personnalisés
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| USRFLD1 | Champ personnalisé stock 1 | A | 20 | | |
| USRFLD2 | Champ personnalisé stock 2 | A | 10 | | |
| USRFLD3 | Champ personnalisé stock 3 | DCB | 10 | | |
| USRFLD4 | Champ personnalisé stock 4 | D | | | |

#### Titres (pour affichage)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ACT | Titre UI | DCB | 5.4 | | |
| POT | Titre | DCB | 5.4 | | |

#### Audit et traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| EXPNUM | Numéro export | L | 8 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 📑 Liste complète des tables

### Stocks physiques

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOCK | STO | Stocks | |
| STOJOU | STJ | Journal des Stocks | |
| STOJOUVAL | SJV | Valeurs mouvements de stock | |
| STOJOUOVE | SJO | FG mouvements de stock | |
| STJTMP | SJT | Journal des Stocks-Interface | |

### Emplacements

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOLOC | STC | Emplacements | |
| STOLOCAFF | STF | Affectation emplacements | |
| STOLOCRES | SWL | Travail emplacements | |
| TABLOCTYP | TLO | Table des types d'emplacements | |

### Lots et séries

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOLOT | STL | Numéros de lot | |
| STOLOTFCY | SLF | Lots - Sites | |
| STOSER | STS | Numéros de série | |
| STOSERW | SSW | Séries en cours de traitement | |

### Traçabilité

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOTRK | STR | Traçabilité | |
| STOTRKWRK | SKW | Traçabilité temporaire | |

### Mouvements de stock

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SMVTH | SMH | En-tête mouvements | |
| SMVTD | SMD | Détail mouvement stock | |
| SMVTDVAL | SMV | Prix du mouvement | |

### Rangements

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOSRG | SRG | Rangements | |
| STOSRGW | SGW | Rangements (détails) | |

### Changements de stock

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SCHGH | SGH | En-tête changement stock | |
| SCHGD | SGD | Ligne changement stock | |

### Modification de lots

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SLOTMH | SLH | En-tête modification lot | |
| SLOTMD | SLD | Ligne modification lot | |

### Inventaires

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CUNSESSION | CUN | Session inventaire | |
| CUNLISTE | CUL | Listes inventaires | |
| CUNLISDET | CUD | Inventaires | |
| CUNSERDET | CSD | Inventaires séries | |
| INVENTH | INV | Inventaires | KPO |
| INVENTD | INVD | Inventaires | KPO |
| WCUNLISDET | WCU | Impression Inventaires | |

### Préparations et picking

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOPREH | PRH | Bon de préparation entête | |
| STOPRED | PRE | Bon de préparation détail | |
| STOPREW | PRW | Bons préparation travail | |
| STOPRELIS | PRL | Liste préparation expéditions | |
| STOPRELISW | PLW | Listes préparation travail | |
| TABPRECOD | PRC | Code préparation | |

### Colis

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SPACK | SPH | Colis livraison | |
| SPACKD | SPD | Détail colis livraison | |

### Contrôle qualité

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOQUAL | STQ | Contrôle qualité | |
| STOQLYH | QLH | Entête contrôle qualité | |
| STOQLYD | QLD | Détail contrôle qualité | |
| WSTOQLYD | WQL | Détail contrôle qualité | |

### Valorisation

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOCOST | STP | Couts stocks FIFO | |
| STOMVTCOST | SMC | Liens documents / pile FIFO | |
| STOVALWRK | STV | Etat valorisé des stocks | |
| STOVALCUM | SVC | Cumuls état valorisé stocks | |
| CHGVAL | CGV | Changement de valeur | |
| CGVDET | CGVD | Détail changement valeur | |
| STKMVTADJ | SMA | Régularisation prix | |
| STKREGWRK | SRW | Régularisation prix | |

### Allocations

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOALL | STA | Allocations | |
| WSTOALL | WSTA | Allocations | |

### Calcul des besoins (MRP/CBN)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CBNHEA | CBH | Calcul besoins nets | |
| CBNDET | CBD | Calcul besoins nets détail | |
| CBNWRK | CBW | Temporaire calcul besoins | |
| PARMRP | PCB | Paramètres calculs besoins | |

### Réapprovisionnement

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOREO | REO | Réapprovisionnement | |
| WSTOREO | WREO | Réapprovisionnements | |
| ORDCOV | ORC | Historique PEC encours | |

### Plans et transactions

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BENCHTRS | BTS | Transaction plans | |

### Analyse ABC

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| ITMABCWRK | ITK | Calcul classe ABC | |

### Étiquettes

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| LABELPRN | LBP | Impression des étiquettes | |
| LABADCPRINT | LAP | Paramétrage des étiquettes | ADC |

### Contenants (LPN - License Plate Number)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| LPN | LPN | Identifiant contenant interne | |

### Paramétrage

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOPAR | STE | Paramètres stocks | |
| STOACCPAR | SAC | Paramètre interface compta | |
| PARSTOACC | PAS | Paramètres stock-Interface | |
| SCMAPAR | SZP | Paramétrage Prévision APS | |
| SCMDPAR | SDP | Paramétrage SCM n.SKEP | |
| TABSAFSTO | TSA | Coefficients stock sécurité | |
| TABWIPSTO | TWS | Quantités stock verrouillées | |
| STOADCSEARCH | SAS | Paramétrage recherche stock | ADC |

### Configurateur (CFG)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CFGQST | CQU | Symboles configurateur | CFG |
| CFGOPTVAR | COV | Options / variantes | CFG |
| CFGSCE | CSC | Scénarios configurateur | CFG |
| CFGSCELIN | CSL | Lignes scénarios configurateur | CFG |
| CFGSEL | CSE | Sélections configurateur | CFG |
| CFGSHA | CSH | Formes et modèles | CFG |
| CFGABQ | CAB | Abaques simples | CFG |
| CFGMAC | CFM | Procédures | CFG |
| CFGLNK | CLN | Liens symboles configurateur | CFG |
| CFGMENLOC | CML | Messages applicatif | CFG |
| CFGMEMO | CME | Configurateur mémo | CFG |
| CFGTEX | CFT | Table de travail configurateur | CFG |
| CFGHIS | CFH | Historique configurations | CFG |
| CFGHISHEA | CHH | Entête histor. configurations | CFG |

### Tables de travail et temporaires

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| STOWIPW | SWW | Stocks en cours de traitement | |
| STOSYNW | SYW | Travail resynchro stocks | |
| WRKSTOCNS | WCN | consultation transfert stock | |
| WRKSTOPER | WSP | Consultation stock à date | |
| WSTOLOTFCY | WSL | Lots - Sites | |
| TMPKRPT | TKRPT | Table temporaire impression | |
| WPOHBLOB | WBB | Blob CA temporaire | |
| WPOHWKT | WKT | Temporary PO rec worksheet | |
| VXAMTTPY | VVXAMTP | Sortie matière temp | ADC |

---

## 🔗 Relations principales

### STOCK → Tables associées

**Journal des mouvements** (N → 1)
- **STOJOU** : Tous les mouvements qui ont créé ou modifié le stock
  - Lien via STOFCY+ITMREF+LOT+SLO+LOC
  - Historique complet de tous les flux

**Lots** (N → 1)
- **STOLOT** : Informations sur le lot
  - ITMREF+LOT+SLO → ITMREF+LOT+SLO
  - Dates de péremption, contrôles qualité, fournisseur

**Séries** (N → 1)
- **STOSER** : Numéros de série
  - ITMREF+SERNUM → ITMREF+SERNUM
  - Traçabilité unitaire

**Emplacements** (N → 1)
- **STOLOC** : Détails de l'emplacement
  - STOFCY+LOC → STOFCY+LOC
  - Type, catégorie, dimensions

**Contenants** (N → 1)
- **LPN** : Identifiant contenant (palette, carton)
  - LPNNUM → LPNNUM

### STOCK → Données de base

- **ITMMASTER** (via ITMFACILIT) : Article (N → 1)
- **FACILITY** : Site de stockage (N → 1)
- **WAREHOUSE** : Dépôt (N → 1)

### STOJOU → Tables associées

**Valorisation FIFO** (1 → N)
- **STOCOST** : Pile FIFO des coûts
  - Lien via CSTCOU
  - Gestion des entrées/sorties FIFO

**Valorisation du mouvement** (1 → 1)
- **STOJOUVAL** : Valorisation détaillée
  - Montants, écarts, devises

**Traçabilité** (1 → N)
- **STOTRK** : Traçabilité amont/aval
  - Lien lot → lot, lot → série

### Relations avec autres modules

**Achats → Stocks**
- PRECEIPT → STOJOU : Réceptions de marchandises
- PRETURN → STOJOU : Retours fournisseurs

**Ventes → Stocks**
- SDELIVERY → STOJOU : Livraisons clients
- SRETURN → STOJOU : Retours clients

**Production → Stocks**
- MFGHEAD → STOJOU : Sorties composants, entrées produits finis
- MFGHEADTRK → STOJOU : Déclarations de production

---

## 🔄 Cycle de vie d'un mouvement de stock

### 1. Création du mouvement
```
Table : STOJOU
- Génération MVTSEQ (séquence)
- Type de transaction (TRSTYP)
- Pièce d'origine (VCRTYP, VCRNUM, VCRLIN)
- Article, quantité, emplacement
- UPDCOD = Oui (mise à jour stock)
```

### 2. Mise à jour du stock
```
Table : STOCK
- Recherche ou création de la ligne STOCK
  * Par ITMREF+STOFCY+LOT+SLO+LOC
  * Ou création nouveau STOCOU
- Mise à jour des quantités :
  * QTYSTU : quantité en unité stock
  * QTYSTUACT : quantité active (disponible)
```

### 3. Valorisation
```
Table : STOCOST (si FIFO)
- Entrée : Ajout d'une couche FIFO
  * CSTCOU : chrono de la couche
  * Prix d'entrée
- Sortie : Consommation des couches FIFO
  * Plus ancienne d'abord
  * Calcul du coût moyen
```

### 4. Traçabilité
```
Table : STOLOT (si lot)
- Création ou mise à jour du lot
- Dates de péremption, contrôle qualité

Table : STOSER (si série)
- Création du numéro de série
- Historique des mouvements

Table : STOTRK
- Liens de traçabilité amont/aval
```

### 5. Comptabilisation
```
Module Comptabilité
- Génération d'écriture comptable
- Via STOACCPAR (paramétrage)
- Comptes de stock, variations
```

---

## 📊 Statuts des stocks

### STA - Statut du stock
| Valeur | Description |
|--------|-------------|
| **A** | Actif (disponible) |
| **Q** | Quarantaine (en contrôle qualité) |
| **R** | Rejeté (non-conforme) |
| **B** | Bloqué (gelé, ne peut être utilisé) |

### LOCCAT - Catégorie d'emplacement
| Catégorie | Description |
|-----------|-------------|
| **Stock** | Emplacement de stockage standard |
| **Picking** | Emplacement de préparation |
| **Réception** | Zone de réception |
| **Expédition** | Zone d'expédition |
| **Contrôle** | Zone de contrôle qualité |
| **Transit** | Emplacement de transit temporaire |

---

## 💡 Cas d'usage courants

### 1. Stock disponible par article et site
```sql
SELECT 
  ITMREF,
  STOFCY,
  SUM(QTYSTUACT) AS QteDisponible,
  SUM(CUMALLQTA) AS QteAllouee,
  SUM(QTYSTUACT - CUMALLQTA) AS QteLibre
FROM STOCK
WHERE STA = 'A'  -- Actif
GROUP BY ITMREF, STOFCY
HAVING SUM(QTYSTUACT) > 0
ORDER BY ITMREF, STOFCY
```

### 2. Stock par emplacement
```sql
SELECT 
  S.STOFCY,
  S.LOC,
  L.LOCCAT,
  S.ITMREF,
  S.LOT,
  S.QTYSTUACT AS Quantite
FROM STOCK S
  INNER JOIN STOLOC L ON S.STOFCY = L.STOFCY AND S.LOC = L.LOC
WHERE S.QTYSTUACT > 0
ORDER BY S.STOFCY, S.LOC, S.ITMREF
```

### 3. Mouvements du jour
```sql
SELECT 
  STJ.ITMREF,
  STJ.STOFCY,
  STJ.VCRTYP AS TypePiece,
  STJ.VCRNUM AS NoPiece,
  STJ.TRSTYP AS TypeTransaction,
  STJ.QTYSTU AS Quantite,
  STJ.IPTDAT AS DateMouvement,
  STJ.PRIVAL AS Prix,
  STJ.AMTVAL AS Montant
FROM STOJOU STJ
WHERE STJ.IPTDAT = CAST(GETDATE() AS DATE)
  AND STJ.UPDCOD = 'Oui'
ORDER BY STJ.IPTDAT, STJ.MVTSEQ
```

### 4. Lots en cours de péremption
```sql
SELECT 
  SL.ITMREF,
  SL.LOT,
  SL.SHLDAT AS DatePeremption,
  DATEDIFF(day, GETDATE(), SL.SHLDAT) AS JoursRestants,
  SUM(S.QTYSTUACT) AS QteEnStock
FROM STOLOT SL
  INNER JOIN STOCK S ON SL.ITMREF = S.ITMREF AND SL.LOT = S.LOT
WHERE SL.SHLDAT BETWEEN GETDATE() AND DATEADD(day, 90, GETDATE())
  AND S.QTYSTUACT > 0
GROUP BY SL.ITMREF, SL.LOT, SL.SHLDAT
ORDER BY SL.SHLDAT
```

### 5. Historique d'un numéro de série
```sql
SELECT 
  STJ.IPTDAT AS DateMouvement,
  STJ.VCRTYP,
  STJ.VCRNUM,
  STJ.TRSTYP,
  STJ.STOFCY,
  STJ.LOC,
  STJ.QTYSTU,
  STJ.BPRNUM AS Tiers
FROM STOJOU STJ
WHERE STJ.SERNUM = 'SN123456'
ORDER BY STJ.IPTDAT, STJ.MVTSEQ
```

### 6. Valorisation du stock
```sql
SELECT 
  S.ITMREF,
  S.STOFCY,
  SUM(S.QTYSTUACT) AS Quantite,
  AVG(SC.NETPRI) AS PrixMoyen,
  SUM(S.QTYSTUACT * SC.NETPRI) AS ValeurStock
FROM STOCK S
  LEFT JOIN STOCOST SC ON S.STOFCY = SC.STOFCY 
    AND S.ITMREF = SC.ITMREF
    AND S.STOCOU >= SC.CSTCOU  -- Lien avec pile FIFO
WHERE S.QTYSTUACT > 0
  AND S.STA = 'A'
GROUP BY S.ITMREF, S.STOFCY
ORDER BY ValeurStock DESC
```

---

## ⚠️ Points d'attention

### Performance

1. **Index critiques** :
   - STOCK : STOFCY+STOCOU (clé primaire), ITMREF+STOFCY+LOT+SLO+LOC
   - STOJOU : Index sur IPTDAT pour requêtes par date
   - STOLOT : ITMREF+LOT+SLO, index sur SHLDAT pour péremption

2. **Volumétrie** :
   - **STOJOU** : Table la plus volumineuse (tous les mouvements historiques)
     - Archivage recommandé au-delà de 2-3 ans
     - Peut atteindre plusieurs millions de lignes
   - **STOCK** : Volumétrie modérée (stocks actifs uniquement)
   - **STOCOST** : Volumétrie importante si FIFO activé

3. **Optimisations** :
   - Purger régulièrement STOJOU (archiver puis supprimer)
   - Nettoyer les stocks à zéro inactifs (STOCK avec QTYSTU = 0)
   - Surveiller la pile FIFO (STOCOST) en cas de coûts non soldés

### Intégrité des données

1. **Cohérence des quantités** :
   - STOCK.QTYSTU = QTYSTUACT + quantités en contrôle qualité + bloquées
   - QTYSTUACT = quantité disponible + CUMALLQTA (allouée)
   - Vérifier régulièrement avec le journal : SUM(STOJOU.QTYSTU) par article

2. **Valorisation FIFO** :
   - Chaque entrée crée une couche FIFO (STOCOST)
   - Chaque sortie consomme les couches dans l'ordre
   - Attention aux couches "bloquées" (quantité non soldée)

3. **Traçabilité lots/séries** :
   - Un lot doit exister dans STOLOT avant utilisation dans STOCK
   - Une série est unique : 1 ligne dans STOSER
   - Vérifier la cohérence entre STOCK.LOT et STOLOT

4. **Emplacements** :
   - Un emplacement doit exister dans STOLOC avant rangement
   - Respecter les types d'emplacement (LOCTYP)
   - Vérifier les contraintes de stockage (dimensions, poids)

### Codes d'activité

| Code | Description |
|------|-------------|
| **CFG** | Configurateur d'articles (configure to order) |
| **KPO** | Comptage permanent (Kanban Pull Order) |
| **ADC** | Automatic Data Capture (codes-barres, RFID) |
| **WRH** | Warehouse management (gestion d'entrepôt avancée) |
| **ANA** | Analytique |
| **ECC** | Engineering Change Control (gestion des versions) |
| **LPN** | License Plate Number (contenants) |
| **SFD** | Stock Field Definition (champs personnalisés) |
| **VLT** | Double valorisation |

---

## 📈 Indicateurs de performance (KPI)

### Taux de rotation des stocks
```sql
SELECT 
  I.ITMREF,
  I.ITMDES,
  -- Stock moyen sur la période
  (
    SELECT AVG(QTYSTUACT)
    FROM STOCK
    WHERE ITMREF = I.ITMREF
      AND STOFCY = 'SITE01'
  ) AS StockMoyen,
  -- Sorties de l'année
  (
    SELECT SUM(ABS(QTYSTU))
    FROM STOJOU
    WHERE ITMREF = I.ITMREF
      AND STOFCY = 'SITE01'
      AND TRSTYP IN ('Livraison', 'Sortie production')
      AND YEAR(IPTDAT) = YEAR(GETDATE())
  ) AS SortiesAnnuelles,
  -- Taux de rotation
  CASE 
    WHEN AVG(S.QTYSTUACT) > 0 THEN
      SUM(ABS(STJ.QTYSTU)) / AVG(S.QTYSTUACT)
    ELSE 0
  END AS TauxRotation
FROM ITMMASTER I
  LEFT JOIN STOCK S ON I.ITMREF = S.ITMREF AND S.STOFCY = 'SITE01'
  LEFT JOIN STOJOU STJ ON I.ITMREF = STJ.ITMREF 
    AND STJ.STOFCY = 'SITE01'
    AND YEAR(STJ.IPTDAT) = YEAR(GETDATE())
    AND STJ.TRSTYP IN ('Livraison', 'Sortie production')
GROUP BY I.ITMREF, I.ITMDES
HAVING AVG(S.QTYSTUACT) > 0
ORDER BY TauxRotation DESC
```

### Couverture de stock (en jours)
```sql
SELECT 
  S.ITMREF,
  S.STOFCY,
  S.QTYSTUACT AS StockActuel,
  -- Consommation moyenne journalière (30 derniers jours)
  (
    SELECT AVG(ConsoJour)
    FROM (
      SELECT IPTDAT, SUM(ABS(QTYSTU)) AS ConsoJour
      FROM STOJOU
      WHERE ITMREF = S.ITMREF
        AND STOFCY = S.STOFCY
        AND TRSTYP IN ('Livraison', 'Sortie production')
        AND IPTDAT >= DATEADD(day, -30, GETDATE())
      GROUP BY IPTDAT
    ) AS Conso
  ) AS ConsoMoyenneJour,
  -- Couverture en jours
  CASE 
    WHEN AVG(ConsoJour) > 0 THEN
      S.QTYSTUACT / AVG(ConsoJour)
    ELSE 999
  END AS CouvertureJours
FROM STOCK S
WHERE S.QTYSTUACT > 0
  AND S.STA = 'A'
```

### Valeur du stock mort (pas de mouvement depuis X mois)
```sql
SELECT 
  S.ITMREF,
  S.STOFCY,
  S.QTYSTUACT,
  S.LASISSDAT AS DerniereSortie,
  DATEDIFF(day, S.LASISSDAT, GETDATE()) AS JoursSansMouvement,
  S.QTYSTUACT * I.COSUPRPRI AS ValeurStock
FROM STOCK S
  INNER JOIN ITMFACILIT I ON S.ITMREF = I.ITMREF AND S.STOFCY = I.STOFCY
WHERE S.QTYSTUACT > 0
  AND S.LASISSDAT < DATEADD(month, -12, GETDATE())
  AND S.STA = 'A'
ORDER BY ValeurStock DESC
```

### Précision des inventaires
```sql
SELECT 
  C.STOFCY,
  C.IPTDAT AS DateInventaire,
  COUNT(*) AS NbLignes,
  SUM(CASE WHEN C.REAPHY <> C.THEPHY THEN 1 ELSE 0 END) AS NbEcarts,
  SUM(CASE WHEN C.REAPHY <> C.THEPHY THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS PourcentageEcarts,
  SUM(ABS(C.REAPHY - C.THEPHY) * I.COSUPRPRI) AS ValeurEcarts
FROM CUNLISDET C
  INNER JOIN ITMFACILIT I ON C.ITMREF = I.ITMREF AND C.STOFCY = I.STOFCY
WHERE C.IPTDAT >= DATEADD(month, -12, GETDATE())
GROUP BY C.STOFCY, C.IPTDAT
ORDER BY C.IPTDAT DESC
```

---

## 🔧 Paramétrage recommandé

### Méthode de valorisation (STOPAR)

**Par type d'article** :
- **Matières premières** : FIFO ou CMP (Coût Moyen Pondéré)
- **Produits finis** : Standard ou CMP
- **Marchandises** : FIFO recommandé

**Avantages/Inconvénients** :
| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **FIFO** | Reflet fidèle des coûts réels | Volumétrie importante (STOCOST) |
| **CMP** | Lissage des variations de prix | Moins précis sur coûts réels |
| **Standard** | Simple, pas de recalcul | Nécessite mise à jour régulière |

### Gestion des lots

**Activation recommandée pour** :
- Produits périssables (agroalimentaire, pharmaceutique)
- Traçabilité réglementaire
- Produits avec DLU/DLUO

**Configuration** :
- Format du numéro de lot : AAAMMJJ ou LOT-NNNNNN
- Génération automatique ou manuelle
- Dates de péremption obligatoires

### Gestion des séries

**Activation pour** :
- Équipements (SAV, garanties)
- Produits de valeur élevée
- Traçabilité unitaire requise

**Attention** : Volumétrie importante de STOSER

### Emplacements (WRH)

**Organisation recommandée** :
1. **Zones fonctionnelles** :
   - Zone de réception (RCP-*)
   - Zone de stockage (STK-*)
   - Zone de picking (PCK-*)
   - Zone d'expédition (EXP-*)
   - Zone de quarantaine (QUA-*)

2. **Codification** :
   - Allée-Travée-Niveau-Position (Ex: A01-T03-N02-P05)
   - Ou code libre (Ex: RACK-A-123)

3. **Types d'emplacement** (TABLOCTYP) :
   - Palette
   - Étagère
   - Sol (vrac)
   - Picking

---

## 🎓 Bonnes pratiques

### Gestion des stocks

1. **Mouvements de stock** :
   - Toujours passer par une transaction (STOJOU)
   - Ne jamais modifier STOCK directement
   - Utiliser les fonctions standard de Sage X3

2. **Inventaires réguliers** :
   - Inventaire tournant recommandé (par zone ou ABC)
   - Inventaire annuel complet
   - Réajuster immédiatement les écarts significatifs

3. **Nettoyage** :
   - Purger les stocks à zéro inactifs (> 12 mois sans mouvement)
   - Archiver STOJOU régulièrement (> 2-3 ans)
   - Nettoyer les lots périmés sans stock

### Traçabilité

1. **Lots** :
   - Créer le lot lors de la première réception
   - Renseigner systématiquement les dates de péremption
   - Activer la gestion FEFO si périssable

2. **Séries** :
   - Numéro de série unique et pérenne
   - Scanner les séries lors des mouvements
   - Historiser les interventions SAV

3. **Emplacements** :
   - Respecter le zonage défini
   - Mettre à jour immédiatement les rangements
   - Vérifier régulièrement la cohérence physique/système

### Valorisation

1. **FIFO** :
   - Surveiller les couches FIFO anciennes
   - Purger les couches à quantité nulle
   - Vérifier la cohérence entre STOCOST et STOCK

2. **Changements de valeur** :
   - Documenter la raison (obsolescence, marché)
   - Valider par un responsable
   - Tracer dans CHGVAL

3. **Inventaires** :
   - Valoriser aux coûts en vigueur
   - Analyser les écarts significatifs
   - Ajuster les coûts standards si nécessaire

---

[◄ Retour à l'INDEX](./INDEX.md)

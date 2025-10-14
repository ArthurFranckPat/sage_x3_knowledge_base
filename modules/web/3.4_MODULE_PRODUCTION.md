# Module Production - Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📋 Vue d'ensemble

Le **Module Production** gère l'ensemble des processus de fabrication, de l'ordonnancement des ordres de fabrication jusqu'au suivi de production en passant par la gestion des gammes, des postes de charge et de la capacité. Il comprend **86 tables** couvrant la planification, l'exécution et le pilotage de la production.

### Processus couverts

1. **Gammes (Routing)** : Définition des séquences d'opérations de fabrication
2. **Ordres de fabrication (OF)** : Lancement et suivi de la production
3. **Jalonnement** : Planification et ordonnancement des opérations
4. **Charge** : Gestion de la capacité des postes de charge
5. **Suivi de production** : Déclarations et traçabilité
6. **Pesée (MWM)** : Gestion des pesées et balances pour industries de process
7. **Plan directeur (PDP)** : Planification stratégique de la production
8. **APS** : Ordonnancement avancé avec GFSA et POPS

---

## 📊 Statistiques

- **Nombre total de tables** : 86
- **Codes d'activité** : MWM, GFSA, POPS, NPI, RVM, CFG, SMI
- **Tables principales** : MFGHEAD, ROUTING, TABWRKCTR, OPERATIONS
- **Tables transactionnelles** : 60% des tables

---

## 🔑 Table MFGHEAD - Ordres de fabrication

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | MFGHEAD |
| **Abréviation** | MFG |
| **Intitulé** | Ordres fabrication - entête |
| **Module** | Production |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| MFG0 | MFGNUM | Non |
| MFG1 | MFGFCY+MFGTRKFLG | Oui |
| MFG2 | MTOREF | Oui |

### Colonnes détaillées

#### Identification et références
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MFGNUM | No ordre | VCR | | | |
| MFGFCY | Site production | FCY | | →FACILITY | |
| PLNFCY | Site planification | FCY | | →FACILITY | |
| MTOREF | Réseau MTO | MTO | | →MTOHEAD | |
| EXPNUM | Numéro Export | L | 8 | | |
| SINUM | No pièce Intégrale | A | 1 | | SMI |

#### Dates et périodes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STRDAT | Date début | D | | | |
| ENDDAT | Date fin | D | | | |
| OBJDAT | Objectif initial | D | | | |
| EARSTRDAT | Première date début | D | | | |
| LATENDDAT | Dernière date fin | D | | | |
| CLODAT | Date clôture | D | | | |
| INFCAPSTR | Date début | D | | | |
| INFCAPEND | Date fin | D | | | |
| FITCAPSTR | Début capacité finie | D | | | |
| FITCAPEND | Fin capacité finie | D | | | |
| TRKFIRST | Date premier suivi | D | | | |
| TRKFIRSTC | Date premier suivi | D | | | |
| TRKLAST | Date dernier suivi | D | | | |
| TRKLASTC | Date dernier suivi | D | | | |

#### Statuts et états
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MFGSTA | Statut ordre | M | 10 | | |
| MFGTRKFLG | Flag suivi | M | 15 | | |
| SCDFLG | Etat jalonnement | M | 15 | | |
| ALLSTA | Statut allocation | M | 15 | | |
| PRPSTA | Statut préparation | M | 15 | | |
| CFMFLG | Validée | M | 4 | | |
| SUSFLG | Flag OF suspendu | M | 4 | | |
| OPTFLG | Flag optimisation | M | 4 | | |
| NPIPRO | Prototype | M | 4 | | NPI |

#### Quantités
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| EXTQTY | Quantité prévue | QTY | | | |
| CPLQTY | Qté réalisée tot | QTY | | | |
| QUACPLQTY | Qté réalisée CQ | QTY | | | |
| REJCPLQTY | Qté réalisée rejetée | QTY | | | |
| RMNEXTQTY | Quantité restante | QTY | | | |
| AVAMFGQTY | Quantité productible | QTY | | | |
| STU | Unité stock | UOM | | →TABUNIT | |

#### Gammes et routage
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ROUNUM | Gamme lancée | ROH | | →ROUTING | |
| ROUALT | Alternative gamme | TRO | | →TABROUALT | |
| ROUECCMAJ | Version majeure | ICVVAL | | | RVM |
| ROUECCMIN | Version mineure | ICVVAL | | | RVM |

#### Modes et paramètres
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MFGMOD | Mode lancement | M | 15 | | |
| SCDMOD | Mode jalonnement | M | 10 | | |
| TYPMOD | Type mode | M | 15 | | |
| MFGPIO | Priorité | M | 2 | | |

#### Jalonnement et cycles
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CLCSCDLTI | Cycle jal. calc | DCB | 9.2 | | |
| LTIREDCOE | Coeff réduct. délai | DCB | 3.2 | | |

#### Compteurs de lignes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ITMLINNBR | Nombre articles | L | 8 | | |
| ITMCLENBR | Nb articles soldés | L | 8 | | |
| MATLINNBR | Nombre matières | L | 8 | | |
| MATCLENBR | Nb matières soldées | L | 8 | | |
| OPELINNBR | Nombre opérations | L | 8 | | |
| OPECLENBR | Nb opé soldées | L | 8 | | |
| PRPMATNBR | Nb mat préparées | L | 8 | | |
| SHTMATNBR | Nombre ruptures | L | 8 | | |

#### Allocations
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| OVRALLNBR | Nb alloc globales | L | 8 | | |
| DETALLNBR | Nb alloc détail | L | 8 | | |

#### Pesée (MWM)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| WGGFLG | Flag plan de pesée | M | 15 | | MWM |
| WGGSTA | Situation de pesée | M | 15 | | MWM |

#### Optimisation et ordonnancement avancé
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| OPTUSR | Opé optimisation | A | 5 | | |
| GFSPUBTIM | Date/heure optimisé | ADATIM | | | |

#### Texte et notes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MFGTEX | Texte production | TXC | | | |

#### Audit et traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 🔑 Table ROUTING - Gammes

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | ROUTING |
| **Abréviation** | ROH |
| **Intitulé** | Gammes - Entête |
| **Module** | Production |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| ROH0 | ITMREF+ROUALT+FCY | Non |
| ROH1 | FCY+ITMREF+ROUALT | Non |

### Colonnes détaillées

#### Identification et références
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ITMREF | Gamme | ITM | | →ITMMASTER | |
| ROUALT | Alternative gamme | TRO | | →TABROUALT | |
| FCY | Site | FCY | | →FACILITY | |
| PLNNUM | Plan entête gamme | A | 20 | | |
| IDENT1 | Identifiant 1 | ID1 | | | |
| CFGVCRNUM | N.pièce config. | VCR | | | CFG |

#### Désignations et descriptions
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ROUDES | Désignation entête | DES | | | |
| ROUDESAXX | Désignation entête | AX3 | | | |

#### Dates de validité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ROUSTRDAT | Début validité | D | | | |
| ROUENDDAT | Fin validité | D | | | |

#### Statuts et contrôles
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CFMFLG | Validée | M | 4 | | |
| USESTA | Statut utilisation | M | 15 | | |
| ACSCOD | Code accès | ACS | | →ACCCOD | |

#### Paramètres de lancement
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| WORTYP | Mode gestion OF | M | 30 | | |
| WORMINQTY | Qté mini lancement | QTY | | | |
| WORMAXQTY | Qté maxi lancement | QTY | | | |

#### Derniers lancements
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LASWORDAT | Date dernier lct | D | | | |
| LASWORQTY | Qté dernier lct | QTY | | | |

#### Unité et temps
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TIMUOMCOD | Unité temps | M | 15 | | |

#### Documents et visuels
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TEXNUM | Texte entête gamme | TXC | | | |
| ROUPCT | Image entête gamme | A | 20 | | |

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

## 📑 Liste complète des tables

### Ordres de fabrication (OF)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| MFGHEAD | MFG | Ordres fabrication - entête | |
| MFGITM | MFI | Ordres fabrication - articles | |
| MFGMAT | MFM | Ordres fabrication - matières | |
| MFGOPE | MFO | Ordres fabrication - opérat. | |
| MFGPRN | MFP | Ordres fabrication - documents | |
| MFGANL | MFA | Analyse OF | |
| MFGVERSION | MFV | Changement version GPAO | |
| MFGMATREV | MMR | OF - audit matières | |
| MFGOPEREV | MOR | OF - audit opérations | |
| MFGSERHDR | MFSH | OF - en-tête lien No série | |
| MFGSERDET | MFSD | OF - détail lien No série | |

### Suivi de fabrication

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| MFGHEADTRK | MTK | Suivi fabrication - entête | |
| MFGITMTRK | MKI | suivi fabrication - articles | |
| MFGMATTRK | MKM | Suivi fabrication - matières | |
| MFGOPETRK | MKO | Suivi fabrication - opérat. | |
| MFGTRS | MTS | Transaction saisie production | |

### Gammes (Routing)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| ROUTING | ROH | Gammes - Entête | |
| ROUOPE | ROO | Gammes - Opérations | |
| ROUOPESTD | ROT | Opérations standard | |
| ROUSCD | ROS | Gamme - Jalonnement opérations | |
| RVMVAL | RVV | Versions de gammes | |

### Postes de charge et capacité

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| TABWRKCTR | TWC | Centres de charge | |
| OPERATIONS | OPS | Encours charge | |
| WORKLOAD | WKL | Charge de production | |
| CAPVAR | CPV | Variations de capacité | |
| RPLWST | RPW | Postes de charge de remplacemt | |
| WSTANL | WSA | Analyse postes de charge | |
| WORKCOST | MWC | Section de valorisation | |

### Jalonnement et ordonnancement

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SCHEDULING | SCH | Jalonnement des O.F | |
| PARJAL | PJA | Paramètres jalonnement | |
| ORDOOPAR | ORO | Paramétrage APS | |
| ORDOPPAR | ORP | Paramétrage PREACTOR | |

### Plan directeur de production (PDP)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PDPHEA | PDH | Calcul plan directeur entête | |
| PDPDET | PDD | Calcul plan directeur détail | |

### Gestion de pesée (MWM)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| WEIGHING | WGG | Pesée | MWM |
| SCALES | SLE | Balances | MWM |
| STATION | STX | Lieu de pesage | MWM |
| STATIONBOX | SBX | Configuration Lieu /Box | MWM |
| CONTAINERS | CTN | Récipients | MWM |
| TANKS | TKS | Cuves | MWM |
| TANKSGATES | TGT | Affectations Cuves Vannes | MWM |
| WEIGHPRT | WGP | Impression des étiquettes | MWM |
| MODSCALE | MODL | Modèles de balance | MWM |
| CALIBRAT | CBT | Etalonnage | MWM |
| CALIGUIDES | CGD | Guides étalonnages | MWM |
| HANDLING | HSH | Instruction stockage manutention | MWM |
| HANDLINGR | HSR | Instruction récipient | MWM |
| SENTENCES | RSY | Phrases risques sécurité | MWM |
| USERGUIDES | UGD | Guides opérateurs | MWM |
| MWMCRDASW | MWA | Procédures Box - Réponses | MWM |
| TABCABCUT | CUT | Règles de découpage du CAB | MWM |

### Ordonnancement avancé GFSA

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| GFSOBJ | GFSOBJ | Objets | |
| GFSMRK | GFSMRK | Marqueur | |
| GFSTAG | GFSTAG | Balise | |
| GFSPIN | GFSPIN | Type punaisage opération | |
| GFSSETTIM | GFSST | Matrice temps réglage | GFSA |
| GFSSETEXC | GFSSTE | Exceptions temps réglage | GFSA |
| GFSCALEXP | GFSCEP | Exception calendrier | |
| GFSOPTMAT | GFSOM | Matrice d'optimisation | GFSA |
| GFSOPTLIN | GFSOL | Lignes matrice d'optimisation | GFSA |
| GFSATT | GFSATT | Attribut | GFSA |
| GFSATTVAL | GFSATTV | Valeur attribut | GFSA |
| GFSCUSFLDS | GFSCF | Champs personnalisés | |
| GFSCUSVALS | GFSCV | Valeurs personnalisées | |

### Ordonnancement POPS (Planner One Production Scheduler)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| POPSOBJ | PSOBJ | Objets dans PS | POPS |
| POPSMRK | MRK | Marqueur Planner One | POPS |
| POPSTAG | TAG | Balise Planner One | POPS |
| POPSPIN | PIN | Type punaisage opération | POPS |
| POPSCALEXP | CEP | Exception calendrier | POPS |
| POPSCUSFLDS | PSCF | Champs perso. Prod. Sched. | POPS |
| POPSCUSVALS | PSCV | Valeurs perso. Prod. Sched. | POPS |

### Transactions d'atelier

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SFTTXN | SFTX | Transactions d'atelier | |
| SFTTXNH | SFTH | Historique transaction atelier | |

### Wipcost et valorisation

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| WIPTMP | MWT | Wipcost-Interface | |
| PARWIPACC | PWA | Paramètre Wipcost-Interface | |
| WIPSCPM | MSM | Rebut matière temporaire | |
| WIPSCPO | MSO | Rebut opération temporaire | |
| MFCSCRAP | MCS | Prix de revient rebut | |

### Fiches techniques et réponses

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| MTKCRDASW | MTA | Fiches technique Réponses | |

### Divers et paramétrage

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| MESPAR | MPA | Paramétrage MES | |
| ILOGIMG | ILO | Images Ilog | |
| ATEXMOD | ATM | Compteur des textes par module | |
| TDUPDCLC | TUC | Modification série - calcul | |

---

## 🔗 Relations principales

### MFGHEAD → Tables associées

**Articles fabriqués** (1 → N)
- **MFGITM** : Articles produits par l'OF
  - MFGNUM → MFGNUM
  - Contient les quantités à produire, produites, rebutées

**Matières consommées** (1 → N)
- **MFGMAT** : Composants nécessaires à la fabrication
  - MFGNUM → MFGNUM
  - Contient les quantités théoriques et réelles consommées

**Opérations** (1 → N)
- **MFGOPE** : Séquence d'opérations de fabrication
  - MFGNUM → MFGNUM
  - Contient les temps prévisionnels et réels

**Suivi de production** (1 → N)
- **MFGHEADTRK** : Historique des suivis
- **MFGITMTRK** : Suivi par article
- **MFGMATTRK** : Suivi par matière
- **MFGOPETRK** : Suivi par opération

### MFGHEAD → Données de base

- **ITMMASTER** (via MFGITM/MFGMAT) : Articles produits et consommés (N → 1)
- **ROUTING** : Gamme utilisée (N → 1)
- **FACILITY** : Site de production (N → 1)
- **BOM** : Nomenclature du produit (N → 1)

### ROUTING → Tables associées

**Opérations de gamme** (1 → N)
- **ROUOPE** : Détail des opérations de la gamme
  - ITMREF+ROUALT+FCY → ITMREF+ROUALT+FCY
  - Contient les temps, postes de charge, outillages

**Jalonnement** (1 → N)
- **ROUSCD** : Données de jalonnement par opération
  - Calcul des dates au plus tôt et au plus tard

### TABWRKCTR → OPERATIONS

**Centre de charge** (1 → N)
- **OPERATIONS** : Charge en cours par poste
  - WKCNUM → WKCNUM
  - Contient la charge prévisionnelle et réelle

### OPERATIONS → MFGOPE

**Encours de charge** (N → N)
- Lien entre les opérations d'OF et la charge des postes
- Permet le calcul de la charge et de la capacité

---

## 🔄 Cycle de vie d'un Ordre de Fabrication

### 1. Création
```
MFGSTA = 'Simulée' ou 'Prévisionnelle'
- Calcul des besoins
- Génération automatique ou manuelle
- Éclatement de la nomenclature
```

### 2. Validation
```
MFGSTA = 'Ferme'
CFMFLG = Oui
- Validation de la faisabilité
- Réservation des composants
- Jalonnement des opérations
```

### 3. Lancement
```
MFGSTA = 'Lancée'
- Allocation des matières
- Préparation des composants
- Lancement en fabrication
```

### 4. Production
```
MFGSTA = 'En cours'
MFGTRKFLG = 'Partiellement suivie' / 'Totalement suivie'
- Déclarations de production via MFGTRS
- Consommations de matières
- Déclarations de temps sur opérations
- Enregistrement dans MFGHEADTRK
```

### 5. Clôture
```
MFGSTA = 'Soldée' ou 'Clôturée'
CLODAT = Date de clôture
- Production terminée
- Consommations soldées
- Réceptions en stock
- Calcul du coût de revient
```

---

## 📊 Statuts des Ordres de Fabrication (MFGSTA)

| Statut | Description | Modification possible |
|--------|-------------|----------------------|
| **Simulée** | OF de simulation, non validé | Oui |
| **Prévisionnelle** | OF prévisionnel issu du CBN | Oui |
| **Ferme** | OF validé, non lancé | Oui |
| **Lancée** | OF lancé en fabrication | Limitée |
| **En cours** | Production en cours | Suivi uniquement |
| **Partiellement réalisée** | Production partielle | Suivi uniquement |
| **Réalisée** | Production terminée | Non |
| **Soldée** | OF soldé administrativement | Non |
| **Clôturée** | OF clôturé comptablement | Non |
| **Annulée** | OF annulé | Non |

---

## 📊 Modes de lancement (MFGMOD)

| Mode | Description | Utilisation |
|------|-------------|-------------|
| **Ferme** | Lancement ferme avec allocation | Production standard |
| **Prévisionnel** | Lancement prévisionnel | Planification |
| **Projet** | OF lié à un projet | Production projet |
| **Sous-traitance** | OF de sous-traitance | Fabrication externe |
| **Maintenance** | OF de maintenance | Maintenance préventive |

---

## 💡 Cas d'usage courants

### 1. Liste des OF en cours
```sql
SELECT MFGNUM, MFGFCY, EXTQTY, CPLQTY, STRDAT, ENDDAT
FROM MFGHEAD
WHERE MFGSTA IN ('Lancée', 'En cours')
  AND MFGFCY = 'USINE01'
ORDER BY STRDAT
```

### 2. Charge par poste de charge
```sql
SELECT O.WKCNUM, O.OPELINNBR, O.EXTWRKLOAD, O.CPLWRKLOAD
FROM OPERATIONS O
  INNER JOIN TABWRKCTR W ON O.WKCNUM = W.WKCNUM
WHERE O.OPCSTA <> 'Terminée'
ORDER BY W.WKCNUM
```

### 3. Retard de production
```sql
SELECT MFGNUM, MFGFCY, ENDDAT, RMNEXTQTY
FROM MFGHEAD
WHERE MFGSTA IN ('Lancée', 'En cours')
  AND ENDDAT < GETDATE()
  AND RMNEXTQTY > 0
ORDER BY ENDDAT
```

### 4. Consommations vs prévisions
```sql
SELECT M.MFGNUM, M.ITMREF, M.EXTQTY, M.CPLQTY, M.RMNQTY
FROM MFGMAT M
  INNER JOIN MFGHEAD H ON M.MFGNUM = H.MFGNUM
WHERE H.MFGSTA = 'En cours'
  AND M.RMNQTY > 0
```

---

## ⚠️ Points d'attention

### Performance

1. **Index critiques** :
   - MFGHEAD : MFGNUM (clé primaire), MFGFCY+MFGTRKFLG, MTOREF
   - MFGMAT/MFGITM/MFGOPE : MFGNUM pour jointures
   - OPERATIONS : WKCNUM pour charge par poste

2. **Volumétrie** :
   - MFGHEADTRK peut être très volumineuse (historique de tous les suivis)
   - OPERATIONS recalculée fréquemment
   - Penser à archiver les OF anciennes

### Intégrité des données

1. **Cohérence des quantités** :
   - EXTQTY = CPLQTY + RMNEXTQTY + REJCPLQTY + QUACPLQTY
   - Vérifier les cumuls dans MFGITM

2. **Statuts cohérents** :
   - MFGSTA doit être cohérent avec les statuts des lignes
   - Vérifier ALLSTA, PRPSTA, SCDFLG

3. **Jalonnement** :
   - Dates STRDAT ≤ ENDDAT
   - Cohérence avec les dates des opérations (MFGOPE)

### Codes d'activité

| Code | Module | Description |
|------|--------|-------------|
| **MWM** | Manufacturing Workbench | Gestion de pesée pour industries de process |
| **GFSA** | GFS Advanced | Ordonnancement avancé (anciennement Preactor) |
| **POPS** | Planner One | Ordonnancement Production Scheduler |
| **NPI** | New Product Introduction | Gestion des prototypes |
| **RVM** | Revision Management | Gestion des versions de gammes |
| **CFG** | Configuration | Articles configurés |
| **SMI** | Suite Mobile Industrie | Mobilité atelier |

---

## 🏭 Spécificités par code d'activité

### MWM - Manufacturing Workbench

**Tables spécifiques** : WEIGHING, SCALES, CONTAINERS, TANKS, STATION

**Fonctionnalités** :
- Gestion des pesées et recettes
- Interface avec les balances
- Traçabilité des lots pesés
- Instructions de fabrication guidées
- Gestion des récipients et cuves

**Champs dans MFGHEAD** :
- WGGFLG : Flag plan de pesée
- WGGSTA : Situation de pesée

### GFSA - Ordonnancement avancé

**Tables spécifiques** : GFSOBJ, GFSMRK, GFSTAG, GFSPIN, GFSSETTIM, GFSOPTMAT

**Fonctionnalités** :
- Optimisation des ressources
- Gestion des temps de réglage (changement de série)
- Matrices de temps de réglage
- Attributs personnalisés
- Jalonnement capacité finie

**Champs dans MFGHEAD** :
- GFSPUBTIM : Date/heure optimisé
- OPTFLG : Flag optimisation

### POPS - Planner One Production Scheduler

**Tables spécifiques** : POPSOBJ, POPSMRK, POPSTAG, POPSPIN, POPSCALEXP

**Fonctionnalités** :
- Ordonnancement graphique
- Glisser-déposer des opérations
- Gestion des contraintes
- Calendriers personnalisés
- Marqueurs et balises visuels

---

## 📈 Indicateurs de performance (KPI)

### Suivi de production

```sql
-- Taux de réalisation
SELECT 
  MFGFCY,
  SUM(CPLQTY) / SUM(EXTQTY) * 100 AS TauxRealisation
FROM MFGHEAD
WHERE MFGSTA IN ('Réalisée', 'Soldée')
  AND STRDAT >= '2024-01-01'
GROUP BY MFGFCY
```

### Taux de rebut

```sql
-- Rebuts vs production
SELECT 
  MFGFCY,
  SUM(REJCPLQTY) / SUM(CPLQTY) * 100 AS TauxRebut
FROM MFGHEAD
WHERE CPLQTY > 0
  AND STRDAT >= '2024-01-01'
GROUP BY MFGFCY
```

### Charge des postes

```sql
-- Taux de charge par poste
SELECT 
  W.WKCNUM,
  W.WKCDES,
  O.EXTWRKLOAD AS ChargePrevisionnelle,
  O.CPLWRKLOAD AS ChargeRealisee,
  O.CPLWRKLOAD / O.EXTWRKLOAD * 100 AS TauxRealisation
FROM OPERATIONS O
  INNER JOIN TABWRKCTR W ON O.WKCNUM = W.WKCNUM
WHERE O.EXTWRKLOAD > 0
```

---

## 🔧 Paramétrage recommandé

### Gammes (ROUTING)

1. **Définir les alternatives de gammes** (ROUALT)
   - Gamme principale : 00
   - Alternatives : 01, 02, etc.

2. **Définir les modes de gestion** (WORTYP)
   - Par OF : Un OF par besoin
   - Par lot de fabrication : Regroupement
   - À la commande : Production MTO

3. **Définir les quantités min/max** (WORMINQTY, WORMAXQTY)
   - Pour optimiser les tailles de lots

### Postes de charge (TABWRKCTR)

1. **Définir les capacités**
   - Capacité théorique
   - Calendrier de travail
   - Variations de capacité (CAPVAR)

2. **Définir les coûts**
   - Coût horaire machine
   - Coût horaire main d'œuvre
   - Section de valorisation (WORKCOST)

3. **Gérer les remplacements** (RPLWST)
   - Postes de charge alternatifs
   - En cas de panne ou maintenance

---

## 🎓 Bonnes pratiques

### Création d'OF

1. **Utiliser le calcul des besoins (CBN)** pour générer les OF prévisionnels
2. **Valider progressivement** : Simulée → Ferme → Lancée
3. **Vérifier les allocations** avant lancement (ALLSTA)
4. **Jalonner les OF** pour optimiser les dates (SCDFLG)

### Suivi de production

1. **Utiliser les transactions d'atelier** (MFGTRS) pour traçabilité
2. **Déclarer régulièrement** la production (quotidien recommandé)
3. **Suivre les consommations réelles** vs prévisions
4. **Monitorer les retards** et réajuster le jalonnement

### Clôture

1. **Ne clôturer que les OF terminés** (CPLQTY = EXTQTY ou soldé admin)
2. **Vérifier les coûts** avant clôture comptable
3. **Archiver les OF anciens** pour performance
4. **Conserver l'historique** dans MFGHEADTRK

---

[◄ Retour à l'INDEX](./INDEX.md)

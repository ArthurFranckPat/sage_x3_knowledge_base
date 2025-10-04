# Module Achats - Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📋 Vue d'ensemble

Le **Module Achats** gère l'ensemble du cycle d'approvisionnement, depuis l'expression du besoin jusqu'à la réception des marchandises et la facturation fournisseur. Il comprend **66 tables** couvrant les demandes d'achat, les appels d'offres, les commandes fournisseurs, les réceptions, les retours et la sous-traitance.

### Processus couverts

1. **Demandes d'achat (DA)** : Expression et validation des besoins
2. **Appels d'offres** : Consultation et comparaison des fournisseurs
3. **Commandes fournisseurs** : Passation et suivi des commandes
4. **Réceptions** : Contrôle et entrée en stock des marchandises
5. **Factures fournisseurs** : Contrôle et rapprochement 3 points
6. **Retours fournisseurs** : Gestion des non-conformités
7. **Sous-traitance** : Ordres de sous-traitance industrielle
8. **Expéditions et transport** : Gestion logistique des flux

---

## 📊 Statistiques

- **Nombre total de tables** : 66
- **Codes d'activité** : PPR, DEB, STS, WRH, KAG, ANA, MMS
- **Tables principales** : PORDER, PRECEIPT, PREQUIS, PINVOICED
- **Tables transactionnelles** : 70% des tables

---

## 🔑 Table PORDER - Commandes d'achat

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | PORDER |
| **Abréviation** | POH |
| **Intitulé** | Commandes d'achat |
| **Module** | Achats |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| POH0 | POHNUM | Non |
| POH1 | BPSNUM+ORDDAT+POHNUM | Non |
| POH2 | ORDDAT+POHNUM | Non |

### Colonnes détaillées

#### Identification et références
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| POHNUM | No commande | VCR | | | |
| ORDREF | Référence interne | A | 20 | | |
| ORDDAT | Date commande | D | | | |
| SINUM | No pièce Intégrale | A | 10 | | SMI |
| EXPNUM | Numéro Export | L | 8 | | |

#### Fournisseurs et adresses
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPSNUM | Fournisseur | BPR | | →BPARTNER | |
| BPSINV | Tiers facturant | BPR | | →BPARTNER | |
| BPRPAY | Tiers payé | BPR | | →BPARTNER | |
| BPAADD | Adresse | ADR | | | |
| BPAINV | Adresse facture | ADR | | | |
| BPAPAY | Adresse tiers payé | ADR | | | |
| BPOADD | Adresse expéditeur | ADR | | | |
| BPOADDLIG | Ligne adresse | ADL | | | |
| BPONAM | Raison sociale | NAM | | | |
| BPOCRY | Pays | CRY | | →TABCOUNTRY | |
| BPOCRYNAM | Nom pays | NCY | | | |
| BPOCTY | Ville | CTY | | | |
| BPOPOSCOD | Code postal | POS | | | |
| BPOSAT | Etat | SAT | | | |
| BPRNAM | Raison sociale | NAM | | | |

#### Organisation et sites
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CPY | Société | CPY | | →COMPANY | |
| POHFCY | Site commande | FCY | | →FACILITY | |
| RCPFCY | Site réception | FCY | | →FACILITY | |
| INVFCY | Site facturation | FCY | | →FACILITY | |
| SALFCY | Site vente | FCY | | →FACILITY | |
| STOFCY | Site expédition | FCY | | →FACILITY | |
| ORIFCY | Site origine | FCY | | →FACILITY | |
| BETFCY | Inter-site | M | 4 | | |
| BETCPY | Inter-sociétés | M | 4 | | |

#### Devises et taux
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CUR | Devise | CUR | | →TABCUR | |
| CHGCOE | Cours | RCU | | | |
| CHGTYP | Type cours | M | 15 | | |

#### Montants et totaux
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TOTORD | Total HT commande | MD1 | | | |
| TOTORDL | Total HT devise soc | MD1 | | | |
| TTVORD | Total TTC commande | MD1 | | | |
| TTVORDL | Total TTC devise soc | MD1 | | | |
| TOTLINAMT | Total HT lignes | MD1 | | | |
| TOTLINATI | Total TTC lignes | MD1 | | | |
| TOTLINQTY | Total qtés lignes | DCB | 11.6 | | |
| TOTLINWEU | Total poids lignes | QTY | | | |
| TOTLINVOU | Total volumes lignes | QTY | | | |
| TOTTAXAMT | Total taxes | MD1 | | | |
| ORDMAXAMT | Mt maxi commande | MD1 | | | |
| TOTVLT | Total HT prévu | MD1 | | | |

#### Statuts et compteurs
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CLEFLG | Soldée | M | 4 | | |
| RCPFLG | Reçue | M | 15 | | |
| INVFLG | Facturée | M | 15 | | |
| APPFLG | Signée | M | 15 | | |
| PRNFLG | Imprimée | M | 4 | | |
| LINNBR | Nombre lignes | C | 4 | | |
| CLELINNBR | Nb lignes soldées | C | 4 | | |
| RCPLINNBR | Nb lig réceptionnées | C | 4 | | |
| INVLINNBR | Nb lignes facturées | C | 4 | | |
| FBULINNBR | Nb lig hors budget | C | 4 | | |
| RCPNBR | Nombre réceptions | L | 8 | | |
| INVNBR | Nombre factures | L | 8 | | |

#### Type et catégorie
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| POHTYP | Type commande | M | 20 | | |
| PURTYP | Type achat | M | 15 | | |
| SOHCAT | Catégorie commande | M | 15 | | |

#### Dates de validité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| STRDAT | Date début validité | D | | | |
| ENDDAT | Date fin validité | D | | | |
| EXTRCPDAT1 | Date récept prévue | D | | | |

#### Livraison et transport
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| MDL | Mode livraison | MDL | | →TABMODELIV | |
| BPTNUM | Transporteur | BPT | | →BPCARRIER | |
| FFWNUM | Transitaire | BPT | | →BPCARRIER | |
| FFWADD | Adresse transitaire | ADR | | | |
| DME | Livraison partielle | M | 15 | | |
| EECICT | Incoterm | ICT | | →INCOTERM | |
| ICTCTY | Ville Incoterm | CTY | | | |

#### Conditions commerciales
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PTE | Condition paiement | PTE | | →TABPAYTERM | |
| DEP | Escompte | TDA | | →TABDEPAGIO | |
| DISCRGTYP | Type de remise/frais | M | 10 | | PPR |

#### Éléments de pied (PPR)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| INVDTALIN1 | Elt fact lig tarif | PFI | | →PFOOTINV | PPR |
| INVDTALIN2 | Elt fact lig répart | PFI | | →PFOOTINV | |
| INVDTAVAT1 | Taxe lig tarif | VAT | | →TABVAT | PPR |
| INVDTAVAT2 | Taxe lig répart | VAT | | →TABVAT | |

#### Taxes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VACBPR | Régime taxe | TVB | | →TABVACBPR | |
| VACTYP | Type de régime taxe | C | 1 | | |

#### DEB (Déclaration d'échanges de biens)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| EECICT | Incoterm | ICT | | →INCOTERM | |
| EECLOC | Lieu transport DEB | M | 15 | | DEB |
| EECNUM | Identification UE | A | 20 | | DEB |

#### Analytique
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DIE | Code axe | DIE | | →GDIE | ANA |
| CCE | Section | CCE | | →CACCE | ANA |
| PJTH | Affaire | PJT | | →PIMPL | |

#### Acheteur et relances
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BUY | Acheteur | AUS | | →AUTILIS | |
| FUPFLG | Relance livraisons | M | 4 | | |

#### Conteneurs et regroupement
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TCTRNUM | Contenant | TCTR | | →TABCONTAINER | |
| TCTRQTY | Nb contenants | C | 4 | | |
| GPGCOD | Code regroupement | A | 20 | | |

#### Poids et volumes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VOLCAP | Volume | QTY | | | |
| WEICAP | Poids | QTY | | | |
| DSPVOU | Unité Volume | UOM | | →TABUNIT | |
| DSPWEU | Unité poids | UOM | | →TABUNIT | |

#### Accusé de réception (OCN)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| OCNFLG | Relance ARC | M | 4 | | |
| OCNNUM | Numéro ARC | A | 20 | | |
| OCNDAT | Date ARC | D | | | |
| OCNREM | Observations ARC | A | 150 | | |

#### Textes et documents
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TEX1 | Texte | TXC | | | |
| TEX2 | Texte | TXC | | | |

#### Statistiques
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TSSCOD | Famille statistique | ADI | | →ATABDIV | STS |

#### Lien client
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPCORD | Client commande | BPR | | →BPARTNER | |

#### Adresses détails (suite)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CRY | Pays | CRY | | →TABCOUNTRY | |
| CRYNAM | Nom pays | NCY | | | |
| CTY | Ville | CTY | | | |
| POSCOD | Code postal | POS | | | |
| SAT | Etat | SAT | | | |

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

## 🔑 Table PRECEIPT - Réceptions

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | PRECEIPT |
| **Abréviation** | PTH |
| **Intitulé** | Réception |
| **Module** | Achats |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes | Act |
|-----|-------------|-----------|-----|
| PTH0 | PTHNUM | Non | |
| PTH1 | BPSNDE | Oui | |
| PTH2 | BPSNUM+RCPDAT | Oui | |
| PTH3 | RCPDAT+PTHNUM | Non | |
| PTH4 | CPY+EECNUMDEB+RCPDAT | Oui | DEB |

### Colonnes principales (sélection)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PTHNUM | No réception | VCR | | | |
| RCPDAT | Date réception | D | | | |
| ARVDAT | Date arrivée | D | | | |
| NDEDAT | Date Bon livraison | D | | | |
| BPSNUM | Fournisseur | BPR | | →BPARTNER | |
| BPSNDE | No Bl fournisseur | A | 20 | | |
| BPSINV | Fourn facturant | BPR | | →BPARTNER | |
| BPRPAY | Tiers payé | BPR | | →BPARTNER | |
| PRHFCY | Site réception | FCY | | →FACILITY | |
| CPY | Société | CPY | | →COMPANY | |
| CUR | Devise | CUR | | →TABCUR | |
| INVFLG | Facturée | M | 15 | | |
| PSTFLG | Comptabilisée | M | 4 | | |
| PRNFLG | Imprimée | M | 4 | | |
| LINNBR | Nombre lignes | C | 4 | | |
| INVLINNBR | Nb lig total fact | C | 4 | | |
| INVLINCTR | Nb lignes facturées | C | 4 | | |
| PSTLINNBR | Nb lignes compta | C | 4 | | |
| TOTLINAMT | Total HT lignes | MD1 | | | |
| TOTAMTNOT | Total HT | MD1 | | | |
| TOTAMTATI | Total TTC | MD1 | | | |
| TOTTAXAMT | Total taxes | MD1 | | | |
| ENTCOD | Code pièce auto | GAU | | →GAUTACE | |
| TRSCOD | Code mouvement | ADI | | →ATABDIV | |
| PJTH | Affaire | PJT | | →PIMPL | |
| WRHE | Dépôt | WRH | | →WAREHOUSE | WRH |

> **Note** : PRECEIPT contient plus de 100 colonnes similaires à PORDER pour adresses, transport, DEB, etc.

---

## 🔑 Table PREQUIS - Demandes d'achat

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | PREQUIS |
| **Abréviation** | PSH |
| **Intitulé** | Demandes d'achat |
| **Module** | Achats |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes | Act |
|-----|-------------|-----------|-----|
| PSH0 | PSHNUM | Non | |
| PSH1 | PSHFCY+PSHNUM | Non | |
| PSH2 | PRQDAT+PSHNUM | Non | |
| PSH3 | PSHNUMMMS+PSHNUM | Non | MMS |

### Colonnes détaillées
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PSHNUM | No demande | VCR | | | |
| PRQDAT | Date demande | D | | | |
| PSHFCY | Site demande | FCY | | →FACILITY | |
| CPY | Société | CPY | | →COMPANY | |
| REQUSR | Demandeur | AUS | | →AUTILIS | |
| APPFLG | Signée | M | 15 | | |
| CLEFLG | Soldée | M | 4 | | |
| ORDFLG | Commandée | M | 4 | | |
| PRNFLG | Imprimée | M | 4 | | |
| LINNBR | Nombre lignes | C | 4 | | |
| CLELINNBR | Nb lignes soldées | C | 4 | | |
| ORDLINNBR | Nb lignes commandées | C | 4 | | |
| APPLINNBR | Nb lignes signées | C | 4 | | |
| FBULINNBR | Nb lig hors budget | C | 4 | | |
| TOTPRQ | Total demande HT | MD1 | | | |
| DIE | Code axe | DIE | | →GDIE | ANA |
| CCE | Section analytique | CCE | | →CACCE | ANA |
| PJTH | Affaire | PJT | | →PIMPL | |
| PSHNUMMMS | No maintenance | A | 15 | | |
| MMSURL | URL maintenance | A | 250 | | |
| ATECORI | Origine | M | 15 | | |
| TEX1 | Texte | TXC | | | |
| TEX2 | Texte | TXC | | | |
| EXPNUM | Numéro export | L | 8 | | |
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 📑 Liste complète des tables

### Demandes d'achat (Purchase Requisition)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PREQUIS | PSH | Demandes d'achat | |
| PREQUISD | PSD | Demandes d'achat Détail | |
| PREQUISA | PSA | Demandes d'achat Lien | |
| PREQUISO | PSO | Demandes d'achat Lien | |

### Appels d'offres (RFQ - Request For Quotation)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PQUOTAT | PQH | Appels d'offres | |
| PQUOTATD | PQD | Appels d'offre Détail article | |
| PQUOTATF | PQF | Appels d'offre detail fourn | |
| PRESP | PPH | Réponses appels d'offre | |
| PRESPD | PPD | Réponses appels d'offre Détail | |

### Commandes d'achat (Purchase Order)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PORDER | POH | Commandes d'achat | |
| PORDERP | POP | Commandes d'achat Prix | |
| PORDERQ | POQ | Commandes d'achat quantités | |
| PORDERC | POC | Commandes d'achat cumul av-ret | |
| PORDITM | POI | Commandes d'achat par article | |
| BITMPPORDERP | BIPOP | Commandes d'achat Prix | |
| BITMPPORDERQ | BIPOQ | Commandes d'achat quantités | |

### Réceptions (Purchase Receipt)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PRECEIPT | PTH | Réception | |
| PRECEIPTD | PTD | Réceptions Détail | |
| PWRKPTH | PWH | Réception temporaire | |
| PWRKPTD | PWD | Réceptions Détail temporaire | |

### Retours fournisseurs

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PRETURN | PNH | Retours | |
| PRETURND | PND | Retours Détail | |
| PWRKPNH | PWE | Retour temporaire | |
| PWRKPND | PWR | Détail ligne retour temporaire | |

### Factures fournisseurs (Purchase Invoice)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PINVOICED | PID | Factures d'achat détail | |
| PINVOICEV | PIV | Factures d'achat valorisation | |

### Sous-traitance (Subcontracting)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SCOHEAD | SCO | Ordre de sous-traitance | |
| SCOITM | SCI | Ordre de sous-traitance | |
| SCOMAT | SCM | Ordre sous-traitance Matières | |
| SCOSRV | SCS | Ordre sous-traitance Service | |
| SCOTRK | SCK | Suivi de sous-traitance | |
| PWRKSTT | PWS | Sous-traitance | |

### Transport et expéditions

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SHIPMENT | SHH | Expédition | |
| SHIPMENTD | SHD | Expédition détail | |
| SHIPDOC | SHIPD | Documents expédition | |
| SHIPTRACK | SHIPT | Suivi logistique expédition | |
| TRANSPORT | TRNP | Transport | |
| EVENTTRNP | EVT | Transport incident | |
| CONTAINER | CTRH | Conteneur fret | |
| CONTAINERD | CTRD | Conteneur fret détail | |

### Tarifs et prix

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PPRICLINK | PPK | Recherche tarifs achat (link) | |
| PPRIVARWRK | PPV | Etat écart prix achat | |

### Coûts et rapprochements

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| COSTSTCD | STCD | Structure de coûts - documents | |
| COSTSTCR | STCR | Rapprochement charges | |
| MATCHTOL | MAT | Règle rapprochement | |

### Éléments de pied et taxes

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PVCRFOOT | PVF | Document achats - Elt pied | |
| PVCRVAT | PVV | Document achats - Taxes | |

### Historiques

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| UPORDER | UOH | Histo. commandes d'achat | |
| UPORDERC | UOC | Histo. cdes achat cumul av-ret | |
| UPORDERP | UOP | Histo. cdes d'achat Prix | |
| UPORDERQ | UOQ | Histo. cdes d'achat qtés | |

### Tables de travail (Temporaires)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PWRKORDERS | PWO | Besoins pris en compte | |
| PWRKPOC | PWC | Article-contrat temporaire | |
| PWRKPOP | PWP | Article-contrat temporaire | |
| PWRKPOQ | PWQ | Détail commande temporaire | |
| PWRKPQF | PWF | AOF ADR Fournis. temporaire | |
| WRKPURFCS | WPF | Etat charges achats | |
| TMPPRPT | TPRPT | Table temporaire impression | |

### Transactions et régularisations

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PURTRS | PTR | Transaction de saisie achats | |
| PTDSTKVAL | PSV | Régularisation | |

### Wipcost

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PARWIPACCS | SWA | Paramètre Wipcost-Interface | |

---

## 🔗 Relations principales

### PREQUIS → PORDER

**Demande d'achat → Commande** (N → N)
- **PREQUISD** : Lignes de demande d'achat
- Transformation des DA approuvées en commandes
- Liaison via tables temporaires et workflow d'approvisionnement

### PORDER → Tables associées

**Lignes de commandes** (1 → N)
- **PORDERQ** : Quantités et références articles
  - POHNUM → POHNUM
  - Contient ITMREF, EXTQTY, RCPQTY, INVQTY
- **PORDERP** : Prix et valorisations
  - POHNUM → POHNUM
  - Contient prix unitaires, remises, montants
- **PORDERC** : Cumuls d'avancement
  - POHNUM → POHNUM
  - Contient quantités reçues, facturées, restantes

**Réceptions** (1 → N)
- **PRECEIPT** : Réceptions de marchandises
  - Lien via PORDERQ (commande d'origine)
- **PRECEIPTD** : Lignes de réception
  - Contient quantités reçues, lots, contrôles qualité

**Factures** (1 → N)
- **PINVOICED** : Lignes de facture fournisseur
  - Lien avec PORDER et PRECEIPT
- **PINVOICEV** : Valorisation des factures
  - Rapprochement 3 points : Commande/Réception/Facture

### PORDER → Données de base

- **BPARTNER** : Fournisseur (N → 1)
- **ITMMASTER** : Articles commandés via PORDERQ (N → N)
- **FACILITY** : Sites commande, réception, facture (N → 1)
- **COMPANY** : Société acheteuse (N → 1)

### PORDER → Comptabilité

- **GACCOUNT** : Comptes d'imputation
- **CACCE** : Sections analytiques
- Génération d'écritures lors de la réception (engagement) et facturation

---

## 🔄 Cycle de vie d'une Commande d'achat

### 1. Demande d'achat
```
Table : PREQUIS
- Création par demandeur
- APPFLG = Non (non signée)
- Validation/Signature
- APPFLG = Oui
- Transformation en commande
```

### 2. Appel d'offres (optionnel)
```
Table : PQUOTAT, PRESP
- Consultation fournisseurs
- Collecte des réponses
- Analyse comparative
- Sélection du fournisseur
```

### 3. Création de commande
```
Table : PORDER
- CLEFLG = Non (non soldée)
- RCPFLG = Non (non reçue)
- INVFLG = Non (non facturée)
- Validation et envoi fournisseur
- PRNFLG = Oui (imprimée)
```

### 4. Réception des marchandises
```
Table : PRECEIPT
- Contrôle quantitatif et qualitatif
- Mise à jour PORDERQ (RCPQTY)
- Mise à jour PORDERC (cumuls)
- Entrée en stock via STOCK
- PORDER.RCPFLG = Partiellement reçue ou Reçue
```

### 5. Facturation
```
Table : PINVOICED
- Réception facture fournisseur
- Rapprochement 3 points :
  * Commande (PORDER)
  * Réception (PRECEIPT)
  * Facture (PINVOICED)
- Tolérance de rapprochement (MATCHTOL)
- Mise à jour PORDERQ (INVQTY)
- PORDER.INVFLG = Partiellement facturée ou Facturée
```

### 6. Clôture
```
- Toutes les lignes réceptionnées et facturées
- PORDER.CLEFLG = Oui
- Archivage dans UPORDER
```

---

## 📊 Statuts des Commandes (flags)

### CLEFLG - Statut de solde
| Valeur | Description |
|--------|-------------|
| **Non** | Commande ouverte |
| **Oui** | Commande soldée |

### RCPFLG - Statut de réception
| Valeur | Description |
|--------|-------------|
| **Non** | Non reçue |
| **Partiellement reçue** | Réceptions partielles |
| **Reçue** | Totalement reçue |

### INVFLG - Statut de facturation
| Valeur | Description |
|--------|-------------|
| **Non** | Non facturée |
| **Partiellement facturée** | Factures partielles |
| **Facturée** | Totalement facturée |

### APPFLG - Statut de signature
| Valeur | Description |
|--------|-------------|
| **Non** | Non signée |
| **Partiellement signée** | Validation partielle |
| **Signée** | Totalement validée |

---

## 💡 Cas d'usage courants

### 1. Commandes en attente de réception
```sql
SELECT POHNUM, BPSNUM, ORDDAT, TOTORD, RCPFLG
FROM PORDER
WHERE RCPFLG IN ('Non', 'Partiellement reçue')
  AND CLEFLG = 'Non'
  AND ORDDAT >= '2024-01-01'
ORDER BY ORDDAT
```

### 2. Écart Commande/Réception
```sql
SELECT 
  PQ.POHNUM,
  PQ.ITMREF,
  PQ.EXTQTY AS QteCommandee,
  PQ.RCPQTY AS QteRecue,
  (PQ.EXTQTY - PQ.RCPQTY) AS EcartQte
FROM PORDERQ PQ
  INNER JOIN PORDER PO ON PQ.POHNUM = PO.POHNUM
WHERE PQ.EXTQTY <> PQ.RCPQTY
  AND PO.CLEFLG = 'Non'
```

### 3. Rapprochement 3 points
```sql
SELECT 
  PO.POHNUM,
  PQ.ITMREF,
  PQ.EXTQTY AS QteCmd,
  PQ.RCPQTY AS QteRecu,
  PQ.INVQTY AS QteFacturee,
  PP.NETPRI AS PrixCmd,
  PI.NETPRI AS PrixFacture,
  (PI.NETPRI - PP.NETPRI) AS EcartPrix
FROM PORDER PO
  INNER JOIN PORDERQ PQ ON PO.POHNUM = PQ.POHNUM
  INNER JOIN PORDERP PP ON PQ.POHNUM = PP.POHNUM AND PQ.POPLIN = PP.POPLIN
  INNER JOIN PINVOICED PI ON PQ.POHNUM = PI.POHNUM AND PQ.POPLIN = PI.POPLIN
WHERE ABS(PI.NETPRI - PP.NETPRI) > 0.01
```

### 4. Délai de livraison moyen par fournisseur
```sql
SELECT 
  PO.BPSNUM,
  AVG(DATEDIFF(day, PO.ORDDAT, PT.RCPDAT)) AS DelaiMoyenJours,
  COUNT(DISTINCT PT.PTHNUM) AS NbReceptions
FROM PORDER PO
  INNER JOIN PRECEIPT PT ON PO.BPSNUM = PT.BPSNUM
WHERE PT.RCPDAT >= '2024-01-01'
GROUP BY PO.BPSNUM
ORDER BY DelaiMoyenJours
```

### 5. Commandes sans réception depuis 30 jours
```sql
SELECT POHNUM, BPSNUM, ORDDAT, TOTORD
FROM PORDER
WHERE RCPFLG = 'Non'
  AND CLEFLG = 'Non'
  AND ORDDAT < DATEADD(day, -30, GETDATE())
ORDER BY ORDDAT
```

---

## ⚠️ Points d'attention

### Performance

1. **Index critiques** :
   - PORDER : POHNUM (clé primaire), BPSNUM+ORDDAT+POHNUM, ORDDAT+POHNUM
   - PORDERQ : POHNUM+POPLIN pour jointures
   - PRECEIPT : PTHNUM, BPSNUM+RCPDAT, RCPDAT+PTHNUM

2. **Volumétrie** :
   - PORDERQ/PORDERP/PORDERC : Très volumineuses (autant de lignes que d'articles commandés)
   - PRECEIPTD : Volume important sur les sites à fort flux de réception
   - PINVOICED : Historique de toutes les factures

3. **Archivage** :
   - Archiver les commandes anciennes dans UPORDER
   - Supprimer les tables temporaires PWRK* régulièrement

### Intégrité des données

1. **Cohérence des quantités** :
   - PORDERQ.EXTQTY = RCPQTY + RETQTY + RMNQTY
   - PORDERQ.INVQTY ≤ RCPQTY (on ne peut facturer plus que ce qui est reçu)

2. **Rapprochement 3 points** :
   - Vérifier les règles de tolérance (MATCHTOL)
   - Contrôler les écarts prix entre commande et facture
   - Valider les écarts de quantité

3. **Statuts cohérents** :
   - Si RCPLINNBR = LINNBR → RCPFLG = 'Reçue'
   - Si INVLINNBR = LINNBR → INVFLG = 'Facturée'
   - Si RCPFLG = 'Reçue' ET INVFLG = 'Facturée' → Peut être soldée

### Codes d'activité

| Code | Description |
|------|-------------|
| **PPR** | Structure de prix achats (éléments de pied) |
| **DEB** | Déclarations d'échanges de biens |
| **STS** | Statistiques achats |
| **WRH** | Gestion d'entrepôt / dépôts |
| **KAG** | Législation Argentine |
| **ANA** | Analytique |
| **MMS** | Lien avec GMAO (Maintenance) |

---

## 🎓 Bonnes pratiques

### Création de commandes

1. **Partir des demandes d'achat validées** pour traçabilité
2. **Regrouper par fournisseur** pour optimiser les frais de port
3. **Vérifier les budgets** avant validation (FBULINNBR)
4. **Renseigner les dates de livraison** souhaitées
5. **Préciser les conditions** de paiement et escomptes

### Réception

1. **Contrôler systématiquement** :
   - Quantité vs commande
   - Qualité des produits
   - Conformité des références

2. **Gérer les écarts** :
   - Sur-livraison : Créer un avoir ou accepter
   - Sous-livraison : Relancer fournisseur ou solder
   - Non-conformité : Créer un retour (PRETURN)

3. **Tracer les lots** pour traçabilité
4. **Saisir rapidement** pour mise à jour du stock

### Facturation

1. **Rapprocher 3 points** :
   - Commande → Référence et prix
   - Réception → Quantité reçue
   - Facture → Montant facturé

2. **Respecter les tolérances** (MATCHTOL) :
   - Prix : ±X%
   - Quantité : ±Y unités
   - Montant total : ±Z€

3. **Bloquer les factures** en cas d'écart important
4. **Valider avant comptabilisation**

### Clôture

1. **Ne solder que les commandes terminées** :
   - Toutes les lignes réceptionnées OU
   - Reliquat accepté avec accord fournisseur

2. **Vérifier la facturation** :
   - Toutes les réceptions facturées
   - Pas d'écart en attente

3. **Documenter les soldés partiels** (TEX1, TEX2)

---

## 📈 Indicateurs de performance (KPI)

### Délai de livraison
```sql
SELECT 
  YEAR(PT.RCPDAT) AS Annee,
  MONTH(PT.RCPDAT) AS Mois,
  AVG(DATEDIFF(day, PO.ORDDAT, PT.RCPDAT)) AS DelaiMoyen,
  MIN(DATEDIFF(day, PO.ORDDAT, PT.RCPDAT)) AS DelaiMin,
  MAX(DATEDIFF(day, PO.ORDDAT, PT.RCPDAT)) AS DelaiMax
FROM PRECEIPT PT
  INNER JOIN PORDER PO ON PT.BPSNUM = PO.BPSNUM
WHERE PT.RCPDAT >= '2024-01-01'
GROUP BY YEAR(PT.RCPDAT), MONTH(PT.RCPDAT)
ORDER BY Annee, Mois
```

### Taux de service fournisseur
```sql
SELECT 
  PO.BPSNUM,
  COUNT(CASE WHEN PQ.EXTQTY = PQ.RCPQTY THEN 1 END) * 100.0 / COUNT(*) AS TauxService
FROM PORDER PO
  INNER JOIN PORDERQ PQ ON PO.POHNUM = PQ.POHNUM
WHERE PO.ORDDAT >= '2024-01-01'
  AND PO.RCPFLG IN ('Reçue', 'Partiellement reçue')
GROUP BY PO.BPSNUM
HAVING COUNT(*) > 10
ORDER BY TauxService DESC
```

### Analyse des écarts de prix
```sql
SELECT 
  PI.ITMREF,
  COUNT(*) AS NbEcarts,
  AVG(PI.NETPRI - PP.NETPRI) AS EcartMoyen,
  SUM(PI.NETPRI - PP.NETPRI) AS EcartTotal
FROM PINVOICED PI
  INNER JOIN PORDERP PP ON PI.POHNUM = PP.POHNUM AND PI.POPLIN = PP.POPLIN
WHERE PI.NETPRI <> PP.NETPRI
  AND PI.INVDAT >= '2024-01-01'
GROUP BY PI.ITMREF
ORDER BY ABS(SUM(PI.NETPRI - PP.NETPRI)) DESC
```

---

## 🔧 Paramétrage recommandé

### Règles de rapprochement (MATCHTOL)

1. **Tolérance sur prix** :
   - ±2% pour produits standards
   - ±5% pour produits à cours variable
   - 0% pour immobilisations

2. **Tolérance sur quantité** :
   - ±5 unités pour petites quantités
   - ±2% pour grandes quantités

3. **Tolérance sur montant total** :
   - ±100€ pour petites commandes
   - ±1% pour grandes commandes

### Types d'achat (PURTYP)

- **Standard** : Achat normal
- **Import** : Achat à l'international
- **Stock** : Réapprovisionnement stock
- **Direct** : Achat direct pour vente/production
- **Investissement** : Immobilisations

### Workflow d'approbation

1. **Seuils de validation** :
   - < 500€ : Validation automatique
   - 500€ - 5000€ : Acheteur
   - 5000€ - 50000€ : Chef de service
   - > 50000€ : Direction

2. **Validation par budget** :
   - Vérifier la disponibilité budgétaire
   - Bloquer si hors budget (FBULINNBR)

---

[◄ Retour à l'INDEX](./INDEX.md)

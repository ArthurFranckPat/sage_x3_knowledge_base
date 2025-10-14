# Module Données de base - Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📋 Vue d'ensemble

Le **Module Données de base** est le module fondamental de Sage X3 contenant l'ensemble des données de référence utilisées par tous les autres modules. Il regroupe plus de **300 tables** organisées en plusieurs catégories.

### Catégories principales

1. **Tiers (Business Partners)**
   - Clients, Fournisseurs, Transporteurs
   - Adresses et contacts
   - Catégories et exceptions

2. **Articles et Nomenclatures**
   - Fiches articles
   - Nomenclatures et composants
   - Catégories et statuts

3. **Analytique et Comptabilité**
   - Plan comptable général et auxiliaire
   - Axes et sections analytiques
   - Répartitions

4. **Structure organisationnelle**
   - Sites et sociétés
   - Groupes et périmètres
   - Paramétrage inter-sites

5. **Ressources Humaines**
   - Salariés et compétences
   - Calendriers
   - Organigrammes

6. **Paramétrage général**
   - Pays, devises, langues
   - Unités de mesure
   - Jours fériés

7. **Gestion du changement (CCM)**
   - Demandes de changement
   - Analyse d'impact
   - Plans d'action

---

## 📊 Statistiques

- **Nombre total de tables** : 300+
- **Codes d'activité** : CCM, FHRPA, PRH, CFG, FOA, EORI, DEB
- **Tables principales** : BPARTNER, ITMMASTER, BOM, EMPLOYEE, GACCOUNT

---

## 🔑 Table BPARTNER - Business Partner

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | BPARTNER |
| **Abréviation** | BPR |
| **Intitulé** | Business Partner |
| **Module** | Données de base |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| BPR0 | BPRNUM | Non |
| BPR1 | BPRSHO | Oui |
| BPR2 | BETFCY+FCY+BPRNUM | Non |

### Colonnes détaillées
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ACCCOD | Code comptable | CAC | | →GACCCODE | |
| ACCNONREI | Compte non résident | ADR | | | |
| ACS | Code d'accès états | ACS | | →ACCCOD | |
| AUUID | Identifiant unique | AUUID | | | |
| BETFCY | Inter-site | M | 4 | | |
| BIDCRY | Pays cpte bancaire | CRY | | →TABCOUNTRY | |
| BIDNUM | Données banc. défaut | BID | | | |
| BPAADD | Adresse par défaut | ADR | | | |
| BPCFLG | Client | M | 4 | | |
| BPPFLG | Secteur public | M | 4 | | MAXPD |
| BPRACC | Tiers divers | M | 4 | | |
| BPRFBDMAG | Interdit mailing | M | 4 | | |
| BPRFLG | divers | M | 4 | | |
| BPRGTETYP | Type de pièce | GTE | | →GTYPACCENT | |
| BPRLOG | Sigle | A | 10 | | |
| BPRNAM | Raison sociale | NAM | | | |
| BPRNUM | Tiers | BPR | | →BPARTNER | |
| BPRSHO | Intitulé court | SHO | | | |
| BPSFLG | Fournisseur | M | 4 | | |
| BPTFLG | Transporteur | M | 4 | | |
| BRGCOD | Catégorie | BCG | | →BPCCATEG | BSRA |
| BRGOBJ | Catég client/fourn | A | 3 | | |
| CCNFLG | Concédant | M | 4 | | CCN |
| CFOEXD | Hors prévisions | M | 4 | | CFOM |
| CNTNAM | Contact par defaut | NAM | | | |
| CPYREL | Société associée | M | 15 | | PBDPO |
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| CRN | Numéro SIRET | CRT | | | |
| CRY | Pays | CRY | | →TABCOUNTRY | |
| CSLBPR | Partenaire | BPR | | →BPARTNER | PRCSL |
| CUR | Devise | CUR | | →TABCUR | |
| DOCTYP | Type document | M | 4 | | KSP |
| DOOFLG | Donneur d'ordre | M | 4 | | |
| EECNUM | N° TVA intraco | A | 20 | | DEB |
| ENAFLG | Actif | M | 4 | | |
| EORINUM | Numéro EORI | A | 35 | | EORI |
| EXPNUM | Numéro export | L | 8 | | |
| FCTFLG | Factor | M | 4 | | |
| FCY | Site | FCY | | →FACILITY | |
| FISCOD | Code fiscal | A | 20 | | KIT |
| GRUCOD | Consolidation | A | 10 | | CSL |
| GRUGPY | Périmètre de conso | A | 5 | | |
| LAN | Langue | LAN | | →TABLAN | |
| LEGETT | Personne physique | M | 4 | | |
| MODPAM | Règlement CFONB | ADI | | →ATABDIV | |
| NAF | Code NAF | NAF | | | KFR |
| PPTFLG | Prospect | M | 4 | | |
| PRVFLG | Prestataire | M | 4 | | |
| PTHFLG | Récepteur | C | 4 | | KAG |
| REGNUM | Numéro immatriculation | A | 14 | | KZA |
| REPFLG | Représentant | M | 4 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| VATNO | Numéro TVA | A | 10 | | KZA |
| VATNUM | Partita IVA | A | 15 | | KIT |

---

## 🔑 Table ITMMASTER - Articles

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | ITMMASTER |
| **Abréviation** | ITM |
| **Intitulé** | Articles |
| **Module** | Données de base |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes | Act |
|-----|-------------|-----------|-----|
| ITM0 | ITMREF | Non | |
| ITM1 | ITMDES1 | Oui | |
| ITM2 | SEAKEY+ITMREF | Non | |
| ITM3 | CFGLIN+ITMREF | Non | |
| ITM4 | CFGVCRNUM+ITMREF | Non | CFG |
| ITM5 | PLMITMREF+ITMREF | Non | PLM |

### Colonnes principales (sélection)
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ACCCOD | Code comptable | CAC | | →GACCCODE | |
| ITMREF | Article | ITM | | →ITMMASTER | |
| ITMDES1 | Désignation 1 | DES | | | |
| ITMDES2 | Désignation 2 | DES | | | |
| ITMDES3 | Désignation 3 | DES | | | |
| TCLCOD | Catégorie | ITG | | →ITMCATEG | |
| ITMSTA | Statut article | M | 15 | | |
| SALFLG | Vendu | M | 4 | | |
| PURFLG | Acheté | M | 4 | | |
| MFGFLG | Fabriqué | M | 4 | | |
| PHAFLG | Fantôme | M | 4 | | |
| INTFLG | Intermédiaire | M | 4 | | |
| STU | Unité stock | UOM | | →TABUNIT | |
| SAU | Unité vente | UOM | | →TABUNIT | |
| PUU | Unité achat | UOM | | →TABUNIT | |
| PCU | Conditionnement | UOM | | →TABUNIT | NUC |
| LOTMGTCOD | Gestion lot | M | 15 | | |
| SERMGTCOD | Gestion série | M | 15 | | |
| STOMGTCOD | Gestion stock | M | 15 | | |
| LOTCOU | Compteur lot | ANM | | →ACODNUM | |
| SERCOU | Compteur série | ANM | | →ACODNUM | |
| ITMWEI | Poids de l'US | WEI | | | |
| ITMVOU | Volume de l'US | VOL | | | |
| BUY | Acheteur | AUS | | →AUTILIS | |
| PLANNER | Planificateur | AUS | | →AUTILIS | |
| CPY | Société | CPY | | →COMPANY | |
| CREDAT | Date création | D | | | |
| UPDDAT | Date modification | D | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDUSR | Opérateur modif | A | 5 | | |

> **Note** : La table ITMMASTER contient plus de 200 colonnes. Seules les principales sont listées ici.

---

## 🔑 Table BOM - Nomenclatures

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | BOM |
| **Abréviation** | BOH |
| **Intitulé** | Nomenclatures Entête |
| **Module** | Données de base |

### Clés et index
| Clé | Description | Homonymes |
|-----|-------------|-----------|
| BOH0 | ITMREF+BOMSEQ | Non |
| BOH1 | ITMREF+BOMALT+BOMSEQ | Non |

### Colonnes principales
| Colonne | Intitulé | Type | Long | Lien |
|---------|----------|------|------|------|
| ITMREF | Article | ITM | | →ITMMASTER |
| BOMSEQ | Séquence | C | 4 | |
| BOMALT | Alternative | TBO | | →TABBOMALT |
| ITMDES | Désignation | DES | | |
| BOMSTRDAT | Date début validité | D | | |
| BOMENDDAT | Date fin validité | D | | |
| BOMTYP | Type nomenclature | M | 15 | |
| NBRCMPCOE | Nombre composants | DCB | 6.4 | |
| BOMTEX | Texte nomenclature | TXC | | |
| BOMSTA | Statut | M | 15 | |
| STU | Unité stock | UOM | | →TABUNIT |
| BOMUOM | Unité nomenclature | UOM | | →TABUNIT |
| BOMQTY | Quantité | DCB | 11.6 | |
| FCY | Site | FCY | | →FACILITY |
| CREDAT | Date création | D | | |
| UPDDAT | Date modification | D | | |
| CREUSR | Opérateur création | A | 5 | |
| UPDUSR | Opérateur modif | A | 5 | |

---

## 📑 Liste complète des tables

### Business Partners et Adresses

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BPARTNER | BPR | Business Partner | |
| BPCUSTOMER | BPC | Clients | |
| BPSUPPLIER | BPS | Fournisseurs | |
| BPCARRIER | BPT | Transporteurs | |
| BPMISC | BPM | Donneur d'ordre/Tiers divers | |
| BPDLVCUST | BPD | Clients livrés | |
| BPSHISUPP | BSS | Fournisseurs expéditeurs | |
| BPSHISUPLN | BSL | Adresses d'expéditions | |
| BPADDRESSXT | BPAXT | Adresses | |
| CONTACTXT | CNTXT | Contacts | |
| BPCCATEG | BCG | Catégorie client | |
| BPSCATEG | BSG | Catégorie fournisseur | |
| BPEXCEPT | BPE | Exception tiers-société | MUL |

### Articles

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| ITMMASTER | ITM | Articles | |
| ITMFACILIT | ITF | Articles sites | |
| ITMCATEG | ITC | Catégories articles | |
| ITMSTATUS | ITS | Statuts articles | |
| ITMCUSNOM | INO | Nomenclature douanière | DEB |
| ITMCPTVER | ICV | Compteur version | ECC |

### Nomenclatures

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BOM | BOH | Nomenclatures Entête | |
| BOMD | BOD | Nomenclatures Détail | |
| BOMWUS | BOW | Nomenclatures cas d'emploi | |
| BOMPRN | BOP | Impression Nomenclatures | |
| BOMRET | BMR | Analyse de faisabilité | |
| BOMCREF | BCR | Composant référence | |
| TABBOMALT | TBO | Alternatives nomenclatures | |

### Analytique

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CACCE | CCE | Sections | |
| GDIE | DIE | Axes analytiques | ANA |
| CADIEDEF | CDI | Axes par défaut | |
| CADIETPS | CDT | Axes | FHRPA |
| CADSP | DSP | Répartitions a priori | |
| CAAUZ | CAZ | Table des interdictions | |
| CACCEDEF | CDE | Sections par défaut | |

### Plan comptable

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| GACCOUNT | GAC | Comptes généraux | |
| GSACCOUNT | GSA | Comptes collectifs | |
| GACCCODE | CAC | Codes comptables | |
| GTYPACCENT | GTE | Types de pièces comptables | |

### Sites et Sociétés

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| FACILITY | FCY | Sites | |
| COMPANY | CPY | Sociétés | |
| GRPCPY | GCP | Groupes de sociétés | |
| BETCPY | BCH | Paramétrage inter-sociétés | |
| BETCPYL | BCL | Paramétrage inter-sociétés | |

### Employés et RH

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| EMPLOYEE | EMP | Salariés | |
| COMPETENCE | CPC | Compétences | FHRPA |
| COMPETENCED | CPD | Compétences | FHRPA |
| CPCEMP | CPE | Compétences par salarié | FHRPA |
| CALENDAR | CLD | Calendriers | PRH |
| CALENDAFF | CLF | Affaire vers articles vendus | PRH |

### Banques

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BANK | BAN | Compte en banque | |
| BIDXT | BIDXT | Relevé identité bancaire | |

### Gestion du changement (CCM)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CCMCHGREQ | CCMCR | Demande de changement | CCM |
| CCMACTION | CCMACT | Actions | CCM |
| CCMAPPROVER | CCMAPPR | Approbateurs demande changement | CCM |
| CCMPLANH | CCMPH | En-tête plan dem changement | CCM |
| CCMPLAND | CCMPD | Détail plan demande changement | CCM |
| CCMCRDESC | CCMCRD | Description demande changement | CCM |
| CCMCRNOTES | CCMCRN | Pièces jointes dem changement | CCM |
| CCMIMPITM | CCMIITM | Analyse impact-Stock | CCM |
| CCMIMPBOH | CCMIBOH | Analyse impact-Nomenclatures | CCM |
| CCMIMPROD | CCMROD | Analyse impact-Lignes gammes | CCM |
| CCMIMPSOH | CCMSOH | Analyse impact-Commandes ventes | CCM |
| CCMIMPPOH | CCMIPOH | Analyse impact-Achats | CCM |
| CCMIMPMFGH | CCMMFGH | Analyse impact-OF | CCM |

### Tables de paramétrage

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| TABCOUNTRY | TCY | Tables des pays | |
| TABCUR | TCU | Table des devises | |
| TABUNIT | TUN | Table des unités | |
| TABLANGUAGE | TLG | Table des langues | |
| TABHOL | THO | Table des jours fériés | |
| TABLAN | TLA | Langues | |
| TABCITY | TCT | Villes | |
| TABPAYTERM | TPT | Conditions de paiement | |
| TABMODELIV | TMD | Modes de livraison | |
| TABDEPAGIO | TDA | Escomptes | |
| TABVAT | TVT | Codes TVA | |
| TABVACBPR | TVB | Régimes de taxe | |
| INCOTERM | ICT | Incoterms | |
| TABVATITM | TVI | Niveaux de taxe article | |
| TABDECL | TDC | Codes déclaration | DEB |

### Structure de coûts

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| COSTSTCH | STCH | Structure de coûts | |
| COSTSTCL | STCL | Structure de coûts - lignes | |
| COSTSTCF | STCF | Structure de coûts - site | |
| COSTSTCB | STCB | Structure de coûts - barèmes | |

### Déclarations et législations spécifiques

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| DEB | DEB | Déclaration d'échange de biens | DEB |
| DEBPAR | DER | Paramètres génération DEB | DEB |
| DEBREGNAT | DRN | Régime et nature mouvement | DEB |
| DCLSII | DSII | Monitoring SII | KSP |
| CNSSII | CSII | Consultation SII | KSP |
| DCLROE | LROE | Formulaire espagnol 240 | DLROE |
| DCLVATAGRB | VATAGR | Livres TVA agrégés | KSP |

### Contrats et services

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CONTSERV | CON | Contrat de service | |
| CONTTEMPL | COT | Modèle de contrat de service | |
| CONTAMT | CAM | Bases annuelles | |
| CONTITM | CIT | Articles couverts | |
| CONTCARE | CCA | Plan d'entretien | |
| CONTCOV | CCV | Converture contrats de service | |
| CONTQUAL | CQL | Contraintes qualité | |
| CONTREW | CRE | Renouvellements des contrats | |

### Divers

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BATCH | BTC | Paramètres tâches batch | |
| BAPPOINT | BAP | Rendez-vous | |
| DEFVAL | DVA | Valeurs par défaut complexes | |
| DIETRS | DTR | Transaction saisie analytique | |
| DKSKEY | DKK | Gestion des clés | |
| DKSDATA | DKD | Signatures électroniques | DKS |
| DKSLOG | DKL | Journal des signatures | DKS |

### Transport et logistique

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BILLLADH | BOLH | En-tête bon de transport | |
| BILLLADD | BOLD | Détail bon de transport | |
| BILLLADC | BOLC | Contenu bon de transport | |
| CARAREA | CAA | Régions transporteurs | |
| CARPRICE | CAP | Tarifs transporteurs | |
| TABCONTAINER | TCTR | Types de contenants | |

### Fichiers spéciaux

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BBLOB | BBB | Fichiers spéciaux | FHRPA |
| BCLOB | BCB | Fichiers spéciaux | FHRPA |
| CBLOB | CBB | Fichiers spéciaux | |

---

## 🔗 Relations principales

### Tiers → Autres modules
- **BPARTNER** est référencé par :
  - Commandes ventes (SORDER.BPCORD)
  - Commandes achats (PORDER.BPSNUM)
  - Règlements (PAYMENTH.BPR)
  - Factures (SINVOICEV, PINVOICED)

### Articles → Autres modules
- **ITMMASTER** est référencé par :
  - Stock (STOCK.ITMREF)
  - Nomenclatures (BOM.ITMREF)
  - Lignes de commandes (SORDERQ, PORDERQ)
  - Ordres de fabrication (MFGITM.ITMREF)

### Sites → Autres modules
- **FACILITY** est référencé par :
  - Tous les documents transactionnels
  - Stock (STOCK.STOFCY)
  - Articles sites (ITMFACILIT.ITMREF+FCY)

### Comptabilité → Analytique
- **GACCOUNT** + **CACCE** forment la base de l'imputation comptable
- **GDIE** définit les axes analytiques utilisés partout

---

## 📝 Notes importantes

### Dépendances
- Ce module est **fondamental** et requis pour tous les autres modules
- Les tables de paramétrage doivent être renseignées en priorité
- Les codes activité conditionnent la disponibilité de certaines tables

### Codes activité principaux
- **CCM** : Gestion du changement
- **FHRPA** : Paie France
- **PRH** : Ressources humaines de base
- **DEB** : Déclarations d'échanges de biens
- **DKS** : Signatures électroniques
- **CFG** : Configurateur

### Bonnes pratiques
1. Créer d'abord les paramètres généraux (pays, devises, unités)
2. Créer ensuite la structure (sociétés, sites)
3. Créer le plan comptable et les axes analytiques
4. Créer les tiers (clients, fournisseurs)
5. Créer les articles et nomenclatures
6. Paramétrer les salariés si module RH activé

---

[◄ Retour à l'INDEX](./INDEX.md)

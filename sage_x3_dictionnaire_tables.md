# Base de Connaissance Sage X3 - Dictionnaire des Tables

> Documentation complète du dictionnaire des tables Sage X3 (Version 2023R1)  
> Source : [LV Expertise X3](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)

---

## 📚 Table des Matières

### Vue d'ensemble
- [Introduction](#introduction)
- [Structure du dictionnaire](#structure-du-dictionnaire)
- [Versions et évolutions](#versions-et-évolutions)

### Modules Sage X3

1. [Module Superviseur](#module-superviseur) (196 tables)
2. [Module Développement](#module-développement) (3 tables)
3. [Module Support client](#module-support-client) (13 tables)
4. [Module Action commerciale](#module-action-commerciale) (52 tables)
5. [Module Immobilisations](#module-immobilisations) (168 tables)
6. [Module Administration des RH](#module-administration-des-rh) (200+ tables)
7. [Module Comptabilité](#module-comptabilité) (200+ tables)
8. [Module Gestion des talents](#module-gestion-des-talents) (48 tables)
9. [Module Comptabilité tiers](#module-comptabilité-tiers) (100+ tables)
10. [Module Ventes](#module-ventes) (57 tables)
11. [Module Achats](#module-achats) (66 tables)
12. [Module Stocks](#module-stocks) (103 tables)
13. [Module Production](#module-production) (86 tables)
14. [Module Données de base](#module-données-de-base) (300+ tables)

---

## Introduction

Ce dictionnaire des tables Sage X3 présente l'ensemble des tables de la base de données organisées par module fonctionnel. Chaque table est identifiée par :

- **Nom de la table** : Identifiant technique dans la base de données
- **Abréviation** : Code court utilisé dans le système
- **Intitulé** : Description fonctionnelle de la table
- **Module** : Module Sage X3 auquel appartient la table
- **Code activité** : Code d'activation optionnel

### Versions et évolutions

Le dictionnaire référence trois versions principales :
- **V2023R1** : Version la plus récente
- **V9.0 (P12)** : Version 9 Patch 12
- **V11 (P22)** : Version 11 Patch 22

Les tables peuvent présenter des modifications entre versions (indiquées par des liens vers les pages de modification) ou être nouvellement créées/supprimées.

---

## Structure du dictionnaire

### Organisation par module

Les tables sont regroupées en 14 modules fonctionnels couvrant l'ensemble de l'ERP :
- Gestion technique (Superviseur, Développement)
- Gestion commerciale (Ventes, Action commerciale, Support client)
- Gestion financière (Comptabilité, Comptabilité tiers, Immobilisations)
- Gestion des achats et stocks (Achats, Stocks)
- Gestion de production (Production)
- Gestion des ressources humaines (Administration RH, Gestion des talents)
- Données de référence (Données de base)

### Conventions de nommage

Les tables suivent généralement ces conventions :
- **Préfixe 'A'** : Tables du module Superviseur et administratives
- **Préfixe 'B'** : Tables des données de base (Business Partner, BOM, etc.)
- **Préfixe selon module** : Tables métier spécifiques

---

## Module Superviseur

**Le module Superviseur** gère l'ensemble des paramètres techniques, de sécurité et d'administration du système Sage X3.

### Tables principales

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| AABREV | AAB | Abréviation | |
| ABANK | ABN | Banques (guichets) | |
| ABATABT | ABA | Serveur batch (Abonnements) | |
| ABATABTD | ABD | Serveur batch (Abonnements) | |
| ABATABTD2 | A22 | Serveur batch (Abonnements) | |
| ABATCAL | ABC | Calendrier serveur batch | |
| ABATGRP | ABG | Serveur batch (Groupes) | |
| ABATHOR | ABH | Contraintes horaires | |
| ABATPAR | ABP | Serveur batch (Paramètres) | |
| ABATRQT | ABR | Serveur batch (Requêtes) | |
| ABATRQT2 | A11 | Serveur batch (Requêtes) | |
| ABATRQTL | ABL | Serveur batch (Requêtes) | |
| ABATTAC | ABT | Serveur batch (Tâches) | |

### Business Intelligence (ABI)

Tables liées au Business Intelligence :

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ABICOND | AII | Conditions prédéfinies |
| ABIDATMRT | ABM | Datamart |
| ABIDATWRH | ABW | Datawarehouse |
| ABIDIM | ABI | Dimensions |
| ABIDIMFLD | ABJ | Dimensions (Champs) |
| ABIHIERA | AHH | Hiérarchies |
| ABIPRFUSR | AIU | Profil utilisateur BI |
| ABIREGDES | ABY | Règles synchronisation (dest) |
| ABIREGORG | ABV | Règles de synchronisation |
| ABIREPORT | ABO | Etats Business Objects |
| ABIREPORTD | ABQ | Etats Business Objects |
| ABITABAGG | ABE | Table de faits (agrégats) |
| ABITABDAT | ABF | Tables de faits |
| ABITABFLD | ABZ | Table de faits (champs) |
| ABITABIND | ABX | Table de faits (Index) |
| ABITABLNK | ABK | Table de faits (liens) |

### Gestion des classes et objets

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ACLACOL | ACLAC | Classes (Collections) |
| ACLAFLD | ACLAF | Classes (lignes) |
| ACLALNK | ACLAK | Classes (tables) |
| ACLAMAP | ACLAKP | Classes (mapping) |
| ACLAMET | ACLAM | Classes (méthodes) |
| ACLAMETSTD | ACLAT | Classes (méthodes standard) |
| ACLAOPT | ACLAO | Classes (options) |
| ACLASSE | ACLA | Classes |

### Dictionnaire et développement

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ACODIF | ACO | Codification des rubriques |
| ACONSTANT | ACST | Constantes |
| ACTION | ACT | Dictionnaire des actions |
| ACTPAR | ATR | Paramètres des actions |
| ADICTRT | ADC | Dictionnaire des traitements |
| ADOCUMENT | ADO | Documentation |
| AELT | AEL | Dictionnaire des éléments Web |
| AFONCTION | AFC | Dictionnaire des fonctions |
| AMSK | AMK | Dictionnaire des écrans |
| AMSKZON | AMZ | Dictionnaire des champs écran |

### Dossiers et solutions

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ADOSACT | ADA | Codes activité |
| ADOSDIM | ADE | Eléments de dimensionnement |
| ADOSLEG | ADLEG | Législations |
| ADOSLIV | ADK | Livrables |
| ADOSSIER | ADS | Table des dossiers |
| ADOSSOL | ADD | Solution par dossier |
| ADOPAR | ADP | Paramètres |
| ADOVAL | ADW | Valeurs paramètres |

### Sécurité et accès

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ACCCOD | ACS | Codes d'accès |
| ACCES | ACC | Accès par utilisateur |
| AFCTFCT | AFT | Profil fonction utilisateur |
| AFCTPRF | AFP | Habilitation fonctionnelle |
| ALOGIN | ALO | Table de login |
| ANNUAIRE | ANU | Annuaire utilisateur |
| APROFIL | APF | Profil utilisateur |

### Impression et états

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| APRINTDES | AID | Description imprimantes |
| APRINTER | AIM | Destinations |
| APRTAUS | AIA | Destinations par utilisateur |
| AREPORT | ARP | Dictionnaire des Etats |
| AREPORTA | ARA | Paramétrage imprimante |
| AREPORTD | ARD | Paramètres des états |
| AREPORTM | ARM | Impressions maj tables |

---

## Module Développement

**Le module Développement** contient les tables spécifiques aux outils de développement et d'intégration.

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| ABATABTD2 | A22 | Serveur batch (Abonnements) | |
| ABATRQT2 | A11 | Serveur batch (Requêtes) | |
| ATRADIS | TAT | Suivi des Imports/Exports | DIS |

---

## Module Support client

**Le module Support client** gère les demandes de support, incidents et interventions SAV.

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| DOOBPCLNK | DBL | Association de donneur d'ordre |
| EXKWORD | EKW | Mots-clés existant |
| FAMPBQUE | PBQ | Queues concernées |
| FAMPBREP | PBR | Collaborateurs compétents |
| HDKTASK | HDT | Consommations SAV |
| HDKTASKINV | HDI | Consommations à facturer |
| HDKTRS | HTR | Transaction de saisie HDK |
| HDKTRSVAL | HTV | Transaction saisie valeurs HDK |
| SBGEO | SBG | Zones intervention prestataire |
| SBPBL | SBP | Compétences prestataire |
| SOLRESULT | SOR | Solutions trouvées |
| SOLUTION | SOL | Solutions |
| SRESAT | SRS | Historique états demandes |

---

## Module Action commerciale

**Le module Action commerciale** gère les leads, campagnes marketing, scripts d'appels et secteurs commerciaux.

### Leads et prospection

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| LEAD | LDS | Leads |
| HD8CLOB | HD8 | Clobs lead |
| CALLATTEMP | CTT | Tentative d'appel |
| SECPST | SPT | Secteur lead |
| SECPSTSEL | SPS | Secteur lead sélection |

### Marketing et campagnes

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CMARKETING | CMG | Campagne marketing |
| MKGOPG | MOG | Relations ciblages/opérations |
| MKGQUR | MQR | Ciblages marketing |
| PLGMKG | PLG | Gestion du planning marketing |
| SELCMG | SEC | Liste des sélections marketing |

### Scripts et ciblage

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SCRIPT | SCP | Script d'appel |
| SCPQST | SCQ | Questions script d'appel |
| SCPASW | SCA | Réponses scripts d'appels |
| SCPQSTCND | SQC | Conditions de cheminement |
| FIEDIC | FID | Critères de ciblage |

### Secteurs et portefeuilles

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| MARSCT | MST | Secteurs de marchés |
| MARDEF | MDF | Définitions des secteurs |
| MARASSDEF | MAD | Contenu des secteurs |
| MARREPSEC | MRS | Affectations des secteurs |
| MARASSREP | MAR | Portefeuilles représentants |

### Correspondants et synchronisation

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CORRESPOND | COR | Correspondant |
| CORREP | COP | Représentant en charge |
| SYNCDATA | SYD | Données synchronisation |
| SYNCLINK | SYL | Transcodification synchro |
| SYNCPAR | SYP | Paramétrage synchronisation |

---

## Module Immobilisations

**Le module Immobilisations** gère l'ensemble du cycle de vie des immobilisations : acquisitions, amortissements, cessions.

### Tables principales des biens

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| FXDASSETS | FAS | Biens comptables |
| CONTEXT | CNX | Contextes |
| DEPREC | DEP | Dotation |
| DPRMOD | DPM | Modes d'amortissement |
| FASFAM | FAM | Familles immobilisation |

### Événements de gestion

Tables préfixées par 'E' pour les événements :

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| EFASACT | E21 | Evt - Actualisation |
| EFASCRT | E24 | Evt - Création bien comptable |
| EFASISS | E26 | Evt - Sortie d'actif |
| EFASREEVAL | E28 | Evt - Réévaluation |
| EFASCNL | E30 | Evt - Suppression Bien |
| EFASRNW | E31 | Evt - Renouvellement |

### Location financement (LEA)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| LEASE | LEA | Contrats location financement | LEA |
| LEABILBOOK | LBB | Echéanciers contrat loc fin | LEA |
| ELEACRT | E42 | Evt - Création contrat | LEA |
| ELEAEND | E43 | Evt - Fin de contrat | LEA |
| ELEARPU | E45 | Evt - Levée option achat | LEA |

### Subventions (GRT)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| GRANTS | GRT | Subventions | GRT |
| CASHING | CAS | Encaissements | GRT |
| EGRTCRT | E62 | Evt - Création subvention | GRT |
| EGRTCNL | E64 | Evt - Suppression Subvention | GRT |

### Éléments physiques (PHY)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| PHYELT | PHY | Eléments physiques | PHY |
| PHYBUI | BUI | Bâtiment | PHY |
| PHYLCT | LCT | Localisations | PHY |
| EPHYCRT | E81 | Evt - Création élt. physique | PHY |

---

## Module Administration des RH

**Le module Administration des RH** gère la paie, les cotisations, les déclarations sociales et fiscales.

### Paie et calculs

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CALRUB | CRB | Rubriques à calculer |
| CALVAR | CVR | Variables à calculer |
| CUMUL | CUM | Cumuls |
| COTISATION | HRCOT | Cotisations |
| CAISSE | PCA | Caisses de cotisation |

### Historique paie

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| HISTOPAYE | HSP | Historique de paie |
| HISTOREGUL | HRHSR | Historique de paie |
| HISPOA | HIP | Historique acomptes |
| HISTOCTX | HIC | Historisation du contexte |

### Déclarations sociales (DADS/DSN)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| DADEMP | HRDAE | Salariés DADS-U | |
| DADEMP2 | DAS | Salariés DADS-U | |
| DADEMP3 | DAP | Prévoyance DADS-U | |
| DICODSN | DSN | Dictionnaire champs DSN | KFR |
| HRDSCFCY | HRCFY | Site DSN charges | KFR |
| HRDSNEMP | DSNEH | Entête salarié DSN | KFR |

### Congés et absences

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CNGCPY | CNG | Périodes congés payés |
| CNGEMP | CNE | Congés payés par salarié |
| DEMCONGE | DCG | Demandes de congé |
| DEMSPLITS | DCGSP | Division ss-typ congé |

### Portail employés (HRESS)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| ESSDOCGEN | ESDG | Génération documents portail Employés | HRESS |
| ESSEMLBLB | ESBL | Génération bulletin Portail | HRESS |
| ESSMGRLNK | ESML | Lien manager | HRESS |
| ESSUSRTRK | ESUT | Utilisateurs | HRESS |

### Épargne salariale (EPA)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| EPAHEADER | EPAHEA | Versements extérieurs | EPA |
| EPADETAILS | EPADET | Versements extérieurs | EPA |
| EPARAT | EPARAT | Taux standard | EPA |
| EPATYP | EPATYP | Type | EPA |

---

## Module Comptabilité

**Le module Comptabilité** gère le plan comptable, les écritures, la clôture et les déclarations fiscales.

### Écritures comptables

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| GACCENTRY | HAE | Ecritures comptables |
| GACCENTRYD | DAE | Lignes de pièces comptables |
| GACCENTRYA | DAA | Lignes analytiques comptables |
| GACCFIX | GAF | Abonnements |

### Balance et grand livre

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| BALANCE | BAL | Balance générale |
| BALANA | BLA | Balance analytique |
| BALDEM | BAM | Balance double entrée |
| GLCONSO | GLC | Grand livre consolidation |

### Budgets

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| BUD | BUD | Table des budgets |
| BUDPAR | BUP | Paramétrage budgets |
| BUDVER | BUV | Versions de budgets |
| BUDREV | BRV | Révision budgétaire |
| BUDTYP | BUT | Types de budgets |

### Déclarations TVA

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| DCLVAT | DLV | Déclaration de TVA sur débits | |
| DCLVATPAY | DVP | Déclaration TVA/encaissements | |
| DCLVATBOXH | DLVB | En-tête TVA | DCL |
| DCLVATBOXDBD | DLVBD | Détail TVA | DCL |

### Déclarations pays spécifiques

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| DCLVATPORH | DVPH | Déclaration TVA | KPO |
| DCLVATSPA | DVS | Table travail taxe (SPA) | KSP |
| DCLVATITA | DVI | Déclaration TVA Italie: détail | KIT |
| SPAMOD111 | SPM111 | Formulaire espagnol 111 | KSP |

### Journaux et lots

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| GJOURNAL | JOU | Journaux comptables |
| GJOUCOA | JCO | Journaux - Plan comptable |
| GENTLOT | LOT | Lots pièces comptables |
| GENTLOTH | LOH | Entête pièces saisie par lot |

---

## Module Gestion des talents

**Le module Gestion des talents** gère la formation, l'évaluation et le développement des compétences.

### Formation

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| STAGE | STG | Stage |
| SESSIONS | HRSES | Session |
| INSCRIPT | INS | Inscriptions |
| INSJOU | INJ | Jours d'inscriptions |
| INSJOUA | INA | Jours d'absences |

### Plans de formation

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PLNFORM | PLF | Plan de formation |
| PLNCOUT | PLC | Coûts du plan de formation |
| PLNBUD | HRPLB | Enveloppe du plan de formation |
| DEMANDE | DEM | Demande de formation |
| DEMLIG | DML | Lignes demandes de formation |

### Évaluation et entretiens

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| COMPEVAL | CEV | Campagne d'entretiens | CAR |
| EVAEMP | EVE | Entretien | CAR |
| EVAEMPDET | EVD | Entretien performance | CAR |
| EVAEMPCPC | EVC | Entretien compétence | CAR |

### Parcours et coûts

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| COURSEI | CSI | Parcours individualisé |
| TYPCOURSE | TCS | Parcours type |
| COUT | COU | Coût prévisionnel |
| COUTREEL | HRCOR | Coût réel |
| COUTFIN | COF | Coût financier |

---

## Module Comptabilité tiers

**Le module Comptabilité tiers** gère les règlements, échéances, rapprochements bancaires et relances.

### Règlements

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PAYMENTH | PYH | En-tête règlements |
| PAYMENTD | PYD | Lignes règlement |
| PAYMENTA | PYA | Lignes analytiques règlement |
| PAYLOT | PYL | Lot de saisie |

### Bordereaux et fichiers bancaires

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PAYFRM | FRM | Bordereaux de paiement |
| TABFILBAN | TFB | Fichiers bancaires |
| PAYPTD | PYP | Lignes Ord. paiement/Reçus |
| PAYPTH | PAH | En-tête Ord. paiement/Reçus |

### Rapprochement bancaire

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| RELBANK | RBK | Relevé des comptes bancaires |
| BANREC | BEH | Etat rapprochement bancaire |
| BANRECD | BED | Ligne relevé bancaire |
| EDITRBK | EBK | Etat rapprochement bancaire |

### Import bancaire (BSI)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| BSIIMP | BSIIMP | Import relevé bancaire | BSI |
| BSIIMPD | BSIIMPD | Détail import relevé bancaire | BSI |
| BSIIMPPAR | BSIIP | Paramétrages import bancaire | BSI |
| BSIFILFMT | BSIFFM | Déf. format import bancaire | BSI |

### Relances (FUP)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| FUP | FUP | Relances effectuées | FUP |
| FUPGRP | FGP | Groupes de relances | FUP |
| FUPTXT | FPT | Textes de relance | FUP |
| TMPFUP1 | TF1 | Tiers à relancer | FUP |

### Notes de frais

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| EXPENSES | EXS | Frais |
| EXPENSESH | EXH | Frais |
| TABEXPENS | TES | Tables des frais |
| EXPARAM | EXM | Paramètres |

---

## Module Ventes

**Le module Ventes** gère les devis, commandes, livraisons et factures clients.

### Devis

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SQUOTE | SQH | Entête devis |
| SQUOTED | SQD | Détail devis |
| TABSQHTYP | TSQ | Table types devis |
| VSQUOTE | VQH | Historique devis vente - en-tête |
| VSQUOTED | VQD | Historique devis vente - détails |

### Commandes

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SORDER | SOH | Commandes de vente - Entête |
| SORDERP | SOP | Commandes de vente - Prix |
| SORDERQ | SOQ | Commandes de vente - Quantités |
| SORDERC | SOC | Commandes de vente - Cumul A/R |
| TABSOHTYP | TSO | Table types commandes |

### Livraisons

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SDELIVERY | SDH | Entête de livraison |
| SDELIVERYD | SDD | Détail livraison |
| SDELIVERYNO | SDN | Notification livraison vente |
| SDELIVERYNOD | SDND | Notification livraison vente |

### Factures

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SINVOICEV | SIV | Facture vente valorisation |
| SINVOICED | SID | Détail facture de vente |
| SINVOICEDLOC | SIDLOC | Détail facture de vente |

### Tarifs

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SPRICFICH | SPF | Tarifs clients (fiches) |
| SPRICLINK | SPK | Recherche tarifs vente (link) |
| SPRICPRTQ | SPQ | Catalogue tarifs ventes |
| SPRICINCR | SPI | Augmentation des tarifs |

### Retours

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SRETURN | SRH | Entête retour vente |
| SRETURND | SRD | Détail retour vente |
| TABSRHTYP | TRE | Table types retours |

---

## Module Achats

**Le module Achats** gère les demandes d'achat, commandes fournisseurs, réceptions et sous-traitance.

### Demandes d'achat

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PREQUIS | PSH | Demandes d'achat |
| PREQUISD | PSD | Demandes d'achat Détail |
| PREQUISA | PSA | Demandes d'achat Lien |
| PREQUISO | PSO | Demandes d'achat Lien |

### Appels d'offres

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PQUOTAT | PQH | Appels d'offres |
| PQUOTATD | PQD | Appels d'offre Détail article |
| PQUOTATF | PQF | Appels d'offre detail fourn |
| PRESP | PPH | Réponses appels d'offre |
| PRESPD | PPD | Réponses appels d'offre Détail |

### Commandes

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PORDER | POH | Commandes d'achat |
| PORDERP | POP | Commandes d'achat Prix |
| PORDERQ | POQ | Commandes d'achat quantités |
| PORDERC | POC | Commandes d'achat cumul av-ret |
| PORDITM | POI | Commandes d'achat par article |

### Réceptions

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PRECEIPT | PTH | Réception |
| PRECEIPTD | PTD | Réceptions Détail |
| PWRKPTH | PWH | Réception temporaire |
| PWRKPTD | PWD | Réceptions Détail temporaire |

### Factures

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PINVOICED | PID | Factures d'achat détail |
| PINVOICEV | PIV | Factures d'achat valorisation |

### Sous-traitance

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SCOHEAD | SCO | Ordre de sous-traitance |
| SCOITM | SCI | Ordre de sous-traitance |
| SCOMAT | SCM | Ordre sous-traitance Matières |
| SCOSRV | SCS | Ordre sous-traitance Service |
| SCOTRK | SCK | Suivi de sous-traitance |

### Expéditions et transport

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SHIPMENT | SHH | Expédition |
| SHIPMENTD | SHD | Expédition détail |
| SHIPDOC | SHIPD | Documents expédition |
| TRANSPORT | TRNP | Transport |
| CONTAINER | CTRH | Conteneur fret |

---

## Module Stocks

**Le module Stocks** gère les emplacements, mouvements, inventaires, traçabilité et valorisation des stocks.

### Stocks et emplacements

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| STOCK | STO | Stocks |
| STOLOC | STC | Emplacements |
| STOLOCAFF | STF | Affectation emplacements |
| TABLOCTYP | TLO | Table des types d'emplacements |

### Lots et séries

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| STOLOT | STL | Numéros de lot |
| STOLOTFCY | SLF | Lots - Sites |
| STOSER | STS | Numéros de série |
| STOSERW | SSW | Séries en cours de traitement |

### Mouvements

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| SMVTH | SMH | En-tête mouvements |
| SMVTD | SMD | Détail mouvement stock |
| SMVTDVAL | SMV | Prix du mouvement |
| STOJOU | STJ | Journal des Stocks |
| STOJOUVAL | SJV | Valeurs mouvements de stock |

### Inventaires

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CUNSESSION | CUN | Session inventaire |
| CUNLISTE | CUL | Listes inventaires |
| CUNLISDET | CUD | Inventaires |
| CUNSERDET | CSD | Inventaires séries |

### Préparation et rangement

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| STOPREH | PRH | Bon de préparation entête |
| STOPRED | PRE | Bon de préparation détail |
| STOPRELIS | PRL | Liste préparation expéditions |
| STOSRG | SRG | Rangements |
| STOSRGW | SGW | Rangements (détails) |

### Traçabilité et qualité

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| STOTRK | STR | Traçabilité |
| STOQUAL | STQ | Contrôle qualité |
| STOQLYH | QLH | Entête contrôle qualité |
| STOQLYD | QLD | Détail contrôle qualité |

### Calcul des besoins

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CBNHEA | CBH | Calcul besoins nets |
| CBNDET | CBD | Calcul besoins nets détail |
| CBNWRK | CBW | Temporaire calcul besoins |
| PARMRP | PCB | Paramètres calculs besoins |

### Configurateur (CFG)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CFGQST | CQU | Symboles configurateur | CFG |
| CFGSCE | CSC | Scénarios configurateur | CFG |
| CFGSEL | CSE | Sélections configurateur | CFG |
| CFGHIS | CFH | Historique configurations | CFG |

---

## Module Production

**Le module Production** gère les ordres de fabrication, gammes, postes de charge et opérations de production.

### Ordres de fabrication

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| MFGHEAD | MFG | Ordres fabrication - entête |
| MFGITM | MFI | Ordres fabrication - articles |
| MFGMAT | MFM | Ordres fabrication - matières |
| MFGOPE | MFO | Ordres fabrication - opérat. |

### Suivi fabrication

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| MFGHEADTRK | MTK | Suivi fabrication - entête |
| MFGITMTRK | MKI | suivi fabrication - articles |
| MFGMATTRK | MKM | Suivi fabrication - matières |
| MFGOPETRK | MKO | Suivi fabrication - opérat. |

### Gammes

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ROUTING | ROH | Gammes - Entête |
| ROUOPE | ROO | Gammes - Opérations |
| ROUOPESTD | ROT | Opérations standard |
| ROUSCD | ROS | Gamme - Jalonnement opérations |

### Charge et ordonnancement

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| TABWRKCTR | TWC | Centres de charge |
| OPERATIONS | OPS | Encours charge |
| WORKLOAD | WKL | Charge de production |
| SCHEDULING | SCH | Jalonnement des O.F |

### Plan directeur

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| PDPHEA | PDH | Calcul plan directeur entête |
| PDPDET | PDD | Calcul plan directeur détail |

### Gestion de pesée (MWM)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| WEIGHING | WGG | Pesée | MWM |
| SCALES | SLE | Balances | MWM |
| STATION | STX | Lieu de pesage | MWM |
| CONTAINERS | CTN | Récipients | MWM |
| TANKS | TKS | Cuves | MWM |

### APS/Ordonnancement avancé

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| GFSOBJ | GFSOBJ | Objets | |
| GFSMRK | GFSMRK | Marqueur | |
| GFSTAG | GFSTAG | Balise | |
| GFSPIN | GFSPIN | Type punaisage opération | |
| GFSSETTIM | GFSST | Matrice temps réglage | GFSA |

---

## Module Données de base

**Le module Données de base** contient l'ensemble des données de référence : tiers, articles, nomenclatures, etc.

### Business Partners

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| BPARTNER | BPR | Business Partner |
| BPCUSTOMER | BPC | Clients |
| BPSUPPLIER | BPS | Fournisseurs |
| BPCARRIER | BPT | Transporteurs |
| BPMISC | BPM | Donneur d'ordre/Tiers divers |

### Adresses et contacts

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| BPDLVCUST | BPD | Clients livrés |
| BPSHISUPP | BSS | Fournisseurs expéditeurs |
| BPSHISUPLN | BSL | Adresses d'expéditions |
| CONTACTXT | CNTXT | Contacts |

### Articles

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| ITMMASTER | ITM | Articles |
| ITMFACILIT | ITF | Articles sites |
| ITMCATEG | ITC | Catégories articles |
| ITMSTATUS | ITS | Statuts articles |

### Nomenclatures

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| BOM | BOH | Nomenclatures Entête |
| BOMD | BOD | Nomenclatures Détail |
| BOMWUS | BOW | Nomenclatures cas d'emploi |
| BOMPRN | BOP | Impression Nomenclatures |

### Analytique

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| CACCE | CCE | Sections |
| CADIEDEF | CDI | Axes par défaut |
| CADSP | DSP | Répartitions a priori |
| CAAUZ | CAZ | Table des interdictions |

### Plan comptable

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| GACCOUNT | GAC | Comptes généraux |
| GSACCOUNT | GSA | Comptes collectifs |

### Sites et sociétés

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| FACILITY | FCY | Sites |
| COMPANY | CPY | Sociétés |
| GRPCPY | GCP | Groupes de sociétés |

### Employés et RH

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| EMPLOYEE | EMP | Salariés | |
| COMPETENCE | CPC | Compétences | FHRPA |
| CPCEMP | CPE | Compétences par salarié | FHRPA |
| CALENDAR | CLD | Calendriers | PRH |

### Paramétrage divers

| Table | Abréviation | Intitulé |
|-------|-------------|----------|
| TABCOUNTRY | TCY | Tables des pays |
| TABCUR | TCU | Table des devises |
| TABUNIT | TUN | Table des unités |
| TABLANGUAGE | TLG | Table des langues |
| TABHOL | THO | Table des jours fériés |

### Gestion du changement (CCM)

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| CCMCHGREQ | CCMCR | Demande de changement | CCM |
| CCMACTION | CCMACT | Actions | CCM |
| CCMAPPROVER | CCMAPPR | Approbateurs demande changement | CCM |
| CCMPLANH | CCMPH | En-tête plan dem changement | CCM |

---

## Annexes

### Codes d'activité principaux

Les codes d'activité permettent d'activer des fonctionnalités optionnelles :

- **ABI** : Business Intelligence
- **LEA** : Location financement
- **GRT** : Subventions
- **PHY** : Éléments physiques
- **CCM** : Gestion du changement
- **CFG** : Configurateur
- **MWM** : Manufacturing Workbench
- **GFSA** : Ordonnancement avancé
- **BSI** : Import bancaire
- **FUP** : Relances
- **DEB** : Déclaration d'échanges de biens
- **DKS** : Signatures électroniques

### Légende des modifications

- ✨ **Nouvelle table** : Table ajoutée dans une version récente
- 🔄 **Modification** : Table modifiée entre versions
- ❌ **Table supprimée** : Table obsolète ou retirée

### Sources et références

- **Site officiel** : [LV Expertise X3](https://lvexpertisex3.com/)
- **Dictionnaire complet** : [Dictionnaire des tables](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)
- **Version** : 2023R1

---

## Notes importantes

### Utilisation du dictionnaire

Ce dictionnaire est un outil de référence pour :
- Les développeurs Sage X3
- Les consultants fonctionnels
- Les administrateurs de base de données
- Les équipes support

### Précautions

- Les structures de tables peuvent varier selon les versions
- Les codes d'activité doivent être activés pour certaines tables
- Les modifications de structure nécessitent une mise à jour des personnalisations
- Toujours sauvegarder avant toute modification de structure

### Maintenance

Cette base de connaissance doit être mise à jour régulièrement avec :
- Les nouvelles versions de Sage X3
- Les patchs et correctifs
- Les nouvelles fonctionnalités
- Les tables obsolètes

---

*Base de connaissance générée le : 2024*  
*Source : LV Expertise X3 - Version 2023R1*  
*Pour plus d'informations : [https://lvexpertisex3.com/](https://lvexpertisex3.com/)*

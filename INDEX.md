# Base de Connaissance Sage X3 - INDEX

> Documentation complète du dictionnaire des tables Sage X3 (Version 2023R1)  
> **Base de données réelle** : 1,888 tables | 47,367 champs | 608 menus locaux  
> Source : [LV Expertise X3](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)

---

## 🤖 Documentation LLM (Optimisée pour génération SQL)

**Nouveau ?** → [QUICKSTART.md](./QUICKSTART.md) pour un aperçu rapide 🎯

**Consultez ces guides en premier pour générer des requêtes SQL précises :**

### Guides essentiels
- **[1.1_GUIDE_LLM.md](./guides/1.1_GUIDE_LLM.md)** - Guide complet pour générer des requêtes SQL Sage X3
- **[1.2_GLOSSAIRE.md](./guides/1.2_GLOSSAIRE.md)** - Conventions de nommage et suffixes (_0, _1, etc.)
- **[1.3_RELATIONS.md](./guides/1.3_RELATIONS.md)** - Relations et jointures entre tables principales
- **[4.1_MENUS_LOCAUX.md](./menus/4.1_MENUS_LOCAUX.md)** - 608 menus locaux avec 3,127 valeurs d'enums

### Checklist rapide
- [ ] Tous les champs ont un suffixe `_0`, `_1`, etc.
- [ ] Les valeurs enum sont vérifiées dans menus/4.1_MENUS_LOCAUX.md
- [ ] Les jointures sont validées dans guides/1.3_RELATIONS.md
- [ ] Les conventions de nommage sont respectées (guides/1.2_GLOSSAIRE.md)

---

## 📋 Vue d'ensemble

Cette base de connaissance Sage X3 contient :
- **1,888 tables réelles** de votre ERP
- **47,367 champs** avec types et descriptions
- **608 menus locaux** (valeurs d'enums) pour les modules essentiels
- **14 modules fonctionnels** documentés

---

## 📦 Modules complets (Données réelles de votre ERP)

### Modules essentiels avec TOUS les champs (Données réelles de l'ERP)
- **[2.1_ACHATS_COMPLETE.md](./modules/database/2.1_ACHATS_COMPLETE.md)** - 15 tables, 1,422 champs (Commandes fournisseurs, réceptions, factures)
- **[2.2_VENTES_COMPLETE.md](./modules/database/2.2_VENTES_COMPLETE.md)** - 17 tables, 1,653 champs (Commandes, livraisons, factures, devis, retours)
- **[2.3_STOCKS_COMPLETE.md](./modules/database/2.3_STOCKS_COMPLETE.md)** - 16 tables, 884 champs (Stock, mouvements, journal, valorisation)
- **[2.4_PRODUCTION_COMPLETE.md](./modules/database/2.4_PRODUCTION_COMPLETE.md)** - 26 tables, 1,406 champs (OF, gammes, nomenclatures, opérations)
- **[2.5_DONNEES_BASE_COMPLETE.md](./modules/database/2.5_DONNEES_BASE_COMPLETE.md)** - 38 tables, 2,162 champs (Articles, tiers, sites, comptes)

**Total : 112 tables principales avec 7,527 champs documentés**

---

## 📚 Modules disponibles (Documentation web du site LV Expertise)

### 1. [Module Superviseur](./01_MODULE_SUPERVISEUR.md)
**196 tables** - Administration système, sécurité, batch, BI, dictionnaire
- Gestion des utilisateurs et habilitations
- Serveur batch et planification
- Business Intelligence (BI)
- Dictionnaire de développement
- Import/Export et archives

### 2. [Module Développement](./02_MODULE_DEVELOPPEMENT.md)
**3 tables** - Outils de développement et intégration
- Serveur batch (abonnements et requêtes)
- Suivi des imports/exports

### 3. [Module Support client](./03_MODULE_SUPPORT_CLIENT.md)
**13 tables** - Gestion SAV et support technique
- Demandes de support (tickets)
- Interventions et consommations
- Solutions et compétences
- Zones d'intervention

### 4. [Module Action commerciale](./04_MODULE_ACTION_COMMERCIALE.md)
**52 tables** - CRM, Marketing, Leads
- Gestion des leads et prospects
- Campagnes marketing
- Scripts d'appels
- Secteurs commerciaux
- Synchronisation CRM

### 5. [Module Immobilisations](./05_MODULE_IMMOBILISATIONS.md)
**168 tables** - Gestion des actifs immobilisés
- Biens comptables et amortissements
- Événements de gestion
- Location financement (LEA)
- Subventions (GRT)
- Éléments physiques (PHY)
- Concessions (CCN)

### 6. [Module Administration des RH](./06_MODULE_ADMINISTRATION_RH.md)
**200+ tables** - Paie et déclarations sociales
- Calculs de paie et cotisations
- Historique et cumuls
- Déclarations DADS/DSN
- Congés et absences
- Portail employés
- Épargne salariale

### 7. [Module Comptabilité](./07_MODULE_COMPTABILITE.md)
**200+ tables** - Comptabilité générale et analytique
- Écritures comptables
- Balance et grand livre
- Budgets et révisions
- Déclarations TVA
- Consolidation
- Flux de trésorerie

### 8. [Module Gestion des talents](./08_MODULE_GESTION_TALENTS.md)
**48 tables** - Formation et développement RH
- Plans de formation
- Sessions et inscriptions
- Évaluation et entretiens
- Parcours de formation
- Coûts formation

### 9. [Module Comptabilité tiers](./09_MODULE_COMPTABILITE_TIERS.md)
**100+ tables** - Règlements et trésorerie
- Règlements clients/fournisseurs
- Bordereaux et fichiers bancaires
- Rapprochement bancaire
- Import bancaire (BSI)
- Relances (FUP)
- Notes de frais

### 10. [Module Ventes](./modules/web/3.2_MODULE_VENTES.md)
**57 tables** - Cycle de vente complet
- Devis et commandes
- Livraisons et retours
- Factures clients
- Tarifs et catalogues
- Historiques

### 11. [Module Achats](./modules/web/3.1_MODULE_ACHATS.md)
**66 tables** - Cycle d'achat et approvisionnement
- Demandes d'achat
- Appels d'offres
- Commandes fournisseurs
- Réceptions et retours
- Factures fournisseurs
- Sous-traitance
- Expéditions et transport

### 12. [Module Stocks](./modules/web/3.3_MODULE_STOCKS.md)
**103 tables** - Gestion des stocks et inventaires
- Stocks et emplacements
- Lots et séries
- Mouvements de stock
- Inventaires
- Préparation et rangement
- Traçabilité et qualité
- Calcul des besoins (CBN)
- Configurateur (CFG)

### 13. [Module Production](./modules/web/3.4_MODULE_PRODUCTION.md)
**86 tables** - Gestion de la production
- Ordres de fabrication (OF)
- Gammes et opérations
- Centres de charge
- Plan directeur de production
- Gestion de pesée (MWM)
- Ordonnancement avancé (APS)

### 14. [Module Données de base](./modules/web/3.5_MODULE_DONNEES_BASE.md)
**300+ tables** - Données de référence
- Tiers (clients, fournisseurs, transporteurs)
- Articles et nomenclatures
- Analytique et plan comptable
- Sites et sociétés
- Employés et compétences
- Paramétrage général
- Gestion du changement (CCM)

---

## 🔍 Recherche rapide

### Par code d'activité

- **ABI** : Business Intelligence (Module Superviseur)
- **LEA** : Location financement (Module Immobilisations)
- **GRT** : Subventions (Module Immobilisations)
- **PHY** : Éléments physiques (Module Immobilisations)
- **CCN** : Concessions (Module Immobilisations)
- **CCM** : Gestion du changement (Module Données de base)
- **CFG** : Configurateur (Module Stocks)
- **MWM** : Manufacturing Workbench (Module Production)
- **BSI** : Import bancaire (Module Comptabilité tiers)
- **FUP** : Relances (Module Comptabilité tiers)
- **DEB** : Déclarations d'échanges de biens
- **DKS** : Signatures électroniques
- **GFSA** : Ordonnancement avancé (Module Production)
- **HRESS** : Portail employés (Module RH)
- **EPA** : Épargne salariale (Module RH)
- **KFR** : DSN France (Module RH)
- **FHRPA** : Paie France (Module RH)

### Par type de données

#### Données de référence
- **Tiers** : Module Données de base (BPARTNER, BPCUSTOMER, BPSUPPLIER)
- **Articles** : Module Données de base (ITMMASTER, ITMFACILIT)
- **Plan comptable** : Module Données de base (GACCOUNT, GSACCOUNT)

#### Transactions
- **Ventes** : Module Ventes (SORDER, SDELIVERY, SINVOICEV)
- **Achats** : Module Achats (PORDER, PRECEIPT, PINVOICED)
- **Stock** : Module Stocks (SMVTH, SMVTD, STOJOU)
- **Production** : Module Production (MFGHEAD, MFGMAT, MFGOPE)

#### Comptabilité
- **Pièces comptables** : Module Comptabilité (GACCENTRY, GACCENTRYD)
- **Règlements** : Module Comptabilité tiers (PAYMENTH, PAYMENTD)
- **Rapprochement** : Module Comptabilité tiers (RELBANK, BANREC)

#### Ressources Humaines
- **Paie** : Module Administration RH (HISTOPAYE, CUMUL)
- **Formation** : Module Gestion des talents (PLNFORM, SESSIONS)
- **Employés** : Module Données de base (EMPLOYEE)

---

## 📖 Légende et conventions

### Symboles de version
- ✨ **Nouvelle table** : Table ajoutée dans V2023R1
- 🔄 **Modification** : Structure modifiée entre versions
- ❌ **Supprimée** : Table obsolète

### Types de champs courants
- **A** : Alphanumérique
- **C** : Compteur (entier)
- **D** : Date
- **DCB** : Décimal
- **L** : Long (entier)
- **M** : Menu local
- **AUUID** : Identifiant unique

### Types de clés
- **Index unique** : Clé primaire sans homonymes
- **Index avec homonymes** : Index secondaire autorisant les doublons

---

## 🛠️ Utilisation de la documentation

### Navigation
1. Cliquez sur un module dans la liste ci-dessus
2. Chaque fichier module contient :
   - Vue d'ensemble du module
   - Liste complète des tables
   - Détails des tables principales avec tous les champs

### Structure des fichiers modules
```
MODULE_XXX.md
├── Introduction
├── Vue d'ensemble
├── Tables du module (liste complète)
└── Détails des tables principales
    ├── Informations générales
    ├── Clés et index
    └── Colonnes détaillées (champs)
```

### Informations par champ
Pour chaque champ documenté :
- **Colonne** : Nom technique
- **Intitulé** : Description fonctionnelle
- **Type** : Type de données
- **Long** : Longueur maximale
- **Lien** : Relations avec d'autres tables
- **Code activité** : Fonctionnalité optionnelle

---

## 📝 Notes importantes

### Dépendances entre modules
- Les **Données de base** sont référencées par tous les autres modules
- La **Comptabilité** dépend de la **Comptabilité tiers**
- Les **Stocks** sont liés aux **Achats** et **Ventes**
- La **Production** utilise les **Stocks** et les **Données de base**

### Codes d'activité
Certaines tables ne sont actives que si le code d'activité correspondant est configuré dans le dossier. Consultez la documentation de chaque module pour les détails.

### Versions
Cette documentation est basée sur la version **V2023R1**. Les versions antérieures (V9.0, V11) peuvent présenter des différences de structure.

---

## 🔗 Liens utiles

- [Site LV Expertise X3](https://lvexpertisex3.com/)
- [Dictionnaire complet en ligne](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)
- [Toolbox X3](https://toolbox.lvex3.com/)

---

*Base de connaissance générée le : 2024*  
*Version Sage X3 : 2023R1*  
*© L.V. Expertise X3*

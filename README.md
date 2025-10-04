# 📚 Base de Connaissance Sage X3 - Optimisée pour LLM

## 🎯 Vue d'ensemble

**Base de connaissance complète pour génération de requêtes SQL Sage X3**

Cette documentation combine :
- ✅ **1,888 tables réelles** de votre ERP
- ✅ **47,367 champs** avec types et descriptions  
- ✅ **608 menus locaux** (3,127 valeurs d'enums)
- ✅ **Guides LLM** pour génération SQL précise

**Version Sage X3 :** 2023R1  
**Sources :** 
- Données réelles de votre ERP (CSV)
- [LV Expertise X3](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)

---

## 🚀 Démarrage rapide

### Pour un LLM générant des requêtes SQL

1. **Consulter en premier** : [00_GUIDE_LLM.md](./00_GUIDE_LLM.md) - Méthodologie complète
2. **Conventions obligatoires** : [01_GLOSSAIRE.md](./01_GLOSSAIRE.md) - Suffixes `_0`, `_1`, etc.
3. **Valeurs d'enums** : [00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md) - 608 menus avec valeurs
4. **Jointures** : [03_RELATIONS.md](./03_RELATIONS.md) - Relations entre tables

### Pour explorer les données

- **[INDEX.md](./INDEX.md)** - Navigation complète vers tous les modules

---

## 📦 Fichiers essentiels

### Documentation LLM
| Fichier | Taille | Description |
|---------|--------|-------------|
| **[guides/00_GUIDE_LLM.md](./guides/00_GUIDE_LLM.md)** | 7.3 KB | Guide complet de génération SQL |
| **[guides/01_GLOSSAIRE.md](./guides/01_GLOSSAIRE.md)** | 7.9 KB | Conventions Sage X3 (_0, _1, préfixes) |
| **[guides/03_RELATIONS.md](./guides/03_RELATIONS.md)** | 11 KB | Relations et jointures entre tables |
| **[menus/00_MENUS_LOCAUX.md](./menus/00_MENUS_LOCAUX.md)** | 233 KB | 608 menus locaux, 3,127 valeurs |
| **[menus/menus_locaux.json](./menus/menus_locaux.json)** | 156 KB | Données structurées JSON |

### Modules complets (Données réelles)
| Module | Tables | Champs | Taille |
|--------|--------|--------|--------|
| **[modules/database/VENTES_COMPLETE.md](./modules/database/VENTES_COMPLETE.md)** | 17 | 1,653 | 82 KB |
| **[modules/database/ACHATS_COMPLETE.md](./modules/database/ACHATS_COMPLETE.md)** | 15 | 1,422 | 71 KB |
| **[modules/database/STOCKS_COMPLETE.md](./modules/database/STOCKS_COMPLETE.md)** | 16 | 884 | 47 KB |
| **[modules/database/PRODUCTION_COMPLETE.md](./modules/database/PRODUCTION_COMPLETE.md)** | 26 | 1,406 | 76 KB |
| **[modules/database/DONNEES_BASE_COMPLETE.md](./modules/database/DONNEES_BASE_COMPLETE.md)** | 38 | 2,162 | 115 KB |

**Total : 112 tables, 7,527 champs, 391 KB de documentation**

---

## 💡 Exemples d'utilisation

### Exemple 1 : Liste des articles en rupture

```sql
-- Consultez modules/database/STOCKS_COMPLETE.md pour les champs
-- Consultez menus/00_MENUS_LOCAUX.md pour les valeurs d'enums
SELECT 
    s.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    s.QTYSTU_0 AS quantite
FROM STOCK s
INNER JOIN ITMMASTER i ON s.ITMREF_0 = i.ITMREF_0
WHERE s.QTYSTU_0 <= 0
```

### Exemple 2 : Commandes en cours

```sql
-- Consultez modules/database/VENTES_COMPLETE.md et Menu 415
SELECT 
    SOHNUM_0 AS num_commande,
    BPCORD_0 AS client,
    ORDDAT_0 AS date_commande
FROM SORDER
WHERE ORDSTA_0 = 1  -- 1 = Ouverte (voir Menu 415)
```

---

## 📊 Structure de la base de connaissance

```
📁 sage_x3_knowledge_base/
├── 📘 INDEX.md                        # Navigation principale
├── 📘 README.md                       # Ce fichier
│
├── 📁 guides/                         # 🤖 GUIDES LLM (26 KB)
│   ├── 00_GUIDE_LLM.md               # Guide génération SQL
│   ├── 01_GLOSSAIRE.md               # Conventions nommage
│   └── 03_RELATIONS.md               # Relations tables
│
├── 📁 menus/                          # 🎯 MENUS LOCAUX (389 KB)
│   ├── 00_MENUS_LOCAUX.md            # 608 menus, 3,127 valeurs
│   └── menus_locaux.json             # Données structurées
│
├── 📁 modules/                        # 📦 MODULES (517 KB)
│   ├── 📁 database/                  # Données réelles de l'ERP (391 KB)
│   │   ├── VENTES_COMPLETE.md       # 17 tables, 1,653 champs
│   │   ├── ACHATS_COMPLETE.md       # 15 tables, 1,422 champs
│   │   ├── STOCKS_COMPLETE.md       # 16 tables, 884 champs
│   │   ├── PRODUCTION_COMPLETE.md   # 26 tables, 1,406 champs
│   │   └── DONNEES_BASE_COMPLETE.md # 38 tables, 2,162 champs
│   │
│   └── 📁 web/                       # Documentation site web (126 KB)
│       ├── 10_MODULE_VENTES.md
│       ├── 11_MODULE_ACHATS.md
│       ├── 12_MODULE_STOCKS.md
│       ├── 13_MODULE_PRODUCTION.md
│       └── 14_MODULE_DONNEES_BASE.md
│
├── 📁 data/                           # 💾 DONNÉES SOURCES (2.57 MB)
│   ├── tables_X3.csv                 # 1,888 tables
│   └── tables_champs_X3.csv          # 47,367 champs
│
└── 📁 scripts/                        # 🛠️ SCRIPTS
    ├── generate_complete_modules.py  # Génération documentation
    ├── fetch_essential_menus.py      # Téléchargement menus
    └── build_knowledge_base.py       # Script initial
```

---

## ✅ Checklist pour requêtes SQL

Avant de générer une requête, vérifiez :

- [ ] Consultez **guides/00_GUIDE_LLM.md** pour la méthodologie
- [ ] Tous les champs ont un suffixe `_0`, `_1`, etc. (voir **guides/01_GLOSSAIRE.md**)
- [ ] Les valeurs enum sont vérifiées dans **menus/00_MENUS_LOCAUX.md**
- [ ] Les jointures sont validées dans **guides/03_RELATIONS.md**
- [ ] Les noms de tables et champs sont corrects (modules **_COMPLETE.md**)

---

## 🎓 Cas d'usage

### Analyse de données
- Stock en temps réel par site/article
- CA par client/période/catégorie
- Suivi des commandes et livraisons
- Analyse des achats et réceptions

### Reporting
- États de stocks (ruptures, surstock, rotation)
- Suivi de production (OF en cours, retards)
- Analyse commerciale (CA, marges, performances)
- Tableaux de bord opérationnels

### Intégration
- Extraction de données pour BI
- Synchronisation avec systèmes tiers
- Exports personnalisés
- Automatisation de requêtes

---

## 🛠️ Scripts disponibles

- **scripts/generate_complete_modules.py** - Génère les fichiers complets depuis CSV
- **scripts/fetch_essential_menus.py** - Télécharge les menus locaux du web
- **scripts/build_knowledge_base.py** - Script de génération initial

---

## 📖 Documentation complète

Consultez **[INDEX.md](./INDEX.md)** pour :
- 14 modules fonctionnels (web)
- Navigation complète
- Tables par code d'activité
- Recherche par type de données

---

## 🎯 Points clés

### Conventions Sage X3 (CRITIQUES)
1. **Suffixes obligatoires** : Tous les champs se terminent par `_0`, `_1`, `_2`, etc.
2. **Valeurs d'enums** : Toujours vérifier dans menus/00_MENUS_LOCAUX.md
3. **Préfixes de tables** : SORDER*, PORDER*, STOCK*, MFGHEAD*, ITM*, BPARTNER*

### Modules essentiels
- **VENTES** : Commandes, livraisons, factures, devis
- **ACHATS** : Commandes fournisseurs, réceptions, factures
- **STOCKS** : Mouvements, inventaires, lots, emplacements
- **PRODUCTION** : OF, gammes, nomenclatures, postes de charge
- **DONNEES_BASE** : Articles, tiers, sites, analytique

---

## 📞 Ressources

- **Documentation officielle** : [LV Expertise X3](https://lvexpertisex3.com/)
- **Toolbox X3** : [toolbox.lvex3.com](https://toolbox.lvex3.com/)

---

*Base de connaissance générée avec Droid AI*  
*Dernière mise à jour : Octobre 2024*

# 📁 Structure de la Base de Connaissance Sage X3

## 🗂️ Organisation des fichiers

```
sage_x3_knowledge_base/
│
├── 📘 README.md                          # Guide complet et détaillé
├── 📘 QUICKSTART.md                      # Vue d'ensemble rapide (démarrage rapide) ⭐
├── 📘 INDEX.md                           # Navigation complète vers tous les modules
├── 📘 STRUCTURE.md                       # Ce fichier - Organisation des dossiers
│
├── 📁 guides/                            # 🤖 Guides LLM (26 KB)
│   ├── 00_GUIDE_LLM.md                  # Guide complet pour générer des requêtes SQL
│   ├── 01_GLOSSAIRE.md                  # Conventions Sage X3 (_0, _1, préfixes)
│   └── 03_RELATIONS.md                  # Relations et jointures entre tables
│
├── 📁 menus/                             # 🎯 Menus locaux (389 KB)
│   ├── 00_MENUS_LOCAUX.md               # 608 menus avec 3,127 valeurs d'enums
│   └── menus_locaux.json                # Données structurées JSON
│
├── 📁 modules/                           # 📦 Modules (517 KB)
│   │
│   ├── 📁 database/                     # 💾 Données réelles ERP (391 KB)
│   │   ├── VENTES_COMPLETE.md          # 17 tables, 1,653 champs
│   │   ├── ACHATS_COMPLETE.md          # 15 tables, 1,422 champs
│   │   ├── STOCKS_COMPLETE.md          # 16 tables, 884 champs
│   │   ├── PRODUCTION_COMPLETE.md      # 26 tables, 1,406 champs
│   │   └── DONNEES_BASE_COMPLETE.md    # 38 tables, 2,162 champs
│   │
│   └── 📁 web/                          # 🌐 Documentation web (126 KB)
│       ├── 10_MODULE_VENTES.md
│       ├── 11_MODULE_ACHATS.md
│       ├── 12_MODULE_STOCKS.md
│       ├── 13_MODULE_PRODUCTION.md
│       └── 14_MODULE_DONNEES_BASE.md
│
├── 📁 data/                              # 💾 Données sources (2.57 MB)
│   ├── tables_X3.csv                    # 1,888 tables de votre ERP
│   └── tables_champs_X3.csv             # 47,367 champs réels
│
└── 📁 scripts/                           # 🛠️ Scripts Python
    ├── generate_complete_modules.py     # Génère la documentation complète
    ├── fetch_essential_menus.py         # Télécharge les menus locaux
    ├── fetch_all_menus.py               # Version complète (tous les modules)
    └── build_knowledge_base.py          # Script initial de génération

```

---

## 📊 Statistiques globales

| Catégorie | Quantité |
|-----------|----------|
| **Fichiers markdown** | 18 |
| **Tables documentées** | 1,888 |
| **Champs documentés** | 47,367 |
| **Menus locaux** | 608 |
| **Valeurs d'enums** | 3,127 |
| **Taille totale** | 3.9 MB |

---

## 🎯 Logique d'organisation

### 📁 guides/
Contient tous les **guides pour LLM** pour générer des requêtes SQL correctes :
- Méthodologie de génération SQL
- Conventions obligatoires Sage X3
- Relations entre tables

### 📁 menus/
Contient les **608 menus locaux** (enums) avec toutes leurs valeurs :
- Markdown pour consultation humaine
- JSON pour traitement automatique

### 📁 modules/
Contient la **documentation des tables** organisée en 2 sous-dossiers :

#### 📁 database/
**Données réelles de votre ERP** (fichiers CSV) :
- Tous les champs avec types et descriptions
- 112 tables principales documentées
- Fichiers `*_COMPLETE.md`

#### 📁 web/
**Documentation du site web** LV Expertise X3 :
- Vue d'ensemble par module
- Tables principales avec exemples
- Fichiers `XX_MODULE_*.md`

### 📁 data/
Contient les **fichiers CSV sources** de votre ERP :
- Liste des 1,888 tables
- Liste des 47,367 champs avec détails

### 📁 scripts/
Contient les **scripts Python** pour générer la documentation :
- Génération des modules complets
- Téléchargement des menus locaux

---

## 🚀 Points d'entrée

### Pour un utilisateur
**Nouveau ?** Commencez par [QUICKSTART.md](./QUICKSTART.md) ⭐  
**Guide complet :** [README.md](./README.md)

### Pour un LLM générant du SQL
**Workflow recommandé :**
1. [guides/00_GUIDE_LLM.md](./guides/00_GUIDE_LLM.md) - Méthodologie
2. [guides/01_GLOSSAIRE.md](./guides/01_GLOSSAIRE.md) - Conventions (_0, _1)
3. [modules/database/*_COMPLETE.md](./modules/database/) - Tables et champs réels de l'ERP
4. [menus/00_MENUS_LOCAUX.md](./menus/00_MENUS_LOCAUX.md) - Valeurs d'enums
5. [guides/03_RELATIONS.md](./guides/03_RELATIONS.md) - Jointures

### Pour explorer
**Navigation complète :** [INDEX.md](./INDEX.md)

---

## 📝 Conventions de nommage

### Fichiers guides
- Préfixe `00_`, `01_`, `03_` : Ordre de lecture recommandé
- Tous dans le dossier `guides/`

### Fichiers modules
- `*_COMPLETE.md` : Documentation complète avec données CSV réelles
- `XX_MODULE_*.md` : Documentation web (XX = numéro du module)

### Fichiers menus
- `00_MENUS_LOCAUX.md` : Documentation markdown
- `menus_locaux.json` : Données structurées

---

## 🔄 Mise à jour de la documentation

### Pour régénérer les modules complets
```bash
cd scripts/
python3 generate_complete_modules.py
```

### Pour télécharger les menus locaux
```bash
cd scripts/
python3 fetch_essential_menus.py  # Version rapide (609 menus)
# ou
python3 fetch_all_menus.py        # Version complète (1571 menus)
```

---

## 💡 Avantages de cette structure

✅ **Séparation logique** : Guides / Données / Scripts  
✅ **Navigation facile** : Chaque type de fichier dans son dossier  
✅ **Maintenance simple** : Sources séparées de la documentation  
✅ **Évolutivité** : Ajout facile de nouveaux modules ou guides  
✅ **Clarté** : Structure intuitive pour humains et LLM  

---

*Structure créée le : Octobre 2024*  
*Base de connaissance optimisée pour génération SQL par LLM*

# Base de Connaissance Sage X3 - Dictionnaire des Tables

## 🎯 Objectif

Cette base de connaissance documente le dictionnaire des tables Sage X3 (Version 2023R1), avec :
- **Données réelles** de votre ERP (1,888 tables, 47,367 champs)
- **Documentation web** du site LV Expertise X3
- **608 menus locaux** avec 3,127 valeurs d'enums

## 📚 Structure

- **[INDEX.md](./INDEX.md)** : Point d'entrée principal avec navigation complète
- **[README.md](./README.md)** : Guide complet et structure détaillée
- **modules/database/** : 5 modules avec données réelles de l'ERP (112 tables)
- **modules/web/** : 5 modules documentation web (612+ tables)
- **guides/** : Guides LLM pour génération SQL
- **menus/** : 608 menus locaux avec valeurs d'enums

## 🚀 Démarrage rapide

1. Consultez l'[INDEX.md](./INDEX.md) pour une vue d'ensemble
2. Accédez directement au module qui vous intéresse
3. Utilisez la fonction de recherche de votre éditeur (Ctrl+F / Cmd+F)

## 📖 Modules disponibles

### 💾 Données réelles de l'ERP (modules/database/)

| Module | Fichier | Tables | Champs |
|--------|---------|--------|--------|
| **Ventes** | **[2.2_VENTES_COMPLETE.md](./modules/database/2.2_VENTES_COMPLETE.md)** | 17 | 1,653 |
| **Achats** | **[2.1_ACHATS_COMPLETE.md](./modules/database/2.1_ACHATS_COMPLETE.md)** | 15 | 1,422 |
| **Stocks** | **[2.3_STOCKS_COMPLETE.md](./modules/database/2.3_STOCKS_COMPLETE.md)** | 16 | 884 |
| **Production** | **[2.4_PRODUCTION_COMPLETE.md](./modules/database/2.4_PRODUCTION_COMPLETE.md)** | 26 | 1,406 |
| **Données de base** | **[2.5_DONNEES_BASE_COMPLETE.md](./modules/database/2.5_DONNEES_BASE_COMPLETE.md)** | 38 | 2,162 |

**Total : 112 tables principales avec 7,527 champs documentés**

### 🌐 Documentation web (modules/web/)

| Module | Fichier | Tables |
|--------|---------|--------|
| Achats | [3.1_MODULE_ACHATS.md](./modules/web/3.1_MODULE_ACHATS.md) | 66 |
| Ventes | [3.2_MODULE_VENTES.md](./modules/web/3.2_MODULE_VENTES.md) | 57 |
| Stocks | [3.3_MODULE_STOCKS.md](./modules/web/3.3_MODULE_STOCKS.md) | 103 |
| Production | [3.4_MODULE_PRODUCTION.md](./modules/web/3.4_MODULE_PRODUCTION.md) | 86 |
| Données de base | [3.5_MODULE_DONNEES_BASE.md](./modules/web/3.5_MODULE_DONNEES_BASE.md) | 300+ |

### 🤖 Guides LLM (guides/)

| Guide | Fichier | Description |
|-------|---------|-------------|
| Guide SQL | [1.1_GUIDE_LLM.md](./guides/1.1_GUIDE_LLM.md) | Méthodologie génération SQL |
| Glossaire | [1.2_GLOSSAIRE.md](./guides/1.2_GLOSSAIRE.md) | Conventions Sage X3 |
| Relations | [1.3_RELATIONS.md](./guides/1.3_RELATIONS.md) | Jointures entre tables |

### 🎯 Menus locaux (menus/)

| Fichier | Description |
|---------|-------------|
| [4.1_MENUS_LOCAUX.md](./menus/4.1_MENUS_LOCAUX.md) | 608 menus, 3,127 valeurs d'enums |
| [menus_locaux.json](./menus/menus_locaux.json) | Données structurées JSON |

### 🤖 Serveur MCP (mcp/)

| Fichier | Description |
|---------|-------------|
| [README.md](./mcp/README.md) | Documentation complète du serveur MCP |
| server.py | Serveur MCP pour Claude et autres LLM |

**Permet à Claude d'accéder directement aux données via MCP !**

## 🔍 Recherche

Pour rechercher une table spécifique :
1. Ouvrez l'INDEX.md
2. Utilisez Ctrl+F / Cmd+F
3. Recherchez par nom de table, abréviation ou code activité

## 📝 Format

### Modules database/ (données réelles)
Chaque fichier contient :
- ✅ **TOUS les champs** de chaque table
- ✅ Types et descriptions exacts
- ✅ Liens vers menus locaux (enums)
- ✅ Exemples SQL pour chaque table
- ✅ Optimisé pour génération SQL par LLM

### Modules web/ (documentation générique)
Chaque fichier contient :
- Vue d'ensemble du module
- Statistiques (nombre de tables, codes d'activité)
- Tables principales avec exemples de colonnes
- Liste complète des tables
- Relations avec autres modules
- Notes techniques importantes

## 🔗 Sources

- **Données database/** : CSV de votre ERP Sage X3 réel
- **Documentation web/** : [LV Expertise X3](https://lvexpertisex3.com/x3help/FRA/MCD/ATB_0.htm)
- **Menus locaux** : Scraping du site LV Expertise X3

## 📅 Version

**Sage X3 Version 2023R1**

## 🚀 Pour aller plus loin

👉 **Consultez [README.md](./README.md)** pour le guide complet et détaillé  
👉 **Consultez [STRUCTURE.md](./STRUCTURE.md)** pour l'arborescence complète

---

*Base de connaissance optimisée pour génération SQL par LLM*  
*Dernière mise à jour : Octobre 2024*

# 🚀 Playground SQL Sage X3

Interface web interactive pour tester des requêtes SQL sur des données fictives Sage X3.

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🎯 Démarrage Rapide

```bash
# 1. Installer les dépendances (si pas déjà fait)
npm install

# 2. La base de données SQLite est déjà créée avec 30 tables et 300 enregistrements
# Si vous voulez la recréer :
node ace migration:fresh --seed

# 3. Lancer le serveur de développement
node ace serve --hmr

# 4. Ouvrir le navigateur
# http://localhost:3333/playground/sql
```

## 🎨 Fonctionnalités

### Éditeur SQL
- Interface simple et intuitive
- 4 exemples de requêtes prêts à l'emploi
- Support de requêtes SELECT uniquement (sécurité)

### Validation
- Vérification syntaxique en temps réel
- Score de qualité (0-100)
- Détection des erreurs et avertissements
- Vérification des conventions Sage X3 (suffixes `_0`, `_1`)

### Exécution
- Résultats affichés en tableau
- Temps d'exécution
- Nombre de lignes retournées
- LIMIT automatique à 1000 lignes

### Sécurité
- ✅ READ-ONLY (SELECT uniquement)
- ✅ Blocage des commandes dangereuses (DROP, DELETE, UPDATE, etc.)
- ✅ LIMIT automatique
- ✅ Base de données isolée (sandbox)

## 📊 Tables Disponibles

### Sites (1 table)
- `facilitys` : Sites de stockage/production

### Tiers (4 tables)
- `bpartners` : Tiers génériques
- `bpaddresss` : Adresses des tiers
- `bpcustomers` : Clients
- `bpsuppliers` : Fournisseurs

### Articles (3 tables)
- `itmmasters` : Articles
- `itmfacilits` : Articles par site
- `itmbpss` : Articles-fournisseurs

### Stocks (4 tables)
- `stocks` : Stock physique
- `stojous` : Mouvements de stock
- `stolocs` : Emplacements
- `stolots` : Lots

### Ventes (6 tables)
- `sorders` : Commandes ventes (entête)
- `sorderqs` : Lignes quantités
- `sorderps` : Lignes prix
- `sdeliverys` : Livraisons
- `sdeliveryds` : Lignes livraisons
- `sinvoices` : Factures

### Achats (6 tables)
- `porders` : Commandes achats (entête)
- `porderqs` : Lignes quantités
- `porderps` : Lignes prix
- `preceipts` : Réceptions
- `preceiptds` : Lignes réceptions
- `pinvoices` : Factures

### Production (6 tables)
- `boms` : Nomenclatures (entête)
- `bomds` : Composants
- `routings` : Gammes
- `mfgheads` : Ordres de fabrication (entête)
- `mfgitms` : Articles OF
- `mfgopes` : Opérations OF

**Total : 30 tables** avec 10 enregistrements fictifs chacune = **300 lignes**

## 💡 Exemples de Requêtes

### 1. Articles avec stock
```sql
SELECT 
  i.itmref_0 AS code_article,
  i.itmdes1_0 AS designation,
  s.qtystu_0 AS quantite,
  s.stofcy_0 AS site
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
LIMIT 10
```

### 2. Commandes ventes avec client
```sql
SELECT 
  s.sohnum_0 AS num_commande,
  s.orddat_0 AS date_commande,
  b.bpcnam_0 AS client
FROM sorders s
INNER JOIN bpartners b ON s.bpcord_0 = b.bpcnum_0
ORDER BY s.orddat_0 DESC
LIMIT 20
```

### 3. Stock total par article
```sql
SELECT 
  i.itmref_0,
  i.itmdes1_0,
  SUM(s.qtystu_0) AS stock_total
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
GROUP BY i.itmref_0, i.itmdes1_0
HAVING stock_total > 0
ORDER BY stock_total DESC
LIMIT 20
```

## 🛠️ Architecture Technique

### Backend
- **AdonisJS 6** : Framework Node.js
- **Lucid ORM** : Gestion de la base de données
- **SQLite** : Base de données légère (better-sqlite3)

### Services
- `sql_executor.ts` : Exécution sécurisée des requêtes
- `sql_validator.ts` : Validation syntaxique et sémantique

### Endpoints API
- `GET /playground/sql` : Page principale
- `POST /api/playground/execute` : Exécuter une requête
- `POST /api/playground/validate` : Valider une requête
- `GET /api/playground/schema` : Obtenir le schéma
- `GET /api/playground/examples` : Obtenir les exemples

### Frontend
- **Edge.js** : Moteur de templates
- **Vanilla JavaScript** : Pas de framework, léger et rapide
- **CSS moderne** : Interface responsive

## 📁 Structure des Fichiers

```
playground/
├── PLAN.md                           # Plan technique détaillé
├── README.md                         # Ce fichier
│
├── database/
│   ├── migrations/                   # 31 migrations
│   ├── seeders/                      # 30 seeders
│   └── sage_x3_playground.db         # Base SQLite (ignorée par git)
│
├── app/
│   ├── controllers/
│   │   └── playground_controller.ts
│   ├── services/
│   │   ├── sql_executor.ts
│   │   └── sql_validator.ts
│   └── ...
│
└── resources/views/playground/
    └── index.edge                    # Interface web
```

## 🔧 Commandes Utiles

```bash
# Lancer le serveur de développement
node ace serve --hmr

# Recréer la base de données
node ace migration:fresh --seed

# Rollback des migrations
node ace migration:rollback

# Vérifier le statut des migrations
node ace migration:status

# Build pour production
node ace build

# Lancer en production
node server.js
```

## 🐛 Dépannage

### La base de données ne contient pas de données
```bash
# Recréer la base avec les seeders
node ace migration:fresh --seed
```

### Erreur lors de l'exécution d'une requête
- Vérifiez que la requête est un SELECT
- Vérifiez l'orthographe des tables et champs
- Les champs Sage X3 doivent avoir des suffixes `_0`, `_1`, etc.
- Utilisez le bouton "✓ Valider" pour identifier les problèmes

### Le serveur ne démarre pas
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install

# Vérifier qu'aucun processus n'utilise le port 3333
lsof -i :3333
```

## 📖 Ressources

- [Documentation AdonisJS](https://docs.adonisjs.com/)
- [Base de connaissance Sage X3](../README.md)
- [Guide LLM pour génération SQL](../guides/00_GUIDE_LLM.md)
- [Conventions Sage X3](../guides/01_GLOSSAIRE.md)

## 🚧 Améliorations Prévues

- [ ] Autocomplétion SQL (Monaco Editor)
- [ ] Export des résultats (CSV, JSON)
- [ ] Historique des requêtes
- [ ] Favoris
- [ ] Plus de données fictives
- [ ] Mode tutorial avec exercices

## 📝 Licence

Ce projet fait partie de la base de connaissance Sage X3.

---

**Créé avec** [Droid AI](https://factory.ai)  
**Dernière mise à jour** : 4 octobre 2024

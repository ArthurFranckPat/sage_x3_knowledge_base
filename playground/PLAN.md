# Plan : Playground SQL Exécutable avec Migrations Lucid

## Objectif

Créer un environnement complet permettant de **tester et exécuter réellement** les requêtes SQL générées par les LLM avec des données fictives cohérentes basées sur le schéma Sage X3.

---

## Architecture

### 1. Migrations Lucid (au lieu de schema.sql brut)

**Génération automatique** :
- Script `scripts/generate_migrations.py` lit `data/tables_champs_X3.csv`
- Génère des migrations TypeScript Lucid pour chaque module
- Respecte les conventions AdonisJS

**Structure** :
```
database/migrations/
├── 1_create_facilities_table.ts       # Sites
├── 2_create_bpartners_table.ts        # Tiers
├── 3_create_bpaddresses_table.ts      # Adresses
├── 4_create_itmmasters_table.ts       # Articles
├── 5_create_stocks_table.ts           # Stocks
├── 6_create_sorders_table.ts          # Commandes ventes
├── 7_create_sorderqs_table.ts         # Lignes commandes
└── ... (environ 30-40 migrations pour 112 tables)
```

**Exemple de migration générée** :
```typescript
// database/migrations/xxx_create_itmmasters_table.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'itmmasters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      // Champs Sage X3 (depuis CSV)
      table.string('itmref_0', 20).notNullable().unique() // Code article
      table.string('itmdes1_0', 60) // Désignation
      table.string('tclcod_0', 10) // Catégorie
      table.integer('itmsta_0').defaultTo(1) // Statut (Menu 5)
      table.string('tsicod_1', 3) // Groupe stats 1
      // ... autres champs depuis CSV
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
```

### 2. Models Lucid (optionnel)

Créer des models pour faciliter les requêtes :

```typescript
// app/models/itmmaster.ts
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Stock from '#models/stock'

export default class Itmmaster extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare itmref_0: string // Code article

  @column()
  declare itmdes1_0: string // Désignation

  @column()
  declare tclcod_0: string // Catégorie

  @column()
  declare itmsta_0: number // Statut

  @hasMany(() => Stock, { foreignKey: 'itmref_0', localKey: 'itmref_0' })
  declare stocks: HasMany<typeof Stock>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
```

### 3. Seeders Lucid (au lieu de script Python)

**Génération** :
- Script `scripts/generate_seeders.py` génère des seeders TypeScript
- Utilise Faker pour données réalistes
- Respecte les contraintes FK

**Structure** :
```
database/seeders/
├── 1_facility_seeder.ts
├── 2_bpartner_seeder.ts
├── 3_itmmaster_seeder.ts
├── 4_stock_seeder.ts
└── 5_sorder_seeder.ts
```

**Exemple de seeder** :
```typescript
// database/seeders/3_itmmaster_seeder.ts
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Itmmaster from '#models/itmmaster'

export default class extends BaseSeeder {
  async run() {
    const articles = [
      {
        itmref_0: 'ART001',
        itmdes1_0: 'Vélo électrique VTT',
        tclcod_0: 'VEL',
        itmsta_0: 1, // Actif
        tsicod_1: 'A01'
      },
      // ... 500 articles
    ]

    await Itmmaster.createMany(articles)
  }
}
```

### 4. Script Générateur Python

**Un seul script** : `scripts/generate_lucid_files.py`

Génère :
1. **Migrations** depuis `data/tables_champs_X3.csv`
2. **Models** (optionnel, à la demande)
3. **Seeders** avec Faker + `menus/menus_locaux.json`

Mapping types CSV → Lucid :
```python
TYPE_MAPPING = {
    'char': 'string',
    'varchar': 'string', 
    'int': 'integer',
    'decimal': 'decimal',
    'datetime': 'datetime',
    'date': 'date',
    'bit': 'boolean'
}
```

### 5. Commandes AdonisJS

```bash
# Créer la DB et exécuter les migrations
node ace migration:run

# Peupler avec données fictives
node ace db:seed

# Rollback si besoin
node ace migration:rollback

# Reset complet
node ace migration:fresh --seed
```

### 6. Configuration Database

Mise à jour de `config/database.ts` pour SQLite playground :

```typescript
// config/database.ts
import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: env.get('DB_CONNECTION', 'sqlite'),
  
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: env.get('DB_FILENAME', './database/sage_x3_playground.db')
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations']
      },
      seeders: {
        paths: ['database/seeders']
      }
    }
  }
})

export default dbConfig
```

### 7. Service SQL Executor (avec Lucid)

```typescript
// app/services/sql_executor.ts
import Database from '@adonisjs/lucid/services/db'

export default class SqlExecutor {
  async execute(sql: string) {
    // Validation sécurité
    if (!sql.trim().toUpperCase().startsWith('SELECT')) {
      throw new Error('Seules les requêtes SELECT sont autorisées')
    }

    // Ajouter LIMIT si absent
    const sqlWithLimit = this.addLimit(sql, 1000)

    // Exécuter avec timeout
    const results = await Database
      .connection('sqlite')
      .rawQuery(sqlWithLimit)
      .timeout(5000)

    return {
      rows: results.rows || results,
      rowCount: results.rows?.length || results.length,
      executionTime: results.duration
    }
  }

  private addLimit(sql: string, maxLimit: number): string {
    if (!/\bLIMIT\b/i.test(sql)) {
      return `${sql.trim().replace(/;$/, '')} LIMIT ${maxLimit}`
    }
    return sql
  }
}
```

### 8. Service SQL Validator

```typescript
// app/services/sql_validator.ts
import fs from 'fs'
import path from 'path'

interface ValidationResult {
  valid: boolean
  score: number
  errors: string[]
  warnings: string[]
}

export default class SqlValidator {
  private tables: Set<string>
  private fieldsByTable: Map<string, Set<string>>
  
  constructor() {
    this.loadSchema()
  }

  private loadSchema() {
    // Charger tables depuis CSV
    const tablesPath = path.join(process.cwd(), '../data/tables_X3.csv')
    const fieldsPath = path.join(process.cwd(), '../data/tables_champs_X3.csv')
    
    // Parse CSV et populate this.tables et this.fieldsByTable
  }

  validate(sql: string): ValidationResult {
    const result: ValidationResult = {
      valid: true,
      score: 100,
      errors: [],
      warnings: []
    }

    // 1. Vérifier que c'est un SELECT
    if (!sql.trim().toUpperCase().startsWith('SELECT')) {
      result.errors.push('Seules les requêtes SELECT sont autorisées')
      result.valid = false
      result.score = 0
      return result
    }

    // 2. Extraire les tables (regex simple)
    const fromMatch = sql.match(/FROM\s+(\w+)/gi)
    const joinMatches = sql.match(/JOIN\s+(\w+)/gi)
    
    // 3. Vérifier que les tables existent
    // 4. Vérifier que les champs ont des suffixes _0, _1
    // 5. Calculer le score

    return result
  }
}
```

### 9. Controller Playground

```typescript
// app/controllers/playground_controller.ts
import { HttpContext } from '@adonisjs/core/http'
import SqlExecutor from '#services/sql_executor'
import SqlValidator from '#services/sql_validator'

export default class PlaygroundController {
  async index({ view }: HttpContext) {
    return view.render('playground/index')
  }

  async execute({ request, response }: HttpContext) {
    const { sql } = request.only(['sql'])
    
    try {
      const validator = new SqlValidator()
      const validation = validator.validate(sql)
      
      if (!validation.valid) {
        return response.badRequest({
          success: false,
          errors: validation.errors
        })
      }

      const executor = new SqlExecutor()
      const result = await executor.execute(sql)
      
      return response.ok({
        success: true,
        data: result,
        validation: validation
      })
    } catch (error) {
      return response.badRequest({
        success: false,
        error: error.message
      })
    }
  }

  async validate({ request, response }: HttpContext) {
    const { sql } = request.only(['sql'])
    
    const validator = new SqlValidator()
    const validation = validator.validate(sql)
    
    return response.ok(validation)
  }

  async schema({ response }: HttpContext) {
    // Retourner le schéma des tables
    // Charger depuis CSV ou DB
    return response.ok({
      tables: []
    })
  }
}
```

### 10. Routes

```typescript
// start/routes.ts
import router from '@adonisjs/core/services/router'

router.group(() => {
  // Page principale
  router.get('/playground/sql', '#controllers/playground_controller.index')
  
  // API
  router.post('/api/playground/execute', '#controllers/playground_controller.execute')
  router.post('/api/playground/validate', '#controllers/playground_controller.validate')
  router.get('/api/playground/schema', '#controllers/playground_controller.schema')
}).prefix('/')
```

### 11. Interface Web

```html
<!-- resources/views/playground/index.edge -->
<!DOCTYPE html>
<html>
<head>
  <title>Playground SQL - Sage X3</title>
  <style>
    #editor { 
      height: 400px; 
      border: 1px solid #ccc;
      font-family: monospace;
    }
    #results {
      margin-top: 20px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>🚀 Playground SQL - Sage X3</h1>
  
  <div>
    <h2>Éditeur SQL</h2>
    <textarea id="editor">-- Écrivez votre requête SQL ici
SELECT 
  i.itmref_0,
  i.itmdes1_0,
  s.qtystu_0
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
LIMIT 10;</textarea>
  </div>

  <div style="margin: 20px 0;">
    <button onclick="executeQuery()">▶️ Exécuter</button>
    <button onclick="validateQuery()">✓ Valider</button>
  </div>

  <div id="validation"></div>
  <div id="results"></div>

  <script>
    async function executeQuery() {
      const sql = document.getElementById('editor').value
      
      try {
        const response = await fetch('/api/playground/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sql })
        })
        
        const data = await response.json()
        
        if (data.success) {
          displayResults(data.data)
        } else {
          displayErrors(data.errors || [data.error])
        }
      } catch (error) {
        displayErrors([error.message])
      }
    }

    async function validateQuery() {
      const sql = document.getElementById('editor').value
      
      const response = await fetch('/api/playground/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql })
      })
      
      const validation = await response.json()
      displayValidation(validation)
    }

    function displayResults(data) {
      const resultsDiv = document.getElementById('results')
      
      if (!data.rows || data.rows.length === 0) {
        resultsDiv.innerHTML = '<p>Aucun résultat</p>'
        return
      }

      const columns = Object.keys(data.rows[0])
      
      let html = '<h3>Résultats (' + data.rowCount + ' lignes)</h3>'
      html += '<table><thead><tr>'
      
      columns.forEach(col => {
        html += '<th>' + col + '</th>'
      })
      
      html += '</tr></thead><tbody>'
      
      data.rows.forEach(row => {
        html += '<tr>'
        columns.forEach(col => {
          html += '<td>' + (row[col] || '') + '</td>'
        })
        html += '</tr>'
      })
      
      html += '</tbody></table>'
      resultsDiv.innerHTML = html
    }

    function displayErrors(errors) {
      const resultsDiv = document.getElementById('results')
      resultsDiv.innerHTML = '<div style="color: red;"><h3>Erreurs</h3><ul>' + 
        errors.map(e => '<li>' + e + '</li>').join('') + 
        '</ul></div>'
    }

    function displayValidation(validation) {
      const validationDiv = document.getElementById('validation')
      
      let html = '<div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">'
      html += '<h3>Validation</h3>'
      html += '<p>Score: ' + validation.score + '/100</p>'
      
      if (validation.errors.length > 0) {
        html += '<div style="color: red;"><strong>Erreurs:</strong><ul>'
        validation.errors.forEach(e => html += '<li>' + e + '</li>')
        html += '</ul></div>'
      }
      
      if (validation.warnings.length > 0) {
        html += '<div style="color: orange;"><strong>Avertissements:</strong><ul>'
        validation.warnings.forEach(w => html += '<li>' + w + '</li>')
        html += '</ul></div>'
      }
      
      html += '</div>'
      validationDiv.innerHTML = html
    }
  </script>
</body>
</html>
```

---

## Structure Finale

```
playground/
├── PLAN.md                           # Ce document
├── README.md                         # Guide d'utilisation
│
├── database/
│   ├── sage_x3_playground.db         # Créé par migrations
│   ├── migrations/                   # Généré par script Python
│   │   ├── 1_create_facilities_table.ts
│   │   ├── 2_create_bpartners_table.ts
│   │   ├── 3_create_itmmasters_table.ts
│   │   └── ... (40 migrations)
│   └── seeders/                      # Généré par script Python
│       ├── 1_facility_seeder.ts
│       ├── 2_bpartner_seeder.ts
│       └── ... (10 seeders)
│
├── scripts/
│   ├── generate_lucid_files.py       # Génère migrations + seeders
│   ├── validate_sql.py               # Validateur SQL
│   └── reset_playground.sh           # migration:fresh --seed
│
├── app/
│   ├── controllers/
│   │   └── playground_controller.ts
│   ├── services/
│   │   ├── sql_executor.ts           # Exécution avec Lucid
│   │   └── sql_validator.ts
│   └── models/                       # Optionnel
│       ├── itmmaster.ts
│       ├── stock.ts
│       └── bpartner.ts
│
├── tests/
│   └── sql/
│       ├── ventes.yaml
│       └── stocks.yaml
│
└── resources/views/playground/
    └── index.edge
```

---

## Données Générées

### Volumes
- **Articles** (ITMMASTER) : 500 articles
- **Tiers** (BPARTNER) : 150 tiers (100 clients + 50 fournisseurs)
- **Sites** (FACILITY) : 5 sites
- **Stocks** (STOCK) : ~2500 lignes (500 articles × 5 sites)
- **Commandes ventes** (SORDER) : 200 commandes
- **Lignes commandes** (SORDERQ/SORDERP) : ~800 lignes
- **Commandes achats** (PORDER) : 150 commandes
- **OF** (MFGHEAD) : 100 ordres de fabrication
- **Mouvements** (STOJOU) : 1000 mouvements

### Contraintes Respectées
- Valeurs d'enums valides (depuis `menus/menus_locaux.json`)
- Relations FK cohérentes (BPARTNER ← SORDER, ITMMASTER ← STOCK)
- Dates chronologiques (entre J-365 et aujourd'hui)
- Quantités et montants réalistes
- Suffixes `_0`, `_1`, `_2` respectés

---

## Étapes d'Implémentation

### Phase 1 : Génération des Migrations
1. ✅ Script Python `generate_lucid_files.py`
   - Parse `data/tables_champs_X3.csv`
   - Génère migrations TypeScript Lucid
   - Crée 30-40 fichiers dans `database/migrations/`

### Phase 2 : Génération des Seeders
2. ✅ Même script génère seeders
   - Charge `menus/menus_locaux.json`
   - Utilise Faker pour données réalistes
   - Crée 10-15 fichiers dans `database/seeders/`

### Phase 3 : Initialisation DB
3. ✅ Commandes :
   ```bash
   node ace migration:run
   node ace db:seed
   ```

### Phase 4 : Services & API
4. ✅ Implémenter `sql_executor.ts` et `sql_validator.ts`
5. ✅ Créer routes et controller

### Phase 5 : Interface Web
6. ✅ Page `/playground/sql` avec éditeur
7. ✅ Intégration API

### Phase 6 : Tests
8. ⬜ Collection de requêtes YAML
9. ⬜ Tests automatisés

---

## Exemples de Requêtes Testables

```sql
-- 1. Articles en rupture de stock
SELECT 
  s.itmref_0, 
  i.itmdes1_0, 
  s.stofcy_0,
  s.qtystu_0
FROM stocks s
INNER JOIN itmmasters i ON s.itmref_0 = i.itmref_0
WHERE s.qtystu_0 <= 0;

-- 2. Top 10 clients par CA
SELECT 
  b.bpcnam_0,
  SUM(sp.netpri_0 * sq.qty_0) AS ca_total
FROM sorders s
INNER JOIN bpartners b ON s.bpcord_0 = b.bpcnum_0
INNER JOIN sorderqs sq ON s.sohnum_0 = sq.sohnum_0
INNER JOIN sorderps sp ON sq.sohnum_0 = sp.sohnum_0 
  AND sq.soplin_0 = sp.soplin_0
WHERE s.orddat_0 >= DATE('now', '-1 year')
GROUP BY b.bpcnam_0
ORDER BY ca_total DESC
LIMIT 10;

-- 3. OF en retard
SELECT 
  m.mfgnum_0,
  m.itmref_0,
  i.itmdes1_0,
  m.strdat_0 AS date_prevue,
  m.mfgsta_0
FROM mfgheads m
INNER JOIN itmmasters i ON m.itmref_0 = i.itmref_0
WHERE m.strdat_0 < DATE('now')
  AND m.mfgsta_0 = 2
  AND m.cplqty_0 < m.mfgqty_0;

-- 4. Stock total par article
SELECT 
  i.itmref_0,
  i.itmdes1_0,
  SUM(s.qtystu_0) AS stock_total
FROM itmmasters i
LEFT JOIN stocks s ON i.itmref_0 = s.itmref_0
GROUP BY i.itmref_0, i.itmdes1_0
HAVING stock_total > 0
ORDER BY stock_total DESC;
```

---

## Avantages de cette Architecture

✅ **Exécution réelle** : Résultats concrets, pas juste validation  
✅ **Données cohérentes** : Relations respectées, valeurs réalistes  
✅ **Sécurité** : Sandbox isolée, READ-ONLY uniquement  
✅ **Formation** : Exemples concrets pour comprendre Sage X3  
✅ **Itération rapide** : Tester requêtes LLM immédiatement  
✅ **Portable** : SQLite = zéro config serveur  
✅ **Évolutif** : Facile d'ajouter tables/données  
✅ **Versionning** : Migrations trackées dans Git  
✅ **TypeScript** : Typage fort, autocomplétion  
✅ **Intégré** : Ecosystème AdonisJS natif  

---

## Technologies

- **Backend** : AdonisJS 6
- **ORM** : Lucid (déjà installé)
- **Base de données** : SQLite + better-sqlite3
- **Générateur de données** : Python + Faker
- **Parser SQL** : node-sql-parser (à installer)
- **Éditeur code** : Textarea simple (Monaco/Ace en option)
- **Frontend** : Edge.js + Vanilla JS

---

## Commandes Utiles

```bash
# Générer migrations et seeders depuis CSV
cd ../scripts
python3 generate_lucid_files.py

# Créer la DB
node ace migration:run

# Peupler la DB
node ace db:seed

# Reset complet
node ace migration:fresh --seed

# Lancer le playground
node ace serve --hmr

# Accéder au playground
# http://localhost:3333/playground/sql
```

---

## Prochaines Étapes

1. ✅ Créer ce document PLAN.md
2. ✅ Créer le script `generate_lucid_files.py`
3. ✅ Générer les migrations (30 tables)
4. ✅ Générer les seeders (30 seeders)
5. ✅ Initialiser la DB (31 migrations exécutées)
6. ✅ Peupler la DB (30 seeders exécutés - 300 enregistrements)
7. ✅ Créer les services TypeScript (sql_executor, sql_validator)
8. ✅ Créer le controller et routes
9. ✅ Créer l'interface web
10. ⬜ Tests et validation
11. ⬜ Documentation utilisateur

---

## État d'Avancement

### ✅ Phase 1-3 : TERMINÉES
- **30 migrations** générées et exécutées
- **30 seeders** générés et exécutés
- **31 tables** créées dans SQLite (30 tables Sage X3 + users)
- **300 enregistrements** insérés (10 par table)

### ✅ Phase 4-5 : TERMINÉES
- **sql_executor.ts** : Exécution sécurisée des requêtes SELECT
- **sql_validator.ts** : Validation syntaxique et sémantique
- **playground_controller.ts** : 5 endpoints API
- **Routes** : `/playground/sql` + 4 endpoints API

### ✅ Phase 6 : TERMINÉE
- **Interface web** : Éditeur SQL avec coloration
- **Exemples** : 4 requêtes SQL prêtes à l'emploi
- **Validation en temps réel** : Score 0-100
- **Résultats tabulaires** : Affichage dynamique

---

## Comment Utiliser

```bash
# Dans le dossier playground/

# 1. Lancer le serveur
node ace serve --hmr

# 2. Ouvrir le navigateur
# http://localhost:3333/playground/sql

# 3. Tester une requête exemple
# Cliquer sur "📚 Exemples" et sélectionner un exemple
# Cliquer sur "▶️ Exécuter"
```

---

## Tables Disponibles

| Module | Tables | Exemples |
|--------|--------|----------|
| **Sites** | facilitys | Sites de stockage/production |
| **Tiers** | bpartners, bpaddresss, bpcustomers, bpsuppliers | Clients et fournisseurs |
| **Articles** | itmmasters, itmfacilits, itmbpss | Articles et leurs paramètres |
| **Stocks** | stocks, stojous, stolocs, stolots | Stock et mouvements |
| **Ventes** | sorders, sorderqs, sorderps, sdeliverys, sdeliveryds, sinvoices | Commandes et factures |
| **Achats** | porders, porderqs, porderps, preceipts, preceiptds, pinvoices | Commandes et réceptions |
| **Production** | boms, bomds, routings, mfgheads, mfgitms, mfgopes | Nomenclatures et OF |

**Total : 30 tables** avec 10 enregistrements chacune

---

## Endpoints API

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/playground/sql` | GET | Page principale du playground |
| `/api/playground/execute` | POST | Exécute une requête SQL |
| `/api/playground/validate` | POST | Valide une requête sans l'exécuter |
| `/api/playground/schema` | GET | Retourne le schéma complet de la DB |
| `/api/playground/examples` | GET | Retourne 4 exemples de requêtes |

---

## Sécurité

✅ **READ-ONLY** : Seules les requêtes SELECT sont autorisées  
✅ **Validation** : Blocage des commandes dangereuses (DROP, DELETE, etc.)  
✅ **LIMIT automatique** : Max 1000 lignes si LIMIT absent  
✅ **Timeout** : Pas implémenté pour l'instant (SQLite synchrone)  
✅ **Sandbox** : Base de données dédiée, isolée  

---

## Améliorations Futures

### Court terme
- [ ] Ajouter plus de données fictives (actuellement 10/table)
- [ ] Améliorer le générateur de seeders (données plus réalistes)
- [ ] Ajouter des index sur les FK pour performances
- [ ] Créer un script de reset rapide (`npm run reset:playground`)

### Moyen terme
- [ ] Éditeur SQL avec autocomplétion (Monaco Editor)
- [ ] Export des résultats (CSV, JSON, Excel)
- [ ] Historique des requêtes (localStorage ou DB)
- [ ] Favoris / requêtes sauvegardées
- [ ] Validation avancée (vérifier que les tables/champs existent réellement)

### Long terme
- [ ] Mode "Tutorial" avec exercices guidés
- [ ] Comparateur de requêtes (optimisations)
- [ ] Génération de requête assistée par formulaire
- [ ] Intégration avec les guides LLM (suggestions contextuelles)
- [ ] Tests automatisés des requêtes exemples

---

*Document créé le : 2024*  
*Dernière mise à jour : 4 octobre 2024*  
*Base de connaissance : Sage X3 Knowledge Base*

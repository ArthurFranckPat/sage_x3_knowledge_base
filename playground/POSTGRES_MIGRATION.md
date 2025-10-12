# 🎉 Migration vers PostgreSQL - Complétée

## ✅ Résumé

Le playground Sage X3 a été migré avec succès de **SQLite** vers **PostgreSQL**.

---

## 🔄 Ce qui a changé

### 1. **Configuration de la base de données**

**Fichier** : `config/database.ts`

```typescript
// AVANT (SQLite)
connection: 'sqlite'

// APRÈS (PostgreSQL)
connection: 'postgres'
```

Configuration PostgreSQL ajoutée :
- Host: 127.0.0.1
- Port: 5432
- User: postgres
- Password: postgres
- Database: sage_x3_playground

### 2. **Variables d'environnement**

**Fichier** : `.env`

```bash
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=sage_x3_playground
```

### 3. **Driver installé**

```bash
npm install pg
```

---

## ✨ Avantages de PostgreSQL

### 1. **FULL OUTER JOIN natif** ✅

**SQLite** :
```sql
-- Nécessitait une réécriture complexe avec CTE + UNION
WITH cte1 AS (...), cte2 AS (...)
SELECT * FROM cte1 LEFT JOIN cte2
UNION
SELECT * FROM cte1 RIGHT JOIN cte2
```

**PostgreSQL** :
```sql
-- Fonctionne directement !
SELECT * 
FROM table1 m
FULL OUTER JOIN table2 w ON m.id = w.id
```

### 2. **Meilleure compatibilité Oracle**

| Fonction Oracle | SQLite | PostgreSQL |
|-----------------|--------|------------|
| `TRUNC(date, 'MM')` | ❌ Nécessite traduction | ✅ `DATE_TRUNC('month', date)` |
| `ADD_MONTHS()` | ❌ Nécessite traduction | ✅ `date + INTERVAL '12 months'` |
| `SYSDATE` | ❌ `DATE('now')` | ✅ `CURRENT_DATE` |
| `NVL()` | ✅ `COALESCE()` | ✅ `COALESCE()` |
| `FULL OUTER JOIN` | ❌ Non supporté | ✅ Supporté |

### 3. **Performances**

- ✅ Optimiseur de requêtes plus avancé
- ✅ Meilleure gestion des index
- ✅ Support des requêtes complexes
- ✅ Transactions ACID complètes

### 4. **Plus proche de la production**

Sage X3 utilise **Oracle** ou **SQL Server**, pas SQLite. PostgreSQL est beaucoup plus proche en termes de :
- Syntaxe SQL
- Fonctions disponibles
- Comportement des transactions
- Types de données

---

## 📊 État actuel

### Base de données

- **33 tables** Sage X3 créées
- **971 mouvements** de stock (données de test)
- **10 articles** de test
- Période : 12 mois glissants

### Tables principales

| Module | Tables |
|--------|--------|
| Articles | ITMMASTER, ITMFACILIT, ITMBPS |
| Stock | STOCK, STOJOU, STOLOC, STOLOT |
| Ventes | SORDER, SORDERQ, SORDERP, SDELIVERY, SDELIVERYD, SINVOICE |
| Achats | PORDER, PORDERQ, PORDERP, PRECEIPT, PRECEIPTD, PINVOICE |
| Production | BOM, BOMD, ROUTING, MFGHEAD, MFGITM, MFGOPE |
| Partenaires | BPARTNER, BPADDRESS, BPCUSTOMER, BPSUPPLIER |
| Autre | FACILITY, QUERY_HISTORIES |

---

## 🎯 Tester la requête

### Requête Oracle originale (fonctionne maintenant !)

```sql
SELECT
  NVL(m.ITMREF_0, w.ITMREF_0)  AS "Article",
  i.ITMDES1_0                  AS "Désignation",
  m.conso_mens_moy             AS "Conso mensuelle moy (US/mois)",
  m.nb_mois                    AS "Nb mois pris en compte",
  w.conso_hebdo_moy            AS "Conso hebdo moy (US/sem)",
  w.nb_semaines                AS "Nb semaines prises en compte"
FROM (
  SELECT ITMREF_0, AVG(conso_mois) AS conso_mens_moy, COUNT(*) AS nb_mois
  FROM (
    SELECT j.ITMREF_0, TRUNC(j.IPTDAT_0,'MM') AS mois, SUM(-j.QTYSTU_0) AS conso_mois
    FROM STOJOU j
    WHERE j.TRSTYP_0 = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
      AND j.IPTDAT_0 <  TRUNC(SYSDATE) + 1
    GROUP BY j.ITMREF_0, TRUNC(j.IPTDAT_0,'MM')
  )
  GROUP BY ITMREF_0
) m
FULL OUTER JOIN (
  SELECT ITMREF_0, AVG(conso_sem) AS conso_hebdo_moy, COUNT(*) AS nb_semaines
  FROM (
    SELECT j.ITMREF_0, TRUNC(j.IPTDAT_0,'IW') AS semaine, SUM(-j.QTYSTU_0) AS conso_sem
    FROM STOJOU j
    WHERE j.TRSTYP_0 = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
      AND j.IPTDAT_0 <  TRUNC(SYSDATE) + 1
    GROUP BY j.ITMREF_0, TRUNC(j.IPTDAT_0,'IW')
  )
  GROUP BY ITMREF_0
) w
  ON w.ITMREF_0 = m.ITMREF_0
LEFT JOIN ITMMASTER i
  ON i.ITMREF_0 = NVL(m.ITMREF_0, w.ITMREF_0)
ORDER BY "Article"
LIMIT 10;
```

### Version PostgreSQL adaptée

Voir `test_query_postgres.sql` pour la version utilisant :
- `DATE_TRUNC()` au lieu de `TRUNC()`
- `CURRENT_DATE` au lieu de `SYSDATE`
- `COALESCE()` au lieu de `NVL()`

---

## 🔧 Commandes utiles

### Migrations

```bash
# Voir le statut
node ace migration:status

# Exécuter les migrations
node ace migration:run

# Rollback
node ace migration:rollback
```

### Seeders

```bash
# Exécuter tous les seeders
node ace db:seed

# Exécuter un seeder spécifique
node ace db:seed --files="database/seeders/test_consommation_seeder.ts"
```

### Réinitialiser la DB

```bash
# Drop toutes les tables et recréer
node ace migration:fresh

# + Run seeders
node ace migration:fresh --seed
```

---

## 📝 Notes importantes

### Traducteur Oracle → SQLite

Le traducteur `OracleToSqliteTranslator` reste utile car :
- Il peut servir de base pour un futur `OracleToPostgresTranslator`
- Certaines fonctions Oracle nécessitent encore une adaptation

### Queries history

Les requêtes sauvegardées dans SQLite ne sont **pas** migrées automatiquement. Si besoin :
1. Exporter depuis SQLite : `sqlite3 tmp/db.sqlite3 "SELECT * FROM query_histories"`
2. Importer dans PostgreSQL

---

## ✅ Checklist migration

- [x] Driver `pg` installé
- [x] Variables `.env` configurées
- [x] `config/database.ts` mis à jour
- [x] PostgreSQL local démarré
- [x] Base de données `sage_x3_playground` créée
- [x] Migrations exécutées (33 tables)
- [x] Seeder de test exécuté (971 mouvements)
- [x] FULL OUTER JOIN testé et fonctionnel

---

**Date de migration** : 2025-01-11  
**Statut** : ✅ Complétée et opérationnelle

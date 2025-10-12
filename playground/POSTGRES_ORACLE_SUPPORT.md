# 🔄 Support Oracle avec PostgreSQL

## ✅ Traduction Automatique Oracle → PostgreSQL

Le playground détecte maintenant automatiquement le driver de base de données et applique le traducteur approprié.

---

## 🎯 Fonctionnement

### Détection automatique

```typescript
// Dans SqlExecutor
const dbClient = Database.connection().config.client
const isPostgres = dbClient === 'pg'
const isSqlite = dbClient === 'better-sqlite3'

// Choix du traducteur adapté
const translator = isPostgres
  ? new OracleToPostgresTranslator()
  : new OracleToSqliteTranslator()
```

---

## 📋 Conversions Oracle → PostgreSQL

### Fonctions de date

| Oracle | PostgreSQL | Notes |
|--------|------------|-------|
| `TRUNC(date, 'MM')` | `DATE_TRUNC('month', date)` | Début du mois |
| `TRUNC(date, 'IW')` | `DATE_TRUNC('week', date)` | Début de semaine |
| `TRUNC(date, 'YYYY')` | `DATE_TRUNC('year', date)` | Début d'année |
| `TRUNC(date, 'DD')` | `DATE(date)` | Tronquer au jour |
| `TRUNC(date)` | `DATE(date)` | Sans format |
| `ADD_MONTHS(date, N)` | `date + INTERVAL 'N months'` | Ajouter/retirer mois |
| `SYSDATE` | `CURRENT_DATE` | Date actuelle |
| `NVL(a, b)` | `COALESCE(a, b)` | Déjà compatible |
| `FROM DUAL` | *(supprimé)* | Inutile en PostgreSQL |

### Exemples de conversion

#### 1. TRUNC avec format

**Oracle** :
```sql
SELECT TRUNC(IPTDAT_0, 'MM') AS mois
FROM STOJOU
```

**PostgreSQL** :
```sql
SELECT DATE_TRUNC('month', IPTDAT_0) AS mois
FROM STOJOU
```

#### 2. ADD_MONTHS

**Oracle** :
```sql
WHERE IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
```

**PostgreSQL** :
```sql
WHERE IPTDAT_0 >= (DATE(CURRENT_DATE) + INTERVAL '-12 months')
```

#### 3. Requête complète

**Oracle** :
```sql
SELECT 
  ITMREF_0,
  TRUNC(IPTDAT_0, 'MM') AS mois,
  SUM(-QTYSTU_0) AS conso
FROM STOJOU
WHERE IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
  AND IPTDAT_0 < TRUNC(SYSDATE) + 1
GROUP BY ITMREF_0, TRUNC(IPTDAT_0, 'MM')
```

**PostgreSQL (traduit automatiquement)** :
```sql
SELECT 
  ITMREF_0,
  DATE_TRUNC('month', IPTDAT_0) AS mois,
  SUM(-QTYSTU_0) AS conso
FROM STOJOU
WHERE IPTDAT_0 >= (DATE(CURRENT_DATE) + INTERVAL '-12 months')
  AND IPTDAT_0 < DATE(CURRENT_DATE) + 1
GROUP BY ITMREF_0, DATE_TRUNC('month', IPTDAT_0)
```

---

## 🔍 Détection des fonctionnalités Oracle

Le traducteur détecte automatiquement :

- ✅ `TRUNC()`
- ✅ `ADD_MONTHS()`
- ✅ `SYSDATE`
- ✅ `NVL()`
- ✅ `TO_DATE()`
- ✅ `TO_CHAR()`
- ✅ `DECODE()`
- ✅ `ROWNUM`
- ✅ `FROM DUAL`
- ✅ `||` (concaténation)
- ✅ `CONNECT BY` / `START WITH`
- ✅ `(+)` (outer join Oracle)

---

## ⚠️ Fonctionnalités non traduites

Certaines fonctionnalités Oracle complexes ne sont pas encore traduites automatiquement :

### DECODE()

**Oracle** :
```sql
DECODE(status, 1, 'Actif', 2, 'Inactif', 'Autre')
```

**Solution PostgreSQL** :
```sql
CASE 
  WHEN status = 1 THEN 'Actif'
  WHEN status = 2 THEN 'Inactif'
  ELSE 'Autre'
END
```

### ROWNUM

**Oracle** :
```sql
SELECT * FROM table WHERE ROWNUM <= 10
```

**Solution PostgreSQL** :
```sql
SELECT * FROM table LIMIT 10
```

### CONNECT BY (hiérarchies)

**Oracle** :
```sql
SELECT * FROM table
START WITH parent_id IS NULL
CONNECT BY PRIOR id = parent_id
```

**Solution PostgreSQL** :
```sql
WITH RECURSIVE tree AS (
  SELECT * FROM table WHERE parent_id IS NULL
  UNION ALL
  SELECT t.* FROM table t
  JOIN tree ON t.parent_id = tree.id
)
SELECT * FROM tree
```

---

## 🎯 Résultat dans le Playground

### Console serveur

Lors de l'exécution, vous verrez :

```bash
🔄 Traduction Oracle → PostgreSQL appliquée:
  ✓ TRUNC(date, 'MM') converti
  ✓ TRUNC(date, 'IW') converti
  ✓ ADD_MONTHS converti
  ✓ SYSDATE converti
  ✓ NVL converti
```

### Messages d'erreur

Si une erreur survient, le message est maintenant **propre et sans emojis** :

```
[ERREUR] fonction date_trunc() n'existe pas

[CONTEXTE]
  10:   FROM (
→ 11:     SELECT j.ITMREF_0, DATE_TRUNC('month', j.IPTDAT_0) AS mois
  12:     FROM STOJOU j

[SUGGESTIONS]
  - Vérifiez que le nom de la fonction est correct
  - Vérifiez le nombre et le type des arguments
```

---

## 🔧 Fichiers impliqués

1. **`app/services/oracle_to_postgres_translator.ts`** - Nouveau traducteur PostgreSQL
2. **`app/services/oracle_to_sqlite_translator.ts`** - Traducteur SQLite (existant)
3. **`app/services/sql_executor.ts`** - Détection driver + choix traducteur
4. **`app/services/sql_error_formatter.ts`** - Messages d'erreur propres

---

## ✅ Avantages

### vs SQLite

PostgreSQL supporte **nativement** :
- ✅ FULL OUTER JOIN
- ✅ DATE_TRUNC()
- ✅ INTERVAL
- ✅ Types avancés (JSON, Array, etc.)
- ✅ Fenêtres (OVER)
- ✅ CTE récursifs

### vs Oracle

PostgreSQL est **plus proche d'Oracle** :
- Syntaxe SQL similaire
- Fonctions de date compatibles
- Types de données équivalents
- Transactions ACID complètes

---

## 🚀 Utilisation

### Pas d'action nécessaire !

Écrivez simplement vos requêtes en **syntaxe Oracle** dans le playground.  
La traduction se fait **automatiquement** et de manière **transparente**.

### Exemple

**Copiez-collez directement votre requête Oracle** :

```sql
SELECT 
  NVL(m.ITMREF_0, w.ITMREF_0) AS "Article",
  i.ITMDES1_0 AS "Désignation"
FROM (
  SELECT ITMREF_0, TRUNC(IPTDAT_0, 'MM') AS mois
  FROM STOJOU
  WHERE IPTDAT_0 >= ADD_MONTHS(SYSDATE, -12)
) m
FULL OUTER JOIN (...)
```

Le playground :
1. ✅ Détecte la syntaxe Oracle
2. ✅ Traduit en PostgreSQL
3. ✅ Exécute la requête
4. ✅ Retourne les résultats

---

**Date** : 2025-01-11  
**Statut** : ✅ Opérationnel

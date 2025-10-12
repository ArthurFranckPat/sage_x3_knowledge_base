# 🧪 Test de la Requête de Consommation

## ✅ Base de Données Préparée

La base de données a été peuplée avec des données de test pour votre requête d'analyse de consommation.

### 📊 Données Insérées

**Articles** : 10 articles de test
| Code | Désignation |
|------|-------------|
| ART001 | Article Test 1 - Consommable Bureau |
| ART002 | Article Test 2 - Fourniture Informatique |
| ART003 | Article Test 3 - Matériel Entretien |
| ART004 | Article Test 4 - Pièce Mécanique |
| ART005 | Article Test 5 - Composant Électronique |
| ART006 | Article Test 6 - Outillage |
| ART007 | Article Test 7 - Matière Première A |
| ART008 | Article Test 8 - Matière Première B |
| ART009 | Article Test 9 - Produit Fini |
| ART010 | Article Test 10 - Accessoire |

**Mouvements de stock** : 935 sorties sur 12 mois
- Type : `TRSTYP_0 = 6` (Sorties)
- Quantités : `-1` à `-50` unités par mouvement
- Période : 12 derniers mois
- Fréquence : 4 à 12 mouvements par article et par mois

---

## ⚠️ Problème Résolu : FULL OUTER JOIN

**SQLite ne supporte pas FULL OUTER JOIN nativement.**

Votre requête Oracle utilise `FULL OUTER JOIN` qui n'est pas supporté par SQLite. Une version compatible est disponible dans `test_query_sqlite.sql` qui utilise des CTE et UNION pour reproduire le même comportement.

## 🎯 Tester la Requête

### 1. Démarrer le Serveur

```bash
cd playground
npm run dev
```

### 2. Ouvrir le Playground

Naviguer vers : http://localhost:3333/playground

### 3. Option A : Requête SQLite (compatible)

**Recommandé** - Utilisez la version SQLite depuis `test_query_sqlite.sql` :

```sql
-- Voir le fichier test_query_sqlite.sql pour la requête complète
-- Cette version utilise des CTE et UNION au lieu de FULL OUTER JOIN
```

### 3. Option B : Requête Oracle (traduction partielle)

Votre requête d'origine (syntaxe Oracle) - **Ne fonctionnera pas à cause de FULL OUTER JOIN** :

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

### 4. Observer la Traduction Automatique

Lors de l'exécution, vous verrez :

✅ **Warnings de traduction** :
```
⚠️ Warnings:
  • 🔍 Syntaxe Oracle détectée: TRUNC(date, 'MM'), TRUNC(date, 'IW'), ADD_MONTHS, SYSDATE, NVL
  • 🔄 Traduction automatique Oracle → SQLite sera appliquée
  • ✅ Traduction appliquée avec succès: ✓ TRUNC(date, 'MM') converti, ✓ TRUNC(date, 'IW') converti, ...
```

✅ **Résultats** :
- 10 articles avec leurs statistiques de consommation
- Colonnes : Article, Désignation, Conso mensuelle moy, Nb mois, Conso hebdo moy, Nb semaines

---

## 🔍 Ce qui est Testé

### Fonctionnalités Oracle → SQLite

1. **NVL() → COALESCE()**
   ```sql
   -- Oracle
   NVL(m.ITMREF_0, w.ITMREF_0)
   
   -- Traduit en SQLite
   COALESCE(m.ITMREF_0, w.ITMREF_0)
   ```

2. **TRUNC(date, 'MM') → DATE() avec modificateurs**
   ```sql
   -- Oracle
   TRUNC(j.IPTDAT_0, 'MM')
   
   -- Traduit en SQLite
   DATE(j.IPTDAT_0, 'start of month')
   ```

3. **TRUNC(date, 'IW') → DATE() semaine**
   ```sql
   -- Oracle
   TRUNC(j.IPTDAT_0, 'IW')
   
   -- Traduit en SQLite
   DATE(j.IPTDAT_0, 'weekday 0', '-6 days')
   ```

4. **ADD_MONTHS() → DATE() avec offset**
   ```sql
   -- Oracle
   ADD_MONTHS(TRUNC(SYSDATE), -12)
   
   -- Traduit en SQLite
   DATE(DATE('now'), '-12 months')
   ```

5. **SYSDATE → DATE('now')**
   ```sql
   -- Oracle
   SYSDATE
   
   -- Traduit en SQLite
   DATE('now')
   ```

### Gestion d'Erreur Améliorée

Si une erreur se produit (par ex. en commentant des lignes), vous verrez :

❌ **Message propre** (au lieu de toute la requête) :
```
❌ Nombre d'arguments incorrect pour la fonction TRUNC()

📍 Contexte:
  3: SELECT j.ITMREF_0,
→ 4:   TRUNC(j.IPTDAT_0, 'MM') AS mois,
  5:   SUM(-j.QTYSTU_0) AS conso_mois

💡 Suggestions:
  • TRUNC() en SQLite n'accepte qu'un seul argument
  • Pour tronquer des dates : utilisez DATE() avec modificateurs
  • Syntaxe Oracle détectée - Traduction automatique disponible
```

---

## 📈 Résultats Attendus

Vous devriez voir pour chaque article :

| Article | Désignation | Conso mensuelle moy | Nb mois | Conso hebdo moy | Nb semaines |
|---------|-------------|---------------------|---------|-----------------|-------------|
| Article | Désignation | Conso mensuelle moy | Nb mois | Conso hebdo moy | Nb semaines |
|---------|-------------|---------------------|---------|-----------------|-------------|
| ART001 | Article Test 1 - Consommable Bureau | ~200 unités/mois | 12 | ~55 unités/semaine | 44 |
| ART002 | Article Test 2 - Fourniture Informatique | ~175 unités/mois | 12 | ~50 unités/semaine | 43 |
| ART003 | Article Test 3 - Matériel Entretien | ~175 unités/mois | 12 | ~53 unités/semaine | 40 |
| ... | ... | ... | ... | ... | ... |

*Les valeurs exactes varient car les données sont générées aléatoirement*

**Nombre de semaines** : Environ 40-45 semaines au lieu de 52, car les données couvrent exactement 12 mois glissants.

---

## 🔧 Réinitialiser les Données

Si vous voulez régénérer les données :

```bash
cd playground

# Supprimer les données
node ace db:wipe

# Recréer les tables
node ace migration:run

# Réinsérer les données de test
node ace db:seed --files="database/seeders/test_consommation_seeder.ts"
```

---

## ✅ Checklist de Test

- [ ] Serveur démarré (`npm run dev`)
- [ ] Page playground ouverte (http://localhost:3333/playground)
- [ ] Requête Oracle copiée/collée
- [ ] Warnings de traduction visibles avant exécution
- [ ] Requête exécutée avec succès
- [ ] 10 résultats affichés avec statistiques
- [ ] Confirmation de traduction dans les warnings
- [ ] Pas de requête complète dans les messages d'erreur (si test d'erreur)

---

## 📚 Documentation

- **Améliorations** : `playground/AMELIORATIONS_ERREURS_SQL.md`
- **Guide traduction** : Liste complète des conversions Oracle → SQLite
- **Code source** :
  - `app/services/oracle_to_sqlite_translator.ts`
  - `app/services/sql_error_formatter.ts`

---

**Date de création** : 2025-01-09  
**Statut** : ✅ Prêt à tester

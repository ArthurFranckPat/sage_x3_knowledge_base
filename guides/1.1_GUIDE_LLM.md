# 🤖 Guide LLM : Génération de Requêtes SQL Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 🎯 Objectif

Ce guide explique comment utiliser cette base de connaissance pour générer des requêtes SQL précises et correctes sur la base de données **Sage X3**.

---

## 📚 Structure de la base de connaissance

### Fichiers essentiels

1. **00_MENUS_LOCAUX.md** : 608 menus locaux avec valeurs d'enums
2. **01_GLOSSAIRE.md** : Conventions de nommage Sage X3
3. **03_RELATIONS.md** : Relations entre tables principales
4. **modules/*.md** : Documentation complète par module avec TOUS les champs

### Modules disponibles

- **VENTES** : Commandes, livraisons, factures, devis
- **ACHATS** : Commandes fournisseurs, réceptions, factures achats
- **STOCKS** : Mouvements, inventaires, emplacements, lots
- **PRODUCTION** : Ordres de fabrication, gammes, nomenclatures
- **DONNEES_BASE** : Articles, tiers, sites, paramètres

---

## 🔑 Conventions essentielles Sage X3

### Suffixes de champs

**TOUS les champs Sage X3 se terminent par un suffixe numérique** :

```sql
-- ❌ INCORRECT
SELECT ITMREF, ITMDES FROM ITMMASTER

-- ✅ CORRECT
SELECT ITMREF_0, ITMDES1_0 FROM ITMMASTER
```

| Suffixe | Signification | Exemple |
|---------|---------------|---------|
| `_0` | Champ principal | `ITMREF_0` (Code article) |
| `_1`, `_2`, `_3` | Champs multiples | `ITMDES1_0` (Désignation 1) |
| `_0(0)`, `_0(1)` | Dimensions tableaux | `TEXTE_0(0)` (1ère ligne texte) |

### Préfixes de tables

| Préfixe | Module | Exemples |
|---------|--------|----------|
| `S*` | Ventes (Sales) | SORDER, SDELIVERY, SINVOICE |
| `P*` | Achats (Purchase) | PORDER, PRECEIPT, PINVOICE |
| `STO*` | Stocks | STOCK, STOJOU, STOLOC, STOLOT |
| `M*` | Production (Manufacturing) | MFGHEAD, MFGITM, MFGOPE |
| `ITM*` | Articles (Items) | ITMMASTER, ITMFACILIT |
| `B*` | Tiers (Business Partner) | BPARTNER, BPCUSTOMER, BPSUPPLIER |

---

## 💡 Patterns de requêtes SQL

### 1. Requête simple sur une table

```sql
-- Lister les articles actifs
SELECT 
    ITMREF_0 AS code_article,
    ITMDES1_0 AS designation,
    TCLCOD_0 AS categorie
FROM ITMMASTER
WHERE ITMSTA_0 = 1  -- 1 = Actif (voir Menu 246)
```

### 2. Jointure entre tables

```sql
-- Commandes de vente avec client
SELECT 
    s.SOHNUM_0 AS num_commande,
    s.ORDDAT_0 AS date_commande,
    s.BPCORD_0 AS code_client,
    b.BPCNAM_0 AS nom_client,
    s.ORDNOT_0 AS montant_total
FROM SORDER s
INNER JOIN BPARTNER b ON s.BPCORD_0 = b.BPCNUM_0
WHERE s.ORDDAT_0 >= '2024-01-01'
ORDER BY s.ORDDAT_0 DESC
```

### 3. Utilisation des menus locaux (enums)

**TOUJOURS vérifier les valeurs d'enums dans 00_MENUS_LOCAUX.md**

```sql
-- Commandes en cours (non fermées)
SELECT 
    SOHNUM_0 AS num_commande,
    ORDSTA_0 AS statut
FROM SORDER
WHERE ORDSTA_0 IN (1, 2)  -- 1=Ouverte, 2=Partielle (voir Menu 415)
```

### 4. Mouvements de stock

```sql
-- Mouvements de stock du jour par article
SELECT 
    j.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    j.IPTDAT_0 AS date_mouvement,
    j.QTYSTUSTU_0 AS quantite,
    j.LOC_0 AS emplacement
FROM STOJOU j
INNER JOIN ITMMASTER i ON j.ITMREF_0 = i.ITMREF_0
WHERE j.IPTDAT_0 = CURDATE()
ORDER BY j.IPTDAT_0 DESC, j.ITMREF_0
```

### 5. Agrégation

```sql
-- CA par client sur les 12 derniers mois
SELECT 
    s.BPCORD_0 AS code_client,
    b.BPCNAM_0 AS nom_client,
    COUNT(DISTINCT s.SOHNUM_0) AS nb_commandes,
    SUM(s.ORDNOT_0) AS ca_total,
    AVG(s.ORDNOT_0) AS panier_moyen
FROM SORDER s
INNER JOIN BPARTNER b ON s.BPCORD_0 = b.BPCNUM_0
WHERE s.ORDDAT_0 >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
GROUP BY s.BPCORD_0, b.BPCNAM_0
HAVING ca_total > 10000
ORDER BY ca_total DESC
```

---

## ⚠️ Pièges courants à éviter

### ❌ Oublier les suffixes

```sql
-- ❌ NE MARCHERA PAS
SELECT ITMREF FROM ITMMASTER

-- ✅ CORRECT
SELECT ITMREF_0 FROM ITMMASTER
```

### ❌ Utiliser des valeurs enum incorrectes

```sql
-- ❌ INCORRECT (valeur inventée)
WHERE ORDSTA_0 = 'OPEN'

-- ✅ CORRECT (vérifier Menu 415)
WHERE ORDSTA_0 = 1  -- 1 = Ouverte
```

### ❌ Mauvaise relation entre tables

```sql
-- ❌ INCORRECT
JOIN BPARTNER ON SORDER.CLIENT = BPARTNER.CODE

-- ✅ CORRECT
JOIN BPARTNER ON SORDER.BPCORD_0 = BPARTNER.BPCNUM_0
```

---

## 📋 Checklist avant de générer une requête

- [ ] J'ai vérifié que tous les champs ont leur suffixe `_0`, `_1`, etc.
- [ ] J'ai consulté **00_MENUS_LOCAUX.md** pour les valeurs d'enums
- [ ] J'ai vérifié **03_RELATIONS.md** pour les jointures
- [ ] J'ai consulté le fichier module concerné pour les champs disponibles
- [ ] J'ai vérifié dans **01_GLOSSAIRE.md** les conventions de nommage

---

## 🎓 Exemples de cas d'usage

### Cas 1 : "Liste des articles en rupture de stock"

**Analyse :**
- Table principale : STOCK
- Champs : ITMREF_0 (article), QTYSTU_0 (quantité)
- Condition : QTYSTU_0 <= 0

```sql
SELECT 
    s.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    s.STOFCY_0 AS site,
    s.QTYSTU_0 AS quantite_stock
FROM STOCK s
INNER JOIN ITMMASTER i ON s.ITMREF_0 = i.ITMREF_0
WHERE s.QTYSTU_0 <= 0
ORDER BY s.ITMREF_0
```

### Cas 2 : "Commandes fournisseurs en attente de réception"

**Analyse :**
- Table : PORDER (commandes achats)
- Menu 509 : Statut de la facture
- Condition : Statut = En cours

```sql
SELECT 
    p.POHNUM_0 AS num_commande,
    p.BPSNUM_0 AS code_fournisseur,
    bp.BPSNAM_0 AS nom_fournisseur,
    p.ORDDAT_0 AS date_commande,
    p.RCPFLG_0 AS statut_reception
FROM PORDER p
INNER JOIN BPSUPPLIER bp ON p.BPSNUM_0 = bp.BPSNUM_0
WHERE p.RCPFLG_0 IN (1, 2)  -- 1=Non reçue, 2=Partielle
ORDER BY p.ORDDAT_0
```

### Cas 3 : "OF en cours de fabrication avec leur avancement"

**Analyse :**
- Tables : MFGHEAD (OF), ITMMASTER (articles)
- Menu 363 : Statut fabrication
- Champs : Quantité prévue vs réalisée

```sql
SELECT 
    m.MFGNUM_0 AS num_of,
    m.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    m.MFGQTY_0 AS qte_prevue,
    m.CPLQTY_0 AS qte_realisee,
    ROUND((m.CPLQTY_0 / m.MFGQTY_0 * 100), 2) AS avancement_pct,
    m.MFGSTA_0 AS statut
FROM MFGHEAD m
INNER JOIN ITMMASTER i ON m.ITMREF_0 = i.ITMREF_0
WHERE m.MFGSTA_0 = 2  -- 2 = Lancé (voir Menu 363)
ORDER BY m.MFGNUM_0
```

---

## 🔍 Méthodologie de génération

### Étape 1 : Comprendre la demande
- Identifier les données demandées
- Déterminer le module concerné
- Lister les tables nécessaires

### Étape 2 : Consulter la documentation
1. Ouvrir le fichier module correspondant
2. Trouver les tables et champs exacts
3. Vérifier les menus locaux pour les filtres
4. Consulter les relations si jointures nécessaires

### Étape 3 : Construire la requête
1. Commencer par le SELECT avec les bons suffixes
2. Ajouter les FROM et JOIN avec les bonnes clés
3. Ajouter les WHERE avec les bonnes valeurs d'enums
4. Tester mentalement la logique

### Étape 4 : Vérifier
- Tous les champs ont un suffixe
- Les valeurs enum sont correctes
- Les jointures utilisent les bons champs
- La requête répond bien à la question

---

## 📖 Ressources

- **[00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md)** : Valeurs d'enums complètes
- **[01_GLOSSAIRE.md](./01_GLOSSAIRE.md)** : Conventions Sage X3
- **[03_RELATIONS.md](./03_RELATIONS.md)** : Relations entre tables
- **[INDEX.md](./INDEX.md)** : Navigation complète

---

**💡 Conseil final** : En cas de doute, TOUJOURS consulter les fichiers de référence plutôt que deviner !

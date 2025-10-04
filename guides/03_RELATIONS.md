# 🔗 Relations entre Tables Principales Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 🎯 Objectif

Ce document décrit les **relations entre tables** pour faciliter les jointures SQL. Consultez-le avant d'écrire des requêtes impliquant plusieurs tables.

---

## 📊 Schéma général

```
BPARTNER (Tiers)
    ├── BPCUSTOMER (Clients)
    ├── BPSUPPLIER (Fournisseurs)
    └── BPADDRESS (Adresses)

ITMMASTER (Articles)
    ├── ITMFACILIT (Articles-Sites)
    ├── ITMBPS (Articles-Fournisseurs)
    ├── BOM (Nomenclatures)
    └── ROUTING (Gammes)

FACILITY (Sites)
    └── STOCK (Stocks par site)
```

---

## 🛒 Module VENTES

### SORDER → Tables liées

**Commande de vente (entête)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Client | BPARTNER | `BPCORD_0` | `BPCNUM_0` | N:1 |
| Site | FACILITY | `STOFCY_0` | `FCY_0` | N:1 |
| Lignes quantités | SORDERQ | `SOHNUM_0` | `SOHNUM_0` | 1:N |
| Lignes prix | SORDERP | `SOHNUM_0` | `SOHNUM_0` | 1:N |
| Livraisons | SDELIVERY | `SOHNUM_0` | `SOHNUM_0` | 1:N |
| Factures | SINVOICE | `SOHNUM_0` | `SOHNUM_0` | 1:N |

**Exemple SQL :**

```sql
-- Commandes avec client et lignes
SELECT 
    s.SOHNUM_0 AS num_commande,
    s.ORDDAT_0 AS date_commande,
    b.BPCNAM_0 AS nom_client,
    sq.ITMREF_0 AS article,
    sq.QTY_0 AS quantite,
    sp.NETPRI_0 AS prix_unitaire
FROM SORDER s
INNER JOIN BPARTNER b ON s.BPCORD_0 = b.BPCNUM_0
INNER JOIN SORDERQ sq ON s.SOHNUM_0 = sq.SOHNUM_0
INNER JOIN SORDERP sp ON sq.SOHNUM_0 = sp.SOHNUM_0 
    AND sq.SOPLIN_0 = sp.SOPLIN_0
WHERE s.ORDDAT_0 >= '2024-01-01'
```

### SDELIVERY → Tables liées

**Livraison**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Commande | SORDER | `SOHNUM_0` | `SOHNUM_0` | N:1 |
| Client | BPARTNER | `BPCORD_0` | `BPCNUM_0` | N:1 |
| Lignes détail | SDELIVERYD | `SDHNUM_0` | `SDHNUM_0` | 1:N |

---

## 🛍️ Module ACHATS

### PORDER → Tables liées

**Commande fournisseur (entête)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Fournisseur | BPSUPPLIER | `BPSNUM_0` | `BPSNUM_0` | N:1 |
| Site | FACILITY | `PJOFCY_0` | `FCY_0` | N:1 |
| Lignes quantités | PORDERQ | `POHNUM_0` | `POHNUM_0` | 1:N |
| Réceptions | PRECEIPT | `POHNUM_0` | `POHNUM_0` | 1:N |
| Factures | PINVOICE | `POHNUM_0` | `POHNUM_0` | 1:N |

**Exemple SQL :**

```sql
-- Commandes fournisseurs avec articles et réceptions
SELECT 
    p.POHNUM_0 AS num_commande,
    p.ORDDAT_0 AS date_commande,
    bs.BPSNAM_0 AS nom_fournisseur,
    pq.ITMREF_0 AS article,
    pq.QTYUOM_0 AS qte_commandee,
    pr.QTYSTU_0 AS qte_recue
FROM PORDER p
INNER JOIN BPSUPPLIER bs ON p.BPSNUM_0 = bs.BPSNUM_0
LEFT JOIN PORDERQ pq ON p.POHNUM_0 = pq.POHNUM_0
LEFT JOIN PRECEIPT pr ON p.POHNUM_0 = pr.POHNUM_0 
    AND pq.ITMREF_0 = pr.ITMREF_0
WHERE p.ORDDAT_0 >= '2024-01-01'
```

### PRECEIPT → Tables liées

**Réception**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Commande | PORDER | `POHNUM_0` | `POHNUM_0` | N:1 |
| Fournisseur | BPSUPPLIER | `BPSNUM_0` | `BPSNUM_0` | N:1 |
| Article | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Lignes détail | PRECEIPTD | `PRHNUM_0` | `PRHNUM_0` | 1:N |

---

## 📦 Module STOCKS

### STOCK → Tables liées

**Stock physique**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Article | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Site | FACILITY | `STOFCY_0` | `FCY_0` | N:1 |
| Emplacement | STOLOC | `LOC_0` | `LOC_0` | N:1 |
| Lot | STOLOT | `LOT_0` | `LOT_0` | N:1 |
| Mouvements | STOJOU | `ITMREF_0` | `ITMREF_0` | 1:N |

**Exemple SQL :**

```sql
-- Stock avec article et emplacement
SELECT 
    s.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    s.STOFCY_0 AS site,
    s.LOC_0 AS emplacement,
    s.LOT_0 AS lot,
    s.QTYSTU_0 AS quantite
FROM STOCK s
INNER JOIN ITMMASTER i ON s.ITMREF_0 = i.ITMREF_0
LEFT JOIN STOLOC sl ON s.LOC_0 = sl.LOC_0 AND s.STOFCY_0 = sl.FCY_0
WHERE s.QTYSTU_0 > 0
ORDER BY s.ITMREF_0, s.LOC_0
```

### STOJOU → Tables liées

**Journal des mouvements**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Article | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Site | FACILITY | `STOFCY_0` | `FCY_0` | N:1 |
| Stock | STOCK | `ITMREF_0 + STOFCY_0` | `ITMREF_0 + STOFCY_0` | N:1 |

**Exemple SQL :**

```sql
-- Mouvements du jour avec articles
SELECT 
    j.ITMREF_0 AS article,
    i.ITMDES1_0 AS designation,
    j.IPTDAT_0 AS date_mvt,
    j.QTYSTUSTU_0 AS quantite,
    j.LOC_0 AS emplacement,
    j.VCRTYP_0 AS type_doc,
    j.VCRNUM_0 AS num_doc
FROM STOJOU j
INNER JOIN ITMMASTER i ON j.ITMREF_0 = i.ITMREF_0
WHERE j.IPTDAT_0 = CURDATE()
ORDER BY j.CREDAT_0 DESC, j.CRETIM_0 DESC
```

---

## 🏭 Module PRODUCTION

### MFGHEAD → Tables liées

**Ordre de fabrication (entête)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Article fabriqué | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Site | FACILITY | `MFGFCY_0` | `FCY_0` | N:1 |
| Articles OF | MFGITM | `MFGNUM_0` | `MFGNUM_0` | 1:N |
| Opérations OF | MFGOPE | `MFGNUM_0` | `MFGNUM_0` | 1:N |
| Nomenclature | BOM | `ITMREF_0` | `ITMREF_0` | N:1 |
| Gamme | ROUTING | `ITMREF_0` | `ITMREF_0` | N:1 |

**Exemple SQL :**

```sql
-- OF avec articles fabriqués et composants
SELECT 
    m.MFGNUM_0 AS num_of,
    m.ITMREF_0 AS article_fabrique,
    i.ITMDES1_0 AS designation,
    m.MFGQTY_0 AS qte_prevue,
    m.CPLQTY_0 AS qte_realisee,
    mi.ITMREF_0 AS composant,
    mi.CPLQTY_0 AS qte_consommee
FROM MFGHEAD m
INNER JOIN ITMMASTER i ON m.ITMREF_0 = i.ITMREF_0
LEFT JOIN MFGITM mi ON m.MFGNUM_0 = mi.MFGNUM_0
WHERE m.MFGSTA_0 IN (1, 2)  -- Ferme/Lancé
ORDER BY m.MFGNUM_0, mi.ITMREF_0
```

### BOM → Tables liées

**Nomenclature**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Article parent | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Composants | BOMD | `BOMNUM_0` | `BOMNUM_0` | 1:N |

---

## 📦 Module ARTICLES

### ITMMASTER → Tables liées

**Article (fiche principale)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Articles-Sites | ITMFACILIT | `ITMREF_0` | `ITMREF_0` | 1:N |
| Articles-Fournisseurs | ITMBPS | `ITMREF_0` | `ITMREF_0` | 1:N |
| Nomenclatures | BOM | `ITMREF_0` | `ITMREF_0` | 1:N |
| Gammes | ROUTING | `ITMREF_0` | `ITMREF_0` | 1:N |
| Stocks | STOCK | `ITMREF_0` | `ITMREF_0` | 1:N |

**Exemple SQL :**

```sql
-- Articles avec fournisseurs et coûts
SELECT 
    i.ITMREF_0 AS code_article,
    i.ITMDES1_0 AS designation,
    i.TCLCOD_0 AS categorie,
    ib.BPSNUM_0 AS code_fournisseur,
    bs.BPSNAM_0 AS nom_fournisseur,
    ib.PURCUR_0 AS devise_achat,
    ib.PURPRI_0 AS prix_achat
FROM ITMMASTER i
LEFT JOIN ITMBPS ib ON i.ITMREF_0 = ib.ITMREF_0
LEFT JOIN BPSUPPLIER bs ON ib.BPSNUM_0 = bs.BPSNUM_0
WHERE i.ITMSTA_0 = 1  -- Actif
ORDER BY i.ITMREF_0
```

### ITMFACILIT → Tables liées

**Article-Site (paramètres par site)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Article | ITMMASTER | `ITMREF_0` | `ITMREF_0` | N:1 |
| Site | FACILITY | `STOFCY_0` | `FCY_0` | N:1 |
| Stock | STOCK | `ITMREF_0 + STOFCY_0` | `ITMREF_0 + STOFCY_0` | 1:N |

---

## 👥 Module TIERS

### BPARTNER → Tables liées

**Tiers (générique)**

| Relation | Table cible | Champ local | Champ distant | Type |
|----------|-------------|-------------|---------------|------|
| Client | BPCUSTOMER | `BPCNUM_0` | `BPCNUM_0` | 1:1 |
| Fournisseur | BPSUPPLIER | `BPCNUM_0` | `BPSNUM_0` | 1:1 |
| Adresses | BPADDRESS | `BPCNUM_0` | `BPCNUM_0` | 1:N |
| Commandes ventes | SORDER | `BPCNUM_0` | `BPCORD_0` | 1:N |

**Exemple SQL :**

```sql
-- Tiers avec adresses
SELECT 
    b.BPCNUM_0 AS code_tiers,
    b.BPCNAM_0 AS nom,
    ba.BPAADD_0 AS adresse,
    ba.POSCOD_0 AS code_postal,
    ba.CTY_0 AS ville,
    ba.CRY_0 AS pays
FROM BPARTNER b
LEFT JOIN BPADDRESS ba ON b.BPCNUM_0 = ba.BPCNUM_0
WHERE b.BPCSTA_0 = 1  -- Actif
ORDER BY b.BPCNAM_0
```

---

## 🔍 Patterns de jointure courants

### Pattern 1 : Commande → Client → Adresse

```sql
SELECT 
    s.SOHNUM_0,
    b.BPCNAM_0,
    ba.BPAADD_0,
    ba.CTY_0
FROM SORDER s
INNER JOIN BPARTNER b ON s.BPCORD_0 = b.BPCNUM_0
LEFT JOIN BPADDRESS ba ON b.BPCNUM_0 = ba.BPCNUM_0 AND ba.BPANUM_0 = s.BPAADD_0
```

### Pattern 2 : Stock → Article → Catégorie

```sql
SELECT 
    s.ITMREF_0,
    i.ITMDES1_0,
    i.TCLCOD_0,
    SUM(s.QTYSTU_0) AS stock_total
FROM STOCK s
INNER JOIN ITMMASTER i ON s.ITMREF_0 = i.ITMREF_0
WHERE i.ITMSTA_0 = 1
GROUP BY s.ITMREF_0, i.ITMDES1_0, i.TCLCOD_0
```

### Pattern 3 : OF → Article → Nomenclature → Composants

```sql
SELECT 
    m.MFGNUM_0,
    m.ITMREF_0 AS article_fabrique,
    b.BOMNUM_0 AS nomenclature,
    bd.CPNITMREF_0 AS composant,
    bd.LINKQTY_0 AS qte_unitaire
FROM MFGHEAD m
INNER JOIN BOM b ON m.ITMREF_0 = b.ITMREF_0
INNER JOIN BOMD bd ON b.BOMNUM_0 = bd.BOMNUM_0
WHERE m.MFGSTA_0 = 2  -- Lancé
```

### Pattern 4 : Mouvement stock → Document origine

```sql
SELECT 
    j.ITMREF_0,
    j.QTYSTUSTU_0,
    j.VCRTYP_0 AS type_doc,
    j.VCRNUM_0 AS num_doc,
    CASE j.VCRTYP_0
        WHEN 'SOH' THEN 'Commande vente'
        WHEN 'POH' THEN 'Commande achat'
        WHEN 'MFG' THEN 'Ordre fabrication'
        ELSE j.VCRTYP_0
    END AS libelle_type
FROM STOJOU j
WHERE j.IPTDAT_0 = CURDATE()
```

---

## ⚠️ Pièges à éviter

### ❌ Mauvaise jointure

```sql
-- ❌ INCORRECT - champ inexistant
JOIN BPARTNER ON SORDER.CLIENT = BPARTNER.CODE

-- ✅ CORRECT
JOIN BPARTNER ON SORDER.BPCORD_0 = BPARTNER.BPCNUM_0
```

### ❌ Oubli du suffixe

```sql
-- ❌ INCORRECT
JOIN ITMMASTER i ON s.ITMREF = i.ITMREF

-- ✅ CORRECT
JOIN ITMMASTER i ON s.ITMREF_0 = i.ITMREF_0
```

### ❌ Jointure sur plusieurs champs sans tous les inclure

```sql
-- ❌ INCORRECT - STOCK a une clé composite
JOIN STOCK s ON s.ITMREF_0 = i.ITMREF_0

-- ✅ CORRECT - inclure tous les champs de la clé
JOIN STOCK s ON s.ITMREF_0 = i.ITMREF_0 AND s.STOFCY_0 = 'SITE01'
```

---

## 📚 Ressources

- **[00_GUIDE_LLM.md](./00_GUIDE_LLM.md)** : Guide génération SQL
- **[01_GLOSSAIRE.md](./01_GLOSSAIRE.md)** : Conventions nommage
- **[00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md)** : Valeurs enums
- **Modules/** : Documentation détaillée par module

---

**💡 Conseil** : Avant toute jointure, vérifiez dans ce document les champs de liaison corrects !

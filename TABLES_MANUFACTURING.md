# 📊 Tables et Menus Manufacturing/Production - Référence Rapide

## 🏭 Tables Manufacturing (Module PRODUCTION)

### Tables principales Ordres de Fabrication (MFG)

| Table | Description | Champs |
|-------|-------------|--------|
| **MFGHEAD** | Ordres fabrication - Entête | 92 |
| **MFGITM** | Ordres fabrication - Articles | 64 |
| **MFGMAT** | Ordres fabrication - Matières | 79 |
| **MFGOPE** | Ordres fabrication - Opérations | 123 |
| **MFGTRS** | Transaction saisie production | 183 |
| **MFGHEADTRK** | Suivi fabrication - Entête | 29 |
| **MFGITMTRK** | Suivi fabrication - Articles | 35 |
| **MFGMATTRK** | Suivi fabrication - Matières | 35 |
| **MFGOPETRK** | Suivi fabrication - Opérations | 98 |

### Tables Nomenclatures (BOM)

| Table | Description | Champs |
|-------|-------------|--------|
| **BOM** | Nomenclatures Entête | 30 |
| **BOMD** | Nomenclatures Détail | 59 |
| **BOMCREF** | Composant référence | 13 |
| **BOMWUS** | Nomenclatures cas d'emploi | 44 |

### Tables Gammes & Postes

| Table | Description | Champs |
|-------|-------------|--------|
| **ROUTING** | Gammes - Entête | 29 |
| **WORKSTATIO** | Postes de charge | 44 |

### Tables Coûts & Analyse

| Table | Description | Champs |
|-------|-------------|--------|
| **MFGCOST** | Prix de revient | 59 |
| **MFGANL** | Analyse OF | 29 |
| **MFGWIP** | Valorisation encours | 28 |

---

## 🎯 Menus Locaux Manufacturing

### Menus Statuts & Types

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **363** | **Statut fabrication** | 1=En attente, 2=Lancé, 3=Clos |
| **2400** | **Statut ordre fabrication** | 1=Ferme, 2=Lancé, 3=Clos |
| **369** | **Type ordre** | 1=Suggestion, 2=Ordre de fabrication |
| **353** | **Type transaction** | 1=Lancement, 2=Suivi fabrication |

### Menus Documents

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **344** | **Documents GPAO** | 1=Ordre fabrication, 2=Suggestions, 3=Suivi fabrication |
| **383** | **Edition dossier de fabrication** | 1=Optionnelle, 2=Systématique |

### Menus Coûts

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **2355** | **Type de coût de fabrication** | 1=Prév. théorique, 2=Prév. lancement, 3=Prév. production, 4=Prix revient réel |
| **347** | **Type de coût** | 7=Prév. production, 8=Prix revient fabrication |

### Menus Utilisation

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **310** | **Utilisation nomenclature** | 1=Fabrication, 2=Coûts, 3=CBN |
| **2346** | **Utilisation gamme** | 1=Fabrication, 2=Coût, 3=PGC |

### Menus Production

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **307** | **Ordres à traiter** | 1=Fabrications suggérées, 2=Fabrications planifiées |
| **350** | **Type Charge** | 1=Opération de fabrication, 2=Macro-opération |
| **394** | **Rôle utilisateur** | 1=Planificateur production |

### Menus Mouvements Stock

| Menu | Titre | Valeurs clés |
|------|-------|--------------|
| **655** | **Type mvt** | 10=Ordre de fabrication, 11=Suggestion, 15=Déclaration production |
| **656** | **Type mvt (détaillé)** | 11=Ordre fabrication, 12=Suggestion fabrication, 16=Déclaration production |

---

## 📝 Exemples SQL Manufacturing

### 1. Liste des Ordres de Fabrication en cours

```sql
-- Tables : MFGHEAD
-- Menu 2400 : Statut ordre fabrication

SELECT 
    MFGNUM_0 AS numero_of,
    MFGFCY_0 AS site_production,
    ITMREF_0 AS article,
    MFGQTY_0 AS quantite,
    MFGSTA_0 AS statut,
    STRDATFLG_0 AS date_debut,
    ENDDATFLG_0 AS date_fin
FROM MFGHEAD
WHERE 
    MFGSTA_0 = 2  -- Menu 2400 : 2 = Lancé
    AND MFGFCY_0 = 'VOTRE_SITE'
ORDER BY STRDATFLG_0 DESC;
```

### 2. Consommation matières par OF

```sql
-- Tables : MFGMAT, MFGHEAD
-- Suivi des matières consommées

SELECT 
    m.MFGNUM_0 AS numero_of,
    m.ITMREF_0 AS composant,
    m.BOMQTY_0 AS qte_theorique,
    m.CNSQTY_0 AS qte_consommee,
    (m.BOMQTY_0 - m.CNSQTY_0) AS ecart,
    h.MFGSTA_0 AS statut_of
FROM MFGMAT m
INNER JOIN MFGHEAD h ON m.MFGNUM_0 = h.MFGNUM_0
WHERE 
    m.MFGNUM_0 = 'OF123456'
ORDER BY m.ITMREF_0;
```

### 3. Opérations de fabrication par poste

```sql
-- Tables : MFGOPE, WORKSTATIO
-- Charge par poste de travail

SELECT 
    o.MFGNUM_0 AS numero_of,
    o.OPENUM_0 AS numero_operation,
    o.WST_0 AS poste_charge,
    o.SETUPHR_0 AS temps_reglage_h,
    o.MACHINEHR_0 AS temps_machine_h,
    o.LABORHR_0 AS temps_mo_h,
    o.OPESTA_0 AS statut_operation
FROM MFGOPE o
WHERE 
    o.WST_0 = 'POSTE01'
    AND o.OPESTA_0 <> 3  -- Pas clos
ORDER BY o.MFGNUM_0, o.OPENUM_0;
```

### 4. Prix de revient par OF

```sql
-- Tables : MFGCOST
-- Menu 2355 : Type de coût

SELECT 
    MFGNUM_0 AS numero_of,
    COSTTY_0 AS type_cout,  -- Menu 2355
    MATCST_0 AS cout_matiere,
    LABCST_0 AS cout_mo,
    MACHINECST_0 AS cout_machine,
    TOTCST_0 AS cout_total
FROM MFGCOST
WHERE 
    MFGNUM_0 = 'OF123456'
    AND COSTTY_0 = 4  -- Menu 2355 : 4 = Prix de revient réel
ORDER BY COSTTY_0;
```

### 5. Suivi production journalier

```sql
-- Tables : MFGTRS
-- Menu 353 : Type transaction

SELECT 
    TRSDATFAC_0 AS date_transaction,
    MFGNUM_0 AS numero_of,
    OPENUM_0 AS operation,
    TRSTY_0 AS type_transaction,  -- Menu 353
    TRSCUMQTY_0 AS quantite_cumulee,
    WST_0 AS poste_charge
FROM MFGTRS
WHERE 
    TRSDATFAC_0 >= '2024-01-01'
    AND TRSTY_0 = 2  -- Menu 353 : 2 = Suivi fabrication
ORDER BY TRSDATFAC_0 DESC, MFGNUM_0;
```

### 6. Nomenclatures actives

```sql
-- Tables : BOM, BOMD
-- Menu 310 : Utilisation nomenclature

SELECT 
    b.ITMREF_0 AS article_parent,
    b.BOMALT_0 AS alternative,
    b.USESTA_0 AS statut,
    d.ITMREFBOM_0 AS composant,
    d.BOMQTY_0 AS quantite,
    d.QTYBAS_0 AS pour_quantite_base
FROM BOM b
INNER JOIN BOMD d ON b.ITMREF_0 = d.ITMREF_0 
    AND b.BOMALT_0 = d.BOMALT_0
WHERE 
    b.ITMREF_0 = 'ARTICLE123'
    AND b.USESTA_0 = 1  -- Menu 310 : 1 = Fabrication
ORDER BY d.BOMSEQ_0;
```

---

## 🔑 Champs clés Manufacturing

### MFGHEAD (Entête OF)

| Champ | Description | Type |
|-------|-------------|------|
| `MFGNUM_0` | Numéro ordre fabrication | Texte |
| `MFGFCY_0` | Site production | Texte |
| `ITMREF_0` | Article à fabriquer | Texte |
| `MFGQTY_0` | Quantité à fabriquer | Numérique |
| `MFGSTA_0` | Statut OF (Menu 2400) | Numérique |
| `STRDATFLG_0` | Date début | Date |
| `ENDDATFLG_0` | Date fin | Date |

### MFGMAT (Matières)

| Champ | Description | Type |
|-------|-------------|------|
| `MFGNUM_0` | Numéro OF | Texte |
| `ITMREF_0` | Composant | Texte |
| `BOMQTY_0` | Quantité théorique | Numérique |
| `CNSQTY_0` | Quantité consommée | Numérique |
| `STRDAT_0` | Date début | Date |

### MFGOPE (Opérations)

| Champ | Description | Type |
|-------|-------------|------|
| `MFGNUM_0` | Numéro OF | Texte |
| `OPENUM_0` | Numéro opération | Numérique |
| `WST_0` | Poste de charge | Texte |
| `OPESTA_0` | Statut opération | Numérique |
| `SETUPHR_0` | Temps réglage (h) | Numérique |
| `MACHINEHR_0` | Temps machine (h) | Numérique |
| `LABORHR_0` | Temps MO (h) | Numérique |

---

## 📚 Documentation complète

Pour plus de détails :
- **Tables complètes** : `modules/database/PRODUCTION_COMPLETE.md`
- **Menus complets** : `menus/00_MENUS_LOCAUX.md`
- **Guide SQL** : `guides/00_GUIDE_LLM.md`
- **Relations** : `guides/03_RELATIONS.md`


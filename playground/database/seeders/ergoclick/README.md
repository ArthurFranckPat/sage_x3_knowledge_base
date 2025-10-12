# Seeders ErgoClick Dynamics

Ce dossier contient les seeders pour peupler la base de données avec le scénario réaliste **ErgoClick Dynamics**, une PME lyonnaise spécialisée dans la fabrication de souris ergonomiques.

## 📋 Contenu du Scénario

### Entreprise
- **Nom** : ErgoClick Dynamics
- **Site** : FR011 (Lyon)
- **Activité** : Fabrication de souris informatiques ergonomiques

### Données de Base

| Type | Quantité | Description |
|------|----------|-------------|
| **Sites** | 1 | Site de production à Lyon |
| **Fournisseurs** | 5 | France (2), Allemagne (1), Chine (1), Taiwan (1) |
| **Clients** | 3 | Pour tester les ventes |
| **Articles** | 19 | 3 PF + 1 SF + 15 composants |
| **Nomenclatures** | 4 | BOM complètes avec lignes |
| **Gammes** | 4 | Opérations de fabrication |

### Produits Finis

1. **F-MOU-OFF01** - Souris bureautique ErgoStandard (filaire, entrée de gamme)
2. **F-MOU-GAM02** - Souris gaming ProGamer RGB (filaire, haute performance)
3. **F-MOU-PRE03** - Souris sans-fil ErgoLuxe Pro (premium, Bluetooth)

## 🗂️ Ordre d'Exécution des Seeders

Les seeders doivent être exécutés dans l'ordre suivant pour respecter les contraintes de clés étrangères :

```
01_ergoclick_facility_seeder.ts          # Site FR011
02_ergoclick_suppliers_seeder.ts         # 5 fournisseurs + adresses
03_ergoclick_customers_seeder.ts         # 3 clients + adresses
04_ergoclick_articles_seeder.ts          # 19 articles
05_ergoclick_article_facility_seeder.ts  # Liens articles-site
06_ergoclick_article_supplier_seeder.ts  # Liens composants-fournisseurs
07_ergoclick_stock_seeder.ts             # Stock initial
08_ergoclick_bom_seeder.ts               # Nomenclatures (BOM + BOMD)
09_ergoclick_routing_seeder.ts           # Gammes de fabrication
```

## 🚀 Utilisation

### Option 1 : Exécution individuelle

```bash
# Exécuter tous les seeders dans l'ordre
cd /Users/arthur/Desktop/Apps/sage_x3_knowledge_base/playground

node ace db:seed -f database/seeders/ergoclick/01_ergoclick_facility_seeder.ts
node ace db:seed -f database/seeders/ergoclick/02_ergoclick_suppliers_seeder.ts
node ace db:seed -f database/seeders/ergoclick/03_ergoclick_customers_seeder.ts
# ... etc
```

### Option 2 : Script automatique (recommandé)

```bash
# Recréer la base de données et peupler avec ErgoClick
node ace migration:fresh
npm run seed:ergoclick
```

## 📊 Données Générées

### Stock Initial

| Catégorie | Quantité Totale |
|-----------|-----------------|
| Composants | ~5,000 unités |
| Semi-finis | 50 unités |
| Produits finis | 50 unités |

### Exemple de Nomenclature (F-MOU-OFF01)

```
F-MOU-OFF01 (Souris bureautique)
├── S-ASM-PCB01 (x1)
│   ├── C-PCB-MOU01 (x1)
│   └── C-SEN-OPT01 (x1)
├── C-CAS-PLA01 (x1)
├── C-CAS-PLA02 (x1)
├── C-CAB-USB01 (x1)
└── C-SCR-STD01 (x4)
```

## 🧪 Requêtes SQL de Test

### 1. Articles avec stock

```sql
SELECT 
  i.itmref_0 AS code_article,
  i.itmdes1_0 AS designation,
  i.tclcod_0 AS categorie,
  s.qtystu_0 AS quantite_stock,
  s.stofcy_0 AS site
FROM itmmaster i
LEFT JOIN stock s ON i.itmref_0 = s.itmref_0
WHERE s.qtystu_0 > 0
ORDER BY i.tclcod_0, i.itmref_0
```

### 2. Nomenclature d'un produit fini

```sql
SELECT 
  b.itmref_0 AS article_parent,
  i.itmdes1_0 AS designation_parent,
  bd.bomseq_0 AS index_ligne,
  bd.cpnitmref_0 AS composant,
  ic.itmdes1_0 AS designation_composant,
  bd.usuqty_0 AS quantite
FROM bom b
INNER JOIN bomd bd ON b.itmref_0 = bd.itmref_0 
  AND b.bomalt_0 = bd.bomalt_0
INNER JOIN itmmaster i ON b.itmref_0 = i.itmref_0
INNER JOIN itmmaster ic ON bd.cpnitmref_0 = ic.itmref_0
WHERE b.itmref_0 = 'F-MOU-OFF01'
ORDER BY bd.bomseq_0
```

### 3. Composants et leurs fournisseurs

```sql
SELECT 
  i.itmref_0 AS code_article,
  i.itmdes1_0 AS designation,
  i.purbaspri_0 AS prix_achat,
  ib.bpsnum_0 AS code_fournisseur,
  b.bprnam_0 AS nom_fournisseur,
  b.cry_0 AS pays
FROM itmmaster i
INNER JOIN itmbps ib ON i.itmref_0 = ib.itmref_0
INNER JOIN bpartner b ON ib.bpsnum_0 = b.bprnum_0
WHERE i.tclcod_0 = 'ACHAT'
ORDER BY i.itmref_0
```

### 4. Calcul de coût matière d'un produit

```sql
SELECT 
  b.itmref_0 AS produit,
  SUM(bd.usuqty_0 * ic.purbaspri_0) AS cout_matiere_total
FROM bom b
INNER JOIN bomd bd ON b.itmref_0 = bd.itmref_0 
  AND b.bomalt_0 = bd.bomalt_0
INNER JOIN itmmaster ic ON bd.cpnitmref_0 = ic.itmref_0
WHERE b.itmref_0 = 'F-MOU-OFF01'
GROUP BY b.itmref_0
```

## 📝 Notes

- Toutes les données sont cohérentes et respectent les contraintes FK
- Les prix sont en EUR
- Les poids sont en KG
- Les quantités de stock sont réalistes pour une PME
- Le scénario permet de tester :
  - Achats multi-fournisseurs
  - Calculs de besoins nets (CBN)
  - Lancements d'ordres de fabrication
  - Éclatement de nomenclatures
  - Coûts de revient

## 🔄 Réinitialisation

Pour repartir de zéro avec les données ErgoClick :

```bash
node ace migration:fresh
npm run seed:ergoclick
```

---

**Créé avec Droid AI pour le projet Sage X3 Knowledge Base**

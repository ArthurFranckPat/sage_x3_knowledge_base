# 💾 Documentation - Données réelles de l'ERP

Ce dossier contient la **documentation complète des tables de votre ERP Sage X3 réel**.

## 📊 Source des données

Les fichiers de ce dossier sont générés à partir de :
- **data/tables_X3.csv** : Liste des 1,888 tables de votre base de données
- **data/tables_champs_X3.csv** : Liste des 47,367 champs avec types et descriptions

## 📦 Contenu

| Fichier | Tables | Champs | Description |
|---------|--------|--------|-------------|
| **VENTES_COMPLETE.md** | 17 | 1,653 | Commandes, livraisons, factures, devis, retours |
| **ACHATS_COMPLETE.md** | 15 | 1,422 | Commandes fournisseurs, réceptions, factures |
| **STOCKS_COMPLETE.md** | 21 | 1,171 | Stock, mouvements, journal, valorisation, CBN/MRP |
| **PRODUCTION_COMPLETE.md** | 26 | 1,406 | OF, gammes, nomenclatures, opérations |
| **DONNEES_BASE_COMPLETE.md** | 38 | 2,162 | Articles, tiers, sites, comptes |

**Total : 117 tables, 7,814 champs**

## 🎯 Utilisation

Ces fichiers sont **optimisés pour la génération de requêtes SQL** par un LLM.

Chaque fichier contient :
- ✅ **TOUS les champs** de chaque table (données réelles)
- ✅ **Types de champs** (quand disponibles)
- ✅ **Descriptions** des champs
- ✅ **Liens vers les menus locaux** (valeurs d'enums)
- ✅ **Exemples SQL** pour chaque table

## 📝 Format

Pour chaque table :
```markdown
## NOM_TABLE

**Description de la table**

**Nombre de champs** : XX

### Champs

| Champ | Intitulé | Type | Long | Lien | Menu |
|-------|----------|------|------|------|------|
| `CHAMP_0` | Description | Type | Long | Lien | Menu XX |

### Exemple SQL

```sql
SELECT champ1, champ2
FROM NOM_TABLE
WHERE conditions
```
```

## ⚠️ Important

- **Tous les champs ont un suffixe** `_0`, `_1`, `_2`, etc.
- **Toujours vérifier les menus locaux** dans `menus/00_MENUS_LOCAUX.md` pour les valeurs d'enums
- **Consulter les relations** dans `guides/03_RELATIONS.md` pour les jointures

## 🔄 Mise à jour

Pour régénérer ces fichiers :
```bash
cd scripts/
python3 generate_complete_modules.py
```

---

[◄ Retour à l'INDEX](../../INDEX.md)

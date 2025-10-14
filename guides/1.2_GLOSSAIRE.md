# 📖 Glossaire des Conventions Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 🔤 Nommage des champs

### Règle absolue : Les suffixes

**TOUS les champs Sage X3 se terminent OBLIGATOIREMENT par un suffixe numérique.**

```
Format : NOM_CHAMP + _ + NUMERO
Exemple : ITMREF_0, ITMDES1_0, TEXTE_0(0)
```

### Types de suffixes

| Suffixe | Usage | Exemples |
|---------|-------|----------|
| `_0` | Champ unique ou principal | `ITMREF_0`, `ORDDAT_0`, `QTYSTU_0` |
| `_1`, `_2`, `_3` | Champs multiples (descriptions, adresses...) | `ITMDES1_0`, `ITMDES2_0`, `ITMDES3_0` |
| `_0(0)`, `_0(1)` | Tableaux/Dimensions | `TEXTE_0(0)`, `TEXTE_0(1)` |

---

## 🏷️ Préfixes de tables

### Par module fonctionnel

#### Ventes (Sales)
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `SORDER*` | Commandes de vente | SORDER, SORDERP, SORDERQ |
| `SDELIV*` | Livraisons | SDELIVERY, SDELIVERYD |
| `SINVOICE*` | Factures ventes | SINVOICE, SINVOICED |
| `SQUOT*` | Devis | SQUOTATION |

#### Achats (Purchase)
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `PORDER*` | Commandes fournisseurs | PORDER, PORDERP, PORDERQ |
| `PREC*` | Réceptions | PRECEIPT, PRECEIPTD |
| `PINVOICE*` | Factures achats | PINVOICE, PINVOICED |
| `PREQ*` | Demandes d'achat | PREQUIS |

#### Stocks
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `STO*` | Stocks et mouvements | STOCK, STOJOU, STOLOC, STOLOT, STOPHY |
| `STK*` | Transactions stock | STKMVT, STKTRS |

#### Production (Manufacturing)
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `MFG*` | Ordres de fabrication | MFGHEAD, MFGITM, MFGOPE |
| `ROUTING` | Gammes | ROUTING, ROUTINGOPE |
| `BOM` | Nomenclatures | BOM, BOMD |
| `WORKSTATIO*` | Postes de charge | WORKSTATIO |

#### Articles (Items)
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `ITM*` | Articles | ITMMASTER, ITMFACILIT, ITMCATEG, ITMBPS |

#### Tiers (Business Partners)
| Préfixe | Description | Tables principales |
|---------|-------------|-------------------|
| `BPARTNER` | Tiers génériques | BPARTNER |
| `BPC*` | Clients | BPCUSTOMER |
| `BPS*` | Fournisseurs | BPSUPPLIER |
| `BPA*` | Adresses | BPADDRESS |

---

## 🔑 Abréviations courantes

### Champs génériques

| Abréviation | Signification | Exemple |
|-------------|---------------|---------|
| `NUM` | Numéro | `SOHNUM_0` (Numéro commande) |
| `COD` | Code | `BPCORD_0` (Code client) |
| `NAM` | Nom | `BPCNAM_0` (Nom client) |
| `DES` | Désignation | `ITMDES1_0` (Désignation article) |
| `REF` | Référence | `ITMREF_0` (Référence article) |
| `DAT` | Date | `ORDDAT_0` (Date commande) |
| `TIM` | Time/Heure | `CRETIM_0` (Heure création) |
| `STA` | Statut | `ORDSTA_0` (Statut commande) |
| `QTY` | Quantité | `QTYSTU_0` (Quantité stock) |
| `PRI` | Prix | `NETPRI_0` (Prix net) |
| `AMT` | Montant | `LINAMT_0` (Montant ligne) |
| `FLG` | Flag (Oui/Non) | `RCPFLG_0` (Flag réception) |

### Unités et mesures

| Abréviation | Signification | Exemple |
|-------------|---------------|---------|
| `STU` | Stock Unit (Unité stock) | `QTYSTU_0` |
| `PCU` | Package/Colis Unit | `QTYPCU_0` |
| `SAU` | Sales Unit | `QTYSAU_0` |
| `PUR` | Purchase Unit | `QTYPUR_0` |

### Types de documents

| Abréviation | Signification | Tables |
|-------------|---------------|---------|
| `ORD` | Order (Commande) | SORDER, PORDER |
| `DEL` | Delivery (Livraison) | SDELIVERY |
| `INV` | Invoice (Facture) | SINVOICE, PINVOICE |
| `RCP` | Receipt (Réception) | PRECEIPT |
| `QUO` | Quotation (Devis) | SQUOTATION |

---

## 📊 Conventions de valeurs

### Dates

```sql
-- Format : YYYYMMDD (entier) ou DATE
ORDDAT_0 = 20240315  -- 15 mars 2024
ORDDAT_0 >= '2024-01-01'  -- Depuis le 1er janvier 2024
```

### Booléens (Flags)

```sql
-- 1 = Oui/Vrai, 2 = Non/Faux
ACTFLG_0 = 1  -- Actif
ACTFLG_0 = 2  -- Inactif
```

### Statuts (utiliser menus locaux)

```sql
-- TOUJOURS consulter 00_MENUS_LOCAUX.md
ORDSTA_0 = 1  -- Consulter Menu 415 pour la signification exacte
```

---

## 🔗 Relations entre tables

### Clés primaires courantes

| Table | Clé primaire | Description |
|-------|--------------|-------------|
| `ITMMASTER` | `ITMREF_0` | Code article |
| `BPARTNER` | `BPCNUM_0` | Code tiers |
| `SORDER` | `SOHNUM_0` | Numéro commande vente |
| `PORDER` | `POHNUM_0` | Numéro commande achat |
| `STOCK` | `STOFCY_0 + STOCOU_0` | Site + Chrono |
| `MFGHEAD` | `MFGNUM_0` | Numéro OF |

### Clés étrangères courantes

| Champ | Référence | Exemple |
|-------|-----------|---------|
| `ITMREF_0` | → ITMMASTER.ITMREF_0 | Article |
| `BPCORD_0` | → BPARTNER.BPCNUM_0 | Client |
| `BPSNUM_0` | → BPSUPPLIER.BPSNUM_0 | Fournisseur |
| `STOFCY_0` | → FACILITY.FCY_0 | Site |
| `LOC_0` | → STOLOC.LOC_0 | Emplacement |

---

## 🎨 Patterns de nommage

### Structure type d'un champ

```
[CONTEXTE]_[TYPE]_[NUMERO]
```

Exemples :
- `ORDDAT_0` : ORD (commande) + DAT (date) + 0
- `LINAMT_0` : LIN (ligne) + AMT (montant) + 0
- `NETPRI_0` : NET (net) + PRI (prix) + 0

### Champs de traçabilité (audit)

**Présents sur presque toutes les tables :**

| Champ | Signification |
|-------|---------------|
| `CREDAT_0` | Date création |
| `CREUSR_0` | Utilisateur création |
| `CREDATTIM_0` | Date/heure création |
| `UPDDAT_0` | Date modification |
| `UPDUSR_0` | Utilisateur modification |
| `UPDDATTIM_0` | Date/heure modification |
| `AUUID_0` | Identifiant unique |

---

## 📐 Types de données courants

| Abréviation | Type SQL | Description | Exemple |
|-------------|----------|-------------|---------|
| `A` | VARCHAR | Alphanumérique | Codes, références |
| `C` | CHAR | Caractère fixe | Flags 1 caractère |
| `D` | DATE | Date | Dates commandes |
| `DCB` | DECIMAL | Décimal | Quantités, montants |
| `L` | BIGINT | Entier long | Numéros, chronos |
| `M` | VARCHAR | Menu local | Valeurs enum |

---

## 🌍 Multi-société et multi-site

### Champs de contexte

| Champ | Description | Usage |
|-------|-------------|-------|
| `CPY_0` | Société (Company) | Filtre multi-société |
| `FCY_0` | Site (Facility) | Filtre multi-site |
| `STOFCY_0` | Site stock | Localisation stock |

### Exemple requête multi-site

```sql
-- Stock par site
SELECT 
    STOFCY_0 AS site,
    ITMREF_0 AS article,
    SUM(QTYSTU_0) AS stock_total
FROM STOCK
WHERE STOFCY_0 IN ('SITE01', 'SITE02')
GROUP BY STOFCY_0, ITMREF_0
```

---

## 💰 Gestion des montants et devises

### Champs monétaires

| Pattern | Description | Exemple |
|---------|-------------|---------|
| `*AMT_0` | Montant | `LINAMT_0` (Montant ligne) |
| `*PRI_0` | Prix | `NETPRI_0` (Prix net) |
| `*VAT_0` | TVA | `VATAMT_0` (Montant TVA) |
| `CUR_0` | Devise | `CUR_0` (Code devise) |

### Exemple calcul TTC

```sql
SELECT 
    SOHNUM_0 AS commande,
    LINAMT_0 AS montant_ht,
    VATAMT_0 AS montant_tva,
    (LINAMT_0 + VATAMT_0) AS montant_ttc
FROM SORDER
```

---

## 🔢 Gestion des quantités

### Différentes unités

| Champ | Unité | Usage |
|-------|-------|-------|
| `QTYSTU_0` | Unité stock | Stock physique |
| `QTYPCU_0` | Unité colis | Logistique |
| `QTYSAU_0` | Unité vente | Commandes ventes |
| `QTYPUR_0` | Unité achat | Commandes achats |

### Conversion entre unités

```sql
-- Toujours utiliser l'unité stock pour les calculs
SELECT 
    ITMREF_0,
    QTYSTU_0 AS qte_stock_unite,
    QTYPCU_0 AS qte_colis,
    PCU_0 AS unite_colis,
    PCUSTUCOE_0 AS coef_conversion
FROM STOCK
```

---

## 📚 Ressources complémentaires

- **[00_GUIDE_LLM.md](./00_GUIDE_LLM.md)** : Guide génération SQL
- **[00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md)** : 608 menus avec valeurs
- **[03_RELATIONS.md](./03_RELATIONS.md)** : Schéma relationnel
- **[INDEX.md](./INDEX.md)** : Navigation complète

---

**💡 Astuce** : En cas de doute sur un champ, cherchez son pattern dans ce glossaire avant de consulter la documentation détaillée du module !

Absolument ! Voici un scénario d'entreprise complet pour la société fictive **"ErgoClick Dynamics"**, spécialisée dans la fabrication de souris ergonomiques. Ce scénario est conçu pour servir de base de paramétrage solide et cohérente dans Sage X3, couvrant les données de base articles, les tiers, les nomenclatures et les gammes.

---

### Scénario d'Entreprise : ErgoClick Dynamics

**ErgoClick Dynamics** est une PME innovante qui conçoit, fabrique et distribue une gamme de souris informatiques ergonomiques. Basée à Lyon, elle opère sur un site unique de production et de logistique.

* **Site de production (STOFCY)** : `FR011`
* **Activité** : Fabrication de périphériques informatiques.
* **Marché** : B2B (fournituristes de bureau, entreprises) et B2C (vente en ligne, distributeurs spécialisés).

### 1. Produits Finis (Articles gérés en stock et vendus)

L'entreprise commercialise trois modèles de souris, chacun visant un segment de marché différent.

| Code Article (ITMREF) | Désignation | Catégorie (ITMCAT) | Notes |
| :--- | :--- | :--- | :--- |
| `F-MOU-OFF01` | Souris bureautique ErgoStandard | `VENTE` | Modèle filaire d'entrée de gamme, produit en masse. |
| `F-MOU-GAM02` | Souris gaming ProGamer RGB | `VENTE` | Modèle filaire haute performance avec options. |
| `F-MOU-PRE03` | Souris sans-fil ErgoLuxe Pro | `VENTE` | Modèle premium sans-fil, matériaux de haute qualité. |

---

### 2. Fournisseurs Stratégiques

La chaîne d'approvisionnement repose sur un panel de fournisseurs locaux et internationaux.

| Code Tiers (BPSNUM) | Nom du Fournisseur | Pays | Composants Fournis |
| :--- | :--- | :--- | :--- |
| `FR00123` | PlastiForme SAS | France | Coques en plastique ABS |
| `DE00456` | Elektronik GmbH | Allemagne | Circuits imprimés (PCB), capteurs optiques, switchs |
| `CN00789` | Shenzhen Connectors Ltd. | Chine | Câbles USB, modules LED, dongles |
| `TW00101` | Taipei Precision Parts | Taiwan | Batteries Lithium-Ion, coques en aluminium |
| `FR00321` | Visserie du Centre | France | Visserie standard et poids de lestage |

---

### 3. Articles : Composants & Semi-Fini

Voici le détail des articles achetés et du produit semi-fini fabriqué en interne.

#### a) Composants (Matières premières - Achetées)

| Code Article (ITMREF) | Désignation | Catégorie (ITMCAT) | Fournisseur Principal |
| :--- | :--- | :--- | :--- |
| `C-CAS-PLA01` | Coque plastique supérieure (ABS) | `ACHAT` | `FR00123` |
| `C-CAS-PLA02` | Coque plastique inférieure (ABS) | `ACHAT` | `FR00123` |
| `C-CAS-ALU01` | Coque supérieure en aluminium brossé | `ACHAT` | `TW00101` |
| `C-PCB-MOU01` | Circuit imprimé (PCB) standard | `ACHAT` | `DE00456` |
| `C-PCB-GAM01` | Circuit imprimé (PCB) gaming | `ACHAT` | `DE00456` |
| `C-SEN-OPT01` | Capteur optique 1200 DPI | `ACHAT` | `DE00456` |
| `C-SWI-SIL01` | Switch "Silent Click" | `ACHAT` | `DE00456` |
| `C-CAB-USB01` | Câble USB standard 1.5m | `ACHAT` | `CN00789` |
| `C-CAB-USB02` | Câble USB tressé 2m | `ACHAT` | `CN00789` |
| `C-BAT-LI01` | Batterie Lithium-Ion 500mAh | `ACHAT` | `TW00101` |
| `C-MOD-BT01` | Module Bluetooth 5.2 | `ACHAT` | `CN00789` |
| `C-USB-DNG01` | Dongle USB 2.4Ghz | `ACHAT` | `CN00789` |
| `C-LED-RGB01` | Module LED RGB | `ACHAT` | `CN00789` |
| `C-WGT-STL01` | Poids de lestage en acier (5g) | `ACHAT` | `FR00321` |
| `C-SCR-STD01` | Vis standard M2x4mm | `ACHAT` | `FR00321` |

#### b) Article Semi-Fini (Fabriqué et stocké)

Ce produit est un sous-ensemble utilisé dans plusieurs produits finis pour simplifier la production.

| Code Article (ITMREF) | Désignation | Catégorie (ITMCAT) | Notes |
| :--- | :--- | :--- | :--- |
| `S-ASM-PCB01` | Assemblage PCB standard + capteur | `FAB` | Sous-ensemble électronique de base. |

---

### 4. Nomenclatures de Production (BOM - Bill of Materials)

Les nomenclatures définissent les "recettes" pour fabriquer les articles.

#### a) Nomenclature du Semi-Fini `S-ASM-PCB01`

| Index | Composant | Désignation | Quantité |
| :--- | :--- | :--- | :--- |
| 10 | `C-PCB-MOU01` | Circuit imprimé (PCB) standard | 1 |
| 20 | `C-SEN-OPT01` | Capteur optique 1200 DPI | 1 |

#### b) Nomenclature du Produit Fini `F-MOU-OFF01` (Souris ErgoStandard)

| Index | Composant | Désignation | Quantité |
| :--- | :--- | :--- | :--- |
| 10 | `S-ASM-PCB01` | Assemblage PCB standard + capteur | 1 |
| 20 | `C-CAS-PLA01` | Coque plastique supérieure (ABS) | 1 |
| 30 | `C-CAS-PLA02` | Coque plastique inférieure (ABS) | 1 |
| 40 | `C-CAB-USB01` | Câble USB standard 1.5m | 1 |
| 50 | `C-SCR-STD01` | Vis standard M2x4mm | 4 |

#### c) Nomenclature du Produit Fini `F-MOU-GAM02` (Souris ProGamer)

| Index | Composant | Désignation | Quantité |
| :--- | :--- | :--- | :--- |
| 10 | `C-PCB-GAM01` | Circuit imprimé (PCB) gaming | 1 |
| 20 | `C-CAS-PLA01` | Coque plastique supérieure (ABS) | 1 |
| 30 | `C-CAS-PLA02` | Coque plastique inférieure (ABS) | 1 |
| 40 | `C-CAB-USB02` | Câble USB tressé 2m | 1 |
| 50 | `C-LED-RGB01` | Module LED RGB | 2 |
| 60 | `C-WGT-STL01` | Poids de lestage en acier (5g) | 1 |
| 70 | `C-SCR-STD01` | Vis standard M2x4mm | 4 |

#### d) Nomenclature du Produit Fini `F-MOU-PRE03` (Souris ErgoLuxe)

| Index | Composant | Désignation | Quantité |
| :--- | :--- | :--- | :--- |
| 10 | `S-ASM-PCB01` | Assemblage PCB standard + capteur | 1 |
| 20 | `C-CAS-ALU01` | Coque supérieure en aluminium brossé | 1 |
| 30 | `C-CAS-PLA02` | Coque plastique inférieure (ABS) | 1 |
| 40 | `C-BAT-LI01` | Batterie Lithium-Ion 500mAh | 1 |
| 50 | `C-MOD-BT01` | Module Bluetooth 5.2 | 1 |
| 60 | `C-USB-DNG01` | Dongle USB 2.4Ghz | 1 |
| 70 | `C-SWI-SIL01` | Switch "Silent Click" | 2 |
| 80 | `C-SCR-STD01` | Vis standard M2x4mm | 3 |

---

### 5. Gammes de Fabrication (Routings)

Les gammes décrivent les opérations nécessaires pour fabriquer les articles.

#### a) Gamme du Semi-Fini `S-ASM-PCB01`

* **Poste de charge (WST)** : `ELEC01` (Atelier Électronique)

| Opération (OPE) | Description | Temps Prép. (min) | Temps Op. (min/unité) |
| :--- | :--- | :--- | :--- |
| 10 | Soudure des composants sur PCB | 15 | 2 |
| 20 | Test électrique unitaire | 0 | 0.5 |

#### b) Gamme du Produit Fini `F-MOU-OFF01` (Souris ErgoStandard)

* **Poste de charge (WST)** : `ASSY01` (Ligne d'assemblage 1)

| Opération (OPE) | Description | Temps Prép. (min) | Temps Op. (min/unité) |
| :--- | :--- | :--- | :--- |
| 10 | Assemblage des coques et du sous-ensemble | 0 | 3 |
| 20 | Test fonctionnel final | 0 | 1 |
| 30 | Emballage et conditionnement standard | 10 | 2 |

#### c) Gamme du Produit Fini `F-MOU-GAM02` (Souris ProGamer)

* **Poste de charge (WST)** : `ASSY02` (Ligne d'assemblage spécifique)

| Opération (OPE) | Description | Temps Prép. (min) | Temps Op. (min/unité) |
| :--- | :--- | :--- | :--- |
| 10 | Assemblage coques, PCB, lestage, LEDs | 20 | 5 |
| 20 | Test fonctionnel et calibration DPI | 0 | 2 |
| 30 | Emballage et conditionnement premium | 15 | 3 |

Ce scénario fournit une base de données riche et interconnectée, idéale pour tester les flux Achats, Stocks, Production et Ventes dans Sage X3. Il permet de simuler des calculs de besoins nets (CBN), des lancements d'ordres de fabrication (OF), des suivis de coûts et des analyses de stocks.
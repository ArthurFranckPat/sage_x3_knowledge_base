# Module Ventes - Sage X3

[◄ Retour à l'INDEX](./INDEX.md)

---

## 📋 Vue d'ensemble

Le **Module Ventes** gère l'ensemble du cycle de vente depuis le devis jusqu'à la facture client, en passant par les commandes, livraisons et retours. Il comprend environ **60 tables** couvrant toutes les étapes du processus commercial.

### Processus couverts

1. **Devis** : Création et suivi des propositions commerciales
2. **Commandes** : Enregistrement et gestion des commandes clients
3. **Livraisons** : Préparation et expédition des marchandises
4. **Factures** : Facturation et valorisation
5. **Retours** : Gestion des retours marchandises
6. **Tarifs** : Catalogues et grilles tarifaires

---

## 📊 Statistiques

- **Nombre total de tables** : 57
- **Codes d'activité** : SPR, SFI, DEB, EDIX3, KUS, SMI, KPO
- **Tables principales** : SORDER, SDELIVERY, SINVOICEV
- **Tables transactionnelles** : 80% des tables sont transactionnelles

---

## 🔑 Table SORDER - Commandes de vente

### Informations générales
| Propriété | Valeur |
|-----------|--------|
| **Table** | SORDER |
| **Abréviation** | SOH |
| **Intitulé** | Commandes de vente - Entête |
| **Module** | Ventes |
| **Code activité** | |

### Clés et index
| Clé | Description | Homonymes | Act |
|-----|-------------|-----------|-----|
| SOH0 | SOHNUM | Non | |
| SOH1 | BPCORD+CUSORDREF | Oui | |
| SOH2 | CUSORDREF+BPCORD | Oui | |
| SOH3 | ORDSTA+BPCORD | Oui | |
| SOH4 | ORDSTA+SOHNUM | Non | |
| SOH5 | ORDSTA+INVSTA+SOHCAT | Oui | |
| SOH7 | SOHNUMEND | Oui | KPO |

### Colonnes détaillées

#### Identification et références
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| SOHNUM | No commande | VCR | | | |
| SOHNUMEND | Numéro définitif | VCR | | | KPO |
| CUSORDREF | Réf commande client | A | 20 | | |
| ORDDAT | Date commande | D | | | |
| SOHTYP | Type commande | TSO | | →TABSOHTYP | |
| SOHCAT | Catégorie commande | M | 15 | | |
| REVNUM | No avenant | C | 4 | | |

#### Tiers et adresses
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPCORD | Client commande | BPR | | →BPARTNER | |
| BPCINV | Client facture | BPR | | →BPARTNER | |
| BPCPYR | Tiers Payeur | BPR | | →BPARTNER | |
| BPCGRU | Client groupe | BPR | | →BPARTNER | |
| BPAADD | Adresse livraison | BPD | | →BPDLVCUST | |
| BPAINV | Code adresse facture | ADR | | | |
| BPAORD | Code adr commande | ADR | | | |
| BPAPYR | Adresse payeur | ADR | | | |

#### Informations client commande
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPCNAM | Nom client commande | NAM | | | |
| BPCADDLIG | Adresse commande | ADL | | | |
| BPCCRY | Pays commande | CRY | | →TABCOUNTRY | |
| BPCCRYNAM | Nom pays commande | NCY | | | |
| BPCCTY | Ville commande | CTY | | | |
| BPCPOSCOD | Code postal commande | POS | | | |
| BPCSAT | Etat commande | SAT | | | |

#### Informations client livré
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPDNAM | Nom client livré | NAM | | | |
| BPDADDLIG | Adresse livraison | ADL | | | |
| BPDCRY | Pays livraison | CRY | | →TABCOUNTRY | |
| BPDCRYNAM | Nom pays livraison | NCY | | | |
| BPDCTY | Ville livraison | CTY | | | |
| BPDPOSCOD | Code postal liv | POS | | | |
| BPDSAT | Etat livraison | SAT | | | |

#### Informations client facturé
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| BPINAM | Nom client facture | NAM | | | |
| BPIADDLIG | Adresse facture | ADL | | | |
| BPICRY | Pays facture | CRY | | →TABCOUNTRY | |
| BPICRYNAM | Nom pays facture | NCY | | | |
| BPICTY | Ville facture | CTY | | | |
| BPIPOSCOD | Code postal facture | POS | | | |
| BPISAT | Etat facture | SAT | | | |
| BPIEECNUM | Identification UE | A | 20 | | DEB |

#### Organisation et sites
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CPY | Société | CPY | | →COMPANY | |
| SALFCY | Site vente | FCY | | →FACILITY | |
| STOFCY | Site expédition | FCY | | →FACILITY | |
| ORIFCY | Site origine | FCY | | →FACILITY | |
| BETFCY | Inter-site | M | 4 | | |
| BETCPY | Inter-sociétés | M | 4 | | |

#### Valorisation et montants
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CUR | Devise | CUR | | →TABCUR | |
| CHGRAT | Cours devise | DCB | 5.6 | | |
| CHGTYP | Type cours | M | 15 | | |
| PRITYP | Prix HT/TTC | M | 6 | | |
| ORDNOT | Mt lignes HT | MD1 | | | |
| ORDATI | Mt lignes TTC | MD1 | | | |
| ORDINVNOT | Valorisation HT | MD1 | | | |
| ORDINVATI | Valorisation TTC | MD1 | | | |
| ORDNOTL | Mt lignes HT (soc) | MD1 | | | |
| ORDATIL | Mt lignes TTC (soc) | MD1 | | | |
| ORDINVNOTL | Valorisation HT soc | MD1 | | | |
| ORDINVATIL | Valorisation TTC soc | MD1 | | | |
| PFMTOT | Marge totale | MD1 | | | |

#### Montants à livrer/facturer
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DLRNOT | Montant à livrer HT | MD1 | | | |
| DLRATI | Montant à livrer TTC | MD1 | | | |
| INRNOT | A facturer HT | MD1 | | | |
| INRATI | A facturer TTC | MD1 | | | |
| INRSCHNOT | Echéance facturation HT | MD1 | | | |
| INRSCHATI | Echéance facturation TTC | MD1 | | | |

#### Statuts et états
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ORDSTA | Etat commande | M | 15 | | |
| DLVSTA | Etat livraison | M | 15 | | |
| INVSTA | Etat facture | M | 15 | | |
| ALLSTA | Statut allocation | M | 15 | | |
| CDTSTA | Etat crédit | M | 15 | | |
| CDTSTAP | Etat en-cours précédent | M | 15 | | |
| HLDSTA | Statut verrouillage | M | 10 | | |
| APPFLG | Signée | M | 15 | | |
| ORDCLE | Autor solde commande | M | 4 | | |

#### Lignes et compteurs
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LINNBR | Nombre lignes | C | 4 | | |
| DLVLINNBR | Nb lignes livrées | C | 4 | | |
| INVLINNBR | Nb lignes facturées | C | 4 | | |
| CLELINNBR | Nb lignes soldées | C | 4 | | |
| ALLLINNBR | Nb lignes à allouer | C | 4 | | |

#### Livraison et transport
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DEMDLVDAT | Date liv demandée | D | | | |
| DEMDLVHOU | Heure livraison prévue | HM | | | EDIX3 |
| DAYLTI | Délai livraison | C | 3 | | |
| MDL | Mode livraison | MDL | | →TABMODELIV | |
| BPTNUM | Transporteur | BPT | | →BPCARRIER | |
| FFWNUM | Transitaire | BPT | | →BPCARRIER | |
| FFWADD | Adresse transitaire | ADR | | | |
| EECICT | Incoterm | ICT | | →INCOTERM | |
| ICTCTY | Ville Incoterm | CTY | | | |
| SHIDAT | Date expédition | D | | | |
| DME | Livraison partielle | M | 15 | | |
| ODL | 1 cde par livraison | M | 4 | | |
| DLVPIO | Priorité livraison | M | 15 | | |

#### Conditions commerciales
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| PTE | Condition paiement | PTE | | →TABPAYTERM | |
| DEP | Escompte | TDA | | →TABDEPAGIO | |
| PLISTC | Code structure | PRS | | →PRICSTRUCT | |
| DISCRGTYP | Type de remise/frais | M | 10 | | SPR |
| INVDTA | Elément facturation | SFI | | →SFOOTINV | SFI |
| INVDTADSP | Clé Répart | DSP | | →CADSP | SFI |
| INVDTAAMT | % ou mt facturation | DCB | 11.4 | | SFI |
| INVDTATYP | Type de valeur | M | 3 | | SFI |

#### Taxes
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| VACBPR | Régime taxe | TVB | | →TABVACBPR | |
| AMTTAX | Montant taxe | MD1 | | | KUS |
| BASTAX | Base taxe | MD1 | | | KUS |
| SSTENTCOD | Code exonération NA | ADI | | →ATABDIV | LTA |
| ADRVAL | Validé | M | 4 | | LTA |
| VTT | Type transact.Vertex | A | 1 | | KUS |
| GEOCOD | Géo code | GEO | | | KUS |
| INSCTYFLG | Flag intér. ville | A | 1 | | KUS |

#### Facturation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| IME | Mode facturation | M | 15 | | |
| INVCND | Cond. facturation | INVCND | | →TABINVCND | |
| VCRINVCNDDAT | Date départ échéance | D | | | |
| LASINVNUM | No dern facture | VCR | | | |
| LASINVDAT | Date dern facture | D | | | |
| PRFNUM | No facture proforma | VCR | | | |
| SDHTYP | Type livraison | TSD | | →TABSDHTYP | |

#### Dernières livraisons
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LASDLVNUM | No dern livraison | VCR | | | |
| LASDLVDAT | Date dern livraison | D | | | |

#### Analytique
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DIE | Code axe | DIE | | →GDIE | ANA |
| CCE | Section | CCE | | →CACCE | ANA |
| PJT | Affaire | PJT | | →PIMPL | |

#### Commercial et marketing
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| REP | Représentant | REP | | →SALESREP | REP |
| CMGNUM | Campagne marketing | CMG | | →CMARKETING | |
| OPGNUM | Opération marketing | VCR | | | |
| OPGTYP | Type opération | A | 3 | | |

#### Contacts
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CNTNAM | Personne à contacter | AIN | | →CONTACTCRM | |
| CNDNAM | Contact livraison | AIN | | →CONTACTCRM | |
| CNINAM | Contact facture | AIN | | →CONTACTCRM | |

#### Verrouillage
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| HLDCOD | Code verrouillage | ADI | | →ATABDIV | |
| HLDCODP | Code verrouillage précédent | ADI | | →ATABDIV | |
| HLDDAT | Date (dé)verrouillage | D | | | |
| HLDDATP | Date verrouillage précédente | D | | | |
| HLDTIM | Heure (dé)verrouillage | HM | | | |
| HLDTIMP | Heure verrouillage précédente | HM | | | |
| HLDUSR | Utilisateur (dé)verrouillage | AUS | | →AUTILIS | |
| HLDUSRP | Utilisateur verrou précédent | AUS | | →AUTILIS | |
| UNL | Déverrouillage | M | 4 | | |

#### Totaux et cumuls
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DSPTOTQTY | Cumul quantité | DCB | 9.6 | | |
| DSPTOTWEI | Cumul poids | QTY | | | |
| DSPTOTVOL | Cumul volume | QTY | | | |
| DSPWEU | Unité poids | UOM | | →TABUNIT | |
| DSPVOU | Unité Volume | UOM | | →TABUNIT | |

#### Allocation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| ALLTYP | Type allocation | M | 15 | | |

#### Textes et observations
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| SOHTEX1 | Texte entête cde | TXC | | | |
| SOHTEX2 | Texte pied cde | TXC | | | |

#### DEB et international
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| EECLOC | Lieu transport DEB | M | 15 | | DEB |
| SHIADECOD | Code expédit/destin | A | 35 | | |

#### Brouillon et validation
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| DRAFTSTATUS | Brouillon | C | 2 | | |
| DRAFTREJ | Rejet brouillon | M | 4 | | |
| DRAFTREJREN | Motif rej brouillon | A | 60 | | |
| SOHVALDAT | Date de validation | D | | | KPO |
| SOHCFMFLG | Signature électronique | M | 4 | | KPO |

#### Solde et clôture
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CCLDAT | Date solde | D | | | |
| CCLREN | Motif solde | ADI | | →ATABDIV | |

#### Devis et autres références
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| SQHNUM | No devis | VCR | | | |
| SRENUM | Demande de service | SRE | | →SERREQUEST | |
| SINUM | No pièce Intégrale | A | 10 | | SMI |

#### Divers
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| LAN | Langue | LAN | | →TABLAN | |
| EXPNUM | Numéro export | L | 8 | | |
| DRN | No tournée | M | 15 | | |
| COPNBR | Nb exemplaires ARC | C | 1 | | |
| OCNFLG | Impression ARC | M | 4 | | |
| OCNPRN | ARC imprimé | M | 4 | | |
| VLYDATCON | Date validité | D | | | |
| LNDRTNDAT | Date retour prêt | D | | | |

#### Statistiques
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| TSCCOD | Famille statistique | ADI | | →ATABDIV | STC |

#### Pieds de page facturation spéciaux
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| INVDTALIN | Elt fact lig tarif | C | 2 | | SPR |
| SFISSTCOD | Code taxe SST | ADI | | →ATABDIV | SFI |

#### Audit et traçabilité
| Colonne | Intitulé | Type | Long | Lien | Act |
|---------|----------|------|------|------|-----|
| CREDAT | Date création | D | | | |
| CREDATTIM | Date heure | ADATIM | | | |
| CREUSR | Opérateur création | A | 5 | | |
| UPDDAT | Date modification | D | | | |
| UPDDATTIM | Date heure | ADATIM | | | |
| UPDUSR | Opérateur modif | A | 5 | | |
| AUUID | Identifiant unique | AUUID | | | |

---

## 📑 Liste complète des tables

### Devis

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SQUOTE | SQH | Entête devis | |
| SQUOTED | SQD | Détail devis | |
| SQHCOV | SQC | Couverture Devis | |
| TABSQHTYP | TSQ | Table types devis | |
| VSQUOTE | VQH | Historique devis vente - en-tête | |
| VSQUOTED | VQD | Historique devis vente - détails | |

### Commandes

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SORDER | SOH | Commandes de vente - Entête | |
| SORDERP | SOP | Commandes de vente - Prix | |
| SORDERQ | SOQ | Commandes de vente - Quantités | |
| SORDERC | SOC | Commandes de vente - Cumul A/R | |
| SORDERC2 | SO2 | Cde vente - Cumul AF 2 | |
| SORDERMD | SOM | Cdes vente - Modification | |
| SORDERL | SOL | Cumul commandes | |
| SORDERSPS | SPS | Livraison sur stock prest | SPS |
| TABSOHTYP | TSO | Table types commandes | |
| SOHWRK | SOW | Temporaire commandes | |

### Livraisons

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SDELIVERY | SDH | Entête de livraison | |
| SDELIVERYD | SDD | Détail livraison | |
| SDELIVERYNO | SDN | Notification livraison vente | |
| SDELIVERYNOD | SDND | Notification livraison vente | |
| SDELIVERYWRK | SDW | Temporaire livraison vente | |
| SDELIVERNO | SDE | Cumul notification livraison | |

### Factures

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SINVOICEV | SIV | Facture vente valorisation | |
| SINVOICED | SID | Détail facture de vente | |
| SINVOICEDLOC | SIDLOC | Détail facture de vente | |
| SINVOICEA | SIA | Ligne analytique facture vente | |
| SINVOICEALOC | SIALOC | Ligne analytique facture vente | |
| SINVOICEACC | SAC | Facture vente ligne compta | |
| TABSIHTYP | TSI | Table type factures ventes | |

### Tarifs et catalogues

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SPRICFICH | SPF | Tarifs clients (fiches) | |
| SPRICLINK | SPK | Recherche tarifs vente (link) | |
| SPRICPRTQ | SPQ | Catalogue tarifs ventes | |
| SPRICINCR | SPI | Augmentation des tarifs | |
| SPRICLIS | SPL | Liste tarifs clients | |
| SPRIPAR | SPR | Paramétrage tarifs client | |
| SPRICUST | SPC | Accord tarifaire | |
| PRICSTRUCT | PRS | Structure de prix | SPR |

### Retours

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SRETURN | SRH | Entête retour vente | |
| SRETURND | SRD | Détail retour vente | |
| SRETURNWRK | SRW | Temporaire retours vente | |
| TABSRHTYP | TRE | Table types retours | |

### Éléments de tarification

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SFOOTINV | SFI | Eléments de facturation vente | SFI |
| SFOOTINVINV | SFII | Eléments de facturation vente | SFI |
| SFOOTINVITM | SFIM | Eléments facturation article | SFI |
| SFOOTINVSOH | SFIS | Elt facturation pied cde vente | SFI |

### Statistiques et analytique

| Table | Abréviation | Intitulé | Code activité |
|-------|-------------|----------|---------------|
| SALREPSTD | SRS | Commissions et statist ventes | |
| TABSALREP | TSR | Table représentants | |
| SALESREP | REP | Représentants | REP |

---

## 🔗 Relations principales

### SORDER → autres tables
- **SORDERQ** : Détails quantitatifs des lignes (1 à N)
- **SORDERP** : Détails des prix et valorisations (1 à N)
- **SORDERC** : Cumuls d'avancement par ligne (1 à N)
- **SDELIVERY** : Livraisons générées (1 à N)
- **SINVOICEV** : Factures générées (1 à N)

### SORDER → Données de base
- **BPARTNER** : Client commande, facturé, payeur (N à 1)
- **ITMMASTER** : Articles commandés via SORDERQ (N à N)
- **FACILITY** : Sites de vente, expédition, origine (N à 1)
- **COMPANY** : Société commerciale (N à 1)

### SORDER → Comptabilité
- **GACCOUNT** : Comptes comptables via ventilation
- **CACCE** : Sections analytiques

### SDELIVERY → SORDER
- Livraisons partielles ou totales
- Consolidation possible (N commandes → 1 livraison)

### SINVOICEV → SORDER/SDELIVERY
- Facturation sur commande ou sur livraison
- Facturation multiple possible

---

## 📝 Notes importantes

### Cycle de vie d'une commande

1. **Création** : ORDSTA = 'Ouverte'
2. **Allocation** : ALLSTA = 'Allouée'
3. **Livraison** : DLVSTA = 'Livrée' / 'Partiellement livrée'
4. **Facturation** : INVSTA = 'Facturée' / 'Partiellement facturée'
5. **Clôture** : ORDSTA = 'Soldée' ou 'Fermée'

### Statuts de commande (ORDSTA)

- **Brouillon** : Non validée
- **Ouverte** : Validée, en cours
- **En préparation** : En cours de picking
- **Partiellement livrée** : Livraisons partielles effectuées
- **Livrée** : Complètement livrée
- **Partiellement facturée** : Facturation partielle
- **Facturée** : Complètement facturée
- **Soldée** : Clôturée administrativement
- **Annulée** : Annulée

### Types de facturation (IME)

- **Sur commande** : Facturation directe depuis la commande
- **Sur livraison** : Facturation après livraison
- **Regroupée** : Facturation groupée de plusieurs documents
- **Par échéance** : Facturation progressive par échéances

### Verrouillages (HLDSTA)

- **Verrouillé crédit** : En-cours client dépassé
- **Verrouillé tarif** : Tarifs manquants ou invalides
- **Verrouillé stock** : Stock insuffisant
- **Verrouillé manuel** : Verrouillage utilisateur

---

## 💡 Cas d'usage courants

### 1. Recherche de commandes client
```sql
SELECT SOHNUM, ORDDAT, BPCORD, ORDNOT, ORDSTA
FROM SORDER
WHERE BPCORD = 'CLIENT001'
  AND ORDDAT >= '2024-01-01'
ORDER BY ORDDAT DESC
```

### 2. Commandes en attente de livraison
```sql
SELECT SOHNUM, BPCORD, DEMDLVDAT, ORDNOT
FROM SORDER
WHERE ORDSTA IN ('Ouverte', 'En préparation')
  AND DLVSTA <> 'Livrée'
ORDER BY DEMDLVDAT
```

### 3. Chiffre d'affaires par représentant
```sql
SELECT REP, SUM(ORDINVNOT) AS CA
FROM SORDER
WHERE ORDDAT BETWEEN '2024-01-01' AND '2024-12-31'
  AND INVSTA = 'Facturée'
GROUP BY REP
ORDER BY CA DESC
```

---

## ⚠️ Points d'attention

### Performance
- Indexer sur BPCORD, ORDDAT, ORDSTA pour les recherches courantes
- Les tables SORDERQ et SORDERP peuvent être volumineuses
- Utiliser les vues agrégées pour les statistiques

### Intégrité
- Vérifier la cohérence entre SORDER, SDELIVERY et SINVOICEV
- Contrôler les cumuls dans SORDERC
- Surveiller les commandes verrouillées

### Codes d'activité
- **SPR** : Structure de prix avancée
- **SFI** : Éléments de facturation au pied
- **REP** : Gestion des représentants
- **STC** : Statistiques commerciales
- **DEB** : Déclarations d'échanges de biens

---

[◄ Retour à l'INDEX](./INDEX.md)

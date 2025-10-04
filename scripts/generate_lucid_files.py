#!/usr/bin/env python3
"""
Script de génération de migrations et seeders Lucid pour le playground Sage X3
Lit les données depuis data/tables_X3.csv et data/tables_champs_X3.csv
Génère des migrations TypeScript et des seeders avec données fictives
"""

import csv
import json
import os
import re
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Set
from collections import defaultdict

# Chemin de base du projet
BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / "data"
PLAYGROUND_DIR = BASE_DIR / "playground"
MIGRATIONS_DIR = PLAYGROUND_DIR / "database" / "migrations"
SEEDERS_DIR = PLAYGROUND_DIR / "database" / "seeders"
MENUS_FILE = BASE_DIR / "menus" / "menus_locaux.json"

# Tables principales à inclure (ordre de création pour respecter les FK)
PRIORITY_TABLES = [
    # Données de base
    'FACILITY',       # Sites
    'BPARTNER',       # Tiers
    'BPADDRESS',      # Adresses tiers
    'BPCUSTOMER',     # Clients
    'BPSUPPLIER',     # Fournisseurs
    
    # Articles
    'ITMMASTER',      # Articles
    'ITMFACILIT',     # Articles-Sites
    'ITMBPS',         # Articles-Fournisseurs
    
    # Stocks
    'STOCK',          # Stocks
    'STOJOU',         # Mouvements de stock
    'STOLOC',         # Emplacements
    'STOLOT',         # Lots
    
    # Ventes
    'SORDER',         # Commandes ventes (entête)
    'SORDERQ',        # Commandes ventes (quantités)
    'SORDERP',        # Commandes ventes (prix)
    'SDELIVERY',      # Livraisons
    'SDELIVERYD',     # Lignes livraisons
    'SINVOICE',       # Factures ventes
    
    # Achats
    'PORDER',         # Commandes achats (entête)
    'PORDERQ',        # Commandes achats (quantités)
    'PORDERP',        # Commandes achats (prix)
    'PRECEIPT',       # Réceptions
    'PRECEIPTD',      # Lignes réceptions
    'PINVOICE',       # Factures achats
    
    # Production
    'BOM',            # Nomenclatures
    'BOMD',           # Composants nomenclatures
    'ROUTING',        # Gammes
    'MFGHEAD',        # Ordres de fabrication
    'MFGITM',         # Articles OF
    'MFGOPE',         # Opérations OF
]

# Mapping types SQL Server → Lucid/SQLite
TYPE_MAPPING = {
    'char': 'string',
    'varchar': 'string',
    'nchar': 'string',
    'nvarchar': 'string',
    'text': 'text',
    'int': 'integer',
    'bigint': 'bigInteger',
    'smallint': 'integer',
    'tinyint': 'integer',
    'decimal': 'decimal',
    'numeric': 'decimal',
    'float': 'float',
    'real': 'float',
    'money': 'decimal',
    'datetime': 'datetime',
    'date': 'date',
    'time': 'time',
    'bit': 'boolean',
}

def load_tables() -> Set[str]:
    """Charge la liste des tables depuis tables_X3.csv"""
    tables = set()
    csv_file = DATA_DIR / "tables_X3.csv"
    
    with open(csv_file, 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            table_code = row.get('Code table', '').strip()
            if table_code:
                tables.add(table_code)
    
    print(f"✓ {len(tables)} tables chargées depuis {csv_file.name}")
    return tables

def load_fields() -> Dict[str, List[Dict]]:
    """Charge les champs de chaque table depuis tables_champs_X3.csv"""
    fields_by_table = defaultdict(list)
    csv_file = DATA_DIR / "tables_champs_X3.csv"
    
    with open(csv_file, 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            table_code = row.get('Code table', '').strip()
            field_code = row.get('Code champ', '').strip()
            field_label = row.get('Texte long', '').strip()
            
            if table_code and field_code:
                fields_by_table[table_code].append({
                    'code': field_code,
                    'label': field_label,
                })
    
    print(f"✓ {len(fields_by_table)} tables avec champs chargées depuis {csv_file.name}")
    return dict(fields_by_table)

def load_menus() -> Dict:
    """Charge les menus locaux depuis menus_locaux.json"""
    if not MENUS_FILE.exists():
        print(f"⚠ Fichier {MENUS_FILE} non trouvé")
        return {}
    
    with open(MENUS_FILE, 'r', encoding='utf-8') as f:
        menus = json.load(f)
    
    print(f"✓ {len(menus)} menus locaux chargés depuis {MENUS_FILE.name}")
    return menus

def guess_field_type(field_code: str) -> tuple:
    """Devine le type d'un champ basé sur son nom"""
    field_lower = field_code.lower()
    
    # Dates
    if 'dat' in field_lower or field_lower.endswith('_0') and 'date' in field_lower:
        return ('date', None)
    
    # DateTime
    if 'tim' in field_lower or 'dattim' in field_lower:
        return ('datetime', None)
    
    # Booléens
    if field_lower.startswith('flg') or field_lower.startswith('enaflg'):
        return ('boolean', None)
    
    # Quantités/Montants
    if 'qty' in field_lower or 'amt' in field_lower or 'pri' in field_lower:
        return ('decimal', '15,2')
    
    # Codes/Références (courts)
    if 'cod' in field_lower or 'num' in field_lower or 'ref' in field_lower:
        return ('string', 20)
    
    # Descriptions (longs)
    if 'des' in field_lower or 'nam' in field_lower or 'txt' in field_lower:
        return ('string', 60)
    
    # Statuts (int)
    if 'sta' in field_lower:
        return ('integer', None)
    
    # Par défaut : string
    return ('string', 30)

def to_snake_case(name: str) -> str:
    """Convertit un nom en snake_case pour Lucid"""
    return name.lower()

def select_important_fields(table_name: str, fields: List[Dict], max_fields: int = 20) -> List[Dict]:
    """Sélectionne les champs les plus importants d'une table"""
    
    # Champs prioritaires par pattern (ordre d'importance)
    priority_patterns = [
        # Codes de référence (les plus importants)
        lambda f: f['code'].endswith('REF_0'),
        lambda f: f['code'].endswith('COD_0'),
        lambda f: f['code'].endswith('NUM_0'),
        # Descriptions
        lambda f: 'DES' in f['code'] and f['code'].endswith('_0'),
        # Statuts et types
        lambda f: 'STA_0' in f['code'] or 'TYP_0' in f['code'],
        # Dates importantes
        lambda f: 'DAT_0' in f['code'] or 'DTE_0' in f['code'],
        # Quantités et montants
        lambda f: 'QTY' in f['code'] or 'AMT' in f['code'] or 'PRI' in f['code'],
        # Unités
        lambda f: any(u in f['code'] for u in ['PCU_0', 'STU_0', 'SAU_0']),
        # Autres champs standards (sans préfixe X, Y, Z)
        lambda f: not any(f['code'].startswith(prefix) for prefix in ['X', 'Y', 'Z']),
    ]
    
    selected = []
    remaining = fields.copy()
    
    # Appliquer les patterns dans l'ordre
    for pattern in priority_patterns:
        matching = [f for f in remaining if pattern(f)]
        selected.extend(matching)
        remaining = [f for f in remaining if f not in matching]
        
        if len(selected) >= max_fields:
            break
    
    # Compléter avec les champs restants si nécessaire
    if len(selected) < max_fields:
        selected.extend(remaining[:max_fields - len(selected)])
    
    return selected[:max_fields]

def generate_migration(table_name: str, fields: List[Dict], index: int) -> str:
    """Génère le code TypeScript d'une migration Lucid"""
    
    timestamp = int(datetime.now().timestamp() * 1000) + index
    table_snake = to_snake_case(table_name)
    class_name = f"Create{table_name.capitalize()}Table"
    
    migration = f'''import {{ BaseSchema }} from '@adonisjs/lucid/schema'

export default class extends BaseSchema {{
  protected tableName = '{table_snake}'

  async up() {{
    this.schema.createTable(this.tableName, (table) => {{
      table.increments('id').primary()
      
      // Champs Sage X3
'''
    
    # Utiliser TOUS les champs disponibles
    for field in fields:
        field_code = field['code']
        field_label = field['label']
        field_snake = to_snake_case(field_code)
        
        # Deviner le type
        field_type, field_size = guess_field_type(field_code)
        
        # Générer la ligne
        if field_type == 'string':
            if field_size:
                line = f"      table.string('{field_snake}', {field_size})"
            else:
                line = f"      table.string('{field_snake}')"
        elif field_type == 'decimal':
            line = f"      table.decimal('{field_snake}', 15, 2)"
        elif field_type == 'integer':
            line = f"      table.integer('{field_snake}')"
        elif field_type == 'boolean':
            line = f"      table.boolean('{field_snake}').defaultTo(false)"
        elif field_type == 'date':
            line = f"      table.date('{field_snake}')"
        elif field_type == 'datetime':
            line = f"      table.datetime('{field_snake}')"
        else:
            line = f"      table.string('{field_snake}')"
        
        # Ajouter le commentaire
        migration += f"{line} // {field_label}\n"
    
    migration += '''      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
'''
    
    return migration

def generate_seeder(table_name: str, fields: List[Dict], menus: Dict) -> str:
    """Génère le code TypeScript d'un seeder Lucid"""
    
    table_snake = to_snake_case(table_name)
    class_name = f"{table_name.capitalize()}Seeder"
    
    # Identifier les champs clés (parcourir tous les champs)
    ref_field = None
    name_field = None
    status_field = None
    
    for field in fields:
        field_code = field['code'].lower()
        if 'ref_0' in field_code or 'num_0' in field_code:
            if not ref_field:  # Prendre le premier trouvé
                ref_field = field['code']
        if 'des' in field_code or 'nam' in field_code:
            if not name_field:  # Prendre le premier trouvé
                name_field = field['code']
        if 'sta_0' in field_code:
            if not status_field:  # Prendre le premier trouvé
                status_field = field['code']
    
    seeder = f'''import {{ BaseSeeder }} from '@adonisjs/lucid/seeders'
import Database from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {{
  async run() {{
    // Données fictives pour {table_name}
    const data = [
'''
    
    # Générer 10 lignes de données fictives avec TOUS les champs
    for i in range(1, 11):
        seeder += "      {\n"
        
        for field in fields:
            field_code = field['code']
            field_snake = to_snake_case(field_code)
            field_type, _ = guess_field_type(field_code)
            
            # Générer une valeur fictive
            if field_code == ref_field:
                value = f"'{table_name[:3].upper()}{i:04d}'"
            elif field_code == name_field:
                value = f"'{field['label']} {i}'"
            elif field_code == status_field:
                value = "1"  # Actif
            elif field_type == 'date':
                value = "new Date().toISOString().split('T')[0]"
            elif field_type == 'datetime':
                value = "new Date().toISOString()"
            elif field_type == 'integer':
                value = str(i)
            elif field_type == 'decimal':
                value = f"{i * 10.50}"
            elif field_type == 'boolean':
                value = "true"
            else:
                value = f"'VALUE_{i}'"
            
            seeder += f"        {field_snake}: {value},\n"
        
        seeder += "      },\n"
    
    seeder += f'''    ]

    await Database.table('{table_snake}').multiInsert(data)
    
    console.log(`✓ {{data.length}} enregistrements insérés dans {table_snake}`)
  }}
}}
'''
    
    return seeder

def main():
    print("=" * 60)
    print("🚀 Génération des migrations et seeders Lucid")
    print("=" * 60)
    print()
    
    # Charger les données
    all_tables = load_tables()
    fields_by_table = load_fields()
    menus = load_menus()
    
    print()
    print(f"📋 Tables prioritaires à générer : {len(PRIORITY_TABLES)}")
    print()
    
    # Créer les dossiers si nécessaire
    MIGRATIONS_DIR.mkdir(parents=True, exist_ok=True)
    SEEDERS_DIR.mkdir(parents=True, exist_ok=True)
    
    # Générer les migrations et seeders
    migrations_count = 0
    seeders_count = 0
    
    for index, table_name in enumerate(PRIORITY_TABLES, start=1):
        if table_name not in fields_by_table:
            print(f"⚠ Table {table_name} non trouvée dans les données")
            continue
        
        fields = fields_by_table[table_name]
        
        # Générer la migration
        migration_code = generate_migration(table_name, fields, index)
        timestamp = int(datetime.now().timestamp() * 1000) + index
        migration_file = MIGRATIONS_DIR / f"{timestamp}_create_{to_snake_case(table_name)}_table.ts"
        
        with open(migration_file, 'w', encoding='utf-8') as f:
            f.write(migration_code)
        
        migrations_count += 1
        print(f"✓ Migration créée : {migration_file.name}")
        
        # Générer le seeder
        seeder_code = generate_seeder(table_name, fields, menus)
        seeder_file = SEEDERS_DIR / f"{index:02d}_{to_snake_case(table_name)}_seeder.ts"
        
        with open(seeder_file, 'w', encoding='utf-8') as f:
            f.write(seeder_code)
        
        seeders_count += 1
    
    print()
    print("=" * 60)
    print(f"✅ Génération terminée !")
    print(f"   • {migrations_count} migrations créées dans {MIGRATIONS_DIR.relative_to(BASE_DIR)}")
    print(f"   • {seeders_count} seeders créés dans {SEEDERS_DIR.relative_to(BASE_DIR)}")
    print()
    print("🔧 Prochaines étapes :")
    print("   cd playground")
    print("   node ace migration:run")
    print("   node ace db:seed")
    print("=" * 60)

if __name__ == '__main__':
    main()

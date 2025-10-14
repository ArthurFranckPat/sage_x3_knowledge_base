#!/usr/bin/env python3
"""
Génère les fichiers markdown complets par module
Combine les données CSV réelles avec les menus locaux
"""

import csv
import json
from collections import defaultdict

# Mapping des codes modules vers noms
MODULE_MAPPING = {
    'VEN': 'VENTES',
    'ACH': 'ACHATS',
    'STO': 'STOCKS',
    'FAB': 'PRODUCTION',
    'COM': 'DONNEES_BASE'
}

# Préfixes de tables par module  
MODULE_PREFIXES = {
    'VENTES': ['SORDER', 'SDELIV', 'SINVOICE', 'SQUOT', 'SRETURN'],
    'ACHATS': ['PORDER', 'PRECEI', 'PINVOICE', 'PREQ', 'PRETURN'],
    'STOCKS': ['STOCK', 'STOJOU', 'STOVAL', 'STOCOST', 'STOPAR', 'STOPHY', 'STOADC', 'STOSYNW', 'STJTMP', 'STKTRS', 'SMVT', 'CBN', 'PARMRP', 'X4PARMRP'],
    'PRODUCTION': ['MFG', 'ROUTING', 'BOM', 'WORKSTATIO', 'APS', 'MFGITM', 'MFGOPE', 'ORDERS'],
    'DONNEES_BASE': ['ITM', 'BPARTNER', 'BPC', 'BPS', 'BPA', 'FACILITY', 'GACCOUNT']
}

def load_menus():
    """Charge les menus locaux"""
    try:
        with open('../menus/menus_locaux.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return {}

def load_tables():
    """Charge la liste des tables"""
    tables = {}
    with open('../data/tables_X3.csv', 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            # Chercher la clé avec différents formats
            table_name = row.get('Code table', row.get('TABLE', '')).strip().strip('"')
            if table_name:
                title = row.get('Intitulé de la table', row.get('INTITULE', '')).strip().strip('"')
                tables[table_name] = {
                    'name': table_name,
                    'title': title,
                    'module': row.get('MODULE', '').strip()
                }
    return tables

def load_fields():
    """Charge tous les champs groupés par table"""
    fields_by_table = defaultdict(list)
    
    with open('../data/tables_champs_X3.csv', 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            # Chercher la clé avec différents formats
            table = row.get('Code table', row.get('TABLE', '')).strip()
            column = row.get('Code champ', row.get('COLONNE', '')).strip()
            if table and column:
                fields_by_table[table].append({
                    'column': column,
                    'title': row.get('Texte long', row.get('INTITULE', '')).strip(),
                    'type': row.get('TYPE', '').strip(),
                    'length': row.get('LONG', '').strip(),
                    'link': row.get('LIEN', '').strip(),
                    'menu': row.get('MENU_LOCAL', '').strip()
                })
    
    return fields_by_table

def get_module_for_table(table_name, module_prefixes):
    """Détermine le module d'une table selon son préfixe"""
    for module, prefixes in module_prefixes.items():
        for prefix in prefixes:
            if table_name.startswith(prefix):
                return module
    return None

def format_menu_ref(menu_num, menus):
    """Formate la référence à un menu local"""
    if not menu_num or menu_num == '0':
        return ''
    
    menu_num_int = int(menu_num) if menu_num.isdigit() else None
    if menu_num_int and str(menu_num_int) in menus:
        menu = menus[str(menu_num_int)]
        values_count = len(menu.get('values', {}))
        return f"[Menu {menu_num_int}](./00_MENUS_LOCAUX.md#menu-{menu_num_int}) ({values_count} valeurs)"
    return f"Menu {menu_num}"

def generate_module_file(module_name, tables_data, fields_data, menus):
    """Génère un fichier markdown complet pour un module"""
    
    filename = f"{module_name}_COMPLETE.md"
    
    with open(filename, 'w', encoding='utf-8') as f:
        # En-tête
        f.write(f"# 📦 Module {module_name} - Documentation Complète\n\n")
        f.write("[◄ Retour à l'INDEX](./INDEX.md)\n\n")
        f.write("---\n\n")
        
        # Statistiques
        f.write("## 📊 Statistiques\n\n")
        f.write(f"- **Tables documentées** : {len(tables_data)}\n")
        total_fields = sum(len(fields_data.get(t, [])) for t in tables_data.keys())
        f.write(f"- **Champs totaux** : {total_fields:,}\n")
        f.write(f"- **Source** : Données réelles de votre ERP Sage X3\n\n")
        f.write("---\n\n")
        
        # Table des matières
        f.write("## 📑 Tables du module\n\n")
        for table_name in sorted(tables_data.keys()):
            table_info = tables_data[table_name]
            field_count = len(fields_data.get(table_name, []))
            f.write(f"- [{table_name}](#{table_name.lower()}) - {table_info['title']} ({field_count} champs)\n")
        
        f.write("\n---\n\n")
        
        # Détail de chaque table
        for table_name in sorted(tables_data.keys()):
            table_info = tables_data[table_name]
            table_fields = fields_data.get(table_name, [])
            
            f.write(f"## {table_name}\n\n")
            f.write(f"**{table_info['title']}**\n\n")
            
            if not table_fields:
                f.write("*Aucun champ documenté*\n\n")
                f.write("---\n\n")
                continue
            
            # Statistiques de la table
            f.write(f"**Nombre de champs** : {len(table_fields)}\n\n")
            
            # Liste des champs
            f.write("### Champs\n\n")
            f.write("| Champ | Intitulé | Type | Long | Lien | Menu |\n")
            f.write("|-------|----------|------|------|------|------|\n")
            
            for field in table_fields:
                column = field['column']
                title = field['title'].replace('|', '\\|')
                type_val = field['type']
                length = field['length']
                link = field['link']
                menu_ref = format_menu_ref(field['menu'], menus) if field['menu'] else ''
                
                f.write(f"| `{column}` | {title} | {type_val} | {length} | {link} | {menu_ref} |\n")
            
            f.write("\n")
            
            # Exemple SQL pour les tables principales
            if len(table_fields) >= 5:  # Tables avec au moins 5 champs
                f.write("### Exemple SQL\n\n")
                f.write("```sql\n")
                # Sélectionner les 5 premiers champs
                sample_fields = table_fields[:5]
                f.write(f"SELECT\n")
                for i, field in enumerate(sample_fields):
                    comma = "," if i < len(sample_fields) - 1 else ""
                    f.write(f"    {field['column']}{comma}\n")
                f.write(f"FROM {table_name}\n")
                f.write(f"WHERE -- vos conditions\n")
                f.write("```\n\n")
            
            f.write("---\n\n")
        
        # Ressources
        f.write("## 📚 Ressources\n\n")
        f.write("- **[00_GUIDE_LLM.md](./00_GUIDE_LLM.md)** : Guide génération SQL\n")
        f.write("- **[01_GLOSSAIRE.md](./01_GLOSSAIRE.md)** : Conventions Sage X3\n")
        f.write("- **[03_RELATIONS.md](./03_RELATIONS.md)** : Relations entre tables\n")
        f.write("- **[00_MENUS_LOCAUX.md](./00_MENUS_LOCAUX.md)** : Valeurs d'enums\n")
        f.write("- **[INDEX.md](./INDEX.md)** : Navigation complète\n\n")
        
        f.write("---\n\n")
        f.write(f"*Documentation générée automatiquement depuis les données réelles de votre ERP*\n")

def main():
    print("=" * 80)
    print("🚀 GÉNÉRATION DE LA DOCUMENTATION COMPLÈTE PAR MODULE")
    print("=" * 80)
    
    # Charger les données
    print("\n📂 Chargement des données...")
    menus = load_menus()
    print(f"  ✓ {len(menus)} menus locaux chargés")
    
    tables = load_tables()
    print(f"  ✓ {len(tables)} tables chargées")
    
    fields = load_fields()
    print(f"  ✓ {sum(len(f) for f in fields.values())} champs chargés")
    
    # Regrouper les tables par module
    print("\n📦 Regroupement par module...")
    tables_by_module = defaultdict(dict)
    
    for table_name, table_info in tables.items():
        module = get_module_for_table(table_name, MODULE_PREFIXES)
        if module:
            tables_by_module[module][table_name] = table_info
    
    for module in ['VENTES', 'ACHATS', 'STOCKS', 'PRODUCTION', 'DONNEES_BASE']:
        count = len(tables_by_module[module])
        print(f"  • {module}: {count} tables")
    
    # Générer les fichiers
    print("\n📝 Génération des fichiers markdown...")
    for module in ['VENTES', 'ACHATS', 'STOCKS', 'PRODUCTION', 'DONNEES_BASE']:
        if module in tables_by_module:
            print(f"  • Génération de {module}_COMPLETE.md...", end=" ", flush=True)
            generate_module_file(module, tables_by_module[module], fields, menus)
            table_count = len(tables_by_module[module])
            field_count = sum(len(fields.get(t, [])) for t in tables_by_module[module].keys())
            print(f"✓ ({table_count} tables, {field_count} champs)")
    
    print("\n" + "=" * 80)
    print("✅ GÉNÉRATION TERMINÉE")
    print("=" * 80)
    print("\n📊 Fichiers créés:")
    for module in ['VENTES', 'ACHATS', 'STOCKS', 'PRODUCTION', 'DONNEES_BASE']:
        print(f"  • {module}_COMPLETE.md")
    print("\n🎯 Tous les champs de votre ERP sont maintenant documentés !")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Script de construction de la base de connaissance Sage X3
Combine les données CSV (ERP réel) + menus locaux (site web)
"""

import csv
import json
import time
import requests
from bs4 import BeautifulSoup
from collections import defaultdict
from typing import Dict, List, Set

BASE_URL = "https://lvexpertisex3.com/x3help/FRA/MCD"

def load_csv_data():
    """Charge les données CSV de l'ERP"""
    print("📂 Chargement des données CSV...")
    
    # Charger tables_X3.csv
    tables = {}
    with open('tables_X3.csv', 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            tables[row['Code table']] = row['Intitulé de la table']
    
    # Charger tables_champs_X3.csv
    fields = defaultdict(list)
    with open('tables_champs_X3.csv', 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            fields[row['Code table']].append({
                'code': row['Code champ'],
                'label': row['Texte long']
            })
    
    print(f"  ✅ {len(tables)} tables chargées")
    print(f"  ✅ {sum(len(f) for f in fields.values())} champs chargés")
    
    return tables, fields

def fetch_table_page(table_code: str) -> str:
    """Récupère la page HTML d'une table"""
    # Essayer différents patterns d'URL
    patterns = [
        f"TAB_{table_code}.htm",
        f"{table_code}.htm",
    ]
    
    for pattern in patterns:
        url = f"{BASE_URL}/{pattern}"
        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200 and "Page inexistante" not in response.text:
                return response.text
        except:
            pass
        time.sleep(0.1)
    
    return None

def extract_menu_locals_from_html(html: str) -> Set[int]:
    """Extrait les numéros de menus locaux depuis le HTML d'une table"""
    menus = set()
    if not html:
        return menus
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Chercher les liens vers MENxxxxx.htm
    for link in soup.find_all('a', href=True):
        href = link['href']
        if 'MEN' in href and '.htm' in href:
            # Extraire le numéro (ex: MEN00318.htm -> 318)
            try:
                menu_num = int(href.split('MEN')[1].split('.')[0])
                menus.add(menu_num)
            except:
                pass
    
    # Chercher "Menu local XXX" dans le texte
    import re
    menu_pattern = re.compile(r'Menu local (\d+)')
    for match in menu_pattern.finditer(str(soup)):
        menus.add(int(match.group(1)))
    
    return menus

def fetch_menu_local(menu_num: int) -> Dict:
    """Récupère les valeurs d'un menu local"""
    url = f"{BASE_URL}/MEN{menu_num:05d}.htm"
    
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200 and "Page inexistante" not in response.text:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Trouver la table avec les valeurs
            tables = soup.find_all('table')
            if len(tables) >= 2:
                values = {}
                rows = tables[1].find_all('tr')[1:]  # Skip header
                for row in rows:
                    cols = row.find_all('td')
                    if len(cols) >= 2:
                        try:
                            num = int(cols[0].get_text(strip=True))
                            text = cols[1].get_text(strip=True)
                            values[num] = text
                        except:
                            pass
                
                # Récupérer le titre
                title_row = tables[0].find_all('td')
                title = title_row[1].get_text(strip=True) if len(title_row) > 1 else f"Menu {menu_num}"
                
                return {
                    'menu_num': menu_num,
                    'title': title,
                    'values': values
                }
    except:
        pass
    
    return None

def discover_menus_from_tables(table_codes: List[str], max_tables: int = 50):
    """Découvre les menus locaux à partir d'un échantillon de tables"""
    print(f"\n🔍 Découverte des menus locaux depuis {max_tables} tables...")
    
    all_menus = set()
    checked = 0
    
    for table_code in table_codes[:max_tables]:
        html = fetch_table_page(table_code)
        if html:
            menus = extract_menu_locals_from_html(html)
            all_menus.update(menus)
            if menus:
                print(f"  ✓ {table_code}: {len(menus)} menus trouvés")
        
        checked += 1
        if checked % 10 == 0:
            print(f"  📊 Progression: {checked}/{max_tables} tables vérifiées, {len(all_menus)} menus uniques")
        
        time.sleep(0.2)  # Rate limiting
    
    print(f"\n  ✅ Total: {len(all_menus)} menus locaux découverts")
    return all_menus

def fetch_all_menus(menu_numbers: Set[int]) -> Dict[int, Dict]:
    """Récupère tous les menus locaux"""
    print(f"\n📥 Téléchargement de {len(menu_numbers)} menus locaux...")
    
    menus = {}
    for i, menu_num in enumerate(sorted(menu_numbers), 1):
        menu_data = fetch_menu_local(menu_num)
        if menu_data:
            menus[menu_num] = menu_data
            print(f"  ✓ Menu {menu_num}: {menu_data['title']} ({len(menu_data['values'])} valeurs)")
        else:
            print(f"  ✗ Menu {menu_num}: Non trouvé")
        
        if i % 10 == 0:
            print(f"  📊 Progression: {i}/{len(menu_numbers)}")
        
        time.sleep(0.2)
    
    print(f"\n  ✅ {len(menus)} menus récupérés avec succès")
    return menus

def save_menus_catalog(menus: Dict[int, Dict]):
    """Sauvegarde le catalogue des menus locaux"""
    print("\n💾 Sauvegarde du catalogue des menus...")
    
    # JSON pour usage programmatique
    with open('menus_locaux.json', 'w', encoding='utf-8') as f:
        json.dump(menus, f, ensure_ascii=False, indent=2)
    
    # Markdown pour consultation humaine
    with open('00_MENUS_LOCAUX.md', 'w', encoding='utf-8') as f:
        f.write("# Catalogue des Menus Locaux Sage X3\n\n")
        f.write("[◄ Retour à l'INDEX](./INDEX.md)\n\n")
        f.write("---\n\n")
        f.write(f"**{len(menus)} menus locaux** documentés pour génération de requêtes SQL.\n\n")
        f.write("Les menus locaux définissent les valeurs possibles (enum) pour certains champs.\n\n")
        f.write("---\n\n")
        f.write("## 📑 Table des matières\n\n")
        
        for menu_num in sorted(menus.keys()):
            menu = menus[menu_num]
            f.write(f"- [Menu {menu_num}](#menu-{menu_num}) - {menu['title']}\n")
        
        f.write("\n---\n\n")
        
        for menu_num in sorted(menus.keys()):
            menu = menus[menu_num]
            f.write(f"## Menu {menu_num}\n\n")
            f.write(f"**{menu['title']}**\n\n")
            f.write("| Valeur | Description |\n")
            f.write("|--------|-------------|\n")
            for val, desc in sorted(menu['values'].items()):
                f.write(f"| {val} | {desc} |\n")
            f.write("\n### Exemple SQL\n\n")
            f.write("```sql\n")
            f.write(f"-- Filtrer par valeur du menu {menu_num}\n")
            f.write(f"SELECT * FROM ma_table\n")
            first_val = list(menu['values'].keys())[0] if menu['values'] else 1
            f.write(f"WHERE mon_champ = {first_val}  -- {menu['values'].get(first_val, 'Description')}\n")
            f.write("```\n\n")
            f.write("---\n\n")
    
    print("  ✅ menus_locaux.json créé")
    print("  ✅ 00_MENUS_LOCAUX.md créé")

def main():
    print("=" * 80)
    print("🚀 CONSTRUCTION DE LA BASE DE CONNAISSANCE SAGE X3")
    print("=" * 80)
    
    # Étape 1 : Charger les données CSV
    tables, fields = load_csv_data()
    
    # Étape 2 : Identifier les tables principales pour découvrir les menus
    # Prioriser les tables avec beaucoup de champs
    sorted_tables = sorted(tables.keys(), key=lambda t: len(fields.get(t, [])), reverse=True)
    
    # Étape 3 : Découvrir les menus locaux
    discovered_menus = discover_menus_from_tables(sorted_tables, max_tables=100)
    
    # Ajouter quelques menus connus importants
    known_menus = {318, 1, 2, 3, 1000, 1001, 1002, 1003, 1004, 1005}
    all_menus = discovered_menus | known_menus
    
    # Étape 4 : Récupérer tous les menus
    menus = fetch_all_menus(all_menus)
    
    # Étape 5 : Sauvegarder
    save_menus_catalog(menus)
    
    print("\n" + "=" * 80)
    print("✅ BASE DE CONNAISSANCE CONSTRUITE AVEC SUCCÈS")
    print("=" * 80)
    print(f"\n📊 Résumé:")
    print(f"  - {len(tables)} tables")
    print(f"  - {sum(len(f) for f in fields.values())} champs")
    print(f"  - {len(menus)} menus locaux")
    print(f"\n📁 Fichiers créés:")
    print(f"  - menus_locaux.json")
    print(f"  - 00_MENUS_LOCAUX.md")

if __name__ == "__main__":
    main()

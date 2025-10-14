#!/usr/bin/env python3
"""
Script pour télécharger tous les menus locaux Sage X3
"""

import re
import json
import time
import requests
from bs4 import BeautifulSoup
from collections import defaultdict

BASE_URL = "https://lvexpertisex3.com/x3help/FRA/MCD"

# Headers pour éviter le blocage
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
}

# Modules qui nous intéressent
MODULES_TO_FETCH = [
    ("AML_5.htm", "Ventes"),
    ("AML_6.htm", "Achats"),
    ("AML_7.htm", "Stocks"),
    ("AML_8.htm", "Production"),
    ("AML_9.htm", "Données de base"),
    ("AML_1.htm", "Superviseur"),
]

def extract_menu_numbers_from_page(html):
    """Extrait les numéros de menus depuis une page HTML"""
    menu_numbers = []
    # Pattern: MEN00123.htm dans les URLs
    pattern = r'MEN(\d{5})\.htm'
    matches = re.findall(pattern, html)
    for match in matches:
        menu_numbers.append(int(match))
    return menu_numbers

def fetch_menu_local(menu_num):
    """Récupère un menu local"""
    url = f"{BASE_URL}/MEN{menu_num:05d}.htm"
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
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
    except Exception as e:
        print(f"  ⚠️  Erreur menu {menu_num}: {e}")
    
    return None

def main():
    print("=" * 80)
    print("🚀 TÉLÉCHARGEMENT DES MENUS LOCAUX SAGE X3")
    print("=" * 80)
    
    # Étape 1 : Récupérer tous les numéros de menus
    print("\n📂 Extraction des numéros de menus...")
    all_menu_numbers = set()
    
    for module_file, module_name in MODULES_TO_FETCH:
        url = f"{BASE_URL}/{module_file}"
        print(f"\n  Module: {module_name}")
        try:
            response = requests.get(url, headers=HEADERS, timeout=10)
            if response.status_code == 200:
                menu_numbers = extract_menu_numbers_from_page(response.text)
                all_menu_numbers.update(menu_numbers)
                print(f"    ✓ {len(menu_numbers)} menus trouvés")
        except Exception as e:
            print(f"    ✗ Erreur: {e}")
        time.sleep(0.2)
    
    print(f"\n  ✅ Total: {len(all_menu_numbers)} menus uniques identifiés")
    
    # Étape 2 : Télécharger tous les menus
    print(f"\n📥 Téléchargement des menus...")
    menus = {}
    menu_list = sorted(all_menu_numbers)
    
    for i, menu_num in enumerate(menu_list, 1):
        if i % 20 == 0:
            print(f"  📊 Progression: {i}/{len(menu_list)} menus traités...")
        
        menu_data = fetch_menu_local(menu_num)
        if menu_data and menu_data['values']:
            menus[menu_num] = menu_data
            print(f"  ✓ Menu {menu_num}: {menu_data['title']} ({len(menu_data['values'])} valeurs)")
        
        time.sleep(0.15)  # Rate limiting
    
    print(f"\n  ✅ {len(menus)}/{len(all_menu_numbers)} menus récupérés avec succès")
    
    # Étape 3 : Sauvegarder
    print("\n💾 Sauvegarde...")
    
    # JSON
    with open('menus_locaux.json', 'w', encoding='utf-8') as f:
        json.dump(menus, f, ensure_ascii=False, indent=2)
    
    # Markdown
    with open('4.1_MENUS_LOCAUX.md', 'w', encoding='utf-8') as f:
        f.write("# 📚 Catalogue des Menus Locaux Sage X3\n\n")
        f.write("[◄ Retour à l'INDEX](./INDEX.md)\n\n")
        f.write("---\n\n")
        f.write(f"**{len(menus)} menus locaux** documentés pour génération de requêtes SQL par LLM.\n\n")
        f.write("Les menus locaux définissent les valeurs possibles (enum) pour certains champs Sage X3.\n\n")
        f.write("---\n\n")
        f.write("## 📑 Table des matières\n\n")
        
        # Regrouper par centaine
        menu_groups = defaultdict(list)
        for menu_num in sorted(menus.keys()):
            group = (menu_num // 100) * 100
            menu_groups[group].append(menu_num)
        
        for group in sorted(menu_groups.keys()):
            f.write(f"\n### Menus {group} - {group+99}\n\n")
            for menu_num in menu_groups[group]:
                menu = menus[menu_num]
                f.write(f"- [Menu {menu_num}](#menu-{menu_num}) - {menu['title']} ({len(menu['values'])} valeurs)\n")
        
        f.write("\n---\n\n")
        
        # Détail de chaque menu
        f.write("## 📋 Détail des menus\n\n")
        
        for menu_num in sorted(menus.keys()):
            menu = menus[menu_num]
            f.write(f"### Menu {menu_num}\n\n")
            f.write(f"**{menu['title']}**\n\n")
            
            if menu['values']:
                f.write("| Valeur | Description |\n")
                f.write("|--------|-------------|\n")
                for val, desc in sorted(menu['values'].items()):
                    # Escape pipes in description
                    desc_escaped = desc.replace('|', '\\|')
                    f.write(f"| `{val}` | {desc_escaped} |\n")
                
                f.write("\n**Exemple SQL :**\n\n")
                f.write("```sql\n")
                f.write(f"-- Filtrer par valeur du menu local {menu_num}\n")
                f.write(f"SELECT * FROM ma_table\n")
                first_val = list(menu['values'].keys())[0]
                first_desc = menu['values'][first_val]
                f.write(f"WHERE mon_champ = {first_val}  -- {first_desc}\n")
                f.write("```\n\n")
            else:
                f.write("*Aucune valeur disponible*\n\n")
            
            f.write("---\n\n")
    
    print("  ✅ menus_locaux.json créé")
    print("  ✅ 4.1_MENUS_LOCAUX.md créé")
    
    print("\n" + "=" * 80)
    print("✅ TÉLÉCHARGEMENT TERMINÉ")
    print("=" * 80)
    print(f"\n📊 Résumé:")
    print(f"  - {len(all_menu_numbers)} menus identifiés")
    print(f"  - {len(menus)} menus récupérés")
    print(f"  - {sum(len(m['values']) for m in menus.values())} valeurs totales")

if __name__ == "__main__":
    main()

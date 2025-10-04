#!/usr/bin/env python3
"""
Script optimisé pour récupérer les menus locaux essentiels
Modules : Ventes, Achats, Stocks, Production, Données de base
"""

import re
import json
import time
import requests
from bs4 import BeautifulSoup
from collections import defaultdict

BASE_URL = "https://lvexpertisex3.com/x3help/FRA/MCD"

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
}

# Modules essentiels
MODULES_TO_FETCH = [
    ("AML_5.htm", "Ventes"),
    ("AML_6.htm", "Achats"),
    ("AML_7.htm", "Stocks"),
    ("AML_8.htm", "Production"),
]

def extract_menu_numbers_from_page(html):
    """Extrait les numéros de menus depuis une page HTML"""
    pattern = r'MEN(\d{5})\.htm'
    matches = re.findall(pattern, html)
    return [int(m) for m in matches]

def fetch_menu_local(menu_num):
    """Récupère un menu local"""
    url = f"{BASE_URL}/MEN{menu_num:05d}.htm"
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200 and "Page inexistante" not in response.text:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            tables = soup.find_all('table')
            if len(tables) >= 2:
                values = {}
                rows = tables[1].find_all('tr')[1:]
                for row in rows:
                    cols = row.find_all('td')
                    if len(cols) >= 2:
                        try:
                            num = int(cols[0].get_text(strip=True))
                            text = cols[1].get_text(strip=True)
                            values[num] = text
                        except:
                            pass
                
                title_row = tables[0].find_all('td')
                title = title_row[1].get_text(strip=True) if len(title_row) > 1 else f"Menu {menu_num}"
                
                return {
                    'menu_num': menu_num,
                    'title': title,
                    'values': values
                }
    except Exception as e:
        pass
    
    return None

def main():
    print("=" * 80)
    print("🚀 TÉLÉCHARGEMENT RAPIDE DES MENUS ESSENTIELS")
    print("=" * 80)
    
    # Étape 1 : Récupérer les numéros de menus des modules essentiels
    print("\n📂 Extraction des menus essentiels...")
    all_menu_numbers = set()
    
    for module_file, module_name in MODULES_TO_FETCH:
        url = f"{BASE_URL}/{module_file}"
        print(f"  • {module_name}...", end=" ", flush=True)
        try:
            response = requests.get(url, headers=HEADERS, timeout=10)
            if response.status_code == 200:
                menu_numbers = extract_menu_numbers_from_page(response.text)
                all_menu_numbers.update(menu_numbers)
                print(f"✓ {len(menu_numbers)} menus")
        except Exception as e:
            print(f"✗ Erreur")
        time.sleep(0.2)
    
    print(f"\n  ✅ Total: {len(all_menu_numbers)} menus uniques identifiés")
    
    # Étape 2 : Télécharger tous les menus
    print(f"\n📥 Téléchargement en cours...")
    menus = {}
    menu_list = sorted(all_menu_numbers)
    total = len(menu_list)
    
    for i, menu_num in enumerate(menu_list, 1):
        menu_data = fetch_menu_local(menu_num)
        if menu_data and menu_data['values']:
            menus[menu_num] = menu_data
            
        # Progress bar
        if i % 10 == 0 or i == total:
            percent = int(100 * i / total)
            bar_length = 40
            filled = int(bar_length * i / total)
            bar = '█' * filled + '░' * (bar_length - filled)
            print(f"\r  [{bar}] {percent}% ({i}/{total})", end='', flush=True)
        
        time.sleep(0.1)
    
    print(f"\n\n  ✅ {len(menus)}/{total} menus récupérés avec succès")
    
    # Étape 3 : Sauvegarder
    print("\n💾 Sauvegarde...")
    
    # JSON
    with open('menus_locaux.json', 'w', encoding='utf-8') as f:
        json.dump(menus, f, ensure_ascii=False, indent=2)
    
    # Markdown
    with open('00_MENUS_LOCAUX.md', 'w', encoding='utf-8') as f:
        f.write("# 📚 Catalogue des Menus Locaux Sage X3\n\n")
        f.write("[◄ Retour à l'INDEX](./INDEX.md)\n\n")
        f.write("---\n\n")
        f.write(f"**{len(menus)} menus locaux essentiels** pour les modules Ventes, Achats, Stocks et Production.\n\n")
        f.write("Les menus locaux définissent les valeurs possibles (enum) pour certains champs Sage X3.\n")
        f.write("Ces valeurs sont **critiques** pour qu'un LLM génère des requêtes SQL correctes.\n\n")
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
                f.write(f"- [Menu {menu_num}](#menu-{menu_num}) - {menu['title']}\n")
        
        f.write("\n---\n\n")
        f.write("## 📋 Détail des menus\n\n")
        
        for menu_num in sorted(menus.keys()):
            menu = menus[menu_num]
            f.write(f"### Menu {menu_num}\n\n")
            f.write(f"**{menu['title']}**\n\n")
            
            if menu['values']:
                f.write("| Valeur | Description |\n")
                f.write("|--------|-------------|\n")
                for val, desc in sorted(menu['values'].items()):
                    desc_escaped = desc.replace('|', '\\|')
                    f.write(f"| `{val}` | {desc_escaped} |\n")
                
                f.write("\n**Exemple SQL :**\n\n")
                f.write("```sql\n")
                f.write(f"-- Utilisation du menu local {menu_num}\n")
                first_val = list(menu['values'].keys())[0]
                first_desc = menu['values'][first_val]
                f.write(f"WHERE mon_champ = {first_val}  -- {first_desc}\n")
                f.write("```\n\n")
            
            f.write("---\n\n")
    
    print("  ✅ menus_locaux.json créé")
    print("  ✅ 00_MENUS_LOCAUX.md créé")
    
    print("\n" + "=" * 80)
    print("✅ TÉLÉCHARGEMENT TERMINÉ")
    print("=" * 80)
    print(f"\n📊 Résumé:")
    print(f"  • {len(all_menu_numbers)} menus identifiés")
    print(f"  • {len(menus)} menus récupérés ({len(menus)*100//len(all_menu_numbers)}%)")
    print(f"  • {sum(len(m['values']) for m in menus.values())} valeurs d'enums totales")
    print(f"\n🎯 Modules couverts: Ventes, Achats, Stocks, Production")

if __name__ == "__main__":
    main()

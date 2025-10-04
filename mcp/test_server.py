#!/usr/bin/env python3
"""
Script de test simple pour le serveur MCP
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from utils.csv_loader import CSVLoader
from utils.menu_loader import MenuLoader

DATA_PATH = Path(__file__).parent.parent

def test_csv_loader():
    """Test du chargeur CSV"""
    print("🧪 Test CSV Loader...")
    loader = CSVLoader(str(DATA_PATH))
    
    # Test load_tables
    tables = loader.load_tables()
    print(f"  ✅ {len(tables)} tables chargées")
    
    # Test search_tables
    results = loader.search_tables("SORDER")
    print(f"  ✅ Recherche 'SORDER': {len(results)} résultats")
    if results:
        print(f"     Exemple: {results[0]['name']} - {results[0]['title']}")
    
    # Test get_table_fields
    table_info = loader.get_table_fields("SORDER")
    if table_info:
        print(f"  ✅ Table SORDER: {table_info['field_count']} champs")
    
    print()

def test_menu_loader():
    """Test du chargeur de menus"""
    print("🧪 Test Menu Loader...")
    loader = MenuLoader(str(DATA_PATH))
    
    # Test load_menus
    menus = loader.load_menus()
    print(f"  ✅ {len(menus)} menus chargés")
    
    # Test search_menus
    results = loader.search_menus("statut")
    print(f"  ✅ Recherche 'statut': {len(results)} résultats")
    if results:
        print(f"     Exemple: Menu {results[0]['menu_num']} - {results[0]['title']}")
    
    # Test get_menu_values
    menu_info = loader.get_menu_values(415)
    if menu_info:
        print(f"  ✅ Menu 415: {len(menu_info['values'])} valeurs")
        # Afficher 3 premières valeurs
        for i, (val, desc) in enumerate(list(menu_info['values'].items())[:3]):
            print(f"     {val}: {desc}")
    
    print()

def main():
    """Point d'entrée"""
    print("=" * 60)
    print("🚀 Test du serveur MCP Sage X3")
    print("=" * 60)
    print()
    
    try:
        test_csv_loader()
        test_menu_loader()
        
        print("=" * 60)
        print("✅ Tous les tests sont passés !")
        print("=" * 60)
        print()
        print("📝 Prochaines étapes :")
        print("  1. Configurer Claude Desktop (voir README.md)")
        print("  2. Redémarrer Claude Desktop")
        print("  3. Tester les outils MCP dans Claude")
        
    except Exception as e:
        print(f"❌ Erreur: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()

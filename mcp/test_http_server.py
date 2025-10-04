#!/usr/bin/env python3
"""
Test rapide du serveur HTTP
"""
import sys
import requests
import time
from pathlib import Path

BASE_URL = "http://localhost:3000"

def test_health():
    """Test health check"""
    print("🧪 Test /health...")
    response = requests.get(f"{BASE_URL}/health")
    if response.status_code == 200:
        data = response.json()
        print(f"  ✅ Status: {data['status']}")
        print(f"  ✅ Tables: {data['tables_loaded']}")
        print(f"  ✅ Menus: {data['menus_loaded']}")
        return True
    else:
        print(f"  ❌ Erreur: {response.status_code}")
        return False

def test_tools():
    """Test liste des outils"""
    print("\n🧪 Test /tools...")
    response = requests.get(f"{BASE_URL}/tools")
    if response.status_code == 200:
        data = response.json()
        print(f"  ✅ {len(data['tools'])} outils disponibles")
        for tool in data['tools']:
            print(f"     - {tool['name']}")
        return True
    else:
        print(f"  ❌ Erreur: {response.status_code}")
        return False

def test_search_tables():
    """Test recherche tables"""
    print("\n🧪 Test /call-tool (search_tables)...")
    response = requests.post(f"{BASE_URL}/call-tool", json={
        "name": "search_tables",
        "arguments": {"query": "SORDER"}
    })
    if response.status_code == 200:
        data = response.json()
        result = data['result']
        print(f"  ✅ Résultat: {result[:100]}...")
        return True
    else:
        print(f"  ❌ Erreur: {response.status_code}")
        return False

def main():
    print("=" * 60)
    print("🚀 Test du serveur HTTP Sage X3 MCP")
    print("=" * 60)
    print()
    print("⚠️  Assurez-vous que le serveur est démarré:")
    print("   node bin/sage-x3-mcp.js server")
    print()
    
    # Attendre un peu
    print("Attente de 2 secondes...")
    time.sleep(2)
    
    try:
        # Tests
        all_passed = True
        all_passed &= test_health()
        all_passed &= test_tools()
        all_passed &= test_search_tables()
        
        print()
        print("=" * 60)
        if all_passed:
            print("✅ Tous les tests sont passés !")
        else:
            print("❌ Certains tests ont échoué")
        print("=" * 60)
        
    except requests.exceptions.ConnectionError:
        print()
        print("=" * 60)
        print("❌ Impossible de se connecter au serveur")
        print("=" * 60)
        print()
        print("Démarrez le serveur avec:")
        print("  node bin/sage-x3-mcp.js server")
        sys.exit(1)

if __name__ == "__main__":
    main()

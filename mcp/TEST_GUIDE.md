# 🧪 Guide de Test du Serveur MCP

## Vérification rapide

### 1. Vérifier que Python et les dépendances sont installés

```bash
cd /Users/arthur/Desktop/Apps/sage_x3_knowledge_base/mcp

# Vérifier Python
python3 --version

# Installer les dépendances si besoin
pip3 install -r requirements.txt
```

### 2. Tester les utilitaires directement

```bash
# Tester le chargeur CSV
python3 -c "
import sys
sys.path.insert(0, '.')
from utils.csv_loader import CSVLoader
loader = CSVLoader('..')
tables = loader.load_tables()
print(f'✅ {len(tables)} tables chargées')
print('Exemple:', list(tables.keys())[:5])
"

# Tester le chargeur de menus
python3 -c "
import sys
sys.path.insert(0, '.')
from utils.menu_loader import MenuLoader
loader = MenuLoader('..')
menus = loader.load_menus()
print(f'✅ {len(menus)} menus chargés')
print('Exemple:', list(menus.keys())[:5])
"
```

### 3. Tester le serveur MCP en mode stdio

```bash
export SAGE_DATA_PATH=/Users/arthur/Desktop/Apps/sage_x3_knowledge_base
python3 server.py
```

Le serveur attend des commandes JSON-RPC. Pour tester :

```bash
# Dans un autre terminal
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | python3 server.py
```

### 4. Tester avec Claude Desktop

**Fichier de configuration** : `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "sage-x3": {
      "command": "python3",
      "args": ["/Users/arthur/Desktop/Apps/sage_x3_knowledge_base/mcp/server.py"],
      "env": {
        "SAGE_DATA_PATH": "/Users/arthur/Desktop/Apps/sage_x3_knowledge_base"
      }
    }
  }
}
```

**Après modification :**
1. Sauvegarder le fichier
2. **Redémarrer complètement Claude Desktop** (Cmd+Q puis relancer)
3. Vérifier les logs si problème : `~/Library/Logs/Claude/mcp*.log`

### 5. Tester le serveur HTTP

```bash
export SAGE_DATA_PATH=/Users/arthur/Desktop/Apps/sage_x3_knowledge_base
python3 server_http.py --port 3000
```

Dans un autre terminal :

```bash
# Health check
curl http://localhost:3000/health

# Liste des outils
curl http://localhost:3000/tools

# Recherche de tables
curl -X POST http://localhost:3000/call-tool \
  -H "Content-Type: application/json" \
  -d '{"name":"search_tables","arguments":{"query":"MFG"}}'
```

## Résolution de problèmes courants

### Erreur "Request was aborted" dans Claude

**Causes possibles :**

1. **Le serveur MCP n'est pas démarré**
   - Vérifier que Claude Desktop a bien redémarré
   - Vérifier les logs : `tail -f ~/Library/Logs/Claude/mcp*.log`

2. **Chemin SAGE_DATA_PATH incorrect**
   ```bash
   # Vérifier que le chemin existe
   ls /Users/arthur/Desktop/Apps/sage_x3_knowledge_base/data/tables_X3.csv
   ```

3. **Dépendances Python manquantes**
   ```bash
   pip3 install mcp fastapi uvicorn sse-starlette
   ```

4. **Conflit de version Python**
   ```bash
   # Vérifier la version
   python3 --version  # Doit être >= 3.10
   ```

### Erreur "module mcp not found"

```bash
# Installer le SDK MCP
pip3 install mcp

# Vérifier l'installation
python3 -c "import mcp; print('MCP OK')"
```

### Le serveur démarre mais ne répond pas

```bash
# Vérifier que le serveur écoute
lsof -i :3000  # Pour mode HTTP

# Tester manuellement
python3 server.py <<EOF
{"jsonrpc":"2.0","method":"tools/list","id":1}
EOF
```

### Claude Desktop ne voit pas le serveur

1. **Vérifier le fichier de config** :
   ```bash
   cat ~/Library/Application\ Support/Claude/claude_desktop_config.json
   ```

2. **Vérifier les permissions** :
   ```bash
   chmod +x /Users/arthur/Desktop/Apps/sage_x3_knowledge_base/mcp/server.py
   ```

3. **Consulter les logs** :
   ```bash
   # Logs MCP
   tail -f ~/Library/Logs/Claude/mcp*.log
   
   # Logs Claude Desktop
   tail -f ~/Library/Logs/Claude/*.log
   ```

## Tests rapides sans MCP

Si le MCP ne fonctionne pas, vous pouvez interroger directement la base de connaissance :

### Lister les tables Manufacturing/Production

```bash
cd /Users/arthur/Desktop/Apps/sage_x3_knowledge_base

# Tables MFG (Manufacturing)
grep "^## MFG" modules/database/PRODUCTION_COMPLETE.md

# Tables avec "fabrication" dans le nom
grep -i "fabrication" modules/database/PRODUCTION_COMPLETE.md | head -20
```

### Chercher des menus Manufacturing

```bash
# Menus avec "fabrication" ou "production"
grep -i "fabrication\|production" menus/00_MENUS_LOCAUX.md | grep "^#" | head -20
```

## Script de diagnostic complet

Créer un fichier `diagnose.sh` :

```bash
#!/bin/bash

echo "🔍 Diagnostic du serveur MCP Sage X3"
echo "===================================="
echo ""

# 1. Python
echo "1️⃣  Python version:"
python3 --version || echo "❌ Python 3 non trouvé"
echo ""

# 2. Dépendances
echo "2️⃣  Dépendances MCP:"
python3 -c "import mcp; print('✅ mcp installé')" 2>/dev/null || echo "❌ mcp manquant"
python3 -c "import fastapi; print('✅ fastapi installé')" 2>/dev/null || echo "❌ fastapi manquant"
echo ""

# 3. Données
echo "3️⃣  Données Sage X3:"
if [ -f "../data/tables_X3.csv" ]; then
    echo "✅ tables_X3.csv trouvé"
    echo "   $(wc -l < ../data/tables_X3.csv) lignes"
else
    echo "❌ tables_X3.csv non trouvé"
fi

if [ -f "../menus/menus_locaux.json" ]; then
    echo "✅ menus_locaux.json trouvé"
else
    echo "❌ menus_locaux.json non trouvé"
fi
echo ""

# 4. Utilitaires
echo "4️⃣  Test des utilitaires:"
python3 -c "
import sys
sys.path.insert(0, '.')
from utils.csv_loader import CSVLoader
from utils.menu_loader import MenuLoader

csv_loader = CSVLoader('..')
menu_loader = MenuLoader('..')

tables = csv_loader.load_tables()
menus = menu_loader.load_menus()

print(f'✅ {len(tables)} tables chargées')
print(f'✅ {len(menus)} menus chargés')
" 2>/dev/null || echo "❌ Erreur de chargement"
echo ""

# 5. Configuration Claude Desktop
echo "5️⃣  Configuration Claude Desktop:"
CONFIG_FILE="$HOME/Library/Application Support/Claude/claude_desktop_config.json"
if [ -f "$CONFIG_FILE" ]; then
    echo "✅ Fichier de config trouvé"
    if grep -q "sage-x3" "$CONFIG_FILE"; then
        echo "✅ Serveur 'sage-x3' configuré"
    else
        echo "⚠️  Serveur 'sage-x3' non trouvé dans la config"
    fi
else
    echo "❌ Fichier de config non trouvé"
    echo "   Créer: $CONFIG_FILE"
fi
echo ""

echo "===================================="
echo "Diagnostic terminé"
```

Puis :

```bash
chmod +x diagnose.sh
./diagnose.sh
```

## Contact et Support

Si les problèmes persistent :

1. **Vérifier les logs Claude Desktop** : `~/Library/Logs/Claude/`
2. **Tester en mode HTTP** : Plus facile à débugger
3. **Utiliser directement les fichiers markdown** : Sans passer par le MCP

## Alternative : Accès direct aux données

Si le MCP ne fonctionne pas, vous pouvez consulter directement :

- **Tables Production** : `modules/database/PRODUCTION_COMPLETE.md`
- **Menus Production** : `menus/00_MENUS_LOCAUX.md` (chercher "fabrication", "production", "MFG")
- **Guide SQL** : `guides/00_GUIDE_LLM.md`

Exemple :

```bash
# Voir toutes les tables MFG
grep "^## MFG" modules/database/PRODUCTION_COMPLETE.md

# Voir un menu spécifique
grep -A 20 "### Menu 363" menus/00_MENUS_LOCAUX.md
```

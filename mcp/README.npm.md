# @arthurfranckpat/sage-x3-mcp

> 🚀 Serveur MCP (Model Context Protocol) pour base de connaissance Sage X3

Permet à Claude et autres LLM d'accéder à une base de connaissance Sage X3 complète avec 1,888 tables, 47,367 champs et 608 menus locaux.

## 📦 Installation

### Utilisation avec npx (recommandé)

```bash
# Mode stdio pour Claude Desktop
npx @arthurfranckpat/sage-x3-mcp

# Mode serveur HTTP
npx @arthurfranckpat/sage-x3-mcp server --port 3000
```

### Installation globale

```bash
npm install -g @arthurfranckpat/sage-x3-mcp

# Puis utiliser
sage-x3-mcp
sage-x3-mcp server
```

## 🚀 Utilisation

### Mode 1 : Stdio (Claude Desktop)

Pour une utilisation avec Claude Desktop en local :

**Configuration `claude_desktop_config.json` :**

```json
{
  "mcpServers": {
    "sage-x3": {
      "command": "npx",
      "args": ["@arthurfranckpat/sage-x3-mcp"],
      "env": {
        "SAGE_DATA_PATH": "/path/to/your/sage_x3_knowledge_base"
      }
    }
  }
}
```

**Localisation du fichier :**
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

### Mode 2 : Serveur HTTP/SSE

Pour un accès distant ou via un serveur web :

```bash
# Démarrer le serveur
npx @arthurfranckpat/sage-x3-mcp server --port 3000 --host 0.0.0.0

# Ou avec données personnalisées
npx @arthurfranckpat/sage-x3-mcp server --data-path /path/to/data
```

**Configuration Claude Desktop (HTTP) :**

```json
{
  "mcpServers": {
    "sage-x3": {
      "url": "http://localhost:3000/sse"
    }
  }
}
```

**Endpoints disponibles :**
- `GET /` - Informations serveur
- `GET /health` - Health check
- `GET /sse` - Server-Sent Events (MCP)
- `GET /tools` - Liste des outils
- `GET /resources` - Liste des ressources
- `POST /call-tool` - Exécuter un outil

## 🛠️ Outils MCP

### 1. `search_tables`
Recherche des tables par nom ou mot-clé

```typescript
{
  "name": "search_tables",
  "arguments": {
    "query": "SORDER"
  }
}
```

### 2. `get_table_details`
Obtient tous les champs d'une table

```typescript
{
  "name": "get_table_details",
  "arguments": {
    "table_name": "SORDER"
  }
}
```

### 3. `search_menus`
Recherche des menus locaux (enums)

```typescript
{
  "name": "search_menus",
  "arguments": {
    "query": "statut"
  }
}
```

### 4. `get_menu_values`
Obtient les valeurs d'un menu local

```typescript
{
  "name": "get_menu_values",
  "arguments": {
    "menu_number": 415
  }
}
```

### 5. `validate_sql_conventions`
Vérifie qu'une requête SQL respecte les conventions Sage X3

### 6. `get_table_relations`
Trouve les relations d'une table avec d'autres tables

## 📚 Ressources disponibles

- `guide://00_GUIDE_LLM` - Guide de génération SQL
- `guide://01_GLOSSAIRE` - Conventions Sage X3
- `guide://03_RELATIONS` - Relations entre tables

## ⚙️ Configuration

### Variables d'environnement

- `SAGE_DATA_PATH` : Chemin vers les données Sage X3 (requis)

### Options CLI

```bash
sage-x3-mcp [mode] [options]

Modes:
  stdio         Mode stdio pour Claude Desktop (défaut)
  server        Mode serveur HTTP/SSE

Options:
  --port        Port du serveur HTTP (défaut: 3000)
  --host        Host du serveur (défaut: 0.0.0.0)
  --data-path   Chemin vers les données
  --help, -h    Affiche l'aide
```

## 📊 Données accessibles

- **1,888 tables** de votre ERP Sage X3
- **47,367 champs** avec types et descriptions
- **608 menus locaux** avec 3,127 valeurs d'enums
- **Guides complets** pour génération SQL

## 🧪 Test

```bash
# Tester le serveur HTTP
npm test

# Ou manuellement
curl http://localhost:3000/health
```

## 📖 Exemples

### Rechercher des tables

```bash
# Avec curl
curl -X POST http://localhost:3000/call-tool \
  -H "Content-Type: application/json" \
  -d '{"name":"search_tables","arguments":{"query":"SORDER"}}'
```

### Obtenir détails d'une table

```bash
curl -X POST http://localhost:3000/call-tool \
  -H "Content-Type: application/json" \
  -d '{"name":"get_table_details","arguments":{"table_name":"SORDER"}}'
```

## 🔧 Dépendances

**Python :**
- Python 3.10+
- mcp >= 0.9.0
- fastapi >= 0.104.0 (mode serveur)
- uvicorn >= 0.24.0 (mode serveur)
- sse-starlette >= 1.8.0 (mode serveur)

**Node.js :**
- Node.js 16+

## 🐛 Dépannage

### Erreur "SAGE_DATA_PATH non trouvé"

Assurez-vous de définir la variable d'environnement :

```bash
export SAGE_DATA_PATH=/chemin/vers/sage_x3_knowledge_base
```

### Erreur "Python dependencies not installed"

```bash
cd node_modules/@arthurfranckpat/sage-x3-mcp
pip install -r requirements.txt
```

### Le serveur ne démarre pas

Vérifiez que Python 3 est installé :

```bash
python3 --version
```

## 📄 License

MIT

## 🔗 Liens

- [Documentation complète](https://github.com/arthurfranckpat/sage-x3-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Issues](https://github.com/arthurfranckpat/sage-x3-mcp/issues)

## 👤 Auteur

Arthur Franck-Pat

---

**Note :** Ce package nécessite des données Sage X3 pour fonctionner. Consultez la documentation pour créer votre base de connaissance.

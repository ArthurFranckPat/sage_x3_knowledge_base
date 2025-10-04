# 🚀 Serveur MCP pour Base de Connaissance Sage X3

[![npm version](https://badge.fury.io/js/@arthurfranckpat%2Fsage-x3-mcp.svg)](https://www.npmjs.com/package/@arthurfranckpat/sage-x3-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Serveur [Model Context Protocol (MCP)](https://modelcontextprotocol.io) permettant à Claude et autres LLM d'accéder à une base de connaissance Sage X3 complète.

## 📦 Installation rapide

```bash
# Avec npx (recommandé)
npx @arthurfranckpat/sage-x3-mcp

# Ou installation globale
npm install -g @arthurfranckpat/sage-x3-mcp
```

## 📋 Fonctionnalités

### 🛠️ Outils (Tools)

1. **`search_tables`** - Recherche tables par nom ou mot-clé
2. **`get_table_details`** - Obtient tous les champs d'une table
3. **`search_menus`** - Recherche menus locaux (enums)
4. **`get_menu_values`** - Obtient valeurs d'un menu local
5. **`validate_sql_conventions`** - Vérifie conventions Sage X3
6. **`get_table_relations`** - Trouve relations entre tables

### 📚 Ressources (Resources)

- **`guide://00_GUIDE_LLM`** - Guide génération SQL
- **`guide://01_GLOSSAIRE`** - Conventions Sage X3
- **`guide://03_RELATIONS`** - Relations entre tables

## 🔧 Installation

### Prérequis

- Python 3.10+
- pip

### Installation des dépendances

```bash
cd mcp
pip install -r requirements.txt
```

Ou avec uv (plus rapide) :

```bash
cd mcp
uv pip install -r requirements.txt
```

## ⚙️ Configuration

### Pour Claude Desktop

Éditer le fichier de configuration :

**macOS** : `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows** : `%APPDATA%\Claude\claude_desktop_config.json`

Ajouter :

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

**Important** : Remplacer le chemin SAGE_DATA_PATH par votre chemin absolu réel.

### Pour autres clients MCP

Le serveur utilise stdio pour la communication. Exemple avec le SDK MCP :

```python
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

server_params = StdioServerParameters(
    command="python3",
    args=["/chemin/vers/mcp/server.py"],
    env={"SAGE_DATA_PATH": "/chemin/vers/sage_x3_knowledge_base"}
)

async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        await session.initialize()
        # Utiliser le serveur
```

## 🎯 Utilisation

### Depuis Claude Desktop

Une fois configuré, les outils apparaissent automatiquement dans Claude :

```
User: Donne-moi les champs de la table SORDER

Claude utilise automatiquement get_table_details("SORDER")
→ Retourne 202 champs avec descriptions
```

### Exemples de requêtes

#### Rechercher des tables

```
"Quelles sont les tables liées aux commandes de vente ?"
→ Utilise search_tables("commande vente")
```

#### Obtenir détails d'une table

```
"Montre-moi tous les champs de STOCK"
→ Utilise get_table_details("STOCK")
```

#### Chercher des menus locaux

```
"Quelles sont les valeurs possibles pour le statut de commande ?"
→ Utilise search_menus("statut") puis get_menu_values(415)
```

#### Valider du SQL

```sql
"Vérifie cette requête : SELECT ITMREF FROM STOCK WHERE QTYSTU > 0"
→ Utilise validate_sql_conventions()
→ Avertit des suffixes manquants (_0)
```

## 🧪 Test manuel

Tester le serveur directement :

```bash
cd mcp
export SAGE_DATA_PATH=/path/to/your/sage_x3_knowledge_base
python3 server.py
```

Le serveur attend des commandes JSON-RPC sur stdin. Pour tester :

```bash
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | python3 server.py
```

## 📊 Données accessibles

- **1,888 tables** de votre ERP réel
- **47,367 champs** avec types et descriptions
- **608 menus locaux** avec 3,127 valeurs d'enums
- **Guides complets** (SQL, Glossaire, Relations)

## 🔍 Architecture

```
mcp/
├── server.py              # Serveur MCP principal
├── utils/                 # Utilitaires
│   ├── csv_loader.py     # Chargement CSV avec cache
│   └── menu_loader.py    # Chargement menus avec cache
├── tools/                 # (réservé pour extensions futures)
├── resources/             # (réservé pour extensions futures)
└── requirements.txt       # Dépendances
```

## 🚀 Performance

- **Cache en mémoire** : CSV chargés une seule fois
- **Recherche rapide** : Index en mémoire
- **Léger** : Aucune base de données nécessaire
- **Réponse < 100ms** pour la plupart des requêtes

## 🐛 Dépannage

### Le serveur ne démarre pas

```bash
# Vérifier Python
python3 --version  # Doit être >= 3.10

# Vérifier les dépendances
pip list | grep mcp

# Vérifier les chemins (remplacer par votre chemin)
ls /path/to/your/sage_x3_knowledge_base/data/tables_X3.csv
```

### Erreur "module mcp not found"

```bash
pip install mcp
# ou
uv pip install mcp
```

### Claude ne voit pas le serveur

1. Vérifier le chemin dans `claude_desktop_config.json`
2. Redémarrer Claude Desktop
3. Vérifier les logs : `~/Library/Logs/Claude/mcp*.log`

## 🌐 Modes disponibles

### Mode Stdio (Local)
Pour Claude Desktop en local via stdio.

### Mode HTTP/SSE (Distant)
Pour accès via serveur web ou à distance.

```bash
npx @arthurfranckpat/sage-x3-mcp server --port 3000
```

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour plus de détails.

## 📝 Notes

- Supporte **stdio** ET **HTTP/SSE**
- Les CSV sont en **latin-1** (encodage Sage X3)
- Les suffixes `_0`, `_1` sont **obligatoires** en Sage X3
- Consultez les guides intégrés pour les conventions

## 📚 Documentation

- [Guide de déploiement](./DEPLOYMENT.md)
- [README npm](./README.npm.md)
- [Exemple de configuration](./claude_desktop_config.example.json)

## 🔗 Ressources

- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Claude Desktop](https://claude.ai/download)
- [npm package](https://www.npmjs.com/package/@arthurfranckpat/sage-x3-mcp)

## 📄 License

MIT - voir [LICENSE](./LICENSE)

---

*Serveur MCP pour Sage X3 Knowledge Base - Version 1.0.0*

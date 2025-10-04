#!/usr/bin/env python3
"""
Serveur MCP pour la base de connaissance Sage X3
Fournit des outils pour rechercher tables, champs et menus locaux
"""
import os
import sys
from pathlib import Path
from typing import Any

# Ajouter le chemin parent pour importer les utils
sys.path.insert(0, str(Path(__file__).parent))

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent, ImageContent, EmbeddedResource

from utils.csv_loader import CSVLoader
from utils.menu_loader import MenuLoader


# Chemin vers les données
DATA_PATH = os.environ.get('SAGE_DATA_PATH', str(Path(__file__).parent.parent))

# Initialisation des loaders
csv_loader = CSVLoader(DATA_PATH)
menu_loader = MenuLoader(DATA_PATH)

# Créer le serveur MCP
app = Server("sage-x3-knowledge-base")


@app.list_tools()
async def list_tools() -> list[Tool]:
    """Liste tous les outils disponibles"""
    return [
        Tool(
            name="search_tables",
            description="Recherche des tables Sage X3 par nom ou mot-clé. Retourne une liste de tables avec leur nom et description.",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Terme de recherche (nom de table, mot-clé)"
                    }
                },
                "required": ["query"]
            }
        ),
        Tool(
            name="get_table_details",
            description="Obtient tous les champs d'une table Sage X3 avec types, descriptions et liens vers menus locaux.",
            inputSchema={
                "type": "object",
                "properties": {
                    "table_name": {
                        "type": "string",
                        "description": "Nom de la table (ex: SORDER, STOCK, ITMMASTER)"
                    }
                },
                "required": ["table_name"]
            }
        ),
        Tool(
            name="search_menus",
            description="Recherche des menus locaux (enums) par numéro ou description. Les menus définissent les valeurs possibles pour certains champs.",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Numéro de menu ou mot-clé dans le titre"
                    }
                },
                "required": ["query"]
            }
        ),
        Tool(
            name="get_menu_values",
            description="Obtient toutes les valeurs d'un menu local (enum) avec leurs descriptions.",
            inputSchema={
                "type": "object",
                "properties": {
                    "menu_number": {
                        "type": "integer",
                        "description": "Numéro du menu local (ex: 415, 318)"
                    }
                },
                "required": ["menu_number"]
            }
        ),
        Tool(
            name="validate_sql_conventions",
            description="Vérifie qu'une requête SQL respecte les conventions Sage X3 (suffixes _0, _1, etc.)",
            inputSchema={
                "type": "object",
                "properties": {
                    "sql_query": {
                        "type": "string",
                        "description": "Requête SQL à valider"
                    }
                },
                "required": ["sql_query"]
            }
        ),
        Tool(
            name="get_table_relations",
            description="Trouve les relations d'une table avec d'autres tables (clés étrangères, tables liées).",
            inputSchema={
                "type": "object",
                "properties": {
                    "table_name": {
                        "type": "string",
                        "description": "Nom de la table"
                    }
                },
                "required": ["table_name"]
            }
        )
    ]


@app.call_tool()
async def call_tool(name: str, arguments: Any) -> list[TextContent]:
    """Exécute un outil"""
    
    if name == "search_tables":
        query = arguments.get("query", "")
        results = csv_loader.search_tables(query)
        
        if not results:
            return [TextContent(type="text", text=f"Aucune table trouvée pour '{query}'")]
        
        # Formater les résultats
        output = f"**{len(results)} tables trouvées pour '{query}':**\n\n"
        for r in results:
            output += f"- **{r['name']}** : {r['title']}\n"
        
        return [TextContent(type="text", text=output)]
    
    elif name == "get_table_details":
        table_name = arguments.get("table_name", "").upper()
        table_info = csv_loader.get_table_fields(table_name)
        
        if not table_info:
            return [TextContent(type="text", text=f"Table '{table_name}' non trouvée")]
        
        # Formater les détails
        output = f"# Table {table_info['name']}\n\n"
        output += f"**{table_info['title']}**\n\n"
        output += f"**Nombre de champs :** {table_info['field_count']}\n\n"
        output += "## Champs\n\n"
        output += "| Champ | Description | Type | Menu |\n"
        output += "|-------|-------------|------|------|\n"
        
        for field in table_info['fields'][:100]:  # Limiter à 100 premiers champs
            menu_ref = f"Menu {field['menu']}" if field['menu'] and field['menu'] != '0' else ""
            output += f"| `{field['column']}` | {field['title']} | {field['type']} | {menu_ref} |\n"
        
        if table_info['field_count'] > 100:
            output += f"\n*...et {table_info['field_count'] - 100} autres champs*\n"
        
        return [TextContent(type="text", text=output)]
    
    elif name == "search_menus":
        query = arguments.get("query", "")
        results = menu_loader.search_menus(query)
        
        if not results:
            return [TextContent(type="text", text=f"Aucun menu trouvé pour '{query}'")]
        
        output = f"**{len(results)} menus trouvés pour '{query}':**\n\n"
        for r in results:
            output += f"- **Menu {r['menu_num']}** : {r['title']} ({r['value_count']} valeurs)\n"
        
        return [TextContent(type="text", text=output)]
    
    elif name == "get_menu_values":
        menu_number = arguments.get("menu_number")
        menu_info = menu_loader.get_menu_values(menu_number)
        
        if not menu_info:
            return [TextContent(type="text", text=f"Menu {menu_number} non trouvé")]
        
        output = f"# Menu {menu_info['menu_num']}\n\n"
        output += f"**{menu_info['title']}**\n\n"
        output += "| Valeur | Description |\n"
        output += "|--------|-------------|\n"
        
        for val, desc in sorted(menu_info['values'].items(), key=lambda x: int(x[0]) if x[0].isdigit() else 0):
            output += f"| `{val}` | {desc} |\n"
        
        return [TextContent(type="text", text=output)]
    
    elif name == "validate_sql_conventions":
        sql_query = arguments.get("sql_query", "")
        warnings = []
        
        # Vérifier les suffixes manquants
        import re
        # Rechercher des mots qui ressemblent à des champs sans suffixe
        potential_fields = re.findall(r'\b([A-Z]{3,})\b', sql_query)
        for field in potential_fields:
            if not re.search(rf'{field}_\d+', sql_query):
                warnings.append(f"⚠️ '{field}' devrait probablement avoir un suffixe (_0, _1, etc.)")
        
        if not warnings:
            output = "✅ La requête semble respecter les conventions Sage X3 de base.\n\n"
            output += "**Rappels :**\n"
            output += "- Tous les champs doivent avoir un suffixe (_0, _1, _2...)\n"
            output += "- Vérifiez les valeurs d'enums dans les menus locaux\n"
            output += "- Utilisez les bonnes clés pour les jointures"
        else:
            output = "**Avertissements détectés :**\n\n"
            for w in warnings[:10]:
                output += f"{w}\n"
        
        return [TextContent(type="text", text=output)]
    
    elif name == "get_table_relations":
        table_name = arguments.get("table_name", "").upper()
        table_info = csv_loader.get_table_fields(table_name)
        
        if not table_info:
            return [TextContent(type="text", text=f"Table '{table_name}' non trouvée")]
        
        # Analyser les champs pour trouver les relations
        relations = []
        for field in table_info['fields']:
            if field['link']:
                relations.append({
                    'field': field['column'],
                    'links_to': field['link']
                })
        
        if not relations:
            output = f"Aucune relation explicite trouvée pour la table {table_name}.\n\n"
            output += "Consultez guides/03_RELATIONS.md pour les relations courantes."
        else:
            output = f"**Relations de la table {table_name} :**\n\n"
            for r in relations:
                output += f"- `{r['field']}` → {r['links_to']}\n"
        
        return [TextContent(type="text", text=output)]
    
    else:
        return [TextContent(type="text", text=f"Outil '{name}' non reconnu")]


@app.list_resources()
async def list_resources() -> list[EmbeddedResource]:
    """Liste les ressources disponibles"""
    guides_path = Path(DATA_PATH) / "guides"
    
    resources = []
    
    # Ajouter les guides
    for guide_file in guides_path.glob("*.md"):
        uri = f"guide://{guide_file.stem}"
        resources.append(EmbeddedResource(
            uri=uri,
            name=f"Guide: {guide_file.stem}",
            description=f"Guide {guide_file.stem.replace('_', ' ')}",
            mimeType="text/markdown"
        ))
    
    return resources


@app.read_resource()
async def read_resource(uri: str) -> str:
    """Lit une ressource"""
    if uri.startswith("guide://"):
        guide_name = uri.replace("guide://", "")
        guide_path = Path(DATA_PATH) / "guides" / f"{guide_name}.md"
        
        if guide_path.exists():
            return guide_path.read_text(encoding='utf-8')
        else:
            return f"Guide {guide_name} non trouvé"
    
    return "Ressource non trouvée"


async def main():
    """Point d'entrée principal"""
    async with stdio_server() as (read_stream, write_stream):
        await app.run(read_stream, write_stream, app.create_initialization_options())


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())

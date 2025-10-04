#!/usr/bin/env python3
"""
Serveur MCP HTTP/SSE pour la base de connaissance Sage X3
Permet l'accès à distance via Server-Sent Events
"""
import os
import sys
import json
import asyncio
import argparse
from pathlib import Path
from typing import Dict, Any

# Ajouter le chemin parent pour importer les utils
sys.path.insert(0, str(Path(__file__).parent))

try:
    from fastapi import FastAPI, Request
    from fastapi.responses import StreamingResponse, JSONResponse
    from fastapi.middleware.cors import CORSMiddleware
    import uvicorn
    from sse_starlette.sse import EventSourceResponse
except ImportError:
    print("❌ Erreur: Dépendances manquantes")
    print("Installez les dépendances:")
    print("  pip install fastapi uvicorn sse-starlette")
    sys.exit(1)

from utils.csv_loader import CSVLoader
from utils.menu_loader import MenuLoader

# Configuration
DATA_PATH = os.environ.get('SAGE_DATA_PATH', str(Path(__file__).parent.parent))

# Initialisation des loaders
csv_loader = CSVLoader(DATA_PATH)
menu_loader = MenuLoader(DATA_PATH)

# Créer l'application FastAPI
app = FastAPI(
    title="Sage X3 MCP Server",
    description="API MCP pour accéder à la base de connaissance Sage X3",
    version="1.0.0"
)

# CORS pour permettre l'accès depuis n'importe où
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À restreindre en production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Page d'accueil"""
    return {
        "name": "Sage X3 MCP Server",
        "version": "1.0.0",
        "endpoints": {
            "sse": "/sse",
            "health": "/health",
            "tools": "/tools",
            "resources": "/resources"
        },
        "data": {
            "tables": len(csv_loader.load_tables()),
            "fields": sum(len(fields) for fields in csv_loader.load_fields().values()),
            "menus": len(menu_loader.load_menus())
        }
    }


@app.get("/health")
async def health():
    """Health check"""
    try:
        tables = csv_loader.load_tables()
        menus = menu_loader.load_menus()
        
        return {
            "status": "healthy",
            "data_path": DATA_PATH,
            "tables_loaded": len(tables),
            "menus_loaded": len(menus)
        }
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"status": "unhealthy", "error": str(e)}
        )


@app.get("/tools")
async def list_tools():
    """Liste les outils MCP disponibles"""
    return {
        "tools": [
            {
                "name": "search_tables",
                "description": "Recherche des tables par nom ou mot-clé",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Terme de recherche"}
                    },
                    "required": ["query"]
                }
            },
            {
                "name": "get_table_details",
                "description": "Obtient tous les champs d'une table",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "table_name": {"type": "string", "description": "Nom de la table"}
                    },
                    "required": ["table_name"]
                }
            },
            {
                "name": "search_menus",
                "description": "Recherche des menus locaux",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Terme de recherche"}
                    },
                    "required": ["query"]
                }
            },
            {
                "name": "get_menu_values",
                "description": "Obtient les valeurs d'un menu local",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "menu_number": {"type": "integer", "description": "Numéro du menu"}
                    },
                    "required": ["menu_number"]
                }
            }
        ]
    }


@app.get("/resources")
async def list_resources():
    """Liste les ressources disponibles"""
    guides_path = Path(DATA_PATH) / "guides"
    resources = []
    
    for guide_file in guides_path.glob("*.md"):
        resources.append({
            "uri": f"guide://{guide_file.stem}",
            "name": f"Guide: {guide_file.stem}",
            "mimeType": "text/markdown"
        })
    
    return {"resources": resources}


@app.post("/call-tool")
async def call_tool(request: Request):
    """Exécute un outil MCP"""
    body = await request.json()
    tool_name = body.get("name")
    arguments = body.get("arguments", {})
    
    result = await execute_tool(tool_name, arguments)
    return {"result": result}


async def execute_tool(name: str, arguments: Dict[str, Any]) -> str:
    """Exécute un outil et retourne le résultat"""
    
    if name == "search_tables":
        query = arguments.get("query", "")
        results = csv_loader.search_tables(query)
        
        if not results:
            return f"Aucune table trouvée pour '{query}'"
        
        output = f"**{len(results)} tables trouvées pour '{query}':**\n\n"
        for r in results:
            output += f"- **{r['name']}** : {r['title']}\n"
        
        return output
    
    elif name == "get_table_details":
        table_name = arguments.get("table_name", "").upper()
        table_info = csv_loader.get_table_fields(table_name)
        
        if not table_info:
            return f"Table '{table_name}' non trouvée"
        
        output = f"# Table {table_info['name']}\n\n"
        output += f"**{table_info['title']}**\n\n"
        output += f"**Nombre de champs :** {table_info['field_count']}\n\n"
        output += "## Champs\n\n"
        output += "| Champ | Description | Type | Menu |\n"
        output += "|-------|-------------|------|------|\n"
        
        for field in table_info['fields'][:100]:
            menu_ref = f"Menu {field['menu']}" if field['menu'] and field['menu'] != '0' else ""
            output += f"| `{field['column']}` | {field['title']} | {field['type']} | {menu_ref} |\n"
        
        if table_info['field_count'] > 100:
            output += f"\n*...et {table_info['field_count'] - 100} autres champs*\n"
        
        return output
    
    elif name == "search_menus":
        query = arguments.get("query", "")
        results = menu_loader.search_menus(query)
        
        if not results:
            return f"Aucun menu trouvé pour '{query}'"
        
        output = f"**{len(results)} menus trouvés pour '{query}':**\n\n"
        for r in results:
            output += f"- **Menu {r['menu_num']}** : {r['title']} ({r['value_count']} valeurs)\n"
        
        return output
    
    elif name == "get_menu_values":
        menu_number = arguments.get("menu_number")
        menu_info = menu_loader.get_menu_values(menu_number)
        
        if not menu_info:
            return f"Menu {menu_number} non trouvé"
        
        output = f"# Menu {menu_info['menu_num']}\n\n"
        output += f"**{menu_info['title']}**\n\n"
        output += "| Valeur | Description |\n"
        output += "|--------|-------------|\n"
        
        for val, desc in sorted(menu_info['values'].items()):
            output += f"| `{val}` | {desc} |\n"
        
        return output
    
    else:
        return f"Outil '{name}' non reconnu"


@app.get("/sse")
async def sse_endpoint(request: Request):
    """
    Endpoint SSE pour le protocole MCP
    Compatible avec Claude Desktop et autres clients MCP
    """
    async def event_generator():
        # Message de bienvenue
        yield {
            "event": "message",
            "data": json.dumps({
                "type": "server_info",
                "name": "sage-x3-mcp",
                "version": "1.0.0"
            })
        }
        
        # Garder la connexion ouverte
        while True:
            if await request.is_disconnected():
                break
            
            # Heartbeat toutes les 30 secondes
            yield {
                "event": "ping",
                "data": json.dumps({"timestamp": asyncio.get_event_loop().time()})
            }
            
            await asyncio.sleep(30)
    
    return EventSourceResponse(event_generator())


def main():
    """Point d'entrée principal"""
    parser = argparse.ArgumentParser(description="Sage X3 MCP HTTP Server")
    parser.add_argument("--host", default="0.0.0.0", help="Host à écouter")
    parser.add_argument("--port", type=int, default=3000, help="Port à écouter")
    parser.add_argument("--reload", action="store_true", help="Auto-reload en développement")
    
    args = parser.parse_args()
    
    print(f"📂 Données: {DATA_PATH}")
    print(f"📊 Tables chargées: {len(csv_loader.load_tables())}")
    print(f"📋 Menus chargés: {len(menu_loader.load_menus())}")
    print("")
    
    uvicorn.run(
        "server_http:app",
        host=args.host,
        port=args.port,
        reload=args.reload,
        log_level="info"
    )


if __name__ == "__main__":
    main()

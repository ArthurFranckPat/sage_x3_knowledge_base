#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Déterminer le chemin vers les scripts Python
const isDev = fs.existsSync(path.join(__dirname, '..', 'server.py'));
const pythonDir = isDev ? path.join(__dirname, '..') : __dirname;

// Arguments
const args = process.argv.slice(2);
const mode = args[0] || 'stdio';

// Configuration
const config = {
  port: 3000,
  host: '0.0.0.0',
  dataPath: process.env.SAGE_DATA_PATH || process.cwd()
};

// Parser les arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--port' && args[i + 1]) {
    config.port = parseInt(args[i + 1]);
    i++;
  } else if (args[i] === '--host' && args[i + 1]) {
    config.host = args[i + 1];
    i++;
  } else if (args[i] === '--data-path' && args[i + 1]) {
    config.dataPath = args[i + 1];
    i++;
  } else if (args[i] === '--help' || args[i] === '-h') {
    showHelp();
    process.exit(0);
  }
}

function showHelp() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║   🚀 Sage X3 MCP Server                                     ║
╚══════════════════════════════════════════════════════════════╝

Usage:
  sage-x3-mcp [mode] [options]

Modes:
  stdio         Mode stdio pour Claude Desktop (défaut)
  server        Mode serveur HTTP/SSE
  
Options:
  --port        Port du serveur HTTP (défaut: 3000)
  --host        Host du serveur (défaut: 0.0.0.0)
  --data-path   Chemin vers les données Sage X3
  --help, -h    Affiche cette aide

Exemples:
  sage-x3-mcp                           # Mode stdio
  sage-x3-mcp server --port 3000        # Serveur HTTP
  sage-x3-mcp server --data-path /path/to/data

Configuration Claude Desktop (stdio):
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

Configuration Claude Desktop (HTTP):
  {
    "mcpServers": {
      "sage-x3": {
        "url": "http://localhost:3000/sse"
      }
    }
  }

Variables d'environnement:
  SAGE_DATA_PATH    Chemin vers les données (requis)

Documentation: https://github.com/arthurfranckpat/sage-x3-mcp
  `);
}

// Lancer le serveur approprié
let pythonScript;
let pythonArgs = [];
let env = { ...process.env, SAGE_DATA_PATH: config.dataPath };

if (mode === 'server' || mode === 'serve') {
  pythonScript = path.join(pythonDir, 'server_http.py');
  pythonArgs = ['--port', config.port.toString(), '--host', config.host];
  
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║   🚀 Sage X3 MCP Server - Mode HTTP/SSE                    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`📡 Serveur démarré sur http://${config.host}:${config.port}`);
  console.log(`📂 Données: ${config.dataPath}`);
  console.log('');
  console.log('Endpoints:');
  console.log(`  • SSE:    http://localhost:${config.port}/sse`);
  console.log(`  • Health: http://localhost:${config.port}/health`);
  console.log(`  • Docs:   http://localhost:${config.port}/docs`);
  console.log('');
  console.log('Appuyez sur Ctrl+C pour arrêter');
  console.log('');
} else {
  pythonScript = path.join(pythonDir, 'server.py');
  
  // Mode stdio - pas de sortie console pour ne pas polluer MCP
}

// Vérifier que le script Python existe
if (!fs.existsSync(pythonScript)) {
  console.error(`❌ Erreur: Script Python non trouvé: ${pythonScript}`);
  console.error(`Répertoire Python: ${pythonDir}`);
  process.exit(1);
}

// Vérifier que SAGE_DATA_PATH existe
if (!fs.existsSync(config.dataPath)) {
  console.error(`❌ Erreur: SAGE_DATA_PATH non trouvé: ${config.dataPath}`);
  console.error('Définissez la variable d\'environnement SAGE_DATA_PATH');
  process.exit(1);
}

// Lancer le processus Python
const python = spawn('python3', [pythonScript, ...pythonArgs], {
  stdio: 'inherit',
  env: env
});

python.on('error', (err) => {
  console.error('❌ Erreur lors du démarrage du serveur:', err.message);
  console.error('Assurez-vous que Python 3 est installé et que les dépendances sont installées:');
  console.error('  pip install -r requirements.txt');
  process.exit(1);
});

python.on('close', (code) => {
  if (code !== 0 && code !== null) {
    console.error(`❌ Le serveur s'est arrêté avec le code: ${code}`);
    process.exit(code);
  }
});

// Gérer les signaux d'arrêt
process.on('SIGINT', () => {
  console.log('\n👋 Arrêt du serveur...');
  python.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  python.kill('SIGTERM');
  process.exit(0);
});

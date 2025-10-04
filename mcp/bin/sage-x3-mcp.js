#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Déterminer le chemin vers les scripts Python
const isDev = fs.existsSync(path.join(__dirname, '..', 'server.py'));
const pythonDir = isDev ? path.join(__dirname, '..') : __dirname;

// Chemin par défaut pour les données (dans le home de l'utilisateur)
const DEFAULT_DATA_DIR = path.join(os.homedir(), '.sage-x3-data');
const GITHUB_REPO = 'https://github.com/arthurfranckpat/sage-x3-knowledge-base.git';

// Arguments
const args = process.argv.slice(2);
const mode = args[0] || 'stdio';

// Configuration
const config = {
  port: 3000,
  host: '0.0.0.0',
  dataPath: process.env.SAGE_DATA_PATH || DEFAULT_DATA_DIR,
  autoUpdate: false
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
  } else if (args[i] === '--update') {
    config.autoUpdate = true;
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
  --data-path   Chemin personnalisé vers les données
  --update      Mettre à jour les données depuis GitHub
  --help, -h    Affiche cette aide

Exemples:
  sage-x3-mcp                           # Mode stdio (télécharge auto les données)
  sage-x3-mcp --update                  # Mettre à jour les données
  sage-x3-mcp server --port 3000        # Serveur HTTP
  sage-x3-mcp --data-path /my/path      # Utiliser un chemin personnalisé

Configuration Claude Desktop (stdio):
  {
    "mcpServers": {
      "sage-x3": {
        "command": "npx",
        "args": ["@arthurfranckpat/sage-x3-mcp"]
      }
    }
  }
  
  Note: Les données sont téléchargées automatiquement depuis GitHub
        dans ~/.sage-x3-data/ au premier lancement

Configuration Claude Desktop (HTTP):
  {
    "mcpServers": {
      "sage-x3": {
        "url": "http://localhost:3000/sse"
      }
    }
  }

Variables d'environnement (optionnelles):
  SAGE_DATA_PATH    Chemin personnalisé vers les données
                    (par défaut: ~/.sage-x3-data/)

Données:
  Les données sont clonées automatiquement depuis:
  https://github.com/arthurfranckpat/sage-x3-knowledge-base

Documentation: https://github.com/arthurfranckpat/sage-x3-mcp
  `);
}

function ensureDataExists() {
  // Si l'utilisateur a spécifié un chemin personnalisé et qu'il existe, l'utiliser
  if (process.env.SAGE_DATA_PATH && fs.existsSync(process.env.SAGE_DATA_PATH)) {
    console.log('📂 Utilisation du chemin personnalisé:', process.env.SAGE_DATA_PATH);
    return process.env.SAGE_DATA_PATH;
  }

  // Sinon, gérer le téléchargement automatique
  const dataDir = DEFAULT_DATA_DIR;

  // Vérifier si les données existent déjà
  const dataExists = fs.existsSync(path.join(dataDir, 'data', 'tables_X3.csv')) &&
                     fs.existsSync(path.join(dataDir, 'menus', 'menus_locaux.json'));

  if (config.autoUpdate && fs.existsSync(dataDir)) {
    console.log('🔄 Mise à jour des données depuis GitHub...');
    try {
      execSync('git pull', { cwd: dataDir, stdio: 'inherit' });
      console.log('✅ Données mises à jour');
      return dataDir;
    } catch (error) {
      console.error('❌ Erreur lors de la mise à jour:', error.message);
      console.log('📂 Utilisation des données existantes');
      return dataDir;
    }
  }

  if (dataExists) {
    console.log('✅ Données trouvées:', dataDir);
    return dataDir;
  }

  // Télécharger les données depuis GitHub
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║   📥 Téléchargement des données Sage X3 depuis GitHub      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('📍 Repository:', GITHUB_REPO);
  console.log('📂 Destination:', dataDir);
  console.log('');
  console.log('⏳ Téléchargement en cours (première fois seulement)...');
  console.log('');

  try {
    // Vérifier que git est installé
    try {
      execSync('git --version', { stdio: 'ignore' });
    } catch (error) {
      console.error('❌ Git n\'est pas installé');
      console.error('');
      console.error('Installez git puis réessayez:');
      console.error('  macOS: brew install git');
      console.error('  Linux: sudo apt install git');
      console.error('');
      console.error('Ou clonez manuellement:');
      console.error(`  git clone ${GITHUB_REPO} ${dataDir}`);
      process.exit(1);
    }

    // Créer le dossier parent si nécessaire
    const parentDir = path.dirname(dataDir);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }

    // Cloner le repository
    execSync(`git clone --depth 1 ${GITHUB_REPO} "${dataDir}"`, { stdio: 'inherit' });
    
    console.log('');
    console.log('✅ Données téléchargées avec succès !');
    console.log('');
    console.log('📊 Contenu:');
    console.log('   • 1,888 tables Sage X3');
    console.log('   • 47,367 champs documentés');
    console.log('   • 608 menus locaux');
    console.log('');
    
    return dataDir;
  } catch (error) {
    console.error('');
    console.error('❌ Erreur lors du téléchargement:', error.message);
    console.error('');
    console.error('Solutions:');
    console.error('  1. Vérifier votre connexion internet');
    console.error('  2. Cloner manuellement:');
    console.error(`     git clone ${GITHUB_REPO} ${dataDir}`);
    console.error('  3. Utiliser un chemin personnalisé:');
    console.error('     --data-path /votre/chemin');
    console.error('');
    process.exit(1);
  }
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

// S'assurer que les données existent (télécharge si nécessaire)
config.dataPath = ensureDataExists();

// Vérifier que les données sont valides
const dataValid = fs.existsSync(path.join(config.dataPath, 'data', 'tables_X3.csv'));
if (!dataValid) {
  console.error(`❌ Erreur: Données invalides dans: ${config.dataPath}`);
  console.error('Les fichiers requis sont manquants.');
  console.error('');
  console.error('Solutions:');
  console.error('  1. Supprimer et retélécharger: rm -rf ' + DEFAULT_DATA_DIR);
  console.error('  2. Utiliser --data-path avec un chemin valide');
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

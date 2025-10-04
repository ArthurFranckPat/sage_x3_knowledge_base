#!/bin/bash

# Script de publication pour npm
# Usage: ./PUBLISH.sh [patch|minor|major]

set -e

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   📦 Publication npm - @arthurfranckpat/sage-x3-mcp         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier qu'on est dans le bon dossier
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé"
    echo "   Exécutez ce script depuis le dossier mcp/"
    exit 1
fi

# Vérifier que git est clean (pas de changements non commités)
if [ -d "../.git" ]; then
    if ! git diff-index --quiet HEAD --; then
        echo "⚠️  Warning: Changements non commités détectés"
        echo ""
        git status --short
        echo ""
        read -p "Continuer quand même ? (y/N) " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
fi

# Vérifier la connexion npm
echo "🔍 Vérification de la connexion npm..."
if ! npm whoami &> /dev/null; then
    echo "❌ Vous n'êtes pas connecté à npm"
    echo ""
    echo "Connectez-vous avec:"
    echo "  npm login"
    echo ""
    exit 1
fi

NPM_USER=$(npm whoami)
echo "✅ Connecté en tant que: $NPM_USER"
echo ""

# Vérifier les fichiers
echo "🔍 Vérification des fichiers..."
REQUIRED_FILES=(
    "bin/sage-x3-mcp.js"
    "server.py"
    "server_http.py"
    "utils/csv_loader.py"
    "utils/menu_loader.py"
    "requirements.txt"
    "README.md"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Fichier manquant: $file"
        exit 1
    fi
done
echo "✅ Tous les fichiers requis sont présents"
echo ""

# Dry run
echo "🔍 Aperçu du package..."
npm pack --dry-run 2>&1 | grep -E "package size|files:|Tarball|npm notice" | head -20
echo ""

# Version actuelle
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📌 Version actuelle: $CURRENT_VERSION"
echo ""

# Demander le type de version
VERSION_TYPE=${1:-patch}

if [ "$VERSION_TYPE" != "patch" ] && [ "$VERSION_TYPE" != "minor" ] && [ "$VERSION_TYPE" != "major" ]; then
    echo "❌ Type de version invalide: $VERSION_TYPE"
    echo "   Usage: $0 [patch|minor|major]"
    exit 1
fi

# Calculer la nouvelle version
case $VERSION_TYPE in
    patch)
        NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$NF = $NF + 1;} 1' | sed 's/ /./g')
        ;;
    minor)
        NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$(NF-1) = $(NF-1) + 1; $NF = 0;} 1' | sed 's/ /./g')
        ;;
    major)
        NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$1 = $1 + 1; $2 = 0; $3 = 0;} 1' | sed 's/ /./g')
        ;;
esac

echo "🆕 Nouvelle version: $NEW_VERSION ($VERSION_TYPE)"
echo ""

# Confirmation
read -p "Publier @arthurfranckpat/sage-x3-mcp@$NEW_VERSION ? (y/N) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Publication annulée"
    exit 1
fi

# Incrémenter la version
echo "📝 Mise à jour de la version..."
npm version $VERSION_TYPE --no-git-tag-version

# Publier
echo "📤 Publication sur npm..."
npm publish --access public

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   ✅ Publication réussie !                                  ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "📦 Package: @arthurfranckpat/sage-x3-mcp@$NEW_VERSION"
echo "🔗 URL: https://www.npmjs.com/package/@arthurfranckpat/sage-x3-mcp"
echo ""
echo "Test:"
echo "  npx @arthurfranckpat/sage-x3-mcp@$NEW_VERSION --help"
echo ""
echo "Installation:"
echo "  npm install -g @arthurfranckpat/sage-x3-mcp"
echo ""

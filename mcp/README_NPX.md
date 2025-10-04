# 🚀 Installation Ultra-Simple avec npx

## ✨ Nouvelles Fonctionnalités

Le serveur MCP **télécharge automatiquement** les données depuis GitHub !

### Avant (compliqué)
```bash
# ❌ Devoir cloner manuellement
git clone https://github.com/arthurfranckpat/sage-x3-knowledge-base.git
cd sage-x3-knowledge-base
# Configurer SAGE_DATA_PATH...
```

### Maintenant (ultra-simple)
```bash
# ✅ Une seule commande !
npx @arthurfranckpat/sage-x3-mcp
```

## 📋 Configuration Claude Desktop

**C'est tout ce dont vous avez besoin :**

```json
{
  "mcpServers": {
    "sage-x3": {
      "command": "npx",
      "args": ["@arthurfranckpat/sage-x3-mcp"]
    }
  }
}
```

**Plus besoin de `SAGE_DATA_PATH` !** ✨

## 🎯 Comment ça marche ?

1. **Premier lancement** : Le serveur détecte que les données n'existent pas
2. **Téléchargement auto** : Clone automatiquement depuis GitHub dans `~/.sage-x3-data/`
3. **Lancements suivants** : Utilise les données en cache (instantané)

## 📊 Données téléchargées

- ✅ **1,888 tables** Sage X3
- ✅ **47,367 champs** documentés
- ✅ **608 menus locaux** avec 3,127 valeurs
- ✅ **Guides complets** SQL, Glossaire, Relations

**Taille totale** : ~4 MB (téléchargé une seule fois)

## 🔄 Mettre à jour les données

```bash
npx @arthurfranckpat/sage-x3-mcp --update
```

Ou :

```bash
cd ~/.sage-x3-data
git pull
```

## 🛠️ Options avancées

### Utiliser un chemin personnalisé

```bash
npx @arthurfranckpat/sage-x3-mcp --data-path /mon/chemin/perso
```

### Mode serveur HTTP

```bash
npx @arthurfranckpat/sage-x3-mcp server --port 3000
```

### Forcer le retéléchargement

```bash
rm -rf ~/.sage-x3-data
npx @arthurfranckpat/sage-x3-mcp
```

## 📍 Où sont les données ?

**Emplacement par défaut** : `~/.sage-x3-data/`

Sur macOS/Linux :
- `/Users/votre-nom/.sage-x3-data/`
- `/home/votre-nom/.sage-x3-data/`

Sur Windows :
- `C:\Users\votre-nom\.sage-x3-data\`

## 🔧 Dépannage

### Erreur "git not found"

**Installez git :**

```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt install git

# Windows
# Télécharger depuis: https://git-scm.com/download/win
```

### Téléchargement bloqué

**Solutions :**

1. **Vérifier la connexion** : `ping github.com`
2. **Cloner manuellement** :
   ```bash
   git clone https://github.com/arthurfranckpat/sage-x3-knowledge-base.git ~/.sage-x3-data
   ```
3. **Utiliser un proxy** si nécessaire

### Données corrompues

**Supprimer et retélécharger :**

```bash
rm -rf ~/.sage-x3-data
npx @arthurfranckpat/sage-x3-mcp
```

## 💡 Avantages

✅ **Zéro configuration** - Juste `npx` et c'est tout  
✅ **Toujours à jour** - `--update` pour mettre à jour  
✅ **Léger sur npm** - Package de ~100 KB  
✅ **Données versionnées** - Git = historique complet  
✅ **Offline après premier download** - Pas besoin d'internet  

## 🆚 Comparaison

| Méthode | npm | GitHub | npx |
|---------|-----|--------|-----|
| **Taille package npm** | 4 MB | - | 100 KB |
| **Installation** | `npm install -g` | `git clone` | Rien ! |
| **Configuration** | SAGE_DATA_PATH | SAGE_DATA_PATH | Auto ✨ |
| **Mises à jour** | `npm update` | `git pull` | `--update` |
| **Simplicité** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 📚 Documentation complète

- [README principal](./README.md)
- [Guide de déploiement](./DEPLOYMENT.md)
- [Tests](./TEST_GUIDE.md)

## 🎉 Résumé

**Avant :**
```bash
git clone https://github.com/...
cd ...
export SAGE_DATA_PATH=...
npx @arthurfranckpat/sage-x3-mcp
```

**Maintenant :**
```bash
npx @arthurfranckpat/sage-x3-mcp
```

**C'est tout !** 🚀

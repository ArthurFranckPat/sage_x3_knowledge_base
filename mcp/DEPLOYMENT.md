# 🚀 Guide de déploiement

Ce guide explique comment déployer le serveur MCP Sage X3 sur différentes plateformes.

## 📦 Publication sur npm

### Prérequis

1. Compte npm : https://www.npmjs.com/signup
2. npm CLI installé
3. Accès au repository GitHub

### Étapes

```bash
# 1. Se connecter à npm
npm login

# 2. Vérifier le package
npm pack --dry-run

# 3. Publier (première fois)
npm publish --access public

# 4. Publier une mise à jour
npm version patch  # ou minor, ou major
npm publish
```

### Nom du package

Le nom actuel est `@arthurdev/sage-x3-mcp`. Pour changer :

1. Modifier `package.json` : `"name": "@votre-org/sage-x3-mcp"`
2. Créer l'organisation sur npm si nécessaire
3. Republier

## 🐙 Publication sur GitHub

### Initialiser le repository

```bash
cd /Users/arthur/Desktop/Apps/sage_x3_knowledge_base/mcp

# Initialiser git
git init
git add .
git commit -m "Initial commit: Sage X3 MCP Server"

# Créer le repo sur GitHub (avec gh CLI)
gh repo create sage-x3-mcp --public --source=. --remote=origin

# Ou manuellement sur github.com puis:
git remote add origin https://github.com/votre-username/sage-x3-mcp.git

# Push
git branch -M main
git push -u origin main
```

### GitHub Actions (auto-publish)

Créer `.github/workflows/publish.yml` :

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 🌐 Déploiement sur serveur web

### Option 1 : VPS (DigitalOcean, Linode, etc.)

```bash
# Sur le serveur
apt update && apt install -y python3 python3-pip nodejs npm

# Cloner et installer
git clone https://github.com/votre-username/sage-x3-mcp.git
cd sage-x3-mcp
pip3 install -r requirements.txt
npm install -g .

# Configurer les données
export SAGE_DATA_PATH=/path/to/sage_x3_knowledge_base

# Lancer le serveur
sage-x3-mcp server --port 3000 --host 0.0.0.0
```

### Option 2 : Docker

Créer `Dockerfile` :

```dockerfile
FROM python:3.11-slim

# Installer Node.js
RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /app

# Copier les fichiers
COPY package.json requirements.txt ./
COPY bin/ ./bin/
COPY *.py ./
COPY utils/ ./utils/

# Installer les dépendances
RUN pip install -r requirements.txt
RUN npm install

# Exposer le port
EXPOSE 3000

# Variables d'environnement
ENV SAGE_DATA_PATH=/data

# Démarrer le serveur
CMD ["node", "bin/sage-x3-mcp.js", "server", "--host", "0.0.0.0"]
```

```bash
# Build
docker build -t sage-x3-mcp .

# Run
docker run -p 3000:3000 \
  -v /path/to/sage_x3_knowledge_base:/data \
  sage-x3-mcp
```

### Option 3 : Heroku

```bash
# Installer Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Se connecter
heroku login

# Créer l'app
heroku create votre-app-sage-x3-mcp

# Configurer les buildpacks
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/python

# Configurer les variables
heroku config:set SAGE_DATA_PATH=/app/data

# Créer Procfile
echo "web: node bin/sage-x3-mcp.js server --port \$PORT --host 0.0.0.0" > Procfile

# Déployer
git push heroku main
```

### Option 4 : Railway.app

1. Connecter le repo GitHub sur railway.app
2. Définir les variables d'environnement :
   - `SAGE_DATA_PATH=/app/data`
3. Railway détecte automatiquement Python et Node.js
4. Le serveur démarre automatiquement

## 🔒 Sécurité pour déploiement public

### Ajouter l'authentification

Modifier `server_http.py` :

```python
import os
from fastapi import Header, HTTPException

API_KEY = os.environ.get("API_KEY", "your-secret-key")

async def verify_api_key(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return x_api_key

# Ajouter à chaque endpoint
@app.get("/tools", dependencies=[Depends(verify_api_key)])
async def list_tools():
    ...
```

### Configurer HTTPS

Avec nginx :

```nginx
server {
    listen 443 ssl;
    server_name votre-domaine.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Rate limiting

Avec nginx :

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api {
    limit_req zone=api burst=20 nodelay;
    proxy_pass http://localhost:3000;
}
```

## 📊 Monitoring

### Logs

```bash
# Avec pm2
npm install -g pm2
pm2 start bin/sage-x3-mcp.js --name sage-x3-mcp -- server
pm2 logs sage-x3-mcp
pm2 monit
```

### Health checks

```bash
# Script de monitoring
#!/bin/bash
while true; do
    if ! curl -f http://localhost:3000/health; then
        echo "Server down! Restarting..."
        pm2 restart sage-x3-mcp
    fi
    sleep 60
done
```

## 🔄 Mises à jour

### npm

```bash
# Bump version
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publier
npm publish
```

### GitHub

```bash
git add .
git commit -m "Update: description des changements"
git push

# Créer une release
git tag v1.0.1
git push --tags

# Ou avec gh CLI
gh release create v1.0.1 --notes "Description de la release"
```

## ❓ Dépannage

### Port déjà utilisé

```bash
# Trouver le processus
lsof -i :3000

# Tuer le processus
kill -9 <PID>
```

### Permissions Python

```bash
# Utiliser un environnement virtuel
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### npm publish échoue

```bash
# Vérifier le nom du package
npm whoami
npm view @arthurdev/sage-x3-mcp

# Se reconnecter
npm logout
npm login
```

---

**Pour plus d'aide :** https://github.com/votre-username/sage-x3-mcp/issues

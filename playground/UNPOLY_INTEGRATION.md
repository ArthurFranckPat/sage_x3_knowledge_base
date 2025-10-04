# 🚀 Plan d'intégration Unpoly.js

## Phase 1 : Installation & Configuration

### 1.1 Installation
```bash
npm install unpoly --save
```

### 1.2 Configuration Vite (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [adonisjs({ entrypoints: ['resources/js/app.js'] })],
  resolve: {
    alias: {
      'unpoly': 'unpoly/unpoly.es.js'
    }
  }
})
```

### 1.3 Import dans app.js
```javascript
import 'unpoly/unpoly.css'
import * as up from 'unpoly'

// Configuration Unpoly
up.log.enable()  // Debug mode
up.fragment.config.mainTargets = ['#main-content']
up.link.config.followSelectors.push('a[href]')
```

## Phase 2 : Restructuration HTML

### 2.1 Layout principal (layout.edge)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Playground SQL</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  <div id="app">
    <!-- Header persistant -->
    <header id="header">
      <h1>🚀 Playground SQL - Sage X3</h1>
      <nav>
        <a href="/playground/sql" up-target="#main-content">Playground</a>
        <a href="/playground/history" up-target="#main-content">Historique</a>
        <a href="/playground/help" up-layer="new">Aide</a>
      </nav>
    </header>

    <!-- Contenu principal (remplacé par Unpoly) -->
    <main id="main-content">
      @!section('content')
    </main>
  </div>
</body>
</html>
```

### 2.2 Page Playground (index.edge)
```html
@layout('layouts/main')

@section('content')
<div class="playground-container" up-main>
  
  <!-- Sidebar explorable (up-layer drawer) -->
  <aside id="sidebar">
    <button up-layer="new drawer" 
            up-href="/playground/schema" 
            up-size="medium">
      📊 Explorateur Schéma
    </button>
    
    <button up-layer="new drawer" 
            up-href="/playground/history"
            up-size="medium">
      📝 Historique
    </button>
  </aside>

  <!-- Éditeur SQL -->
  <section id="editor-section">
    <div id="monaco-editor"></div>
    
    <form up-submit 
          up-target="#results" 
          up-fail-target="#validation"
          method="POST" 
          action="/api/playground/execute">
      
      <input type="hidden" name="sql" id="sql-input">
      
      <button type="submit" up-disable-with="⏳ Exécution...">
        ▶️ Exécuter
      </button>
      
      <button type="button" 
              up-validate 
              up-target="#validation"
              up-method="POST"
              up-url="/api/playground/validate">
        ✓ Valider
      </button>
    </form>
  </section>

  <!-- Zone de validation -->
  <div id="validation" up-hungry></div>

  <!-- Résultats -->
  <section id="results" up-hungry>
    <!-- Mis à jour par Unpoly -->
  </section>

</div>
@end
```

## Phase 3 : Endpoints Unpoly

### 3.1 Controller adapté pour Unpoly
```typescript
// app/controllers/playground_controller.ts

export default class PlaygroundController {
  
  async execute({ request, response, view }: HttpContext) {
    const sql = request.input('sql')
    
    try {
      const result = await sqlExecutor.execute(sql)
      
      // Si requête Unpoly, retourner fragment
      if (request.header('X-Up-Target')) {
        return view.render('playground/partials/results', { result })
      }
      
      // Sinon, page complète
      return view.render('playground/index', { result })
    } catch (error) {
      response.status(400)
      return view.render('playground/partials/error', { error })
    }
  }
  
  async schema({ request, view }: HttpContext) {
    const schema = await sqlExecutor.getSchema()
    
    // Retourner fragment pour drawer
    return view.render('playground/partials/schema', { schema })
  }
  
  async history({ request, view }: HttpContext) {
    // Historique depuis session ou DB
    const history = request.session().get('sql_history', [])
    
    return view.render('playground/partials/history', { history })
  }
}
```

## Phase 4 : Partials Edge pour Unpoly

### 4.1 Résultats (partials/results.edge)
```html
<div id="results" class="results-container">
  <div class="results-header">
    <h3>Résultats</h3>
    <div class="results-actions">
      <button up-layer="new modal" 
              up-href="/playground/export?format=csv"
              up-size="small">
        📥 Export CSV
      </button>
    </div>
  </div>

  @if(result.rows.length > 0)
    <table>
      <thead>
        <tr>
          @each(column in result.columns)
            <th up-clickable 
                up-href="/api/playground/sort?column={{ column }}"
                up-target="#results">
              {{ column }}
            </th>
          @end
        </tr>
      </thead>
      <tbody>
        @each(row in result.rows)
          <tr>
            @each(value in Object.values(row))
              <td>{{ value }}</td>
            @end
          </tr>
        @end
      </tbody>
    </table>

    <!-- Pagination Unpoly -->
    <nav class="pagination" up-nav>
      <a href="/api/playground/page/1" up-target="#results">1</a>
      <a href="/api/playground/page/2" up-target="#results">2</a>
    </nav>
  @end
</div>
```

### 4.2 Schéma Explorer (partials/schema.edge)
```html
<div id="schema-explorer" class="drawer">
  <header>
    <h2>📊 Schéma Sage X3</h2>
    <button up-dismiss>✕</button>
  </header>

  <div class="search">
    <input type="search" 
           up-autosubmit 
           up-target="#schema-list"
           up-method="GET"
           up-url="/playground/schema/search"
           placeholder="Rechercher...">
  </div>

  <div id="schema-list">
    @each(table in schema.tables)
      <details class="table-item">
        <summary up-clickable 
                 up-href="/playground/schema/{{ table.name }}"
                 up-target="#table-details">
          🗂️ {{ table.name }} ({{ table.row_count }})
        </summary>
        
        <div id="table-details-{{ table.name }}">
          <!-- Chargé dynamiquement -->
        </div>
      </details>
    @end
  </div>
</div>
```

## Phase 5 : Intégration Monaco Editor

### 5.1 Initialisation Monaco avec Unpoly
```javascript
// resources/js/monaco-setup.js

import * as monaco from 'monaco-editor'
import * as up from 'unpoly'

let editor = null

// Compiler Unpoly pour Monaco
up.compiler('#monaco-editor', function(element) {
  editor = monaco.editor.create(element, {
    value: '',
    language: 'sql',
    theme: 'vs-dark',
    automaticLayout: true
  })

  // Ctrl+Enter pour exécuter
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
    up.submit('form#sql-form')
  })

  // Cleanup
  return () => editor.dispose()
})

// Hook avant soumission : copier SQL de Monaco vers form
up.on('up:form:submit', 'form#sql-form', (event) => {
  const sql = editor.getValue()
  event.form.querySelector('#sql-input').value = sql
})
```

## Phase 6 : Features avancées Unpoly

### 6.1 Autocomplétion avec Unpoly
```javascript
// Charger suggestions depuis serveur
up.compiler('[up-autocomplete]', function(input) {
  input.addEventListener('input', up.debounce(300, async () => {
    const suggestions = await up.request({
      url: '/api/playground/autocomplete',
      params: { prefix: input.value }
    })
    // Afficher suggestions
  }))
})
```

### 6.2 Historique avec navigation
```javascript
// Sauvegarder historique dans URL
up.on('up:form:submit', (event) => {
  const sql = event.params.sql
  up.navigate({ 
    url: `/playground/sql?q=${encodeURIComponent(sql)}`,
    history: true 
  })
})
```

## Avantages de cette architecture

✅ **Performance** : Mises à jour partielles, pas de rechargement complet
✅ **UX fluide** : Transitions smooth, préservation du contexte
✅ **SEO friendly** : Chaque état a une URL, fonctionne sans JS
✅ **Code simple** : Pas de gestion manuelle d'état/routing
✅ **Layers naturels** : Modals/drawers intégrés
✅ **Historique navigateur** : Back/forward fonctionnent
✅ **Progressive enhancement** : Graceful degradation

## Prochaines étapes

1. Installer Unpoly
2. Restructurer layout avec up-target
3. Créer partials Edge pour chaque zone
4. Adapter controller pour détecter requêtes Unpoly
5. Intégrer Monaco avec up.compiler
6. Tester navigation et layers

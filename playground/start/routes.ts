/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PlaygroundController = () => import('#controllers/playground_controller')

// Page d'accueil
router.on('/').render('pages/home').as('home')


// Routes Web du Playground SQL
router
  .group(() => {
    router
      .get('/', [PlaygroundController, 'index'])
      .as('playground.index')
    
    router
      .get('/schema', [PlaygroundController, 'schemaView'])
      .as('playground.schema')
    
    router
      .get('/history', [PlaygroundController, 'historyView'])
      .as('playground.history')
    
    router
      .get('/favorites', [PlaygroundController, 'favoritesView'])
      .as('playground.favorites')
    
    router
      .get('/examples', [PlaygroundController, 'examplesView'])
      .as('playground.examples')
    
    router
      .get('/shortcuts', [PlaygroundController, 'shortcutsView'])
      .as('playground.shortcuts')
    
    router
      .get('/export', [PlaygroundController, 'export'])
      .as('playground.export')
  })
  .prefix('/playground')

// Routes API du Playground SQL
router
  .group(() => {
    router
      .post('/execute', [PlaygroundController, 'execute'])
      .as('playground.api.execute')

    router
      .post('/validate', [PlaygroundController, 'validate'])
      .as('playground.api.validate')

    router
      .get('/schema', [PlaygroundController, 'schema'])
      .as('playground.api.schema')

    router
      .get('/examples', [PlaygroundController, 'examples'])
      .as('playground.api.examples')

    // Query History API endpoints
    router
      .get('/history', [PlaygroundController, 'history'])
      .as('playground.api.history')

    router
      .post('/history', [PlaygroundController, 'saveToHistory'])
      .as('playground.api.history.save')

    router
      .delete('/history', [PlaygroundController, 'clearHistory'])
      .as('playground.api.history.clear')

    router
      .delete('/history/:id', [PlaygroundController, 'deleteFromHistory'])
      .as('playground.api.history.delete')

    router
      .get('/history/search', [PlaygroundController, 'searchHistory'])
      .as('playground.api.history.search')
  })
  .prefix('/api/playground')

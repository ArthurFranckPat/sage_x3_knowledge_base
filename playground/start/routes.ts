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
  })
  .prefix('/api/playground')

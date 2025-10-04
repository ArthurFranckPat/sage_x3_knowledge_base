import { test } from '@japa/runner'

test.group('PlaygroundController', () => {
  test('GET /playground/sql should render the playground page', async ({ client }) => {
    const response = await client.get('/playground/sql')
    
    response.assertStatus(200)
    response.assertTextIncludes('Playground SQL')
  })

  test('POST /api/playground/execute should execute a valid SELECT query', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql: 'SELECT 1 as test' })
    
    response.assertStatus(200)
    response.assertBodyContains({ success: true })
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isObject(body.data)
    assert.isArray(body.data.rows)
    assert.isNumber(body.data.rowCount)
    assert.isNumber(body.data.executionTime)
  })

  test('POST /api/playground/execute should reject non-SELECT queries', async ({ client }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql: 'DELETE FROM users' })
    
    response.assertStatus(400)
    response.assertBodyContains({ success: false })
  })

  test('POST /api/playground/execute should return error for empty SQL', async ({ client }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql: '' })
    
    response.assertStatus(400)
    response.assertBodyContains({ success: false })
  })

  test('POST /api/playground/execute should handle invalid SQL', async ({ client }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql: 'SELECT * FROM non_existing_table' })
    
    response.assertStatus(400)
    response.assertBodyContains({ success: false })
  })

  test('POST /api/playground/validate should validate a SELECT query', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/validate')
      .withCsrfToken()
      .json({ sql: 'SELECT * FROM users LIMIT 10' })
    
    response.assertStatus(200)
    
    const body = response.body()
    assert.isTrue(body.valid)
    assert.isNumber(body.score)
    assert.isArray(body.errors)
    assert.isArray(body.warnings)
  })

  test('POST /api/playground/validate should invalidate non-SELECT queries', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/validate')
      .withCsrfToken()
      .json({ sql: 'DELETE FROM users' })
    
    response.assertStatus(200)
    
    const body = response.body()
    assert.isFalse(body.valid)
    assert.equal(body.score, 0)
    assert.isAbove(body.errors.length, 0)
  })

  test('POST /api/playground/validate should return error for empty SQL', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/validate')
      .withCsrfToken()
      .json({ sql: '' })
    
    response.assertStatus(400)
    
    const body = response.body()
    assert.isFalse(body.valid)
  })

  test('GET /api/playground/schema should return database schema', async ({ client, assert }) => {
    const response = await client.get('/api/playground/schema')
    
    response.assertStatus(200)
    response.assertBodyContains({ success: true })
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isArray(body.tables)
    assert.isNumber(body.count)
    assert.isAbove(body.count, 0)
  })

  test('GET /api/playground/examples should return SQL examples', async ({ client, assert }) => {
    const response = await client.get('/api/playground/examples')
    
    response.assertStatus(200)
    response.assertBodyContains({ success: true })
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isArray(body.examples)
    assert.isAbove(body.examples.length, 0)
    
    // Check example structure
    const example = body.examples[0]
    assert.property(example, 'title')
    assert.property(example, 'description')
    assert.property(example, 'sql')
  })

  test('POST /api/playground/execute should handle Sage X3 tables', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ 
        sql: 'SELECT id, pcccod_0, unnbr_0 FROM itmmaster LIMIT 5' 
      })
    
    response.assertStatus(200)
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isAtMost(body.data.rowCount, 5)
  })

  test('POST /api/playground/execute should handle JOIN queries', async ({ client, assert }) => {
    const sql = `
      SELECT 
        i.id,
        i.pcccod_0,
        s.id as stock_id
      FROM itmmaster i
      LEFT JOIN stock s ON i.id = s.id
      LIMIT 5
    `
    
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql })
    
    response.assertStatus(200)
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isArray(body.data.rows)
  })

  test('POST /api/playground/execute should add LIMIT automatically', async ({ client, assert }) => {
    const response = await client
      .post('/api/playground/execute')
      .withCsrfToken()
      .json({ sql: 'SELECT * FROM users' })
    
    response.assertStatus(200)
    
    const body = response.body()
    assert.isTrue(body.success)
    assert.isAtMost(body.data.rowCount, 1000)
  })
})
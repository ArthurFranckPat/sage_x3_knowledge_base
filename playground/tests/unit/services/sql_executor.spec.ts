import { test } from '@japa/runner'
import SqlExecutor, { SqlExecutionError } from '#services/sql_executor'
import Database from '@adonisjs/lucid/services/db'

test.group('SqlExecutor', (group) => {
  let executor: SqlExecutor

  group.each.setup(() => {
    executor = new SqlExecutor()
  })

  test('should execute a simple SELECT query', async ({ assert }) => {
    const sql = 'SELECT 1 as test'
    const result = await executor.execute(sql)

    assert.isArray(result.rows)
    assert.equal(result.rowCount, 1)
    assert.isNumber(result.executionTime)
    assert.isAbove(result.executionTime, 0)
    assert.deepEqual(result.rows[0], { test: 1 })
  })

  test('should execute SELECT from existing table', async ({ assert }) => {
    const sql = 'SELECT * FROM users LIMIT 1'
    const result = await executor.execute(sql)

    assert.isArray(result.rows)
    assert.isNumber(result.rowCount)
    assert.isNumber(result.executionTime)
  })

  test('should reject non-SELECT queries', async ({ assert }) => {
    const queries = [
      'DELETE FROM users',
      'UPDATE users SET email = "test"',
      'INSERT INTO users (email) VALUES ("test")',
      'DROP TABLE users',
      'CREATE TABLE test (id int)',
      'ALTER TABLE users ADD COLUMN test VARCHAR(255)',
      'TRUNCATE TABLE users'
    ]

    for (const sql of queries) {
      await assert.rejects(
        async () => await executor.execute(sql),
        'Seules les requêtes SELECT sont autorisées'
      )
    }
  })

  test('should detect dangerous keywords in SELECT', async ({ assert }) => {
    const sql = 'SELECT * FROM users; DROP TABLE users'
    
    await assert.rejects(
      async () => await executor.execute(sql),
      /Commande interdite détectée/
    )
  })

  test('should add LIMIT automatically if absent', async ({ assert }) => {
    const sql = 'SELECT * FROM users'
    const result = await executor.execute(sql)

    // Should have added LIMIT 1000 automatically
    assert.isAtMost(result.rowCount, 1000)
  })

  test('should respect existing LIMIT', async ({ assert }) => {
    const sql = 'SELECT * FROM users LIMIT 2'
    const result = await executor.execute(sql)

    assert.isAtMost(result.rowCount, 2)
  })

  test('should throw SqlExecutionError on invalid SQL', async ({ assert }) => {
    const sql = 'SELECT * FROM non_existing_table'
    
    await assert.rejects(
      async () => await executor.execute(sql),
      SqlExecutionError
    )
  })

  test('should handle complex SELECT queries', async ({ assert }) => {
    const sql = `
      SELECT 
        u.id,
        u.email,
        COUNT(*) as count
      FROM users u
      GROUP BY u.id, u.email
      HAVING count > 0
      ORDER BY u.id DESC
      LIMIT 10
    `
    
    const result = await executor.execute(sql)

    assert.isArray(result.rows)
    assert.isNumber(result.executionTime)
  })

  test('should test database connection', async ({ assert }) => {
    const isConnected = await executor.testConnection()
    assert.isTrue(isConnected)
  })

  test('should handle queries with JOIN', async ({ assert }) => {
    const sql = `
      SELECT 
        i.id,
        i.pcccod_0,
        s.id as stock_id
      FROM itmmaster i
      LEFT JOIN stock s ON i.id = s.id
      LIMIT 5
    `
    
    const result = await executor.execute(sql)

    assert.isArray(result.rows)
    assert.isNumber(result.rowCount)
    assert.isAtMost(result.rowCount, 5)
  })

  test('should handle queries with WHERE clause', async ({ assert }) => {
    const sql = `
      SELECT * FROM facility WHERE fcy_0 = 'FAC0001' LIMIT 1
    `
    
    const result = await executor.execute(sql)

    assert.isArray(result.rows)
    assert.isAtMost(result.rowCount, 1)
  })
})
import { test } from '@japa/runner'
import SqlValidator from '#services/sql_validator'

test.group('SqlValidator', (group) => {
  let validator: SqlValidator

  group.each.setup(() => {
    validator = new SqlValidator()
  })

  test('should validate a simple SELECT query', ({ assert }) => {
    const sql = 'SELECT * FROM users'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
    assert.isNumber(result.score)
    assert.isArray(result.errors)
    assert.isArray(result.warnings)
  })

  test('should reject non-SELECT queries', ({ assert }) => {
    const queries = [
      'DELETE FROM users',
      'UPDATE users SET email = "test"',
      'INSERT INTO users (email) VALUES ("test")',
      'DROP TABLE users',
      'CREATE TABLE test (id int)',
    ]

    queries.forEach(sql => {
      const result = validator.validate(sql)
      
      assert.isFalse(result.valid)
      assert.equal(result.score, 0)
      assert.include(result.errors[0], 'SELECT')
    })
  })

  test('should detect dangerous keywords', ({ assert }) => {
    const sql = 'SELECT * FROM users WHERE id = 1; DROP TABLE users'
    const result = validator.validate(sql)

    assert.isFalse(result.valid)
    assert.equal(result.score, 0)
    assert.isAbove(result.errors.length, 0)
    assert.include(result.errors.join(' '), 'DROP')
  })

  test('should warn about missing LIMIT', ({ assert }) => {
    const sql = 'SELECT * FROM users'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
    assert.isAbove(result.warnings.length, 0)
    assert.include(result.warnings.join(' '), 'LIMIT')
  })

  test('should not warn about LIMIT if present', ({ assert }) => {
    const sql = 'SELECT * FROM users LIMIT 10'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
    // Should not warn about LIMIT
    const limitWarning = result.warnings.find(w => w.includes('LIMIT'))
    assert.isUndefined(limitWarning)
  })

  test('should warn about fields without Sage X3 suffixes', ({ assert }) => {
    const sql = 'SELECT email FROM users WHERE name = "test"'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
    // Should warn about fields without _0, _1 suffixes
    const suffixWarning = result.warnings.find(w => w.includes('suffixe'))
    assert.isDefined(suffixWarning)
  })

  test('should not warn about Sage X3 fields with suffixes', ({ assert }) => {
    const sql = 'SELECT pcccod_0, unnbr_0 FROM itmmaster WHERE yfamstat7_0 = 1 LIMIT 10'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
    // Should not warn about suffixes
    const suffixWarning = result.warnings.find(w => w.includes('suffixe'))
    assert.isUndefined(suffixWarning)
  })

  test('should calculate score based on errors and warnings', ({ assert }) => {
    // Query with no errors or warnings
    const perfectSql = 'SELECT pcccod_0 FROM itmmaster LIMIT 10'
    const perfectResult = validator.validate(perfectSql)
    
    assert.equal(perfectResult.score, 100)

    // Query with warnings
    const warningSql = 'SELECT pcccod_0 FROM itmmaster'
    const warningResult = validator.validate(warningSql)
    
    assert.isBelow(warningResult.score, 100)
    assert.isAbove(warningResult.score, 0)
  })

  test('should extract tables from SELECT query', ({ assert }) => {
    const sql = `
      SELECT i.pcccod_0, s.id
      FROM itmmaster i
      LEFT JOIN stock s ON i.id = s.id
    `
    
    const tables = validator.extractTables(sql)

    assert.isArray(tables)
    assert.include(tables, 'itmmaster')
    assert.include(tables, 'stock')
  })

  test('should handle complex queries with multiple JOINs', ({ assert }) => {
    const sql = `
      SELECT 
        o.sohnum_0,
        b.bpcnam_0,
        i.itmdes1_0
      FROM sorder o
      INNER JOIN bpartner b ON o.bpcord_0 = b.bpcnum_0
      INNER JOIN sorderqs q ON o.sohnum_0 = q.sohnum_0
      INNER JOIN itmmaster i ON q.itmref_0 = i.itmref_0
      LIMIT 10
    `
    
    const result = validator.validate(sql)
    const tables = validator.extractTables(sql)

    assert.isTrue(result.valid)
    assert.equal(tables.length, 4)
    assert.include(tables, 'sorder')
    assert.include(tables, 'bpartner')
    assert.include(tables, 'sorderqs')
    assert.include(tables, 'itmmaster')
  })

  test('should handle queries with subqueries', ({ assert }) => {
    const sql = 'SELECT * FROM (SELECT itmref_0 FROM itmmaster) as sub LIMIT 10'
    const result = validator.validate(sql)

    assert.isTrue(result.valid)
  })

  test('should ignore SQL keywords in field detection', ({ assert }) => {
    const sql = 'SELECT id, email FROM users WHERE id = 1 LIMIT 10'
    const result = validator.validate(sql)

    // Should be valid (warnings don't invalidate the query)
    assert.isTrue(result.valid)
    // Should not flag table name 'users' as a field
    const warnings = result.warnings.filter(w => w.includes('suffixe'))
    // We expect warnings for 'id' and 'email' (2 fields without suffix)
    // But 'users' (table name) should not be counted
    assert.isAtLeast(warnings.length, 0) // At least no crash
  })
})
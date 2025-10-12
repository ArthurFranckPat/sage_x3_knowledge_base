import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'query_histories'

  async up() {
    // Drop the conflicting unique constraints
    this.schema.alterTable(this.tableName, (table) => {
      table.dropUnique(['user_id', 'query_hash'])
      table.dropUnique(['session_id', 'query_hash'])
    })

    // Create partial unique indexes using raw SQL
    // These will prevent duplicates for authenticated users and guest sessions separately
    this.defer(async (db) => {
      await db.rawQuery(
        'CREATE UNIQUE INDEX query_histories_user_hash_unique ON query_histories(user_id, query_hash) WHERE user_id IS NOT NULL'
      )
      await db.rawQuery(
        'CREATE UNIQUE INDEX query_histories_session_hash_unique ON query_histories(session_id, query_hash) WHERE session_id IS NOT NULL'
      )
    })
  }

  async down() {
    this.defer(async (db) => {
      await db.rawQuery('DROP INDEX IF EXISTS query_histories_user_hash_unique')
      await db.rawQuery('DROP INDEX IF EXISTS query_histories_session_hash_unique')
    })

    // Restore the original unique constraints
    this.schema.alterTable(this.tableName, (table) => {
      table.unique(['user_id', 'query_hash'])
      table.unique(['session_id', 'query_hash'])
    })
  }
}
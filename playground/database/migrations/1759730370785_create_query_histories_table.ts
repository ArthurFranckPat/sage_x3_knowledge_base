import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'query_histories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Foreign key to users table (nullable for guest sessions)
      table.integer('user_id').unsigned().references('id').inTable('users').nullable()

      // Query details
      table.text('sql').notNullable()
      table.string('query_hash', 64).notNullable() // SHA-256 hash for deduplication

      // Execution metrics
      table.integer('row_count').defaultTo(0)
      table.integer('execution_time_ms').defaultTo(0)
      table.integer('validation_score').defaultTo(100)

      // Query analysis
      table.json('tables_used').nullable() // Array of table names used
      table.text('query_type').nullable() // SELECT, WITH, etc.

      // Session tracking
      table.string('session_id', 255).nullable() // For guest users

      // Metadata
      table.string('user_agent', 500).nullable()
      table.string('ip_address', 45).nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      // Indexes for performance
      table.index(['user_id'])
      table.index(['query_hash'])
      table.index(['session_id'])
      table.index(['created_at'])

      // Unique constraint to prevent duplicates for same user/session
      table.unique(['user_id', 'query_hash'])
      table.unique(['session_id', 'query_hash'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
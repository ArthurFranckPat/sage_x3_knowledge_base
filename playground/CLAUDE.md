# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Sage X3 SQL Playground** - an interactive web application for testing SQL queries against Sage X3 database patterns. It's built with AdonisJS 6, TypeScript, and modern frontend technologies including Monaco Editor, Alpine.js, and Unpoly.js.

The playground provides a safe environment to practice SQL queries using Sage X3 conventions (field suffixes like `_0`, `_1`) with 30 mock tables spanning sites, customers, suppliers, items, inventory, sales, purchasing, and manufacturing modules.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server with HMR
node ace serve --hmr  # Alternative development server

# Database Management
node ace migration:fresh --seed  # Recreate database with sample data
node ace migration:rollback      # Rollback last migration
node ace migration:status        # Check migration status

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run typecheck    # TypeScript type checking
npm run test         # Run test suite
```

## Architecture Overview

### Backend Architecture (AdonisJS 6)

**Service Layer Pattern:**
- `app/services/sql_executor.ts` - Secure SQL execution with SELECT-only restriction, automatic LIMIT enforcement, and dangerous keyword detection
- `app/services/sql_validator.ts` - Sage X3-specific validation enforcing `_0` field suffixes and checking against known tables/fields

**Route Structure:**
- Web routes (`/playground/*`) serve the main application interface
- API routes (`/api/playground/*`) handle SQL execution, validation, schema, and examples
- Uses Unpoly.js layer system for modal/drawer navigation

### Frontend Architecture

**Component System:**
- Custom shadcn/ui-inspired Edge.js components in `resources/views/components/ui/`
- Components use props and slots for flexibility
- Design system based on CSS variables for theming

**Interactive Features:**
- Monaco Editor integration with SQL syntax highlighting and keyboard shortcuts
- Alpine.js for reactive UI state (dark mode, validation feedback)
- Unpoly.js for SPA-like navigation without full page reloads
- Local storage for query persistence, history, and favorites

### Database Structure

**Mock Sage X3 Database (SQLite):**
- 30 tables with realistic Sage X3 naming conventions
- 10 sample records per table (300 total records)
- Tables organized by module: Sites, Tiers, Items, Stocks, Sales, Purchasing, Manufacturing
- All fields follow Sage X3 conventions with `_0` suffixes

### Key Technical Patterns

**SQL Security:**
```typescript
// From sql_executor.ts - Only SELECT queries allowed
if (!trimmedSql.toUpperCase().startsWith('SELECT')) {
  throw new Error('Seules les requêtes SELECT sont autorisées')
}
// Automatic LIMIT enforcement
const sqlWithLimit = this.addLimit(trimmedSql, 1000)
```

**Frontend Integration:**
```javascript
// Monaco Editor with Unpoly compiler for dynamic content
up.compiler('#monaco-editor', function(element) {
  const editor = initMonacoEditor(element)
  return () => editor.dispose() // Cleanup
})
```

**Component Usage:**
```edge
@component('components.ui.button', {
  variant: 'primary',
  onclick: 'executeQuery()'
})
  Execute Query
@end
```

## Development Context

### Application Entry Points
- Main application: `http://localhost:3333/playground`
- SQL playground interface: `/playground/sql` (main query interface)
- Schema browser: Available via drawer navigation
- Examples and shortcuts: Available via modal navigation

### Key Files for Modification
- `app/controllers/playground_controller.ts` - Main application logic and API endpoints
- `app/services/sql_validator.ts` - Add new validation rules for Sage X3 conventions
- `resources/views/playground/index.edge` - Main application interface
- `resources/js/app.js` - Frontend behavior and Monaco Editor configuration
- `resources/views/components/ui/` - Reusable UI components

### Testing SQL Queries
The application is designed for testing SQL queries with real Sage X3 table structures. When working with SQL functionality:
1. Use the mock database tables that mirror Sage X3 structure
2. All field names must include `_0` suffix (e.g., `itmref_0`, `bpcnum_0`)
3. Only SELECT queries are allowed for security
4. Automatic LIMIT of 1000 rows is enforced

### Frontend Framework Integration
The application uses a unique combination:
- **Edge.js** for server-side templating
- **Unpoly.js** for client-side navigation without page reloads
- **Alpine.js** for reactive UI components
- **Monaco Editor** for professional SQL editing experience

This architecture provides a smooth, app-like experience while maintaining server-side rendering benefits.
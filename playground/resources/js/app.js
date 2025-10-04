// Import Unpoly
import 'unpoly'
import * as up from 'unpoly'

// Import Monaco Editor
import * as monaco from 'monaco-editor'

// Import SQL Formatter
import { format } from 'sql-formatter'

// Configure Monaco Workers
self.MonacoEnvironment = {
  getWorker(_, label) {
    // Use CDN workers for Monaco
    const workerPath = `https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs`
    if (label === 'sql') {
      return new Worker(`${workerPath}/language/sql/sql.worker.js`)
    }
    return new Worker(`${workerPath}/base/worker/workerMain.js`)
  }
}

// Configure Unpoly
up.log.config.enabled = true
up.fragment.config.mainTargets = ['#main-content']
up.layer.config.drawer.position = 'right'
up.layer.config.drawer.size = 'medium'

// Global editor instance
window.sqlEditor = null

// Monaco Editor Compiler
up.compiler('#monaco-editor', function(element) {
  const editor = monaco.editor.create(element, {
    value: localStorage.getItem('lastSQL') || 'SELECT * FROM itmmaster LIMIT 10',
    language: 'sql',
    theme: document.documentElement.classList.contains('dark') ? 'vs-dark' : 'vs',
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    readOnly: false,
    cursorStyle: 'line',
    wordWrap: 'on',
    suggestOnTriggerCharacters: true,
  })

  window.sqlEditor = editor

  // Ctrl+Enter to execute
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
    const form = document.querySelector('form#sql-form')
    if (form) {
      up.submit(form)
    }
  })

  // Ctrl+Shift+F to format
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
    const sql = editor.getValue()
    try {
      const formatted = format(sql, { language: 'sql' })
      editor.setValue(formatted)
    } catch (e) {
      console.error('Format error:', e)
    }
  })

  // Save to localStorage on change
  editor.onDidChangeModelContent(() => {
    localStorage.setItem('lastSQL', editor.getValue())
  })

  // Cleanup
  return () => {
    editor.dispose()
    window.sqlEditor = null
  }
})

// Form submission hook: copy SQL from Monaco to hidden input
up.on('up:form:submit', 'form#sql-form', (event) => {
  if (window.sqlEditor) {
    const sql = window.sqlEditor.getValue()
    const input = event.form.querySelector('#sql-input')
    if (input) {
      input.value = sql
    }
  }
})

// Toast notifications
window.showToast = function(message, type = 'info') {
  const toast = document.createElement('div')
  toast.className = `toast toast-${type}`
  toast.textContent = message
  document.body.appendChild(toast)
  
  setTimeout(() => toast.classList.add('show'), 10)
  
  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

// Success notification after query execution
up.on('up:fragment:inserted', '#results', (event) => {
  const rowCount = event.fragment.querySelector('[data-row-count]')
  if (rowCount) {
    const count = rowCount.dataset.rowCount
    showToast(`✓ Query executed: ${count} rows`, 'success')
  }
})

// Error notification
up.on('up:fragment:inserted', '#validation.error', (event) => {
  showToast('✗ Validation failed', 'error')
})

// History management
window.sqlHistory = JSON.parse(localStorage.getItem('sqlHistory') || '[]')

window.addToHistory = function(sql, result) {
  const entry = {
    sql,
    timestamp: Date.now(),
    rowCount: result?.rowCount || 0
  }
  
  sqlHistory.unshift(entry)
  sqlHistory = sqlHistory.slice(0, 100) // Keep last 100
  localStorage.setItem('sqlHistory', JSON.stringify(sqlHistory))
}

// Favorites management
window.sqlFavorites = JSON.parse(localStorage.getItem('sqlFavorites') || '[]')

window.addToFavorites = function(sql, name) {
  const favorite = {
    id: Date.now(),
    sql,
    name: name || sql.substring(0, 50),
    createdAt: Date.now()
  }
  
  sqlFavorites.push(favorite)
  localStorage.setItem('sqlFavorites', JSON.stringify(sqlFavorites))
  showToast('✓ Added to favorites', 'success')
}

window.removeFromFavorites = function(id) {
  sqlFavorites = sqlFavorites.filter(f => f.id !== id)
  localStorage.setItem('sqlFavorites', JSON.stringify(sqlFavorites))
  showToast('✓ Removed from favorites', 'success')
}

// Theme toggle
window.toggleTheme = function() {
  const html = document.documentElement
  const isDark = html.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  
  // Update Monaco theme
  if (window.sqlEditor) {
    monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs')
  }
}

// Load theme preference
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}

// Keyboard shortcuts help
window.showShortcuts = function() {
  up.layer.open({
    url: '/playground/shortcuts',
    layer: 'modal',
    size: 'medium'
  })
}

// Export functionality
window.exportResults = function(format) {
  const table = document.querySelector('#results table')
  if (!table) {
    showToast('No results to export', 'warning')
    return
  }

  // This will be handled by server endpoint
  const sql = window.sqlEditor?.getValue()
  const url = `/playground/export?format=${format}&sql=${encodeURIComponent(sql)}`
  window.location.href = url
}

console.log('✓ Playground SQL initialized')

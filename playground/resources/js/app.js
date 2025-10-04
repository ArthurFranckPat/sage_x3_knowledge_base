// Import Unpoly (no default export, just side effects)
import 'unpoly'

// Import Monaco Editor
import * as monaco from 'monaco-editor'

// Import SQL Formatter
import { format } from 'sql-formatter'

// Configure Monaco Workers for Vite
self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl, label) => {
      return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {
        name: label,
        type: 'module'
      })
    }

    switch (label) {
      case 'json':
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/language/json/json.worker?worker', label)
      case 'css':
      case 'scss':
      case 'less':
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/language/css/css.worker?worker', label)
      case 'html':
      case 'handlebars':
      case 'razor':
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/language/html/html.worker?worker', label)
      case 'typescript':
      case 'javascript':
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label)
      case 'sql':
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution?worker', label)
      default:
        return getWorkerModule('/node_modules/monaco-editor/esm/vs/editor/editor.worker?worker', label)
    }
  }
}

// Configure Unpoly (access via global window.up)
const up = window.up
up.log.config.enabled = true
up.fragment.config.mainTargets = ['#main-content']
up.layer.config.drawer.position = 'right'
up.layer.config.drawer.size = 'medium'

// Global editor instance
window.sqlEditor = null

// Function to initialize Monaco Editor
function initMonacoEditor(element) {
  console.log('🚀 Initializing Monaco Editor on element:', element)
  
  // Remove fallback textarea if exists
  const fallback = element.querySelector('#sql-fallback-editor')
  const fallbackValue = fallback ? fallback.value : 'SELECT * FROM itmmaster LIMIT 10'
  if (fallback) {
    console.log('📝 Removing fallback textarea, value:', fallbackValue)
    fallback.remove()
  }
  
  try {
    const editor = monaco.editor.create(element, {
    value: localStorage.getItem('lastSQL') || fallbackValue,
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
  console.log('✅ Monaco Editor initialized successfully!')

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

    return editor
  } catch (error) {
    console.error('❌ Monaco Editor initialization failed:', error)
    // Restore fallback textarea on error
    element.innerHTML = `<textarea id="sql-fallback-editor" style="width: 100%; height: 300px; font-family: monospace; padding: 10px; border: none; resize: vertical;">${fallbackValue}</textarea>`
    return null
  }
}

// Monaco Editor Compiler for Unpoly
up.compiler('#monaco-editor', function(element) {
  const editor = initMonacoEditor(element)
  
  // Cleanup when element is removed
  return () => {
    editor.dispose()
    window.sqlEditor = null
  }
})

// Initialize Monaco Editor on page load (for initial page load, not Unpoly navigation)
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOMContentLoaded event fired')
  const editorElement = document.getElementById('monaco-editor')
  console.log('🔍 Monaco editor element:', editorElement)
  
  if (editorElement && !window.sqlEditor) {
    console.log('🎯 Attempting to initialize Monaco Editor...')
    window.sqlEditor = initMonacoEditor(editorElement)
  } else {
    console.warn('⚠️ Cannot initialize Monaco:', { editorElement, sqlEditor: window.sqlEditor })
  }
})

// Global function to copy editor content to hidden input (called on form submit)
window.copyEditorToInput = function() {
  console.log('📤 copyEditorToInput called')
  const input = document.getElementById('sql-input')
  
  if (window.sqlEditor) {
    const sql = window.sqlEditor.getValue()
    console.log('📝 Copying from Monaco Editor:', sql.substring(0, 50) + '...')
    if (input) {
      input.value = sql
      console.log('✅ SQL copied to hidden input from Monaco')
    }
  } else {
    // Fallback: get SQL from textarea if Monaco isn't loaded
    const fallback = document.getElementById('sql-fallback-editor')
    if (fallback) {
      console.log('📝 Copying from fallback textarea:', fallback.value.substring(0, 50) + '...')
      if (input) {
        input.value = fallback.value
        console.log('✅ SQL copied to hidden input from textarea')
      }
    }
  }
  
  console.log('🔍 Final input value:', input ? input.value.substring(0, 50) + '...' : 'NO INPUT FOUND')
  return true // Allow form submission
}

// Also hook into Unpoly's submit event (as backup)
up.on('up:form:submit', 'form#sql-form', (event) => {
  console.log('🚀 Unpoly form submit event')
  copyEditorToInput()
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

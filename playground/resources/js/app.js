// Import Unpoly (no default export, just side effects)
import 'unpoly'

// Import Basecoat UI JavaScript (after Unpoly to avoid conflicts)
import 'basecoat-css/all'

// Import Alpine.js
import Alpine from 'alpinejs'

// Import Monaco Editor
import * as monaco from 'monaco-editor'

// Import SQL Formatter
import { format } from 'sql-formatter'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

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

// Configure Unpoly (must be done before DOMContentLoaded)
if (window.up) {
  // Enable logging
  window.up.log.enable()
  
  // Configure main targets
  window.up.fragment.config.mainTargets = ['[up-main~=drawer]', '[up-main~=overlay]', '#main-content', 'main']
  
  // Configure drawer (merge with existing config, don't overwrite)
  Object.assign(window.up.layer.config.drawer, {
    position: 'left',
    size: 'large',
    backdrop: true,
    dismissable: true,
    history: true
  })
  
  // Debug: Check if Unpoly loaded
  console.log('✅ Unpoly version:', window.up.version)
  console.log('✅ Unpoly drawer config:', window.up.layer.config.drawer)
} else {
  console.error('❌ Unpoly not loaded!')
}

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

// Toast notifications via Basecoat toaster (no custom UI)
;(function(){
  function toCategory(type){
    if (type === 'destructive') return 'error'
    if (['success','info','warning','error'].includes(type)) return type
    return 'info'
  }
  function dispatchToast(config){
    document.dispatchEvent(new CustomEvent('basecoat:toast', { detail: { config } }))
  }
  window.toast = {
    show({ message, title, type = 'info', duration }){
      const category = toCategory(type)
      const cfg = { category, title: title || undefined, description: message }
      if (duration) cfg.duration = duration
      dispatchToast(cfg)
    },
    success(msg, title){ this.show({ type:'success', message: msg, title }) },
    error(msg, title){ this.show({ type:'error', message: msg, title }) },
    warning(msg, title){ this.show({ type:'warning', message: msg, title }) },
    info(msg, title){ this.show({ type:'info', message: msg, title }) },
  }
})()

// Backwards compatibility: legacy showToast(message, type)
window.showToast = function(message, type = 'info', title){
  window.toast?.show({ message, type, title })
}

// Success notification after query execution
up.on('up:fragment:inserted', '#results', (event) => {
  const fragment = event.target || event.fragment
  const rowCount = fragment?.querySelector('[data-row-count]')
  const executionTime = fragment?.querySelector('[data-execution-time]')
  const validationScore = fragment?.querySelector('[data-validation-score]')

  if (rowCount) {
    const count = parseInt(rowCount.dataset.rowCount || '0')
    const execTime = parseInt(executionTime?.dataset.executionTime || '0')
    const valScore = parseInt(validationScore?.dataset.validationScore || '100')

    // Add to history
    if (window.sqlEditor) {
      const sql = window.sqlEditor.getValue()
      window.addToHistory(sql, { rowCount: count }, execTime, valScore)
    }

    window.toast?.success(`Query executed: ${count} rows in ${execTime}ms`)
  }
})

// Error notification
up.on('up:fragment:inserted', '#validation.error', (event) => {
  const fragment = event.target || event.fragment
  if (fragment) {
    window.toast?.error('Validation failed')
  }
})

// Toasts from headers (server-provided)
up.on('up:request:loaded', (event) => {
  try {
    const res = event.response
    if (!res || typeof res.header !== 'function') return
    const t = res.header('X-Toast-Type')
    const m = res.header('X-Toast-Message')
    const title = res.header('X-Toast-Title')
    if (t && m) {
      const mapped = t === 'destructive' ? 'error' : t
      window.toast?.show({ type: mapped, message: m, title })
    }
  } catch {}
})

// Network/server failure
up.on('up:request:failed', (event) => {
  window.toast?.error('Request failed')
})

// Enhanced History Management (Database + localStorage fallback)
window.sqlHistory = []
window.historyCurrentPage = 1
window.historyTotalPages = 1
window.historyIsUsingDB = false

/**
 * Normalize history entry format between DB and localStorage
 */
function normalizeHistoryEntry(entry, index) {
  return {
    id: entry.id || index,
    sql: entry.sql || '',
    created_at: entry.created_at || entry.createdAt || entry.timestamp || Date.now(),
    row_count: entry.row_count || entry.rowCount || 0,
    execution_time_ms: entry.execution_time_ms || entry.executionTimeMs || entry.executionTime || 0,
    validation_score: entry.validation_score || entry.validationScore || 100,
    query_type: entry.query_type || entry.queryType || 'SELECT',
    tables_used: entry.tables_used || entry.tablesUsed || [],
    sql_preview: entry.sql_preview || entry.sqlPreview || entry.sql?.substring(0, 200)
  }
}

window.loadHistoryFromDB = async function(page = 1) {
  try {
    const response = await fetch(`/api/playground/history?page=${page}&limit=50`)
    if (response.ok) {
      const data = await response.json()
      if (data.success) {
        const paginationData = data.data
        window.sqlHistory = (paginationData.data || []).map((entry, index) => 
          normalizeHistoryEntry(entry, index)
        )
        window.historyCurrentPage = paginationData.meta?.current_page || page
        window.historyTotalPages = paginationData.meta?.last_page || 1
        window.historyIsUsingDB = true
        return true
      }
    }
  } catch (error) {
    console.warn('Failed to load history from database, falling back to localStorage')
  }

  // Fallback to localStorage
  const localData = JSON.parse(localStorage.getItem('sqlHistory') || '[]')
  window.sqlHistory = localData.map((entry, index) => normalizeHistoryEntry(entry, index))
  window.historyIsUsingDB = false
  return false
}

window.addToHistory = async function(sql, result, executionTime, validationScore) {
  // Try to save to database first
  try {
    const response = await fetch('/api/playground/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        sql: sql.trim(),
        rowCount: result?.rowCount || 0,
        executionTime: executionTime || 0,
        validationScore: validationScore || 100
      })
    })

    if (response.ok) {
      // Refresh history from database
      await window.loadHistoryFromDB()
      return true
    }
  } catch (error) {
    console.warn('Failed to save to database, using localStorage fallback')
  }

  // Fallback to localStorage
  const entry = {
    sql,
    timestamp: Date.now(),
    rowCount: result?.rowCount || 0,
    executionTime: executionTime || 0,
    validationScore: validationScore || 100
  }

  const localStorageHistory = JSON.parse(localStorage.getItem('sqlHistory') || '[]')
  localStorageHistory.unshift(entry)
  localStorageHistory.slice(0, 100) // Keep last 100
  localStorage.setItem('sqlHistory', JSON.stringify(localStorageHistory))

  return false
}

window.removeFromHistory = async function(id) {
  if (window.historyIsUsingDB) {
    // ID is a database ID
    try {
      const response = await fetch(`/api/playground/history/${id}`, {
        method: 'DELETE',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })

      if (response.ok) {
        await window.loadHistoryFromDB(window.historyCurrentPage)
        window.toast?.success('Removed from history')
        return true
      }
    } catch (error) {
      console.error('Failed to remove from database:', error)
      window.toast?.error('Failed to remove from history')
      return false
    }
  }

  // Using localStorage - ID is an array index
  let localStorageHistory = JSON.parse(localStorage.getItem('sqlHistory') || '[]')
  if (id >= 0 && id < localStorageHistory.length) {
    localStorageHistory.splice(id, 1)
    localStorage.setItem('sqlHistory', JSON.stringify(localStorageHistory))
    window.sqlHistory = localStorageHistory.map((entry, index) => normalizeHistoryEntry(entry, index))
    window.toast?.success('Removed from history')
    return true
  }
  return false
}

window.clearHistory = async function() {
  if (!confirm('Clear all history? This action cannot be undone.')) {
    return
  }

  try {
    const response = await fetch('/api/playground/history', {
      method: 'DELETE',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })

    if (response.ok) {
      const data = await response.json()
      window.sqlHistory = []
      localStorage.setItem('sqlHistory', '[]')
      window.toast?.success(data.message || 'History cleared')
      return true
    }
  } catch (error) {
    console.warn('Failed to clear database history, using localStorage fallback')
  }

  // Fallback to localStorage
  localStorage.setItem('sqlHistory', '[]')
  window.sqlHistory = []
  window.toast?.success('History cleared')
  return false
}

window.searchHistory = async function(query, tables, queryType) {
  try {
    const params = new URLSearchParams()
    if (query) params.append('q', query)
    if (tables) params.append('tables', tables)
    if (queryType) params.append('queryType', queryType)

    const response = await fetch(`/api/playground/history/search?${params}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data.success) {
        window.sqlHistory = data.data.data || []
        return true
      }
    }
  } catch (error) {
    console.warn('Search failed, filtering localStorage')
  }

  // Fallback: filter localStorage history
  let localStorageHistory = JSON.parse(localStorage.getItem('sqlHistory') || '[]')
  if (query) {
    localStorageHistory = localStorageHistory.filter(entry =>
      entry.sql.toLowerCase().includes(query.toLowerCase())
    )
  }
  window.sqlHistory = localStorageHistory
  return false
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
  window.toast?.success('Added to favorites')
}

window.removeFromFavorites = function(id) {
  sqlFavorites = sqlFavorites.filter(f => f.id !== id)
  localStorage.setItem('sqlFavorites', JSON.stringify(sqlFavorites))
  window.toast?.success('Removed from favorites')
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
    window.toast?.warning('No results to export')
    return
  }

  // This will be handled by server endpoint
  const sql = window.sqlEditor?.getValue()
  const url = `/playground/export?format=${format}&sql=${encodeURIComponent(sql)}`
  window.location.href = url
}

console.log('✓ Playground SQL initialized')

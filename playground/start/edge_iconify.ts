import edge from 'edge.js'
import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as lucide } from '@iconify-json/lucide'

// Register Lucide icon collection and Edge Iconify plugin
addCollection(lucide)
edge.use(edgeIconify)

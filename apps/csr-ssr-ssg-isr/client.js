import Home from './pages/index'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(document.getElementById('root'), <Home {...window.__DATA__} />)

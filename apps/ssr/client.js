import App from './app'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(document.getElementById('root'), <App />)

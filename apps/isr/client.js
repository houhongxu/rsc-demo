import App from './app'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'

const { props } = window.__DATA__

hydrateRoot(document.getElementById('root'), <App {...props} />)

import React from 'react'
import { hydrateRoot } from 'react-dom/client'

const { props, page } = window.__DATA__

const importFile = async (path) => {
  return await import(`./pages/${path}.js`)
}

const { default: Component } = await importFile(page)

hydrateRoot(document.getElementById('root'), <Component {...props} />)

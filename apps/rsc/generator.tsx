import { IndexPage, Layout, PostPage } from './components'
import { renderJSXToClientJSX, renderJSXToHTML, stringifyJSX } from './utils'
import React from 'react'

function Router({ url }) {
  let page

  if (url.pathname === '/') {
    page = <IndexPage />
  } else {
    const slug = url.pathname.slice(1)

    page = <PostPage slug={slug} />
  }

  return <Layout>{page}</Layout>
}

export async function htmlGenerator(url) {
  let html = await renderJSXToHTML(<Router url={url} />)
  // 直接拼虽然有些错误，但浏览器会纠正，并正确解析
  html += `
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.2.0",
        "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev"
      }
    }
  </script>
  <script type="module" src="/client.js"></script>
`
  return html
}

export async function jsxGenerator(url) {
  let clientJSX = await renderJSXToClientJSX(<Router url={url} />)
  const clientJSXString = JSON.stringify(clientJSX, stringifyJSX)
  return clientJSXString
}

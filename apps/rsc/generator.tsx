import { IndexPage, Layout, PostPage } from './components'
import { renderJSXToHTML } from './utils'
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
  html += `<script type="module" src="/client.js"></script>`
  return html
}

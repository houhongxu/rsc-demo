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
  return renderJSXToHTML(<Router url={url} />)
}

import { revalidateMap, build } from './build'
import { PAGE_DIR_PATH, HTML_DIR_PATH } from './constants'
import { getPropsAndComponent } from './utils'
import { getHtml } from './utils'
import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(express.static('public'))

let loading = false

app.get(/.*/, async (req, res) => {
  const reqPath = req.path.split('/')[1]
  const page = reqPath ? reqPath : 'index'

  const pages = fs.readdirSync(PAGE_DIR_PATH).map((file) => file.split('.')[0])

  if (!pages.includes(page)) {
    res.status(200).send(`404 Not Found ${req.path}`)
    return
  }

  const { Component, props, revalidate, ssr } = await getPropsAndComponent(
    page,
    req,
    res,
  )

  const html = await getHtml(page, Component, props)

  if (ssr) {
    res.send(html)
  } else {
    const htmlPath = path.join(HTML_DIR_PATH, `${page}.html`)

    revalidateMap[page] = revalidate

    fs.stat(htmlPath, async (err, stats) => {
      if (err) {
        await build(page, html)
      } else {
        const isExpired =
          typeof revalidateMap[page] === 'number' &&
          Date.now() - stats.mtimeMs > revalidateMap[page] * 1000

        if (isExpired && !loading) {
          loading = true

          build(page, html).finally(() => {
            loading = false
          })
        }
      }

      return res.sendFile(htmlPath)
    })
  }
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

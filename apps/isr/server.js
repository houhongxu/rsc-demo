import App from './app'
import { INDEX_PATH } from './constants'
import { getStaticComponent } from './utils'
import express from 'express'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'

let REVALIDATE = 0

const app = express()

app.use(express.static('public'))

async function build(req, res) {
  const { Component, props, revalidate } = await getStaticComponent(req, res)

  REVALIDATE = revalidate

  const content = renderToString(<Component {...props} />)

  fs.writeFileSync(
    INDEX_PATH,
    `
<html>
  <head>
    <title>ISR</title>
  </head>

  <body>
    <div id='root'>${content}</div>

    <script>
      window.__DATA__ = ${JSON.stringify({ props })}
    </script>

    <script src="./client.entry.js"></script>
  </body>
</html>
`,
  )
}

app.get('/', (req, res) => {
  fs.stat(INDEX_PATH, async (err, stats) => {
    if (err) {
      await build()
    } else {
      const isExpired = Date.now() - stats.mtimeMs > REVALIDATE * 1000

      if (isExpired) {
        build()
      }
    }

    return res.sendFile(INDEX_PATH)
  })
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

import { getServerSideComponent } from './utils'
import express from 'express'
import { readdirSync } from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

const PAGE_DIR_PATH = path.join(process.cwd(), './pages')
const pages = readdirSync(PAGE_DIR_PATH).map((file) => file.split('.')[0])

const app = express()

app.use(express.static('public'))

app.get(/.*/, async (req, res) => {
  const path = req.path.split('/')[1]
  const page = path ? path : 'index'

  console.log('path', req.path)

  if (!pages.includes(page)) {
    res.status(200).send(`404 Not Found ${req.path}`)
    return
  }

  const { Component, props } = await getServerSideComponent(page, req, res)

  const content = renderToString(<Component {...props} />)

  res.send(`
<html>
   <head>
       <title>SSR</title>
   </head>
   
   <body>
    <div id='root'>${content}</div>
    
    <script>
      window.__DATA__ = ${JSON.stringify({ props, page })}
    </script>

    <script src="/client.entry.js"></script>
   </body>
</html>
`)
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

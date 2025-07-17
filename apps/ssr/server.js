import App from './app'
import { getServerSideComponent } from './utils'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  const { Component, props } = await getServerSideComponent()

  const content = renderToString(<Component {...props} />)

  res.send(`
<html>
  <head>
    <title>SSR</title>
  </head>
   
  <body>
    <div id='root'>${content}</div>
    
    <script>
      window.__DATA__ = ${JSON.stringify({ props })}
    </script>

    <script src="./client.entry.js"></script>
  </body>
</html>
`)
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

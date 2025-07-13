import App from './app'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

const content = renderToString(<App />)

app.get('/', (req, res) =>
  res.send(`
<html>
   <head>
       <title>SSR</title>
   </head>

   <body>
    <div id='root'>${content}</div>
    
    <script src="/client.entry.js"></script>
   </body>
</html>
`),
)

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

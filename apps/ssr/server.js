import App from './app'
import { getServerSideComponent } from './utils'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  // 服务端发起请求，并获取组件及其props
  const { Component, props } = await getServerSideComponent()

  // 渲染好的react组件
  const content = renderToString(<Component {...props} />)

  // 返回渲染好的html, 并注入数据到window.__DATA__
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

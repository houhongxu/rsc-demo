import { htmlGenerator } from './generator'
import express from 'express'
import { readFile } from 'fs/promises'

const app = express()

app.get(/.*/, async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  console.log('url', req.url)

  // 匹配 client.js
  if (url.pathname === '/client.js') {
    const content = await readFile('./client.js', 'utf8')
    res.send(content)
    return
  } else {
    const html = await htmlGenerator(url)
    res.send(html)
    return
  }
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

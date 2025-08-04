import { htmlGenerator } from './generator'
import express from 'express'

const app = express()

app.get(/.*/, async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)

  const html = await htmlGenerator(url)

  res.send(html)
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

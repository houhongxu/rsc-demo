import { build, currentRevalidate } from './build'
import { INDEX_PATH } from './constants'
import express from 'express'
import fs from 'fs'

let loading = false

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  fs.stat(INDEX_PATH, async (err, stats) => {
    if (err) {
      await build()
    } else {
      const isExpired =
        typeof currentRevalidate === 'number' &&
        Date.now() - stats.mtimeMs > currentRevalidate * 1000

      if (isExpired && !loading) {
        loading = true

        build().finally(() => {
          loading = false
        })
      }
    }

    return res.sendFile(INDEX_PATH)
  })
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

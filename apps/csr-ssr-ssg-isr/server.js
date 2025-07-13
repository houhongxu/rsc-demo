import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  const files = await import('./pages/index.js')

  const { getServerSideProps, default: HomeComponent } = files

  let props = {}

  if (getServerSideProps) {
    const result = await getServerSideProps({
      req,
      res,
      query: req.query,
    })

    props = result.props
  }

  const content = renderToString(<HomeComponent {...props} />)

  res.send(`
<html>
   <head>
       <title>SSR</title>
   </head>
   
   <body>
    <div id='root'>${content}</div>
    
    <script>
      window.__DATA__ = ${JSON.stringify(props)}
    </script>

    <script src="/client.entry.js"></script>
   </body>
</html>
`)
})

app.listen(3000, () => console.log('listening on http://localhost:3000!'))

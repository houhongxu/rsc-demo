import { getStaticComponent } from './utils'
import fs from 'fs'
import { renderToString } from 'react-dom/server'

const { Component, props } = await getStaticComponent()

const content = renderToString(<Component {...props} />)

fs.writeFileSync(
  './public/index.html',
  `
<html>
  <head>
    <title>SSG</title>
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

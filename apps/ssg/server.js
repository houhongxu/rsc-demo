import App from './app'
import fs from 'fs'
import { renderToString } from 'react-dom/server'

const content = renderToString(<App />)

fs.writeFileSync(
  './public/index.html',
  `
<html>
  <head>
    <title>SSG</title>
  </head>
   
  <body>
    <div id='root'>${content}</div>

    <script src="./client.entry.js"></script>
  </body>
</html>
`,
)

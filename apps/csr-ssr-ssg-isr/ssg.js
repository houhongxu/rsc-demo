import { PAGE_DIR_PATH } from './constants'
import fs from 'fs'
import path from 'path'
import { renderToString } from 'react-dom/server'

const pages = fs.readdirSync(PAGE_DIR_PATH).map((file) => file.split('.')[0])

if (!fs.existsSync('html')) {
  fs.mkdirSync('html')
}

pages.forEach((page) => {
  const { Component, props } = await getServerSideComponent(page, req, res)
  
  const content = renderToString(<Component {...props} />)
  
  fs.writeFileSync(`html/${page}.html`, `
<html>
   <head>
       <title>SSG</title>
   </head>
   
   <body>
    <div id='root'>${content}</div>
    
    <script>
      window.__DATA__ = ${JSON.stringify({ props, page })}
    </script>

    <script src="../client.entry.js"></script>
   </body>
</html>
`)
})
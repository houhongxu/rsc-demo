import { INDEX_PATH } from './constants'
import { HTML_DIR_PATH } from './constants'
import { getStaticComponent } from './utils'
import fs from 'fs'
import { renderToString } from 'react-dom/server'

export let currentRevalidate

export async function build() {
  if (!fs.existsSync(HTML_DIR_PATH)) {
    fs.mkdirSync(HTML_DIR_PATH)
  }

  const { Component, props, revalidate } = await getStaticComponent()

  currentRevalidate = revalidate

  const content = renderToString(<Component {...props} />)

  fs.writeFileSync(
    INDEX_PATH,
    `
<html>
  <head>
    <title>ISR</title>
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
}

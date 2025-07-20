import { HTML_DIR_PATH } from './constants'
import fs from 'fs'
import path from 'path'

export const revalidateMap = {}

export async function build(page, html) {
  if (!fs.existsSync(HTML_DIR_PATH)) {
    fs.mkdirSync(HTML_DIR_PATH)
  }

  fs.writeFileSync(path.join(HTML_DIR_PATH, `${page}.html`), html)
}

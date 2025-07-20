import path from 'path'

export const SERVER_ROOT_PATH = __dirname

export const HTML_DIR_PATH = path.join(SERVER_ROOT_PATH, 'html')

const ROOT_PATH = path.join(__dirname, '..')

export const PAGE_DIR_PATH = path.join(ROOT_PATH, 'pages')

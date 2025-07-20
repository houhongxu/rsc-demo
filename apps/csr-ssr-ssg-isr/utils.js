import { renderToString } from 'react-dom/server'

export async function getPropsAndComponent(page, req, res) {
  const files = await import(`./pages/${page}.js`)

  const { getServerSideProps, getStaticProps, default: Component } = files

  let props = {}
  let revalidate = 0
  let ssr = false

  if (getStaticProps) {
    const result = await getStaticProps()

    props = result.props
    revalidate = result.revalidate
  } else if (getServerSideProps) {
    const result = await getServerSideProps({
      req,
      res,
    })

    props = result.props
    ssr = true
  }

  return { Component, props, revalidate, ssr }
}

export async function getHtml(page, Component, props) {
  const content = renderToString(<Component {...props} />)

  const html = `
  <html>
     <head>
         <title>${page}</title>
     </head>
     
     <body>
      <div id='root'>${content}</div>
      
      <script>
        window.__DATA__ = ${JSON.stringify({ props, page })}
      </script>
  
      <script src="./client.entry.js"></script>
     </body>
  </html>
  `

  return html
}

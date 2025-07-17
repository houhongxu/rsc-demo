export async function getStaticComponent(req, res) {
  const files = await import(`./app.js`)

  const { getStaticProps, default: Component } = files

  let props = {}
  let revalidate = 0

  if (getStaticProps) {
    const result = await getStaticProps({
      req,
      res,
    })

    props = result.props
    revalidate = result.revalidate
  }

  return { Component, props, revalidate }
}

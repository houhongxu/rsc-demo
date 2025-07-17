export async function getServerSideComponent(page, req, res) {
  const files = await import(`./pages/${page}.js`)

  const { getServerSideProps, default: Component } = files

  let props = {}

  if (getServerSideProps) {
    const result = await getServerSideProps({
      req,
      res,
    })

    props = result.props
  }

  return { Component, props }
}

export async function getStaticComponent() {
  const files = await import(`./app.js`)

  const { getStaticProps, default: Component } = files

  let props = {}

  if (getStaticProps) {
    const result = await getStaticProps()

    props = result.props
  }

  return { Component, props }
}

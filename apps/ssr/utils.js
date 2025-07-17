export async function getServerSideComponent() {
  const files = await import('./app.js')

  const { getServerSideProps, default: Component } = files

  let props = {}

  if (getServerSideProps) {
    const result = await getServerSideProps()

    props = result.props
  }

  return { Component, props }
}

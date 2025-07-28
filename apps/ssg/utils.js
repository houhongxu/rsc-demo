import App, { getStaticProps } from './app'

export async function getStaticComponent() {
  let props = {}

  if (getStaticProps) {
    const result = await getStaticProps()

    props = result.props
  }

  return { Component: App, props }
}

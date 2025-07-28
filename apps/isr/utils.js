import App, { getStaticProps } from './app'

export async function getStaticComponent() {
  let props = {}
  let revalidate = 0

  if (getStaticProps) {
    const result = await getStaticProps()

    props = result.props
    revalidate = result.revalidate
  }

  return { Component: App, props, revalidate }
}

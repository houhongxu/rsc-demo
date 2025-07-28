import App, { getServerSideProps } from './app'

export async function getServerSideComponent() {
  let props = {}

  if (getServerSideProps) {
    const result = await getServerSideProps()

    props = result.props
  }

  return { Component: App, props }
}

import { useState } from 'react'

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://dummyjson.com/users/${Math.floor(Math.random() * 100)}`,
  )

  const user = await res.json()

  return {
    props: { user },
    revalidate: 3,
  }
}

export default function App({ user }) {
  return (
    <>
      <header>{user.username}</header>
      <main>{user.age}</main>
    </>
  )
}

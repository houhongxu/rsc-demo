import { useState, useEffect } from 'react'

export async function getStaticProps() {
  const res = await fetch(
    `http://localhost:3001/api/users/${Math.floor(Math.random() * 100)}`,
  )

  const user = await res.json()

  return { props: { user } }
}

export default function Page({ user }) {
  const [count, setCount] = useState(user.age)
  const [extraUser, setExtraUser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${Math.floor(Math.random() * 100)}`)
      .then((res) => res.json())
      .then((user) => {
        setExtraUser(user)
      })
  }, [])

  return (
    <div>
      <h1>
        {user.username} Counters {count} times
      </h1>

      <h1>{extraUser?.username} hello</h1>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

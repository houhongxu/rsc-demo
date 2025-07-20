import { useState } from 'react'

export async function getStaticProps() {
  const res = await fetch(
    `http://localhost:3001/api/users/${Math.floor(Math.random() * 100)}`,
  )

  const user = await res.json()

  return {
    props: { user },
    revalidate: 3,
  }
}

export default function Page({ user }) {
  const [count, setCount] = useState(user.age)

  return (
    <div>
      <h1>
        {user.username} Counters {count} times
      </h1>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

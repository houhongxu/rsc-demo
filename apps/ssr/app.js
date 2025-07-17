import { useState } from 'react'

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://dummyjson.com/users/${Math.floor(Math.random() * 100)}`,
  )

  const user = await res.json()

  return { props: { user } }
}

export default function App({ user }) {
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

import { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${Math.floor(Math.random() * 100)}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user)
        setCount(user.age)
      })
  }, [])

  return (
    <>
      {user ? (
        <div>
          <h1>
            {user.username} Counters {count} times
          </h1>

          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

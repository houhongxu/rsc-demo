import { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${Math.floor(Math.random() * 100)}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.age)
      })
  }, [])

  return (
    <>
      {typeof count === 'number' ? (
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

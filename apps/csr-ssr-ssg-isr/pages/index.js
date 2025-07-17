export const getServerSideProps = async () => {
  try {
    // 添加超时控制
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5秒超时

    const res = await fetch('https://api.github.com/repos/vercel/next.js', {
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const repo = await res.json()

    return { props: { repo } }
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error)

    // 返回模拟数据
    return {
      props: {
        repo: {
          stargazers_count: 'N/A (API Error)',
        },
      },
    }
  }
}

export default function Page({ repo }) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}

let currentPathname = window.location.pathname

window.addEventListener('click', (e) => {
  // 忽略非 <a> 标签点击事件
  if (e.target.tagName !== 'A') {
    return
  }
})

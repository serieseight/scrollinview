let scrollInViewClass

const check = (item, i, start, now, height) => {
  const delay = parseInt(item.dataset.scrollInViewDelay, 10) || 0
  const offset = parseInt(item.dataset.scrollInView, 10) || 0

  if (now >= start + delay) {
    const top = item.getBoundingClientRect().top

    if (height > top + offset) {
      item.classList.add(scrollInViewClass)
    }
  }

  return item
}

const notDone = item => ! item.classList.contains(scrollInViewClass)

const init = (event, {
  className = 'js-scroll-in-view'
} = {}) => {
  const start = Date.now()

  scrollInViewClass = className

  let items = [ ...document.querySelectorAll('[data-scroll-in-view]') ]

  const token = event.subscribe('newContent', () => {
    const now = Date.now()
    const height = window.innerHeight

    items = items
      .map((item, i) => check(item, i, start, now, height))
      .filter(notDone)

    if (! items.length) {
      event.unsubscribe(token)
    }
  })
}

export default init

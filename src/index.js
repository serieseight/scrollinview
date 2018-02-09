let inViewClass

const check = (item, i, start, now, height) => {
  const delay = parseInt(item.dataset.inviewDelay, 10) || 0
  const offset = parseInt(item.dataset.inview, 10) || 0

  if (now >= start + delay) {
    const top = item.getBoundingClientRect().top

    if (height > top + offset) {
      item.classList.add(inViewClass)
    }
  }

  return item
}

const notDone = item => ! item.classList.contains(inViewClass)

const init = (event, {
  className = 'js-in-view'
} = {}) => {
  const start = Date.now()

  inViewClass = className

  let items = [ ...document.querySelectorAll('[data-inview]') ]

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

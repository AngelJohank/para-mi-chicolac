import {createSignal} from 'solid-js'

const createMessageArray = () => {
  const emojis = [
    '❤️',
    '🍄',
    '🪼',
    '🦓',
    '🍣',
    '☕',
    '🧂',
    '🍍',
    '🪳',
    '🌙',
    '🐈',
    '🦖',
    '🌱',
  ]
  let array: string[] = []

  for (let i = 0; i <= 20; i++) {
    const selectedEmoji = Math.floor(Math.random() * emojis.length)
    array.push(`${emojis[selectedEmoji]} mucho ${emojis[selectedEmoji]}`)
  }

  return array
}

const [mensajes, setMensajes] = createSignal(createMessageArray())

const observer = new IntersectionObserver(
  entries => {
    const element = entries[0]
    if (!element.isIntersecting) return

    // add more items to the list
    setMensajes(v => v.concat(createMessageArray()))
  },
  {
    rootMargin: '100px',
  },
)

export {observer, mensajes}

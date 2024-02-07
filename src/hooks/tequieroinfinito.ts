import {createSignal} from 'solid-js'

const messageArray = createMessageArray()
const [mensajes, setMensajes] = createSignal(messageArray)

const observer = new IntersectionObserver(
  entries => {
    const element = entries[0]
    if (!element.isIntersecting) return

    // add more items to the list
    setMensajes(v => v.concat(messageArray))
  },
  {
    rootMargin: '100px',
  },
)

function createMessageArray() {
  let messageArray: string[] = []
  const message = 'mucho'
  const emojis = [
    '🍄',
    '❤️',
    '🐥',
    '🍣',
    '🍍',
    '🦓',
    '🧂',
    '🪳',
    '☕',
    '🌙',
    '🐈',
    '🦖',
    '🌱',
  ]

  for (const emoji of emojis) {
    messageArray.push(`${emoji} ${message} ${emoji}`)
  }

  return messageArray
}

export {observer, mensajes}

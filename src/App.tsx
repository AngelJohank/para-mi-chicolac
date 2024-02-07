import bg from './assets/bg.png'
import waveOne from './assets/wave-one.svg'
import sticker from './assets/sticker.png'

import {observer, mensajes} from './hooks/tequieroinfinito'
import {For, Show, createSignal, onMount} from 'solid-js'

const App = () => {
  let footer: HTMLDivElement | undefined
  let yesButton: HTMLButtonElement | undefined

  const [wasYesPressed, setWasYesPressed] = createSignal(false)
  const [noCount, setNoCount] = createSignal(0)
  const [time, SetTime] = createSignal('')

  const yesButtonSize = () => noCount() * 10 + 16

  const getNoButtonText = () => {
    const phrases = [
      'No',
      'No me quieres?',
      'Segura?',
      'Segurísima?',
      'Brenda Melissa!!!',
      'Última oportunidad',
      'Amor???',
      'beterraga en ensalada',
      'Piénsalo otra vez',
      'Estás completamente segura?',
      'Me soplas el ojito',
      'cuchurrumin de chicolac?',
      'No seas tan fría',
      'Cambiaste de parecer?',
      'No lo reconsiderarías?',
      'Esa es tu respuesta final?',
      'Estás rompiendo mi corazón </3',
    ]

    return phrases[Math.min(noCount(), phrases.length - 1)]
  }

  const handleNoClick = () => {
    setNoCount(size => size + 1)
    if (!yesButton) return
    yesButton.style.width = `${yesButton.offsetWidth * 1.05}px`
  }

  const handleYesClick = () => {
    let date = new Date()
    let newTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })

    SetTime(newTime)
    setWasYesPressed(true)
  }

  // handle infinite scroll
  onMount(() => {
    observer.observe(footer!)
  })

  return (
    <div class="min-h-screen max-w-6xl mx-auto overflow-hidden">
      <div>
        <img
          src={waveOne}
          class="w-screen h-32 object-cover rotate-180"
          style="object-position: 80% 50%;"
        />
        <h1 class="text-5xl text-center text-white font-bold">
          Feliz Mes Fantasma <span>❤️</span>
        </h1>

        <img src={bg} class="mx-auto object-cover h-40" />
      </div>

      <Show when={wasYesPressed()}>
        <div class="p-4 max-w-4xl mx-auto">
          <div class="flex justify-end mb-2">
            <div class="rounded-lg py-2 px-3" style="background-color: #015d4b">
              <p class="text-sm mt-1" style="color: #e5efec">
                Ya lo sabía amorcito
              </p>
              <p class="text-right text-xs mt-1" style="color: #76a79e">
                {time()}
              </p>
            </div>
          </div>
          <div class="flex justify-end mb-2">
            <div class="rounded-lg py-2 px-3" style="background-color: #015d4b">
              <p class="text-sm mt-1" style="color: #e5efec">
                Te amo {'<3'}
              </p>
              <p class="text-right text-xs mt-1" style="color: #76a79e">
                {time()}
              </p>
            </div>
          </div>
          <div class="flex justify-end mb-2">
            <div class="py-2">
              <img src={sticker} />
              <p class="text-right text-xs mt-1" style="color: #838283">
                {time()}
              </p>
            </div>
          </div>
        </div>
      </Show>
      <Show when={!wasYesPressed()}>
        <p class="text-4xl text-center text-white font-bold mb-2">
          Me Quieres?
        </p>

        <button
          type="button"
          ref={yesButton}
          onClick={handleYesClick}
          style={{
            'font-size': `${yesButtonSize()}px`,
          }}
          class="text-center block mx-auto mb-4 px-8 py-3 min-w-40 font-semibold rounded bg-red-400 text-white"
        >
          Si
        </button>

        <button
          type="button"
          onClick={handleNoClick}
          class="block mx-auto inlineblock px-8 py-3 min-w-40 max-h-12 font-semibold rounded bg-slate-600 text-white"
        >
          {noCount() == 0 ? 'No' : getNoButtonText()}
        </button>
      </Show>

      <p class="text-4xl mt-4 text-center text-white font-bold mb-2">
        ¿Quieres Saber Cuánto Te Quiero?
      </p>
      <p class="text-white text-center">
        hay una forma de expresar lo que no se puede medir{' '}
        <span class="text-center text-red-300">(baja tanto como quieras)</span>
      </p>

      <div class="flex-col items-center justify-center">
        <For each={mensajes()}>
          {item => (
            <p class="px-8 py-3 text-4xl font-bold text-center text-white">
              {item}
            </p>
          )}
        </For>
      </div>

      <div ref={footer} class="h-4" />
    </div>
  )
}

export default App

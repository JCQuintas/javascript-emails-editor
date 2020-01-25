import { createEmailPill } from './email-pill'
import { Options } from './options'
//junis@gmas.com, sasdas@aso.com, sasfasdasa
export const createInput = (options: Options) => {
  const inputContainer = document.createElement('div')
  inputContainer.className = 'emails-editor__input-container'

  const textinput = document.createElement('input')
  textinput.className = 'emails-editor__text-input'
  textinput.placeholder = 'add more people...'

  const createBlock = () => {
    const value = textinput.value.trim()
    if (value !== '') {
      setEmails(value)
      textinput.value = ''
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      createBlock()
    }
  }

  const onPaste = (event: ClipboardEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const data = (event.clipboardData || (window as any).clipboardData).getData(
      'text'
    )
    setEmails(data)
  }

  textinput.addEventListener('keydown', onKeyDown)
  textinput.addEventListener('blur', createBlock)
  textinput.addEventListener('paste', onPaste)

  const focusTextInput = (event: Event) => {
    if (event.target === textinput || event.target === inputContainer)
      textinput.focus()
  }

  inputContainer.addEventListener('focus', focusTextInput)
  inputContainer.addEventListener('click', focusTextInput)

  inputContainer.append(textinput)

  const onRemove = (email: string) => {
    options.onChange && options.onChange('remove', email, getEmails())
  }

  const setEmails = (emails: string) => {
    if (!emails) return

    emails.split(',').forEach((v: string) => {
      const value = v.trim()
      if (value) {
        inputContainer.insertBefore(createEmailPill(value, onRemove), textinput)
        options.onChange && options.onChange('add', value, getEmails())
      }
    })

    getEmails()
  }

  const getEmails = () => {
    const elements = inputContainer.getElementsByClassName(
      'emails-editor__email-pill'
    )
    return Array.from(elements)
      .map(v => v.textContent)
      .filter((v): v is string => !!v)
  }

  return {
    container: inputContainer,
    setEmails,
    getEmails,
  }
}

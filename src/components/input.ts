import { createEmailPill } from './email-pill'
import { Options } from './options'

export const createInput = (options: Options) => {
  const inputContainer = document.createElement('div')
  inputContainer.className = 'emails-editor__input-container'

  const textInput = document.createElement('input')
  textInput.className = 'emails-editor__text-input'
  textInput.placeholder = 'add more people...'

  const createBlock = () => {
    const value = textInput.value.trim()

    if (value !== '') {
      setEmails(value)
      textInput.value = ''
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

  textInput.addEventListener('keydown', onKeyDown)
  textInput.addEventListener('blur', createBlock)
  textInput.addEventListener('paste', onPaste)

  const focusTextInput = (event: Event) => {
    if (event.target === textInput || event.target === inputContainer)
      textInput.focus()
  }

  inputContainer.addEventListener('focus', focusTextInput)
  inputContainer.addEventListener('click', focusTextInput)

  inputContainer.append(textInput)

  const onRemove = (email: string) => {
    options.onChange && options.onChange('remove', email, getEmails())
  }

  const setEmails = (emails: string) => {
    if (!emails) return

    emails.split(',').forEach((v: string) => {
      const value = v.trim()
      if (value) {
        inputContainer.insertBefore(createEmailPill(value, onRemove), textInput)
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

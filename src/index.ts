import { createPaper } from './components/paper'
import { Options, defaultOptions } from './components/options'

declare const window: any

export const EmailsEditor = (options: Options) => {
  const _options = { ...defaultOptions, ...options }
  const content = createPaper(_options)
  options.container.append(content.container)

  return {
    getEmails: content.getEmails,
    setEmails: content.setEmails,
  }
}

window.EmailsEditor = EmailsEditor

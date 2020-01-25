import { Options } from './options'

export const createHeading = (options: Options) => {
  const h2 = document.createElement('h2')
  h2.innerHTML = `Share <b>${options.title}</b> with others`
  h2.className = 'emails-editor__heading'

  return h2
}

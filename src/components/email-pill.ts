import { emailRegex } from './utils'

export const createEmailPill = (
  email: string,
  onRemove: (email: string) => void
) => {
  const emailPillContainer = document.createElement('span')
  emailPillContainer.className = 'emails-editor__email-pill'
  if (!emailRegex.exec(email)) {
    emailPillContainer.className =
      emailPillContainer.className + ' emails-editor__email-pill--invalid-email'
  }

  const emailText = document.createElement('span')
  emailText.append(email)
  emailText.className = 'emails-editor__email-text'
  emailPillContainer.append(emailText)

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('class', 'emails-editor__close-svg')
  svg.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L4.2218 5.63602L5.63602 4.2218L12 10.5858L18.3639 4.2218L19.7782 5.63602L13.4142 12L19.7782 18.3639L18.3639 19.7782L12 13.4142L5.63602 19.7782L4.2218 18.3639L10.5858 12Z" />`

  const onClick = (event: Event) => {
    event.preventDefault()
    emailPillContainer.remove()
    onRemove(email)
  }

  svg.addEventListener('click', onClick)

  emailPillContainer.append(svg)

  return emailPillContainer
}

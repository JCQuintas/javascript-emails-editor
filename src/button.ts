export const createButton = (text: string, onClick: () => void) => {
  const button = document.createElement('button')
  button.innerText = text
  button.className = 'emails-editor__button'

  button.addEventListener('click', onClick)
  return button
}

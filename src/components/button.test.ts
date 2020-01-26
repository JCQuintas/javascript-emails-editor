import { createButton } from './button'

describe('createButton', () => {
  it('returns a button', () => {
    const button = createButton('test text', () => {})

    expect(button).not.toBeNull()
    expect(button.tagName).toBe('BUTTON')
  })

  it('has the correct text when created', () => {
    const button = createButton('test text', () => {})

    expect(button.innerText).toBe('test text')
  })

  it('has the correct class when created', () => {
    const button = createButton('test text', () => {})

    expect(button.className).toBe('emails-editor__button')
  })

  it('performs the onClick action correctly', () => {
    let isClicked = false
    const button = createButton('test text', () => {
      isClicked = true
    })

    button.click()
    expect(isClicked).toBe(true)
  })
})

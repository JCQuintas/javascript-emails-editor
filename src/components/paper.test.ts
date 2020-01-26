import { createPaper } from './paper'
import { defaultOptions } from './options'
import { emailRegex } from './utils'

const options = { ...defaultOptions, container: {} as any }

describe('createPaper', () => {
  it('returns an object with the correct types', () => {
    const { container, getEmails, setEmails } = createPaper(options)

    expect(container).not.toBeNull()
    expect(container.tagName).toBe('DIV')
    expect(typeof getEmails).toBe('function')
    expect(typeof setEmails).toBe('function')
  })

  it('has the correct classes', () => {
    const { container } = createPaper(options)

    expect(container.className).toBe('emails-editor__paper')
    expect(container.firstElementChild?.className).toBe(
      'emails-editor__content-section'
    )
    expect(container.lastElementChild?.className).toBe(
      'emails-editor__button-section'
    )
  })

  it('adds a random email when clicking "Add email"', () => {
    const { container, getEmails } = createPaper(options)

    const button: HTMLButtonElement = container.lastElementChild
      ?.firstElementChild as any

    button.click()

    expect(getEmails()[0]).toMatch(emailRegex)
  })

  it('gets the email count when clicking "Get emails count"', () => {
    const { container, getEmails } = createPaper(options)

    window.alert = jest.fn()

    const setButton: HTMLButtonElement = container.lastElementChild
      ?.firstElementChild as any

    setButton.click()
    setButton.click()
    setButton.click()

    const button: HTMLButtonElement = container.lastElementChild
      ?.lastElementChild as any

    button.click()

    expect(window.alert).toHaveBeenCalledWith(`There are 3 valid emails.`)
  })
})

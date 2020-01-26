import { createInput } from './input'
import { defaultOptions } from './options'

const options = { ...defaultOptions, container: {} as any }

describe('createInput', () => {
  it('returns an object with the correct types', () => {
    const { container, getEmails, setEmails } = createInput(options)

    expect(container).not.toBeNull()
    expect(container.tagName).toBe('DIV')
    expect(typeof getEmails).toBe('function')
    expect(typeof setEmails).toBe('function')
  })

  it('has the correct class when created', () => {
    const { container } = createInput(options)

    expect(container.className).toBe('emails-editor__input-container')
  })

  it('correctly sets and gets a single email using the provided functions', () => {
    const { setEmails, getEmails } = createInput(options)

    setEmails('single@mail.com')

    expect(getEmails()).toStrictEqual(['single@mail.com'])
  })

  it('correctly sets and gets multiple emails using the provided functions', () => {
    const { setEmails, getEmails } = createInput(options)

    setEmails('single@mail.com, another@mail.com')

    expect(getEmails()).toStrictEqual(['single@mail.com', 'another@mail.com'])
  })

  it('correctly parses pasted text data', () => {
    const { container, getEmails } = createInput(options)

    const anyWindow = window as any

    anyWindow.clipboardData = {
      getData: jest.fn(() => 'single@mail.com, another@mail.com'),
    }

    container.getElementsByTagName('input')[0].dispatchEvent(new Event('paste'))

    expect(getEmails()).toStrictEqual(['single@mail.com', 'another@mail.com'])
  })

  it("doesn't set empty strings using setEmails", () => {
    const { setEmails, getEmails } = createInput(options)

    //@ts-ignore
    setEmails()
    setEmails(' ')
    setEmails(' ,')

    expect(getEmails()).toStrictEqual([])
  })

  it('creates an email when blurring the input', () => {
    const { container, getEmails } = createInput(options)

    const input = container.getElementsByTagName('input')[0]

    input.value = 'single@mail.com'
    input.dispatchEvent(new FocusEvent('blur'))
    input.value = ''
    input.dispatchEvent(new FocusEvent('blur'))

    expect(getEmails()).toStrictEqual(['single@mail.com'])
  })

  it('creates an email when pressing enter', () => {
    const { container, getEmails } = createInput(options)

    const input = container.getElementsByTagName('input')[0]

    input.value = 'single@mail.com'
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))

    expect(getEmails()).toStrictEqual(['single@mail.com'])
  })

  it('creates an email when pressing comma', () => {
    const { container, getEmails } = createInput(options)

    const input = container.getElementsByTagName('input')[0]

    input.value = 'single@mail.com'
    input.dispatchEvent(new KeyboardEvent('keydown', { key: ',' }))

    expect(getEmails()).toStrictEqual(['single@mail.com'])
  })

  it('adds to the value string when pressing any other key', () => {
    const { container, getEmails } = createInput(options)

    const input = container.getElementsByTagName('input')[0]

    input.value = 'single@mail.com'
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'x' }))

    expect(getEmails()).toStrictEqual([])
  })

  it('input get focus when clicked on the container', () => {
    const { container } = createInput(options)

    document.body.append(container)

    container.dispatchEvent(
      new FocusEvent('focus', { relatedTarget: container })
    )
    const input = container.getElementsByTagName('input')[0]

    expect(document.activeElement).toBe(input)
  })

  it('calls onRemove when an email is removed', () => {
    let removeData = {}
    const { container, setEmails } = createInput({
      ...options,
      onChange: (type: string, email: string, currentEmails: string[]) => {
        removeData = {
          type,
          email,
          currentEmails,
        }
      },
    })

    setEmails('single@mail.com')

    const button: HTMLButtonElement = container.getElementsByClassName(
      'emails-editor__close-button'
    )[0] as any
    button.click()

    expect(removeData).toStrictEqual({
      type: 'remove',
      email: 'single@mail.com',
      currentEmails: [],
    })
  })
})

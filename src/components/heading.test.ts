import { createHeading } from './heading'
import { defaultOptions } from './options'

const options = { ...defaultOptions, container: {} as any }

describe('createHeading', () => {
  it('returns a h2', () => {
    const h2 = createHeading(options)

    expect(h2).not.toBeNull()
    expect(h2.tagName).toBe('H2')
  })

  it('has the correct text when created', () => {
    const h2 = createHeading(options)

    expect(h2.innerHTML).toBe(`Share <b>${options.title}</b> with others`)
  })

  it('has the correct class when created', () => {
    const h2 = createHeading(options)

    expect(h2.className).toBe('emails-editor__heading')
  })
})

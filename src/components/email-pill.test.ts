import { createEmailPill } from './email-pill'

describe('createEmailPill', () => {
  it('returns a span', () => {
    const span = createEmailPill('good@email.com', () => {})

    expect(span).not.toBeNull()
    expect(span.tagName).toBe('SPAN')
  })

  it('has the correct class when created with a good email', () => {
    const span = createEmailPill('good@email.com', () => {})

    expect(span.className).toBe('emails-editor__email-pill')
  })

  it('has the "invalid-email" class when created with a bad email', () => {
    const span = createEmailPill('bad-email.com', () => {})

    expect(span.className).toBe(
      'emails-editor__email-pill emails-editor__email-pill--invalid-email'
    )
  })

  it('has the correct text when created', () => {
    const span = createEmailPill('good@email.com', () => {})

    expect(
      span.getElementsByClassName('emails-editor__email-text')[0].innerHTML
    ).toBe('good@email.com')
  })

  it('performs the onRemove action correctly', () => {
    let removedEmail = ''
    const span = createEmailPill('good@email.com', (email: string) => {
      removedEmail = email
    })

    const closeButton: HTMLButtonElement = Array.from(span.children).slice(
      -1
    )[0] as any

    closeButton.click()

    expect(removedEmail).toBe('good@email.com')
  })
})

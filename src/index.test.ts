import { EmailsEditor } from './index'
import { defaultOptions } from './components/options'

const root = document.createElement('div')

const options = { ...defaultOptions, container: root }

describe('createButton', () => {
  it('returns an object with the correct types', () => {
    const { getEmails, setEmails } = EmailsEditor(options)

    expect(typeof getEmails).toBe('function')
    expect(typeof setEmails).toBe('function')
  })
})

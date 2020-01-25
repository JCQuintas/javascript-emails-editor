import { Options } from './options'
import { createHeading } from './heading'
import { createInput } from './input'
import { createButton } from './button'
import { emailRegex } from './utils'

export const createPaper = (options: Options) => {
  const div = document.createElement('div')
  div.className = 'emails-editor__paper'
  const contentSection = document.createElement('div')
  contentSection.append(createHeading(options))

  const { container: inputBlock, getEmails, setEmails } = createInput(options)

  contentSection.append(inputBlock)
  contentSection.className = 'emails-editor__content-section'

  const buttonSection = document.createElement('div')
  buttonSection.className = 'emails-editor__button-section'

  const addEmail = () => {
    setEmails(`email${Math.ceil(Math.random() * 10000)}@anymail.com`)
  }

  const getEmailsCount = () => {
    window.alert(
      `There are ${
        getEmails().filter(v => !!emailRegex.exec(v)).length
      } valid emails.`
    )
  }

  buttonSection.append(createButton('Add email', addEmail))
  buttonSection.append(createButton('Get emails count', getEmailsCount))

  div.append(contentSection)
  div.append(buttonSection)

  return {
    container: div,
    getEmails,
    setEmails,
  }
}

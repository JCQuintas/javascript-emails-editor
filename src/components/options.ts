export interface Options {
  container: HTMLElement
  title?: string
  onChange?: (
    type: 'add' | 'remove',
    email: string,
    currentEmails: string[]
  ) => void
}

export const defaultOptions: Partial<Options> = {
  title: 'Blank',
}

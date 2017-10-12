import validator from 'validator'

export const isEmpty = (text: string) =>
  validator.isEmpty(text)
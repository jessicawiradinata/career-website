/**
 * A collection of methods to validate fields in Post Form component
 */
import validator from 'validator'

export const isEmpty = (text: string) =>
  validator.isEmpty(text)
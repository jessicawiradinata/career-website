/**
 * A collection of methods to validate input
 */
import validator from 'validator'

/**
 * Validates whether the text is a valid email address
 * @param text email to be validated
 * @return true if text is a valid email, false otherwise
 */
export const validateEmail = (text: string) => validator.isEmail(text)

/**
 * Validates whether the text is a valid password
 * @param text password to be validated
 * @return true if text is a valid password, false otherwise
 */
export const validatePassword = (text: string) => validator.isLength(text, { min: 6, max: 20 })

/**
 * Validates whether the text is a valid name
 * @param name name to be validated
 * @return true if text is a valid name, false otherwise
 */
export const validateName = (text: string) => validator.isLength(text, { min: 3, max: 70 })

/**
 * Validates whether a text is valid by checking whether it is not empty
 * @param text string to be validated
 * @return true if text is not empty, false if text is empty
 */
export const validateEmpty = (text: string) => !validator.isEmpty(text)
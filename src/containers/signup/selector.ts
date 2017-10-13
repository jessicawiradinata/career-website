/**
 * A selector which fetches data from redux store and maps it as a props for Signup page
 */
import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

/**
 * Props that will be used by the login page and their types
 */
interface StateProps {
  isSignupProcessing: boolean
  isSignupSuccess: boolean
  validEmail: boolean
  validPassword: boolean
  validName: boolean
}

/**
 * Takes states from the redux store and maps them as props for the Signup page
 * @param state state from redux store
 */
const isSignupProcessing = (state: State) => state.authentication.isSignupProcessing
const isSignupSuccess = (state: State) => state.authentication.isSignupSuccess
const validEmail = (state: State) => state.validation.signupValidation.validSignupEmail
const validPassword = (state: State) => state.validation.signupValidation.validSignupPassword
const validName = (state: State) => state.validation.signupValidation.validSignupName

/**
 * Exports props to be used by the Signup page
 */
export default createStructuredSelector<State, StateProps>({
  isSignupProcessing,
  isSignupSuccess,
  validEmail,
  validPassword,
  validName,
})

import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  isSignupProcessing: boolean
  isSignupSuccess: boolean
  validEmail: boolean
  validPassword: boolean
  validName: boolean
}

const isSignupProcessing = (state: State) => state.authentication.isSignupProcessing
const isSignupSuccess = (state: State) => state.authentication.isSignupSuccess
const validEmail = (state: State) => state.validation.signupValidation.validSignupEmail
const validPassword = (state: State) => state.validation.signupValidation.validSignupPassword
const validName = (state: State) => state.validation.signupValidation.validSignupName

export default createStructuredSelector<State, StateProps>({
  isSignupProcessing,
  isSignupSuccess,
  validEmail,
  validPassword,
  validName,
})

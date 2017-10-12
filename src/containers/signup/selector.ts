import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  signupStatus: boolean
  validEmail: boolean
  validPassword: boolean
  validName: boolean
}

const signupStatus = (state: State) => state.user.signupStatus
const validEmail = (state: State) => state.validation.signupValidation.validSignupEmail
const validPassword = (state: State) => state.validation.signupValidation.validSignupPassword
const validName = (state: State) => state.validation.signupValidation.validSignupName

export default createStructuredSelector<State, StateProps>({
  signupStatus,
  validEmail,
  validPassword,
  validName,
})

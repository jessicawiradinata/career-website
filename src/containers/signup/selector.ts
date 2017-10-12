import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  signupStatus: boolean
  validEmail: boolean
  validPassword: boolean
}

const signupStatus = (state: State) => state.user.signupStatus
const validEmail = (state: State) => state.validation.signupValidation.validSignupEmail
const validPassword = (state: State) => state.validation.signupValidation.validSignupPassword

export default createStructuredSelector<State, StateProps>({
  signupStatus,
  validEmail,
  validPassword,
})

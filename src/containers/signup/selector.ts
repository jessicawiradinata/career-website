import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  signupStatus: boolean
  validEmail: boolean
}

const signupStatus = (state: State) => state.user.signupStatus
const validEmail = (state: State) => state.validation.signupValidation.validSignupEmail

export default createStructuredSelector<State, StateProps>({
  signupStatus,
  validEmail,
})

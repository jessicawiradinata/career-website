import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  loginStatus: boolean
  validEmail: boolean
  validPassword: boolean
}

const loginStatus = (state: State) => state.authentication.loginStatus
const validEmail = (state: State) => state.validation.loginValidation.validEmail
const validPassword = (state: State) => state.validation.loginValidation.validPassword

export default createStructuredSelector<State, StateProps>({
  loginStatus,
  validEmail,
  validPassword,
})

import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  isLoginProcessing: boolean
  isLoginSuccess: boolean
  validEmail: boolean
  validPassword: boolean
}

const isLoginProcessing = (state: State) => state.authentication.isLoginProcessing
const isLoginSuccess = (state: State) => state.authentication.isLoginSuccess
const validEmail = (state: State) => state.validation.loginValidation.validEmail
const validPassword = (state: State) => state.validation.loginValidation.validPassword

export default createStructuredSelector<State, StateProps>({
  validEmail,
  validPassword,
  isLoginProcessing,
  isLoginSuccess,
})

import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  loginStatus: boolean
  validEmail: boolean
}

const loginStatus = (state: State) => state.authentication.loginStatus
const validEmail = (state: State) => state.validation.loginValidation.validEmail

export default createStructuredSelector<State, StateProps>({
  loginStatus,
  validEmail,
})

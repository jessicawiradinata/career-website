import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  loginStatus: boolean
}

const loginStatus = (state: State) => state.authentication.loginStatus

export default createStructuredSelector<State, StateProps>({
  loginStatus,
})

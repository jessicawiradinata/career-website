import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  signupStatus: boolean
}

const signupStatus = (state: State) => state.user.signupStatus

export default createStructuredSelector<State, StateProps>({
  signupStatus,
})

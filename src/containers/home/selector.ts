import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

const user = (state: State) => state.user.user

export default createStructuredSelector({
  user,
})
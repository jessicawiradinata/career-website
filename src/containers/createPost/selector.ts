import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'
import { User } from '../../domain/model/User'

interface StateProps {
  createPostStatus: any
  user: User
}

const createPostStatus = (state: State) => state.post.createPostStatus
const user = (state: State) => state.user.user

export default createStructuredSelector<State, StateProps>({
  createPostStatus,
  user,
})

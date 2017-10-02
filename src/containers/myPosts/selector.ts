import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'

interface StateProps {
  userPosts: any
  deletePostStatus: any
  user: any
}

const userPosts = (state: State) => state.user.userPosts
const deletePostStatus = (state: State) => state.post.deletePostStatus
const user = (state: State) => state.user.user

export default createStructuredSelector<State, StateProps>({
  userPosts,
  deletePostStatus,
  user,
})
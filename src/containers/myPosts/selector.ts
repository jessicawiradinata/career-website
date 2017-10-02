import { createStructuredSelector } from 'reselect'
import { State } from '../../store/State'
import { User } from '../../domain/model/User'
import { Post } from '../../domain/model/Post'

interface StateProps {
  userPosts: Post[]
  deletePostStatus: boolean
  user: User
}

const userPosts = (state: State) => state.user.userPosts
const deletePostStatus = (state: State) => state.post.deletePostStatus
const user = (state: State) => state.user.user

export default createStructuredSelector<State, StateProps>({
  userPosts,
  deletePostStatus,
  user,
})
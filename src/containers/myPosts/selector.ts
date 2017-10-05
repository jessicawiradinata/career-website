import { createStructuredSelector, createSelector } from 'reselect'
import { State } from '../../store/State'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import { filter } from 'lodash'

interface StateProps {
  userPosts: Post[]
  deletePostStatus: boolean
  user: User
}

const userPosts = createSelector(
  (state: State) => state.post.posts,
  (state: State) => localStorage.id,
  (posts: Post[], userId: string) => filter(posts, { 'authorId': userId }),
)

const user = (state: State) => state.user.user

const deletePostStatus = (state: State) => state.post.deletePostStatus

export default createStructuredSelector<State, StateProps>({
  userPosts,
  deletePostStatus,
  user,
})
import { createStructuredSelector, createSelector } from 'reselect'
import { State } from '../../store/State'
import { User } from '../../domain/model/User'
import { Post } from '../../domain/model/Post'
import { filter, find } from 'lodash'

interface StateProps {
  userPosts: Post[]
  deletePostStatus: boolean
  user: User | undefined
}

const userPosts = createSelector(
  (state: State) => state.post.posts,
  (state: State) => localStorage.id,
  (posts: Post[], userId: string) => filter(posts, { 'authorId': userId }),
)

const deletePostStatus = (state: State) => state.post.deletePostStatus

const user = createSelector(
  (state: State) => state.user.users,
  (state: State) => localStorage.id,
  (users: User[], userId: string) => find(users, { '_id': userId }),
)

export default createStructuredSelector<State, StateProps>({
  userPosts,
  deletePostStatus,
  user,
})
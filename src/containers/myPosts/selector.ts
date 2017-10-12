/**
 * A selector which fetches data from redux store and maps it as a props for My Posts page
 */
import { createStructuredSelector, createSelector } from 'reselect'
import { State } from '../../store/State'
import { Post } from '../../domain/model/Post'
import { User } from '../../domain/model/User'
import { filter } from 'lodash'

/**
 * Props that will be used by My Posts page and their types
 */
interface StateProps {
  userPosts: Post[]
  deletePostStatus: boolean
  user: User
}

/**
 * Gets all posts from redux store and takes those which is owned by the user
 */
const userPosts = createSelector(
  (state: State) => state.post.posts,
  (state: State) => localStorage.id,
  (posts: Post[], userId: string) => filter(posts, { 'authorId': userId }),
)

/**
 * Takes states from the redux store and maps it as a props for My Posts page
 * @param state state from redux store
 */
const user = (state: State) => state.user.user
const deletePostStatus = (state: State) => state.post.deletePostStatus

/**
 * Exports props to be used by My Posts page
 */
export default createStructuredSelector<State, StateProps>({
  userPosts,
  deletePostStatus,
  user,
})
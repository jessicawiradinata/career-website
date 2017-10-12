/**
 * A selector which fetches data from redux store and maps it as a props for Edit Post page
 */
import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'
import { State } from '../../store/State'
import { Post } from '../../domain/model/Post'

/**
 * Gets all posts from redux store and takes one which matches the ID requested from the URL
 */
const postDetails = createSelector(
  (state: State) => state.post.posts,
  (_: State, props: any) => props.match.params.postId,
  (userPosts: Post[], postId: string) => find(userPosts, { '_id': postId }),
)

/**
 * Takes states from the redux store and maps it as a props for Edit Post page
 * @param state state from redux store
 */
const user = (state: State) => state.user.user

/**
 * Exports props to be used by Edit Post page
 */
export default createStructuredSelector({
  postDetails,
  user,
})
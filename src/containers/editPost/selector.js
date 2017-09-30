import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'

const postDetailsStatus = state => state.post.postDetailsStatus

const postDetailsBackUp = state => state.post.postDetailsBackUp

const postDetails = createSelector(
  state => state.user.userPosts,
  (_, props) => props.match.params.postId,
  (userPosts, postId) => find(userPosts, { '_id': postId })
)

export default createStructuredSelector({
  postDetails,
  postDetailsStatus,
  postDetailsBackUp
})
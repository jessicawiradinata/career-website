import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout, deletePost, getUserPosts } from './Action'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
    deletePost,
    getUserPosts,
   }, dispatch),
)(MyPostsLayout)
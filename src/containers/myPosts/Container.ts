import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import { deletePost, getUserPosts } from './Action'
import { logout } from '../../actions/Authentication'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
    deletePost,
    getUserPosts,
   }, dispatch),
)(MyPostsLayout)
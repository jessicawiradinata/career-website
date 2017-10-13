/**
 * Connects My Posts page with the redux store and actions
 */
import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import selector from './selector'
import { logout, authenticate } from '../../actions/Authentication'
import { deletePost } from '../../actions/Post'

/**
 * Connects props from selector and actions to be used in My Posts page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    deletePost,
    logout,
    authenticate,
   }, dispatch),
)(MyPostsLayout as any)
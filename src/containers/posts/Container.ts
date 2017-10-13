/**
 * Connects posts page with the redux store and actions
 */
import { connect } from 'react-redux'
import PostsLayout from './Layout'
import selector from './selector'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'
import { deletePost } from '../../actions/Post'

/**
 * Connects props from selector and actions to be used in posts page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
    deletePost,
  }, dispatch),
)(PostsLayout as any)
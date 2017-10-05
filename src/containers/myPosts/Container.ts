import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import selector from './selector'
import { logout, authenticate } from '../../actions/Authentication'
import { deletePost } from '../../actions/Post'

export default connect(
  selector,
  dispatch => bindActionCreators({
    deletePost,
    logout,
    authenticate,
   }, dispatch),
)(MyPostsLayout as any)
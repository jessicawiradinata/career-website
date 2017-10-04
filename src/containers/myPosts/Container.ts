import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import { deletePost } from './Action'
import selector from './selector'
import { logout } from '../../actions/Authentication'

export default connect(
  selector,
  dispatch => bindActionCreators({
    deletePost,
    logout,
   }, dispatch),
)(MyPostsLayout as any)
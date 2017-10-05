import { connect } from 'react-redux'
import PostsLayout from './Layout'
import selector from './selector'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'
import { deletePost } from '../../actions/Post'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
    deletePost,
  }, dispatch),
)(PostsLayout as any)
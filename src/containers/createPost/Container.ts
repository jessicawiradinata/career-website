import { connect } from 'react-redux'
import CreatePostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { createPost } from './Action'
import selector from './selector'
import { logout, authenticate } from '../../actions/Authentication'

export default connect(
  selector,
  dispatch => bindActionCreators({
    createPost,
    logout,
    authenticate,
  }, dispatch),
)(CreatePostLayout as any)
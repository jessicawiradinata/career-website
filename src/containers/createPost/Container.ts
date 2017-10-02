import { connect } from 'react-redux'
import CreatePostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { createPost } from './Action'
import { logout } from '../../actions/Authentication'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    createPost,
    logout,
  }, dispatch),
)(CreatePostLayout as any)
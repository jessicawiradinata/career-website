import { connect } from 'react-redux'
import CreatePostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { createPost, logout } from './Action'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    createPost,
    logout,
  }, dispatch),
)(CreatePostLayout as any)
import { connect } from 'react-redux'
import EditPostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { updatePost } from './Action'
import selector from './selector'
import { logout } from '../../actions/Authentication'

export default connect(
  selector,
  dispatch => bindActionCreators({
    updatePost,
    logout,
  }, dispatch),
)(EditPostLayout as any)
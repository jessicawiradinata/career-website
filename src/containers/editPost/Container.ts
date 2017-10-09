import { connect } from 'react-redux'
import EditPostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { updatePost, checkLock } from './Action'
import selector from './selector'
import { logout, authenticate, authorize } from '../../actions/Authentication'

export default connect(
  selector,
  dispatch => bindActionCreators({
    updatePost,
    logout,
    authenticate,
    authorize,
    checkLock,
  }, dispatch),
)(EditPostLayout as any)
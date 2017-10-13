/**
 * Connects edit post page with the redux store and actions
 */
import { connect } from 'react-redux'
import EditPostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { updatePost } from './Action'
import selector from './selector'
import { logout, authenticate, authorize } from '../../actions/Authentication'
import { searchLocation } from '../../actions/Post'

/**
 * Connects props from selector and actions to be used in edit post page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    updatePost,
    logout,
    authenticate,
    authorize,
    searchLocation,
  }, dispatch),
)(EditPostLayout as any)
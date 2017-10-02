import { connect } from 'react-redux'
import EditPostLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout, getPostDetails, updatePost } from './Action'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
    getPostDetails,
    updatePost,
  }, dispatch),
)(EditPostLayout as any)
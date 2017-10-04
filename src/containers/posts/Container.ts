import { connect } from 'react-redux'
import PostsLayout from './Layout'
import selector from './selector'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
  }, dispatch),
)(PostsLayout as any)
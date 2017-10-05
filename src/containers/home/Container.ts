import { connect } from 'react-redux'
import HomeLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
  }, dispatch),
)(HomeLayout as any)
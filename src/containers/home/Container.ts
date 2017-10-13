/**
 * Connects home page with the redux store and actions
 */
import { connect } from 'react-redux'
import HomeLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'
import selector from './selector'

/**
 * Connects props from selector and actions to be used in home page
 */
export default connect(
  selector,
  dispatch => bindActionCreators({
    logout,
  }, dispatch),
)(HomeLayout as any)
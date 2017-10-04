import { connect } from 'react-redux'
import HomeLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Authentication'

export default connect(
  null,
  dispatch => bindActionCreators({
    logout,
  }, dispatch),
)(HomeLayout as any)
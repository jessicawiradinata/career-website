import { connect } from 'react-redux'
import HomeLayout from './Layout'
import { bindActionCreators } from 'redux'
import { logout } from './Action'

export default connect(
  null, dispatch => bindActionCreators({
    logout,
  }, dispatch),
)(HomeLayout)
import { connect } from 'react-redux'
import MyAccountLayout from './Layout'
import { bindActionCreators } from 'redux'
import Selector from './selector'
import { authenticate } from '../../actions/Authentication'
import { changePassword } from './Action'

export default connect(
  Selector,
  dispatch => bindActionCreators({
    authenticate,
    changePassword,
   }, dispatch),
)(MyAccountLayout as any)
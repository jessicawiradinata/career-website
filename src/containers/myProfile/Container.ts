import { connect } from 'react-redux'
import MyPostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import Selector from './selector'

export default connect(
  Selector,
  dispatch => bindActionCreators({
   }, dispatch),
)(MyPostsLayout as any)
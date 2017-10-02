import { connect } from 'react-redux'
import PostsLayout from './Layout'
import { bindActionCreators } from 'redux'
import { getPosts, getUsers } from './Action'
import { logout } from '../../actions/Authentication'
import selector from './selector'

export default connect(
  selector,
  dispatch => bindActionCreators({
    getPosts,
    getUsers,
    logout,
  }, dispatch),
)(PostsLayout)
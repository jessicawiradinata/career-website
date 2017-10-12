/**
 * Layout for My Account page
 */
import React, { Component } from 'react'
import { Paper, Avatar, RaisedButton, TextField } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
const collaboration = require('../../assets/collaboration.png')

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  user: User
  logout: (history: History) => void
  authenticate: (history: History) => void
  changePassword: (email: string, currentPass: string, newPass: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  currentPass: string,
  newPass: string,
  confirmNewPass: string,
}

export default class MyAccountLayout extends Component<Props, State> {

  /**
   * Initializes the My Account page states when it is first created
   * @param props props passed to this layout
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      currentPass: '',
      newPass: '',
      confirmNewPass: '',
    }
  }

  /**
   * Authenticates user when entering My Account page and redirects to home if user is not logged in
   */
  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  /**
   * Renders the My Account page layout
   */
  render() {
    const { history, logout, user, changePassword } = this.props
    const { currentPass, newPass } = this.state
    const isLoggedIn = localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin}/>
        <div style={styles.profileLayout as any}>
          <Avatar src={collaboration} size={100}/>
          <h3>Manage your account below</h3>
        </div>
        <h2 style={styles.titlePaper}>Change Password</h2>
        <Paper style={styles.profileContainer as any} zDepth={1}>
          <TextField
            floatingLabelText='Current Password'
            floatingLabelFixed={true}
            type='password'
            style={styles.textField}
            onChange={(currentPass: any) => this.setState({ currentPass: currentPass.target.value })}
          />
          <TextField
            floatingLabelText='New Password'
            floatingLabelFixed={true}
            type='password'
            style={styles.textField}
            onChange={(newPass: any) => this.setState({ newPass: newPass.target.value })}
          />
          <TextField
            floatingLabelText='Confirm New Password'
            floatingLabelFixed={true}
            type='password'
            style={styles.textField}
            onChange={(confirmNewPass: any) => this.setState({ confirmNewPass: confirmNewPass.target.value })}
          />
          <RaisedButton
            label='Update'
            primary={true}
            style={styles.editBtn}
            onClick={() => changePassword(user.email, currentPass, newPass)}
          />
        </Paper>

        <br/>
        <h2 style={styles.titlePaper}>Change Contact Details</h2>
        <Paper style={styles.profileContainer as any} zDepth={1}>
          <TextField
            floatingLabelText='Name'
            floatingLabelFixed={true}
            defaultValue={user.name}
            style={styles.textField}
          />
          <RaisedButton
            label='Update'
            primary={true}
            style={styles.editBtn}
          />
        </Paper>
      </div>
    )
  }
}
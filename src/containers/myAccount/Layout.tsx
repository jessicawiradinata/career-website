import React, { Component } from 'react'
import { Paper, Avatar, RaisedButton, TextField } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'

const collaboration = require('../../assets/collaboration.png')

interface Props {
  history: History
  user: User
  logout: (history: History) => void
  authenticate: (history: History) => void
}

interface State {
  currentPass: string,
  newPass: string,
  confirmNewPass: string,
}

export default class MyAccountLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      currentPass: '',
      newPass: '',
      confirmNewPass: '',
    }
  }

  componentWillMount() {
    const { authenticate, history } = this.props
    authenticate(history)
  }

  render() {
    const { history, logout, user } = this.props
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
        />
        <TextField
          floatingLabelText='New Password'
          floatingLabelFixed={true}
          type='password'
          style={styles.textField}
        />
        <TextField
          floatingLabelText='Confirm New Password'
          floatingLabelFixed={true}
          type='password'
          style={styles.textField}
        />
        <RaisedButton
          label='Update'
          primary={true}
          style={styles.editBtn}
        />
      </Paper>

      <br/>
      <h2 style={styles.titlePaper}>Change Contact Details </h2>
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
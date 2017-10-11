import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, Checkbox, Snackbar } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  loginStatus: boolean
  login: (email: string, password: string, history: History) => void
  resetPassword: (email: string) => void
}

interface State {
  email: string
  password: string
  isForgot: boolean
  showResetBar: boolean
}

export default class LoginLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isForgot: false,
      showResetBar: false,
    }
  }

  onSubmit = () => {
    const { isForgot, email, password } = this.state
    const { login, history, resetPassword } = this.props
    if (isForgot) {
      resetPassword(email)
      this.setState({
        isForgot: false,
        showResetBar: true,
      })
    } else {
      login(email, password, history)
    }
  }

  render() {
    const { loginStatus, history } = this.props
    const { isForgot, showResetBar, email } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.loginContainer as any} zDepth={1}>
          <h1>Login</h1>
          <TextField
            floatingLabelText='Email'
            style={styles.textField}
            onChange={(email) => this.setState({ email: (email.target as HTMLTextAreaElement).value })}
          />
          {!isForgot &&
            <TextField
              floatingLabelText='Password'
              type='password'
              style={styles.textField}
              onChange={(password) => this.setState({ password: (password.target as HTMLTextAreaElement).value })}
            />
          }
          <Checkbox
            label='Forgot Password'
            checked={isForgot}
            onCheck={() => this.setState({ isForgot: !isForgot })}
            style={styles.forgotField}
          />
          <RaisedButton
            label={isForgot ? 'Reset Password' : (loginStatus ? 'Loading...' : 'Login')}
            primary={true}
            style={styles.submitBtn}
            onClick={this.onSubmit}
          />
          <Snackbar
            open={showResetBar}
            message={`Password reset email has been sent to ${email}`}
            autoHideDuration={6000}
            onRequestClose={() => this.setState({ showResetBar: false })}
          />
        </Paper>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, Checkbox, Snackbar } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  loginStatus: boolean
  validEmail: boolean
  validPassword: boolean
  login: (email: string, password: string, history: History) => void
  resetPassword: (email: string) => void
  validateEmail: (email: string, page: string) => void
  isEmpty: (text: string, component: string) => void
}

interface State {
  email: string
  password: string
  isForgot: boolean
  showResetBar: boolean
  emailFocused: boolean
  passwordFocused: boolean
}

export default class LoginLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isForgot: false,
      showResetBar: false,
      emailFocused: false,
      passwordFocused: false,
    }
  }

  emailOnChange = (email: any) => {
    const { validateEmail } = this.props
    validateEmail(email.target.value, 'LOGIN')
    this.setState({ email: email.target.value })
  }

  emailOnBlur = () => {
    const { validateEmail } = this.props
    const { email } = this.state
    this.setState({ emailFocused: true })
    validateEmail(email, 'LOGIN')
  }

  passwordOnChange = (password: any) => {
    const { isEmpty } = this.props
    isEmpty(password.target.value, 'LOGIN_PASSWORD')
    this.setState({ password: password.target.value })
  }

  passwordOnBlur = () => {
    const { isEmpty } = this.props
    const { password } = this.state
    this.setState({ passwordFocused: true })
    isEmpty(password, 'LOGIN_PASSWORD')
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
    const { loginStatus, history, validEmail, validPassword } = this.props
    const { isForgot, showResetBar, email, emailFocused, passwordFocused } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.loginContainer as any} zDepth={1}>
          <h1>Login</h1>
          <TextField
            floatingLabelText='Email'
            style={styles.textField}
            onChange={this.emailOnChange}
            onBlur={this.emailOnBlur}
            errorText={validEmail || !emailFocused ? '' : 'Please enter a valid email'}
          />
          {!isForgot &&
            <TextField
              floatingLabelText='Password'
              type='password'
              style={styles.textField}
              onChange={this.passwordOnChange}
              onBlur={this.passwordOnBlur}
              errorText={validPassword || !passwordFocused ? '' : 'Password field cannot be empty'}
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
            disabled={isForgot ? (!validEmail || !emailFocused) : (!validEmail || !validPassword || !emailFocused || !passwordFocused)}
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
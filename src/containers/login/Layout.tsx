/**
 * Layout for login page
 */
import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, Checkbox, Snackbar } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  isLoginProcessing: boolean
  isLoginSuccess: boolean
  validEmail: boolean
  validPassword: boolean
  login: (email: string, password: string, history: History) => void
  resetPassword: (email: string) => void
  validateEmail: (email: string, page: string) => void
  isEmpty: (text: string, component: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  email: string
  password: string
  isForgot: boolean
  showResetBar: boolean
  emailFocused: boolean
  passwordFocused: boolean
}

export default class LoginLayout extends Component<Props, State> {

  /**
   * Initializes the login layout states when it is first created
   * @param props props passed to this layout
   */
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

  /**
   * Validates email field when text is changed
   * @param email email text input
   */
  emailOnChange = (email: any) => {
    const { validateEmail } = this.props
    validateEmail(email.target.value, 'LOGIN')
    this.setState({ email: email.target.value })
  }

  /**
   * Validates email field when it goes out of focus
   */
  emailOnBlur = () => {
    const { validateEmail } = this.props
    const { email } = this.state
    this.setState({ emailFocused: true })
    validateEmail(email, 'LOGIN')
  }

  /**
   * Validates password field when text is changed
   * @param password password text input
   */
  passwordOnChange = (password: any) => {
    const { isEmpty } = this.props
    isEmpty(password.target.value, 'LOGIN_PASSWORD')
    this.setState({ password: password.target.value })
  }

  /**
   * Validates password field when it goes out of focus
   */
  passwordOnBlur = () => {
    const { isEmpty } = this.props
    const { password } = this.state
    this.setState({ passwordFocused: true })
    isEmpty(password, 'LOGIN_PASSWORD')
  }

  /**
   * When submit button is clicked, log the user in or reset password according to checkbox selection
   */
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

  /**
   * Renders the login page layout
   */
  render() {
    const { history, validEmail, validPassword, isLoginProcessing, isLoginSuccess } = this.props
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
            label={isForgot ? 'Reset Password' : (isLoginProcessing ? 'Loading...' : 'Login')}
            primary={true}
            style={styles.submitBtn}
            onClick={this.onSubmit}
            disabled={isForgot ? (!validEmail || !emailFocused) : (!validEmail || !validPassword || !emailFocused || !passwordFocused)}
          />
          {!isLoginSuccess &&
            <text style={styles.errorText}>Login failed. Invalid email or password.</text>
          }
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
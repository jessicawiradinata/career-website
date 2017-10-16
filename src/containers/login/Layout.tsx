/**
 * Layout for login page
 */
import React, { Component } from 'react'
import { Paper, RaisedButton, Checkbox, Snackbar } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'
import { loginStrings } from '../../constants/strings'
import ValidationTextField from '../../components/ValidationTextField/ValidationTextField'
import { validateEmail, validateEmpty } from '../../actions/Validation'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  isLoginProcessing: boolean
  isLoginSuccess: boolean
  authenticateLoggedIn: (history: History) => void
  login: (email: string, password: string, history: History) => void
  resetPassword: (email: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  email: string
  password: string
  isForgot: boolean
  showResetBar: boolean
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
    }
  }

  /**
   * Authenticates user when entering Login page and redirects to home if logged in
   */
  componentWillMount() {
    const { authenticateLoggedIn, history } = this.props
    authenticateLoggedIn(history)
  }

  /**
   * Disables submit button if there are error validation fields
   */
  disableSubmit = () => {
    const { email, password, isForgot } = this.state
    if (isForgot) {
      return !validateEmail(email)
    } else {
      return !validateEmail(email) || !validateEmpty(password)
    }
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
    const { history, isLoginProcessing, isLoginSuccess } = this.props
    const { isForgot, showResetBar, email, password } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.loginContainer as any} zDepth={1}>
          <h1>Login</h1>
          <ValidationTextField
            label={loginStrings.emailText}
            isFloatingLabelFixed={false}
            style={styles.textField}
            errorText={loginStrings.emailError}
            onChange={(event: any) => this.setState({ email: event.target.value })}
            validate={(text: string) => validateEmail(email)}
          />
          {!isForgot &&
            <ValidationTextField
              label={loginStrings.passwordText}
              isFloatingLabelFixed={false}
              style={styles.textField}
              errorText={loginStrings.passwordError}
              isPassword={true}
              onChange={(event: any) => this.setState({ password: event.target.value })}
              validate={(text: string) => validateEmpty(password)}
            />
          }
          <Checkbox
            label={loginStrings.forgotPassword}
            checked={isForgot}
            onCheck={() => this.setState({ isForgot: !isForgot })}
            style={styles.forgotField}
          />
          <div style={styles.registerLink}>
            {loginStrings.registerText} <a href='#' onClick={() => history.push('/signup')}> {loginStrings.registerLink}</a>
          </div>
          <RaisedButton
            label={isForgot ? loginStrings.resetPassword : (isLoginProcessing ? loginStrings.loadingText : loginStrings.loginText)}
            primary={true}
            style={styles.submitBtn}
            onClick={this.onSubmit}
            disabled={this.disableSubmit()}
          />
          {!isLoginSuccess &&
            <text style={styles.errorText}>{loginStrings.failedPasswordHint}</text>
          }
          <Snackbar
            open={showResetBar}
            message={`${loginStrings.resetPasswordHint} ${email}`}
            autoHideDuration={6000}
            onRequestClose={() => this.setState({ showResetBar: false })}
          />
        </Paper>
      </div>
    )
  }
}
/**
 * Layout for Signup page
 */
import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'
import { routeStrings, signupStrings } from '../../constants/strings'

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  isSignupProcessing: boolean
  isSignupSuccess: boolean
  validEmail: boolean
  validPassword: boolean
  validName: boolean
  authenticateLoggedIn: (history: History) => void
  signup: (email: string, password: string, name: string, history: History) => void
  validateEmail: (email: string, page: string) => void
  validatePassword: (password: string, page: string) => void
  validateName: (name: string, page: string) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {
  email: string
  password: string
  name: string
  emailFocused: boolean
  passwordFocused: boolean
  nameFocused: boolean
}

export default class SignupLayout extends Component<Props, State> {

  /**
   * Initializes Signup page states when it is first created
   * @param props props passed to Signup page
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      emailFocused: false,
      passwordFocused: false,
      nameFocused: false,
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
   * Validates email field when text is changed
   * @param email email text input
   */
  emailOnChange = (email: any) => {
    const { validateEmail } = this.props
    validateEmail(email.target.value, signupStrings.signupConst)
    this.setState({ email: email.target.value })
  }

  /**
   * Validates email field when it goes out of focus
   */
  emailOnBlur = () => {
    const { validateEmail } = this.props
    const { email } = this.state
    this.setState({ emailFocused: true })
    validateEmail(email, signupStrings.signupConst)
  }

  /**
   * Validates password field when text is changed
   * @param password password text input
   */
  passwordOnChange = (password: any) => {
    const { validatePassword } = this.props
    validatePassword(password.target.value, signupStrings.signupConst)
    this.setState({ password: password.target.value })
  }

  /**
   * Validates password field when it goes out of focus
   */
  passwordOnBlur = () => {
    const { validatePassword } = this.props
    const { password } = this.state
    this.setState({ passwordFocused: true })
    validatePassword(password, signupStrings.signupConst)
  }

  /**
   * Validates name field when text is changed
   * @param name name text input
   */
  nameOnChange = (name: any) => {
    const { validateName } = this.props
    validateName(name.target.value, signupStrings.signupConst)
    this.setState({ name: name.target.value })
  }

  /**
   * Validates name field when it goes out of focus
   */
  nameOnBlur = () => {
    const { validateName } = this.props
    const { name } = this.state
    this.setState({ nameFocused: true })
    validateName(name, signupStrings.signupConst)
  }

  /**
   * Renders Signup page layout
   */
  render() {
    const { signup, history, validEmail, validPassword, validName, isSignupProcessing, isSignupSuccess } = this.props
    const { emailFocused, passwordFocused, nameFocused } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.signupContainer as any} zDepth={1}>
          <h1>{signupStrings.signupText}</h1>
          <TextField
            floatingLabelText={signupStrings.emailText}
            style={styles.textField}
            onChange={this.emailOnChange}
            onBlur={this.emailOnBlur}
            errorText={validEmail || !emailFocused ? '' : signupStrings.emailHint}
          />
          <TextField
            floatingLabelText={signupStrings.passwordText}
            type={signupStrings.passwordText}
            style={styles.textField}
            onChange={this.passwordOnChange}
            onBlur={this.passwordOnBlur}
            errorText={validPassword || !passwordFocused ? '' : signupStrings.passwordHint}
          />
          <TextField
            floatingLabelText={signupStrings.nameText}
            style={styles.textField}
            onChange={this.nameOnChange}
            onBlur={this.nameOnBlur}
            errorText={validName || !nameFocused ? '' : signupStrings.nameHint}
          />
          <div style={styles.loginLink}>
            {signupStrings.logintext} <a href='#' onClick={() => history.push(routeStrings.loginRoute)}> {signupStrings.loginLink}</a>
          </div>
          <RaisedButton
            label={isSignupProcessing ? signupStrings.loadingText : signupStrings.signupText}
            primary={true}
            style={styles.submitBtn}
            onClick={() => signup(this.state.email, this.state.password, this.state.name, this.props.history)}
            disabled={!validEmail || !validPassword || !validName || !emailFocused || !passwordFocused || !nameFocused}
          />
          {!isSignupSuccess &&
            <text style={styles.errorText}>{signupStrings.failedSignup}</text>
          }
        </Paper>
      </div>
    )
  }
}
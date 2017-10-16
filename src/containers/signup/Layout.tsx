/**
 * Layout for Signup page
 */
import React, { Component } from 'react'
import { Paper, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'
import { signupStrings } from '../../constants/strings'
import ValidationTextField from '../../components/ValidationTextField/ValidationTextField'
import { validateEmail, validatePassword, validateName } from '../../actions/Validation'

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
}

/**
 * All states owned by this layout and their types
 */
interface State {
  email: string
  password: string
  name: string
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
    }
  }

  /**
   * Authenticates user when entering Login page and redirects to home if logged in
   */
  componentWillMount() {
    const { authenticateLoggedIn, history } = this.props
    authenticateLoggedIn(history)
  }

  disableSubmitButton = () => {
    const { email, password, name } = this.state
    return !validateEmail(email) || !validatePassword(password) || !validateName(name)
  }

  /**
   * Renders Signup page layout
   */
  render() {
    const { signup, history, isSignupProcessing, isSignupSuccess } = this.props

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.signupContainer as any} zDepth={1}>
          <h1>{signupStrings.signupText}</h1>
          <ValidationTextField
            label={signupStrings.emailText}
            isFloatingLabelFixed={false}
            style={styles.textField}
            errorText={signupStrings.emailError}
            onChange={(event: any) => this.setState({ email: event.target.value })}
            validate={(text: string) => validateEmail(text)}
          />
          <ValidationTextField
            label={signupStrings.passwordText}
            isFloatingLabelFixed={false}
            style={styles.textField}
            isPassword={true}
            errorText={signupStrings.passwordError}
            maxLength='20'
            onChange={(event: any) => this.setState({ password: event.target.value })}
            validate={(text: string) => validatePassword(text)}
          />
          <ValidationTextField
            label={signupStrings.nameText}
            isFloatingLabelFixed={false}
            style={styles.textField}
            value={name}
            errorText={signupStrings.nameError}
            maxLength='70'
            onChange={(event: any) => this.setState({ name: event.target.value })}
            validate={(text: string) => validateName(text)}
          />
          <div style={styles.loginLink}>
            {signupStrings.logintext} <a href='#' onClick={() => history.push('/login')}> {signupStrings.loginLink}</a>
          </div>
          <RaisedButton
            label={isSignupProcessing ? signupStrings.loadingText : signupStrings.signupText}
            primary={true}
            style={styles.submitBtn}
            onClick={() => signup(this.state.email, this.state.password, this.state.name, this.props.history)}
            disabled={this.disableSubmitButton()}
          />
          {!isSignupSuccess &&
            <text style={styles.errorText}>{signupStrings.failedSignup}</text>
          }
        </Paper>
      </div>
    )
  }
}
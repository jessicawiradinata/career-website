import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'
import { strings } from './strings'

interface Props {
  history: History
  isSignupProcessing: boolean
  isSignupSuccess: boolean
  validEmail: boolean
  validPassword: boolean
  validName: boolean
  signup: (email: string, password: string, name: string, history: History) => void
  validateEmail: (email: string, page: string) => void
  validatePassword: (password: string, page: string) => void
  validateName: (name: string, page: string) => void
}

interface State {
  email: string
  password: string
  name: string
  emailFocused: boolean
  passwordFocused: boolean
  nameFocused: boolean
}

export default class SignupLayout extends Component<Props, State> {
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

  emailOnChange = (email: any) => {
    const { validateEmail } = this.props
    validateEmail(email.target.value, strings.signupConst)
    this.setState({ email: email.target.value })
  }

  emailOnBlur = () => {
    const { validateEmail } = this.props
    const { email } = this.state
    this.setState({ emailFocused: true })
    validateEmail(email, strings.signupConst)
  }

  passwordOnChange = (password: any) => {
    const { validatePassword } = this.props
    validatePassword(password.target.value, strings.signupConst)
    this.setState({ password: password.target.value })
  }

  passwordOnBlur = () => {
    const { validatePassword } = this.props
    const { password } = this.state
    this.setState({ passwordFocused: true })
    validatePassword(password, strings.signupConst)
  }

  nameOnChange = (name: any) => {
    const { validateName } = this.props
    validateName(name.target.value, strings.signupConst)
    this.setState({ name: name.target.value })
  }

  nameOnBlur = () => {
    const { validateName } = this.props
    const { name } = this.state
    this.setState({ nameFocused: true })
    validateName(name, strings.signupConst)
  }

  render() {
    const { signup, history, validEmail, validPassword, validName, isSignupProcessing, isSignupSuccess } = this.props
    const { emailFocused, passwordFocused, nameFocused } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.signupContainer as any} zDepth={1}>
          <h1>Sign Up</h1>
          <TextField
            floatingLabelText={strings.emailText}
            style={styles.textField}
            onChange={this.emailOnChange}
            onBlur={this.emailOnBlur}
            errorText={validEmail || !emailFocused ? '' : strings.emailHint}
          />
          <TextField
            floatingLabelText={strings.passwordText}
            type={strings.passwordText}
            style={styles.textField}
            onChange={this.passwordOnChange}
            onBlur={this.passwordOnBlur}
            errorText={validPassword || !passwordFocused ? '' : strings.passwordHint}
          />
          <TextField
            floatingLabelText={strings.nameText}
            style={styles.textField}
            onChange={this.nameOnChange}
            onBlur={this.nameOnBlur}
            errorText={validName || !nameFocused ? '' : strings.nameHint}
          />
          <RaisedButton
            label={isSignupProcessing ? strings.loadingText : strings.signupText}
            primary={true}
            style={styles.submitBtn}
            onClick={() => signup(this.state.email, this.state.password, this.state.name, this.props.history)}
            disabled={!validEmail || !validPassword || !validName || !emailFocused || !passwordFocused || !nameFocused}
          />
          {!isSignupSuccess &&
            <text style={styles.errorText}>Signup failed. Unable to connect to the server.</text>
          }
        </Paper>
      </div>
    )
  }
}
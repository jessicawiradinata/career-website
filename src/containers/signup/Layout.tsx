import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  signupStatus: boolean
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
    validateEmail(email.target.value, 'SIGNUP')
    this.setState({ email: email.target.value })
  }

  emailOnBlur = () => {
    const { validateEmail } = this.props
    const { email } = this.state
    this.setState({ emailFocused: true })
    validateEmail(email, 'SIGNUP')
  }

  passwordOnChange = (password: any) => {
    const { validatePassword } = this.props
    validatePassword(password.target.value, 'SIGNUP')
    this.setState({ password: password.target.value })
  }

  passwordOnBlur = () => {
    const { validatePassword } = this.props
    const { password } = this.state
    this.setState({ passwordFocused: true })
    validatePassword(password, 'SIGNUP')
  }

  nameOnChange = (name: any) => {
    const { validateName } = this.props
    validateName(name.target.value, 'SIGNUP')
    this.setState({ name: name.target.value })
  }

  nameOnBlur = () => {
    const { validateName } = this.props
    const { name } = this.state
    this.setState({ nameFocused: true })
    validateName(name, 'SIGNUP')
  }

  render() {
    const { signupStatus, signup, history, validEmail, validPassword, validName } = this.props
    const { emailFocused, passwordFocused, nameFocused } = this.state

    return (
      <div>
        <Header history={history} isLoggedIn={false} isAdmin={false} />
        <Paper style={styles.signupContainer as any} zDepth={1}>
          <h1>Sign Up</h1>
          <TextField
            floatingLabelText='Email'
            style={styles.textField}
            onChange={this.emailOnChange}
            onBlur={this.emailOnBlur}
            errorText={validEmail || !emailFocused ? '' : 'Please enter a valid email'}
          />
          <TextField
            floatingLabelText='Password'
            type='password'
            style={styles.textField}
            onChange={this.passwordOnChange}
            onBlur={this.passwordOnBlur}
            errorText={validPassword || !passwordFocused ? '' : 'Password length has to be between 6 - 20 characters'}
          />
          <TextField
            floatingLabelText='Name'
            style={styles.textField}
            onChange={this.nameOnChange}
            onBlur={this.nameOnBlur}
            errorText={validName || !nameFocused ? '' : 'Name length has to be between 3 - 70 characters'}
          />
          <RaisedButton
            label={signupStatus ? 'Loading...' : 'Sign Up'}
            primary={true}
            style={styles.submitBtn}
            onClick={() => signup(this.state.email, this.state.password, this.state.name, this.props.history)}
          />
        </Paper>
      </div>
    )
  }
}
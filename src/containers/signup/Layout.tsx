import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { styles } from './styles'

interface Props {
  history: History
  signupStatus: boolean
  validEmail: boolean
  signup: (email: string, password: string, name: string, history: History) => any
  validateEmail: (email: string, page: string) => any
}

interface State {
  email: string
  password: string
  name: string
  emailFocused: boolean
}

export default class SignupLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      emailFocused: false,
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

  render() {
    const { signupStatus, signup, history, validEmail } = this.props
    const { emailFocused } = this.state

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
            onChange={(password) => this.setState({ password: (password.target as HTMLTextAreaElement).value })}
          />
          <TextField
            floatingLabelText='Name'
            style={styles.textField}
            onChange={(name) => this.setState({ name: (name.target as HTMLTextAreaElement).value })}
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
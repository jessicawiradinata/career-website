import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'
import Header from '../../components/Header'
import { History } from 'history'

interface Props {
  history: History
  signupStatus: boolean
  signup: (email: string, password: string, name: string, history: History) => any
}

interface State {
  email: string
  password: string
  name: string
}

export default class SignupLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }

  render() {
    const { signupStatus, signup, history } = this.props

    return (
      <div>
        <Header history={history} isLoggedIn={false} />
        <Paper style={styles.signupContainer as any} zDepth={1}>
          <h1>Sign Up</h1>
          <TextField
            floatingLabelText='Email'
            style={styles.textField}
            onChange={(email) => this.setState({ email: (email.target as HTMLTextAreaElement).value })}
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

const styles = {
  signupContainer: {
    margin: 20,
    padding: 40,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: '50%',
  },
  submitBtn: {
    marginTop: 40,
  },
}
import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'

export default class SignupLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  render() {
    const { signup, createUser } = this.props

    return (
      <Paper style={styles.signupContainer} zDepth={1}>
        <h1>Sign Up</h1>
        <TextField 
          floatingLabelText="Email" 
          style={styles.textField}
          onChange={(email) => this.setState({ email: email.target.value })}
        />
        <TextField 
          floatingLabelText="Password" 
          type="password" 
          style={styles.textField}
          onChange={(password) => this.setState({ password: password.target.value })}
        />
        <TextField 
          floatingLabelText="Name" 
          style={styles.textField}
          onChange={(name) => this.setState({ name: name.target.value })}
        />
        <RaisedButton 
          label={signup ? 'Loading...' : 'Sign Up'}
          primary={true} 
          style={styles.submitBtn} 
          onClick={createUser(this.state.email, this.state.password, this.state.name, this.props.history)}
        />
      </Paper>
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
    alignItems: 'center'
  },
  textField: {
    width: '40%',
  },
  submitBtn: {
    marginTop: 40,
  }
}
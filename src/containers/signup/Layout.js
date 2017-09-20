import React, { Component } from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui'

export default class SignupLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
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
        <RaisedButton 
          label="Sign Up"
          primary={true} 
          style={styles.submitBtn} 
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
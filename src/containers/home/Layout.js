import React, { Component } from 'react'
import { Paper, FlatButton } from 'material-ui'
import collaboration from '../../assets/collaboration.png'
import Header from '../../components/Header'

export default class HomeLayout extends Component {
  render() {
    const { history, logout } = this.props
    const isLoggedIn = localStorage.token != null
    return (
      <div style={styles.wholePage}>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} />
        <Paper style={styles.form} zDepth={1}>
        <h1>Welcome to Career Website</h1>
        <img src={collaboration} style={styles.picture} alt="Collaboration" />
        <p>We help you find the right internship opportunities</p>
        <FlatButton label="Find Internships" primary={true} />
        <FlatButton label="CW For Employers" secondary={true} />
      </Paper>
      </div>
    )
  }
}

const styles = {
  wholePage: {
    backgroundColor: '#ff0'
  },
  form: {
    margin: 40,
    padding: 40,
    textAlign: 'center'
  },
  picture: {
    height: 150,
    width: 150,
    margin: 20,
  }
}
import React, { Component } from 'react'
import { Paper, FlatButton } from 'material-ui'
import Header from '../../components/Header'
import { History } from 'history'
const collaboration = require('../../assets/collaboration.png')

interface Props {
  history: History,
  logout: (history: History) => any
}

interface State {}

export default class HomeLayout extends Component<Props, State> {
  render() {
    const { history, logout } = this.props
    const isLoggedIn = localStorage.token !== null
    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} />
        <Paper style={styles.form} zDepth={1}>
          <h1>Welcome to Career Website</h1>
          <img src={collaboration} style={styles.picture} alt='Collaboration' />
          <p>We help you find the right internship opportunities</p>
          <FlatButton label='Find Internships' primary={true} onClick={() => history.push('/internships')} />
          <FlatButton label='CW For Employers' secondary={true} />
        </Paper>
      </div>
    )
  }
}

const styles = {
  form: {
    margin: 40,
    padding: 40,
    textAlign: 'center',
  },
  picture: {
    height: 150,
    width: 150,
    margin: 20,
  },
}
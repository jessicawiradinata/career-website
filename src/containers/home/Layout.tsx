import React, { Component } from 'react'
import { Paper, FlatButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
const collaboration = require('../../assets/collaboration.png')

interface Props {
  history: History
  user: User
  logout: (history: History) => void
}

interface State {}

export default class HomeLayout extends Component<Props, State> {
  render() {
    const { history, logout, user } = this.props
    const isLoggedIn = localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} />
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
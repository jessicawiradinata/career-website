/**
 * Layout for home page
 */
import React, { Component } from 'react'
import { Paper, FlatButton } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
import { strings } from './strings'
const collaboration = require('../../assets/collaboration.png')

/**
 * Props that can be passed to this layout and their types
 */
interface Props {
  history: History
  user: User
  logout: (history: History) => void
}

/**
 * All states owned by this layout and their types
 */
interface State {}

export default class HomeLayout extends Component<Props, State> {

  /**
   * Renders the home page layout
   */
  render() {
    const { history, logout, user } = this.props
    const isLoggedIn = localStorage.token !== undefined
    const isAdmin = user ? user.isAdmin : false

    return (
      <div>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} />
        <Paper style={styles.form} zDepth={1}>
          <h1>{strings.homeTitle}</h1>
          <img src={collaboration} style={styles.picture} alt={strings.collaboration} />
          <p>{strings.homeSubtitle}</p>
          <FlatButton label={strings.findInternship} primary={true} onClick={() => history.push('/internships')} />
          <FlatButton label={strings.employerLabel} secondary={true} />
        </Paper>
      </div>
    )
  }
}
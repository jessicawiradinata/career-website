/**
 * Layout for home page
 */
import React, { Component } from 'react'
import { RaisedButton, Paper } from 'material-ui'
import Header from '../../components/Header/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'
import { styles } from './styles'
import { homeStrings } from '../../constants/strings'

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
      <div style={styles.homeContainer}>
        <Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin} isHome={true} />
        <div style={styles.welcomeContainer as any}>
          <Paper style={styles.form as any} zDepth={0}>
            <h1 style={styles.titleText as any}>{homeStrings.homeTitle}</h1>
            <p style={styles.subtitleText}>{homeStrings.homeSubtitle}</p>
            <RaisedButton
              label={homeStrings.findInternship}
              primary
              buttonStyle={styles.buttonShape}
              overlayStyle={styles.buttonShape}
              style={styles.button}
              fullWidth
              onClick={() => history.push('/internships')}
            />
            {!isLoggedIn &&
            <RaisedButton
              label={homeStrings.employerLabel}
              secondary
              buttonStyle={styles.buttonShape}
              overlayStyle={styles.buttonShape}
              style={styles.button}
              fullWidth
              onClick={() => history.push('/signup')}
            />
            }
          </Paper>
        </div>
      </div>
    )
  }
}
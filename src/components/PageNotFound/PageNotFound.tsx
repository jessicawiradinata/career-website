/**
 * A component which shows error page for when the page requested by URL does not exist
 */
import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import { History } from 'history'
import { styles } from './styles'

/**
 * Props that can be passed to this component and their types
 */
interface Props {
  history: History
}

/**
 * States owned by this component and their types
 */
interface State {}

export default class PageNotFound extends Component<Props, State> {

  /**
   * Renders page not found component layout
   */
  render() {
    const { history } = this.props
    return (
      <div style={styles.pageContainer as any}>
        <h1 style={styles.titleText}>404 Page Not Found</h1>
        <p>The page you are looking for could not be found.</p>
        <p>You can redirect to one of the locations below.</p>
        <div style={styles.buttonsContainer}>
          <RaisedButton
            label='Home'
            style={styles.button}
            onClick={() => history.push('/')}
          />
          <RaisedButton
            label='Previous Page'
            style={styles.button}
            onClick={() => history.goBack()}
          />
        </div>
      </div>
    )
  }
}
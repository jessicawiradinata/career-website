import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import { History } from 'history'

interface Props {
  history: History
}

interface State {}

export default class PageNotFound extends Component<Props, State> {
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

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  titleText: {
    marginBottom: 30,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    marginRight: 10,
  },
}
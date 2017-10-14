/**
 * A component which shows error page for when the page requested by URL does not exist
 */
import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import { History } from 'history'
import { styles } from './styles'
import { pagenotfoundStrings } from '../../constants/strings'

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
        <h1 style={styles.titleText}>{pagenotfoundStrings.mainTitle}</h1>
        <p>{pagenotfoundStrings.subTitle1}</p>
        <p>{pagenotfoundStrings.subTitle2}</p>
        <div style={styles.buttonsContainer}>
          <RaisedButton
            label={pagenotfoundStrings.homeLabel}
            style={styles.button}
            onClick={() => history.push('/')}
          />
          <RaisedButton
            label={pagenotfoundStrings.previousPageLabel}
            style={styles.button}
            onClick={() => history.goBack()}
          />
        </div>
      </div>
    )
  }
}
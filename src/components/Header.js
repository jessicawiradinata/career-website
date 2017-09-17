import React, { Component } from 'react'
import { FlatButton, ToolbarGroup, Toolbar } from 'material-ui'

export default class Header extends Component {
  render() {
    console.log(this.props)
    const { history } = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton label="Career Website" primary={true} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <FlatButton label="Login" onClick={ () => history.push('/login') } />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
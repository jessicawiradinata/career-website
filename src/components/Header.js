import React, { Component } from 'react'
import { FlatButton, ToolbarGroup, Toolbar } from 'material-ui'

export default class Header extends Component {
  
  render() {
    const { history, isLoggedIn, logout } = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton label="Career Website" primary={true} onClick={() => history.push('/')} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          {isLoggedIn ?
            <FlatButton label="Logout" onClick={logout(history)} /> : 
            <FlatButton label="Login" onClick={() => history.push('/login')} />
          }      
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
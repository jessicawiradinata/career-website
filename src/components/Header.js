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
        {isLoggedIn ?
          <ToolbarGroup lastChild={true}>
            <FlatButton label="Post" onClick={() => history.push('/post')} />
            <FlatButton label="Logout" onClick={logout(history)} />
          </ToolbarGroup> :
          <ToolbarGroup>
            <FlatButton label="Signup" onClick={() => history.push('/signup')} />
            <FlatButton label="Login" onClick={() => history.push('/login')} />
          </ToolbarGroup> 
        }
      </Toolbar>
    )
  }
}
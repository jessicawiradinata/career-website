import React, { Component } from 'react'
import { FlatButton, ToolbarGroup, Toolbar, Popover, Menu, MenuItem } from 'material-ui'
import { PopoverAnimationVertical } from 'material-ui/Popover'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleTouchTap = (event) => {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }
  
  render() {
    const { history, isLoggedIn, logout } = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FlatButton label="Career Website" primary={true} onClick={() => history.push('/')} />
        </ToolbarGroup>
        {isLoggedIn ?
          <ToolbarGroup lastChild={true}>
            <FlatButton
              onClick={this.handleTouchTap}
              label="Posts"
            />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                <MenuItem primaryText="Create Post" onClick={() => history.push('/createpost')} />
                <MenuItem primaryText="My Posts" onClick={() => history.push('/myposts')} />
              </Menu>
            </Popover>
            <FlatButton label="Logout" onClick={() => logout(history)} />
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
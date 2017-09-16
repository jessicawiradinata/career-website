import React from 'react'
import LoginContainer from '../containers/login/Container'
import { Route, Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <Route exact path="/" component={LoginContainer} />
  </Switch>
)
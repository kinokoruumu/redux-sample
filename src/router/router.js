import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import Articles from '../modules/articles'

const Router = props => (
  <ConnectedRouter {...props} >
    <Switch>
      <Route exact component={Articles} path='/'/>
    </Switch>
  </ConnectedRouter>
)

export default Router

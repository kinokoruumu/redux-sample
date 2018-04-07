import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  ArticlesPage,
  ArticlePage
} from './components'

const Router = () => (
  <Switch>
    <Route component={ArticlesPage} path='/' />
    <Route component={ArticlePage} path='/:id(\d+)/' />
  </Switch>
)

export default Router

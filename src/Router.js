import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Index from './pages/Index'
import More from './pages/More'

export default () => (
  <Router basename='~caiohsramos/mac0499'>
    <Switch>
      <Route path='/more' exact component={More} />
      <Route path='*' component={Index} />
    </Switch>
  </Router>
)
import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Index from './pages/Index'
import Schedule from './pages/Schedule'

export default () => (
  <Router>
    <Switch>
      <Route path='/schedule' exact component={Schedule} />
      <Route path='*' component={Index} />
    </Switch>
  </Router>
)

import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Personal from "./pages/Personal";

export default () => (
  <Router>
    <Switch>
      <Route path="/personal" exact component={Personal} />
      <Route path="*" component={Index} />
    </Switch>
  </Router>
);

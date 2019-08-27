import React from "react";
import { Route, Switch } from "react-router";

// Import modules/routes
import Menu from "./containers/Menu.js";

export default (
  <Switch>
      <Route exact path="/" component={Menu} />
  </Switch>
);

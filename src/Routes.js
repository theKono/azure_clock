import React from "react";

import { Switch } from "react-router-dom";

import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import UnauthenticatedRoute from "./containers/UnauthenticatedRoute";
import Login from "./pages/Login";

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute
      path="/"
      exact
      render={() => <h1>Home</h1>}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
  </Switch>
);

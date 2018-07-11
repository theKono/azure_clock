import React from "react";

import { Switch, Redirect } from "react-router-dom";

import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import UnauthenticatedRoute from "./containers/UnauthenticatedRoute";
import Login from "./pages/Login";
import TitleListPage from "./pages/TitleListPage";

export default ({ childProps }) => (
  <Switch>
    <AuthenticatedRoute
      path="/"
      exact
      render={() => <Redirect to="/titles" />}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/titles"
      exact
      component={TitleListPage}
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

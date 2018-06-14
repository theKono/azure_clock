import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isAuthenticated: state.isAuthenticated };
};

const UnauthenticatedRoute = ({ component: C, ...rest }) => {
  const redirect = new URLSearchParams(window.location.search).get("redirect");

  return (
    <Route
      {...rest}
      render={props =>
        !rest.isAuthenticated ? (
          C ? (
            <C {...props} />
          ) : (
            rest.render(props)
          )
        ) : (
          <Redirect to={redirect === "" || redirect == null ? "/" : redirect} />
        )
      }
    />
  );
};

export default connect(mapStateToProps, null)(UnauthenticatedRoute);

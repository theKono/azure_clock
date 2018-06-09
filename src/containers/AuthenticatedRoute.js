import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isAuthenticated: state.isAuthenticated };
};

const AuthenticatedRoute = ({ component: C, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        C ? (
          <C {...props} />
        ) : (
          rest.render(props)
        )
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
);

export default connect(mapStateToProps, null)(AuthenticatedRoute);

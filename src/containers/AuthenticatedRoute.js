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
      props.isAuthenticated ? (
        <C {...props} />
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

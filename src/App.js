import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./containers/Auth";
import NavBar from "./presentations/NavBar";
import Routes from "./Routes";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    isFbReady: state.isFbReady,
    fbUser: state.fbUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch({ type: "LOGOUT" });
    }
  };
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Auth />
        <NavBar
          fbUser={this.props.fbUser}
          isAuthenticated={this.props.isAuthenticated}
          isFbReady={this.props.isFbReady}
          onLogout={this.props.onLogout}
        />
        <Routes />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

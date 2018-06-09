import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import Auth from "./containers/Auth";
import NavBar from "./presentations/NavBar";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Auth />
        <NavBar />
        <Routes />
      </Fragment>
    );
  }
}

export default withRouter(App);

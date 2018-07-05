import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    onFbGetLoginStatusSuccess: authResp => {
      dispatch({ type: "FB_GET_LOGIN_STATUS_SUCCESS", fbUser: authResp });
    },
    onLoginSuccess: resp => {
      dispatch({ type: "LOGIN_SUCCESS", authUser: resp });
    },
    onFbReady: () => {
      dispatch({ type: "FB_READY" });
    }
  };
};

class Auth extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = () => {
      this.props.onFbReady();

      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: false,
        version: process.env.REACT_APP_FB_API_VERSION,
        cookie: true,
        status: true
      });

      window.FB.Event.subscribe("auth.statusChange", response => {
        console.log(`auth.statusChange`);
        console.log(response);

        if (response.authResponse) {
          this.props.onFbGetLoginStatusSuccess(response.authResponse);
        }
      });

      window.FB.getLoginStatus(response => {
        console.log(`getLoginStatus`);
        console.log(response);

        if (response.status === "connected") {
          this.props.onFbGetLoginStatusSuccess(response.authResponse);
        }
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return null;
  }
}

export default connect(null, mapDispatchToProps)(Auth);

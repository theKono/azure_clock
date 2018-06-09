import React from "react";

import LoginButton from "../presentations/LoginButton";
import banner from "./banner.jpg";

class Login extends React.Component {
  render() {
    return (
      <div>
        <img src={banner} style={{ width: "100%" }} alt="banner" />
        <p className="text-center" style={{ marginTop: "45px" }}>
          <LoginButton />
        </p>
      </div>
    );
  }
}

export default Login;

import React from "react";

import Avatar from "./Avatar";
import LogoutButton from "./LogoutButton";

import logo from "./logo.png";

const NavBar = props => {
  const navStyle = { backgroundColor: "#2c3e50" };
  const navBrandStyle = { height: "62px" };

  return (
    <nav className="navbar navbar-expand-lg" style={navStyle}>
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          style={navBrandStyle}
          href="/"
        >
          <img src={logo} alt="logo" />
        </a>
        <div className="form-inline">
          <Avatar />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

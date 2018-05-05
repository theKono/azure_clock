import React from "react";
import logo from "./logo.png";

function NavBar(props) {
  const navStyle = { backgroundColor: "#2c3e50" };
  const navBrandStyle = { height: "62px" };

  return (
    <nav className="navbar" style={navStyle}>
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          style={navBrandStyle}
          href="/"
        >
          <img src={logo} alt="logo" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

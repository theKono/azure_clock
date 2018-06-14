import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLock from "@fortawesome/fontawesome-free-solid/faLock";
import axios from "axios";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.FB.logout(resp => {
      this.props.onLogout();
    });

    this.callLogoutApi();
  }

  callLogoutApi() {
    axios.delete("/api/auth");
  }

  render() {
    if (!this.props.isAuthenticated || !this.props.isFbReady) {
      return null;
    }

    return (
      <button className="btn btn-outline-primary" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faLock} /> Sign out
      </button>
    );
  }
}

export default LogoutButton;

import React from "react";

import { connect } from "react-redux";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";

const mapStateToProps = state => {
  return { isFbReady: state.isFbReady };
};

class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.willUnmount = false;
    this.state = { isAuthorizing: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }

  handleClick() {
    this.setState({ isAuthorizing: true });
    window.FB.login(() => {
      // Avoid calling setState() after component is unmounted
      this.willUnmount || this.setState({ isAuthorizing: false });
    });
  }

  render() {
    const Button = styled.button`
      background: #4267b2;

      &:hover {
        background-color: #4267b2;
      }
    `;

    return (
      <Button
        className="btn btn-primary btn-lg"
        disabled={!this.props.isFbReady || this.state.isAuthorizing}
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={faFacebook} /> Signin with facebook
      </Button>
    );
  }
}

export default connect(mapStateToProps, null)(LoginButton);

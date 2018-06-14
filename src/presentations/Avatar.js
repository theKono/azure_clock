import React from "react";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { fbUser: state.fbUser };
};

const Avatar = ({ fbUser }) => {
  if (!fbUser) {
    return null;
  }

  const avatarUrl = `https:graph.facebook.com/${
    process.env.REACT_APP_FB_API_VERSION
  }/${fbUser.userID}/picture?type=small&width=50&height=50`;

  return (
    <img alt="avatar" src={avatarUrl} className="rounded-circle mr-sm-2" />
  );
};

export default connect(mapStateToProps, null)(Avatar);

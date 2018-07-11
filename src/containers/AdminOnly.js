import { connect } from "react-redux";

const mapStateToProps = state => {
  return { authUser: state.authUser };
};

const AdminOnly = props => {
  if (props.authUser && props.authUser.role === "admin") {
    return props.children;
  }

  return null;
};

export default connect(mapStateToProps, null)(AdminOnly);

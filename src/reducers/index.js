import { combineReducers } from "redux";

const authUser = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.authUser;
    default:
      return state;
  }
};

const fbUser = (state = null, action) => {
  switch (action.type) {
    case "FB_GET_LOGIN_STATUS_SUCCESS":
      return action.fbUser;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, action) => {
  const name = `fbsr_${process.env.REACT_APP_FB_APP_ID}`;
  return document.cookie.search(`${name}=`) !== -1;
};

const isFbReady = (state = false, action) => {
  switch (action.type) {
    case "FB_READY":
      return true;
    default:
      return false;
  }
};

export default combineReducers({
  authUser,
  fbUser,
  isAuthenticated,
  isFbReady
});

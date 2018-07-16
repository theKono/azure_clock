import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";

const authUser = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.authUser;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

const fbUser = (state = null, action) => {
  switch (action.type) {
    case "FB_GET_LOGIN_STATUS_SUCCESS":
      return action.fbUser;
    case "LOGOUT":
      return null;
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
      return state;
  }
};

const titleList = (state = null, action) => {
  switch (action.type) {
    case "FETCH_TITLE_LIST_API_SUCCESS":
      return action.titleList;
    default:
      return state;
  }
};

export default combineReducers({
  notifications,
  authUser,
  fbUser,
  isAuthenticated,
  isFbReady,
  titleList
});

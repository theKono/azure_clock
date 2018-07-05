import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* fbGetLoginStatusSuccessSaga() {
  const { resp, err } = yield call(callLoginApi);

  if (resp) {
    yield put({ type: "LOGIN_SUCCESS", authUser: resp.data });
  } else {
    console.error(err);
  }
}

function callLoginApi() {
  return axios
    .post(`/api/auth/facebook`)
    .then(resp => ({ resp }))
    .catch(err => ({ err }));
}

export function* watchFbGetLoginStatusSuccess() {
  yield takeLatest("FB_GET_LOGIN_STATUS_SUCCESS", fbGetLoginStatusSuccessSaga);
}

export default function* rootSaga() {
  yield [watchFbGetLoginStatusSuccess()];
}

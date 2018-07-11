import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchTitleListSaga() {
  const { resp, err } = yield call(callFetchTitleListApi);

  if (resp) {
    yield put({ type: "FETCH_TITLE_LIST_API_SUCCESS", titleList: resp.data });
  } else {
    console.error(err);
  }
}

function callFetchTitleListApi() {
  return axios
    .get(`/api/titles`)
    .then(resp => ({ resp }))
    .catch(err => ({ err }));
}

export function* watchFetchTitleList() {
  yield takeEvery("FETCH_TITLE_LIST", fetchTitleListSaga);
}

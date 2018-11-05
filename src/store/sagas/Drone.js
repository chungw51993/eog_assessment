import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchFetchDrone(action) {
  const { error1, data: { data } } = yield call(
    API.findDrone
  );
  if (error1) {
    console.log({ error1 });
    yield put({ type: actions.API_ERROR, code: error1.code });
    yield cancel();
    return;
  }
  yield put({ type: actions.DRONE_DATA_RECEIVED, data });
};

function* watchAppLoad() {
  yield all([
    takeEvery(actions.FETCH_DRONE, watchFetchDrone)
  ]);
}

export default [watchAppLoad];
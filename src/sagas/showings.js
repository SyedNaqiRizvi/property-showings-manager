import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  INIT_SHOWINGS,
  POPULATE_SHOWINGS,
  UPDATE_SHOWINGS,
  SAVE_SHOWING,
  APPROVE_SHOWING,
} from '../actions/action-types';

const API_URL = 'http://localhost:8081';
const SHOWINGS_ENDPOINT = '/showings';

function* populateShowings() {
  const payload = yield axios.get(`${API_URL}${SHOWINGS_ENDPOINT}`);
  yield put({
    type: POPULATE_SHOWINGS,
    showings: payload.data,
  });
}

function* watchInitializeShowings() {
  yield takeEvery(INIT_SHOWINGS, populateShowings);
}

function* addShowing(action) {
  const payload = yield axios.post(`${API_URL}${SHOWINGS_ENDPOINT}`, action.showing);
  yield put({
    type: UPDATE_SHOWINGS,
    showings: payload.data,
  });
}

function* watchSaveShowing() {
  yield takeEvery(SAVE_SHOWING, addShowing);
}

function* approveShowing(action) {
  console.log('here');
  const payload = yield axios.put(`${API_URL}${SHOWINGS_ENDPOINT}`, action.showing);
  yield put({
    type: UPDATE_SHOWINGS,
    showings: payload.data,
  });
}

function* watchApproveShowing() {
  yield takeEvery(APPROVE_SHOWING, approveShowing);
}

export { watchInitializeShowings, watchSaveShowing, watchApproveShowing };

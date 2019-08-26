import { watchInitializeShowings, watchSaveShowing, watchApproveShowing } from './showings';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchInitializeShowings(), watchSaveShowing(), watchApproveShowing()]);
}

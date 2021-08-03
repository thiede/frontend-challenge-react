import { all, fork } from 'redux-saga/effects';
import employeeSaga from './employee-saga';

export default function* rootSaga() {
  console.log('Hello from redux-saga!');

  yield all([fork(employeeSaga)]);
}

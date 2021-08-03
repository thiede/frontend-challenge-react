import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IEmployee } from '../../types/employee';
import { fetchEmployeesSuccess, fetchEmployeesFailure } from '../actions/employee-actions';
import { employeeActionTypes } from '../action-types/employee-action-types';
import getEmployees from '../../services/api/employees/getEmployees';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* fetchEmployeesSaga() {
  try {
    const response: ResponseGenerator = yield call(getEmployees);
    yield put(
      fetchEmployeesSuccess({
        employees: response.data
      })
    );
  } catch (err) {
    yield put(
      fetchEmployeesFailure({
        error: err.message
      })
    );
  }
}

function* employeeSaga() {
  yield all([takeLatest(employeeActionTypes.FETCH_EMPLOYEES_REQUEST, fetchEmployeesSaga)]);
}

export default employeeSaga;

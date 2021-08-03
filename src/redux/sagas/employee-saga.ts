import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { IEmployee } from '../../types/employee';
import { fetchEmployeesSuccess, fetchEmployeesFailure } from '../actions/employee-actions';
import { employeeActionTypes } from '../action-types/employee-action-types';
import getEmployees from '../../services/api/employees/getEmployees';

function* fetchEmployeesSaga() {
  try {
    const response: AxiosResponse<IEmployee[]> = yield call(getEmployees);
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

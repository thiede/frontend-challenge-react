import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { IEmployee } from '../../types/employee';
import { fetchEmployeesSuccess, fetchEmployeesFailure, fetchEmployeesRequest } from '../actions/employee-actions';
import { employeeActionTypes } from '../action-types/employee-action-types';
import getEmployees from '../../services/api/employees/getEmployees';
import updateEmployee from '../../services/api/employees/updateEmployee';
import { IUpdateEmployeeRequestPayload, UpdateEmployeeRequest } from '../types/types';

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

// @ts-ignore
function* updateEmployeeSaga(action: UpdateEmployeeRequest) {
  try {
    const { id, status } = action.payload;
    // @ts-ignore
    yield call(updateEmployee, id, status);
    yield put(fetchEmployeesRequest());
  } catch (err) {}
}

function* employeeSaga() {
  yield all([
    takeLatest(employeeActionTypes.FETCH_EMPLOYEES_REQUEST, fetchEmployeesSaga),
    takeLatest(employeeActionTypes.UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga)
  ]);
}

export default employeeSaga;

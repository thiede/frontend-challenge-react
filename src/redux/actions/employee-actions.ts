import { employeeActionTypes } from '../action-types/employee-action-types';
import {
  FetchEmployeesFailure,
  FetchEmployeesRequest,
  FetchEmployeesSuccess,
  IFetchEmployeesFailurePayload,
  IFetchEmployeesSuccessPayload,
  IUpdateEmployeeRequestPayload,
  IUpdateEmployeeFailurePayload,
  UpdateEmployeeRequest,
  UpdateEmployeeSuccess,
  UpdateEmployeeFailure
} from '../types/types';

export const fetchEmployeesRequest = (): FetchEmployeesRequest => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_REQUEST
});

export const fetchEmployeesSuccess = (payload: IFetchEmployeesSuccessPayload): FetchEmployeesSuccess => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_SUCCESS,
  payload
});

export const fetchEmployeesFailure = (payload: IFetchEmployeesFailurePayload): FetchEmployeesFailure => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_FAILURE,
  payload
});

export const updateEmployeeRequest = (payload: IUpdateEmployeeRequestPayload): UpdateEmployeeRequest => {
  return {
    type: employeeActionTypes.UPDATE_EMPLOYEE_REQUEST,
    payload
  };
};

export const updateEmployeeSuccess = (): UpdateEmployeeSuccess => ({
  type: employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS
});

export const updateEmployeeFailure = (payload: IUpdateEmployeeFailurePayload): UpdateEmployeeFailure => ({
  type: employeeActionTypes.UPDATE_EMPLOYEE_FAILURE,
  payload
});

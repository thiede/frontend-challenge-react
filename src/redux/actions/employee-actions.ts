import { employeeActionTypes } from '../action-types/employee-action-types';
import {
  FetchEmployeesRequest,
  FetchEmployeesSuccess,
  IFetchEmployeesSuccessPayload,
  FetchEmployeesFailure,
  IFetchEmployeesFailurePayload
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

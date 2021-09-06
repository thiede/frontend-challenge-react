import { IEmployee } from '../../types/employee';
import { employeeActionTypes } from '../action-types/employee-action-types';

export interface IEmployeesState {
  pending: boolean;
  employees: IEmployee[];
  error: string | null;
}

export interface IEmployeeUpdateState {
  pending: boolean;
  error: string | null;
}

export interface IFetchEmployeesSuccessPayload {
  employees: IEmployee[];
}

export interface IFetchEmployeesFailurePayload {
  error: string;
}

export interface IUpdateEmployeeRequestPayload {
  id: number;
  status: number;
}

export interface IUpdateEmployeeFailurePayload {
  error: string;
}

export type FetchEmployeesRequest = {
  type: typeof employeeActionTypes.FETCH_EMPLOYEES_REQUEST;
};

export type FetchEmployeesSuccess = {
  type: typeof employeeActionTypes.FETCH_EMPLOYEES_SUCCESS;
  payload: IFetchEmployeesSuccessPayload;
};

export type FetchEmployeesFailure = {
  type: typeof employeeActionTypes.FETCH_EMPLOYEES_FAILURE;
  payload: IFetchEmployeesFailurePayload;
};

export type UpdateEmployeeRequest = {
  type: typeof employeeActionTypes.UPDATE_EMPLOYEE_REQUEST;
  payload: IUpdateEmployeeRequestPayload;
};

export type UpdateEmployeeSuccess = {
  type: typeof employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;
};

export type UpdateEmployeeFailure = {
  type: typeof employeeActionTypes.UPDATE_EMPLOYEE_FAILURE;
  payload: IUpdateEmployeeFailurePayload;
};

export type EmployeesActions =
  | FetchEmployeesRequest
  | FetchEmployeesSuccess
  | FetchEmployeesFailure
  | UpdateEmployeeRequest
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailure;

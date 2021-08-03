import { IEmployee } from '../../types/employee';
import { employeeActionTypes } from '../action-types/employee-action-types';

export interface IEmployeesState {
  pending: boolean;
  employees: IEmployee[];
  error: string | null;
}

export interface IFetchEmployeesSuccessPayload {
  employees: IEmployee[];
}

export interface IFetchEmployeesFailurePayload {
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

export type EmployeesActions = FetchEmployeesRequest | FetchEmployeesSuccess | FetchEmployeesFailure;

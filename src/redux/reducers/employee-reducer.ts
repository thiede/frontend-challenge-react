import { employeeActionTypes } from '../action-types/employee-action-types';
import { EmployeesActions, IEmployeesState } from '../types/types';

const initialState: IEmployeesState = {
  pending: false,
  employees: [],
  error: null
};

const reducer = (state = initialState, action: EmployeesActions) => {
  switch (action.type) {
    case employeeActionTypes.FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        pending: true
      };
    case employeeActionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.payload.employees,
        error: null
      };
    case employeeActionTypes.FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        pending: false,
        employees: [],
        error: action.payload.error
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;

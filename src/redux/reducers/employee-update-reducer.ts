import { employeeActionTypes } from '../action-types/employee-action-types';
import { EmployeesActions, IEmployeeUpdateState } from '../types/types';

const initialState: IEmployeeUpdateState = {
  pending: false,
  error: null
};

const reducer = (state = initialState, action: EmployeesActions) => {
  switch (action.type) {
    case employeeActionTypes.UPDATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        pending: true
      };
    case employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      };
    case employeeActionTypes.UPDATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;

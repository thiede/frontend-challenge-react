import { combineReducers } from 'redux';
import employeeReducer from './employee-reducer';
import employeeUpdateReducer from './employee-update-reducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
  employeeUpdate: employeeUpdateReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

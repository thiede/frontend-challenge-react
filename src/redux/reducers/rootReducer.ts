import { combineReducers } from 'redux';
import employeeReducer from './employee-reducer';

const rootReducer = combineReducers({
  employees: employeeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

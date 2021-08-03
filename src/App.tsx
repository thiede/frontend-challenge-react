import React, { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees, updateEmployee } from './services/api/employees';
import EmployeesListing from './views/Employees/EmployeesListing/EmployeesListing';
import { RootState } from './redux/reducers/rootReducer';
import { fetchEmployeesRequest } from './redux/actions/employee-actions';

const App = () => {
  const dispatch = useDispatch();
  const { employees, pending, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeesRequest());
  }, [dispatch]);

  const handleClick = (id: number) => (status: number) => (evt: SyntheticEvent) => {
    updateEmployee(id, status)
      .then(() => getEmployees())
      .then((data) => {
        dispatch(fetchEmployeesRequest());
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Frontend Challenge</h1>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <EmployeesListing employees={employees} handleClick={handleClick} />
      )}
    </div>
  );
};

export default App;

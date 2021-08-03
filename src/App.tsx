import React, { SyntheticEvent, useEffect, useState } from 'react';
import { getEmployees, updateEmployee } from './services/api/employees';
import EmployeesListing from './views/Employees/EmployeesListing/EmployeesListing';
import { IEmployee } from './types/employee';

const App = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    getEmployees()
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id: number) => (status: number) => (evt: SyntheticEvent) => {
    updateEmployee(id, status)
      .then(() => getEmployees())
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1>Frontend Challenge</h1>
      <EmployeesListing employees={employees} handleClick={handleClick} />
    </div>
  );
};

export default App;

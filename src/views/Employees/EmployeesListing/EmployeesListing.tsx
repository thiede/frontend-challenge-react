import { FC, SyntheticEvent } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { IEmployee } from '../../../types/employee';

type EmployeesListingProps = {
  employees: IEmployee[];
  handleClick: (id: number) => (status: number) => (evt: SyntheticEvent) => void;
};

const EmployeesListing: FC<EmployeesListingProps> = ({ employees, handleClick }) => {
  return (
    <div>
      {employees.map((employee) => {
        return (
          <EmployeeItem
            key={employee.id}
            name={employee.name}
            status={employee.status}
            handleClick={handleClick(employee.id)}
          />
        );
      })}
    </div>
  );
};

export default EmployeesListing;

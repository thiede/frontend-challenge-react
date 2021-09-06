import React, { FC, SyntheticEvent } from 'react';
import { StepControl } from '../../../components/forms';

type EmployeeItemProps = {
  name: string;
  status: number;
  handleClick: (status: number) => (evt: SyntheticEvent) => void;
  employeeId: number;
};

const EmployeeItem: FC<EmployeeItemProps> = ({ name, status, handleClick, employeeId }) => {
  return (
    <div>
      <h2>{name}</h2>
      <StepControl currentStep={status} stepsNumber={5} handleClick={handleClick} employeeId={employeeId} />
    </div>
  );
};

export default EmployeeItem;

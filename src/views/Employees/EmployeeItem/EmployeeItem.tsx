import React, { FC, SyntheticEvent } from 'react';
import { StepControl } from '../../../components/forms';

type EmployeeItemProps = {
  name: string;
  status: number;
  handleClick: (status: number) => (evt: SyntheticEvent) => void;
};

const EmployeeItem: FC<EmployeeItemProps> = ({ name, status, handleClick }) => {
  return (
    <div>
      <h2>{name}</h2>
      <StepControl currentStep={status} stepsNumber={5} handleClick={handleClick} />
    </div>
  );
};

export default EmployeeItem;

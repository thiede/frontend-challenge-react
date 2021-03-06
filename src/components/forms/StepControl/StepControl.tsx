import { FC, SyntheticEvent } from 'react';
import './StepControl.scss';
import { StepButton } from '../../forms';

type StepControlProps = {
  currentStep: number;
  stepsNumber: number;
  handleClick: (status: number) => (evt: SyntheticEvent) => void;
  employeeId: number;
};

const steps = ['added', 'in-check', 'approved', 'active', 'inactive'];

const StepControl: FC<StepControlProps> = ({ currentStep, stepsNumber, handleClick, employeeId }) => {
  return (
    <div className="step-control">
      <div className="arrow-steps clearfix">
        {steps.map((stepName, index) => (
          <StepButton
            key={index}
            label={stepName}
            active={currentStep === index}
            handleClick={handleClick(index)}
            step={index}
            employeeId={employeeId}
          />
        ))}
      </div>
    </div>
  );
};

export default StepControl;

import { FC, SyntheticEvent, useMemo } from 'react';
import './StepControl.scss';
import { StepButton } from '../../forms';

type StepControlProps = {
  currentStep: number;
  stepsNumber: number;
  handleClick: (status: number) => (evt: SyntheticEvent) => void;
};
const StepControl: FC<StepControlProps> = ({ currentStep, stepsNumber, handleClick }) => {
  const steps = useMemo(() => Array.from(Array(stepsNumber).keys()), [stepsNumber]);

  return (
    <div className="step-control">
      <div className="arrow-steps clearfix">
        {steps.map((stepNumber, index) => (
          <StepButton
            key={index}
            label={stepNumber.toString()}
            active={currentStep === stepNumber}
            handleClick={handleClick(stepNumber)}
          />
        ))}
      </div>
    </div>
  );
};

export default StepControl;

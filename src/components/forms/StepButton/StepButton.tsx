import { FC, SyntheticEvent, useMemo } from 'react';
import './StepButton.scss';

const baseClassName = 'step-button';
const activeClassName = `${baseClassName} ${baseClassName}--active`;

type StepButtonProps = {
  active: boolean;
  label: string;
  handleClick: (evt: SyntheticEvent) => void;
};
const StepButton: FC<StepButtonProps> = ({ active, label, handleClick }) => {
  const classnames = useMemo(() => {
    return active ? activeClassName : baseClassName;
  }, [active]);

  return (
    <div className={classnames} onClick={handleClick}>
      <span>{label}</span>
    </div>
  );
};

export default StepButton;

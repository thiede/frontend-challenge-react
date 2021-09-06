import { FC, SyntheticEvent, useMemo } from 'react';
import './StepButton.scss';
import { useDispatch } from 'react-redux';
import { updateEmployeeRequest } from '../../../redux/actions/employee-actions';

const baseClassName = 'step-button';
const activeClassName = `${baseClassName} ${baseClassName}--active`;

type StepButtonProps = {
  active: boolean;
  label: string;
  handleClick: (evt: SyntheticEvent) => void;
  step: number;
  employeeId: number;
};
const StepButton: FC<StepButtonProps> = ({ active, label, handleClick, step, employeeId }) => {
  const dispatch = useDispatch();

  const classnames = useMemo(() => {
    return active ? activeClassName : baseClassName;
  }, [active]);

  const handleClick2 = () => {
    dispatch(updateEmployeeRequest({ id: employeeId, status: step }));
  };

  return (
    <div className={classnames} onClick={handleClick2}>
      <span>{label}</span>
    </div>
  );
};

export default StepButton;

import classNames from 'classnames';
import { Status } from '../types/Status';

interface TodosFilterProps {
  activeStatus: Status;
  onFilterChange: (status: Status) => void;
}

const Filter: React.FC<TodosFilterProps> = (
  { onFilterChange, activeStatus },
) => (
  <nav className="filter" data-cy="Filter">
    {Object.values(Status).map(status => (
      <a
        key={status}
        href={`#/${status}`}
        onClick={() => onFilterChange(status as Status)}
        className={classNames('filter__link', {
          selected: activeStatus === status,
        })}
        data-cy={`FilterLink${status}`}
      >
        {status}
      </a>
    ))}
  </nav>
);

export default Filter;

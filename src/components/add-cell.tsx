import './add-cell.css';
import { FC } from 'react';
import { useActions } from '../hooks/use-action';

interface AddCellProps {
  previousCellId: string | null;
}

const AddCell: FC<AddCellProps> = ({ previousCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className="add-cell">
      <div className="add-buttons">
        <button
          className="button is-primary is-small is-rounded"
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>

        <button
          className="button is-primary is-small is-rounded"
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

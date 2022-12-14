import React from 'react';
import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
  forceVisible?: boolean;
  prevCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="divider"></div>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          type="button"
          onClick={() => insertCellAfter(prevCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          type="button"
          onClick={() => insertCellAfter(prevCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
    </div>
  );
};

export default AddCell;

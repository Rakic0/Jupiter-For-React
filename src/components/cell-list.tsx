import './code-cell.css';
import './cell-list.css';
import { FC, Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells }) =>
    cells?.order.map((id: string) => cells?.data[id])
  );

  const renderedCells = cells?.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <div className={cells?.length === 0 ? 'force-visibile' : ''}>
        <AddCell previousCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;

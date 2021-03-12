import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContentsItem from 'components/contentsItem';

type RootState = {
  boards: any;
  id: string;
};

export function Contents() {
  let { id }: RootState = useParams();
  const board = useSelector((state: RootState) =>
    state.boards.find((board: any) => board.id === parseInt(id)),
  );
  document.title = `${board.title}`;
  return (
    <Fragment>
      <ContentsItem board={board} />
    </Fragment>
  );
}

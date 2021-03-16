import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ContentsTemplate, ContentsItem } from 'components';

type RootState = {
  boards: any;
  id: string;
};

function Contents() {
  let { id }: RootState = useParams();
  const board = useSelector((state: RootState) =>
    state.boards.find((board: any) => board.id === parseInt(id)),
  );
  document.title = `${board.title}`;
  return <ContentsTemplate contentsitem={<ContentsItem board={board} />} />;
}

export default Contents;
import styled from 'styled-components';

import { BoardItem } from 'components';

const Board = styled.div`
  max-width: 860px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 18px;
  }
`;

function BoardList({ boards }: any) {
  return (
    <Board>
      {boards.map((row: any) => (
        <BoardItem key={row.id} row={row} />
      ))}
    </Board>
  );
}

export default BoardList;

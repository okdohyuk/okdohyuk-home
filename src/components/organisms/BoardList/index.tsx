import { BoardsState } from 'lib/types/Board';
import styled from 'styled-components';

import { Block, BoardItem } from 'components';

const Board = styled(Block)`
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
        <BoardItem
          key={row.id}
          id={row.id}
          logo={row.logo}
          title={row.title}
          introduce={row.introduce}
        />
      ))}
    </Board>
  );
}

export default BoardList;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Block, BoardItem } from 'components';
import { BoardState, BoardS } from 'lib/types/Board';

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
  const [tempBoards] = useState<BoardState>(boards);

  return (
    <Board>
      {tempBoards.map(({ id, logo, title, introduce }: BoardS) => (
        <BoardItem
          key={id}
          id={id}
          logo={logo}
          title={title}
          introduce={introduce}
        />
      ))}
    </Board>
  );
}

export default BoardList;

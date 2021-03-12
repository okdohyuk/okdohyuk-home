import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import BoardItem from 'components/boardItem';

const ProjectsWrap = styled.div`
  padding-top: 55px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`;

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

const Pagination = styled.div`
  max-width: 860px;
  margin: 60px auto 160px;
  text-align: center;
`;

type RootState = {
  boards: any;
};

export function Projects() {
  document.title = `okdohyuk's home`;

  const boards = useSelector((state: RootState) => state.boards);
  return (
    <ProjectsWrap>
      <Title>Projects</Title>
      <Board>
        {boards.map((row: any) => (
          <BoardItem key={row.id} row={row} />
        ))}
      </Board>
      <Pagination></Pagination>
    </ProjectsWrap>
  );
}

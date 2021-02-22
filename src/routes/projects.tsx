import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

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

function Projects({ boards }: any) {
  document.title = `okdohyuk's home`;
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

let mapStateToProps = (state: any) => {
  return {
    boards: state.boards,
  };
};

export default connect(mapStateToProps)(Projects);

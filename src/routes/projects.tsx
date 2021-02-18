import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import BoardItem from '../components/boardItem';

const ProjectsWrap = styled.div`
  padding: 55px 15px 15px 15px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`;

const Board = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

function Projects({ boards }: any) {
  return (
    <ProjectsWrap>
      <Title>Projects</Title>
      <Board>
        {boards.map((row: any) => (
          <BoardItem key={row.id} row={row} />
        ))}
      </Board>
    </ProjectsWrap>
  );
}

let mapStateToProps = (state: any) => {
  return {
    boards: state.boards,
  };
};

export default connect(mapStateToProps)(Projects);

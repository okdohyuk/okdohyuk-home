import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import ContentsItem from 'components/contentsItem';

const ContentsWrap = styled.div`
  padding: 0 15px;
`;

function Contents({ board }: any) {
  document.title = `${board.title}`;
  return (
    <ContentsWrap>
      <ContentsItem board={board} />
    </ContentsWrap>
  );
}

function mapStateToProps(state: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { board: state.boards.find((toDo: any) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Contents);

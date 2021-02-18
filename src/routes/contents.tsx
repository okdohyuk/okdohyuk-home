import React from 'react';
import { connect } from 'react-redux';

function Contents({ board }: any) {
  console.log(board);
  return <div>{board.id}</div>;
}

function mapStateToProps(state: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(state.boards.find(state.boards.id === parseInt(id)));

  return { board: state.id === parseInt(id) };
}

export default connect(mapStateToProps)(Contents);

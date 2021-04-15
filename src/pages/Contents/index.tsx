import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Paramtype } from 'lib/types/Board';

import { ContentsTemplate, ContentsItem, Footer } from 'components';

function Contents() {
  let { id }: Paramtype = useParams();
  const board = useSelector((state: any) =>
    state.boards.find((board: any) => board.id === parseInt(id)),
  );
  if (board === undefined) {
    location.href = '/';
  }
  document.title = `${board.title}`;

  return (
    <ContentsTemplate
      contentsitem={
        <ContentsItem
          title={board.title}
          logo={board.logo}
          introduce={board.introduce}
          images={board.images}
          text={board.text}
          github={board.github}
        />
      }
      footer={<Footer />}
    />
  );
}

export default Contents;

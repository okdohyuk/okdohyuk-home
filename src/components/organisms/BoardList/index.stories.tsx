import React from 'react';
import { storiesOf } from '@storybook/react';
import { BoardList } from 'components';

const boards = [
  {
    id: '0',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    title: 'Test',
    introduce: 'This is test',
  },
  {
    id: '1',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
    title: 'Test',
    introduce: 'This is test',
  },
];

storiesOf('BoardList', module).add('default', () => (
  <BoardList boards={boards} />
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { BoardItem } from 'components';

storiesOf('BoardItem', module).add('default', () => (
  <BoardItem
    id="1"
    logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
    title="Test"
    introduce="This is test"
  />
));

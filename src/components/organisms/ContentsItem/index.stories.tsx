import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContentsItem } from 'components';

storiesOf('ContentsItem', module).add('default', () => (
  <ContentsItem
    title="Test"
    logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
    introduce="This is test"
    images={[
      {
        id: 1,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
      },
    ]}
    text="test"
    github=""
  />
));

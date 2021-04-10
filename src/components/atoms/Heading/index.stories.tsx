import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from 'components';

storiesOf('Heading', module)
  .add('default', () => <Heading>Hello</Heading>)
  .add('level 2', () => <Heading level={2}>Hello</Heading>);

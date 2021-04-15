import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from 'components';

storiesOf('Icon', module)
  .add('default', () => <Icon icon="blog" />)
  .add('height', () => <Icon icon="github" height={100} />);

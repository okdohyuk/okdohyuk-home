import React from 'react';
import { storiesOf } from '@storybook/react';
import { BurgerNavigation } from 'components';

storiesOf('BurgerNavigation', module).add('default', () => (
  <div style={{ position: 'relative' }}>
    <BurgerNavigation />
  </div>
));

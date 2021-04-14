import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from 'components';

storiesOf('Link', module).add('default', () => (
  <Link href="https://okdohyuk.com" palette="black">
    okdohyuk's home
  </Link>
));

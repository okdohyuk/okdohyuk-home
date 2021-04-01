import React from 'react';
import { storiesOf } from '@storybook/react';
import { SkillImage } from 'components';

storiesOf('SkillImage', module).add('default', () => (
  <SkillImage img="react" />
));

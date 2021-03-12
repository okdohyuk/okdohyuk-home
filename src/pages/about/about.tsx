import { Fragment } from 'react';

import Abouts from 'components/abouts';
import Skills from 'components/skills';
import Contact from 'components/contact';

export function About() {
  document.title = `okdohyuk's home`;
  return (
    <Fragment>
      <Abouts />
      <Skills />
      <Contact />
    </Fragment>
  );
}

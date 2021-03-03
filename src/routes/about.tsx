import React from 'react';
import styled from '@emotion/styled';

import Abouts from 'components/abouts';
import Skills from 'components/skills';
import Contact from 'components/contact';

const AboutWrap = styled.div``;

function About() {
  document.title = `okdohyuk's home`;
  return (
    <AboutWrap>
      <Abouts />
      <Skills />
      <Contact />
    </AboutWrap>
  );
}

export default About;

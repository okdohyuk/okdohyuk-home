import React from 'react';
import styled from 'styled-components';

import { SkillImage } from 'components';

const SkillsWrap = styled.div`
  padding: 15px;
  padding-bottom: 5rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 30px 0;
  font-size: 40px;
  font-weight: 900;
`;

const KindTitle = styled.h3`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  font-size: 20px;
  font-weight: 500;
`;

const SkillBox = styled.div``;

function Skills() {
  return (
    <SkillsWrap>
      <Title>Skils</Title>
      <KindTitle>Front-end</KindTitle>
      <SkillBox>
        <SkillImage img="html" />
        <SkillImage img="css" />
        <SkillImage img="javascript" />
        <SkillImage img="react" />
        <SkillImage img="typescript" />
        <SkillImage img="sass" />
      </SkillBox>
      <KindTitle>etc</KindTitle>
      <SkillBox>
        <SkillImage img="git" />
        <SkillImage img="google" />
        <SkillImage img="notion" />
        <SkillImage img="slack" />
        <SkillImage img="figma" />
        <SkillImage img="zeplin" />
      </SkillBox>
    </SkillsWrap>
  );
}

export default Skills;

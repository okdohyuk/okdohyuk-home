import React from 'react';
import styled from 'styled-components';

import { Block, Heading, SkillImage } from 'components';

const SkillsWrap = styled(Block)`
  padding: 15px;
  padding-bottom: 5rem;
  text-align: center;
`;

const Title = styled(Heading)`
  margin: 30px 0;
  font-size: 40px;
  font-weight: 900;
`;

const KindTitle = styled(Heading)`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  font-size: 20px;
  font-weight: 500;
`;

const SkillBox = styled(Block)``;

function Skills() {
  return (
    <SkillsWrap>
      <Title>Skils</Title>
      <KindTitle level={3}>Front-end</KindTitle>
      <SkillBox>
        <SkillImage img="html" />
        <SkillImage img="css" />
        <SkillImage img="javascript" />
        <SkillImage img="react" />
        <SkillImage img="typescript" />
        <SkillImage img="sass" />
      </SkillBox>
      <KindTitle level={3}>etc</KindTitle>
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

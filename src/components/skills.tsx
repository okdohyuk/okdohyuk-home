import React from 'react';
import styled from '@emotion/styled';

import html from '../lib/image/html-logo.png';
import css from '../lib/image/css-logo.png';
import js from '../lib/image/javascript-logo.png';
import react from '../lib/image/react-logo.svg';
import ts from '../lib/image/typescript-logo.png';
import sass from '../lib/image/sass-logo.png';
import git from '../lib/image/git-logo.png';
import google from '../lib/image/google-logo.png';

const SkillsWrap = styled.div`
  padding: 15px;
  padding-bottom: 5rem;
  text-align: center;
  background-color: #d6d6d6;
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

const SkillImg = styled.div`
  text-align: center;
  display: inline-block;
  width: 114px;
  height: 116px;
  border-radius: 30px 30px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 1rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%), 0 3px 6px rgb(0 0 0 / 20%);
  @media screen and (max-width: 900px) {
    margin: 5px;
  }
`;

function Skills() {
  return (
    <SkillsWrap>
      <Title>Skils</Title>
      <KindTitle>Front-end</KindTitle>
      <SkillBox>
        <SkillImg style={{ backgroundImage: `url(${html})` }} />
        <SkillImg style={{ backgroundImage: `url(${css})` }} />
        <SkillImg style={{ backgroundImage: `url(${js})` }} />
        <SkillImg style={{ backgroundImage: `url(${react})` }} />
        <SkillImg style={{ backgroundImage: `url(${ts})` }} />
        <SkillImg style={{ backgroundImage: `url(${sass})` }} />
      </SkillBox>
      <KindTitle>etc</KindTitle>
      <SkillBox>
        <SkillImg style={{ backgroundImage: `url(${git})` }} />
        <SkillImg style={{ backgroundImage: `url(${google})` }} />
      </SkillBox>
    </SkillsWrap>
  );
}

export default Skills;

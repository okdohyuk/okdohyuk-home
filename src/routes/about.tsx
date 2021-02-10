import React, { useState } from 'react';
import styled from '@emotion/styled';

import MyProfile from '../lib/image/okdohyuk.jpeg';
import Skills from '../components/skills';
import Contact from '../components/contact';

const MainWrap = styled.div``;

const AboutWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
  }
`;

const LeftWrap = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 900px) {
    flex: 1;
  }
`;

const RightWrap = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex: 1;
  }
  @media screen and (max-width: 900px) {
    padding-top: 55px;
  }
`;

const TextWrap = styled.div`
  display: table;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

const AboutText = styled.div`
  font-size: 30px;
`;

const ImgFigure = styled.figure`
  width: 30rem;
  overflow: hidden;
  background-color: transparent;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const Profile = styled.img`
  width: 100%;
`;

function About() {
  return (
    <MainWrap>
      <AboutWrap>
        <RightWrap>
          <ImgFigure>
            <Profile src={MyProfile} alt={MyProfile} />
          </ImgFigure>
        </RightWrap>
        <LeftWrap>
          <TextWrap>
            <Title>00한 개발자</Title>
            <AboutText>
              저는 프론트엔드 개발에 관심이 많은 개발자 유도혁입니다. 저는
              자기개발을 위하여 꾸준히 경진대회 참가와, 개인프로젝트 제작를
              하고있습니다. 맡은 일에 최선과 책임을 다하고 있습니다.
            </AboutText>
          </TextWrap>
        </LeftWrap>
      </AboutWrap>
      <Skills />
      <Contact />
    </MainWrap>
  );
}

export default About;

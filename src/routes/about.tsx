import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import MyProfile from '../lib/image/okdohyuk.jpeg';
import Skills from '../components/skills';
import Contact from '../components/contact';

const MainWrap = styled.div``;

const AboutWrap = styled.div`
  height: 100vh;
  flex-direction: row-reverse;
  display: flex;
  flex: 1;

  @media screen and (max-width: 900px) {
    height: unset;
    padding-bottom: 5rem;
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 900px) {
    padding: 15px 0 15px 15px;
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
  margin-left: 70px;
  display: table;

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

const AboutText = styled.div`
  font-size: 30px;
  @media screen and (max-width: 900px) {
    font-size: 25px;
  }
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
  document.title = `okdohyuk's home`;
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
            <Title>성실한 개발자</Title>
            <AboutText>
              저는 프론트엔드 개발에 관심이 많은 개발자 유도혁입니다. 현재
              한세사이버보안고등학교에 재학 중이며, 시스템보안연구동아리의
              부장을 맡아 부원들에게 멘토로서의 역할로 웹 개발의 학습을 돕고
              있습니다. 저는 자기개발을 위하여 꾸준히 경진대회 참가와 개인
              프로젝트를 제작하고 있습니다. 저의 성실한 성격을 바탕으로 맡은
              일에 최선과 책임을 다하고 있습니다.
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

import React from 'react';
import styled from '@emotion/styled';

import MyProfile from 'lib/image/okdohyuk.jpeg';
import Skills from 'components/skills';
import Contact from 'components/contact';

const MainWrap = styled.div``;

const AboutWrap = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: row-reverse;

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
  margin: 30px 0;
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
            <Title>열정 있는 개발자</Title>
            <AboutText>
              저는 프론트엔드 기술에 관심이 많은 유도혁입니다. 현재
              한세사이버보안고등학교에 재학 중입니다.<p>&nbsp;</p>
              저는 현재 전공 동아리인 시스템 보안연구동아리의 부장 및 전공
              멘토로 동아리를 이끌고 있습니다.<p>&nbsp;</p>
              저는 반응형 웹 개발에 있어서 진지한 열정을 가지고 있고 개발과 여러
              자료를 학습하며 점점 성장하고 있습니다.
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

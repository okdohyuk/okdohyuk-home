import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import MyProfile from 'lib/image/myprofile.jpg';

const Rotation = keyframes`
  from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const HomeWrap = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

const ContentsWrap = styled.div`
  height: 100%;
  padding: 55px 15px 0 15px;
  justify-content: center;
  flex: 1;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    margin: 0 150px 0 300px;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const Collection = styled.div`
  min-width: 330px;
  display: flex;
  flex: 1;
  opacity: 1;
  flex-direction: column;
  align-self: center;
`;

const Name = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
`;

const About = styled.div`
  margin: 10px 0;
  font-size: 1.7em;
`;

const DetailLink = styled(Link)`
  width: 5.3em;
  padding: 7px;
  display: block;
  text-decoration: none;
  border-radius: 3px;
  border-width: 0;
  text-align: center;
  background-color: #3499db;
  color: #ffffff;
  font-size: 18px;
`;

const ProfileWrap = styled.div`
  width: 32rem;
  min-width: 32rem;
  height: 32rem;
  padding: 20px 0;
  flex: 1;
  opacity: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    min-width: 0;
    width: 19.3rem;
    height: 19.3rem;
    margin: 0 auto;
  }
`;

const ProfileAnimate = styled.div`
  width: 32rem;
  height: 32rem;
  border-radius: 9000px;
  background: linear-gradient(180deg, #d9edff 80%, #ffd966);

  @media screen and (max-width: 1000px) {
    width: 19.3rem;
    height: 19.3rem;
  }
`;

const ActiveProfileAnimate = styled.div`
  width: 32rem;
  height: 32rem;
  border-radius: 9000px;
  background: linear-gradient(180deg, #d9edff 80%, #ffd966);
  animation: ${Rotation} infinite 3s linear;

  @media screen and (max-width: 1000px) {
    width: 19.3rem;
    height: 19.3rem;
  }
`;

const ImgWrap = styled.div`
  padding: 1px;
  position: absolute;
  border-radius: 9000px;
  background-color: black;
`;

const ImgFigure = styled.figure`
  width: 30rem;
  height: 30rem;
  border-radius: 9000px;
  overflow: hidden;
  background-color: transparent;

  @media screen and (max-width: 1000px) {
    width: 18rem;
    height: 18rem;
  }
`;

const Profile = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 9000px;

  @media screen and (max-width: 1000px) {
    width: 18rem;
    height: 18rem;
  }
`;

const BackText = styled.div`
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;
  writing-mode: vertical-rl;
  font-size: 270px;
  line-height: 300px;
  color: #eeeeee;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const BackText2 = styled.div`
  padding-left: 250px;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  z-index: -1;
  font-size: 270px;
  line-height: 260px;

  color: #eeeeee;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export function Home() {
  const [onMouse, setOnMouse] = useState(false);
  document.title = `okdohyuk's home`;
  return (
    <HomeWrap>
      <ContentsWrap>
        <ProfileWrap
          onMouseEnter={() => setOnMouse(true)}
          onMouseLeave={() => setOnMouse(false)}
        >
          {onMouse ? (
            <ActiveProfileAnimate></ActiveProfileAnimate>
          ) : (
            <ProfileAnimate></ProfileAnimate>
          )}
          <ImgWrap>
            <ImgFigure>
              <Profile src={MyProfile} alt={MyProfile} />
            </ImgFigure>
          </ImgWrap>
        </ProfileWrap>

        <Collection>
          <Name>유도혁</Name>
          <About>
            열정있는 개발자 유도혁입니다,
            <br />
            만나서 반갑습니다😃
          </About>
          <DetailLink to="/about">저에 대해서</DetailLink>
        </Collection>
      </ContentsWrap>
      <BackText>Developer</BackText>
      <BackText2>okdohyuk</BackText2>
    </HomeWrap>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import MyProfile from '../lib/image/myprofile.jpg';

const Rotation = keyframes`
  from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #f9ed69 10%, #f08a5d 50%, #b83b5e 100%);
  display: table;
`;

const ContentsWrap = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const LeftWrap = styled.div`
  width: 50%;
  float: left;
`;

const RightWrap = styled.div`
  width: 50%;
  float: right;
  justify-content: center;
  align-items: center;
`;

const Collection = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Name = styled.h2`
  margin-top: 50px;
`;

const About = styled.div`
  width: 300px;
  margin: 30px 0;
  font-size: 20px;
`;

const DetailLink = styled(Link)``;

const GoButton = styled.button`
  padding: 7px;
  border-radius: 3px;
  border-width: 0;
  background-color: #3499db;
  color: #ffffff;
`;

const ProfileWrap = styled.div`
  height: 21.5rem;
  width: 21.5rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
`;

const ProfileAnimate = styled.div`
  height: 21.5rem;
  width: 21.5rem;
  border-radius: 9000px;
  background: linear-gradient(180deg, #b83b5e 80%, #6a2c70);
`;

const ActiveProfileAnimate = styled.div`
  height: 21.5rem;
  width: 21.5rem;
  border-radius: 9000px;
  background: linear-gradient(180deg, #b83b5e 80%, #6a2c70);
  animation: ${Rotation} infinite 3s linear;
`;

const ImgWrap = styled.div`
  position: absolute;
  border-radius: 9000px;
  background-color: black;
  padding: 3px;
`;

const ImgFigure = styled.figure`
  height: 20rem;
  width: 20rem;
  border-radius: 9000px;
  overflow: hidden;
  background-color: transparent;
`;

const Profile = styled.img`
  width: 100%;
`;

function Home() {
  const [onMouse, setOnMouse] = useState(false);
  return (
    <MainWrap>
      <ContentsWrap>
        <LeftWrap>
          <Collection>
            <Name>유도혁</Name>
            <About>주로 React와 TypeScript로 프론트 개발을 하고있습니다.</About>
            <DetailLink to="/about">
              <GoButton>저에 대해서</GoButton>
            </DetailLink>
          </Collection>
        </LeftWrap>
        <RightWrap>
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
        </RightWrap>
      </ContentsWrap>
    </MainWrap>
  );
}

export default Home;

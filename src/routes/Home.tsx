import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import MyProfile from '../lib/image/myprofile.jpg';

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

const ImgWrap = styled.figure`
  height: 20rem;
  width: 20rem;
  margin: 0 auto;
`;

const Profile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 9000px !important;
`;

function Home() {
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
          <ImgWrap>
            <Profile src={MyProfile} alt="유도혁" />
          </ImgWrap>
        </RightWrap>
      </ContentsWrap>
    </MainWrap>
  );
}

export default Home;

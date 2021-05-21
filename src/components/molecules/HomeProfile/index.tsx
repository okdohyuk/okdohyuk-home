import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import MyProfile from 'lib/image/myprofile.jpg';
import { Block } from 'components';

const Rotation = keyframes`
  from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled(Block)`
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
  z-index: 99999;

  @media screen and (max-width: 1000px) {
    min-width: 0;
    width: 19.3rem;
    height: 19.3rem;
    margin: 0 auto;
  }
`;

const ProfileAnimate = styled(Block)`
  width: 32rem;
  height: 32rem;
  border-radius: 9000px;
  background: linear-gradient(180deg, #d9edff 80%, #ffd966);

  @media screen and (max-width: 1000px) {
    width: 19.3rem;
    height: 19.3rem;
  }
`;

const ActiveProfileAnimate = styled(Block)`
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

const ImgWrap = styled(Block)`
  padding: 1px;
  position: absolute;
  border-radius: 9000px;
`;

const ImgFigure = styled.figure`
  width: 30rem;
  height: 30rem;
  margin: 0;
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

function HomeProfile() {
  const [onMouse, setOnMouse] = useState(false);

  return (
    <Wrapper
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
    </Wrapper>
  );
}

export default HomeProfile;

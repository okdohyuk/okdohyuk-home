import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
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

function HomeAbout() {
  return (
    <Wrapper>
      <Name>유도혁</Name>
      <About>
        열정있는 개발자 유도혁입니다,
        <br />
        만나서 반갑습니다😃
      </About>
      <DetailLink to="/about">저에 대해서</DetailLink>
    </Wrapper>
  );
}

export default HomeAbout;

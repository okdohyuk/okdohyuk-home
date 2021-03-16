import styled from 'styled-components';

import { HomeProfile, HomeAbout } from 'components';

const Wrapper = styled.div`
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

function ContentsWrap() {
  return (
    <Wrapper>
      <HomeProfile />
      <HomeAbout />
    </Wrapper>
  );
}

export default ContentsWrap;

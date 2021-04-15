import styled from 'styled-components';
import { Block } from 'components';

const Wrapper = styled(Block)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

const ContentsWrap = styled.section`
  width: 100%;
  height: 100%;
`;

const WrapperText = styled.section``;

function HomeTemplate({ contentswrap, wrappertext }: any) {
  return (
    <Wrapper>
      <ContentsWrap>{contentswrap}</ContentsWrap>
      <WrapperText>{wrappertext}</WrapperText>
    </Wrapper>
  );
}

export default HomeTemplate;

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

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

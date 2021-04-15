import styled from 'styled-components';

const Wrapper = styled.div``;

const ContentsItem = styled.section``;

const Footer = styled.section``;

function ContentsTemplate({ contentsitem, footer }: any) {
  return (
    <Wrapper>
      <ContentsItem>{contentsitem}</ContentsItem>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}

export default ContentsTemplate;

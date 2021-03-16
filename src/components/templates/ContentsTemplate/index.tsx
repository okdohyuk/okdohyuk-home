import styled from 'styled-components';

const Wrapper = styled.div``;

const ContentsItem = styled.section``;

function ContentsTemplate({ contentsitem }: any) {
  return (
    <Wrapper>
      <ContentsItem>{contentsitem}</ContentsItem>
    </Wrapper>
  );
}

export default ContentsTemplate;

import styled from 'styled-components';
import { Block, Heading } from 'components';

const Wrapper = styled(Block)`
  padding-top: 55px;
`;

const Title = styled(Heading)`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`;

const BoardList = styled.section``;

const Pagination = styled(Block)`
  max-width: 860px;
  margin: 60px auto 160px;
  text-align: center;
`;

const Footer = styled.section``;

function ProjectsTemplate({ boardlist, footer }: any) {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <BoardList>{boardlist}</BoardList>
      <Pagination></Pagination>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}

export default ProjectsTemplate;

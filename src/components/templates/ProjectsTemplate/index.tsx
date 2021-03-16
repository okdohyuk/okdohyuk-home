import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 55px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`;

const BoardList = styled.section``;

const Pagination = styled.div`
  max-width: 860px;
  margin: 60px auto 160px;
  text-align: center;
`;

function ProjectsTemplate({ boardlist }: any) {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <BoardList>{boardlist}</BoardList>
      <Pagination></Pagination>
    </Wrapper>
  );
}

export default ProjectsTemplate;

import React from 'react';
import styled from '@emotion/styled';

const ProjectsWrap = styled.div`
  padding: 55px 15px 15px 15px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

function Projects() {
  return (
    <ProjectsWrap>
      <Title>Projects</Title>
    </ProjectsWrap>
  );
}

export default Projects;

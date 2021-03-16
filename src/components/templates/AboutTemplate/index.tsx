import styled from 'styled-components';

const Wrapper = styled.div``;

const About = styled.section``;
const Skills = styled.section``;
const Contact = styled.section``;

function AboutTemplate({ abouts, skills, contact }: any) {
  return (
    <Wrapper>
      <About>{abouts}</About>
      <Skills>{skills}</Skills>
      <Contact>{contact}</Contact>
    </Wrapper>
  );
}

export default AboutTemplate;

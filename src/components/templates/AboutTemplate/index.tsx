import styled from 'styled-components';

const Wrapper = styled.div``;

const About = styled.section``;

const Skills = styled.section``;

const Contact = styled.section``;

const Footer = styled.section``;

function AboutTemplate({ abouts, skills, contact, footer }: any) {
  return (
    <Wrapper>
      <About>{abouts}</About>
      <Skills>{skills}</Skills>
      <Contact>{contact}</Contact>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}

export default AboutTemplate;

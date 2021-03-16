import { AboutTemplate, Abouts, Skills, Contact } from 'components';

function About() {
  document.title = `okdohyuk's home`;
  return (
    <AboutTemplate
      abouts={<Abouts />}
      skills={<Skills />}
      contact={<Contact />}
    ></AboutTemplate>
  );
}

export default About;

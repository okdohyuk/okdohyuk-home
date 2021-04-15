import { AboutTemplate, Abouts, Skills, Contact, Footer } from 'components';

function About() {
  document.title = `okdohyuk's home`;
  return (
    <AboutTemplate
      abouts={<Abouts />}
      skills={<Skills />}
      contact={<Contact />}
      footer={<Footer />}
    ></AboutTemplate>
  );
}

export default About;

import styled from 'styled-components';

const FooterWrap = styled.footer`
  position: relative;
  padding: 29px 0;
  bottom: 0;
  border-top: 1px solid #ebebeb;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1em;
  color: #4b4b4b;
`;

function Footer() {
  return (
    <FooterWrap>
      <Text>2021 유도혁</Text>
    </FooterWrap>
  );
}

export default Footer;

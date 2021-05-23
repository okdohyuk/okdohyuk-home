import styled from 'styled-components';
import { Paragraph } from 'components';

const FooterWrap = styled.footer`
  padding: 29px 0;
  position: relative;
  bottom: 0;
  border-top: 1px solid #ebebeb;
`;

const Text = styled(Paragraph)`
  margin: 0;
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

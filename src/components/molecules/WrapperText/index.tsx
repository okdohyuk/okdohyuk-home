import styled from 'styled-components';
import { Atom } from 'components';

const BackText = styled(Atom)`
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;
  writing-mode: vertical-rl;
  font-size: 270px;
  line-height: 300px;
  color: #eeeeee;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const BackText2 = styled(Atom)`
  padding-left: 250px;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  z-index: -1;
  font-size: 270px;
  line-height: 260px;
  color: #eeeeee;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

function WrapperText() {
  return (
    <>
      <BackText>Developer</BackText>
      <BackText2>okdohyuk</BackText2>
    </>
  );
}

export default WrapperText;

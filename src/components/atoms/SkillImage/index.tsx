import styled from 'styled-components';

const SkillImg = styled.div`
  width: 115px;
  height: 115px;
  display: inline-block;
  margin: 0 1rem;
  border-radius: 30px 30px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%), 0 3px 6px rgb(0 0 0 / 20%);

  @media screen and (max-width: 900px) {
    margin: 5px;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

function SkillImage({ img }: any) {
  const svg = require(`!raw-loader!./image/${img}.svg`).default;
  return <SkillImg dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default SkillImage;

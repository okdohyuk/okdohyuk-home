import styled from 'styled-components';

const fontSize = ({ width, height }: any) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25em';
};

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: #000000;
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;

const Icon = ({ icon, ...props }: any) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`).default;
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Icon;

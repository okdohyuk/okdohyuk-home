import React from 'react';
import styled, { css } from 'styled-components';

const defaultSize = (level: any) => (level != undefined ? level : 1);

const fontSize = ({ level }: any) =>
  `${0.75 + 1 * (1 / defaultSize(level))}rem`;

const styles = css`
  font-family: Nanum Gothic;
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
`;
const Heading = styled(
  ({ level, children, reverse, palette, theme, ...props }) =>
    React.createElement(`h${defaultSize(level)}`, props, children),
)`
  ${styles}
`;

export default Heading;

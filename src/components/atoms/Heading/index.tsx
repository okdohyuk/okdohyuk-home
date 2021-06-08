import React from 'react';
import styled, { css } from 'styled-components';

const defaultSize = (level: any) => (level != undefined ? level : 1);

const fontSize = ({ level }: any) =>
  `${0.75 + 1 * (1 / defaultSize(level))}rem`;

const styles = css`
  margin: 0.85714em 0 0.57142em 0;
  font-weight: 500;
  font-family: lucida grande, 나눔고딕, NanumGothic;
  font-size: ${fontSize};
`;

const Heading = styled(
  ({ level, children, reverse, palette, theme, ...props }) =>
    React.createElement(`h${defaultSize(level)}`, props, children),
)`
  ${styles}
`;

export default Heading;

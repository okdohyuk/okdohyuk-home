import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  font-family: lucida grande, 나눔고딕, NanumGothic;
`;

const Ol = styled.ol`
  ${styles}
`;
const Ul = styled.ul`
  ${styles}
`;

type ListTypes = {
  ordered?: boolean;
  children: any;
};

const List = ({ ordered, children, ...props }: ListTypes) => {
  return React.createElement(ordered ? Ol : Ul, props, children);
};

export default List;

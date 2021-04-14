import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
  font-family: Nanum Gothic;
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
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

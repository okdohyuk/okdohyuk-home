import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { palette } from 'styled-tools';

const styles = css`
  font-family: lucida grande, 나눔고딕, NanumGothic;
  text-decoration: none;
  font-weight: 500;
  color: ${palette('grayscale', 2)};
`;

const StyledNavLink = styled(({ theme, reverse, palette, ...props }) => (
  <NavLink {...props} />
))`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return <StyledNavLink {...props} />;
  }
  return <Anchor {...props} />;
};

export default Link;

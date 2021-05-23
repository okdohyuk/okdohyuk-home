import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Atom, Link, StraightNavigation, BurgerNavigation } from 'components';

const Header = styled.header`
  width: 100%;
  min-height: 55px;
  padding-top: 17px;
  top: 0;
  z-index: 1000;
  position: fixed;
`;

const LogoBtn = styled(Link)`
  padding-left: 25px;
  float: left;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  color: #000000;
`;

const Logo = styled(Atom)``;

const Nav = styled.nav`
  top: 0;
  float: right;
  vertical-align: middle;
  line-height: 0;
`;

function Navigation() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Header>
      <LogoBtn to="/">
        <Logo>유도혁</Logo>
      </LogoBtn>
      <Nav>
        {windowSize < 900 ? <BurgerNavigation /> : <StraightNavigation />}
      </Nav>
    </Header>
  );
}

export default Navigation;

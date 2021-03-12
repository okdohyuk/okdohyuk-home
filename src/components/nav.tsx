import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StraightNav from './straightnav';
import BurgerNav from './burgernav';

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
  text-decoration: none;
  font-size: 18px;
  color: #000000;
`;

const Nav = styled.nav`
  float: right;
  line-height: 0;
`;

function nav() {
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
      <LogoBtn to="/">유도혁</LogoBtn>
      <Nav>{windowSize < 900 ? <BurgerNav /> : <StraightNav />}</Nav>
    </Header>
  );
}

export default nav;

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import StraightNav from './straightnav';
import BurgerNav from './burgernav';

const Header = styled.header`
  width: 100%;
  min-height: 55px;
  z-index: 1000;
  position: fixed;
  padding-top: 17px;
  top: 0;
`;

const LogoBtn = styled(Link)`
  padding-left: 25px;
  float: left;
  text-decoration: none;
  font-size: 16px;
  color: #000000;
`;

const Nav = styled.nav`
  float: right;
  line-height: 0;
`;

function nav() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <Header>
      <LogoBtn to="/">유도혁</LogoBtn>
      <Nav>{windowSize < 900 ? <BurgerNav /> : <StraightNav />}</Nav>
    </Header>
  );
}

export default nav;

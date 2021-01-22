import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  FaBloggerB,
} from 'react-icons/all';

const Ul = styled.ul`
  outline: none;
`;

const List = styled.li`
  margin-bottom: 6px;
  font-size: 1.125em;
  line-height: 1.5;
`;

const NavBut = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  color: #000000;
`;

const BottomWrap = styled.div`
  width: 100%;
  position: absolute;
  list-style: none;
  bottom: 10px;
  right: 0;
`;

const BottomList = styled.li`
  padding: 10px;
  vertical-align: middle;
  display: inline-block;
`;

const LinkBut = styled.a`
  color: #000000;
`;

var styles = {
  //react-burger-menu-btn
  bmBurgerButton: {
    position: 'relative',
    width: '20px',
    height: '18px',
    right: '25px',
  },
  bmMenuButton: { outline: 'none' },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '300px',
    top: '0',
  },
  bmMenu: {
    background: '#eeeeee',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    overflow: 'auto',
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    top: '0',
    left: '0',
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

function BurgerNav() {
  return (
    <Menu styles={styles} right>
      <Ul>
        <List>
          <NavBut
            to="/projects"
            activeStyle={{
              textDecoration: 'underline',
            }}
          >
            Projects
          </NavBut>
        </List>
        <List>
          <NavBut
            to="/about"
            activeStyle={{
              textDecoration: 'underline',
            }}
          >
            About/Contact
          </NavBut>
        </List>
      </Ul>

      <BottomWrap>
        <BottomList>
          <LinkBut href="https://okdohyuk.tistory.com/" target="_blank">
            <FaBloggerB />
          </LinkBut>
        </BottomList>
        <BottomList>
          <LinkBut href="https://github.com/okdohyuk" target="_blank">
            <RiGithubFill />
          </LinkBut>
        </BottomList>
        <BottomList>
          <LinkBut href="https://www.facebook.com/okdohyuk" target="_blank">
            <RiFacebookCircleFill />
          </LinkBut>
        </BottomList>
      </BottomWrap>
    </Menu>
  );
}

export default BurgerNav;

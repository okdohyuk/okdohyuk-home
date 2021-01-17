import React from 'react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  FaBloggerB,
} from 'react-icons/all';

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

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const List = styled.li`
  padding: 0 25px 0 0;
  vertical-align: middle;
  display: inline-block;
`;

const NavBut = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;

  color: #000000;
`;

const LinkBut = styled.a`
  color: #000000;
`;

function nav() {
  return (
    <Header>
      <LogoBtn to="/">유도혁</LogoBtn>

      <Nav>
        <Ul>
          <List data-menuanchor="projects">
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
          <List>
            <LinkBut href="https://okdohyuk.tistory.com/" target="_blank">
              <FaBloggerB />
            </LinkBut>
          </List>
          <List>
            <LinkBut href="https://github.com/okdohyuk" target="_blank">
              <RiGithubFill />
            </LinkBut>
          </List>
          <List>
            <LinkBut href="https://www.facebook.com/okdohyuk" target="_blank">
              <RiFacebookCircleFill />
            </LinkBut>
          </List>
        </Ul>
      </Nav>
    </Header>
  );
}

export default nav;

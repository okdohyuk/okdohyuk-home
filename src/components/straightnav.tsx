import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  FaBloggerB,
} from 'react-icons/all';

const StraightUl = styled.ul`
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
  font-size: 17px;
  text-decoration: none;

  color: #000000;
`;

const LinkBut = styled.a`
  color: #000000;
`;

function StraightNav() {
  return (
    <StraightUl>
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
    </StraightUl>
  );
}

export default StraightNav;

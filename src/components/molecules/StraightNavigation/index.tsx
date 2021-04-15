import React from 'react';
import styled from 'styled-components';
import { Atom, Link, List, Icon } from 'components';

const StraightUl = styled(List)`
  line-height: 0;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  height: 100%;
  padding-right: 25px;
  align-items: center;
  vertical-align: middle;
  display: inline-block;
`;

const NavBut = styled(Link)`
  font-size: 17px;
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: underline;
    color: #555555;
  }
`;

const LinkText = styled(Atom)``;

const LinkIcon = styled(Icon)`
  margin: 0;
  vertical-align: middle;

  &:hover {
    color: #555555;
  }
`;

function StraightNavigation() {
  return (
    <StraightUl>
      <ListItem>
        <NavBut
          to="/projects"
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          <LinkText>Projects</LinkText>
        </NavBut>
      </ListItem>
      <ListItem>
        <NavBut
          to="/about"
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          <LinkText>About/Contact</LinkText>
        </NavBut>
      </ListItem>
      <ListItem>
        <NavBut href="https://okdohyuk.tistory.com/" target="_blank">
          <LinkIcon icon="blog" />
        </NavBut>
      </ListItem>
      <ListItem>
        <NavBut href="https://github.com/okdohyuk" target="_blank">
          <LinkIcon icon="github" />
        </NavBut>
      </ListItem>
      <ListItem>
        <NavBut href="https://www.facebook.com/okdohyuk" target="_blank">
          <LinkIcon icon="facebook" />
        </NavBut>
      </ListItem>
    </StraightUl>
  );
}

export default StraightNavigation;

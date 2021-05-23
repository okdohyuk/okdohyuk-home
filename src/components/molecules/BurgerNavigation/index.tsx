import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { Block, Link, List, Icon } from 'components';

const ListWrap = styled(List)`
  padding: 0;
  outline: none;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
  line-height: 1.5;
`;

const NavBut = styled(Link)`
  font-size: 17px;
  color: #000000;

  &:hover {
    text-decoration: underline;
    color: #555555;
  }
`;

const NavText = styled(Block)``;

const BottomWrap = styled(Block)`
  padding: 0 1.5em 1.5em;
  bottom: 0;
  left: 0;
  position: absolute;
  list-style: none;
`;

const BottomList = styled.li`
  padding-right: 10px;
  vertical-align: middle;
  display: inline-block;
`;

const LinkBut = styled(Link)`
  color: #000000;
`;

const LinkIcon = styled(Icon)`
  &:hover {
    color: #555555;
  }
`;

const BurgerStyles = {
  bmBurgerButton: {
    width: '20px',
    height: '18px',
    right: '25px',
    position: 'relative',
  },
  bmMenuButton: { outline: 'none' },
  bmBurgerBars: {
    background: '#000000',
  },
  bmCrossButton: {
    width: '24px',
    height: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    width: '300px',
    height: '100%',
    top: '0',
    position: 'fixed',
  },
  bmMenu: {
    padding: '2.5em 1.5em 0',
    background: '#eeeeee',
    fontSize: '1.15em',
  },
  bmOverlay: {
    top: '0',
    left: '0',
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

function BurgerNavigation() {
  return (
    <Menu styles={BurgerStyles} right>
      <ListWrap>
        <ListItem>
          <NavBut to="/projects">
            <NavText>Projects</NavText>
          </NavBut>
        </ListItem>
        <ListItem>
          <NavBut to="/about">
            <NavText>About/Contact</NavText>
          </NavBut>
        </ListItem>
      </ListWrap>
      <BottomWrap>
        <BottomList>
          <LinkBut href="https://okdohyuk.tistory.com/" target="_blank">
            <LinkIcon icon="blog" />
          </LinkBut>
        </BottomList>
        <BottomList>
          <LinkBut href="https://github.com/okdohyuk" target="_blank">
            <LinkIcon icon="github" />
          </LinkBut>
        </BottomList>
        <BottomList>
          <LinkBut href="https://www.facebook.com/okdohyuk" target="_blank">
            <LinkIcon icon="facebook" />
          </LinkBut>
        </BottomList>
      </BottomWrap>
    </Menu>
  );
}

export default BurgerNavigation;

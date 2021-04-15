import styled from 'styled-components';
import { Block, Link, Atom } from 'components';

const BoardItemWrap = styled(Block)`
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
`;

const GoDetail = styled(Link)`
  min-height: 148px;
  padding: 30px 0 30px;
  display: block;
  color: #080808;

  @media screen and (max-width: 767px) {
    min-height: 100px;
  }
`;

const LogoWrap = styled(Atom)`
  max-width: 148px;
  margin-left: 80px;
  float: right;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    max-width: 113px;
    margin-left: 18px;
  }
`;

const Logo = styled.img`
  height: 148px;

  @media screen and (max-width: 767px) {
    width: auto;
    height: 113px;
  }
`;

const Title = styled(Atom)`
  max-height: 2.8em;
  margin-bottom: 8px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 700;
  font-size: 1.225em;
  line-height: 1.4;

  a:hover & {
    text-decoration: underline;
    color: #555555;
  }

  @media screen and (max-width: 767px) {
    line-height: 1.2;
  }
`;

const Introduce = styled(Atom)`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.07em;
  line-height: 1.6;
  color: #666;

  @media screen and (max-width: 767px) {
    -webkit-line-clamp: 2;
  }
`;

function BoardItem({ id, logo, title, introduce }: any) {
  return (
    <BoardItemWrap>
      <GoDetail to={`/contents/${id}`}>
        <LogoWrap>
          <Logo src={logo} />
        </LogoWrap>
        <Title>{title}</Title>
        <Introduce>{introduce}</Introduce>
      </GoDetail>
    </BoardItemWrap>
  );
}

export default BoardItem;

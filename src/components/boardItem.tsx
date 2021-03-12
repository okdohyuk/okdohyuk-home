import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoardItemWrap = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
`;

const GoDetail = styled(Link)`
  min-height: 148px;
  padding: 30px 0 30px;
  display: block;
  text-decoration: none;
  color: #080808;

  @media screen and (max-width: 767px) {
    min-height: 100px;
  }
`;

const LogoWrap = styled.span`
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

const Title = styled.span`
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

  @media screen and (max-width: 767px) {
    line-height: 1.2;
  }
`;

const Introduce = styled.span`
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

function BoardItem({ row }: any) {
  return (
    <BoardItemWrap>
      <GoDetail to={`/contents/${row.id}`}>
        <LogoWrap>
          <Logo src={row.logo}></Logo>
        </LogoWrap>
        <Title>{row.title}</Title>
        <Introduce>{row.introduce}</Introduce>
      </GoDetail>
    </BoardItemWrap>
  );
}

export default connect()(BoardItem);

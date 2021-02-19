import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

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
  width: 195px;
  margin: 0 0 0 -23.5px;

  @media screen and (max-width: 767px) {
    width: 150px;
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
  font-size: 1.425em;
  line-height: 1.4;

  @media screen and (max-width: 767px) {
    font-size: 1.125em;
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
    font-size: 0.9375em;
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

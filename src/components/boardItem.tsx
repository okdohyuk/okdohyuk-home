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
  display: block;
  padding: 30px 0 30px;
  text-decoration: none;
  color: #080808;
`;

const ImgWrap = styled.span`
  max-width: 148px;
  margin-left: 80px;
  float: right;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    max-width: 113px;
    margin-left: 18px;
  }
`;

const Image = styled.img`
  width: 195px;
  margin: 0 0 0 -23.5px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 2.8em;
  font-weight: 700;
  font-size: 1.125em;
  line-height: 1.4;
`;

const Introduce = styled.span`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.9375em;
  line-height: 1.6;
  color: #666;
`;

function BoardItem({ row }: any) {
  console.log(row);

  return (
    <BoardItemWrap>
      <GoDetail to={`/contents/${row.id}`}>
        <ImgWrap>
          <Image src={row.image}></Image>
        </ImgWrap>
        <Title>{row.title}</Title>
        <Introduce>{row.introduce}</Introduce>
      </GoDetail>
    </BoardItemWrap>
  );
}

export default connect()(BoardItem);

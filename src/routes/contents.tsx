import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MainWrap = styled.div`
  padding: 0 15px;
`;

const ContentsWrap = styled.div`
  max-width: 860px;
  margin: 100px auto 100px auto;
`;

const HGroup = styled.div`
  max-width: 860px;
  margin: 50px auto 60px;
  border-bottom: 1px solid #ebebeb;
`;

const Title = styled.h1`
  display: block;
  margin-bottom: 9px;
  font-weight: 700;
  font-size: 1.6875em;
  line-height: 1.4444em;
`;

const LogoWrap = styled.figure`
  margin: 0 auto 20px;
  text-align: center;
`;

const Logo = styled.img`
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
`;

const BackBtn = styled(ButtonBack)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 40px;
  font-weight: 900;
`;

const NextBtn = styled(ButtonNext)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 40px;
  font-weight: 900;
`;

const CarouselMain = styled(CarouselProvider)`
  margin: 25px 0;
`;

const Introduce = styled.div`
  margin: 25px 0;
  font-size: 20px;
`;

const SliderWrap = styled.div`
  position: relative;
`;

const Text = styled.div``;

function Contents({ board }: any) {
  document.title = `${board.title}`;
  return (
    <MainWrap>
      <ContentsWrap>
        <HGroup>
          <Title>{board.title}</Title>
        </HGroup>
        <LogoWrap>
          <Logo src={board.logo}></Logo>
        </LogoWrap>
        <Introduce>{board.introduce}</Introduce>
        <CarouselMain
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          infinite={true}
          totalSlides={board.images.length}
        >
          <SliderWrap>
            <Slider>
              {board.images.map((row: any) => (
                <Slide index={row.id}>
                  <Image src={row.image}></Image>
                </Slide>
              ))}
            </Slider>
            <BackBtn>〈</BackBtn>
            <NextBtn>〉</NextBtn>
          </SliderWrap>
        </CarouselMain>

        <Text dangerouslySetInnerHTML={{ __html: board.text }}></Text>
      </ContentsWrap>
    </MainWrap>
  );
}

function mapStateToProps(state: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { board: state.boards.find((toDo: any) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Contents);

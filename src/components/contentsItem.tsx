import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { RiGithubFill } from 'react-icons/ri';

const ContentsItemWrap = styled.div`
  max-width: 860px;
  margin: 100px auto 100px auto;
  padding: 0 15px;
`;

const HGroup = styled.div`
  max-width: 860px;
  margin: 50px auto 60px;
  border-bottom: 1px solid #ebebeb;
`;

const Title = styled.h1`
  margin-bottom: 9px;
  display: block;
  font-weight: 700;
  font-size: 30px;
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
  width: 40px;
  height: 50px;
  top: 50%;
  left: 0;
  position: absolute;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  @media screen and (max-width: 767px) {
    background-color: transparent;
    color: #7a7a7a;
  }
`;

const NextBtn = styled(ButtonNext)`
  width: 40px;
  height: 50px;
  top: 50%;
  right: 0;
  position: absolute;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  @media screen and (max-width: 767px) {
    background-color: transparent;
    color: #7a7a7a;
  }
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

const Text = styled.div`
  margin: 25px 0;
`;

const Github = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const GoGithub = styled.a``;

function ContentsItem({ board }: any) {
  return (
    <ContentsItemWrap>
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
              <Slide key={row.id} index={row.id}>
                <Image src={row.image} />
              </Slide>
            ))}
          </Slider>
          <BackBtn>〈</BackBtn>
          <NextBtn>〉</NextBtn>
        </SliderWrap>
      </CarouselMain>
      <Text dangerouslySetInnerHTML={{ __html: board.text }}></Text>
      <Github>
        <GoGithub href={board.github} target="_blank">
          <RiGithubFill style={{ width: 80, height: 80 }} color="#000" />
        </GoGithub>
      </Github>
    </ContentsItemWrap>
  );
}

export default ContentsItem;

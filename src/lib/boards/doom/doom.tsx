import logo from './doom_logo.png';
import doom_1 from './doom_1.png';
import doom_2 from './doom_2.png';
import doom_3 from './doom_3.png';
import doom_4 from './doom_4.png';
import doom_5 from './doom_5.png';
import doom_6 from './doom_6.png';

const doom = {
  id: 2,
  title: '도옴 : 지정 헌혈을 위한 도움',
  introduce:
    "도옴은 헌혈자 감소 및 환자가 급등하면서 수혈할 혈액이 부족해지며 수술을 받지 못하시는 분들을 위해 개발한 앱입니다. '제 5회 전국 고등학교 동아리 소프트웨어 경진대회'에서 동상 수상을 하였습니다.",
  logo: logo,
  images: [
    { id: 1, image: doom_1 },
    { id: 2, image: doom_2 },
    { id: 3, image: doom_3 },
    { id: 4, image: doom_4 },
    { id: 5, image: doom_5 },
    { id: 6, image: doom_6 },
  ],
  text: `<h2 style="font-size: 26px; font-weight: bold">개발 도구</h2>
  <p style="font-size: 18px">프레임워크 : React Native</p>
  <p style="font-size: 18px">서버 & DB : firebase</p>
  <p style="font-size: 18px">형상관리 : Git</p>
  <p style="font-size: 18px">언어: TypeScript</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold">구현된 기능</h2>
  <p style="font-size: 18px">게시판 기능</p>
  <p style="font-size: 18px">1대1 실시간 채팅</p>
  <p style="font-size: 18px">위치기반 맵 서비스</p>
  <p style="font-size: 18px">유저 서비스</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold">내가 구현한 기능</h2>
  <p style="font-size: 18px">UI/UX 구현</p>
  <p style="font-size: 18px">회원 관련 기능(프로필 이미지, 프로필 수정)</p>
  <p style="font-size: 18px">게시판 기능</p>
  <p style="font-size: 18px">실시간 채팅 기능</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold">프로젝트를 진행하면서</h2>
  <p style="font-size: 18px">
    프로젝트 기획단계부터 참여하여 메인 서비스 및 부가서비스 그리고 유저층 등을
    기획하면서 기획자의 고뇌에 대하여 알게 되었다.
  </p>
  `,
};

export default doom;

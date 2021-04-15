import logo from './ssr_logo.png';
import ssr_1 from './ssr_1.png';
import ssr_2 from './ssr_2.png';
import ssr_3 from './ssr_3.png';
import ssr_4 from './ssr_4.png';
import ssr_5 from './ssr_5.png';
import ssr_6 from './ssr_6.png';
import ssr_7 from './ssr_7.png';

const ssr = {
  id: 1,
  title: 'SSR 동아리 사이트',
  introduce:
    'SSR 동아리 사이트는 한세사이버보안고등학교 시스템보안연구동아리에서 동아리 홍보와 부원 모집을 위하여 개발한 동아리 소개 및 지원신청을 할 수 있는 사이트입니다.',
  logo: logo,
  images: [
    {
      id: 1,
      image: ssr_1,
    },
    {
      id: 2,
      image: ssr_2,
    },
    {
      id: 3,
      image: ssr_3,
    },
    {
      id: 4,
      image: ssr_4,
    },
    {
      id: 5,
      image: ssr_5,
    },
    {
      id: 6,
      image: ssr_6,
    },
    {
      id: 7,
      image: ssr_7,
    },
  ],
  text: `<h2 style="font-size: 26px; font-weight: bold; line-height: 150%;">개발 도구</h2>
  <p style="font-size: 18px">프레임워크 : React</p>
  <p style="font-size: 18px">서버 : Node.js</p>
  <p style="font-size: 18px">DB : MySQL</p>
  <p style="font-size: 18px">형상관리 : Git</p>
  <p style="font-size: 18px">언어: TypeScript</p>
  <p style="font-size: 18px">배포: Amazon AWS</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold; line-height: 150%;">구현된 기능</h2>
  <p style="font-size: 18px">동아리 소개 기능</p>
  <p style="font-size: 18px">신청서 신청 및 저장 기능</p>
  <p style="font-size: 18px">저장한 신청서 수정기능</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold; line-height: 150%;">내가 구현한 기능</h2>
  <p style="font-size: 18px">웹 UI/UX 구현</p>
  <p style="font-size: 18px">신청서 신청 및 저장 기능(유효성 검사)</p>
  <p style="font-size: 18px">저장된 신청서 불러오기 기능</p>
  <p>&nbsp;</p>
  <h2 style="font-size: 26px; font-weight: bold; line-height: 150%;">프로젝트를 진행하면서</h2>
  <p style="font-size: 18px">
    처음 진행하는 팀 프로젝트여서 나의 개발실력으로 개발을 할 수 있을지 걱정이
    들었다. 하지만, 프로젝트를 배포 후 느끼는 성취감만을 생각하며 개발에 임하였다.
    기본적인 오류부터 해결하기 어려운 오류, 기능 구현에서 막힐 때가 자주 있었지만,
    이 또한 해결해가며 개발 실력이 많이 늘었다. 특히 기억나는 점은 서버와
    RESTful통신을 하였는데 리스폰으로 403 에러를 받아서 무엇이 잘못되었을까
    생각하다가 결국에는 자료형의 타입을 바꿔 보내었더니 성공했었던 기억이 난다.
  </p>  
  `,
  github: 'https://github.com/okdohyuk/ssr-front',
};

export default ssr;

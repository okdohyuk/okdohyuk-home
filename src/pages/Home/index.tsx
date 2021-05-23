import { HomeTemplate, ContentsWrap, WrapperText } from 'components';

function Home() {
  document.title = `okdohyuk's home`;

  return (
    <HomeTemplate
      contentswrap={<ContentsWrap />}
      wrappertext={<WrapperText />}
    />
  );
}

export default Home;

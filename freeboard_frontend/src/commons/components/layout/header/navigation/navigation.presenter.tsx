import {
  Bar,
  Freeboard,
  Market,
  MenuBar,
  MenuWrapper,
  MyPage,
} from './navigation.style';

export default function Navigation() {
  return (
    <>
      <MenuBar>
        <MenuWrapper>
          {' '}
          <Freeboard>자유게시판</Freeboard>
          <Bar />
          <Market>중고마켓</Market>
          <Bar />
          <MyPage>마이페이지</MyPage>
        </MenuWrapper>
      </MenuBar>
    </>
  );
}

import {useRouter} from 'next/router';
import {
  Bar,
  Freeboard,
  Market,
  MenuBar,
  MenuWrapper,
  MyPage,
} from './navigation.style';

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <MenuBar>
        <MenuWrapper>
          <Freeboard select={router.pathname.includes('board')}>
            자유게시판
          </Freeboard>
          <Bar />
          <Market select={router.pathname.includes('market')}>중고마켓</Market>
          <Bar />
          <MyPage select={router.pathname.includes('mypage')}>
            마이페이지
          </MyPage>
        </MenuWrapper>
      </MenuBar>
    </>
  );
}

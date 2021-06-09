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

  const onClickFreeBoard = () => {
    router.push('/board');
  };

  const onClickMarket = () => {};

  const onClickMyPage = () => {};

  return (
    <>
      <MenuBar>
        <MenuWrapper>
          <Freeboard
            style={{cursor: 'pointer'}}
            onClick={onClickFreeBoard}
            select={router.pathname.includes('board')}
          >
            자유게시판
          </Freeboard>
          <Bar />
          <Market
            style={{cursor: 'pointer'}}
            onClick={onClickMarket}
            select={router.pathname.includes('market')}
          >
            중고마켓
          </Market>
          <Bar />
          <MyPage
            style={{cursor: 'pointer'}}
            onClick={onClickMyPage}
            select={router.pathname.includes('mypage')}
          >
            마이페이지
          </MyPage>
        </MenuWrapper>
      </MenuBar>
    </>
  );
}

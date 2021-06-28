import {
  PageWrapper,
  ProfileBar,
  Title,
  Wrapper,
  UserName,
  ListArea,
  ShowMyPoint,
  WonMark,
  Point,
  MyCart,
  MyPoint,
  MyProfile,
  MyList,
  MenuNavBar,
  MyPage,
  Number,
  Price,
  Date,
  MappedItemList,
  MapNumber,
  MapTitle,
  MapPrice,
  MapDate,
} from './mypage.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {getDate} from '../commons/libraries/utils';

export function MyPageUI({mySoldData}) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <ProfileBar>
            <MyPage>MYPAGE</MyPage>
            <AccountCircleIcon
              style={{width: '80px', height: '80px', color: '#bdbdbd'}}
            />
            <UserName>김아무개</UserName>
            <ShowMyPoint>
              <WonMark>₩</WonMark>
              <Point>999,999</Point>
            </ShowMyPoint>
            <MyList>
              <ShowMyPoint>
                <ShoppingCartIcon
                  style={{width: '20px', height: '20px', color: '#bdbdbd'}}
                />
                <MyCart>내 장터</MyCart>
              </ShowMyPoint>
              <ShowMyPoint>
                <AttachMoneyIcon
                  style={{width: '20px', height: '20px', color: '#bdbdbd'}}
                />
                <MyPoint>내 포인트</MyPoint>
              </ShowMyPoint>
              <ShowMyPoint>
                <AccountCircleIcon
                  style={{width: '20px', height: '20px', color: '#bdbdbd'}}
                />
                <MyProfile>내 프로필</MyProfile>
              </ShowMyPoint>
            </MyList>
          </ProfileBar>
          <ListArea>
            <MenuNavBar>
              <Number>번호</Number>
              <Title>제목</Title>
              <Price>판매가격</Price>
              <Date>날짜</Date>
            </MenuNavBar>
            {mySoldData?.fetchUseditemsISold
              .map((data, index) => (
                <MappedItemList key={data._id}>
                  <MapNumber>{index + 1}</MapNumber>
                  <MapTitle>{data.name}</MapTitle>
                  <MapPrice>₩ {data.price.toLocaleString()}</MapPrice>
                  <MapDate>{getDate(data.updatedAt || data.createdAt)}</MapDate>
                </MappedItemList>
              ))
              .reverse()}
          </ListArea>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

export default MyPageUI;

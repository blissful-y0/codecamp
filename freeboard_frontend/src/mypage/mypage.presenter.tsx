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
  ChargePoint,
} from './mypage.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {getDate} from '../commons/libraries/utils';
import Link from 'next/link';
import {useState} from 'react';
import PaymentModal from './payment/payment.modal.presenter';

export function MyPageUI({mySoldData, userInfo, myTransaction}) {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const handleClickToggle = () => setPaymentOpen((prev) => !prev);

  return (
    <>
      {paymentOpen && (
        <PaymentModal
          paymentOpen={paymentOpen}
          handleClickToggle={handleClickToggle}
        />
      )}
      <PageWrapper>
        <Wrapper>
          <ProfileBar>
            <MyPage>MYPAGE</MyPage>
            <AccountCircleIcon
              style={{width: '80px', height: '80px', color: '#bdbdbd'}}
            />
            <UserName>{userInfo?.name}</UserName>
            <ShowMyPoint>
              <WonMark>₩</WonMark>
              <Point>2,000</Point>
            </ShowMyPoint>
            <ChargePoint onClick={handleClickToggle}>충전하기</ChargePoint>
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
                <div key={data._id}>
                  <Link href={`/market/list/${data._id}`}>
                    <MappedItemList>
                      <MapNumber>{index + 1}</MapNumber>
                      <MapTitle>{data.name}</MapTitle>
                      <MapPrice>₩ {data.price.toLocaleString()}</MapPrice>
                      <MapDate>
                        {getDate(data.updatedAt || data.createdAt)}
                      </MapDate>
                    </MappedItemList>
                  </Link>
                </div>
              ))
              .reverse()}
          </ListArea>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

export default MyPageUI;

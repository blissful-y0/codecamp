import styled from '@emotion/styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const Wrapper = styled.div`
  width: 80%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8;
  padding-bottom: 20px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileIcon = AccountCircleIcon;

export const ItemListWrapper = styled.div`
  width: 100%;
  height: 200px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ItemSumnail = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid black;
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
`;

export const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  height: 24px;
`;

export const ItemInfoWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2%;
  width: 68%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  height: 20px;
  color: #4f4f4f;
  align-items: center;
  padding-bottom: 15px;
  justify-content: center;
`;

export const ItemSubtitle = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  font-weight: 500;
  margin-top: 7px;
  height: 16px;
`;

export const ItemHashTag = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  font-weight: 500;
  height: 16px;
  margin-top: 7px;
`;

export const HeartIcon = FavoriteIcon;

export const ItemPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 160px;
  width: 20%;
  justify-content: flex-end;
  margin-left: 20px;
`;

export const ItemOnSales = styled.div`
  height: 23px;
  font-size: 18px;
  border-bottom: 2px solid #ffd600;
  color: black;
`;

export const ItemOnSold = styled.div`
  height: 23px;
  font-size: 18px;
  border-bottom: 2px solid #ffd600;
  color: black;
`;

export const ItemOnSalesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 15%;
  margin-left: -20px;
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  outline: none;
  background-color: black;
  border: 0px;
  color: white;
  margin-left: 10px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45%;
`;

export const WriteBoardButton = styled.button`
  background: #ffffff;
  /* Black */
  padding: 14px 16px;
  border: 1px solid #000000;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 10px;
`;

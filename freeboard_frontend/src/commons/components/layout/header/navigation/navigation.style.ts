import styled from '@emotion/styled';

// interface IProps {
//   select: boolean;
// }

export const MenuBar = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  margin-top: -5px;
`;
export const Bar = styled.div`
  width: 1px;
  height: 20px;
  background-color: black;
`;

export const MenuWrapper = styled.div`
  width: 30%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Freeboard = styled.button`
  width: 83px;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  color: black;
  cursor: pointer;
  font-weight: ${({select}: {select: boolean}) => (select ? 'bold' : 'none')};
`;

export const Market = styled.button`
  width: 83px;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  color: #514400;
  cursor: pointer;
  font-weight: ${({select}: {select: boolean}) => (select ? 'bold' : 'none')};
`;

export const MyPage = styled.button`
  width: 83px;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  color: #514400;
  cursor: pointer;
  font-weight: ${({select}: {select: boolean}) => (select ? 'bold' : 'none')};
`;

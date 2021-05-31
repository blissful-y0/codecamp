import styled from '@emotion/styled';
import {IProps} from './list.types';

export const ListWholeWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80% auto;
  align-items: center;
  margin-top: 30px;
  /* padding: 30px; */
`;

export const SelectButton = styled.button`
  background-color: #ed0086;
  margin: 30px;
  width: 180px;
  height: 40px;
  border: 0px;
  border-radius: 50px;
  /* font-weight: bold; */
  font-size: 19px;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 85vw;
  justify-content: flex-start;
`;

export const NavigationBar = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
  height: 80px auto;
  text-align: center;
  font-weight: bold;
  /* background-color: rgba(202, 202, 202, 0.3); */
`;

export const ListBar = styled.div`
  display: flex;
  /* border-top: 1px solid black; */
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
  height: 80px auto;
  text-align: center;
  /* font-weight: bold; */
  /* background-color: rgba(202, 202, 202, 0.3); */
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
`;

export const ListTitle = styled.div`
  text-align: center;
  width: 60%;
  max-width: 60%;
  cursor: pointer;
`;

export const ListNumber = styled.div`
  width: 5%;
  text-align: center;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  :checked {
    background-color: #ed0086;
  }
`;

export const Writer = styled.div`
  width: 7%;
  text-align: center;
`;

export const CreatedAt = styled.div`
  width: 9%;
  text-align: center;
`;
export const BoardWriteButton = styled.button`
  /* margin-top: 10px; */
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 16px 14px 16px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
`;

export const WriteButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const Span = styled.span`
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  color: ${(props: IProps) => (props.isActive ? '#FFD600' : 'black')};
  border-bottom: ${(props: IProps) =>
    props.isActive ? '1px solid #FFD600' : '0px'};
`;

export const PageIndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
  margin-top: -38px;
`;

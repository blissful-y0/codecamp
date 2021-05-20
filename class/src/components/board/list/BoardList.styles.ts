import styled from "@emotion/styled";

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
  font-weight: bold;
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
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
  height: 80px auto;
  text-align: center;
  background-color: rgba(202, 202, 202, 0.3);
`;

export const ListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
`;

export const ListTitle = styled.div`
  width: 60%;
`;

export const ListNumber = styled.div`
  width: 5%;
  text-align: left;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  :checked {
    background-color: #ed0086;
  }
`;

export const Writer = styled.div`
  width: 10%;
  text-align: center;
`;

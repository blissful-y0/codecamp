import styled from '@emotion/styled';

export const ReadCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  flex-direction: column;
`;

export const UIWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 101.5%;
`;

export const ReplyIcon = styled.div`
  width: 5%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 90%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100px;
  text-align: justify;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
`;

export const BottomNavigation = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: flex-end;
`;

export const UploadButton = styled.button`
  width: 10%;
  height: 40px;
  outline: none;
  border: 1px solid #ffd600;
  background: #ffd600;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #000000;
`;

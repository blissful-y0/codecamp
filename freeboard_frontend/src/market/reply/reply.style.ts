import styled from '@emotion/styled';

export const UIWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TotalWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Comment = styled.h1`
  font-size: 20px;
`;

export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
  resize: none;
`;

export const UpdateContents = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
  resize: none;
`;

export const ContentsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #bdbdbd;
  border-top: 0px;
`;

export const UploadButton = styled.button`
  width: 11%;
  height: 52px;
  background-color: ${({disabled}) =>
    disabled === false ? 'black' : '#bdbdbd'};
  text-align: center;
  color: ${({disabled}) => (disabled === false ? 'white' : 'black')};
  border: 0px;
  cursor: pointer;
`;

export const StringLengthCount = styled.div`
  padding-left: 10px;
  padding-top: 18px;
  font-size: 16px;
  width: 90%;
  height: 52px;
  text-align: left;
  color: #bdbdbd;
`;

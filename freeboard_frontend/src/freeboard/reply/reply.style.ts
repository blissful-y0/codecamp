import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 90vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriterWrapper = styled.div`
  width: 400px;
  /* border: 1px solid black; */
  padding: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-left: -10px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  margin-top: 20px;
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

export const Writer = styled.input`
  width: 180px;
  height: 50px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 180px;
  height: 50px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;

export const Star = styled.img`
  width: 20px;
  height: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 161px;
  max-height: 161px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;

export const ContentsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #bdbdbd;
  border-top: 0px;
`;

export const UploadButton = styled.button`
  width: 10%;
  height: 52px;
  background-color: black;
  text-align: center;
  color: white;
  border: 0px;
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

export const ReadCommentWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  padding: 15px;
  /* align-items: center; */
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentWriter = styled.h1`
  font-size: 16px;
`;

export const CommentContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 40px;
`;

export const CommnetCreatedAt = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;

export const UpdateIcon = styled.img`
  margin-top: 10px;
  width: 18px;
  height: 18px;
  margin-right: 30px;
`;

export const DeleteIcon = styled.img`
  margin-top: 12px;
  width: 14px;
  height: 14px;
`;

export const ProfilePhoto = styled.img`
  margin-top: 10px;
  width: 40px;
  height: 40px;
`;

export const CommentContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 100%;
  padding-bottom: 10px;
`;

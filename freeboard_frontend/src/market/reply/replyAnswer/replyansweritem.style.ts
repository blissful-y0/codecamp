import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
  display: flex;
  width: 99%;
  /* justify-content: flex-start; */
  align-items: center;
  margin-top: 20px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid #bdbdbd;
  border-top: 0px;
`;

export const ReadCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
`;

export const CommentWriter = styled.h1`
  font-size: 16px;
`;

export const CommentContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 15px;
`;

export const CommnetCreatedAt = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;

export const ProfilePhoto = styled.div`
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

export const WriterRatingWrapper = styled.div`
  display: flex;
  width: 20%;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: space-between;
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
  border-bottom: 1px dashed #bdbdbd;
`;

export const UpdateCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  margin-top: 10px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  padding-bottom: 10px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
  resize: none;
`;

export const UpdateContentsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #bdbdbd;
  border-top: 0px;
`;

export const UpdateButton = styled.button`
  width: 5%;
  height: 52px;
  background-color: #ffd600;
  text-align: center;
  color: black;
  border: 1px solid #ffd600;
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

export const UpdateWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export const CancelButton = styled.button`
  width: 5%;
  height: 52px;
  background-color: #bdbdbd;
  text-align: center;
  color: black;
  border: 0px;
  cursor: pointer;
`;

import styled from '@emotion/styled';

export const CommentWrapper = styled.div`
  display: flex;
  width: 99%;
  /* justify-content: flex-start; */
  align-items: center;
  margin: auto;
  margin-top: 20px;
`;

export const ContentsWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #bdbdbd;
  border-top: 0px;
`;

export const ReadCommentWrapper = styled.div`
  display: flex;
  width: 93%;
  padding: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
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
  width: 100%;
`;

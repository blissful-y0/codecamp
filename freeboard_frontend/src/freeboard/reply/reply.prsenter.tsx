import {
  Password,
  Writer,
  Wrapper,
  Contents,
  WriterWrapper,
  TotalWrapper,
  CommentIcon,
  Comment,
  CommentWrapper,
  ContentsWrapper,
  UploadButton,
  StringLengthCount,
  Star,
  ReadCommentWrapper,
  ProfilePhoto,
  CommentContentsWrapper,
  CommentWriter,
  CommentContents,
  CommnetCreatedAt,
  UpdateIcon,
  DeleteIcon,
  UIWrapper,
} from './reply.style';
import {getDate} from '../commons/libraries/utils';

export default function RenderCommentUI({
  data,
  onChangeCommentInput,
  onClickCommentButton,
  commentLength,
  commentFlag,
}) {
  return (
    <UIWrapper>
      <CommentWrapper>
        <CommentIcon src="/comment.png"></CommentIcon>
        <Comment>댓글</Comment>
      </CommentWrapper>
      <TotalWrapper>
        <Wrapper>
          <WriterWrapper>
            <Writer
              name="writer"
              type="text"
              onChange={onChangeCommentInput}
              placeholder="작성자"
              maxLength={Number(10)}
            />
            <Password
              name="password"
              type="password"
              onChange={onChangeCommentInput}
              placeholder="비밀번호"
            />
          </WriterWrapper>
          <Contents
            onChange={onChangeCommentInput}
            name="contents"
            maxLength={Number(100)}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></Contents>
          <ContentsWrapper>
            <StringLengthCount>{commentLength}/100</StringLengthCount>
            <UploadButton onClick={onClickCommentButton} disabled={commentFlag}>
              등록하기
            </UploadButton>
          </ContentsWrapper>
        </Wrapper>
      </TotalWrapper>
      {data?.fetchBoardComments
        ?.map((data) => (
          <div key={data._id}>
            <ReadCommentWrapper>
              <ProfilePhoto src="/profile.png"></ProfilePhoto>
              <CommentContentsWrapper>
                <CommentWriter>{data.writer}</CommentWriter>
                <CommentContents>{data.contents}</CommentContents>
                <CommnetCreatedAt>{getDate(data.createdAt)}</CommnetCreatedAt>
              </CommentContentsWrapper>
              <UpdateIcon src="/update.png" />
              <DeleteIcon src="/delete.png" />
            </ReadCommentWrapper>
          </div>
        ))
        .reverse()}
    </UIWrapper>
  );
}

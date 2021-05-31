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
  UIWrapper,
} from './reply.style';
import ReplyUpdateUI from './replyitems.presenter';

export default function RenderCommentUI({
  data,
  onChangeCommentInput,
  onClickCommentButton,
  commentLength,
  commentFlag,
  commentData,
  Rating,
  handleSaveStar,
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
              value={commentData.writer}
              onChange={onChangeCommentInput}
              placeholder="작성자"
              maxLength={Number(10)}
            />
            <Password
              name="password"
              type="password"
              onChange={onChangeCommentInput}
              placeholder="비밀번호"
              value={commentData.password}
            />
            <Rating
              name="rating"
              onChange={(event, newValue) => {
                handleSaveStar(newValue);
              }}
              // value={commentData.value}
              size="medium"
            />
          </WriterWrapper>
          <Contents
            onChange={onChangeCommentInput}
            value={commentData.contents}
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
      {data?.fetchBoardComments?.map((data) => (
        <div key={data._id}>
          <ReplyUpdateUI data={data}></ReplyUpdateUI>
        </div>
      ))}
    </UIWrapper>
  );
}

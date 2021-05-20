import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_REPLY} from '../reply/reply.query';
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../commons/types/generated/types';
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
} from './reply.style';
import {getDate} from '../commons/libraries/utils';

export default function ReplyComponent() {
  const router = useRouter();
  const {data, loading, error} = useQuery<IQuery, IQueryFetchBoardCommentsArgs>(
    FETCH_REPLY,
    {
      variables: {
        boardId: String(router.query._id),
      },
    }
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  return (
    <>
      <CommentWrapper>
        <CommentIcon src="/comment.png"></CommentIcon>
        <Comment>댓글</Comment>
      </CommentWrapper>
      <TotalWrapper>
        <Wrapper>
          <WriterWrapper>
            <Writer placeholder="작성자" />
            <Password placeholder="비밀번호" />
          </WriterWrapper>
          <Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></Contents>
          <ContentsWrapper>
            <StringLengthCount>100/100</StringLengthCount>
            <UploadButton>등록하기</UploadButton>
          </ContentsWrapper>
        </Wrapper>
      </TotalWrapper>
      {data?.fetchBoardComments
        ?.map((data) => (
          <div>
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
    </>
  );
}

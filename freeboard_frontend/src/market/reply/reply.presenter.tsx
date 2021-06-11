import {
  UIWrapper,
  Wrapper,
  Contents,
  ContentsWrapper,
  StringLengthCount,
  UploadButton,
} from './reply.style';

export default function RenderCommentUI({
  onClickUpload,
  commentLength,
  onChangeInput,
}) {
  return (
    <UIWrapper>
      <Wrapper>
        <Contents
          name="contents"
          onChange={onChangeInput}
          maxLength={Number(100)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></Contents>
        <ContentsWrapper>
          <StringLengthCount>{commentLength}/100</StringLengthCount>
          <UploadButton onClick={onClickUpload}>등록하기</UploadButton>
        </ContentsWrapper>
      </Wrapper>
    </UIWrapper>
  );
}

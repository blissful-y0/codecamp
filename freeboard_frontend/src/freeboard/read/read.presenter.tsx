import {
  Wrapper,
  NavigationBar,
  ProfilePhoto,
  WriterName,
  CreatedAt,
  WriterDateInfoWrapper,
  WriterDateInfoWrapper2,
  Icons,
  Link,
  IconWrapper,
  Title,
  Contexts,
  ContextsWrapper,
  Youtube,
  LikeDislikeWrapper,
  LikeButton,
  DislikeButton,
  ButtonWrapper,
  Label,
  GreyButton,
  GreyButtonWrapper,
  TotalWrapper,
} from './read.style';
import {getDate} from '../commons/libraries/utils';
import ReplyUI from '../reply/reply.container';

export default function BoardReadUI({data, onClickListButton}) {
  return (
    <>
      <TotalWrapper>
        <Wrapper>
          <NavigationBar>
            <WriterDateInfoWrapper>
              <ProfilePhoto></ProfilePhoto>
              <WriterDateInfoWrapper2>
                <WriterName>{data?.fetchBoard.writer}</WriterName>
                <CreatedAt>{getDate(data?.fetchBoard.createdAt)}</CreatedAt>
              </WriterDateInfoWrapper2>
            </WriterDateInfoWrapper>
            <IconWrapper>
              <Link style={{backgroundImage: `url(/link.png)`}}></Link>
              <Icons style={{backgroundImage: `url(/location.png)`}}></Icons>
            </IconWrapper>
          </NavigationBar>
          <Title>{data?.fetchBoard.title}</Title>
          <ContextsWrapper>
            <Contexts>{data?.fetchBoard.contents}</Contexts>
          </ContextsWrapper>
          <Youtube></Youtube>
          <LikeDislikeWrapper>
            <ButtonWrapper>
              <LikeButton src="/like.png"></LikeButton>
              <Label style={{color: '#FFD600'}}>1920</Label>
            </ButtonWrapper>
            <ButtonWrapper>
              <DislikeButton src="/dislike.png"></DislikeButton>
              <Label style={{color: '#828282'}}>1920</Label>
            </ButtonWrapper>
          </LikeDislikeWrapper>
        </Wrapper>
        <GreyButtonWrapper>
          <GreyButton onClick={onClickListButton}>목록으로</GreyButton>
          <GreyButton>수정하기</GreyButton>
        </GreyButtonWrapper>
        <ReplyUI />
      </TotalWrapper>
    </>
  );
}

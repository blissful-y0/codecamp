import {
  Wrapper,
  NavigationBar,
  ProfilePhoto,
  WriterName,
  CreatedAt,
  WriterDateInfoWrapper,
  WriterDateInfoWrapper2,
  IconWrapper,
  Title,
  Contexts,
  ContextsWrapper,
  LikeDislikeWrapper,
  ButtonWrapper,
  Label,
  GreyButton,
  GreyButtonWrapper,
  TotalWrapper,
  Image,
} from './read.style';
import {getDate} from '../../commons/libraries/utils';
import ReplyUI from '../reply/reply.container';
import UpdateModal from './modal/Modal.container';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import YoutubeUI from '../../commons/components/youtube/youtube.container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function BoardReadUI({
  data,
  onClickListButton,
  open,
  handleClose,
  handleClickOpen,
  onClickLike,
  onClickDislike,
}) {
  return (
    <>
      <TotalWrapper>
        {open && <UpdateModal handleClose={handleClose} />}
        <Wrapper>
          <NavigationBar>
            <WriterDateInfoWrapper>
              <ProfilePhoto>
                <AccountCircleIcon
                  style={{color: '#BDBDBD', width: '47px', height: '47px'}}
                />
              </ProfilePhoto>
              <WriterDateInfoWrapper2>
                <WriterName>{data?.fetchBoard.writer}</WriterName>
                <CreatedAt>{getDate(data?.fetchBoard.createdAt)}</CreatedAt>
              </WriterDateInfoWrapper2>
            </WriterDateInfoWrapper>
            <IconWrapper>
              <LinkIcon style={{fontSize: 35, color: '#FFD600'}}></LinkIcon>
              <LocationOnIcon
                style={{fontSize: 35, color: '#FFD600'}}
              ></LocationOnIcon>
            </IconWrapper>
          </NavigationBar>
          <Title>{data?.fetchBoard.title}</Title>
          <ContextsWrapper>
            <Contexts>{data?.fetchBoard.contents}</Contexts>
          </ContextsWrapper>
          <YoutubeUI Url={data?.fetchBoard.youtubeUrl} />
          {data?.fetchBoard?.images.map((data) => (
            <Image src={data} />
          ))}
          <LikeDislikeWrapper>
            <ButtonWrapper>
              <ThumbUpAltIcon
                onClick={onClickLike}
                style={{cursor: 'pointer', fontSize: 30, color: '#FFD600'}}
              ></ThumbUpAltIcon>
              <Label style={{color: '#FFD600'}}>
                {data?.fetchBoard.likeCount}
              </Label>
            </ButtonWrapper>
            <ButtonWrapper>
              <ThumbDownAltIcon
                onClick={onClickDislike}
                style={{cursor: 'pointer', fontSize: 30, color: '#828282'}}
              ></ThumbDownAltIcon>
              <Label style={{color: '#828282'}}>
                {data?.fetchBoard.dislikeCount}
              </Label>
            </ButtonWrapper>
          </LikeDislikeWrapper>
        </Wrapper>
        <GreyButtonWrapper>
          <GreyButton onClick={onClickListButton}>목록으로</GreyButton>
          <GreyButton onClick={handleClickOpen}>수정하기</GreyButton>
        </GreyButtonWrapper>
        <ReplyUI />
      </TotalWrapper>
    </>
  );
}

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
  Input,
} from './read.style';
import {getDate} from '../commons/libraries/utils';
import ReplyUI from '../reply/reply.container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BoardReadUI({
  data,
  onClickListButton,
  handleClickOpen,
  open,
  handleClose,
  onChnagePasswordInput,
  submittedPassword,
  handleSendPassword,
}) {
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
          <GreyButton onClick={handleClickOpen}>수정하기</GreyButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'비밀번호를 입력해 주세요.'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Input
                  placeholder={submittedPassword}
                  onChange={onChnagePasswordInput}
                  name="submiitedPassword"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                취소하기
              </Button>
              <Button onClick={handleSendPassword} color="primary" autoFocus>
                보내기
              </Button>
            </DialogActions>
          </Dialog>
        </GreyButtonWrapper>
        <ReplyUI />
      </TotalWrapper>
      {/* <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          수정하기
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'비밀번호를 입력해 주세요.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Input />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소하기
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              보내기
            </Button>
          </DialogActions>
        </Dialog>
      </div> */}
    </>
  );
}

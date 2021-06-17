import {
  ReadCommentWrapper,
  ProfilePhoto,
  CommentContentsWrapper,
  CommentWriter,
  CommentContents,
  WriterRatingWrapper,
  CommnetCreatedAt,
  UIWrapper,
  ReplyIcon,
  Wrapper,
} from './replyansweritem.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ReplyIconforUI from '@material-ui/icons/Reply';
import {getDate} from '../../commons/libraries/utils';

export default function AnswerUI() {
  return (
    <UIWrapper>
      <Wrapper>
        <ReplyIcon>
          <SubdirectoryArrowRightIcon style={{width: '30px', height: '30px'}} />
        </ReplyIcon>
        <ReadCommentWrapper>
          <ProfilePhoto>
            <AccountCircleIcon
              style={{width: '47px', height: '47px', color: '#BDBDBD'}}
            />
          </ProfilePhoto>
          <CommentContentsWrapper>
            <WriterRatingWrapper>
              <CommentWriter>adsf</CommentWriter>
            </WriterRatingWrapper>
            <CommentContents>asdf</CommentContents>
            <CommnetCreatedAt>asdf</CommnetCreatedAt>
          </CommentContentsWrapper>
          <ReplyIconforUI style={{cursor: 'pointer', marginRight: '12px'}} />
          <CreateIcon style={{cursor: 'pointer'}} />
          <DeleteIcon
            style={{cursor: 'pointer', marginLeft: '10px'}}
            // onClick={handleDeleteModalToggle}
          />
        </ReadCommentWrapper>
      </Wrapper>
    </UIWrapper>
  );
}

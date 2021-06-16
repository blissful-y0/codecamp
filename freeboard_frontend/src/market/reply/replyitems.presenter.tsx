import {
  ReadCommentWrapper,
  ProfilePhoto,
  CommentContentsWrapper,
  CommentWriter,
  CommentContents,
  WriterRatingWrapper,
  CommnetCreatedAt,
  UIWrapper,
} from './replyitems.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {getDate} from '../../commons/libraries/utils';

export function ReplyQuestionUI({data}) {
  return (
    <>
      <UIWrapper>
        <ReadCommentWrapper>
          <ProfilePhoto>
            <AccountCircleIcon
              style={{width: '47px', height: '47px', color: '#BDBDBD'}}
            />
          </ProfilePhoto>
          <CommentContentsWrapper>
            <WriterRatingWrapper>
              <CommentWriter>{data?.user?.name}</CommentWriter>
            </WriterRatingWrapper>
            <CommentContents>{data?.contents}</CommentContents>
            <CommnetCreatedAt>
              {getDate(data?.updatedAt) || getDate(data?.createdAt)}
            </CommnetCreatedAt>
          </CommentContentsWrapper>
          <CreateIcon style={{cursor: 'pointer'}} />
          <DeleteIcon
            style={{cursor: 'pointer', marginLeft: '10px'}}
            // onClick={handleDeleteModalToggle}
          />
        </ReadCommentWrapper>
      </UIWrapper>
    </>
  );
}

export default ReplyQuestionUI;

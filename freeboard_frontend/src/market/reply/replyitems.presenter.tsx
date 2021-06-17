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
import ReplyIcon from '@material-ui/icons/Reply';
import {getDate} from '../../commons/libraries/utils';
import AnswerUI from './replyansweritem.presenter';
import ReplyWrite from './replyWrite.presenter';
import {useState} from 'react';

export function ReplyQuestionUI({data}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

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
          <ReplyIcon
            onClick={handleClickOpen}
            style={{cursor: 'pointer', marginRight: '12px'}}
          />
          <CreateIcon style={{cursor: 'pointer'}} />
          <DeleteIcon
            style={{cursor: 'pointer', marginLeft: '10px'}}
            // onClick={handleDeleteModalToggle}
          />
        </ReadCommentWrapper>
      </UIWrapper>
      {open && (
        <ReplyWrite replyId={data._id} handleClickOpen={handleClickOpen} />
      )}
      <AnswerUI />
    </>
  );
}

export default ReplyQuestionUI;

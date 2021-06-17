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
import {getDate} from '../../../commons/libraries/utils';
import AnswerUI from '../replyAnswer/replyansweritem.presenter';
import ReplyWrite from './replyWrite.presenter';
import {useState} from 'react';
import {FETCH_USED_ITEM_QUESTION_ANSWERS} from '../reply.query';
import {useQuery} from '@apollo/client';

export function ReplyQuestionUI({data}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const {data: questionAnswersData, refetch} = useQuery(
    FETCH_USED_ITEM_QUESTION_ANSWERS,
    {
      variables: {
        useditemQuestionId: String(data._id),
      },
    }
  );

  console.log(data._id);

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
        <ReplyWrite
          replyId={data._id}
          handleClickOpen={handleClickOpen}
          refetch={refetch}
        />
      )}
      <AnswerUI
        refetch={refetch}
        replyId={data._id}
        data={questionAnswersData}
      />
    </>
  );
}

export default ReplyQuestionUI;

import {
  ReadCommentWrapper,
  ProfilePhoto,
  CommentContentsWrapper,
  CommentWriter,
  CommentContents,
  WriterRatingWrapper,
  CommnetCreatedAt,
  UIWrapper,
  UpdateCommentWrapper,
  Contents,
  UpdateContentsWrapper,
  UpdateButton,
  StringLengthCount,
  UpdateWrapper,
} from './replyitems.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import {getDate} from '../../../commons/libraries/utils';
import AnswerUI from '../replyAnswer/replyansweritem.presenter';
import ReplyWrite from './replyWrite.presenter';
import {ChangeEvent, useState} from 'react';
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION,
} from '../reply.query';
import {useMutation, useQuery} from '@apollo/client';
import {CancelButton} from '../replyAnswer/replyansweritem.style';

export function ReplyQuestionUI({data, refetchReply}) {
  const replyID = data._id;
  const [open, setOpen] = useState(false);
  const [contents, setContents] = useState(data.contents);
  const [contentsLength, setContentsLength] = useState(data.contents.length);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };
  const [updateOpen, setUpdateOpen] = useState(true);
  const handleClickUpdateOpen = () => {
    setUpdateOpen((prev) => !prev);
  };

  const handleClickUpdateClose = () => {
    setUpdateOpen((prev) => !prev);
  };

  const {data: questionAnswersData, refetch} = useQuery(
    FETCH_USED_ITEM_QUESTION_ANSWERS,
    {
      variables: {
        useditemQuestionId: String(replyID),
      },
    }
  );
  const [updateUsedItemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setContentsLength(event.target.value.length);
  };

  const onClickInputButton = async () => {
    try {
      const result = await updateUsedItemQuestion({
        variables: {
          UpdateUseditemQuestionInput: {contents},
          ID: replyID,
        },
      });
      refetchReply();
      handleClickUpdateOpen();
      alert('댓글 수정이 성공적으로 되었습니다');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {updateOpen ? (
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
            <CreateIcon
              style={{cursor: 'pointer'}}
              onClick={handleClickUpdateOpen}
            />
            <DeleteIcon
              style={{cursor: 'pointer', marginLeft: '10px'}}
              // onClick={handleDeleteModalToggle}
            />
          </ReadCommentWrapper>
        </UIWrapper>
      ) : (
        <UpdateWrapper>
          <UpdateCommentWrapper>
            <Contents
              name="contents"
              onChange={onChangeInput}
              maxLength={Number(100)}
              defaultValue={data?.contents || ''}
            ></Contents>
            <UpdateContentsWrapper>
              <StringLengthCount>{contentsLength}/100</StringLengthCount>
              <CancelButton onClick={handleClickUpdateClose}>
                취소하기
              </CancelButton>
              <UpdateButton onClick={onClickInputButton}>수정하기</UpdateButton>
            </UpdateContentsWrapper>
          </UpdateCommentWrapper>
        </UpdateWrapper>
      )}

      {open && (
        <ReplyWrite
          replyId={data._id}
          handleClickOpen={handleClickOpen}
          refetch={refetch}
        />
      )}
      {questionAnswersData?.fetchUseditemQuestionAnswers?.map((data) => (
        <AnswerUI
          refetch={refetch}
          replyId={replyID}
          writer={data.user.name}
          contents={data.contents}
          createdAt={data.createdAt}
          updatedAt={data.updatedAt}
          id={data._id}
        />
      ))}
    </>
  );
}

export default ReplyQuestionUI;

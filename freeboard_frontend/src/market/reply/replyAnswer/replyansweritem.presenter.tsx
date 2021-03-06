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
  UpdateCommentWrapper,
  Contents,
  UpdateContentsWrapper,
  UpdateButton,
  StringLengthCount,
  UpdateWrapper,
  CancelButton,
} from './replyansweritem.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ReplyIconforUI from '@material-ui/icons/Reply';
import {getDate} from '../../../commons/libraries/utils';
import {useState, ChangeEvent} from 'react';
import ReplyWrite from './replyAnswerWrite.presenter';
import {useMutation} from '@apollo/client';
import {UPDATE_USED_ITEM_QUESTION_ANSWER} from '../reply.query';

export default function AnswerUI({
  id,
  writer,
  contents,
  createdAt,
  updatedAt,
  replyId,
  refetch,
}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };
  const [updateContents, setupdateContents] = useState(contents);
  const [contentsLength, setContentsLength] = useState(contents.length);
  const [updateOpen, setUpdateOpen] = useState(true);
  const handleClickUpdateOpen = () => {
    setUpdateOpen((prev) => !prev);
  };

  const handleClickUpdateClose = () => {
    setUpdateOpen((prev) => !prev);
  };

  const [updateUsedItemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setupdateContents(event.target.value);
    setContentsLength(event.target.value.length);
  };

  const onClickInputButton = async () => {
    try {
      const result = await updateUsedItemQuestionAnswer({
        variables: {
          UpdateUseditemQuestionAnswerInput: {
            contents: updateContents || contents,
          },
          ID: id,
        },
      });
      refetch();
      handleClickUpdateOpen();
      alert('?????? ????????? ??????????????? ???????????????');
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(id);

  return (
    <>
      {updateOpen ? (
        <div key={id}>
          <UIWrapper>
            <Wrapper>
              <ReplyIcon>
                <SubdirectoryArrowRightIcon
                  style={{width: '30px', height: '30px'}}
                />
              </ReplyIcon>
              <ReadCommentWrapper>
                <ProfilePhoto>
                  <AccountCircleIcon
                    style={{
                      width: '47px',
                      height: '47px',
                      color: '#BDBDBD',
                    }}
                  />
                </ProfilePhoto>
                <CommentContentsWrapper>
                  <WriterRatingWrapper>
                    <CommentWriter>{writer}</CommentWriter>
                  </WriterRatingWrapper>
                  <CommentContents>{contents}</CommentContents>
                  <CommnetCreatedAt>
                    {getDate(updatedAt || createdAt)}
                  </CommnetCreatedAt>
                </CommentContentsWrapper>
                <ReplyIconforUI
                  onClick={handleClickOpen}
                  style={{cursor: 'pointer', marginRight: '12px'}}
                />
                <CreateIcon
                  onClick={handleClickUpdateOpen}
                  style={{cursor: 'pointer'}}
                />
                <DeleteIcon
                  style={{cursor: 'pointer', marginLeft: '10px'}}
                  // onClick={handleDeleteModalToggle}
                />
              </ReadCommentWrapper>
            </Wrapper>
          </UIWrapper>
        </div>
      ) : (
        <UpdateWrapper>
          <UpdateCommentWrapper>
            <Contents
              name="contents"
              onChange={onChangeInput}
              maxLength={Number(100)}
              defaultValue={contents || ''}
              placeholder="??????????????? ?????? ??? ???????????????, ?????? ??????, ?????? ??????, ?????? ?????? ????????? ???????????? ??? ????????? ??? ?????????, ?????? ?????? ???????????? ????????? ??????????????? ????????????."
            ></Contents>
            <UpdateContentsWrapper>
              <StringLengthCount>{contentsLength}/100</StringLengthCount>
              <CancelButton onClick={handleClickUpdateClose}>
                ????????????
              </CancelButton>
              <UpdateButton onClick={onClickInputButton}>????????????</UpdateButton>
            </UpdateContentsWrapper>
          </UpdateCommentWrapper>
        </UpdateWrapper>
      )}
      {open && (
        <ReplyWrite
          replyId={replyId}
          handleClickOpen={handleClickOpen}
          refetch={refetch}
        />
      )}
    </>
  );
}

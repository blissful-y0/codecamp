import {
  ReadCommentWrapper,
  ProfilePhoto,
  CommentContentsWrapper,
  CommentWriter,
  CommentContents,
  CommnetCreatedAt,
  Password,
  Writer,
  Wrapper,
  WriterWrapper,
  TotalWrapper,
  ContentsWrapper,
  UpdateButton,
  StringLengthCount,
  UpdateContents,
} from './reply.style';
import {getDate} from '../commons/libraries/utils';
import {useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from '../../commons/types/generated/types';
import {UPDATE_COMMENT} from './reply.query';

export default function ReplyUpdateUI({data}) {
  const [open, setOpen] = useState(false);
  const [commentData, setcommentData] = useState({
    contents: '',
    rating: 5,
  });
  const [password, setPassword] = useState('');
  const [updateData, setupdateData] = useState({
    contents: '',
    rating: 5,
  });

  const [commentFlag, setCommentFlag] = useState(true);
  const [commentLength, setCommentLength] = useState(0);

  const [updateBoardComment] =
    useMutation<IMutation, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT);

  const onClickUpdateButton = async () => {
    try {
      const updateResult = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            ...commentData,
          },
          password: password,
          boardCommentId: String(data._id),
        },
        // refetchQueries: [{query: FETCH_REPLY, variables: {boardCo}}],
      });
      setupdateData({
        contents: updateResult.data.updateBoardComment.contents,
        rating: 3,
      });
      setOpen(false);
    } catch (error) {
      console.log('no');
    }
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onChangeCommentInput = (event) => {
    const inputData = {
      ...commentData,
      [event.target.name]: event.target.value,
    };
    setcommentData(inputData);
    if (inputData.contents) {
      setCommentFlag(false);
    } else {
      setCommentFlag(true);
    }

    setCommentLength(inputData.contents.length);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {!open ? (
        <ReadCommentWrapper>
          <ProfilePhoto src="/profile.png"></ProfilePhoto>
          <CommentContentsWrapper>
            <CommentWriter>{data.writer}</CommentWriter>
            <CommentContents>
              {updateData.contents || data.contents}
            </CommentContents>
            <CommnetCreatedAt>{getDate(data.createdAt)}</CommnetCreatedAt>
          </CommentContentsWrapper>
          <CreateIcon onClick={handleOpen} />
          <DeleteIcon style={{marginLeft: '10px'}} />
        </ReadCommentWrapper>
      ) : (
        <TotalWrapper>
          <Wrapper>
            <WriterWrapper>
              <Writer name="writer" type="text" value={data.writer} />
              <Password
                name="password"
                type="password"
                onChange={onChangePassword}
                placeholder="비밀번호를 입력하세요."
              />
            </WriterWrapper>
            <UpdateContents
              onChange={onChangeCommentInput}
              defaultValue={data.contents}
              name="contents"
              maxLength={Number(100)}
            ></UpdateContents>
            <ContentsWrapper>
              <StringLengthCount>{commentLength}/100</StringLengthCount>
              <UpdateButton
                onClick={onClickUpdateButton}
                disabled={commentFlag}
              >
                수정하기
              </UpdateButton>
            </ContentsWrapper>
          </Wrapper>
        </TotalWrapper>
      )}
    </div>
  );
}

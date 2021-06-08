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
  WriterRatingWrapper,
} from './reply.style';
import {getDate} from '../../commons/libraries/utils';
import {useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from '../../commons/types/generated/types';
import {UPDATE_COMMENT} from './reply.query';
import Rating from '@material-ui/lab/Rating';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import DeleteModal from './CommentDeleteModal.presenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  })
);

export function HalfRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating" />
    </div>
  );
}

export default function ReplyUpdateUI({data, refetch}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const [commentData, setcommentData] = useState({
    contents: '',
    rating: 0,
  });

  const [password, setPassword] = useState('');
  const [updateData, setupdateData] = useState({
    contents: '',
    rating: 0,
  });

  const updateSaveStar = (event) => {
    setcommentData({
      contents: updateData.contents || data?.contents,
      rating: event,
    });
  };

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
      });
      setupdateData({
        contents: updateResult.data.updateBoardComment.contents,
        rating: updateResult.data.updateBoardComment.rating,
      });
      setOpen(false);
    } catch (error) {
      alert('에러 발생!');
    }
  };

  const onChangeCommentInput = (event) => {
    const inputData = {
      ...commentData,
      [event.target.name]: event.target.value,
    };
    setcommentData(inputData);
    setCommentLength(inputData.contents.length);
  };

  const onChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
    setCommentFlag(() => (!password ? true : false));
  };

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDeleteModalToggle = () => {
    setDeleteOpen((prev) => !prev);
  };

  return (
    <div>
      {!open ? (
        <ReadCommentWrapper>
          {deleteOpen && (
            <DeleteModal
              refetch={refetch}
              data={data}
              handleDeleteModalToggle={handleDeleteModalToggle}
            />
          )}
          <ProfilePhoto>
            <AccountCircleIcon
              style={{width: '47px', height: '47px', color: '#BDBDBD'}}
            />
          </ProfilePhoto>
          <CommentContentsWrapper>
            <WriterRatingWrapper>
              <CommentWriter>{data.writer}</CommentWriter>
              <Rating
                precision={0.5}
                size="small"
                defaultValue={updateData.rating || data.rating}
                readOnly
              />
            </WriterRatingWrapper>
            <CommentContents>
              {updateData.contents || data.contents}
            </CommentContents>
            <CommnetCreatedAt>{getDate(data.createdAt)}</CommnetCreatedAt>
          </CommentContentsWrapper>
          <CreateIcon style={{cursor: 'pointer'}} onClick={handleOpen} />
          <DeleteIcon
            style={{cursor: 'pointer', marginLeft: '10px'}}
            onClick={handleDeleteModalToggle}
          />
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
              <Rating
                size="medium"
                precision={0.5}
                defaultValue={updateData.rating || data.rating}
                name="update-rating"
                onChange={(event, newValue) => {
                  updateSaveStar(newValue);
                }}
              />
            </WriterWrapper>
            <UpdateContents
              onChange={onChangeCommentInput}
              defaultValue={updateData.contents || data.contents}
              name="contents"
              maxLength={Number(100)}
            ></UpdateContents>
            <ContentsWrapper>
              <StringLengthCount>
                {(commentData.contents && commentLength) ||
                  data.contents.length}
                /100
              </StringLengthCount>
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

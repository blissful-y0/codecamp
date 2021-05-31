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
import {UPDATE_COMMENT, FETCH_REPLY} from './reply.query';
import Rating from '@material-ui/lab/Rating';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

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
      <Rating name="half-rating" precision={0.5} />
    </div>
  );
}

export default function ReplyUpdateUI({data}) {
  const [open, setOpen] = useState(false);
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
      ...commentData,
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
        // refetchQueries: [{query: FETCH_REPLY, variables: {}}],
      });
      setupdateData({
        contents: updateResult.data.updateBoardComment.contents,
        rating: updateResult.data.updateBoardComment.rating,
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

  console.log(data);

  return (
    <div>
      {!open ? (
        <ReadCommentWrapper>
          <ProfilePhoto src="/profile.png"></ProfilePhoto>
          <CommentContentsWrapper>
            <WriterRatingWrapper>
              <CommentWriter>{data.writer}</CommentWriter>
              <Rating
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
          <DeleteIcon style={{cursor: 'pointer', marginLeft: '10px'}} />
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
                defaultValue={data.rating}
                name="update-rating"
                onChange={(event, newValue) => {
                  updateSaveStar(newValue);
                }}
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

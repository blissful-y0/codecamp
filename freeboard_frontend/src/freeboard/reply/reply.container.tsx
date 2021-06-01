import {useRouter} from 'next/router';
import {useMutation, useQuery} from '@apollo/client';
import {FETCH_REPLY, CREATE_COMMENT} from '../reply/reply.query';
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../commons/types/generated/types';
import {useState} from 'react';
import ReplyUI from './reply.presenter';
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

export function HalfRating({size}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating" precision={0.5} />
    </div>
  );
}

export default function ReplyComponent() {
  const router = useRouter();
  const [commentData, setcommentData] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0,
  });

  const [commentFlag, setCommentFlag] = useState(true);
  const [commentLength, setCommentLength] = useState(0);

  const {data, loading, error, refetch} = useQuery<
    IQuery,
    IQueryFetchBoardCommentsArgs
  >(FETCH_REPLY, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  const [createBoardComment] =
    useMutation<IMutation, IMutationCreateBoardCommentArgs>(CREATE_COMMENT);

  const handleSaveStar = (event) => {
    setcommentData({
      ...commentData,
      rating: event,
    });
  };

  const onChangeCommentInput = (event, event2) => {
    const inputData = {
      ...commentData,
      [event.target.name]: event.target.value,
    };
    setcommentData(inputData);
    if (inputData.writer && inputData.password && inputData.contents) {
      setCommentFlag(false);
    } else {
      setCommentFlag(true);
    }

    setCommentLength(inputData.contents.length);
  };

  const onClickCommentButton = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {...commentData},
          boardId: String(router.query._id),
        },
      });
      setcommentData({
        writer: '',
        password: '',
        contents: '',
        rating: Number(''),
      });
      refetch();
    } catch (error) {
      alert('에러가 발생했습니다!');
    }
  };

  if (loading) {
    return <></>;
  }

  if (error) {
    return <></>;
  }

  console.log(commentData);

  return (
    <ReplyUI
      data={data}
      commentData={commentData}
      onClickCommentButton={onClickCommentButton}
      onChangeCommentInput={onChangeCommentInput}
      commentLength={commentLength}
      commentFlag={commentFlag}
      Rating={Rating}
      handleSaveStar={handleSaveStar}
    />
  );
}

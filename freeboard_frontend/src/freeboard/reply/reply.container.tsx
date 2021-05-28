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

export default function ReplyComponent() {
  const router = useRouter();
  const [commentData, setcommentData] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 5,
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

  const onChangeCommentInput = (event) => {
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
        rating: 5,
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

  return (
    <ReplyUI
      data={data}
      commentData={commentData}
      onClickCommentButton={onClickCommentButton}
      onChangeCommentInput={onChangeCommentInput}
      commentLength={commentLength}
      commentFlag={commentFlag}
    />
  );
}

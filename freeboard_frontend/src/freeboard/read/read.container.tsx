import {useRouter} from 'next/router';
import {useMutation, useQuery} from '@apollo/client';
import {FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD} from './read.query';
import BoardReadUI from './read.presenter';
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../commons/types/generated/types';
import {useState} from 'react';
import axios from 'axios';

export default function QueryReadPage() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {data, refetch} = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  const onClickListButton = () => {
    router.push('../');
  };

  const onClickUpdateButton = () => {
    router.push('./update');
  };

  const [handleLike] =
    useMutation<IMutation, IMutationLikeBoardArgs>(LIKE_BOARD);

  const [handleDislike] =
    useMutation<IMutation, IMutationLikeBoardArgs>(DISLIKE_BOARD);

  const onClickLike = async () => {
    try {
      const likeCount = await handleLike({
        variables: {
          boardId: String(router.query._id),
        },
      });
      refetch();
    } catch (error) {
      console.log('Error');
    }
  };

  const onClickDislike = async () => {
    try {
      const dislikeCount = await handleDislike({
        variables: {
          boardId: String(router.query._id),
        },
      });
      refetch();
    } catch (error) {
      console.log('Error');
    }
  };

  // const onChnagePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSubmittedPassword(event.target.value);
  // };

  return (
    <>
      <BoardReadUI
        data={data}
        onClickListButton={onClickListButton}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
    </>
  );
}

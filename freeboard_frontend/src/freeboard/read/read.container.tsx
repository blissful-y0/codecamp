import {useRouter} from 'next/router';
import {useMutation, useQuery} from '@apollo/client';
import {FETCH_BOARD, UPDATE_BOARD} from './read.query';
import BoardReadUI from './read.presenter';
import {
  IMutation,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../commons/types/generated/types';
import {useState} from 'react';

export default function QueryReadPage() {
  const router = useRouter();

  const {data} = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  const [updateBoardMutation] =
    useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onClickListButton = (event) => {
    router.push('../');
  };

  const [open, setOpen] = useState(false);
  const [submittedPassword, setSubmittedPassword] =
    useState('비밀번호를 입력하세요.');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendPassword = async () => {
    try {
      updateBoardMutation({
        variables: {
          updateBoardInput: {youtubeUrl: ''},
          password: String(submittedPassword),
          boardId: String(router.query._id),
        },
      });
      console.log('에베베');
      setOpen(false);
    } catch (error) {
      alert('다시 입력하세요');
    }
  };

  console.log(String(router.query._id));

  const onChnagePasswordInput = (event) => {
    setSubmittedPassword(event.target.value);
  };

  return (
    <>
      <BoardReadUI
        data={data}
        onClickListButton={onClickListButton}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        onChnagePasswordInput={onChnagePasswordInput}
        submittedPassword={String(submittedPassword)}
        handleSendPassword={handleSendPassword}
      />
    </>
  );
}

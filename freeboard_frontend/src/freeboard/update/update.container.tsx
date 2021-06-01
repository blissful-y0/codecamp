import {useRouter} from 'next/router';
import {ChangeEvent, useEffect, useState} from 'react';
import {UPDATE_BOARD, FETCH_BOARD} from './update.query';
import UpdateUI from './update.presenter';
import {useMutation, useQuery} from '@apollo/client';
import {
  IMutation,
  IMutationUpdateBoardArgs,
  IQueryFetchBoardArgs,
  IQuery,
} from '../../commons/types/generated/types';

export default function UpdateWriteComponent() {
  const router = useRouter();
  const [incomingData, setIncomingData] = useState({
    title: '',
    contents: '',
    youtubeUrl: '',
  });
  const [flag, setFlag] = useState(false);
  const [password, setPassword] = useState('');
  const [updateBoardMutation] =
    useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD);
  const {data, loading, error} = useQuery<IQuery, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id),
      },
    }
  );
  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  const {
    writer: fetchedWriter,
    title: fetchedTitle,
    contents: fetchedContents,
    youtubeUrl: fetchedYoutubeUrl,
  } = data.fetchBoard;

  const onClickPost = async () => {
    const _incomingData = {};
    Object.keys(incomingData).forEach((el) => {
      if (incomingData[el] !== '') _incomingData[el] = incomingData[el];
    });
    if (!Object.keys(_incomingData).length) {
      router.push(String(`../${router.query._id}`));
    }
    try {
      const result = await updateBoardMutation({
        variables: {
          updateBoardInput: {
            ..._incomingData,
          },
          password: password,
          boardId: String(router.query._id),
        },
      });
      router.push(`../${router.query._id}`);
      console.log(result);
    } catch (error) {
      console.log('nono');
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const userData = {...incomingData, [event.target.name]: event.target.value};
    setIncomingData(userData);
    // if (userData.password) {
    //   setFlag(false);
    // } else {
    //   setFlag(true);
    // }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (!event.target.value) {
      setFlag(true);
    }
  };

  return (
    <>
      <UpdateUI
        onChangeInput={onChangeInput}
        onChangePassword={onChangePassword}
        flag={flag}
        onClickPost={onClickPost}
        fetchedWriter={fetchedWriter}
        fetchedTitle={fetchedTitle}
        fetchedContents={fetchedContents}
        fetchedYoutubeUrl={fetchedYoutubeUrl}
      />
    </>
  );
}

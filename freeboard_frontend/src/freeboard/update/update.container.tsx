import {useRouter} from 'next/router';
import {useState} from 'react';
import {UPDATE_BOARD} from './update.query';
import UpdateUI from './update.presenter';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationUpdateBoardArgs,
} from '../../commons/types/generated/types';

export default function UpdateWriteComponent() {
  const router = useRouter();
  const [data, setData] = useState({
    title: '',
    contents: '',
    youtubeUrl: '',
  });
  const [flag, setFlag] = useState(false);
  const [password, setPassword] = useState('');

  const [updateBoardMutation] =
    useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onClickPost = async () => {
    try {
      const result = await updateBoardMutation({
        variables: {
          updateBoardInput: {
            ...data,
          },
          password: password,
          boardId: String('60a86b0cc9f6ad002a465b3d'),
        },
      });
      console.log(result);
    } catch (error) {
      console.log('nono');
    }
  };

  const onChangeInput = (event) => {
    const userData = {...data, [event.target.name]: event.target.value};
    setData(userData);
    if (userData.title && userData.contents) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <UpdateUI
        onChangeInput={onChangeInput}
        onChangePassword={onChangePassword}
        flag={flag}
        onClickPost={onClickPost}
      />
    </>
  );
}

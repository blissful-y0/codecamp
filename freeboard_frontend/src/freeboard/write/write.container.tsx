import {useRouter} from 'next/router';
import {useState} from 'react';
import {CREATED_BOARD} from './write.mutation';
import WriteUI from './write.presenter';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationCreateBoardArgs,
} from '../../commons/types/generated/types';

export default function MutationFreeboard() {
  const router = useRouter();
  const [data, setData] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
  });
  const [flag, setFlag] = useState(true);

  const [createBoardMutation] =
    useMutation<IMutation, IMutationCreateBoardArgs>(CREATED_BOARD);

  async function onClickPost() {
    try {
      const result = await createBoardMutation({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      alert('게시물이 등록되었습니다.');
      const value = result.data.createBoard._id;
      router.push(`list/${value}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const onChangeInput = (event) => {
    const userData = {...data, [event.target.name]: event.target.value};
    setData(userData);
    if (
      userData.writer &&
      userData.password &&
      userData.title &&
      userData.contents
    ) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <WriteUI
        onClickPost={onClickPost}
        onChangeInput={onChangeInput}
        flag={flag}
      />
    </>
  );
}
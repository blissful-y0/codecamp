import WriteUsedBoardUI from './write.presenter';
import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import {useForm} from 'react-hook-form';
import {CREATE_USED_BOARD} from './write.query';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from '../../commons/types/generated/types';

interface IFormInput {
  title: string;
  remark: string;
  price: number;
  tags: String;
}

export function UsedBoardWrite() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormInput>();
  const {accessToken} = useContext(AppContext);

  useEffect(() => {
    if (!accessToken) router.push('/board');
  });
  if (!accessToken) return <></>;

  const [data, setData] = useState({
    name: '',
    remark: '',
    price: '',
    tags: '',
  });
  const [context, setContext] = useState('');
  const [createUsedBoard] =
    useMutation<IMutation, IMutationCreateUseditemArgs>(CREATE_USED_BOARD);
  const onSubmit = async (value) => {
    setData(value);
    try {
      const result = await createUsedBoard({
        variables: {
          createUseditemInput: {
            name: String(data.name),
            remarks: String(data.remark),
            contents: String(context),
            price: Number(data.price),
            tags: [data.tags],
          },
        },
      });
      console.log(result);
      alert('게시글 등록 완료');
    } catch (error) {
      console.log(context);
      console.log(error.message);
    }
  };

  return (
    <>
      <WriteUsedBoardUI
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        context={context}
        setContext={setContext}
        errors={errors}
      />
    </>
  );
}

export default withAuth(UsedBoardWrite);

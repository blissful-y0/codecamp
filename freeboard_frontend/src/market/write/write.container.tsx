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

  const [context, setContext] = useState('');

  const [createUsedBoard] =
    useMutation<IMutation, IMutationCreateUseditemArgs>(CREATE_USED_BOARD);

  const onSubmit = async (value) => {
    event.preventDefault();
    try {
      let data = {
        name: value.name,
        remark: value.remark,
        price: value.price,
        tags: value.tags,
      };

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
      alert('게시글 등록 완료');
      router.push(`/market/list/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <WriteUsedBoardUI
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        context={context}
        setContext={setContext}
      />
    </>
  );
}

export default withAuth(UsedBoardWrite);

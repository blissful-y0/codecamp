import WriteUsedBoardUI from './update.presenter';
import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import {useApolloClient, useMutation} from '@apollo/client';
import {FETCH_USED_ITEM, UPDATE_USED_ITEM} from './update.query';
import {useForm} from 'react-hook-form';
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from '../../commons/types/generated/types';

export function UsedBoardWrite() {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);
  const client = useApolloClient();
  const [context, setContext] = useState('');

  useEffect(() => {
    if (!accessToken) router.push('/login');
  });
  if (!accessToken) return <></>;

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      remarks: '',
      price: '',
      tags: '',
    },
  });

  useEffect(() => {
    const onLoadData = async () => {
      const data = await client.query({
        query: FETCH_USED_ITEM,
        variables: {
          ID: String(router.query._id),
        },
        context: {
          headers: {
            authorization: accessToken,
          },
        },
      });
      reset(data.data.fetchUseditem);
      setContext(data.data.fetchUseditem.contents);
    };
    onLoadData();
  }, [reset]);

  const [updateUsedBoard] =
    useMutation<IMutation, IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM);

  const onSubmit = async (value) => {
    event.preventDefault();
    try {
      let data = {
        name: value.name,
        remark: value.remark,
        price: value.price,
        tags: value.tags,
      };

      const result = await updateUsedBoard({
        variables: {
          // @ts-ignore
          UpdateUseditemInput: {
            name: data.name,
            remarks: data.remark,
            contents: context,
            price: data.price,
            tags: data.tags,
          },
          ID: String(router.query._id),
        },
      });
      alert('게시글 수정 완료');
      console.log(result);
      router.push(`/market/list/${router.query._id}`);
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

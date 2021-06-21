import WriteUsedBoardUI from './update.presenter';
import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import {useApolloClient, useMutation, useQuery} from '@apollo/client';
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
  const {data: fetchedData, loading} = useQuery(FETCH_USED_ITEM, {
    variables: {
      ID: String(router.query._id),
    },
  });

  useEffect(() => {
    if (!accessToken) router.push('/board');
  });

  if (!accessToken) return <></>;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [context, setContext] = useState('');

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
            name: String(data.name),
            remarks: String(data.remark),
            contents: String(context),
            price: Number(data.price),
            tags: [data.tags],
          },
          ID: String(router.query._id),
        },
      });
      alert('게시글 수정 완료');
      // router.push(`/market/list/${result.data._id}`);
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
        fetchedData={fetchedData}
      />
    </>
  );
}

export default withAuth(UsedBoardWrite);

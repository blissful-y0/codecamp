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
  const [loadedData, setLoadedData] = useState({});

  useEffect(() => {
    if (!accessToken) router.push('/board');
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
      // setLoadedData(data);
      reset(data);
    };
    onLoadData();
  }, [reset]);

  console.log(loadedData?.data?.fetchUseditem.name);

  // const {name, remarks, contents, price, tags} =
  // console.log(loadedData?.data?.fetchUseditem);

  const [context, setContext] = useState('');
  // if (!loadedData?.data?.fetchUseditem) return <div />;

  const [updateUsedBoard] =
    useMutation<IMutation, IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM);

  const onSubmit = async (value) => {
    event.preventDefault();
    // try {
    //   let data = {
    //     name: value.name,
    //     remark: value.remark,
    //     price: value.price,
    //     tags: value.tags,
    //   };

    //   const result = await updateUsedBoard({
    //     variables: {
    //       // @ts-ignore
    //       UpdateUseditemInput: {
    //         name: '',
    //         remarks:
    //           'fetchedData?.fetchUseditem?.remarks || String(data.remark),',
    //         contents:
    //           'fetchedData?.fetchUseditem?.contents || String(context),',
    //         price: 'fetchedData?.fetchUseditem?.price || Number(data.price),',
    //         tags: ' fetchedData?.fetchUseditem?.tags || [data.tags],',
    //       },
    //       ID: String(router.query._id),
    //     },
    //   });
    //   alert('게시글 수정 완료');
    //   // router.push(`/market/list/${result.data._id}`);
    // } catch (error) {
    //   console.log(error.message);
    // }
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
        // name={name}
        // remarks={remarks}
        // defaultContents={contents}
        // price={price}
        // tags={tags}
      />
    </>
  );
}

export default withAuth(UsedBoardWrite);

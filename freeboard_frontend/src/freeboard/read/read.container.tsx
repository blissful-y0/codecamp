import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_BOARD} from './read.query';
import BoardReadUI from './read.presenter';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../commons/types/generated/types';

export default function QueryReadPage() {
  const router = useRouter();

  const {data} = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  const onClickListButton = (event) => {
    router.push('../');
  };

  return (
    <>
      <BoardReadUI data={data} onClickListButton={onClickListButton} />
    </>
  );
}
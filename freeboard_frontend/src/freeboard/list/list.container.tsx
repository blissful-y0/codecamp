import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_LIST} from './list.query';
import RenderUI from '../list/list.presenter';
import { IQuery, IQueryFetchBoardArgs } from '../../commons/types/generated/types';

export default function RenderListPage() {



  const router = useRouter();
  const {data, loading, error} = useQuery<IQuery>(FETCH_LIST);

  if (loading) {
    return <></>
  }
  if (error) {
    return <></>
  }

  const onClickTitle = (_id) => (event) => {
    router.push(`board/list/${_id}`);
  };


  return <RenderUI data={data} onClickTitle={onClickTitle} />;
}

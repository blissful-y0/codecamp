import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {FETCH_USED_ITEMS} from './list.query';
import MarketListUI from './list.presenter';

export function MarketList(props) {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);
  const {data, loading, error, refetch} = useQuery(FETCH_USED_ITEMS);

  console.log(data);

  useEffect(() => {
    if (!accessToken) router.push('/board');
  });
  if (!accessToken) return <></>;

  const onChangeSearch = (event) => {
    console.log(event.target.value);
  };

  console.log(data);

  return <MarketListUI onChangeSearch={onChangeSearch} data={data} />;
}

export default withAuth(MarketList);

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

  useEffect(() => {
    if (!accessToken) router.push('/board');
  });
  if (!accessToken) return <></>;

  const {data, loading, error, refetch} = useQuery(FETCH_USED_ITEMS);
  if (loading) return <></>;
  if (error) return router.push('/board');

  const onChangeSearch = (event) => {
    console.log(event.target.value);
  };

  const onClickTitle = (_id: string) => () => {
    router.push(`market/list/${_id}`);
  };

  return (
    <MarketListUI
      onChangeSearch={onChangeSearch}
      data={data}
      onClickTitle={onClickTitle}
    />
  );
}

export default withAuth(MarketList);

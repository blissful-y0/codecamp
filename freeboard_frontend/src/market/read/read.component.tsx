import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import MarketReadUI from './read.presenter';
import {useQuery} from '@apollo/client';
import {FETCH_USED_ITEM} from './read.query';

export function ReadUI({}) {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);

  useEffect(() => {
    if (!accessToken) router.push('/board');
  });
  if (!accessToken) return <></>;

  const {
    data: fetcheditem,
    loading,
    error,
  } = useQuery(FETCH_USED_ITEM, {
    variables: {
      ID: String(router.query._id),
    },
  });
  if (loading) return <></>;
  if (error) return router.push('/board');

  return (
    <>
      <MarketReadUI fetchitem={fetcheditem} />
    </>
  );
}
export default withAuth(ReadUI);

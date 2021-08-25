import withAuth from '../../commons/components/hocs/withAuth';
import {AppContext} from '../../../pages/_app';
import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {FETCH_USED_ITEMS} from './list.query';
import MarketListUI from './list.presenter';

export function MarketList(props) {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!accessToken && !localStorage.getItem('refreshToken'))
      router.push('/board');
  });
  if (!accessToken) return <></>;

  const {data, fetchMore} = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  const onChangeSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const onClickTitle = (_id: string) => () => {
    router.push(`market/list/${_id}`);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {page: Math.floor(data?.fetchUseditems.length / 10) + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult?.fetchUseditems?.length) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListUI
      onChangeSearch={onChangeSearch}
      data={data}
      onClickTitle={onClickTitle}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
    />
  );
}

export default withAuth(MarketList);

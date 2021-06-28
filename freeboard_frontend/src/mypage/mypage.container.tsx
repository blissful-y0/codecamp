import MyPageUI from './mypage.presenter';
import withAuth from '../commons/components/hocs/withAuth';
import {useContext, useEffect} from 'react';
import {AppContext} from '../../pages/_app';
import {useRouter} from 'next/router';
import {FETCH_USED_ITEMS_I_SOLD} from './mypage.query';
import {useQuery} from '@apollo/client';

export function MyPage() {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);

  useEffect(() => {
    if (!accessToken && !localStorage.getItem('refreshToken'))
      router.push('/board');
  });
  if (!accessToken) return <></>;

  const {data: mySoldData, loading, error} = useQuery(FETCH_USED_ITEMS_I_SOLD);
  // const {};

  console.log(mySoldData);

  return (
    <>
      <MyPageUI mySoldData={mySoldData} />
    </>
  );
}

export default withAuth(MyPage);

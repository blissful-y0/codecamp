import MyPageUI from './mypage.presenter';
import withAuth from '../commons/components/hocs/withAuth';
import {useContext, useEffect} from 'react';
import {AppContext} from '../../pages/_app';
import {useRouter} from 'next/router';
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_POINT_OF_TRASACTION,
} from './mypage.query';
import {useQuery, useLazyQuery} from '@apollo/client';
import {useState} from 'react';
import {IQuery} from '../commons/types/generated/types';
import {FETCH_USER_LOGGED_IN} from '../commons/components/layout/header/login/query';

export function MyPage() {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);
  const {data: mySoldData} = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const [status, setStatus] = useState('MyCart');
  const {
    data: myTransaction,
    loading,
    error,
  } = useQuery(FETCH_POINT_OF_TRASACTION);

  const {
    data: userInfo,
    loading: userLoading,
    error: userError,
  } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(userInfo);

  useEffect(() => {
    if (!accessToken && !localStorage.getItem('refreshToken'))
      router.push('/login');
  }, []);
  if (!accessToken) return <></>;
  if (loading) return <></>;

  return (
    <>
      <MyPageUI
        mySoldData={mySoldData}
        userInfo={userInfo}
        myTransaction={myTransaction}
      />
    </>
  );
}

export default withAuth(MyPage);

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

export function MyPage() {
  const router = useRouter();
  const {accessToken, userInfo} = useContext(AppContext);
  const {data: mySoldData} = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const [status, setStatus] = useState('MyCart');
  const {
    data: myTransaction,
    loading,
    error,
  } = useLazyQuery(FETCH_POINT_OF_TRASACTION);

  useEffect(() => {
    if (!accessToken && !localStorage.getItem('refreshToken'))
      router.push('/board');
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

import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {AppContext} from '../../_app';
import Link from 'next/link';
import withAuth from '../../../src/commons/components/hocs/withAuth';

export function TokenTestPageTwo(props) {
  const router = useRouter();
  const {accessToken} = useContext(AppContext);

  useEffect(() => {
    if (!accessToken) router.push('/board/login');
  }, []);

  if (!accessToken) return <></>;

  const onClickMove = () => {
    router.push('/board/login/tokentest');
  };

  return (
    <>
      <Link href={'/board/login/'}>버튼 클릭 </Link>
      <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>
    </>
  );
}

export default withAuth(TokenTestPageTwo);

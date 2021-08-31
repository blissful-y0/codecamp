import {useRouter} from 'next/router';
import {useContext, useEffect} from 'react';
import {AppContext} from '../../../../pages/_app';

export default function withAuth(Component) {
  return function test(props) {
    const router = useRouter();
    const {accessToken} = useContext(AppContext);

    // if (!accessToken && !localStorage.getItem('refreshToken'))

    useEffect(() => {
      if (!accessToken) router.push('/login');
    }, []);
    if (!accessToken) return <></>;
    return <Component {...props} />; // 컴포넌트 리턴
  };
}

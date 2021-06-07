import Slider from './slider/slider.presenter';
import {
  TitleWrapper,
  Logo,
  LoginButton,
  SignInButton,
  LoginSignInWrapper,
} from './header.style';
import Navigation from './navigation/navigation.presenter';
import {useRouter} from 'next/router';
import {useState, createContext} from 'react';

const withoutNavigation = ['/board', '/query'];
export const LayoutContext = createContext({
  test: '',
});

export default function Header() {
  const router = useRouter();
  const isNavigation = !withoutNavigation.includes(router.pathname);
  const [test, setTest] = useState('이것은 테스트입니다.');

  return (
    <>
      <LayoutContext.Provider value={{test}}>
        <TitleWrapper>
          <Logo src="/logo.png" />
          <LoginSignInWrapper>
            <LoginButton>로그인</LoginButton>
            <SignInButton>회원가입</SignInButton>
          </LoginSignInWrapper>
        </TitleWrapper>
        <Slider />
        {isNavigation && <Navigation />}
      </LayoutContext.Provider>
    </>
  );
}

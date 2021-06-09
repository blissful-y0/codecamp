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
import LoginModal from './login/index';
import SignInModal from './signin/index';

export const LayoutContext = createContext({
  test: '',
});

export default function Header() {
  const router = useRouter();
  const [test, setTest] = useState('이것은 테스트입니다.');
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleClickOpenSignin = () => {
    setSignInOpen(true);
  };
  const handleSignInClose = () => {
    setSignInOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LayoutContext.Provider value={{test}}>
        <TitleWrapper>
          <Logo src="/logo.png" />
          <LoginSignInWrapper>
            <LoginButton onClick={handleClickOpen}>로그인</LoginButton>
            <SignInButton onClick={handleClickOpenSignin}>
              회원가입
            </SignInButton>
          </LoginSignInWrapper>
        </TitleWrapper>
        <Slider />
        <Navigation />
      </LayoutContext.Provider>
      {signInOpen && <SignInModal handleSignInClose={handleSignInClose} />}
      {open && <LoginModal handleClose={handleClose} />}
    </>
  );
}

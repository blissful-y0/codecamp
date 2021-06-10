import Slider from './slider/slider.presenter';
import {
  TitleWrapper,
  Logo,
  LoginButton,
  SignInButton,
  LoginSignInWrapper,
  LoggedIn,
} from './header.style';
import Navigation from './navigation/navigation.presenter';
import {useRouter} from 'next/router';
import {useState, createContext, useContext} from 'react';
import LoginModal from './login/index';
import SignInModal from './signin/index';
import {AppContext} from '../../../../../pages/_app';

export default function Header() {
  const router = useRouter();
  const [test, setTest] = useState('이것은 테스트입니다.');
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const {accessToken} = useContext(AppContext);

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
      <TitleWrapper>
        <Logo src="/logo.png" />
        <LoginSignInWrapper>
          {accessToken === '' ? (
            <>
              <LoginButton onClick={handleClickOpen}>로그인</LoginButton>
              <SignInButton onClick={handleClickOpenSignin}>
                회원가입
              </SignInButton>
            </>
          ) : (
            <LoggedIn>어서오세요!</LoggedIn>
          )}
        </LoginSignInWrapper>
      </TitleWrapper>
      <Slider />
      <Navigation />
      {signInOpen && <SignInModal handleSignInClose={handleSignInClose} />}
      {open && <LoginModal handleClose={handleClose} />}
    </>
  );
}

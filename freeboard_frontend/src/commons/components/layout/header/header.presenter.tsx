import Slider from './slider/slider.presenter';
import {
  TitleWrapper,
  Logo,
  LoginButton,
  SignInButton,
  LoginSignInWrapper,
} from './header.style';
import Navigation from './navigation/navigation.presenter';

export default function Header() {
  return (
    <>
      <TitleWrapper>
        <Logo src="/logo.png" />
        <LoginSignInWrapper>
          <LoginButton>로그인</LoginButton>
          <SignInButton>회원가입</SignInButton>
        </LoginSignInWrapper>
      </TitleWrapper>
      <Slider />
      <Navigation />
    </>
  );
}

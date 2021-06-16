import Dialog from '@material-ui/core/Dialog';
import {LOGIN_USER, FETCH_USER_LOGGED_IN} from './query';
import {useContext, useState} from 'react';
import {
  BackgroundImage,
  ContentsWrapper,
  DialogWrapper,
  Logo,
  Input,
  LoginStatus,
  Checkbox,
  LoginButton,
  LogoWrapper,
  IDPasswordSigninWrapper,
  SignInButton,
  FindIDButton,
  FindPasswordButton,
  ErrorMessage,
} from './style';
import {useMutation, useApolloClient} from '@apollo/client';
import {AppContext} from '../../../../../../pages/_app';

export default function LoginUI({handleClose}) {
  const {setAccessToken, setUserInfo} = useContext(AppContext);
  const [LOGIN] = useMutation(LOGIN_USER);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const client = useApolloClient();

  const onChangeInput = (event) => {
    const result = {...loginData, [event.target.name]: event.target.value};
    setLoginData(result);
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    try {
      const {data} = await LOGIN({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      setAccessToken(data?.loginUser.accessToken);
      const userInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {authorization: data?.loginUser.accessToken},
        },
      });
      setUserInfo(userInfo.data.fetchUserLoggedIn);
      handleClose();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <Dialog onClose={handleClose} open={true}>
      <DialogWrapper>
        <BackgroundImage>
          <ContentsWrapper>
            <LogoWrapper>
              <Logo src="/logo.png" />
            </LogoWrapper>
            <Input
              name="email"
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={onChangeInput}
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              style={{marginTop: '-20px'}}
              onChange={onChangeInput}
            />
            <LoginStatus>
              <Checkbox type="checkbox" />
              로그인 상태 유지
            </LoginStatus>
            <LoginButton onClick={onClickLogin}>로그인</LoginButton>
            <ErrorMessage>{errorMsg}</ErrorMessage>
            <IDPasswordSigninWrapper>
              <SignInButton>이메일 찾기</SignInButton>
              <FindIDButton>비밀번호 찾기</FindIDButton>
              <FindPasswordButton>회원가입</FindPasswordButton>
            </IDPasswordSigninWrapper>
          </ContentsWrapper>
        </BackgroundImage>
      </DialogWrapper>
    </Dialog>
  );
}

import {gql, useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useContext, useState} from 'react';
import {AppContext} from '../../freeboard_frontend/pages/_app';

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const {setAccessToken} = useContext(AppContext);
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChangeInputForm = (event) => {
    const result = {
      ...loginData,
      [event.target.name]: event.target.value,
    };
    setLoginData(result);
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    try {
      const {data} = await loginUserExample({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      setAccessToken(data?.loginUserExample.accessToken);
      router.push('/board/login/tokentest2');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px',
            padding: '10px',
          }}
        >
          <input
            type="text"
            name="email"
            autoComplete="username"
            placeholder="email"
            onChange={onChangeInputForm}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="pwd"
            onChange={onChangeInputForm}
          />
          <button onClick={onClickLogin}>로그인</button>
        </div>
      </form>
    </>
  );
};

export default Login;

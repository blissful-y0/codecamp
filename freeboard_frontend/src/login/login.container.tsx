// import {LOGIN_USER, FETCH_USER_LOGGED_IN} from './login.query';
import {useContext, useState} from 'react';
// import {useMutation, useApolloClient} from '@apollo/client';
// import {AppContext} from '../../pages/_app';

// function Login() {
//   const {setAccessToken, setUserInfo} = useContext(AppContext);
//   const [LOGIN] = useMutation(LOGIN_USER);
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errorMsg, setErrorMsg] = useState('');
//   const client = useApolloClient();

//   const onChangeInput = (event) => {
//     const result = {...loginData, [event.target.name]: event.target.value};
//     setLoginData(result);
//   };

//   const onClickLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const {data} = await LOGIN({
//         variables: {
//           email: loginData.email,
//           password: loginData.password,
//         },
//       });
//       setAccessToken(data?.loginUser.accessToken);
//       const userInfo = await client.query({
//         query: FETCH_USER_LOGGED_IN,
//         context: {
//           headers: {authorization: data?.loginUser.accessToken},
//         },
//       });
//       setUserInfo(userInfo.data.fetchUserLoggedIn);
//       localStorage.setItem('refreshToken', 'true');
//       handleClose();
//     } catch (error) {
//       setErrorMsg(error.message);
//     }
//   };

//   return <></>;
// }

// export default Login;

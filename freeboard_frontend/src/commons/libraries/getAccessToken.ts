import axios from 'axios';
import {FETCH_USER_LOGGED_IN} from '../components/layout/header/login/query';
import {ApolloClient, useApolloClient} from '@apollo/client';
import {AppContext} from '../../../pages/_app';
import {useContext} from 'react';

export async function getAccessToken({setAccessToken, accessToken}) {
  if (!localStorage.getItem('refreshToken')) return;
  if (accessToken) return;

  const response = await axios.post(
    'https://backend.codebootcamp.co.kr/graphql',
    {
      query: `mutation restoreAccessToken {
      restoreAccessToken {
        accessToken
      }
    }`,
    },
    {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
  );
  if (response.data.data === null) return null;

  // const client = useApolloClient();
  // const {setUserInfo} = useContext(AppContext);

  const newAccessToken = response.data.data.restoreAccessToken.accessToken;
  setAccessToken(newAccessToken);
  // const userInfo = await client.query({
  //   query: FETCH_USER_LOGGED_IN,
  //   context: {
  //     headers: {authorization: data?.loginUser.accessToken},
  //   },
  // });
  // setUserInfo(userInfo.data.fetchUserLoggedIn);
  return newAccessToken;
}

export default getAccessToken;

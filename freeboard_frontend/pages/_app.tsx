import GlobalStyles from '../src/commons/style/globalStyles';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import Layout from '../src/commons/components/layout/layout.presenter';
import {createUploadLink} from 'apollo-upload-client';
import {createContext, useState} from 'react';
import {onError} from '@apollo/client/link/error';
import axios from 'axios';
import getAccessToken from '../src/commons/libraries/getAccessToken';

export const AppContext = createContext({
  accessToken: '',
  setAccessToken: (_: string) => {},
  userInfo: {},
  setUserInfo: (_: any) => {},
});

function MyApp({Component, pageProps}) {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const uploadLink = createUploadLink({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
      credential: 'include',
    },
  });

  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          //만료된 토큰 재발급
          const newAccessToken = getAccessToken({setAccessToken});
          // const response = axios.post(
          //   'https://backend.codebootcamp.co.kr/graphql',
          //   {
          //     query: `mutation {
          //       restoreAccessToken {
          //         accessToken
          //       }
          //     }`,
          //   },
          //   {
          //     headers: {'Content-Type': 'application/json'},
          //     withCredentials: true,
          //   }
          // );
          // const newAccessToken =
          //   response.data.data.restoreAccessToken.accessToken;
          // setAccessToken(newAccessToken);
          // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기

          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${newAccessToken}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <AppContext.Provider
        value={{accessToken, setAccessToken, setUserInfo, userInfo}}
      >
        <ApolloProvider client={client}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;

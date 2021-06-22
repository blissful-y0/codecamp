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
import getAccessToken from '../src/commons/libraries/getAccessToken';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const AppContext = createContext({
  accessToken: '',
  setAccessToken: (_: string) => {},
  userInfo: {},
  setUserInfo: (_: any) => {},
});

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const uploadLink = createUploadLink({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  //@ts-ignore
  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          //만료된 토큰 재발급
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken({setAccessToken})}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const restoreAccessToken = async () => {
      const newAccessToken = await getAccessToken({
        setAccessToken,
        accessToken,
      });
      if (!newAccessToken) router.push('/board');
    };
    restoreAccessToken();
  }, []);

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

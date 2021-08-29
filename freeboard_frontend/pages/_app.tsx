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
import Head from 'next/head';

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
    uri: 'https://backend.codebootcamp.co.kr/graphql05',
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
              authorization: `Bearer ${getAccessToken({
                setAccessToken,
                accessToken,
                setUserInfo,
              })}`,
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
        setUserInfo,
      });
      if (!newAccessToken) router.push('/');
    };
    restoreAccessToken();
  }, []);

  return (
    <>
      <Head>
        <title>덕질은 보호 받아야 한다! : 2차마켓</title>
        <meta property="og:title" content="2차마켓"></meta>
        <meta property="og:image"></meta>
        <meta
          property="og:description"
          content="중고 물품을 믿고 거래하세요!"
        ></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-39GK00YVLV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-39GK00YVLV');`,
          }}
        ></script>
        <meta
          name="naver-site-verification"
          content="9b78b5bac4b98cd7b78d118cf05632dfe2f3e40b"
        />
      </Head>
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

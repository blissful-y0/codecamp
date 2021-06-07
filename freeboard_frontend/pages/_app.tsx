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

export const AppContext = createContext({
  accessToken: '',
  setAccessToken: (_: string) => {},
});

function MyApp({Component, pageProps}) {
  const [accessToken, setAccessToken] = useState('');

  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    header: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
      <ApolloProvider client={client}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default MyApp;

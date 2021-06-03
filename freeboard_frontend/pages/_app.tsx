import GlobalStyles from '../src/commons/style/globalStyles';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import Layout from '../src/commons/components/layout/layout.presenter';
import {createUploadLink} from 'apollo-upload-client';

function MyApp({Component, pageProps}) {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
  });

  const client = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

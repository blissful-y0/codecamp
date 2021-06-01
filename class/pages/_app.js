import Layout from '../src/components/commons/layout/layout.container';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import GlobalStyles from '../src/commons/style/globalStyles';
import {createUploadLink} from 'apollo-upload-client';

function MyApp({Component, pageProps}) {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
  });
  const client = new ApolloClient({
    // uri: 'http://example.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {/* <Layout>
        <GlobalStyles /> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
  );
}

export default MyApp;

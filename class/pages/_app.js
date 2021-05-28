import Layout from '../src/components/commons/layout/layout.container';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import GlobalStyles from '../src/commons/style/globalStyles';

function MyApp({Component, pageProps}) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
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

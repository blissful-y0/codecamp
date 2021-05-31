import GlobalStyles from '../src/commons/style/globalStyles';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Layout from '../src/commons/components/layout/layout.presenter';

function MyApp({Component, pageProps}) {
  const client = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
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

import GlobalStyles from '../src/commons/style/globalStyles';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Header from '../src/commons/components/layout/header/header.presenter';

function MyApp({Component, pageProps}) {
  const client = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

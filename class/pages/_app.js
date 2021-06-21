import Layout from '../src/components/commons/layout/layout.container';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import GlobalStyles from '../src/commons/style/globalStyles';
import {createUploadLink} from 'apollo-upload-client';
import Head from 'next';

function MyApp({Component, pageProps}) {
  const uploadLink = createUploadLink({
    uri: 'http://example.codebootcamp.co.kr/graphql',
  });
  const client = new ApolloClient({
    // uri: 'http://example.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <ApolloProvider client={client}>
        {/* <Layout>
        <GlobalStyles /> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloProvider>
    </>
  );
}

export default MyApp;

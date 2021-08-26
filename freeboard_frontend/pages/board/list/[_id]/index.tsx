import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {GetServerSideProps} from 'next';
import BoardReadUI from '../../../../src/freeboard/read/read.container';
import Head from 'next/head';

function BoardReadPage({data}) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={
            data?.title ? data?.title : '덕질은 보호 받아야 한다! : 2차 마켓'
          }
        />
        <meta property="og:image" content={data?.image ? data?.image : ''} />
        <meta
          property="og:description"
          content={
            data?.contents ? data?.contents : '다양한 중고 물품들을 거래하세요!'
          }
        />
      </Head>
      <BoardReadUI />;
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://backend.codebootcamp.co.kr/graphql05',
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: ${context.params}) {
        title
        contents
        images
      }
    }
  `,
  });

  return {
    props: {
      data: data.fetchBoard,
    },
  };
// };

export default BoardReadPage;

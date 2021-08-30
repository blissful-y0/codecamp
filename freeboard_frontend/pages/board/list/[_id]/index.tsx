import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {GetServerSideProps} from 'next';
import BoardReadUI from '../../../../src/freeboard/read/read.container';
import Head from 'next/head';
import {FETCH_BOARD} from '../../../../src/freeboard/read/read.query';
import {request} from 'graphql-request';

function BoardReadPage({data}) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={
            data?.fetchBoard.title
              ? data?.fetchBoard.title
              : '덕질은 보호 받아야 한다! : 2차 마켓'
          }
        />
        <meta
          property="og:image"
          content={data?.fetchBoard.image ? data?.fetchBoard.image : ''}
        />
        <meta
          property="og:description"
          content={
            data?.fetchBoard.contents
              ? data?.fetchBoard.contents
              : '다양한 중고 물품들을 거래하세요!'
          }
        />
      </Head>
      <BoardReadUI data={data} />;
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await request(
    'https://backend02.codebootcamp.co.kr/graphql',
    FETCH_BOARD,
    {
      boardId: context.params._id,
    }
  );

  return {
    props: {
      data: result,
    },
  };
};

export default BoardReadPage;

import {useRouter} from 'next/router';
import {useMutation, useQuery} from '@apollo/client';
import {FETCH_BOARDS, DELETE_BOARD} from './BoardList.quries';
import RenderUI from '../list/BoardList.presenter';
import {useState} from 'react';

export default function BoardPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const {data, loading, error, fetchMore} = useQuery(FETCH_BOARDS, {
    variables: {page: currentPage},
  });

  const onLoadMore = () => {
    if (data?.fetchBoards.length % 10 !== 0) return;
    fetchMore({
      variables: {page: Math.floor(data?.fetchBoards.length / 10) + 1},
      updateQuery: (prev, {fetchMoreResult}) => ({
        fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
      }),
    });
  };

  const onClickPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const onClickTitle = (_number) => (event) => {
    router.push(`/list/${_number}`);
  };

  // const [deleteBoard] = useMutation(DELETE_BOARD);
  // console.log(deleteBoard);

  const onClickDelete = async (event) => {};

  return (
    <>
      <RenderUI
        data={data}
        onClickTitle={onClickTitle}
        onClickPage={onClickPage}
        currentPage={currentPage}
        onLoadMore={onLoadMore}
      />
    </>
  );
}

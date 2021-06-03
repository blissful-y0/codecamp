import {useRouter} from 'next/router';
import {useApolloClient, useQuery} from '@apollo/client';
import {FETCH_BOARD_COUNT, FETCH_LIST} from './list.query';
import RenderUI from '../list/list.presenter';
import {useState, useEffect} from 'react';
import SearchBar from './search.navigation.presenter';
import DatePicker from './datepicker.navigation.presenter';

export default function RenderListPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageCursor, setNextPageCursor] = useState(0);
  // const [prevPageCursor, setPrevPageCursor] = useState(0);
  // const client = useApolloClient();

  // useEffect(() => {
  //   const find = async () => {
  //     const result = await client.query({
  //       query: FETCH_BOARD_COUNT,
  //     });
  //     console.log(result);
  //   };
  //   find();
  // }, []);

  const {data: boardCount} = useQuery(FETCH_BOARD_COUNT);

  const {data, loading, error} = useQuery(FETCH_LIST, {
    variables: {page: Number(currentPage)},
  });

  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  const onClickPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const onClickTitle = (_id: string) => () => {
    router.push(`board/list/${_id}`);
  };

  const onClickWriteButton = () => {
    router.push(`board/write`);
  };

  const onClickNextPage = () => {
    if ((nextPageCursor + 10) * 10 >= Math.floor(boardCount?.fetchBoardsCount))
      return;
    setNextPageCursor(nextPageCursor + 10);
  };

  const onClickPrevPage = () => {
    if (nextPageCursor <= 1) return;
    setNextPageCursor(nextPageCursor - 10);
  };

  return (
    <RenderUI
      data={data}
      onClickTitle={onClickTitle}
      onClickWriteButton={onClickWriteButton}
      currentPage={currentPage}
      onClickPage={onClickPage}
      SearchBar={SearchBar}
      DatePicker={DatePicker}
      onClickNextPage={onClickNextPage}
      boardCount={boardCount}
      nextPageCursor={nextPageCursor}
      onClickPrevPage={onClickPrevPage}
    />
  );
}

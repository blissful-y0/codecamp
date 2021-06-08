import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_BOARD_COUNT, FETCH_LIST} from './list.query';
import RenderUI from '../list/list.presenter';
import {useState} from 'react';
import SearchBar from './search.navigation.presenter';
import DatePicker from './datepicker.navigation.presenter';
import CardContainer from './card.presenter';

export default function RenderListPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageCursor, setNextPageCursor] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const {data: searchData} = useQuery(FETCH_LIST, {
    variables: {search: searchKeyword},
  });
  const [searchResult, setSearchResult] = useState('');
  const [searchIndexResult, setSearchIndexResult] = useState(0);

  const {data: boardCount} = useQuery(FETCH_BOARD_COUNT);
  const {data: searchIndex} = useQuery(FETCH_BOARD_COUNT, {
    variables: {
      search: searchKeyword,
    },
  });

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
    if (
      (nextPageCursor + 10) * 10 >=
      Math.floor(searchIndexResult || boardCount?.fetchBoardsCount)
    )
      return;
    setNextPageCursor(nextPageCursor + 10);
  };

  const onClickPrevPage = () => {
    if (nextPageCursor <= 1) return;
    setNextPageCursor(nextPageCursor - 10);
  };

  const onChangeSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const onClickSearchButton = () => {
    setSearchResult(searchData);
    setSearchIndexResult(Number(searchIndex.fetchBoardsCount));
  };

  console.log(searchIndex?.fetchBoardsCount);

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
      onChangeSearch={onChangeSearch}
      onClickSearchButton={onClickSearchButton}
      searchData={searchResult}
      searchIndex={searchIndexResult}
      CardContainer={CardContainer}
    />
  );
}

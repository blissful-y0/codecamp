import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_LIST} from './list.query';
import RenderUI from '../list/list.presenter';
import {useState} from 'react';
import SearchBar from './search.navigation.presenter';
import DatePicker from './datepicker.navigation.presenter';

export default function RenderListPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedDate, handleDateChange] = useState(new Date());
  // const [selectedDateTwo, handleDateChangeTwo] = useState(new Date());

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

  return (
    <RenderUI
      data={data}
      onClickTitle={onClickTitle}
      onClickWriteButton={onClickWriteButton}
      currentPage={currentPage}
      onClickPage={onClickPage}
      SearchBar={SearchBar}
      DatePicker={DatePicker}
    />
  );
}

import {useRouter} from 'next/router';
import {useQuery} from '@apollo/client';
import {FETCH_BOARDS} from './BoardList.quries';
import RenderUI from '../list/BoardList.presenter';

export default function BoardPage() {
  const router = useRouter();

  const {data, loading, error} = useQuery(FETCH_BOARDS);
  if (loading) {
    return '';
  }
  if (error) {
    return '에러가 발생했습니다!';
  }

  const onClickTitle = (_number) => (event) => {
    router.push(`/list/${_number}`);
  };

  return (
    <>
      <RenderUI data={data} onClickTitle={onClickTitle} />
    </>
  );
}

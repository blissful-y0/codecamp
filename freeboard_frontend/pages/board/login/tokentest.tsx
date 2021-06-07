import {useRouter} from 'next/router';

export default function TokenTestPageOne() {
  const router = useRouter();

  const onClickMove = () => {
    router.push('/board/login/tokentest2');
  };
  return (
    <>
      <button onClick={onClickMove}>회원전용 페이지로 이동하기</button>
    </>
  );
}

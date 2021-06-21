import {useState, useMemo, useCallback} from 'react';
import PresenterPage from './presenter';

export function Memoization() {
  console.log('컨테이너(부모) 렌더링됨');

  // let useMemoTest = useMemo(() => Math.random(), []);
  // console.log('usememo', useMemoTest);

  let countLet = 0;

  const onClickCountLet = () => {
    console.log(countLet);
    countLet += 1;
  };

  const [countState, setCountState] = useState(0);

  // const onClickMove = useCallback(() => {
  //   router.push('/login');
  // }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState);
    setCountState(countState + 1);
  }, [countState]);

  return (
    <>
      <div>countLet: {countLet}</div>
      <div>countState: {countState}</div>
      <button onClick={onClickCountLet}>countLet +1</button>
      <button onClick={onClickCountState}>countState + 1</button>
      <div>컨테이너 (부모)입니다</div>
      <PresenterPage onClickCountState={onClickCountState} />
    </>
  );
}

export default Memoization;

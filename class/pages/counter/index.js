function CounterPage() {
  // Javscript 공간

  let count = 0;

  function counter() {
    count++;
    console.log(count);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터 증가증가</button>
    </>
  );
}

export default CounterPage;

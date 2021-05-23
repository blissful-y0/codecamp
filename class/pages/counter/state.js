import { useState } from 'react'

function CounterPage () {
  // Javscript 공간

  const [count, setCount] = useState(0)

  function counter () {
    setCount(() => {
      return 'babo hehe'
    })
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터 증가증가(state)</button>
    </>
  )
}

export default CounterPage

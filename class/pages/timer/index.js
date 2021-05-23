import { useState } from 'react'

function TimerPage () {
  const [time, setTime] = useState('3:00')
  const [AuthButtonBoolean, setAuthButtonBoolean] = useState(false)
  const [sendButtonBoolean, setSendButtonBoolean] = useState(false)

  const handleClickSendAuth = () => {
    let time = 180

    const timer = setInterval(() => {
      time--
      setSendButtonBoolean(true)
      const minute = Math.floor(time / 60)
      const second = Math.floor(time % 60)

      setTime(`${minute}:${second}`)

      if (time <= 0) {
        setAuthButtonBoolean(true)
        setSendButtonBoolean(false)
        clearInterval(timer)
      }
    }, 1000)
  }

  return (
    <>
      <div>
        <div>
          <input type="text" />
          <button onClick={handleClickSendAuth} disabled={sendButtonBoolean}>
            인증번호 전송
          </button>
        </div>
        <div>
          <span>{time}</span>
          <button disabled={AuthButtonBoolean}>인증완료</button>
        </div>
      </div>
    </>
  )
}

export default TimerPage

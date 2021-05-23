import axios from 'axios'
import { useState } from 'react'

export default function AsyncAwaitPage () {
  const [titleFnfo, setTitleInfo] = useState('전달받은 정보가 표기됩니다.')
  const [content, setCotents] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [count, setCount] = useState(1)

  async function handleClickGetPost () {
    const datalength = await axios.get('https://koreanjson.com/posts')
    const data = await axios.get(`https://koreanjson.com/posts/${count}`)
    const date = new Date(data.data.updatedAt)
    const dateObject = {
      year: date.getFullYear(),
      month: String(date.getMonth() + 1).padStart(2, '0'),
      date: date.getDate() - 1
    }
    let countIndex = count + 1
    if (countIndex > datalength.data.length) {
      countIndex = 0
    }
    setTitleInfo(data.data.title)
    setCotents(data.data.content)
    setUpdatedAt(`${dateObject.year}-${dateObject.month}-${dateObject.date}`)
    setCount(countIndex)
  }

  return (
    <>
      제목: <div>{titleFnfo}</div>
      <br></br>
      내용: <div>{content}</div>
      <br></br>
      작성일: <div>{updatedAt}</div>
      <button onClick={handleClickGetPost}>게시물 가져오기</button>
    </>
  )
}

import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function MutationPage () {
  const router = useRouter()
  const CREATE_BOARD = gql`
    mutation variableType(
      $writer: String
      $password: String
      $title: String
      $contents: String
    ) {
      createBoard(
        writer: $writer
        password: $password
        title: $title
        contents: $contents
      ) {
        message
      }
    }
  `

  const [data, setData] = useState({
    writer: '',
    password: '',
    title: '',
    contents: ''
  })

  const [createBoardMutation] = useMutation(CREATE_BOARD)
  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  async function onClickPost () {
    try {
      const result = await createBoardMutation({
        variables: { ...data }
      })
      alert(result.data.createBoard.message)
    } catch (error) {
      alert(error)
    }
  }

  const onChangeInput = (event) => {
    const userData = { ...data, [event.target.name]: event.target.value }
    setData(userData)
    console.log(userData.data)
  }

  function onClickRouting () {
    router.back()
  }

  // const onChangeWriter = (event) => {
  //   let temp = event.target.value;
  //   // setWriter(temp);
  // };
  // const onChangePassword = (event) => {
  //   let temp = event.target.value;
  //   // setPassword(temp);
  // };
  // const onChangedTitle = (event) => {
  //   let temp = event.target.value;
  //   // setTitle(temp);
  // };
  // const onChangeContent = (event) => {
  //   let temp = event.target.value;
  //   // setContents(temp);
  // };

  return (
    <>
      작성자:{' '}
      <input
        type="text"
        name="writer"
        placeholder="이름을 입력해주세요"
        onChange={onChangeInput}
      ></input>
      <br></br>
      비밀번호:{' '}
      <input
        type="text"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeInput}
      ></input>
      <br></br>
      제목:
      <input
        type="text"
        name="title"
        placeholder="제목을 입력해주세요"
        onChange={onChangeInput}
      ></input>
      <br></br>
      내용:{' '}
      <input
        type="text"
        name="contents"
        placeholder="내용을 입력해주세요"
        onChange={onChangeInput}
      ></input>
      <br></br>
      <button onClick={onClickPost}>게시물 등록하기</button>
      <br />
      <button onClick={onClickRouting}>이전 페이지로 이동</button>
    </>
  )
}

import { useState } from 'react'
import {
  Title,
  Input,
  Wrapper,
  Label,
  Button,
  TitleWrapper,
  WholeWrapper,
  ErrorMessage
} from '../../styles/login'

function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [PWDErrorMessage, setPWDErrorMessage] = useState('')
  const [IDErrorMessage, setIDErrorMessage] = useState('')

  function login () {
    let IDFlag = false
    let PWDFlag = false

    if (email === '') {
      setIDErrorMessage('id를 입력해 주세요')
      IDFlag = false
    } else if (!email.includes('@' && '.com')) {
      setIDErrorMessage('올바른 메일을 입력해 주세요')
      IDFlag = false
    } else {
      setIDErrorMessage('')
      IDFlag = true
    }

    if (password === '') {
      setPWDErrorMessage('pwd 입력해 주세요')
      PWDFlag = false
    } else if (password.length < 6) {
      setPWDErrorMessage('pwd 6글자 미만입니다')
      PWDFlag = false
    } else {
      setPWDErrorMessage('')
      PWDFlag = true
    }

    if (!!IDFlag && PWDFlag) {
      setPWDErrorMessage('login')
    }
  }

  function emailchanged (event) {
    const temp = event.target.value
    setEmail(temp)
  }

  function passwordChanged (event) {
    const temp = event.target.value
    setPassword(temp)
  }

  return (
    <WholeWrapper>
      <Wrapper>
        <TitleWrapper>
          <Title>로그인</Title>
        </TitleWrapper>
        <Label>이메일</Label>
        <Input type="text" onChange={emailchanged}></Input>
        <ErrorMessage>{IDErrorMessage}</ErrorMessage>
        <Label>비밀번호</Label>
        <Input type="password" onChange={passwordChanged}></Input>
        <ErrorMessage>{PWDErrorMessage}</ErrorMessage>
        <Button onClick={login}>로그인</Button>
      </Wrapper>
    </WholeWrapper>
  )
}

export default LoginPage

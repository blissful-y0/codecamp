import { Icon } from '@material-ui/core'
import { useState } from 'react'
import { Label } from '../../styles/login'
import {
  Wrapper,
  Bar,
  Location,
  Title,
  Input,
  InputContainer,
  Delete,
  Box,
  IDErrorMessageClass,
  ErrorWrapper,
  Rectangle,
  LabelContainer,
  YellowRectangle
} from '../../styles/login.eatsroad'

function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [PWDErrorMessage, setPWDErrorMessage] = useState('adsf')
  const [IDErrorMessage, setIDErrorMessage] = useState('adfs')

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
    <>
      <Wrapper>
        <Location src="/map.png"></Location>
        <Box></Box>
        <Title>잇츠로드</Title>
        <InputContainer>
          <Input onChnage={emailchanged} type="text"></Input>
          <Delete src="/delete.png"></Delete>
        </InputContainer>
        <ErrorWrapper>
          <IDErrorMessageClass>{IDErrorMessage}</IDErrorMessageClass>
        </ErrorWrapper>
        <InputContainer>
          <Input onChnage={passwordChanged} type="password"></Input>
          <Delete src="/delete.png"></Delete>
        </InputContainer>
        <ErrorWrapper>
          <IDErrorMessageClass>{PWDErrorMessage}</IDErrorMessageClass>
        </ErrorWrapper>
        <Rectangle onClick={login}>로그인</Rectangle>
        <LabelContainer>
          <Label>이메일 찾기</Label>
          <Bar></Bar>
          <Label>비밀번호 찾기</Label>
          <Bar></Bar>
          <Label>회원가입</Label>
        </LabelContainer>
        <YellowRectangle>카카오톡으로 로그인</YellowRectangle>
      </Wrapper>
    </>
  )
}

export default LoginPage

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {useState} from 'react';
import {
  BackgroundImage,
  ContentsWrapper,
  DialogWrapper,
  Logo,
  Input,
  LoginStatus,
  Checkbox,
  LoginButton,
  LogoWrapper,
} from './style';

export default function CustomizedDialogs({handleClose}) {
  return (
    <div>
      <DialogWrapper>
        <Dialog onClose={handleClose} open={true}>
          <BackgroundImage>
            <ContentsWrapper>
              <LogoWrapper>
                <Logo src="/logo.png" />
              </LogoWrapper>
              <Input type="text" placeholder="이메일을 입력해주세요" />
              <Input type="password" placeholder="비밀번호를 입력해주세요" />
              <LoginStatus>
                <Checkbox type="checkbox" />
                로그인 상태 유지
              </LoginStatus>
              <LoginButton>로그인</LoginButton>
            </ContentsWrapper>
          </BackgroundImage>
        </Dialog>
      </DialogWrapper>
    </div>
  );
}

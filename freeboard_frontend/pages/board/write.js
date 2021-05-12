import { useState } from "react";
import {
  Wrapper,
  Title,
  Label,
  InputWriterInfo,
  Paragraph,
  AddressAndLink,
  BlackBox,
  WriterInfoWrapper,
  PhotoAttach,
  UploadButton,
  Container,
  Address,
  Input,
  IDContainer,
  PasswordContainer,
  PhotoWrapper,
  LabelForMainSetting,
} from "../../styles/board.write";

export default function boardWritePage() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Container>
        <WriterInfoWrapper>
          <IDContainer>
            <Label>작성자</Label>
            <InputWriterInfo placeholder="이름을 적어주세요."></InputWriterInfo>
          </IDContainer>
          <PasswordContainer>
            <Label>비밀번호</Label>
            <InputWriterInfo placeholder="비밀번호를 입력해주세요."></InputWriterInfo>
          </PasswordContainer>
        </WriterInfoWrapper>
        <Label>제목</Label>
        <AddressAndLink placeholder="제목을 작성해주세요"></AddressAndLink>
        <Label>내용</Label>
        <Paragraph placeholder="내용을 작성해주세요."></Paragraph>
        <Label>주소</Label>
        <div>
          <Address placeholder="07250"></Address>
          <BlackBox>우편번호 검색</BlackBox>
        </div>
        <AddressAndLink></AddressAndLink>
        <AddressAndLink></AddressAndLink>
        <Label>유투브</Label>
        <AddressAndLink placeholder="링크를 복사해주세요."></AddressAndLink>
        <Label>사진 첨부</Label>
        <PhotoWrapper>
          <PhotoAttach>+ Upload</PhotoAttach>
          <PhotoAttach>+ Upload</PhotoAttach>
          <PhotoAttach>+ Upload</PhotoAttach>
        </PhotoWrapper>
        <Label>메인 설정</Label>
        <PhotoWrapper>
          <Input type="radio" name="checkSetting"></Input>
          <LabelForMainSetting>유튜브</LabelForMainSetting>
          <Input type="radio" name="checkSetting"></Input>
          <LabelForMainSetting>사진</LabelForMainSetting>
        </PhotoWrapper>
      </Container>
      <UploadButton>등록하기</UploadButton>
    </Wrapper>
  );
}

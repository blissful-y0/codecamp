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
} from "../write/write.style";

export default function WriteUI({ onChangeInput, onClickPost, flag }) {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Container>
        <WriterInfoWrapper>
          <IDContainer>
            <Label>작성자</Label>
            <InputWriterInfo
              type="text"
              name="writer"
              onChange={onChangeInput}
              placeholder="이름을 적어주세요."
            ></InputWriterInfo>
          </IDContainer>
          <PasswordContainer>
            <Label>비밀번호</Label>
            <InputWriterInfo
              type="text"
              name="password"
              onChange={onChangeInput}
              laceholder="비밀번호를 입력해주세요."
            ></InputWriterInfo>
          </PasswordContainer>
        </WriterInfoWrapper>
        <Label>제목</Label>
        <AddressAndLink
          name="title"
          type="text"
          onChange={onChangeInput}
          placeholder="제목을 작성해주세요"
        ></AddressAndLink>
        <Label>내용</Label>
        <Paragraph
          name="contents"
          type="text"
          onChange={onChangeInput}
          placeholder="내용을 작성해주세요."
        ></Paragraph>
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
      <UploadButton disabled={flag} onClick={onClickPost}>
        등록하기
      </UploadButton>
    </Wrapper>
  );
}

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
} from './write.style';
import Postcode from '../../commons/components/postcode/postcode.presenter';
import ImageUpload from '../../commons/components/imageUpload/photoUpload.presenter';
import WebEditor from '../../commons/components/webEditor/context.presenter';

export default function WriteUI({
  onChangeInput,
  onClickPost,
  flag,
  handleOpen,
  open,
  handleClose,
  setData,
  data,
  setUploadedFileArr,
  uploadedFileArr,
  setContext,
  context,
}) {
  return (
    <Wrapper>
      <Postcode handleClose={handleClose} open={open} setData={setData} />
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
              type="password"
              name="password"
              onChange={onChangeInput}
              placeholder="비밀번호를 입력해주세요."
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
        <WebEditor context={context} setContext={setContext} />
        <Label>주소</Label>
        <div>
          <Address
            placeholder="07250"
            value={data.boardAddress.zipcode}
            readOnly={true}
          ></Address>
          <BlackBox onClick={handleOpen}>우편번호 검색</BlackBox>
        </div>
        <AddressAndLink
          name="address"
          value={data.boardAddress.address}
          readOnly={true}
        ></AddressAndLink>
        <AddressAndLink></AddressAndLink>
        <Label>유투브</Label>
        <AddressAndLink
          name="youtubeUrl"
          onChange={onChangeInput}
          placeholder="링크를 복사해주세요."
        ></AddressAndLink>
        <Label>사진 첨부</Label>
        <PhotoWrapper>
          <ImageUpload
            setUploadedFileArr={setUploadedFileArr}
            uploadedFileArr={uploadedFileArr}
          />
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

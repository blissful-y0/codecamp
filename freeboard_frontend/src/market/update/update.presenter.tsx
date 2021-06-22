import {
  UIWrapper,
  Title,
  Label,
  Input,
  Wrapper,
  LabelWrapper,
  LocationWrapper,
  Map,
  GetLocationButton,
  GPSAddressWrapper,
  ImageWrapper,
  UploadButton,
  ErrorMessage,
  ErrorWrapper,
} from './update.style';
import ImageUpload from '../../commons/components/imageUpload/photoUpload.presenter';
import WebEditor from '../../commons/components/webEditor/context.presenter';

interface IProps {
  context: string;
  setContext: () => void;
  register: () => void;
  onSubmit: () => void;
  handleSubmit: () => void;
  errors: string;
  // name: string;
  // remarks: string;
  // contents: string;
  // price: number;
  // tags: [];
}

export default function WriteUI({
  register,
  onSubmit,
  handleSubmit,
  errors,
  setContext,
  context,
  // name,
  // remarks,
  // defaultContents,
  // price,
  // tags,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UIWrapper>
        <Wrapper>
          <Title>상품 등록하기</Title>
          <LabelWrapper>
            <Label>상품명</Label>
          </LabelWrapper>
          <Input
            name="name"
            ref={register}
            {...register('name', {required: true, maxLength: 20})}
          />
          <ErrorWrapper>
            <ErrorMessage>
              {errors.name?.type === 'required' && '상품명을 입력해 주세요.'}
            </ErrorMessage>
          </ErrorWrapper>
          <LabelWrapper>
            <Label>한줄요약</Label>
          </LabelWrapper>
          <Input
            name="remarks"
            ref={register}
            {...register('remarks', {required: true, maxLength: 20})}
          />
          <ErrorWrapper>
            <ErrorMessage>
              {errors.remark?.type === 'required' &&
                '한줄요약을 입력해 주세요.'}
            </ErrorMessage>
          </ErrorWrapper>
          <LabelWrapper>
            <Label>상품설명</Label>
          </LabelWrapper>
          <WebEditor context={context} setContext={setContext} />
          <LabelWrapper>
            <Label>판매가격</Label>
            <Input
              name="price"
              ref={register}
              type="number"
              {...register('price', {required: true, maxLength: 20})}
            />
          </LabelWrapper>
          <ErrorWrapper>
            <ErrorMessage>
              {errors.price?.type === 'required' && '가격을 입력해 주세요.'}
            </ErrorMessage>
          </ErrorWrapper>
          <LabelWrapper>
            <Label>태그입력</Label>
          </LabelWrapper>
          <Input
            name="tags"
            ref={register}
            {...register('tags', {required: true, maxLength: 20})}
          />
          <ErrorWrapper>
            <ErrorMessage>
              {errors.tags?.type === 'required' && '태그를 입력해 주세요.'}
            </ErrorMessage>
          </ErrorWrapper>
          <LabelWrapper>
            <Label>거래위치</Label>
          </LabelWrapper>
          <LocationWrapper>
            <Map />
            <GPSAddressWrapper>
              <GetLocationButton>현재 주소 사용하기</GetLocationButton>
              <Label style={{marginTop: '15px'}}>주소</Label>
              <Input style={{marginBottom: '5px'}} />
              <Input style={{marginBottom: '5px'}} />
            </GPSAddressWrapper>
          </LocationWrapper>
          <LabelWrapper>
            <Label>사진</Label>
            <ImageWrapper>{/* <ImageUpload /> */}</ImageWrapper>
          </LabelWrapper>
          <UploadButton type="submit">등록하기</UploadButton>
        </Wrapper>
      </UIWrapper>
    </form>
  );
}

import {
  Wrapper,
  NavigationBar,
  ProfilePhoto,
  WriterName,
  CreatedAt,
  WriterDateInfoWrapper,
  WriterDateInfoWrapper2,
  IconWrapper,
  Title,
  ContextsWrapper,
  GreyButton,
  GreyButtonWrapper,
  TotalWrapper,
  ProductWrapper,
  Remark,
  Price,
  Contexts,
  ContentsDetail,
  MapWrapper,
} from './read.style';
import {getDate} from '../../commons/libraries/utils';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Link from 'next/link';
import Slider from './slider/read.slider.presenter';
import Map from '../../commons/components/map/map';
import CommentWrite from '../reply/reply.container';

export default function MarketReadUI({fetchitem, onClickUpdate}) {
  return (
    <>
      <TotalWrapper>
        <Wrapper>
          <NavigationBar>
            <WriterDateInfoWrapper>
              <ProfilePhoto>
                <AccountCircleIcon
                  style={{color: '#BDBDBD', width: '47px', height: '47px'}}
                />
              </ProfilePhoto>
              <WriterDateInfoWrapper2>
                <WriterName>
                  {fetchitem?.fetchUseditem?.seller?.name}
                </WriterName>
                <CreatedAt>
                  DATE: {getDate(fetchitem?.fetchUseditem?.createdAt)}
                </CreatedAt>
              </WriterDateInfoWrapper2>
            </WriterDateInfoWrapper>
            <IconWrapper>
              <LinkIcon style={{fontSize: 35, color: '#FFD600'}}></LinkIcon>
              <LocationOnIcon
                style={{fontSize: 35, color: '#FFD600'}}
              ></LocationOnIcon>
            </IconWrapper>
          </NavigationBar>
          <ContextsWrapper>
            <ProductWrapper>
              <Remark>
                {fetchitem?.fetchUseditem?.remarks}
                <Title>
                  {fetchitem?.fetchUseditem?.name}
                  <Price>
                    {fetchitem?.fetchUseditem?.price.toLocaleString()}원
                  </Price>
                </Title>
              </Remark>
            </ProductWrapper>
            <Contexts>
              <Slider images={fetchitem?.fetchUseditem?.images} />
            </Contexts>
            <ContentsDetail
              dangerouslySetInnerHTML={{
                __html: fetchitem?.fetchUseditem?.contents,
              }}
            ></ContentsDetail>
            <MapWrapper>
              {
                // @ts-ignore
                <Map />
              }
            </MapWrapper>
          </ContextsWrapper>
        </Wrapper>
        <GreyButtonWrapper>
          <Link href="/market">
            <GreyButton>목록으로</GreyButton>
          </Link>
          <GreyButton onClick={onClickUpdate}>수정하기</GreyButton>
        </GreyButtonWrapper>
        <CommentWrite />
      </TotalWrapper>
    </>
  );
}

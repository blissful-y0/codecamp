import {
  ItemOnSales,
  ItemOnSalesWrapper,
  NavigationBar,
  PageWrapper,
  SearchButton,
  SearchWrapper,
  Wrapper,
  ItemListWrapper,
  ItemSumnail,
  ItemTitle,
  ItemInfoWrapper,
  ItemSubtitle,
  ItemHashTag,
  ProfileIcon,
  ItemTitleWrapper,
  ProfileWrapper,
  HeartIcon,
  ItemPrice,
  WriteBoardButton,
  ButtonWrapper,
} from './list.style';
import SearchUI from '../../commons/components/search/search.navigation.presenter';
import {getDate} from '../../commons/libraries/utils';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroller';

export default function MarketListUI({
  data,
  onChangeSearch,
  onClickTitle,
  hasMore,
  onLoadMore,
}) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <NavigationBar>
            <ItemOnSalesWrapper>
              <ItemOnSales>판매중상품</ItemOnSales>
            </ItemOnSalesWrapper>
            <SearchWrapper>
              <SearchUI onChangeSearch={onChangeSearch} />
              <SearchButton>검색</SearchButton>
            </SearchWrapper>
          </NavigationBar>
          <div style={{width: '100%', height: '800px', overflow: 'auto'}}>
            <InfiniteScroll
              pageStart={0}
              loadMore={onLoadMore}
              hasMore={hasMore}
              loader={<div> ...로딩중... </div>}
              useWindow={false}
            >
              {data?.fetchUseditems
                // ?.slice(0, data?.fetchUseditems.length)
                // .sort((a, b) => a.price - b.price)
                .map((data) => (
                  <ItemListWrapper
                    onClick={onClickTitle(data?._id)}
                    key={data._id}
                  >
                    <ItemSumnail image={data?.images[0]} />
                    <ItemInfoWrapper>
                      <ItemTitleWrapper>
                        <ItemTitle>
                          {data.name}
                          <ItemSubtitle>
                            {data.remarks}
                            <ItemHashTag>
                              {data.tags.map((data) => data)}
                              <ItemHashTag>
                                {getDate(data.createdAt)}
                              </ItemHashTag>
                            </ItemHashTag>
                          </ItemSubtitle>
                        </ItemTitle>
                      </ItemTitleWrapper>
                      <ProfileWrapper>
                        <ProfileIcon
                          style={{color: '#BDBDBD', marginRight: '5px'}}
                        />
                        {data?.seller?.name}
                        <HeartIcon
                          style={{
                            color: '#FFD600',
                            marginLeft: '20px',
                            marginRight: '5px',
                          }}
                        />
                        200
                      </ProfileWrapper>
                    </ItemInfoWrapper>
                    <ItemPrice>
                      <span style={{color: '#FFD600', marginRight: '6px'}}>
                        ₩
                      </span>
                      {data.price.toLocaleString()}원
                    </ItemPrice>
                  </ItemListWrapper>
                ))}
            </InfiniteScroll>
          </div>
          <ButtonWrapper>
            <Link href="/market/write">
              <WriteBoardButton>상품 등록하기</WriteBoardButton>
            </Link>
          </ButtonWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

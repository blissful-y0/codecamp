import {
  Checkbox,
  Writer,
  ListNumber,
  ListTitle,
  ListWrapper,
  Wrapper,
  NavigationBar,
  SelectButton,
  ButtonWrapper,
  PageIndex,
  Span,
} from './BoardList.styles';
import {getDate} from '../../commons/libraries/getDate';
import InfiniteScroll from 'react-infinite-scroller';

export default function RenderUI({
  data,
  onClickTitle,
  onClickPage,
  currentPage,
}) {
  return (
    <>
      <Wrapper>
        <NavigationBar>
          <Checkbox defaultChecked={false} type="checkbox"></Checkbox>
          <ListNumber>번호</ListNumber>
          <ListTitle>제목</ListTitle>
          <Writer>작성일</Writer>
        </NavigationBar>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            console.log('1234');
          }}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data.fetchBoards.map((data, index) => {
            return (
              <div key={data?.number}>
                <ListWrapper>
                  <Checkbox
                    defaultChecked={false}
                    name="checkBox"
                    type="checkbox"
                  ></Checkbox>
                  <ListNumber>{data?.number}</ListNumber>
                  <ListTitle onClick={onClickTitle(data?.number)}>
                    {data?.title}
                  </ListTitle>
                  <Writer>{getDate(data?.createdAt)}</Writer>
                  <button id={data?.number}>삭제</button>
                </ListWrapper>
              </div>
            );
          })}
        </InfiniteScroll>
        {/* {data.fetchBoards.map((data, index) => {
          return (
            <div key={data?.number}>
              <ListWrapper>
                <Checkbox
                  defaultChecked={false}
                  name="checkBox"
                  type="checkbox"
                ></Checkbox>
                <ListNumber>{data?.number}</ListNumber>
                <ListTitle onClick={onClickTitle(data?.number)}>
                  {data?.title}
                </ListTitle>
                <Writer>{getDate(data?.createdAt)}</Writer>
                <button id={data?.number}>삭제</button>
              </ListWrapper>
            </div>
          );
        })} */}
        <ButtonWrapper>
          <PageIndex>
            {new Array(10).fill(1).map((_, index) => (
              <Span
                id={String(index + 1)}
                onClick={onClickPage}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </Span>
            ))}
            {/* <Span> >> </Span> */}
          </PageIndex>
          <SelectButton>선택 삭제</SelectButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

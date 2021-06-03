import {getDate} from '../../commons/libraries/utils';
import {
  Writer,
  ListNumber,
  ListTitle,
  Wrapper,
  NavigationBar,
  CreatedAt,
  ListBar,
  BoardWriteButton,
  WriteButtonWrapper,
  Span,
  PageIndexWrapper,
  SearchBarWrapper,
  SearchButton,
  DatePickerAndSearchButtonWrapper,
  DatePickerWrapper,
} from './list.style';
import CreateIcon from '@material-ui/icons/Create';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {MouseEvent} from 'react';

interface IProps {
  data: any;
  onClickTitle: any;
  onClickWriteButton: any;
  onClickPage: any;
  currentPage: any;
  SearchBar: any;
  DatePicker: any;
  onClickNextPage: () => void;
  boardCount: any;
  nextPageCursor: any;
  onClickPrevPage: () => void;
}

export default function RenderUI({
  data,
  onClickTitle,
  onClickWriteButton,
  onClickPage,
  currentPage,
  SearchBar,
  DatePicker,
  onClickNextPage,
  boardCount,
  nextPageCursor,
  onClickPrevPage,
}: IProps) {
  return (
    <>
      <Wrapper>
        <SearchBarWrapper>
          <SearchBar />
          <DatePickerAndSearchButtonWrapper>
            <DatePickerWrapper>
              <DatePicker />
            </DatePickerWrapper>
            <SearchButton>검색하기</SearchButton>
          </DatePickerAndSearchButtonWrapper>
        </SearchBarWrapper>
        <NavigationBar>
          <ListNumber>번호</ListNumber>
          <ListTitle>제목</ListTitle>
          <Writer>작성자</Writer>
          <CreatedAt>작성일</CreatedAt>
        </NavigationBar>
        {data?.fetchBoards?.slice(0, 10).map((data, index) => (
          <div key={data._id}>
            <ListBar>
              <ListNumber>{index + 1}</ListNumber>
              <ListTitle onClick={onClickTitle(data._id)}>
                {data.title}
              </ListTitle>
              <Writer>{data.writer}</Writer>
              <CreatedAt>{getDate(data.createdAt)}</CreatedAt>
            </ListBar>
          </div>
        ))}
        <WriteButtonWrapper>
          <BoardWriteButton onClick={onClickWriteButton}>
            <CreateIcon />
            게시물 등록하기
          </BoardWriteButton>
        </WriteButtonWrapper>
        <PageIndexWrapper>
          <NavigateBeforeIcon onClick={onClickPrevPage} />
          {new Array(10)
            .fill(1)
            .filter(
              (_, index) =>
                index + 1 + nextPageCursor <
                Math.floor(boardCount?.fetchBoardsCount / 10)
            )
            .map((_, index) => (
              <Span
                key={String(index + 1 + nextPageCursor)}
                id={String(index + 1 + nextPageCursor)}
                onClick={onClickPage}
                isActive={currentPage === index + 1 + nextPageCursor}
              >
                {index + 1 + nextPageCursor}
              </Span>
            ))}
          <NavigateNextIcon onClick={onClickNextPage} />
        </PageIndexWrapper>
      </Wrapper>
    </>
  );
}

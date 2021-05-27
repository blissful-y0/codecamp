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
} from './list.style';
import CreateIcon from '@material-ui/icons/Create';

interface IProps {
  data: any;
  onClickTitle: any;
  onClickWriteButton: any;
}
export default function RenderUI({
  data,
  onClickTitle,
  onClickWriteButton,
}: IProps) {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}

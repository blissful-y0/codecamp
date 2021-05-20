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
} from "./BoardList.styles";
import { getDate } from "../../commons/libraries/getDate";



export default function RenderUI({data, onClickTitle}) {




  return (
  <>
    <Wrapper>
      <NavigationBar>
        <Checkbox defaultChecked={false} type="checkbox"></Checkbox>
        <ListNumber>번호</ListNumber>
        <ListTitle>제목</ListTitle>
        <Writer>작성일</Writer>
      </NavigationBar>
      {data.fetchBoards.map((data, index) => {
        console.log(index);
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
          </ListWrapper>
        </div>
      )})}
      <ButtonWrapper>
        <SelectButton>선택 삭제</SelectButton>
      </ButtonWrapper>
    </Wrapper>
  </>)
}
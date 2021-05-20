import { ChangeEvent } from "react";
import { getDate } from "../commons/libraries/utils";
import {
  Writer,
  ListNumber,
  ListTitle,
  Wrapper,
  NavigationBar,
  CreatedAt,
  ListBar,
} from "./list.style";

interface IProps {
  data: any;
  onClickTitle: any;
}
export default function RenderUI ({ data, onClickTitle }: IProps) {
  return (
    <>
      <Wrapper>
        <NavigationBar>
          <ListNumber>번호</ListNumber>
          <ListTitle>제목</ListTitle>
          <Writer>작성자</Writer>
          <CreatedAt>작성일</CreatedAt>
        </NavigationBar>
        {data?.fetchBoards
          ?.slice(0, 10)
          .map((data, index) => (
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
          ))
          .reverse()}
      </Wrapper>
    </>
  )
};

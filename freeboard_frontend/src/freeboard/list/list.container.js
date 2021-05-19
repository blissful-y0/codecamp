import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_LIST } from "../list/list.query";
import { getDate } from "../commons/libraries/utils";
import { useState } from "react";
import {
  Checkbox,
  Writer,
  ListNumber,
  ListTitle,
  ListWrapper,
  Wrapper,
  NavigationBar,
  CreatedAt,
  ListBar,
} from "../list/list.style";

export default function RenderListPage() {
  const router = useRouter();
  const { data, loading, error } = useQuery(FETCH_LIST);

  // const fetchListData = async () => {
  //   const { data, loading, error } = await queryBoardPage;
  // if (loading) {
  //   return "로딩 중입니다!";
  // }
  // if (error) {
  //   return "에러가 발생했습니다!";
  // }
  //   const result = data.fetchBoards;
  //   slicedData = result.slice(0, 10);
  //   console.log(slicedData);
  // };

  // data.fetchBoards.slice(0, 10).map(
  //   (data) => (
  //     (
  //       <div>
  //         <ListNumber>{data}</ListNumber>
  //         <ListTitle>제목</ListTitle>
  //         <Writer>작성자</Writer>
  //         <CreatedAt>작성일</CreatedAt>
  //       </div>
  //     ),
  //     console.log(data)
  //   )
  // );

  // console.log(getDate);

  // console.log(data?.fetchBoards[0]);

  const onClickTitle = (_id) => (event) => {
    router.push(`board/list/${_id}`);
  };

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
  );
}

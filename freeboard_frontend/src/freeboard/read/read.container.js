import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../read/read.query";
import BoardReadUI from "../read/read.presenter";

export default function QueryReadPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });

  const createdAt = new Date(data && [data.fetchBoard.createdAt]);
  const fullDate = `${createdAt.getFullYear()}-${
    createdAt.getMonth() + 1
  }-${createdAt.getDate()}`;

  return <BoardReadUI fullDate={fullDate} data={data} />;
}

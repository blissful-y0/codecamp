import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  Wrapper,
  NavigationBar,
  ProfilePhoto,
  WriterName,
  CreatedAt,
  WriterDateInfoWrapper,
  WriterDateInfoWrapper2,
  Icons,
  Link,
  IconWrapper,
  Title,
  Contexts,
  ContextsWrapper,
  Youtube,
  LikeDislikeWrapper,
  LikeButton,
  DislikeButton,
  ButtonWrapper,
  Label,
  GreyButton,
  GreyButtonWrapper,
} from "../../../../src/freeboard/read/read.style";
import QueryReadPage from "../../../../src/freeboard/read/read.container";

export default function BoardReadPage() {
  // const router = useRouter();
  // const FETCH_BOARD = gql`
  //   query fetchBoard($boardId: ID!) {
  //     fetchBoard(boardId: $boardId) {
  //       writer
  //       title
  //       contents
  //       createdAt
  //       likeCount
  //       dislikeCount
  //     }
  //   }
  // `;

  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: router.query._id,
  //   },
  // });

  // const createdAt = new Date(data && [data.fetchBoard.createdAt]);
  // const fullDate = `${createdAt.getFullYear()}-${
  //   createdAt.getMonth() + 1
  // }-${createdAt.getDate()}`;
  // console.log(createdAt);

  return (
    // <>
    //   <Wrapper>
    //     <NavigationBar>
    //       <WriterDateInfoWrapper>
    //         <ProfilePhoto></ProfilePhoto>
    //         <WriterDateInfoWrapper2>
    //           <WriterName>{data && data.fetchBoard.writer}</WriterName>
    //           <CreatedAt>{data && fullDate}</CreatedAt>
    //         </WriterDateInfoWrapper2>
    //       </WriterDateInfoWrapper>
    //       <IconWrapper>
    //         <Link style={{ backgroundImage: `url(/link.png)` }}></Link>
    //         <Icons style={{ backgroundImage: `url(/location.png)` }}></Icons>
    //       </IconWrapper>
    //     </NavigationBar>
    //     <Title>{data && data.fetchBoard.title}</Title>
    //     <ContextsWrapper>
    //       <Contexts>{data && data.fetchBoard.contents}</Contexts>
    //     </ContextsWrapper>
    //     <Youtube></Youtube>
    //     <LikeDislikeWrapper>
    //       <ButtonWrapper>
    //         <LikeButton src="/like.png"></LikeButton>
    //         <Label style={{ color: "#FFD600" }}>1920</Label>
    //       </ButtonWrapper>
    //       <ButtonWrapper>
    //         <DislikeButton src="/dislike.png"></DislikeButton>
    //         <Label style={{ color: "#828282" }}>1920</Label>
    //       </ButtonWrapper>
    //     </LikeDislikeWrapper>
    //   </Wrapper>
    //   <GreyButtonWrapper>
    //     {" "}
    //     <GreyButton>목록으로</GreyButton>
    //     <GreyButton>수정하기</GreyButton>
    //   </GreyButtonWrapper>
    // </>
    <QueryReadPage />
  );
}
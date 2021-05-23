import {gql} from '@apollo/client';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;

// export const UPDATE_BOARD = gql`
//   mutation {
//     updateBoard(
//       updateBoardInput: {youtubeUrl: ""}
//       password: "1234"
//       boardId: $boardId
//     ) {
//       _id
//       writer
//       title
//       contents
//       updatedAt
//       youtubeUrl
//     }
//   }
// `;

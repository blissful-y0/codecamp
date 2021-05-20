import {gql} from '@apollo/client';

// export const CREATED_BOARD = gql`
//   mutation createBoard(
//     $writer: String
//     $password: String
//     $title: String!
//     $contents: String!
//   ) {
//     createBoard(
//       createBoardInput: {
//         writer: $writer
//         title: $title
//         password: $password
//         contents: $contents
//       }
//     ) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

export const CREATED_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

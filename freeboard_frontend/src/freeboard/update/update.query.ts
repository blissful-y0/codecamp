import {gql} from '@apollo/client';

type UpdateBoardInput = {
  title?: String;
  contents?: String;
  youtubeUrl?: String;
};

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
      youtubeUrl
    }
  }
`;

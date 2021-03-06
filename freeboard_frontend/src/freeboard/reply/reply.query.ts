import {gql} from '@apollo/client';

export const FETCH_REPLY = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      writer
      contents
      _id
      createdAt
      rating
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateBoardComment(
    $boardCommentId: ID!
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      boardCommentId: $boardCommentId
    ) {
      writer
      contents
      rating
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteBoard($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

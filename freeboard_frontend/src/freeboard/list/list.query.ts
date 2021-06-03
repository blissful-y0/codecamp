import {gql} from '@apollo/client';

export const FETCH_LIST = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_BOARD_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

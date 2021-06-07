import {gql} from '@apollo/client';

export const FETCH_LIST = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const FETCH_BEST_BOARD = gql`
  query {
    fetchBoardsOfTheBest {
      writer
      title
      _id
      likeCount
      images
      createdAt
    }
  }
`;

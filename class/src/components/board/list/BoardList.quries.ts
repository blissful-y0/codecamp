import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int!) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int!) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

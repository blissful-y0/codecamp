import {gql} from '@apollo/client'


export const FETCH_REPLY = gql`query fetchBoardComments($boardId: ID!){
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
`
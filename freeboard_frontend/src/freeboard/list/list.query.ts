import { gql } from '@apollo/client'

export const FETCH_LIST = gql`
  query {
    fetchBoards {
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
`

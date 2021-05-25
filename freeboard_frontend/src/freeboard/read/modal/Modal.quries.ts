import {gql} from '@apollo/client'

export const UPDATE_BOARD = gql`
  mutation updateBoard($password: String, $boardId: ID!) {
    updateBoard(
      updateBoardInput: {youtubeUrl: ""}
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      updatedAt
      youtubeUrl
    }
  }
`

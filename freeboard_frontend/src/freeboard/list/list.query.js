import { gql } from "@apollo/client";

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
`;

// fetchBoards(
//   $_id: ID!
//   $writer: String
//   $title: String!
//   $contents: String!
//   $likeCount: Int!
//   $dislikeCount: Int!
//   $createdAt: DateTime!
//   $updatedAt: DateTime!
//   $deletedAt: DateTime
// )

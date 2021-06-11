import {gql} from '@apollo/client';

export const CREATE_MARKET_COMMENT = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      contents
      _id
      createdAt
      updatedAt
    }
  }
`;

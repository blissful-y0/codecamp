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

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query {
    fetchUseditemQuestionAnswers(
      useditemQuestionId: "60c9b6d5d3d082002a0fed57"
    ) {
      _id
      contents
      useditemQuestion {
        _id
      }
      user {
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
      updatedAt
    }
  }
`;

import {gql} from '@apollo/client';

export const CREATE_USED_BOARD = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

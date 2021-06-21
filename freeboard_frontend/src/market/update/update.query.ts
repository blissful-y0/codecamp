import {gql} from '@apollo/client';

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($ID: ID!) {
    fetchUseditem(useditemId: $ID) {
      name
      remarks
      contents
      price
      tags
      seller {
        name
      }
      createdAt
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $UpdateUseditemInput: UpdateUseditemInput!
    $ID: ID!
  ) {
    updateUseditem(UpdateUseditemInput: $UpdateUseditemInput, ID: $ID) {
      _id
      name
    }
  }
`;

import {gql} from '@apollo/client';

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query {
    fetchUseditemsISold {
      _id
      name
      price
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_POINT_OF_TRASACTION = gql`
  query {
    fetchPointTransactions {
      impUid
      amount
      balance
      createdAt
      status
    }
  }
`;

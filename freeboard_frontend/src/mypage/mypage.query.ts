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

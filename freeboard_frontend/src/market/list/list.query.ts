import {gql} from '@apollo/client';

export const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
      _id
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

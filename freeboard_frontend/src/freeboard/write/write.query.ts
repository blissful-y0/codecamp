import {gql} from '@apollo/client';

export const CREATED_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadFile($upload: Uplpad!) {
    uploadFile(file: $upload) {
      url
    }
  }
`;

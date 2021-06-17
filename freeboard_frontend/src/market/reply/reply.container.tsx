import {useMutation, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';
import {createContext} from 'react';
import {useState} from 'react';
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from '../../commons/types/generated/types';
import CommentUI from './reply.presenter';
import {CREATE_MARKET_COMMENT, FETCH_USED_ITEM_QUESTIONS} from './reply.query';

export type CommentContextType = {
  commentWriteUIOpen: boolean;
  setCommentWriteUIOpen: (_: boolean) => void;
};

export const CommentContext = createContext({
  commentWriteUIOpen: false,
  setCommentWriteUIOpen: (prev) => {
    !prev;
  },
});

export default function CommentForMarket() {
  const router = useRouter();
  const [commentLength, setCommentLength] = useState(0);
  const [contents, setContents] = useState('');
  const [createMarketComment] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_MARKET_COMMENT);
  const {
    data: replyData,
    loading,
    refetch,
  } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  if (loading) <></>;

  const [commentWriteUIOpen, setCommentWriteUIOpen] = useState(false);

  const onChangeInput = (event) => {
    setCommentLength(event.target.value.length);
    setContents(event.target.value);
  };

  const onClickUpload = async (event) => {
    try {
      const result = await createMarketComment({
        variables: {
          createUseditemQuestionInput: {
            contents: String(contents),
          },
          useditemId: String(router.query._id),
        },
      });
      setContents('');
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentContext.Provider
      value={{commentWriteUIOpen, setCommentWriteUIOpen}}
    >
      <CommentUI
        contents={contents}
        commentLength={commentLength}
        onChangeInput={onChangeInput}
        onClickUpload={onClickUpload}
        replyData={replyData}
      />
    </CommentContext.Provider>
  );
}

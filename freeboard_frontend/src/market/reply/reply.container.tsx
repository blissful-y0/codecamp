import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from '../../commons/types/generated/types';
import CommentUI from './reply.presenter';
import {CREATE_MARKET_COMMENT} from './reply.query';

export default function CommentForMarket() {
  const router = useRouter();
  const [commentLength, setCommentLength] = useState(0);
  const [contents, setContents] = useState('');
  const [createMarketComment] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_MARKET_COMMENT);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentUI
      commentLength={commentLength}
      onChangeInput={onChangeInput}
      onClickUpload={onClickUpload}
    />
  );
}

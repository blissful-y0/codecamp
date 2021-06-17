import {
  ReadCommentWrapper,
  UIWrapper,
  ReplyIcon,
  Wrapper,
  Input,
  BottomNavigation,
  UploadButton,
} from './replyWrite.style';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import {CREATE_USED_ITEM_QUESTION_ANSWER} from './reply.query';
import {useState} from 'react';
import {useMutation} from '@apollo/client';

export function ReplyWriteUI({replyId, handleClickOpen}) {
  const [contents, setContents] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(false);
  const [createUsedItemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeTextArea = (event) => {
    if (event.target.value.length > 0) {
      setFlag(true);
    }
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUsedItemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: replyId,
        },
      });
      console.log(result);
      handleClickOpen();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UIWrapper>
      <Wrapper>
        <ReplyIcon>
          <SubdirectoryArrowRightIcon style={{width: '30px', height: '30px'}} />
        </ReplyIcon>
        <ReadCommentWrapper>
          <Input value={contents} onChange={onChangeTextArea}></Input>
          <BottomNavigation>
            <UploadButton onClick={onClickSubmit}>답글등록</UploadButton>
          </BottomNavigation>
        </ReadCommentWrapper>
      </Wrapper>
    </UIWrapper>
  );
}

export default ReplyWriteUI;

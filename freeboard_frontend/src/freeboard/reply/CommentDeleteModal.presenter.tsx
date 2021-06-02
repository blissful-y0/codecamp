import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from '@emotion/styled';
import {ChangeEvent, useState} from 'react';
import {useMutation} from '@apollo/client';
import {DELETE_COMMENT} from './reply.query';
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from '../../commons/types/generated/types';

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 0px;
  border-bottom: 1px solid black;
`;

export default function FormDialog({data, handleDeleteModalToggle, refetch}) {
  const [deleteCommentMutation] =
    useMutation<IMutation, IMutationDeleteBoardCommentArgs>(DELETE_COMMENT);

  const [submittedPassword, setSubmittedPassword] =
    useState('비밀번호를 입력하세요.');

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmittedPassword(event.target.value);
  };

  const handleSendPassword = async () => {
    try {
      deleteCommentMutation({
        variables: {
          password: String(submittedPassword),
          boardCommentId: String(data._id),
        },
      });
      handleDeleteModalToggle();
      refetch();
    } catch (error) {
      alert('다시 입력하세요');
    }
  };

  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'비밀번호를 입력해 주세요.'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Input
            placeholder={submittedPassword}
            onChange={onChangePasswordInput}
            name="submiitedPassword"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteModalToggle} color="primary">
          취소하기
        </Button>
        <Button onClick={handleSendPassword} color="primary" autoFocus>
          보내기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

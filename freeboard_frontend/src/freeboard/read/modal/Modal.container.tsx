import React from 'react';
import ModalUI from './Modal.presenter';
import {ChangeEvent, useState} from 'react';
import {useRouter} from 'next/router';
import {UPDATE_BOARD} from '../modal/Modal.quries';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationUpdateBoardArgs,
} from '../../../commons/types/generated/types';

export default function FormDialog({handleClose}) {
  const router = useRouter();
  const [updateBoardMutation] =
    useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const [submittedPassword, setSubmittedPassword] =
    useState('비밀번호를 입력하세요.');

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmittedPassword(event.target.value);
  };

  const handleSendPassword = async () => {
    try {
      updateBoardMutation({
        variables: {
          updateBoardInput: {youtubeUrl: ''},
          password: String(submittedPassword),
          boardId: String(router.query._id),
        },
      });
      router.push(`${router.query._id}/update`);
    } catch (error) {
      alert('다시 입력하세요');
    }
  };

  return (
    <>
      <ModalUI
        handleClose={handleClose}
        onChangePasswordInput={onChangePasswordInput}
        submittedPassword={submittedPassword}
        handleSendPassword={handleSendPassword}
      />
    </>
  );
}

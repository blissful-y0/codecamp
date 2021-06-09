import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from './query';
import Dialog from '@material-ui/core/Dialog';
import {
  DialogWrapper,
  Title,
  Wrapper,
  SignInForm,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from './style';
import {useState} from 'react';
import {signUpValidation} from '../../../../libraries/utils';

interface IFormInput {
  email: String;
  name: String;
  password: String;
  passwordCheck: String;
}

export default function SignIn({handleSignInClose}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormInput>({
    resolver: yupResolver(signUpValidation),
    // mode: 'onBlur',
  });
  const [createUser] = useMutation(CREATE_USER);
  const [validateMessage, setValidateMessage] = useState('');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    event.preventDefault();
    try {
      let userData = {
        email: data.email,
        name: data.name,
        password: data.password,
      };

      const result = await createUser({
        variables: {
          createUserInput: userData,
        },
      });

      console.log(result);
      handleSignInClose();
      alert('가입에 성공했습니다!');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Dialog onClose={handleSignInClose} open={true}>
      <Wrapper>
        <DialogWrapper>
          <Title>회원가입</Title>
          <SignInForm onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">이메일</Label>
            <Input {...register('email')} />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
            <Label htmlFor="name">이름</Label>
            <Input {...register('name')} />
            <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>
            <Label htmlFor="password">비밀번호</Label>
            <Input {...register('password')} />
            <ErrorMessage>
              {errors.password && errors.password.message}
            </ErrorMessage>
            <Label htmlFor="passwordCheck">비밀번호 확인</Label>
            <Input {...register('passwordCheck')} />
            <ErrorMessage>
              {errors.passwordCheck && errors.passwordCheck.message}
            </ErrorMessage>
            <SubmitButton type="submit">회원가입</SubmitButton>
            <ErrorMessage></ErrorMessage>
          </SignInForm>
        </DialogWrapper>
      </Wrapper>
    </Dialog>
  );
}

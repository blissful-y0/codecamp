import * as yup from 'yup';

export const getDate = (date) => {
  if (!date || typeof date !== 'string') return '';

  const value = new Date(date);
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const validateImage = (image) => {
  const receivedFiles = [];
  Object.values(image).map((data) => {
    receivedFiles.push(data);
  });

  if (receivedFiles === []) {
    alert('이미지가 없습니다.');
    return false;
  }
  if (receivedFiles.length > 3) {
    alert('파일은 3개까지 업로드할 수 있습니다.');
    return false;
  }
  const testType = receivedFiles.every((currentValue) => {
    if (!currentValue.type.includes('png', 'jpg')) {
      alert('업로드된 파일의 확장자가 png 또는 jpg가 아닙니다.');
      return false;
    }
    return true;
  });
  if (!testType) return false;

  const testSize = receivedFiles.every((currentValue) => {
    if (currentValue.size > 5 * 1024 * 1024) {
      alert('업로드된 파일이 너무 큽니다. (5MB 제한)');
      return false;
    }
    return true;
  });
  if (!testSize) return false;

  return true;
};

export const getStorageUrl = (url) => {
  return `http://storage.cloud.google.com/` + url;
};

export const signUpValidation = yup.object({
  email: yup
    .string()
    .required('아이디를 입력해주세요.')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      '이메일 형식에 맞지 않습니다.'
    ),
  name: yup
    .string()
    .required('닉네임을 입력해주세요.')
    .max(15, '닉네임은 15자리 이하여야 합니다.')
    .min(2, '닉네임은 2자리 이상이어야 합니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .max(30, '비밀번호는 30자리 이하여야 합니다.')
    .min(4, '비밀번호는 4자리 이상이어야 합니다.')
    .matches(/^[a-zA-Z0-9]*$/i),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .matches(/^[a-zA-Z0-9]*$/i),
});

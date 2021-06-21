import {validateImage} from '../../src/commons/libraries/validations';
import {getStorageUrl} from '../../src/commons/libraries/utils';
import {gql, useMutation} from '@apollo/client';
import {useRef, useState} from 'react';
import LazyLoad from 'react-lazy-load';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Image2page = () => {
  const [fileUrl, setFileUrl] = useState<string>('');
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const uploadButtonRef = useRef<HTMLInputElement>();

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    if (!validateImage(file)) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setFileUrl(String(event.target.result));
    };

    // try {
    //   const {data: image} = await uploadFile({variables: {file}});
    //   setFileUrl(getStorageUrl(image.uploadFile.url)); // state에 저장.
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const onClickUpload = () => {
    uploadButtonRef.current.click();
  };

  return (
    <>
      <button onClick={onClickUpload}>업로드</button>
      <input
        ref={uploadButtonRef}
        style={{display: 'none'}}
        type="file"
        onChange={onChangeFile}
      />
      <LazyLoad>
        <img src={fileUrl} height={300} width={300} />
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
      <LazyLoad>
        <img src={fileUrl} height={300} width={300} />
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
      <LazyLoad>
        <img src={fileUrl} height={300} width={300} />
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
    </>
  );
};

export default Image2page;

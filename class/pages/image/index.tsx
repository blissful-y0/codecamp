import {useState, useRef} from 'react';
import {useMutation, gql} from '@apollo/client';
import {validateImage} from '../../src/commons/libraries/validations';

const ImagePage = () => {
  const [myImage, setMyImage] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState([]);

  const UPLOAD_FILE = gql`
    mutation uploadFile($upload: Upload!) {
      uploadFile(file: $upload) {
        url
      }
    }
  `;

  const [uploadFileMutation] = useMutation(UPLOAD_FILE);

  const onChangeFile = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(event.target.files[0]);

    if (!validateImage(uploadedFile)) return;

    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = (event) => {
      setMyImage(String(event.target.result));
    };
  };

  const onClickImage = () => {
    fileRef.current.click();
  };

  const onClickSubmitImage = async () => {
    const result = await Promise.all(
      new Array(5).fill(null).map(() => {
        uploadFileMutation({variables: {upload: file}});
      })
    );
  };

  return (
    <>
      <div>
        <button onClick={onClickImage}>이미지 업로드 버튼</button>
        <input
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
          style={{display: 'none'}}
        />
        <div>
          <img src={myImage} style={{maxWidth: '300px', maxHeight: '300px'}} />
        </div>
        <button onClick={onClickSubmitImage}>서버에 파일 전송하기</button>
      </div>
    </>
  );
};

export default ImagePage;

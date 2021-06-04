import {validateImage} from '../../commons/libraries/utils';
import {UPLOAD_IMAGE} from './write.query';
import {PhotoAttach, Image} from './write.style';
import {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';

export default function PhotoUploadUI({setFile}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef(null);
  const [images, setImages] = useState([]);
  const [uploadedFileArr, setUploadedFileArr] = useState([]);

  const onChangeFile = (event) => {
    let uploadedFile = event.target.files;
    등록이라면 && setUploadedFileArr(uploadedFile);

    if (!validateImage(uploadedFile)) return;

    let uploadedFileArray = [];
    for (const element of uploadedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (event) => {
        uploadedFileArray.push(event.target.result);
        if (uploadedFile.length === uploadedFileArray.length) {
          setImages(uploadedFileArray);
          uploadedFile = [];
          uploadedFileArray = [];
        }
      };
    }
  };

  const onClickImage = () => {
    fileRef.current.click();
  };

  const onChangeImage = (event) => {
    let newArr = [...images];
    let newfileArr = [...uploadedFileArr];
    console.log('newfileArr', newfileArr);
    let output = newArr.indexOf(event.target.id);
    newArr[output] = '';
    newfileArr[output] = '';
    setFile(newfileArr);
    setImages(newArr);
  };

  return (
    <>
      <input
        ref={fileRef}
        onChange={onChangeFile}
        style={{display: 'none'}}
        multiple
        type="file"
      />
      {new Array(3).fill(1).map((_, index) => (
        <PhotoAttach onClick={onClickImage} key={index} />
      ))}
      <div
        style={{
          display: 'flex',
          marginLeft: '-330px',
          // border: '1px solid black',
        }}
        ref={imageRef}
      >
        {images
          .filter((data) => (data ? true : false))
          .map((data) => (
            <Image
              id={data}
              key={data}
              onClick={onChangeImage}
              src={data}
            ></Image>
          ))}
      </div>
    </>
  );
}

import {validateImage} from '../../commons/libraries/utils';
import {UPLOAD_IMAGE} from './write.query';
import {PhotoAttach} from './write.style';
import {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';

export default function PhotoUploadUI({}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef(null);
  const [images, setImages] = useState([]);
  const Image = styled.img`
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    margin: 20px;
    :hover {
      border: 3px solid black;
    }
  `;

  const onChangeFile = (event) => {
    let uploadedFile = event.target.files;

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

  const onClickImage = (event) => {
    let newArr = [...images];
    let output = newArr.indexOf(event.target.id);
    newArr[output] = '';
    setImages(newArr);
  };

  return (
    <>
      <input ref={fileRef} onChange={onChangeFile} multiple type="file" />
      <span>
        {new Array(3).fill(1).map((_, index) => (
          <PhotoAttach key={index} />
        ))}
      </span>
      <div ref={imageRef}>
        {images
          .filter((data) => (data ? true : false))
          .map((data, index) => (
            <Image
              id={data}
              key={data}
              onClick={onClickImage}
              src={data}
            ></Image>
          ))}
      </div>
    </>
  );
}

import {validateImage} from '../../commons/libraries/utils';
import {UPLOAD_IMAGE} from './write.query';
import {PhotoAttach} from './write.style';
import {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';

export default function PhotoUploadUI({}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState(null);
  const Image = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin: 20px;
    :hover {
      border: 3px solid black;
    }
  `;

  const onChangeFile = (event) => {
    const uploadedFile = event.target.files;

    if (!validateImage(uploadedFile)) return;

    const uploadedFileArray = [];
    for (const element of uploadedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (event) => {
        uploadedFileArray.push(event.target.result);
        if (uploadedFile.length === uploadedFileArray.length) {
          setImages(uploadedFileArray);
        }
      };
    }
  };

  return (
    <>
      <input ref={fileRef} onChange={onChangeFile} multiple type="file" />
      <span>
        {new Array(3).fill(1).map((_, index) => (
          <PhotoAttach key={index} />
        ))}
      </span>
      {new Array(images?.length).fill(1).map((_, index) => (
        <Image src={images?.[index]}></Image>
      ))}
    </>
  );
}

import {useRouter} from 'next/router';
import {getStorageUrl} from '../../commons/libraries/utils';
import {useState} from 'react';
import {CREATED_BOARD, UPLOAD_IMAGE} from './write.query';
import WriteUI from './write.presenter';
import {useMutation} from '@apollo/client';
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from '../../commons/types/generated/types';

export default function MutationFreeboard() {
  const router = useRouter();
  const [flag, setFlag] = useState(true);
  const [open, setOpen] = useState(false);
  const [uploadedFileArr, setUploadedFileArr] = useState([]);
  const [data, setData] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    // address: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [uploadImage] =
    useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_IMAGE);
  const [createBoardMutation] =
    useMutation<IMutation, IMutationCreateBoardArgs>(CREATED_BOARD);

  async function onClickPost() {
    try {
      let fileArr = [...uploadedFileArr];
      const uploadfile = await Promise.all(
        fileArr.map((data) =>
          uploadImage({
            variables: {
              file: data,
            },
          })
        )
      );

      const result = await createBoardMutation({
        variables: {
          createBoardInput: {
            ...data,
            images: uploadfile.map((result) =>
              getStorageUrl(result.data.uploadFile.url)
            ),
          },
        },
      });
      alert('게시물이 등록되었습니다.');
      const value = result.data.createBoard._id;
      router.push(`list/${value}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const onChangeInput = (event) => {
    const userData = {...data, [event.target.name]: event.target.value};
    setData(userData);
    if (
      userData.writer &&
      userData.password &&
      userData.title &&
      userData.contents
    ) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <WriteUI
        onClickPost={onClickPost}
        onChangeInput={onChangeInput}
        flag={flag}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        setData={setData}
        data={data}
        setUploadedFileArr={setUploadedFileArr}
        uploadedFileArr={uploadedFileArr}
      />
    </>
  );
}

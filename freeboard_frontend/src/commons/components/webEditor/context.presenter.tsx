import {useState} from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

function WebEditor({context, setContext}) {
  const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

  const onChangeInput = (context: any) => {
    console.log(context);
  };

  return (
    <div style={{width: '100%'}}>
      <ReactQuill
        style={{width: '100%', height: '600px', marginBottom: '55px'}}
        value={context}
        onChange={onChangeInput}
      />
    </div>
  );
}

export default WebEditor;

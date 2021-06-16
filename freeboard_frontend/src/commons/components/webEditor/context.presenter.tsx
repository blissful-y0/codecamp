import {useContext, useState} from 'react';
import 'react-quill/dist/quill.snow.css';

function WebEditor({context, setContext}) {
  let ReactQuill =
    typeof window === 'object' ? require('react-quill') : () => false;

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{header: [1, 2, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
      ['link', 'image'],
      [{align: []}, {color: []}, {background: []}], // dropdown with defaults from theme
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  const [value, setValue] = useState('');

  const onChange = (value) => {
    setContext(value);
  };

  // console.log(value);

  return (
    <div style={{width: '100%', marginBottom: '20px'}}>
      <ReactQuill
        style={{width: '100%', height: '600px', marginBottom: '55px'}}
        modules={modules}
        formats={formats}
        value={context || ''}
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
      />
    </div>
  );
}

export default WebEditor;

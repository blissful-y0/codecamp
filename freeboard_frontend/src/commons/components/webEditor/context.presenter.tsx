import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

function WebEditor({context, setContext}) {
  // let ReactQuill =
  //   typeof window === 'object' ? require('react-quill') : () => false;

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

  const onChange = (value) => {
    setContext(value);
  };

  return (
    <div style={{width: '100%', marginBottom: '20px'}}>
      <ReactQuill
        style={{width: '100%', height: '600px', marginBottom: '55px'}}
        value={context || ''}
        modules={modules}
        formats={formats}
        theme="snow"
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
      />
    </div>
  );
}

export default WebEditor;

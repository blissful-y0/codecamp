import axios from 'axios';
import {useState} from 'react';

export default function OpenAPIPage() {
  const [state, setState] = useState('');

  const getDogs = async () => {
    const result = await axios.get('https://dog.ceo/api/breeds/image/random');
    setState(result.data.message);
  };

  return (
    <>
      <div>
        <img src={state} />
      </div>
      <button onClick={getDogs}>불러오기</button>
    </>
  );
}

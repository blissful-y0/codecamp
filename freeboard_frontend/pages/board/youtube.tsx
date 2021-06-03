import {useRef, useEffect, useState} from 'react';

export default function hahahaha() {
  const [temp2, setTemp2] = useState(null);
  const temp = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTemp2(temp.current.childNodes);
  }, []);

  // console.log(temp2);
  // temp?.

  return (
    <div ref={temp}>
      <input type="file" />
      <input type="file" />
      <input type="file" />
    </div>
  );
}

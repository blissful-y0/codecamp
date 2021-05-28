import QueryUI from './Query.presenter';
import {useMutation, gql} from '@apollo/client';
import {useState, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {
  IMutation,
  IMutationCreateProfileArgs,
} from '../../commons/types/generated/types';

export default function Query() {
  const CREATE_PROFILE = gql`
    mutation VariableType($name: String, $age: Int, $school: String) {
      createProfile(name: $name, age: $age, school: $school) {
        message
      }
    }
  `;

  const [testState, setTestState] = useState();
  const [ccc, setCcc] = useState(123);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, [ccc]);

  console.log('1111');

  const handleChangeCCC = () => {
    setCcc(456);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const [data, setData] = useState<{[key: string]: number | string}>({
    name: '',
    age: 0,
    school: '',
  });

  // const [age, setAge] = useState("");

  const [createProfileMutation] =
    useMutation<IMutation, IMutationCreateProfileArgs>(CREATE_PROFILE);

  const onClickButton = async () => {
    try {
      const result = await createProfileMutation({
        variables: {...data, age: Number(data.age)},
      });
      alert(result.data.createProfile.message);
      router.push(`query/${data.name}`);
    } catch (error) {
      alert(error);
    }
  };

  const onChnageInput = (event) => {
    const userData = {
      ...data,
      [event.target.name]: event.target.value,
    };
    setData(userData);
  };
  return (
    <>
      <QueryUI
        onChnageInput={onChnageInput}
        onClickButton={onClickButton}
        inputRef={inputRef}
        handleChangeCcc={handleChangeCCC}
      />
    </>
  );
}

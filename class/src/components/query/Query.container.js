import QueryUI from "./Query.presenter";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Query() {
  const CREATE_PROFILE = gql`
    mutation VariableType($name: String, $age: Int, $school: String) {
      createProfile(name: $name, age: $age, school: $school) {
        message
      }
    }
  `;

  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    age: 0,
    school: "",
  });

  // const [age, setAge] = useState("");

  const [createProfileMutation] = useMutation(CREATE_PROFILE);

  const onClickButton = async () => {
    try {
      const result = await createProfileMutation({
        variables: { ...data, age: Number(data.age) },
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
      <QueryUI onChnageInput={onChnageInput} onClickButton={onClickButton} />
    </>
  );
}

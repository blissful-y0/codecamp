import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import Query from "../../src/components/query/Query.container";

export default function ProfilePage() {
  // const CREATE_PROFILE = gql`
  //   mutation VariableType($name: String, $age: Int, $school: String) {
  //     createProfile(name: $name, age: $age, school: $school) {
  //       message
  //     }
  //   }
  // `;

  // const router = useRouter();

  // const [data, setData] = useState({
  //   name: "",
  //   age: 0,
  //   school: "",
  // });

  // // const [age, setAge] = useState("");

  // const [createProfileMutation] = useMutation(CREATE_PROFILE);

  // const onClickButton = async () => {
  //   try {
  //     const result = await createProfileMutation({
  //       variables: { ...data, age: Number(data.age) },
  //     });
  //     alert(result.data.createProfile.message);
  //     router.push(`query/${data.name}`);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // const onChnageInput = (event) => {
  //   const userData = {
  //     ...data,
  //     [event.target.name]: event.target.value,
  //   };
  //   setData(userData);
  // };

  // // const onChangeAge = (event) => {
  // //   const ageData = event.target.value;
  // //   const numberConvert = Number(ageData);
  // //   console.log(typeof numberConvert);
  // //   setAge(numberConvert);
  // // };

  return (
    <>
      {/* <div>
        <span>이름: </span>
        <input name="name" type="text" onChange={onChnageInput}></input>
        <br />
        <span>나이: </span>
        <input name="age" type="number" onChange={onChnageInput}></input>
        <br />
        <span>학교: </span>
        <input name="school" type="text" onChange={onChnageInput}></input>
        <br />
        <button onClick={onClickButton}>프로필 등록하기</button>
      </div> */}
      <Query />
    </>
  );
}

import {RegisterButton} from './Query.style';

export default function QueryUI({onChnageInput, onClickButton}) {
  return (
    <>
      <div>
        <span>이름: </span>
        <input name="name" type="text" onChange={onChnageInput}></input>
        <br />
        <span>나이: </span>
        <input name="age" type="number" onChange={onChnageInput}></input>
        <br />
        <span>학교: </span>
        <input name="school" type="text" onChange={onChnageInput}></input>
        <br />
        <RegisterButton onClick={onClickButton} aaa={true}>
          프로필 등록하기
        </RegisterButton>
      </div>
    </>
  );
}

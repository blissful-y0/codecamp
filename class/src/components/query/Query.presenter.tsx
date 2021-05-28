import {RegisterButton} from './Query.style';

export default function QueryUI({
  inputRef,
  onChnageInput,
  onClickButton,
  handleChangeCcc,
}) {
  return (
    <>
      <div>
        <span style={{fontFamily: 'scifibit'}}>Name: </span>
        <input
          name="name"
          type="text"
          ref={inputRef}
          onChange={onChnageInput}
        ></input>
        <br />
        <span style={{fontFamily: 'scifibit'}}>Age: </span>
        <input name="age" type="number" onChange={onChnageInput}></input>
        <br />
        <span style={{fontFamily: 'scifibit'}}>School: </span>
        <input name="school" type="text" onChange={onChnageInput}></input>
        <br />
        <button onClick={handleChangeCcc}>hello</button>
        <RegisterButton onClick={onClickButton} aaa={true}>
          프로필 등록하기
        </RegisterButton>
      </div>
    </>
  );
}

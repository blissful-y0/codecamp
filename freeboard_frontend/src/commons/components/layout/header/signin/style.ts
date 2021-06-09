import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 424px;
  height: 686px;
  background-image: url('/loginbackground.png');
  background-size: 424px 686px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.1);
  margin: 30px;
`;

export const Title = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 14px;
  color: white;
  line-height: 24px;
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 350px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  color: #ffffff;
  padding: 10px;
  outline: none;
  margin-bottom: 10px;

  ::placeholder {
    color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  width: 350px;
  height: 45px;
  background-color: #4f4f4f;
  border: 0px;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  text-align: left;
  height: 20px;
  font-size: 12px;
  color: red;
  margin-left: 10px;
`;

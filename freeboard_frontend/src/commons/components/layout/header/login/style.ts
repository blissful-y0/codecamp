import styled from '@emotion/styled';

export const DialogWrapper = styled.div`
  width: 424px;
  height: 686px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 424px;
  height: 686px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/loginbackground.png');
  background-size: 424px 686px;
`;

export const Logo = styled.img`
  width: 236px;
  height: 36px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const Input = styled.input`
  width: 384px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  color: #ffffff;
  padding: 10px;
  outline: none;

  ::placeholder {
    color: #ffffff;
  }
`;

export const LoginStatus = styled.div`
  width: 100%;
  height: 5px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 7px;
`;

export const LoginButton = styled.button`
  width: 384px;
  height: 50px;
  background: rgba(50, 50, 50, 0.7);
  border-radius: 16px;
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IDPasswordSigninWrapper = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-top: 1px solid #ffffff;
  padding-top: 20px;
  margin-top: 10px;
`;

export const SignInButton = styled.button`
  font-size: 14px;
  line-height: 20px;
  color: white;
  background-color: transparent;
  border: none;
`;

export const FindIDButton = styled.button`
  font-size: 14px;
  line-height: 20px;
  color: white;
  background-color: transparent;
  border: none;
`;

export const FindPasswordButton = styled.button`
  font-size: 14px;
  line-height: 20px;
  color: white;
  background-color: transparent;
  border: none;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  text-align: center;
  height: 10px;
  font-size: 12px;
  color: red;
`;
